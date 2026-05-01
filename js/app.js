// ============================================================
// app.js — Genel fonksiyonlar, navigasyon, auth
// ============================================================

// Demo/gösterim tarihi — tüm modüllerde kullanılan ortak referans tarihi
const DEMO_TODAY = new Date('2026-05-01');

// Oturum yönetimi
const Auth = {
  currentUser: null,
  role: null, // 'personnel' | 'admin'

  login(role, personnelId) {
    this.role = role;
    if (role === 'personnel' && personnelId) {
      this.currentUser = PERSONNEL.find(p => p.id === parseInt(personnelId));
    } else if (role === 'admin') {
      this.currentUser = { name: 'Yönetici', role: 'admin', avatar: 'YN' };
    }
    sessionStorage.setItem('eliar_role', role);
    if (personnelId) sessionStorage.setItem('eliar_user', personnelId);
  },

  logout() {
    this.currentUser = null;
    this.role = null;
    sessionStorage.removeItem('eliar_role');
    sessionStorage.removeItem('eliar_user');
    window.location.href = 'index.html';
  },

  checkAuth() {
    const role = sessionStorage.getItem('eliar_role');
    const userId = sessionStorage.getItem('eliar_user');
    if (!role) {
      window.location.href = 'index.html';
      return false;
    }
    this.role = role;
    if (role === 'personnel' && userId) {
      this.currentUser = PERSONNEL.find(p => p.id === parseInt(userId));
    } else if (role === 'admin') {
      this.currentUser = { name: 'Yönetici', role: 'admin', avatar: 'YN' };
    }
    return true;
  }
};

// Navigasyon yönetimi
const Nav = {
  current: null,

  init(defaultSection) {
    this.initialized = new Set();
    this.current = defaultSection;
    this.show(defaultSection);

    // Sidebar linkleri
    document.querySelectorAll('[data-nav]').forEach(link => {
      link.addEventListener('click', e => {
        e.preventDefault();
        const section = link.getAttribute('data-nav');
        Nav.show(section);
        // Mobil sidebar kapat
        const sidebar = document.getElementById('sidebar');
        if (sidebar && window.innerWidth < 768) {
          sidebar.classList.add('-translate-x-full');
        }
      });
    });
  },

  show(section) {
    // Tüm section'ları gizle
    document.querySelectorAll('.section-panel').forEach(el => {
      el.classList.add('hidden');
    });
    // Hedef section'ı göster
    const target = document.getElementById('section-' + section);
    if (target) {
      target.classList.remove('hidden');
      // Lazy init — sadece ilk ziyarette çalışır
      const initName = 'init_' + section.replace(/-/g, '_');
      if (!this.initialized.has(section) && typeof window[initName] === 'function') {
        window[initName]();
        this.initialized.add(section);
      }
    }
    // Aktif nav item
    document.querySelectorAll('[data-nav]').forEach(link => {
      link.classList.remove('bg-blue-700', 'text-white', 'font-semibold');
      link.classList.add('text-blue-100', 'hover:bg-blue-600');
      if (link.getAttribute('data-nav') === section) {
        link.classList.add('bg-blue-700', 'text-white', 'font-semibold');
        link.classList.remove('text-blue-100', 'hover:bg-blue-600');
      }
    });
    this.current = section;
  }
};

// Yardımcı fonksiyonlar
function formatCurrency(n) {
  return new Intl.NumberFormat('tr-TR').format(n) + ' ₺';
}

function escapeHtml(str) {
  if (!str) return '';
  return str.toString()
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function getStatusBadge(status) {
  const map = {
    'devam': '<span class="px-2 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-700">🔵 Devam Ediyor</span>',
    'tamamlandi': '<span class="px-2 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-700">🟢 Tamamlandı</span>',
    'planlanan': '<span class="px-2 py-0.5 rounded-full text-xs font-medium bg-slate-100 text-slate-600">⚪ Planlanan</span>',
    'riskli': '<span class="px-2 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-700">🔴 Riskli</span>'
  };
  return map[status] || status;
}

function getRoleBadge(roleLevel) {
  if (roleLevel === 'lead') return '<span class="px-2 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-700">⭐ Takım Lideri</span>';
  return '';
}

function getProgressRing(pct, color) {
  const c = color || '#3b82f6';
  const gray = '#e5e7eb';
  return `<div class="progress-ring" style="background: conic-gradient(${c} 0% ${pct}%, ${gray} ${pct}% 100%);" title="${pct}% tamamlandı">
    <span>${pct}%</span>
  </div>`;
}

function getAvatarGroup(memberIds, maxShow) {
  const max = maxShow || 3;
  const members = memberIds.map(id => PERSONNEL.find(p => p.id === id)).filter(Boolean);
  const shown = members.slice(0, max);
  const extra = members.length - max;
  const colors = ['bg-blue-500','bg-purple-500','bg-emerald-500','bg-amber-500','bg-red-500','bg-cyan-500','bg-indigo-500','bg-pink-500'];
  const avatarItems = shown.map((m, i) => {
    const cls = `w-7 h-7 rounded-full ${colors[i % colors.length]} text-white text-xs flex items-center justify-center border-2 border-white font-bold flex-shrink-0`;
    return `<div class="${cls}" title="${escapeHtml(m.name)}">${escapeHtml(m.avatar.slice(0, 2))}</div>`;
  }).join('');
  const extraBadge = extra > 0
    ? `<div class="w-7 h-7 rounded-full bg-gray-400 text-white text-xs flex items-center justify-center border-2 border-white font-bold flex-shrink-0">+${extra}</div>`
    : '';
  return `<div class="flex -space-x-2">${avatarItems}${extraBadge}</div>`;
}

function getSeverityBadge(severity) {
  const map = {
    'yüksek': '<span class="px-2 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">🔴 Yüksek</span>',
    'orta': '<span class="px-2 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">🟡 Orta</span>',
    'düşük': '<span class="px-2 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">🟢 Düşük</span>'
  };
  return map[severity] || severity;
}

function getSupplyStatusBadge(status) {
  const map = {
    'stokta': '<span class="px-2 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">✅ Stokta</span>',
    'siparis': '<span class="px-2 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">📦 Sipariş Verildi</span>',
    'uretimde': '<span class="px-2 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">🏭 Üretimde</span>',
    'gumrukte': '<span class="px-2 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">🛃 Gümrükte</span>',
    'beklemede': '<span class="px-2 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">⏳ Beklemede</span>',
    'alternatif': '<span class="px-2 py-0.5 rounded-full text-xs font-medium bg-orange-100 text-orange-800">🔍 Alternatif Aranıyor</span>',
    'onay': '<span class="px-2 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">✋ Onay Bekliyor</span>'
  };
  return map[status] || status;
}

function getCategoryBadge(cat) {
  const map = {
    'proje': '<span class="px-2 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-700">📋 Proje</span>',
    'plan': '<span class="px-2 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-700">📅 Plan</span>',
    'bilgi': '<span class="px-2 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-700">💡 Bilgi</span>',
    'risk': '<span class="px-2 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-700">⚠️ Risk</span>'
  };
  return map[cat] || cat;
}

function getFileIcon(type) {
  const map = {
    'pdf': '📕',
    'xlsx': '📗',
    'docx': '📘',
    'step': '🔩',
    'png': '🖼️',
    'md': '📝'
  };
  return map[type] || '📄';
}

// Modal
const Modal = {
  show(title, content) {
    document.getElementById('modal-title').textContent = title;
    document.getElementById('modal-content').innerHTML = content;
    document.getElementById('modal').classList.remove('hidden');
  },
  hide() {
    document.getElementById('modal').classList.add('hidden');
  }
};

// Tıklanabilir personel linki
function clickablePerson(personId, name) {
  const id = parseInt(personId, 10);
  if (!id) return escapeHtml(name);
  return `<a href="#" data-modal-person-id="${id}" class="text-blue-600 hover:text-blue-800 hover:underline font-medium">${escapeHtml(name)}</a>`;
}

// Tıklanabilir proje linki
function clickableProject(projectId, name) {
  const id = parseInt(projectId, 10);
  if (!id) return escapeHtml(name);
  return `<a href="#" data-modal-project-id="${id}" class="text-blue-600 hover:text-blue-800 hover:underline font-medium">${escapeHtml(name)}</a>`;
}

// Personel detay modal
function showPersonDetail(personId) {
  const person = PERSONNEL.find(p => p.id === personId);
  if (!person) return;
  const tasks = person.tasks || [];
  const inProgress = tasks.filter(t => t.status === 'in_progress');
  const planned = tasks.filter(t => t.status === 'planned');
  const done = tasks.filter(t => t.status === 'done');
  const notes = NOTES.filter(n => n.authorId === personId).slice(0, 5);
  const risks = NOTES.filter(n => n.authorId === personId && n.category === 'risk');
  const projects = PROJECTS.filter(p => p.members.includes(personId));

  const content = `
    <div class="space-y-4">
      <div class="flex items-center gap-3 pb-3 border-b border-gray-100">
        <div class="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white text-lg font-bold flex-shrink-0">${escapeHtml(person.avatar)}</div>
        <div>
          <div class="text-sm text-gray-600">${escapeHtml(person.role)}</div>
          <div class="text-xs text-blue-600 mt-0.5">${escapeHtml(person.deptName)}</div>
        </div>
      </div>
      ${projects.length > 0 ? `
      <div>
        <div class="text-sm font-semibold text-gray-700 mb-2">📊 Projeleri</div>
        <div class="space-y-1.5">
          ${projects.map(p => `
          <div class="flex items-start justify-between gap-2 py-1 border-b border-gray-50 last:border-0">
            <div class="min-w-0">${clickableProject(p.id, p.name)}</div>
            <div class="flex items-center gap-2 flex-shrink-0">
              ${getStatusBadge(p.status)}
              <span class="text-xs text-gray-400 whitespace-nowrap hidden sm:block">${p.endDate}</span>
            </div>
          </div>`).join('')}
        </div>
      </div>` : ''}
      ${tasks.length > 0 ? `
      <div>
        <div class="text-sm font-semibold text-gray-700 mb-2">✅ Görevleri</div>
        <div class="space-y-1">
          ${[...inProgress, ...planned, ...done.slice(0, 2)].map(t => `
          <div class="flex items-center justify-between py-1 border-b border-gray-50 last:border-0">
            <span class="text-sm text-gray-700 truncate mr-2">${escapeHtml(t.title)}</span>
            <span class="text-xs flex-shrink-0 ${t.status === 'done' ? 'text-green-600' : t.status === 'in_progress' ? 'text-blue-600' : 'text-gray-500'}">${t.status === 'done' ? '✅ Tamamlandı' : t.status === 'in_progress' ? '🔄 Devam' : '📅 Planlanan'}</span>
          </div>`).join('')}
        </div>
      </div>` : ''}
      ${notes.length > 0 ? `
      <div>
        <div class="text-sm font-semibold text-gray-700 mb-2">📝 Son Notları</div>
        <div class="space-y-2">
          ${notes.map(n => `
          <div class="border-l-2 border-blue-200 pl-2">
            <div class="text-xs text-gray-600">${escapeHtml(n.text.replace('⚠️ ', '').slice(0, 100))}${n.text.length > 100 ? '...' : ''}</div>
            <div class="text-xs text-gray-400 mt-0.5">${n.date} — ${n.projectId ? clickableProject(n.projectId, n.project) : escapeHtml(n.project)}</div>
          </div>`).join('')}
        </div>
      </div>` : ''}
      ${risks.length > 0 ? `
      <div>
        <div class="text-sm font-semibold text-gray-700 mb-2">⚠️ Riskleri</div>
        <div class="space-y-1.5">
          ${risks.map(r => `
          <div class="border border-red-100 bg-red-50 rounded-lg p-2">
            <div class="text-xs text-red-700">${escapeHtml(r.text.replace('⚠️ ', '').slice(0, 100))}${r.text.length > 100 ? '...' : ''}</div>
            <div class="text-xs text-gray-500 mt-0.5">${r.projectId ? clickableProject(r.projectId, r.project) : escapeHtml(r.project)}</div>
          </div>`).join('')}
        </div>
      </div>` : ''}
    </div>
  `;
  Modal.show(person.name, content);
}

// Proje detay modal
function showProjectDetail(projectId) {
  const project = PROJECTS.find(p => p.id === projectId);
  if (!project) return;
  const members = project.members.map(id => PERSONNEL.find(x => x.id === id)).filter(Boolean);
  const risks = NOTES.filter(n => n.category === 'risk' && n.projectId === projectId);
  const notes = NOTES.filter(n => n.projectId === projectId && n.category !== 'risk').slice(0, 5);
  const files = typeof FILES !== 'undefined' ? FILES.filter(f => f.project === project.name) : [];
  const depts = project.depts.map(d => DEPARTMENTS.find(x => x.id === d)).filter(Boolean).map(d => d.short).join(', ');

  const content = `
    <div class="space-y-4">
      <div class="flex items-center gap-3 flex-wrap pb-3 border-b border-gray-100">
        ${getStatusBadge(project.status)}
        <span class="text-sm text-gray-500">${project.startDate} — ${project.endDate}</span>
        ${depts ? `<span class="text-xs text-gray-400">${escapeHtml(depts)}</span>` : ''}
      </div>
      <p class="text-sm text-gray-600">${escapeHtml(project.desc)}</p>
      ${members.length > 0 ? `
      <div>
        <div class="text-sm font-semibold text-gray-700 mb-2">👥 Çalışan Personel (${members.length} kişi)</div>
        <div class="flex flex-wrap gap-2">
          ${members.map(m => `
          <div class="flex items-center gap-1.5 bg-gray-50 hover:bg-blue-50 rounded-full px-2.5 py-1 transition-colors">
            <div class="w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs font-bold flex-shrink-0">${escapeHtml(m.avatar.slice(0, 2))}</div>
            ${clickablePerson(m.id, m.name)}
          </div>`).join('')}
        </div>
      </div>` : ''}
      ${notes.length > 0 ? `
      <div>
        <div class="text-sm font-semibold text-gray-700 mb-2">📝 Son Notlar</div>
        <div class="space-y-2">
          ${notes.map(n => `
          <div class="border-l-2 border-blue-300 pl-2 text-xs text-gray-600">
            ${escapeHtml(n.text.slice(0, 100))}${n.text.length > 100 ? '...' : ''}
            <span class="text-gray-400 ml-1">— ${clickablePerson(n.authorId, n.author)}</span>
          </div>`).join('')}
        </div>
      </div>` : ''}
      ${risks.length > 0 ? `
      <div class="bg-red-50 rounded-lg p-3">
        <div class="text-sm font-semibold text-red-800 mb-2">⚠️ Riskler</div>
        ${risks.map(r => `
        <div class="text-xs text-red-700 mb-1.5">
          • ${escapeHtml(r.text.replace('⚠️ ', '').slice(0, 100))}${r.text.length > 100 ? '...' : ''}
          <span class="text-red-500 ml-1">— ${clickablePerson(r.authorId, r.author)}</span>
        </div>`).join('')}
      </div>` : ''}
      ${files.length > 0 ? `
      <div>
        <div class="text-sm font-semibold text-gray-700 mb-2">📁 Dosyalar</div>
        <div class="space-y-1">
          ${files.map(f => `
          <div class="flex items-center gap-2 text-xs text-gray-600 py-0.5">
            <span>${getFileIcon(f.type)}</span>
            <span class="truncate">${escapeHtml(f.name)}</span>
            <span class="text-gray-400 flex-shrink-0">${f.size}</span>
          </div>`).join('')}
        </div>
      </div>` : ''}
      <div class="flex flex-wrap gap-1.5 pt-1">
        ${project.tags.map(t => `<span class="px-2 py-0.5 bg-blue-50 text-blue-700 rounded text-xs">${escapeHtml(t)}</span>`).join('')}
      </div>
    </div>
  `;
  Modal.show(project.name, content);
}

// Toast bildirim
function showToast(message, type = 'success') {
  const toast = document.createElement('div');
  const colors = {
    success: 'bg-green-500',
    error: 'bg-red-500',
    info: 'bg-blue-500',
    warning: 'bg-yellow-500'
  };
  toast.className = `fixed top-4 right-4 z-50 px-4 py-3 rounded-lg text-white text-sm font-medium shadow-lg ${colors[type] || colors.info} transition-all duration-300`;
  toast.textContent = message;
  document.body.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = '0';
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

// AI Analiz simülasyonu
function simulateAIAnalysis(text) {
  const lower = text.toLowerCase();
  let category = 'proje';
  let project = 'Genel';
  let tags = [];
  let confidence = 0.85;

  // Kategori tespiti
  if (lower.includes('risk') || lower.includes('⚠') || lower.includes('gecik') || lower.includes('sorun') || lower.includes('hata')) {
    category = 'risk';
    confidence = 0.92;
  } else if (lower.includes('plan') || lower.includes('yapılacak') || lower.includes('haziran') || lower.includes('mayıs') || lower.includes('temmuz')) {
    category = 'plan';
    confidence = 0.88;
  } else if (lower.includes('aralık') || lower.includes('değer') || lower.includes('max') || lower.includes('min') || lower.includes('protokol') || lower.includes('spesifikasyon')) {
    category = 'bilgi';
    confidence = 0.90;
  }

  // Proje tespiti
  if (lower.includes('t9') || lower.includes('plc') || lower.includes('fpga')) project = 'T9 PLC v3 Ana Kart';
  else if (lower.includes('t7') && lower.includes('panel')) project = 'T7 Operatör Panel 10"';
  else if (lower.includes('t7pac') || lower.includes('firmware v6')) project = 'T7PAC Firmware v6';
  else if (lower.includes('teleskop') || lower.includes('scada') || lower.includes('boyahane')) project = 'Teleskop v5 Boyahane Yönetim';
  else if (lower.includes('rd96') || lower.includes('dozajlama') || lower.includes('pompa')) project = 'RD96 Sıvı Dozajlama v2';
  else if (lower.includes('adw') || lower.includes('toz') || lower.includes('tartım')) project = 'ADW Toz Boyarmadde Otomasyon';
  else if (lower.includes('labx') || lower.includes('laboratuvar')) project = 'LABx Next Laboratuvar';
  else if (lower.includes('pmt') || lower.includes('ph') || lower.includes('elektrot')) project = 'PMT140 pH Sensörü v2';
  else if (lower.includes('ict') || lower.includes('iletkenlik')) project = 'ICT200 İletkenlik Sensörü';
  else if (lower.includes('sat210') || lower.includes('spektro') || lower.includes('optik')) project = 'SAT210 Spektrofotometrik Sensör';
  else if (lower.includes('iiot') || lower.includes('mqtt') || lower.includes('gateway') || lower.includes('bulut')) project = 'IIoT Gateway & Bulut';
  else if (lower.includes('ppd') || lower.includes('baskı boya')) project = 'PPD Baskı Boya Mutfağı v3';

  // Etiket tespiti
  const tagMap = {
    'fpga': 'FPGA', 'pcb': 'PCB', 'emc': 'EMC', 'stm32': 'STM32',
    'linux': 'Linux', 'kernel': 'Kernel', 'ethercat': 'EtherCAT',
    'modbus': 'Modbus', 'mqtt': 'MQTT', 'aws': 'AWS',
    'ph': 'pH', 'sensör': 'Sensör', 'kalibrasyon': 'Kalibrasyon',
    'servo': 'Servo', 'pid': 'PID', 'motor': 'Motor',
    'tekstil': 'Tekstil', 'boyahane': 'Boyahane',
    'test': 'Test', 'ce': 'CE Uyum', 'ip68': 'IP68',
    'tedarik': 'Tedarik', 'gecikme': 'Gecikme'
  };
  Object.entries(tagMap).forEach(([key, val]) => {
    if (lower.includes(key)) tags.push(val);
  });
  if (tags.length === 0) tags = ['Ar-Ge', 'Proje'];

  return { category, project, tags: tags.slice(0, 5), confidence: Math.round(confidence * 100) };
}

// Mobil sidebar toggle
function initSidebar() {
  const toggleBtn = document.getElementById('sidebar-toggle');
  const sidebar = document.getElementById('sidebar');
  if (toggleBtn && sidebar) {
    toggleBtn.addEventListener('click', () => {
      sidebar.classList.toggle('-translate-x-full');
    });
  }
}

// Sayfa yüklendiğinde
document.addEventListener('DOMContentLoaded', () => {
  initSidebar();
  // Modal kapat
  const modalClose = document.getElementById('modal-close');
  const modalOverlay = document.getElementById('modal');
  if (modalClose) modalClose.addEventListener('click', () => Modal.hide());
  if (modalOverlay) modalOverlay.addEventListener('click', e => {
    if (e.target === modalOverlay) Modal.hide();
  });
  // Tıklanabilir personel ve proje linkleri için event delegation
  document.addEventListener('click', e => {
    const personLink = e.target.closest('[data-modal-person-id]');
    if (personLink) {
      e.preventDefault();
      Modal.hide();
      const pid = parseInt(personLink.getAttribute('data-modal-person-id'), 10);
      setTimeout(() => showPersonDetail(pid), 100);
      return;
    }
    const projectLink = e.target.closest('[data-modal-project-id]');
    if (projectLink) {
      e.preventDefault();
      Modal.hide();
      const pid = parseInt(projectLink.getAttribute('data-modal-project-id'), 10);
      setTimeout(() => showProjectDetail(pid), 100);
    }
  });
});

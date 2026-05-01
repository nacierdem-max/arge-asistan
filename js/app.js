// ============================================================
// app.js — Genel fonksiyonlar, navigasyon, auth
// ============================================================

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
      if (!this.initialized.has(section) && typeof window['init_' + section] === 'function') {
        window['init_' + section]();
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
    'devam': '<span class="px-2 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">Devam Ediyor</span>',
    'tamamlandi': '<span class="px-2 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">Tamamlandı</span>',
    'planlanan': '<span class="px-2 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-700">Planlanan</span>',
    'riskli': '<span class="px-2 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">Riskli</span>'
  };
  return map[status] || status;
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
});

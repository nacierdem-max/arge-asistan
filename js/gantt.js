// ============================================================
// gantt.js — Gantt Chart çizimi ve filtreleme
// ============================================================

const GanttChart = {
  filtered: [...PROJECTS],
  tooltip: null,

  init() {
    this.buildFilters();
    this.render();
    this.initTooltip();
  },

  buildFilters() {
    // Departman filter
    const deptSelect = document.getElementById('gantt-dept');
    if (!deptSelect) return;
    deptSelect.innerHTML = '<option value="">Tüm Departmanlar</option>';
    DEPARTMENTS.forEach(d => {
      deptSelect.innerHTML += `<option value="${d.id}">${escapeHtml(d.name)}</option>`;
    });

    // Proje filter
    const projSelect = document.getElementById('gantt-project');
    projSelect.innerHTML = '<option value="">Tüm Projeler</option>';
    PROJECTS.forEach(p => {
      projSelect.innerHTML += `<option value="${p.id}">${escapeHtml(p.name)}</option>`;
    });

    // Event listeners
    deptSelect.addEventListener('change', () => this.applyFilters());
    document.getElementById('gantt-project').addEventListener('change', () => this.applyFilters());
    document.getElementById('gantt-status').addEventListener('change', () => this.applyFilters());
    document.getElementById('gantt-person').addEventListener('input', () => this.applyFilters());
  },

  applyFilters() {
    const dept = document.getElementById('gantt-dept').value;
    const proj = document.getElementById('gantt-project').value;
    const status = document.getElementById('gantt-status').value;
    const person = document.getElementById('gantt-person').value.toLowerCase();

    this.filtered = PROJECTS.filter(p => {
      if (dept && !p.depts.includes(parseInt(dept))) return false;
      if (proj && p.id !== parseInt(proj)) return false;
      if (status && p.status !== status) return false;
      if (person) {
        const memberNames = p.members.map(id => {
          const per = PERSONNEL.find(x => x.id === id);
          return per ? per.name.toLowerCase() : '';
        });
        if (!memberNames.some(n => n.includes(person)) && !p.name.toLowerCase().includes(person)) return false;
      }
      return true;
    });
    this.render();
  },

  getBarStyle(project) {
    switch (project.status) {
      case 'tamamlandi': return 'bg-green-500';
      case 'devam': return 'bg-blue-500';
      case 'planlanan': return 'bg-gray-400';
      case 'riskli': return 'bg-red-500';
      default: return 'bg-blue-500';
    }
  },

  isProjectRisky(project) {
    return NOTES.some(n => n.category === 'risk' && n.projectId === project.id);
  },

  render() {
    const container = document.getElementById('gantt-container');
    if (!container) return;

    const months = GANTT_MONTHS.slice(GANTT_START_OFFSET, GANTT_START_OFFSET + GANTT_VISIBLE_MONTHS);
    const totalCols = GANTT_VISIBLE_MONTHS;

    let html = `
    <div class="overflow-x-auto">
      <div class="min-w-[900px]">
        <!-- Header months -->
        <div class="flex mb-2">
          <div class="w-56 flex-shrink-0 text-xs font-semibold text-gray-500 uppercase tracking-wide px-2">Proje / Kişiler</div>
          <div class="flex-1 grid grid-cols-${totalCols} gap-0">
            ${months.map(m => `<div class="text-center text-xs font-semibold text-gray-500 py-1 border-l border-gray-200">${m} '26</div>`).join('')}
          </div>
        </div>
        <!-- Today indicator helper text -->
        <div class="flex mb-3">
          <div class="w-56 flex-shrink-0"></div>
          <div class="flex-1 relative h-1 bg-gray-100 rounded">
            <!-- May = index 4, offset from start (1) = 3, position = 3.5/8 -->
            <div class="absolute top-0 h-full w-0.5 bg-red-400" style="left:${((3.5 / totalCols) * 100).toFixed(1)}%">
              <span class="absolute -top-5 left-1 text-xs text-red-500 whitespace-nowrap font-medium">▼ Bugün</span>
            </div>
          </div>
        </div>
        <!-- Project rows -->
    `;

    if (this.filtered.length === 0) {
      html += '<div class="text-center text-gray-400 py-8">Filtre kriterlerine uygun proje bulunamadı.</div>';
    } else {
      this.filtered.forEach(project => {
        const isRisky = this.isProjectRisky(project);
        const effectiveStatus = isRisky ? 'riskli' : project.status;
        const barClass = this.getBarStyle({ ...project, status: effectiveStatus });
        const memberObjects = project.members.slice(0, 3).map(id => {
          const p = PERSONNEL.find(x => x.id === id);
          return p ? { id: p.id, firstName: p.name.split(' ')[0] } : null;
        }).filter(Boolean);
        const extraCount = project.members.length > 3 ? `+${project.members.length - 3}` : '';

        // Calculate bar position
        const startCol = Math.max(0, project.startMonth - GANTT_START_OFFSET);
        const endCol = Math.min(totalCols, project.endMonth - GANTT_START_OFFSET + 1);
        const colSpan = Math.max(1, endCol - startCol);
        const leftPct = (startCol / totalCols * 100).toFixed(1);
        const widthPct = (colSpan / totalCols * 100).toFixed(1);

        html += `
        <div class="flex items-center mb-3 group cursor-pointer hover:bg-blue-50 rounded-lg transition-colors"
             data-project-id="${project.id}"
             onclick="showProjectDetail(${project.id})">
          <div class="w-56 flex-shrink-0 px-2">
            <div class="text-sm font-medium text-gray-800 truncate" title="${escapeHtml(project.name)}">${escapeHtml(project.name)}</div>
            <div class="flex flex-wrap gap-0.5 mt-0.5">
              ${memberObjects.map(m => `<a href="#" onclick="event.preventDefault(); event.stopPropagation(); showPersonDetail(${parseInt(m.id, 10)})" class="text-xs text-gray-500 hover:text-blue-600 hover:underline">${escapeHtml(m.firstName)}</a>`).join('<span class="text-gray-300 text-xs">, </span>')}
              ${extraCount ? `<span class="text-xs text-blue-500 font-medium">${escapeHtml(extraCount)}</span>` : ''}
            </div>
          </div>
          <div class="flex-1 relative h-8">
            <!-- Grid lines -->
            ${Array.from({length: totalCols}, (_, i) => `<div class="absolute top-0 bottom-0 border-l border-gray-100" style="left:${(i / totalCols * 100).toFixed(1)}%"></div>`).join('')}
            <!-- Bar -->
            <div class="${barClass} absolute top-1 bottom-1 rounded-md flex items-center px-2 overflow-hidden shadow-sm
                        hover:opacity-90 transition-opacity gantt-bar"
                 style="left:${leftPct}%; width:${widthPct}%;"
                 data-project-id="${project.id}"
                 onmouseenter="GanttChart.showTooltip(event, ${project.id})"
                 onmouseleave="GanttChart.hideTooltip()">
              <span class="text-white text-xs font-medium truncate">${escapeHtml(project.name.split(' ').slice(0,3).join(' '))}</span>
              ${isRisky ? '<span class="ml-1 text-white text-xs">⚠️</span>' : ''}
            </div>
          </div>
        </div>
        `;
      });
    }

    html += `
      </div>
    </div>
    <!-- Legend -->
    <div class="flex flex-wrap gap-4 mt-4 px-2">
      <div class="flex items-center gap-1.5"><div class="w-3 h-3 rounded bg-green-500"></div><span class="text-xs text-gray-600">Tamamlandı</span></div>
      <div class="flex items-center gap-1.5"><div class="w-3 h-3 rounded bg-blue-500"></div><span class="text-xs text-gray-600">Devam Ediyor</span></div>
      <div class="flex items-center gap-1.5"><div class="w-3 h-3 rounded bg-gray-400"></div><span class="text-xs text-gray-600">Planlanan</span></div>
      <div class="flex items-center gap-1.5"><div class="w-3 h-3 rounded bg-red-500"></div><span class="text-xs text-gray-600">Riskli</span></div>
    </div>
    `;

    container.innerHTML = html;
  },

  initTooltip() {
    this.tooltip = document.createElement('div');
    this.tooltip.id = 'gantt-tooltip';
    this.tooltip.className = 'fixed z-50 bg-gray-900 text-white text-xs rounded-lg px-3 py-2 shadow-xl pointer-events-none hidden max-w-xs';
    document.body.appendChild(this.tooltip);
  },

  showTooltip(event, projectId) {
    const project = PROJECTS.find(p => p.id === projectId);
    if (!project || !this.tooltip) return;
    const risks = NOTES.filter(n => n.category === 'risk' && n.projectId === projectId);
    this.tooltip.innerHTML = `
      <div class="font-semibold mb-1">${escapeHtml(project.name)}</div>
      <div class="text-gray-300">${project.startDate} → ${project.endDate}</div>
      <div>Ekip: ${project.members.length} kişi</div>
      ${risks.length > 0 ? `<div class="mt-1 text-red-300">⚠️ ${risks.length} aktif risk</div>` : ''}
    `;
    this.tooltip.classList.remove('hidden');
    this.moveTooltip(event);
  },

  moveTooltip(event) {
    if (!this.tooltip) return;
    const x = Math.min(event.clientX + 12, window.innerWidth - 220);
    const y = Math.min(event.clientY - 10, window.innerHeight - 120);
    this.tooltip.style.left = x + 'px';
    this.tooltip.style.top = y + 'px';
  },

  hideTooltip() {
    if (this.tooltip) this.tooltip.classList.add('hidden');
  },

  showProjectDetail(projectId) {
    showProjectDetail(projectId);
  }
};

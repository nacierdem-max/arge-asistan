// ============================================================
// chat.js — AI Sohbet Simülasyonu
// ============================================================

const AIChat = {
  messages: [],
  typing: false,

  init(containerId, inputId, sendBtnId, micBtnId) {
    this.container = document.getElementById(containerId);
    this.input = document.getElementById(inputId);
    this.sendBtn = document.getElementById(sendBtnId);
    this.micBtn = document.getElementById(micBtnId);
    if (!this.container || !this.input) return;

    this.sendBtn && this.sendBtn.addEventListener('click', () => this.send());
    this.input.addEventListener('keydown', e => {
      if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); this.send(); }
    });

    // Welcome message
    this.addMessage('ai', `Merhaba! Ben **Eliar Akıllı Ar-Ge Asistanı**. 

Size şu konularda yardımcı olabilirim:
- 📊 **Proje durumları** — "T9 durumu nedir?" diyebilirsiniz
- ⚠️ **Riskler** — "Hangi projeler riskli?"
- 💰 **Maliyet/Bütçe** — "Toplam harcama nedir?"
- 👥 **Performans** — "Departman performansı nasıl?"
- 📦 **Tedarik** — "Bekleyen tedarikler var mı?"
- 🔭 **Teleskop/SCADA** — "Teleskop projesi nasıl gidiyor?"

Sormak istediğiniz bir şey var mı?`);
  },

  send() {
    if (this.typing) return;
    const text = this.input.value.trim();
    if (!text) return;
    this.addMessage('user', text);
    this.input.value = '';
    this.showTyping();
    setTimeout(() => {
      this.hideTyping();
      const response = this.generateResponse(text);
      this.addMessage('ai', response.text, response.chart);
    }, 1200 + Math.random() * 800);
  },

  addMessage(role, text, chartData) {
    const msg = { role, text, chartData, time: new Date().toLocaleTimeString('tr-TR', {hour:'2-digit', minute:'2-digit'}) };
    this.messages.push(msg);
    this.renderMessage(msg);
    this.scrollToBottom();
  },

  renderMessage(msg) {
    const div = document.createElement('div');
    div.className = msg.role === 'user' ? 'flex justify-end mb-4' : 'flex justify-start mb-4';

    const bubble = msg.role === 'user'
      ? `<div class="max-w-md bg-blue-600 text-white rounded-2xl rounded-tr-sm px-4 py-3 shadow-sm">
           <div class="text-sm">${this.formatText(escapeHtml(msg.text))}</div>
           <div class="text-xs text-blue-200 mt-1 text-right">${msg.time}</div>
         </div>`
      : `<div class="flex gap-3 max-w-2xl">
           <div class="w-8 h-8 rounded-full bg-blue-700 flex items-center justify-center text-white text-xs font-bold flex-shrink-0 mt-1">🧠</div>
           <div class="bg-white rounded-2xl rounded-tl-sm px-4 py-3 shadow-sm border border-gray-100 flex-1">
             <div class="text-sm text-gray-800">${this.formatText(escapeHtml(msg.text))}</div>
             ${msg.chartData ? `<canvas id="chat-chart-${this.messages.length}" class="mt-3" height="180"></canvas>` : ''}
             <div class="text-xs text-gray-400 mt-1">${msg.time}</div>
           </div>
         </div>`;

    div.innerHTML = bubble;
    this.container.appendChild(div);

    if (msg.chartData) {
      setTimeout(() => this.renderChart(`chat-chart-${this.messages.length - 1}`, msg.chartData), 50);
    }
  },

  formatText(text) {
    return text
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\n/g, '<br>');
  },

  showTyping() {
    this.typing = true;
    const div = document.createElement('div');
    div.id = 'typing-indicator';
    div.className = 'flex justify-start mb-4';
    div.innerHTML = `
      <div class="flex gap-3">
        <div class="w-8 h-8 rounded-full bg-blue-700 flex items-center justify-center text-white text-xs font-bold flex-shrink-0">🧠</div>
        <div class="bg-white rounded-2xl rounded-tl-sm px-4 py-3 shadow-sm border border-gray-100">
          <div class="flex gap-1 items-center h-5">
            <div class="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style="animation-delay:0ms"></div>
            <div class="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style="animation-delay:150ms"></div>
            <div class="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style="animation-delay:300ms"></div>
          </div>
        </div>
      </div>`;
    this.container.appendChild(div);
    this.scrollToBottom();
  },

  hideTyping() {
    this.typing = false;
    const el = document.getElementById('typing-indicator');
    if (el) el.remove();
  },

  scrollToBottom() {
    setTimeout(() => {
      this.container.scrollTop = this.container.scrollHeight;
    }, 50);
  },

  renderChart(canvasId, chartData) {
    const canvas = document.getElementById(canvasId);
    if (!canvas || !window.Chart) return;
    new Chart(canvas, {
      type: chartData.type || 'bar',
      data: chartData.data,
      options: {
        responsive: true,
        plugins: { legend: { display: chartData.showLegend !== false } },
        scales: chartData.type !== 'pie' && chartData.type !== 'doughnut' ? {
          y: { beginAtZero: true, ticks: { font: { size: 11 } } },
          x: { ticks: { font: { size: 11 } } }
        } : undefined
      }
    });
  },

  generateResponse(text) {
    const lower = text.toLowerCase();

    // T9 / PLC
    if (lower.includes('t9') || (lower.includes('plc') && !lower.includes('t7pac'))) {
      return {
        text: `**T9 PLC v3 Ana Kart** — Proje Raporu 📋

**Durum:** 🔵 Devam Ediyor
**Dönem:** Şubat 2026 — Temmuz 2026
**Bütçe:** 850,000₺ — %61 tamamlandı (520,000₺ harcandı)
**Ekip:** 8 kişi (Elektronik + Gömülü Yazılım)

**Son Gelişmeler:**
• ✅ Rev4 şematik review tamamlandı, EMC filtre katı eklendi
• ✅ Güç katı EMI testleri geçti — CE uyumlu (CISPR 11 Class A)
• 🔄 Ethernet/IP stack implementasyonu devam ediyor
• 🔄 FPGA Profinet IRT modülü prototipi hazır

**⚠️ Aktif Risk:**
• Xilinx Artix-7 FPGA tedarik süresi **8 haftaya** çıktı (Digikey)
• 6 katman PCB maliyeti beklenenin %20 üzerinde geldi

**Proje Lideri:** Ahmet Yılmaz

Daha detaylı bilgi için Zaman Tablosu bölümüne bakabilirsiniz.`
      };
    }

    // T7 Panel
    if (lower.includes('t7') && (lower.includes('panel') || lower.includes('operatör'))) {
      return {
        text: `**T7 Operatör Panel 10"** — Proje Raporu 📋

**Durum:** 🔵 Devam Ediyor
**Dönem:** Mart 2026 — Ağustos 2026
**Bütçe:** 420,000₺ — %67 tamamlandı (280,000₺ harcandı)
**Ekip:** 5 kişi (Elektronik + Gömülü Yazılım)

**Son Gelişmeler:**
• ✅ Kapasitif dokunmatik ekran sürücüsü Linux kernel 5.15'e entegre
• ✅ Boot süresi 4.2sn → 2.8sn optimize edildi
• 🔄 10.1" LCD sürücü testi devam ediyor

**⚠️ Risk:**
• Innolux LCD tedarikçisi üretim kapasitesini düşürdü
• AUO panel alternatif olarak değerlendiriliyor

**Proje Lideri:** Selin Arslan`
      };
    }

    // T7PAC Firmware
    if (lower.includes('t7pac') || lower.includes('firmware v6') || lower.includes('firmware')) {
      return {
        text: `**T7PAC Firmware v6** — Proje Raporu 📋

**Durum:** ⚪ Planlanan
**Dönem:** Haziran 2026 — Ekim 2026
**Bütçe:** 180,000₺ — %8 harcandı (15,000₺)
**Ekip:** 6 kişi (Gömülü Yazılım)

**Hazırlık Durumu:**
• ✅ Gereksinim dokümanı tamamlandı (47 yeni özellik)
• ✅ EtherCAT master stack lisansı alındı
• 📅 Geliştirme Haziran başı start
• 📅 Sprint planlaması yapıldı

**Kapsam:** EtherCAT slave desteği, yeni haberleşme protokolleri, performans iyileştirmeleri

**Proje Lideri:** Onur Tekin`
      };
    }

    // Teleskop
    if (lower.includes('teleskop') || lower.includes('scada') || lower.includes('mes') || lower.includes('boyahane')) {
      return {
        text: `**Teleskop v5 Boyahane Yönetim Sistemi** — Proje Raporu 🔭

**Durum:** 🔵 Devam Ediyor
**Dönem:** Ocak 2026 — Temmuz 2026
**Bütçe:** 380,000₺ — %51 tamamlandı (195,000₺)
**Ekip:** 6 kişi (Üst Yazılım)

**Son Gelişmeler:**
• ✅ WebSocket modülü 500 eşzamanlı bağlantı destekliyor
• ✅ PostgreSQL migration tamamlandı (5M kayıt)
• ✅ 3 müşteri tesisinde canlıya alındı (150 makine izleniyor)
• ✅ Alarm yönetimi ISA-18.2 standardına göre tamamlandı
• 🔄 React Native mobil app geliştirilıyor (Haziran beta)

**⚠️ Kritik Risk:**
• Veritabanı migration'da veri kaybı riski — NULL constraint ihlalleri
• Ekstra test ve rollback planı hazırlanıyor

**Protokol:** Modbus TCP/IP (port 502)
**Proje Lideri:** Kaan Yıldırım`
      };
    }

    // Sensör
    if (lower.includes('sensör') || lower.includes('pmt') || lower.includes('ict') || lower.includes('sat210')) {
      return {
        text: `**Sensör Projeleri Özeti** 📡

**PMT140 pH Sensörü v2** 🔵 Devam Ediyor (Mart-Temmuz 2026)
• ±0.005 pH hassasiyet, IP68, cam elektrot
• ATEX sertifikası başvurusu yapıldı
• Bütçe: 290K₺ / %72 harcandı

**ICT200 İletkenlik Sensörü** ✅ Tamamlandı
• 0-2000 mS/cm aralık, TSE/TÜRKAK onaylı
• Seri üretim başladı

**SAT210 Spektrofotometrik Sensör** 🔵 Devam Ediyor (Şubat-Ağustos 2026)
• 380-780nm, 1nm çözünürlük, tekstil sektörü
• Dalga boyu tarama hızı 2x artırıldı
• 3 müşteri demo'su yapıldı, LOI bekleniyor
• ⚠️ Optik filtre tedarikçisi %30 fiyat artışı

**Tekstil Sektörü Avantajı:**
Eliar sensörleri ±0.1°C hassasiyet sunarken müşteri gereksinimi ±0.5°C — **5x margin** 🎯`
      };
    }

    // Risk / Gecikme
    if (lower.includes('risk') || lower.includes('gecik') || lower.includes('sorun') || lower.includes('blocker')) {
      const risks = NOTES.filter(n => n.category === 'risk');
      const highRisks = risks.filter(n => n.severity === 'yüksek');
      const medRisks = risks.filter(n => n.severity === 'orta');
      return {
        text: `**Aktif Risk Raporu** ⚠️ (${risks.length} toplam risk)

🔴 **Yüksek Öncelik (${highRisks.length} adet):**
${highRisks.map(r => `• **${r.project}:** ${r.text.replace('⚠️ ', '').slice(0, 80)}...`).join('\n')}

🟡 **Orta Öncelik (${medRisks.length} adet):**
${medRisks.map(r => `• **${r.project}:** ${r.text.replace('⚠️ ', '').slice(0, 70)}...`).join('\n')}

🟢 **Düşük Öncelik (1 adet):**
• **IIoT Gateway:** Güvenlik sertifikası süreci uzayabilir

**Önerilen Aksiyonlar:**
1. T9 FPGA için Intel Cyclone V alternatifini değerlendirin
2. Teleskop migration için rollback planını hızlandırın
3. SAT210 için Semrock/Edmund Optics fiyat tekliflerini alın`
      };
    }

    // Performans
    if (lower.includes('performans') || lower.includes('verimlilik') || lower.includes('departman')) {
      return {
        text: `**Departman Performans Raporu** 📊

Q1 2026 tamamlanan görev sayısı vs Q2 2026 planlanan:`,
        chart: {
          type: 'bar',
          showLegend: true,
          data: {
            labels: PERFORMANCE_DATA.departments,
            datasets: [
              {
                label: 'Q1 2026 Tamamlanan',
                data: PERFORMANCE_DATA.q1Completed,
                backgroundColor: 'rgba(59, 130, 246, 0.8)',
                borderColor: 'rgb(59, 130, 246)',
                borderWidth: 1
              },
              {
                label: 'Q2 2026 Hedef',
                data: PERFORMANCE_DATA.q2Planned,
                backgroundColor: 'rgba(16, 185, 129, 0.8)',
                borderColor: 'rgb(16, 185, 129)',
                borderWidth: 1
              }
            ]
          }
        }
      };
    }

    // Maliyet / Bütçe
    if (lower.includes('maliyet') || lower.includes('bütçe') || lower.includes('harcama') || lower.includes('para')) {
      const totalBudget = COST_DATA.reduce((a, b) => a + b.total, 0);
      const totalSpent = COST_DATA.reduce((a, b) => a + b.spent, 0);
      const pct = Math.round(totalSpent / totalBudget * 100);
      return {
        text: `**Ar-Ge Maliyet Raporu** 💰

**Toplam Ar-Ge Bütçesi:** ${formatCurrency(totalBudget)}
**Harcanan:** ${formatCurrency(totalSpent)} (%${pct})
**Kalan:** ${formatCurrency(totalBudget - totalSpent)}

**En Büyük Projeler:**
• T9 PLC v3: ${formatCurrency(850000)} (toplam bütçe)
• T7 Panel 10": ${formatCurrency(420000)}
• SAT210 Spektro: ${formatCurrency(340000)}

**Tamamlanan Projeler (bütçe kullanıldı):**
• RD96 Sıvı Dozajlama: ${formatCurrency(310000)} ✅
• ICT200 İletkenlik: ${formatCurrency(220000)} ✅

Detaylı maliyet tablosu için **Maliyet** bölümüne gidin.`,
        chart: {
          type: 'doughnut',
          showLegend: true,
          data: {
            labels: COST_DATA.map(c => c.project.split(' ').slice(0,3).join(' ')),
            datasets: [{
              data: COST_DATA.map(c => c.spent),
              backgroundColor: [
                '#3b82f6','#8b5cf6','#10b981','#f59e0b',
                '#ef4444','#06b6d4','#84cc16','#f97316',
                '#ec4899','#6366f1','#14b8a6','#a855f7'
              ]
            }]
          }
        }
      };
    }

    // Tedarik
    if (lower.includes('tedarik') || lower.includes('sipariş') || lower.includes('stok')) {
      const critical = SUPPLY_DATA.filter(s => s.critical || s.status === 'beklemede' || s.status === 'alternatif');
      return {
        text: `**Tedarik Durumu** 📦

**Kritik Beklemeler (${critical.length} adet):**
${critical.map(s => `• **${s.item.slice(0, 35)}...** — ${s.supplier}\n  Durum: ${s.status} | ETA: ${s.eta}`).join('\n')}

**Stokta Hazır:**
• STM32H7B3I-DK (Mouser) ✅
• Endüstriyel Konnektör M12 (Phoenix Contact) ✅

**Üretimde:**
• 10.1" LCD (Innolux) — 4 hafta
• 6 Katman PCB T9 (JLCPCB) — 10 gün

Detaylı bilgi için **Tedarik** bölümüne gidin.`
      };
    }

    // IIoT / Bulut / Gateway
    if (lower.includes('iiot') || lower.includes('gateway') || lower.includes('mqtt') || lower.includes('bulut') || lower.includes('aws')) {
      return {
        text: `**IIoT Gateway & Bulut Platformu** ☁️

**Durum:** 🔵 Devam Ediyor
**Dönem:** Nisan 2026 — Eylül 2026
**Bütçe:** 220,000₺ — %43 harcandı (95,000₺)
**Ekip:** 5 kişi (Üst Yazılım)

**Tamamlanan:**
• ✅ AWS IoT Core entegrasyonu (X.509 sertifika auth)
• ✅ MQTT broker 1000 cihaz simülasyonu başarılı
• ✅ HiveMQ cluster kurulumu ve failover testi

**Devam Eden:**
• 🔄 OPC-UA sunucu implementasyonu (Kepware uyumluluğu)
• 🔄 Güvenlik penetrasyon testi (Mayıs sonu)

**IEC 62443 Sertifikasyonu:** Süreç 2-3 ay uzayabilir

**Proje Lideri:** Ozan Türk`
      };
    }

    // ADW / Toz tartım
    if (lower.includes('adw') || lower.includes('toz') || lower.includes('tartım')) {
      return {
        text: `**ADW Toz Boyarmadde Otomasyon** ⚖️

**Durum:** 🔵 Devam Ediyor
**Dönem:** Şubat 2026 — Haziran 2026
**Bütçe:** 260,000₺ — %69 harcandı (180,000₺)
**Ekip:** 6 kişi (Mekatronik + Gömülü)

**Son Gelişmeler:**
• ✅ Servo motor kalibrasyonu ±0.05g hassasiyet
• ✅ Konveyör PID optimize edildi (Kp=1.2, Ki=0.05)
• ✅ Vibrasyon analizi — ek dampfer gerekmiyor
• 🔄 Yeni model mekanik tasarım (SOLIDWORKS)
• 📄 Kullanıcı eğitim dökümanı hazırlandı (120 sayfa)

**⚠️ Risk:**
• Beckhoff EL7047 step motor sürücü stokta yok, 3 hafta bekleme

**Proje Lideri:** Ali Rıza Çam`
      };
    }

    // Genel soru / bilinmeyen
    const activeProjects = PROJECTS.filter(p => p.status === 'devam').length;
    const completedProjects = PROJECTS.filter(p => p.status === 'tamamlandi').length;
    const plannedProjects = PROJECTS.filter(p => p.status === 'planlanan').length;
    const totalBudget = COST_DATA.reduce((a, b) => a + b.total, 0);
    const totalSpent = COST_DATA.reduce((a, b) => a + b.spent, 0);

    return {
      text: `**Eliar Elektronik Ar-Ge Genel Durum** 🏭

**Personel:** 85 Ar-Ge mühendisi, 7 departman
**Projeler:** ${activeProjects} aktif | ${completedProjects} tamamlandı | ${plannedProjects} planlanan

**Bütçe Özeti:**
• Toplam: ${formatCurrency(totalBudget)}
• Harcanan: ${formatCurrency(totalSpent)} (%${Math.round(totalSpent/totalBudget*100)})

**Öne Çıkan Projeler:**
• 🔴 T9 PLC v3 — FPGA tedarik riski (8 hafta gecikme)
• 🔴 Teleskop v5 — DB migration veri kaybı riski
• ✅ ICT200 İletkenlik Sensörü — Tamamlandı, üretime geçti
• ✅ RD96 Dozajlama v2 — Başarıyla tamamlandı

**Sorabilirsiniz:** "T9 nasıl gidiyor?", "Hangi projeler riskli?", "Bütçe durumu nedir?", "Teleskop v5 durum raporu", "Performans grafiği"`
    };
  }
};

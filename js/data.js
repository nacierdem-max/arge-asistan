// ============================================================
// data.js — Eliar Elektronik Ar-Ge Asistanı Mock Verileri
// ============================================================

const DEPARTMENTS = [
  { id: 1, name: "Elektronik & Donanım", short: "Elektronik", count: 18, color: "#1a56db" },
  { id: 2, name: "Gömülü Yazılım / Firmware", short: "Gömülü", count: 15, color: "#7e3af2" },
  { id: 3, name: "Üst Yazılım (Teleskop, MES, SCADA)", short: "Üst Yazılım", count: 14, color: "#057a55" },
  { id: 4, name: "Sensör Geliştirme", short: "Sensör", count: 12, color: "#c27803" },
  { id: 5, name: "Mekatronik & Robotik", short: "Mekatronik", count: 10, color: "#e02424" },
  { id: 6, name: "Test & Kalite", short: "Test", count: 8, color: "#0694a2" },
  { id: 7, name: "Sistem & Proje Mühendisliği", short: "Sistem", count: 8, color: "#6b7280" }
];

const PERSONNEL = [
  // Elektronik & Donanım (18)
  { id: 1, name: "Ahmet Yılmaz", dept: 1, deptName: "Elektronik & Donanım", role: "Kıdemli Elektronik Mühendisi", avatar: "AY" },
  { id: 2, name: "Elif Kaya", dept: 1, deptName: "Elektronik & Donanım", role: "Elektronik Mühendisi", avatar: "EK" },
  { id: 3, name: "Burak Demir", dept: 1, deptName: "Elektronik & Donanım", role: "PCB Tasarım Mühendisi", avatar: "BD" },
  { id: 4, name: "Selin Arslan", dept: 1, deptName: "Elektronik & Donanım", role: "Elektronik Mühendisi", avatar: "SA" },
  { id: 5, name: "Murat Öztürk", dept: 1, deptName: "Elektronik & Donanım", role: "Donanım Mühendisi", avatar: "MÖ" },
  { id: 6, name: "Zeynep Çelik", dept: 1, deptName: "Elektronik & Donanım", role: "Elektronik Tasarım Mühendisi", avatar: "ZÇ" },
  { id: 7, name: "Can Aydın", dept: 1, deptName: "Elektronik & Donanım", role: "Güç Elektroniği Mühendisi", avatar: "CA" },
  { id: 8, name: "Derya Koç", dept: 1, deptName: "Elektronik & Donanım", role: "Elektronik Mühendisi", avatar: "DK" },
  { id: 9, name: "Fatih Şahin", dept: 1, deptName: "Elektronik & Donanım", role: "Kıdemli PCB Mühendisi", avatar: "FŞ" },
  { id: 10, name: "Emre Yıldız", dept: 1, deptName: "Elektronik & Donanım", role: "Elektronik Mühendisi", avatar: "EY" },
  { id: 11, name: "Hakan Güneş", dept: 1, deptName: "Elektronik & Donanım", role: "Ar-Ge Mühendisi", avatar: "HG" },
  { id: 12, name: "Ayşe Korkmaz", dept: 1, deptName: "Elektronik & Donanım", role: "Elektronik Mühendisi", avatar: "AK" },
  { id: 13, name: "Tolga Eren", dept: 1, deptName: "Elektronik & Donanım", role: "EMC Mühendisi", avatar: "TE" },
  { id: 14, name: "Nur Aktaş", dept: 1, deptName: "Elektronik & Donanım", role: "Elektronik Mühendisi", avatar: "NA" },
  { id: 15, name: "Cem Polat", dept: 1, deptName: "Elektronik & Donanım", role: "Donanım Mühendisi", avatar: "CP" },
  { id: 16, name: "Sibel Doğan", dept: 1, deptName: "Elektronik & Donanım", role: "Elektronik Mühendisi", avatar: "SD" },
  { id: 17, name: "Oğuz Kartal", dept: 1, deptName: "Elektronik & Donanım", role: "PCB Tasarım Mühendisi", avatar: "OK" },
  { id: 18, name: "İrem Başar", dept: 1, deptName: "Elektronik & Donanım", role: "Elektronik Mühendisi", avatar: "İB" },
  // Gömülü Yazılım / Firmware (15)
  { id: 19, name: "Onur Tekin", dept: 2, deptName: "Gömülü Yazılım / Firmware", role: "Kıdemli Firmware Mühendisi", avatar: "OT" },
  { id: 20, name: "Seda Uçar", dept: 2, deptName: "Gömülü Yazılım / Firmware", role: "Gömülü Yazılım Mühendisi", avatar: "SU" },
  { id: 21, name: "Barış Kaplan", dept: 2, deptName: "Gömülü Yazılım / Firmware", role: "Firmware Mühendisi", avatar: "BK" },
  { id: 22, name: "Melis Tunç", dept: 2, deptName: "Gömülü Yazılım / Firmware", role: "Gömülü Yazılım Mühendisi", avatar: "MT" },
  { id: 23, name: "Serkan Ateş", dept: 2, deptName: "Gömülü Yazılım / Firmware", role: "Kıdemli Firmware Mühendisi", avatar: "SAt" },
  { id: 24, name: "Gamze Özkan", dept: 2, deptName: "Gömülü Yazılım / Firmware", role: "Firmware Mühendisi", avatar: "GÖ" },
  { id: 25, name: "Arda Sezer", dept: 2, deptName: "Gömülü Yazılım / Firmware", role: "Gömülü Yazılım Mühendisi", avatar: "AS" },
  { id: 26, name: "Deniz Acar", dept: 2, deptName: "Gömülü Yazılım / Firmware", role: "Firmware Mühendisi", avatar: "DAc" },
  { id: 27, name: "Kerem Yalçın", dept: 2, deptName: "Gömülü Yazılım / Firmware", role: "Gömülü Yazılım Mühendisi", avatar: "KY" },
  { id: 28, name: "Pınar Güler", dept: 2, deptName: "Gömülü Yazılım / Firmware", role: "Firmware Mühendisi", avatar: "PG" },
  { id: 29, name: "Taner Kurt", dept: 2, deptName: "Gömülü Yazılım / Firmware", role: "Gömülü Sistem Mühendisi", avatar: "TK" },
  { id: 30, name: "Aslı Çetin", dept: 2, deptName: "Gömülü Yazılım / Firmware", role: "Firmware Mühendisi", avatar: "AÇ" },
  { id: 31, name: "Bora Kılıç", dept: 2, deptName: "Gömülü Yazılım / Firmware", role: "Gömülü Yazılım Mühendisi", avatar: "BKl" },
  { id: 32, name: "Ece Taş", dept: 2, deptName: "Gömülü Yazılım / Firmware", role: "Firmware Mühendisi", avatar: "ET" },
  { id: 33, name: "Volkan Erdoğan", dept: 2, deptName: "Gömülü Yazılım / Firmware", role: "Kıdemli Gömülü Yazılım Mühendisi", avatar: "VE" },
  // Üst Yazılım (14)
  { id: 34, name: "Kaan Yıldırım", dept: 3, deptName: "Üst Yazılım (Teleskop, MES, SCADA)", role: "Yazılım Mimarı", avatar: "KYl" },
  { id: 35, name: "Merve Aksoy", dept: 3, deptName: "Üst Yazılım (Teleskop, MES, SCADA)", role: "Full Stack Geliştirici", avatar: "MAk" },
  { id: 36, name: "Ozan Türk", dept: 3, deptName: "Üst Yazılım (Teleskop, MES, SCADA)", role: "SCADA/MES Mühendisi", avatar: "OTr" },
  { id: 37, name: "Büşra Kara", dept: 3, deptName: "Üst Yazılım (Teleskop, MES, SCADA)", role: "Yazılım Geliştirici", avatar: "BKr" },
  { id: 38, name: "Caner Özdemir", dept: 3, deptName: "Üst Yazılım (Teleskop, MES, SCADA)", role: "Veritabanı Mühendisi", avatar: "CÖ" },
  { id: 39, name: "Duygu Şen", dept: 3, deptName: "Üst Yazılım (Teleskop, MES, SCADA)", role: "Yazılım Geliştirici", avatar: "DŞ" },
  { id: 40, name: "Erdem Bayrak", dept: 3, deptName: "Üst Yazılım (Teleskop, MES, SCADA)", role: "Backend Geliştirici", avatar: "EB" },
  { id: 41, name: "Gizem Aslan", dept: 3, deptName: "Üst Yazılım (Teleskop, MES, SCADA)", role: "Frontend Geliştirici", avatar: "GAsl" },
  { id: 42, name: "Hakan Korur", dept: 3, deptName: "Üst Yazılım (Teleskop, MES, SCADA)", role: "Güvenlik Mühendisi", avatar: "HK" },
  { id: 43, name: "İlker Duman", dept: 3, deptName: "Üst Yazılım (Teleskop, MES, SCADA)", role: "Yazılım Geliştirici", avatar: "İD" },
  { id: 44, name: "Aylin Yavuz", dept: 3, deptName: "Üst Yazılım (Teleskop, MES, SCADA)", role: "UI/UX Tasarımcısı", avatar: "AYv" },
  { id: 45, name: "Berk Çağlar", dept: 3, deptName: "Üst Yazılım (Teleskop, MES, SCADA)", role: "Cloud Mühendisi", avatar: "BÇ" },
  { id: 46, name: "Cemre Aydoğan", dept: 3, deptName: "Üst Yazılım (Teleskop, MES, SCADA)", role: "Yazılım Geliştirici", avatar: "CAy" },
  { id: 47, name: "Dilara Usta", dept: 3, deptName: "Üst Yazılım (Teleskop, MES, SCADA)", role: "Yazılım Mühendisi", avatar: "DU" },
  // Sensör Geliştirme (12)
  { id: 48, name: "Fikret Akbulut", dept: 4, deptName: "Sensör Geliştirme", role: "Kıdemli Sensör Mühendisi", avatar: "FA" },
  { id: 49, name: "Gülşen Erdal", dept: 4, deptName: "Sensör Geliştirme", role: "Sensör Geliştirme Mühendisi", avatar: "GE" },
  { id: 50, name: "Halil Çetin", dept: 4, deptName: "Sensör Geliştirme", role: "Optik Sensör Mühendisi", avatar: "HÇ" },
  { id: 51, name: "İpek Sarı", dept: 4, deptName: "Sensör Geliştirme", role: "Sensör Mühendisi", avatar: "İS" },
  { id: 52, name: "Kadir Varol", dept: 4, deptName: "Sensör Geliştirme", role: "Sensör Kalibrasyon Mühendisi", avatar: "KV" },
  { id: 53, name: "Leyla Durmuş", dept: 4, deptName: "Sensör Geliştirme", role: "Sensör Geliştirme Mühendisi", avatar: "LD" },
  { id: 54, name: "Mustafa Bayar", dept: 4, deptName: "Sensör Geliştirme", role: "Kimyasal Sensör Mühendisi", avatar: "MB" },
  { id: 55, name: "Neslihan Özer", dept: 4, deptName: "Sensör Geliştirme", role: "Sensör Mühendisi", avatar: "NÖ" },
  { id: 56, name: "Orhan Koç", dept: 4, deptName: "Sensör Geliştirme", role: "Sensör Geliştirme Mühendisi", avatar: "OKç" },
  { id: 57, name: "Selma Tuncer", dept: 4, deptName: "Sensör Geliştirme", role: "Sensör Mühendisi", avatar: "STn" },
  { id: 58, name: "Ümit Korkut", dept: 4, deptName: "Sensör Geliştirme", role: "Sensör Elektronik Mühendisi", avatar: "ÜK" },
  { id: 59, name: "Yasemin Bal", dept: 4, deptName: "Sensör Geliştirme", role: "Sensör Geliştirme Mühendisi", avatar: "YB" },
  // Mekatronik & Robotik (10)
  { id: 60, name: "Ali Rıza Çam", dept: 5, deptName: "Mekatronik & Robotik", role: "Kıdemli Mekatronik Mühendisi", avatar: "ARÇ" },
  { id: 61, name: "Betül Kırıcı", dept: 5, deptName: "Mekatronik & Robotik", role: "Mekatronik Mühendisi", avatar: "BKr" },
  { id: 62, name: "Cenk Yücel", dept: 5, deptName: "Mekatronik & Robotik", role: "Mekanik Tasarım Mühendisi", avatar: "CY" },
  { id: 63, name: "Damla Öğüt", dept: 5, deptName: "Mekatronik & Robotik", role: "Mekatronik Mühendisi", avatar: "DÖ" },
  { id: 64, name: "Erhan Soylu", dept: 5, deptName: "Mekatronik & Robotik", role: "Otomasyon Mühendisi", avatar: "ES" },
  { id: 65, name: "Ferhat Güngör", dept: 5, deptName: "Mekatronik & Robotik", role: "Mekatronik Mühendisi", avatar: "FG" },
  { id: 66, name: "Gökhan Arıkan", dept: 5, deptName: "Mekatronik & Robotik", role: "Mekanik Tasarım Mühendisi", avatar: "GArk" },
  { id: 67, name: "Hatice Ülker", dept: 5, deptName: "Mekatronik & Robotik", role: "Mekatronik Mühendisi", avatar: "HÜ" },
  { id: 68, name: "İsmail Keskin", dept: 5, deptName: "Mekatronik & Robotik", role: "Robotik Mühendisi", avatar: "İK" },
  { id: 69, name: "Jale Türkmen", dept: 5, deptName: "Mekatronik & Robotik", role: "Mekatronik Mühendisi", avatar: "JT" },
  // Test & Kalite (8)
  { id: 70, name: "Kemal Turan", dept: 6, deptName: "Test & Kalite", role: "Test Mühendisi Lideri", avatar: "KTr" },
  { id: 71, name: "Lale Demirtaş", dept: 6, deptName: "Test & Kalite", role: "Test Mühendisi", avatar: "LDm" },
  { id: 72, name: "Mehmet Akif Ceylan", dept: 6, deptName: "Test & Kalite", role: "Kalite Güvence Mühendisi", avatar: "MAC" },
  { id: 73, name: "Nihal Yazıcı", dept: 6, deptName: "Test & Kalite", role: "Test Mühendisi", avatar: "NY" },
  { id: 74, name: "Osman Kılınç", dept: 6, deptName: "Test & Kalite", role: "EMC Test Mühendisi", avatar: "OKl" },
  { id: 75, name: "Perihan Boz", dept: 6, deptName: "Test & Kalite", role: "Kalite Kontrol Mühendisi", avatar: "PBz" },
  { id: 76, name: "Ramazan Acar", dept: 6, deptName: "Test & Kalite", role: "Test Mühendisi", avatar: "RAc" },
  { id: 77, name: "Sevgi Ertürk", dept: 6, deptName: "Test & Kalite", role: "Test Otomasyon Mühendisi", avatar: "SrE" },
  // Sistem & Proje Mühendisliği (8)
  { id: 78, name: "Tarık Güneyli", dept: 7, deptName: "Sistem & Proje Mühendisliği", role: "Proje Müdürü", avatar: "TGl" },
  { id: 79, name: "Ufuk Yıldırım", dept: 7, deptName: "Sistem & Proje Mühendisliği", role: "Sistem Mühendisi", avatar: "UYl" },
  { id: 80, name: "Vahit Ergün", dept: 7, deptName: "Sistem & Proje Mühendisliği", role: "Sistem Entegrasyon Mühendisi", avatar: "VErg" },
  { id: 81, name: "Yeliz Çakır", dept: 7, deptName: "Sistem & Proje Mühendisliği", role: "Proje Koordinatörü", avatar: "YÇk" },
  { id: 82, name: "Zafer Bulut", dept: 7, deptName: "Sistem & Proje Mühendisliği", role: "Sistem Mühendisi", avatar: "ZBt" },
  { id: 83, name: "Ayça Köse", dept: 7, deptName: "Sistem & Proje Mühendisliği", role: "Proje Mühendisi", avatar: "AKs" },
  { id: 84, name: "Bilge Tanrıverdi", dept: 7, deptName: "Sistem & Proje Mühendisliği", role: "Sistem Analisti", avatar: "BT" },
  { id: 85, name: "Cengiz Yılmazer", dept: 7, deptName: "Sistem & Proje Mühendisliği", role: "Proje Mühendisi", avatar: "CYlmz" }
];

const PROJECTS = [
  {
    id: 1,
    name: "T9 PLC v3 Ana Kart",
    desc: "Yeni nesil endüstriyel kontrolör ana kart tasarımı. STM32H7 + Xilinx Artix-7 FPGA tabanlı.",
    depts: [1, 2],
    status: "devam",
    startMonth: 1, // Şubat 2026 = index 1
    endMonth: 5,   // Temmuz 2026 = index 5
    startDate: "Şubat 2026",
    endDate: "Temmuz 2026",
    budget: 850000,
    spent: 520000,
    members: [1, 2, 3, 5, 9, 13, 19, 23],
    tags: ["PLC", "FPGA", "STM32", "Endüstriyel"]
  },
  {
    id: 2,
    name: "T7 Operatör Panel 10\"",
    desc: "HMI dokunmatik panel yeni donanım. 10.1\" kapasitif LCD, Linux gömülü OS.",
    depts: [1, 2],
    status: "devam",
    startMonth: 2,
    endMonth: 6,
    startDate: "Mart 2026",
    endDate: "Ağustos 2026",
    budget: 420000,
    spent: 280000,
    members: [4, 7, 10, 21, 27],
    tags: ["HMI", "Linux", "Dokunmatik", "Panel"]
  },
  {
    id: 3,
    name: "T7PAC Firmware v6",
    desc: "PLC firmware ana güncelleme. EtherCAT slave desteği ve yeni haberleşme protokolleri.",
    depts: [2],
    status: "planlanan",
    startMonth: 4,
    endMonth: 8,
    startDate: "Haziran 2026",
    endDate: "Ekim 2026",
    budget: 180000,
    spent: 15000,
    members: [19, 20, 22, 27, 29, 33],
    tags: ["Firmware", "EtherCAT", "PLC", "Protokol"]
  },
  {
    id: 4,
    name: "Teleskop v5 Boyahane Yönetim",
    desc: "Tekstil boyahane SCADA/MES yazılımı. WebSocket tabanlı gerçek zamanlı izleme, PostgreSQL.",
    depts: [3],
    status: "devam",
    startMonth: 0,
    endMonth: 5,
    startDate: "Ocak 2026",
    endDate: "Temmuz 2026",
    budget: 380000,
    spent: 195000,
    members: [34, 35, 36, 38, 41, 46],
    tags: ["SCADA", "MES", "Tekstil", "WebSocket"]
  },
  {
    id: 5,
    name: "RD96 Sıvı Dozajlama v2",
    desc: "Kimyasal otomasyon sıvı dozajlama sistemi güncellemesi. Kavitasyon sorunu çözüldü.",
    depts: [5],
    status: "tamamlandi",
    startMonth: -2,
    endMonth: 2,
    startDate: "Kasım 2025",
    endDate: "Mart 2026",
    budget: 310000,
    spent: 310000,
    members: [60, 62, 64, 66],
    tags: ["Dozajlama", "Kimyasal", "Otomasyon"]
  },
  {
    id: 6,
    name: "ADW Toz Boyarmadde Otomasyon",
    desc: "Toz tartım sistemi. ±0.05g hassasiyet, servo motor kontrol, PID optimizasyonu.",
    depts: [5, 2],
    status: "devam",
    startMonth: 1,
    endMonth: 4,
    startDate: "Şubat 2026",
    endDate: "Haziran 2026",
    budget: 260000,
    spent: 180000,
    members: [60, 61, 63, 64, 65, 24],
    tags: ["Tartım", "Servo", "PID", "Toz"]
  },
  {
    id: 7,
    name: "LABx Next Laboratuvar",
    desc: "Laboratuvar dozajlama yeni nesil sistem. Otomatik örnek hazırlama, LIMS entegrasyonu.",
    depts: [7, 5],
    status: "planlanan",
    startMonth: 5,
    endMonth: 9,
    startDate: "Temmuz 2026",
    endDate: "Kasım 2026",
    budget: 320000,
    spent: 0,
    members: [78, 79, 82, 62, 68],
    tags: ["Laboratuvar", "LIMS", "Dozajlama"]
  },
  {
    id: 8,
    name: "PMT140 pH Sensörü v2",
    desc: "pH/ORP ölçüm sensörü yeni nesil. Cam elektrot ±0.005 hassasiyet, IP68.",
    depts: [4],
    status: "devam",
    startMonth: 2,
    endMonth: 5,
    startDate: "Mart 2026",
    endDate: "Temmuz 2026",
    budget: 290000,
    spent: 210000,
    members: [48, 49, 54, 58, 66],
    tags: ["pH", "Sensör", "ORP", "Tekstil"]
  },
  {
    id: 9,
    name: "ICT200 İletkenlik Sensörü",
    desc: "Endüktif iletkenlik sensörü 0-2000 mS/cm. Final kalibrasyon tamamlandı, üretime hazır.",
    depts: [4],
    status: "tamamlandi",
    startMonth: -1,
    endMonth: 1,
    startDate: "Aralık 2025",
    endDate: "Şubat 2026",
    budget: 220000,
    spent: 220000,
    members: [52, 55, 57, 59],
    tags: ["İletkenlik", "Sensör", "Kalibrasyon"]
  },
  {
    id: 10,
    name: "SAT210 Spektrofotometrik Sensör",
    desc: "Renk/konsantrasyon ölçer. 380-780nm aralık, 1nm çözünürlük, tekstil sektörü.",
    depts: [4],
    status: "devam",
    startMonth: 1,
    endMonth: 6,
    startDate: "Şubat 2026",
    endDate: "Ağustos 2026",
    budget: 340000,
    spent: 150000,
    members: [50, 51, 53, 56, 58, 70],
    tags: ["Spektrofotometre", "Renk", "Tekstil", "Optik"]
  },
  {
    id: 11,
    name: "IIoT Gateway & Bulut",
    desc: "Endüstri 4.0 bağlantı modülü. MQTT broker, AWS IoT Core, 1000+ cihaz desteği.",
    depts: [3],
    status: "devam",
    startMonth: 3,
    endMonth: 7,
    startDate: "Nisan 2026",
    endDate: "Eylül 2026",
    budget: 220000,
    spent: 95000,
    members: [36, 42, 45, 47, 40],
    tags: ["IIoT", "MQTT", "AWS", "Bulut"]
  },
  {
    id: 12,
    name: "PPD Baskı Boya Mutfağı v3",
    desc: "Baskı boya otomasyon sistemi. Otomatik formülasyon, barkod entegrasyonu, PLC kontrolü.",
    depts: [5, 3, 7],
    status: "planlanan",
    startMonth: 6,
    endMonth: 10,
    startDate: "Ağustos 2026",
    endDate: "Aralık 2026",
    budget: 290000,
    spent: 0,
    members: [60, 62, 68, 34, 78, 83],
    tags: ["Boya", "Otomasyon", "PLC", "Baskı"]
  }
];

const NOTES = [
  // Proje Notları
  { id: 1, text: "T9 PLC ana kart rev4 şematik review tamamlandı, EMC için filtre katı eklendi. Güç katmanında düzeltmeler yapıldı.", author: "Ahmet Yılmaz", authorId: 1, dept: "Elektronik & Donanım", project: "T9 PLC v3 Ana Kart", projectId: 1, category: "proje", date: "28 Nisan 2026", tags: ["T9", "PCB", "EMC", "Şematik"] },
  { id: 2, text: "Teleskop v5 WebSocket modülü 500 eşzamanlı bağlantı destekliyor, load test başarılı. Nginx reverse proxy konfigürasyonu tamamlandı.", author: "Kaan Yıldırım", authorId: 34, dept: "Üst Yazılım", project: "Teleskop v5 Boyahane Yönetim", projectId: 4, category: "proje", date: "25 Nisan 2026", tags: ["Teleskop", "WebSocket", "SCADA"] },
  { id: 3, text: "PMT140 yeni cam elektrot 0-14 pH aralığında ±0.005 hassasiyet doğrulandı. Karşılaştırmalı kalibrasyon 3 farklı referans çözeltisiyle yapıldı.", author: "Fikret Akbulut", authorId: 48, dept: "Sensör Geliştirme", project: "PMT140 pH Sensörü v2", projectId: 8, category: "proje", date: "22 Nisan 2026", tags: ["PMT140", "pH", "Kalibrasyon", "Tekstil"] },
  { id: 4, text: "T7 panel kapasitif dokunmatik ekran sürücüsü Linux kernel 5.15'e entegre edildi. Çoklu dokunma desteği çalışıyor.", author: "Onur Tekin", authorId: 19, dept: "Gömülü Yazılım", project: "T7 Operatör Panel 10\"", projectId: 2, category: "proje", date: "20 Nisan 2026", tags: ["T7", "Linux", "Touchscreen", "Kernel"] },
  { id: 5, text: "SAT210 dalga boyu tarama hızı 2x artırıldı. DSP algoritması optimize edildi, 380-780nm tam tarama artık 0.8 saniyede tamamlanıyor.", author: "Halil Çetin", authorId: 50, dept: "Sensör Geliştirme", project: "SAT210 Spektrofotometrik Sensör", projectId: 10, category: "proje", date: "18 Nisan 2026", tags: ["SAT210", "Spektrofotometre", "DSP", "Optik"] },
  { id: 6, text: "ADW servo motor kalibrasyonu ±0.05g hassasiyete ulaşıldı. 5kg ölçüm aralığında 3000 test döngüsü başarıyla tamamlandı.", author: "Ali Rıza Çam", authorId: 60, dept: "Mekatronik & Robotik", project: "ADW Toz Boyarmadde Otomasyon", projectId: 6, category: "proje", date: "15 Nisan 2026", tags: ["ADW", "Servo", "Kalibrasyon", "Tartım"] },
  { id: 7, text: "IIoT Gateway MQTT broker 1000 cihaz simülasyonu başarılı. HiveMQ cluster kurulumu tamamlandı, failover test edildi.", author: "Ozan Türk", authorId: 36, dept: "Üst Yazılım", project: "IIoT Gateway & Bulut", projectId: 11, category: "proje", date: "12 Nisan 2026", tags: ["IIoT", "MQTT", "HiveMQ", "Cluster"] },
  { id: 8, text: "RD96 dozajlama pompası kavitasyon çözüldü, yeni impeller tasarımıyla akış stabilize edildi. 72 saat sürekli çalışma testi başarılı.", author: "Cenk Yücel", authorId: 62, dept: "Mekatronik & Robotik", project: "RD96 Sıvı Dozajlama v2", projectId: 5, category: "proje", date: "10 Nisan 2026", tags: ["RD96", "Pompa", "Kavitasyon", "Dozajlama"] },
  { id: 9, text: "T9 PLC güç katı EMI testleri geçti, CE uyumlu. CISPR 11 Class A standardına göre test tamamlandı.", author: "Burak Demir", authorId: 3, dept: "Elektronik & Donanım", project: "T9 PLC v3 Ana Kart", projectId: 1, category: "proje", date: "8 Nisan 2026", tags: ["T9", "EMI", "CE", "CISPR"] },
  { id: 10, text: "Teleskop mobil app React Native ile geliştiriliyor. iOS ve Android aynı kod tabanı. Push notification desteği eklendi.", author: "Merve Aksoy", authorId: 35, dept: "Üst Yazılım", project: "Teleskop v5 Boyahane Yönetim", projectId: 4, category: "proje", date: "5 Nisan 2026", tags: ["Teleskop", "Mobil", "React Native"] },
  { id: 11, text: "ICT200 sensör final kalibrasyon tamamlandı, üretime hazır belgesi imzalandı. 0-2000 mS/cm aralık doğrulandı.", author: "Kadir Varol", authorId: 52, dept: "Sensör Geliştirme", project: "ICT200 İletkenlik Sensörü", projectId: 9, category: "proje", date: "1 Nisan 2026", tags: ["ICT200", "İletkenlik", "Kalibrasyon"] },
  { id: 12, text: "T7 panel boot süresi 4.2sn'den 2.8sn'ye düşürüldü. Udev kuralları ve systemd servisleri optimize edildi.", author: "Barış Kaplan", authorId: 21, dept: "Gömülü Yazılım", project: "T7 Operatör Panel 10\"", projectId: 2, category: "proje", date: "28 Mart 2026", tags: ["T7", "Boot", "Linux", "Optimizasyon"] },
  { id: 13, text: "ADW konveyör hız regülasyonu PID parametreleri optimize edildi. Kp=1.2, Ki=0.05, Kd=0.01 ile en iyi yanıt elde edildi.", author: "Erhan Soylu", authorId: 64, dept: "Mekatronik & Robotik", project: "ADW Toz Boyarmadde Otomasyon", projectId: 6, category: "proje", date: "25 Mart 2026", tags: ["ADW", "PID", "Konveyör", "Kontrol"] },
  { id: 14, text: "SAT210 optik modül termal stabilite testi 0-60°C aralığında başarılı. Dalga boyu kayması ±0.2nm içinde kaldı.", author: "Gülşen Erdal", authorId: 49, dept: "Sensör Geliştirme", project: "SAT210 Spektrofotometrik Sensör", projectId: 10, category: "proje", date: "22 Mart 2026", tags: ["SAT210", "Termal", "Optik", "Test"] },
  { id: 15, text: "Teleskop v5 veritabanı şeması PostgreSQL'e migrate edildi. 5 milyon kayıt başarıyla aktarıldı, indeksler optimize edildi.", author: "Caner Özdemir", authorId: 38, dept: "Üst Yazılım", project: "Teleskop v5 Boyahane Yönetim", projectId: 4, category: "proje", date: "18 Mart 2026", tags: ["Teleskop", "PostgreSQL", "Migration"] },
  { id: 16, text: "T9 PLC Ethernet/IP stack implementasyonu devam ediyor. CIP protokolü temel katmanı tamamlandı, IO tarama çalışıyor.", author: "Serkan Ateş", authorId: 23, dept: "Gömülü Yazılım", project: "T9 PLC v3 Ana Kart", projectId: 1, category: "proje", date: "15 Mart 2026", tags: ["T9", "EthernetIP", "CIP", "Protokol"] },
  { id: 17, text: "RD96 HMI arayüz kullanıcı testleri tamamlandı. 12 operatör ile test yapıldı, kullanılabilirlik skoru 8.7/10.", author: "Gamze Özkan", authorId: 24, dept: "Gömülü Yazılım", project: "RD96 Sıvı Dozajlama v2", projectId: 5, category: "proje", date: "12 Mart 2026", tags: ["RD96", "HMI", "Kullanıcı Testi"] },
  { id: 18, text: "PMT140 sensör muhafaza IP68 sızıntı testi geçti. 2 metre su altında 24 saat test başarılı.", author: "Gökhan Arıkan", authorId: 66, dept: "Mekatronik & Robotik", project: "PMT140 pH Sensörü v2", projectId: 8, category: "proje", date: "8 Mart 2026", tags: ["PMT140", "IP68", "Su Geçirmezlik"] },
  { id: 19, text: "T7PAC v6 gereksinim dokümanı hazırlandı. 47 yeni özellik tanımlandı, önceliklendirme yapıldı.", author: "Kerem Yalçın", authorId: 27, dept: "Gömülü Yazılım", project: "T7PAC Firmware v6", projectId: 3, category: "proje", date: "5 Mart 2026", tags: ["T7PAC", "Gereksinim", "Firmware"] },
  { id: 20, text: "IIoT Gateway AWS IoT Core entegrasyonu tamamlandı. X.509 sertifika tabanlı kimlik doğrulama aktif.", author: "Berk Çağlar", authorId: 45, dept: "Üst Yazılım", project: "IIoT Gateway & Bulut", projectId: 11, category: "proje", date: "1 Mart 2026", tags: ["IIoT", "AWS", "IoT Core", "Güvenlik"] },
  // Plan Notları
  { id: 21, text: "Gelecek ay T9 PLC termal analiz ve güç dağıtım simülasyonu yapılacak. ANSYS Icepak lisansı istendi.", author: "Elif Kaya", authorId: 2, dept: "Elektronik & Donanım", project: "T9 PLC v3 Ana Kart", projectId: 1, category: "plan", date: "26 Nisan 2026", tags: ["T9", "Termal", "Simülasyon"] },
  { id: 22, text: "Teleskop v5 mobil app Haziran'da beta çıkacak. TestFlight ve Google Play Internal track'e yüklenecek.", author: "Kaan Yıldırım", authorId: 34, dept: "Üst Yazılım", project: "Teleskop v5 Boyahane Yönetim", projectId: 4, category: "plan", date: "24 Nisan 2026", tags: ["Teleskop", "Mobil", "Beta"] },
  { id: 23, text: "LABx Next proje kickoff toplantısı 15 Mayıs. Ekip oluşturuldu, proje planı taslağı hazırlandı.", author: "Tarık Güneyli", authorId: 78, dept: "Sistem & Proje", project: "LABx Next Laboratuvar", projectId: 7, category: "plan", date: "20 Nisan 2026", tags: ["LABx", "Kickoff", "Planlama"] },
  { id: 24, text: "T7PAC v6 firmware geliştirme Haziran başı start. Ekip 6 kişi, sprint planlaması yapıldı.", author: "Onur Tekin", authorId: 19, dept: "Gömülü Yazılım", project: "T7PAC Firmware v6", projectId: 3, category: "plan", date: "18 Nisan 2026", tags: ["T7PAC", "Sprint", "Planlama"] },
  { id: 25, text: "PPD v3 fizibilite raporu Temmuz'da sunulacak. Pazar araştırması ve rakip analizi devam ediyor.", author: "Zafer Bulut", authorId: 82, dept: "Sistem & Proje", project: "PPD Baskı Boya Mutfağı v3", projectId: 12, category: "plan", date: "15 Nisan 2026", tags: ["PPD", "Fizibilite", "Pazar"] },
  { id: 26, text: "SAT210 saha testleri Haziran'da müşteri tesisinde yapılacak. 2 adet prototip müşteriye gönderilecek.", author: "İpek Sarı", authorId: 51, dept: "Sensör Geliştirme", project: "SAT210 Spektrofotometrik Sensör", projectId: 10, category: "plan", date: "12 Nisan 2026", tags: ["SAT210", "Saha Testi", "Müşteri"] },
  { id: 27, text: "IIoT Gateway güvenlik penetrasyon testi Mayıs sonu. Harici güvenlik firması ile anlaşıldı.", author: "Hakan Korur", authorId: 42, dept: "Üst Yazılım", project: "IIoT Gateway & Bulut", projectId: 11, category: "plan", date: "10 Nisan 2026", tags: ["IIoT", "Güvenlik", "Pentest"] },
  { id: 28, text: "ADW yeni model mekanik tasarım Temmuz'a kadar bitirilecek. SOLIDWORKS tasarım başlandı.", author: "Betül Kırıcı", authorId: 61, dept: "Mekatronik & Robotik", project: "ADW Toz Boyarmadde Otomasyon", projectId: 6, category: "plan", date: "8 Nisan 2026", tags: ["ADW", "Mekanik", "SOLIDWORKS"] },
  { id: 29, text: "T9 PLC CE belgelendirme süreci Ağustos'ta başlayacak. SGS ile ön görüşme yapıldı.", author: "Ahmet Yılmaz", authorId: 1, dept: "Elektronik & Donanım", project: "T9 PLC v3 Ana Kart", projectId: 1, category: "plan", date: "5 Nisan 2026", tags: ["T9", "CE", "Belgelendirme"] },
  { id: 30, text: "PMT140 v2 müşteri demo sunumu Mayıs ortasında. 3 potansiyel müşteri davet edildi.", author: "Fikret Akbulut", authorId: 48, dept: "Sensör Geliştirme", project: "PMT140 pH Sensörü v2", projectId: 8, category: "plan", date: "2 Nisan 2026", tags: ["PMT140", "Demo", "Müşteri"] },
  // Bilgi Bankası Notları
  { id: 31, text: "STM32H7 SPI DMA max throughput: 50Mbps. T9'da bu limit kritik. FIFO buffer 64 byte, DMA transfer minimum latency 200ns.", author: "Fatih Şahin", authorId: 9, dept: "Elektronik & Donanım", project: "T9 PLC v3 Ana Kart", projectId: 1, category: "bilgi", date: "20 Nisan 2026", tags: ["STM32", "SPI", "DMA", "Teknik"] },
  { id: 32, text: "pH cam elektrot ömrü: ortalama 18 ay. Yüksek sıcaklıkta (>60°C) 12 aya düşüyor. Referans elektrot doldurma çözeltisi 3 ayda bir yenilenmeli.", author: "Fikret Akbulut", authorId: 48, dept: "Sensör Geliştirme", project: "PMT140 pH Sensörü v2", projectId: 8, category: "bilgi", date: "18 Nisan 2026", tags: ["pH", "Elektrot", "Bakım", "Tekstil"] },
  { id: 33, text: "Teleskop SCADA protokolü: Modbus TCP/IP, port 502. Register haritası Rev3.2'ye göre. Float değerler IEEE 754, büyük endian.", author: "Ozan Türk", authorId: 36, dept: "Üst Yazılım", project: "Teleskop v5 Boyahane Yönetim", projectId: 4, category: "bilgi", date: "15 Nisan 2026", tags: ["Teleskop", "Modbus", "SCADA", "Protokol"] },
  { id: 34, text: "T7 panel boot süresi: cold start 4.2sn, warm start 1.8sn (güncel: 2.8sn cold). RAM boyutu 512MB, eMMC 8GB.", author: "Barış Kaplan", authorId: 21, dept: "Gömülü Yazılım", project: "T7 Operatör Panel 10\"", projectId: 2, category: "bilgi", date: "12 Nisan 2026", tags: ["T7", "Boot", "Donanım", "Linux"] },
  { id: 35, text: "RD96 dozaj pompası max debi: 2.5 L/dk, min: 0.01 L/dk. Çözücü viskozite 1-500 cP aralığında çalışıyor. Pompa ömrü 10.000 saat.", author: "Cenk Yücel", authorId: 62, dept: "Mekatronik & Robotik", project: "RD96 Sıvı Dozajlama v2", projectId: 5, category: "bilgi", date: "10 Nisan 2026", tags: ["RD96", "Pompa", "Debi", "Teknik"] },
  { id: 36, text: "ICT200 iletkenlik ölçüm aralığı: 0-2000 mS/cm. Sıcaklık kompanzasyonu -5 ile +120°C arasında otomatik.", author: "Kadir Varol", authorId: 52, dept: "Sensör Geliştirme", project: "ICT200 İletkenlik Sensörü", projectId: 9, category: "bilgi", date: "8 Nisan 2026", tags: ["ICT200", "İletkenlik", "Kompanzasyon"] },
  { id: 37, text: "SAT210 dalga boyu aralığı: 380-780nm, çözünürlük 1nm. Işık kaynağı: pulsed xenon 0.5 milyon döngü ömrü.", author: "Halil Çetin", authorId: 50, dept: "Sensör Geliştirme", project: "SAT210 Spektrofotometrik Sensör", projectId: 10, category: "bilgi", date: "6 Nisan 2026", tags: ["SAT210", "Spektrofotometre", "Optik", "Teknik"] },
  { id: 38, text: "Beckhoff EtherCAT cycle time: 250μs minimum. T9 PLC'de bu destekleniyor. Slave sayısı max 65535, toplu gecikme <1μs.", author: "Serkan Ateş", authorId: 23, dept: "Gömülü Yazılım", project: "T9 PLC v3 Ana Kart", projectId: 1, category: "bilgi", date: "4 Nisan 2026", tags: ["T9", "EtherCAT", "Beckhoff", "Gerçek Zamanlı"] },
  { id: 39, text: "ADW toz tartım hassasiyeti: ±0.1g (0-5kg aralık), ±0.5g (5-50kg). Boşta kalma gürültü: <0.02g RMS.", author: "Ali Rıza Çam", authorId: 60, dept: "Mekatronik & Robotik", project: "ADW Toz Boyarmadde Otomasyon", projectId: 6, category: "bilgi", date: "2 Nisan 2026", tags: ["ADW", "Tartım", "Hassasiyet", "Teknik"] },
  { id: 40, text: "Tekstil boyama sıcaklık toleransı: ±0.5°C (müşteri requirement). Eliar sensörleri ±0.1°C hassasiyet sunuyor — 5x margin.", author: "Tarık Güneyli", authorId: 78, dept: "Sistem & Proje", project: "PMT140 pH Sensörü v2", projectId: 8, category: "bilgi", date: "30 Mart 2026", tags: ["Tekstil", "Sıcaklık", "Gereksinim"] },
  { id: 41, text: "Modbus RTU vs TCP/IP: RTU max 247 slave, 115200 baud. TCP/IP sınırsız slave, 100Mbps. Teleskop TCP/IP kullanıyor.", author: "Ozan Türk", authorId: 36, dept: "Üst Yazılım", project: "Teleskop v5 Boyahane Yönetim", projectId: 4, category: "bilgi", date: "28 Mart 2026", tags: ["Modbus", "RTU", "TCP", "Protokol"] },
  { id: 42, text: "T9 PLC Xilinx Artix-7 XC7A100T kullanıyor. 101K LUT, 240 DSP slice, 4.9Mb BRAM. Synthesis time ~45 dakika.", author: "Ahmet Yılmaz", authorId: 1, dept: "Elektronik & Donanım", project: "T9 PLC v3 Ana Kart", projectId: 1, category: "bilgi", date: "25 Mart 2026", tags: ["T9", "FPGA", "Xilinx", "Donanım"] },
  // Risk/Blocker Notları
  { id: 43, text: "⚠️ T9 PLC FPGA çipi (Xilinx Artix-7 XC7A100T) tedarik süresi 8 haftaya çıktı. Proje takvimi etkilenebilir. Alternatif Intel Cyclone V inceleniyor.", author: "Ahmet Yılmaz", authorId: 1, dept: "Elektronik & Donanım", project: "T9 PLC v3 Ana Kart", projectId: 1, category: "risk", date: "27 Nisan 2026", tags: ["T9", "FPGA", "Tedarik", "Kritik"], severity: "yüksek" },
  { id: 44, text: "⚠️ SAT210 optik filtre tedarikçisi (Thorlabs) fiyat %30 artırdı. Bütçe revizyonu gerekebilir. Semrock ve Edmund Optics alternatif aranıyor.", author: "Gülşen Erdal", authorId: 49, dept: "Sensör Geliştirme", project: "SAT210 Spektrofotometrik Sensör", projectId: 10, category: "risk", date: "25 Nisan 2026", tags: ["SAT210", "Tedarik", "Bütçe", "Optik"], severity: "orta" },
  { id: 45, text: "⚠️ Teleskop v5 veritabanı migration sırasında veri kaybı riski tespit edildi. NULL constraint ihlalleri var. Ekstra test ve rollback planı hazırlanıyor.", author: "Caner Özdemir", authorId: 38, dept: "Üst Yazılım", project: "Teleskop v5 Boyahane Yönetim", projectId: 4, category: "risk", date: "23 Nisan 2026", tags: ["Teleskop", "Veritabanı", "Veri Kaybı", "Kritik"], severity: "yüksek" },
  { id: 46, text: "⚠️ ADW step motor sürücü (Beckhoff EL7047) stokta yok, 3 hafta bekleme. Test aşaması gecikebilir. Yedek servo çözüm araştırılıyor.", author: "Erhan Soylu", authorId: 64, dept: "Mekatronik & Robotik", project: "ADW Toz Boyarmadde Otomasyon", projectId: 6, category: "risk", date: "21 Nisan 2026", tags: ["ADW", "Beckhoff", "Tedarik", "Motor"], severity: "orta" },
  { id: 47, text: "⚠️ T7 panel LCD tedarikçisi (Innolux) üretim kapasitesini düşürdü. 10.1\" AUO panel alternatif olarak değerlendiriliyor, sürücü uyumluluğu test edilecek.", author: "Selin Arslan", authorId: 4, dept: "Elektronik & Donanım", project: "T7 Operatör Panel 10\"", projectId: 2, category: "risk", date: "19 Nisan 2026", tags: ["T7", "LCD", "Tedarik", "Innolux"], severity: "orta" },
  { id: 48, text: "⚠️ IIoT Gateway güvenlik sertifikası (IEC 62443) süreci 2-3 ay uzayabilir. Ön belgelendirme danışmanlık firmasıyla görüşüldü.", author: "Hakan Korur", authorId: 42, dept: "Üst Yazılım", project: "IIoT Gateway & Bulut", projectId: 11, category: "risk", date: "17 Nisan 2026", tags: ["IIoT", "IEC62443", "Sertifikasyon", "Güvenlik"], severity: "düşük" },
  { id: 49, text: "⚠️ PMT140 cam elektrot tedarikçisi Endress+Hauser teslimatı 2 hafta gecikti. Gümrükte takılı. Alternatif Hamilton Company'den hızlandırılmış sipariş verildi.", author: "Mustafa Bayar", authorId: 54, dept: "Sensör Geliştirme", project: "PMT140 pH Sensörü v2", projectId: 8, category: "risk", date: "15 Nisan 2026", tags: ["PMT140", "Gümrük", "Tedarik", "Elektrot"], severity: "orta" },
  { id: 50, text: "⚠️ T9 PLC 6 katman PCB maliyeti beklenenin %20 üzerinde geldi. JLCPCB fiyat artışı. PCB tasarım revizyon ile 4 katmana düşürme inceleniyor.", author: "Elif Kaya", authorId: 2, dept: "Elektronik & Donanım", project: "T9 PLC v3 Ana Kart", projectId: 1, category: "risk", date: "12 Nisan 2026", tags: ["T9", "PCB", "Maliyet", "Bütçe"], severity: "orta" },
  // Ek Proje Notları
  { id: 51, text: "T9 PLC Profinet IRT modülü prototipi tamamlandı. 1ms jitter ile gerçek zamanlı IO haberleşmesi doğrulandı.", author: "Serkan Ateş", authorId: 23, dept: "Gömülü Yazılım", project: "T9 PLC v3 Ana Kart", projectId: 1, category: "proje", date: "2 Mayıs 2026", tags: ["T9", "Profinet", "Gerçek Zamanlı"] },
  { id: 52, text: "SAT210 müşteri demo sunumu yapıldı. 3 tekstil fabrikası ilgi gösterdi. LOI (niyet mektubu) bekleniyor.", author: "İpek Sarı", authorId: 51, dept: "Sensör Geliştirme", project: "SAT210 Spektrofotometrik Sensör", projectId: 10, category: "proje", date: "30 Nisan 2026", tags: ["SAT210", "Demo", "Müşteri", "Tekstil"] },
  { id: 53, text: "Teleskop v5 boyahane modülü 3 müşteri tesisinde canlıya alındı. Eş zamanlı 150 makine izleniyor.", author: "Kaan Yıldırım", authorId: 34, dept: "Üst Yazılım", project: "Teleskop v5 Boyahane Yönetim", projectId: 4, category: "proje", date: "28 Nisan 2026", tags: ["Teleskop", "Canlı", "Boyahane", "Müşteri"] },
  { id: 54, text: "ADW vibrasyon analizi tamamlandı. Konveyör titreşimi tartım hassasiyetini etkilemiyor. Ek dampfer gerekmiyor.", author: "Damla Öğüt", authorId: 63, dept: "Mekatronik & Robotik", project: "ADW Toz Boyarmadde Otomasyon", projectId: 6, category: "proje", date: "26 Nisan 2026", tags: ["ADW", "Vibrasyon", "Tartım", "Analiz"] },
  { id: 55, text: "PMT140 ATEX sertifikası için başvuru yapıldı. Ex ia IIC T4 Ga sınıfı hedefleniyor. TÜV incelemesi Haziran'da.", author: "Fikret Akbulut", authorId: 48, dept: "Sensör Geliştirme", project: "PMT140 pH Sensörü v2", projectId: 8, category: "proje", date: "24 Nisan 2026", tags: ["PMT140", "ATEX", "Sertifikasyon", "Ex"] },
  { id: 56, text: "IIoT Gateway OPC-UA sunucu implementasyonu başladı. Kepware OPC-UA server ile uyumluluk test ediliyor.", author: "Erdem Bayrak", authorId: 40, dept: "Üst Yazılım", project: "IIoT Gateway & Bulut", projectId: 11, category: "proje", date: "22 Nisan 2026", tags: ["IIoT", "OPC-UA", "Kepware", "Endüstri 4.0"] },
  { id: 57, text: "T7PAC v6 EtherCAT master stack seçildi: EtherCAT Technology Group referans implementasyonu. Lisans alındı.", author: "Volkan Erdoğan", authorId: 33, dept: "Gömülü Yazılım", project: "T7PAC Firmware v6", projectId: 3, category: "proje", date: "20 Nisan 2026", tags: ["T7PAC", "EtherCAT", "Master", "Lisans"] },
  { id: 58, text: "ICT200 Türkiye akreditasyon belgelendirmesi tamamlandı. TSE ve TÜRKAK onaylı kalibrasyon sertifikası alındı.", author: "Kadir Varol", authorId: 52, dept: "Sensör Geliştirme", project: "ICT200 İletkenlik Sensörü", projectId: 9, category: "proje", date: "18 Nisan 2026", tags: ["ICT200", "TSE", "Akreditasyon", "Kalibrasyon"] },
  { id: 59, text: "T9 PLC web HMI prototipi hazır. Node.js backend + React frontend. 100 I/O noktası web üzerinden izlenebiliyor.", author: "Büşra Kara", authorId: 37, dept: "Üst Yazılım", project: "T9 PLC v3 Ana Kart", projectId: 1, category: "proje", date: "16 Nisan 2026", tags: ["T9", "Web HMI", "React", "Node.js"] },
  { id: 60, text: "ADW son kullanıcı eğitim dökümanı hazırlandı. 120 sayfa operatör el kitabı ve 25 video tutorial.", author: "Yeliz Çakır", authorId: 81, dept: "Sistem & Proje", project: "ADW Toz Boyarmadde Otomasyon", projectId: 6, category: "proje", date: "14 Nisan 2026", tags: ["ADW", "Eğitim", "Döküman"] },
  { id: 61, text: "SAT210 optik referans hücre tasarımı tamamlandı. Otomatik sıfır noktası kalibrasyonu her 4 saatte yapılıyor.", author: "Leyla Durmuş", authorId: 53, dept: "Sensör Geliştirme", project: "SAT210 Spektrofotometrik Sensör", projectId: 10, category: "proje", date: "11 Nisan 2026", tags: ["SAT210", "Referans", "Kalibrasyon", "Optik"] },
  { id: 62, text: "Teleskop v5 alarm yönetimi modülü tamamlandı. ISA-18.2 standardına göre 4 öncelik seviyesi: kritik, yüksek, orta, düşük.", author: "Gizem Aslan", authorId: 41, dept: "Üst Yazılım", project: "Teleskop v5 Boyahane Yönetim", projectId: 4, category: "proje", date: "9 Nisan 2026", tags: ["Teleskop", "Alarm", "ISA18", "SCADA"] },
  { id: 63, text: "T9 PLC güç tüketimi analizi: tam yük 18W, uyku modu 2.1W. Doğal konveksiyon soğutma yeterli, fan gereksiz.", author: "Can Aydın", authorId: 7, dept: "Elektronik & Donanım", project: "T9 PLC v3 Ana Kart", projectId: 1, category: "proje", date: "7 Nisan 2026", tags: ["T9", "Güç", "Termal", "Verimlilik"] },
  { id: 64, text: "PMT140 tekstil boyahanesi sahası testi tamamlandı. 3 aylık sürekli çalışmada drift <0.01 pH/ay.", author: "Neslihan Özer", authorId: 55, dept: "Sensör Geliştirme", project: "PMT140 pH Sensörü v2", projectId: 8, category: "proje", date: "5 Nisan 2026", tags: ["PMT140", "Saha Testi", "Drift", "Tekstil"] }
];

const SUPPLY_DATA = [
  { id: 1, item: "Xilinx Artix-7 XC7A100T FPGA", supplier: "Digikey", status: "beklemede", eta: "8 hafta", project: "T9 PLC v3 Ana Kart", qty: 50, critical: true },
  { id: 2, item: "Beckhoff EL7047 Step Motor Sürücü", supplier: "Beckhoff TR", status: "siparis", eta: "3 hafta", project: "ADW Toz Boyarmadde Otomasyon", qty: 20, critical: true },
  { id: 3, item: "10.1\" Kapasitif LCD (Innolux AT101IW01)", supplier: "Innolux", status: "uretimde", eta: "4 hafta", project: "T7 Operatör Panel 10\"", qty: 30, critical: true },
  { id: 4, item: "pH Cam Elektrot (Endress+Hauser CPS11E)", supplier: "Endress+Hauser", status: "gumrukte", eta: "1 hafta", project: "PMT140 pH Sensörü v2", qty: 100, critical: false },
  { id: 5, item: "Optik Bandpass Filtre 450nm (Thorlabs FB450-10)", supplier: "Thorlabs", status: "alternatif", eta: "—", project: "SAT210 Spektrofotometrik Sensör", qty: 50, critical: true },
  { id: 6, item: "6 Katman PCB (T9 Ana Kart Rev4)", supplier: "JLCPCB", status: "uretimde", eta: "10 gün", project: "T9 PLC v3 Ana Kart", qty: 10, critical: false },
  { id: 7, item: "MQTT Broker Lisansı (HiveMQ Enterprise)", supplier: "HiveMQ", status: "onay", eta: "—", project: "IIoT Gateway & Bulut", qty: 1, critical: false },
  { id: 8, item: "STM32H7B3I-DK Evaluation Board", supplier: "Mouser", status: "stokta", eta: "Hazır", project: "T9 PLC v3 Ana Kart", qty: 5, critical: false },
  { id: 9, item: "EtherCAT Slave Chip (ET1100)", supplier: "Beckhoff", status: "siparis", eta: "2 hafta", project: "T9 PLC v3 Ana Kart", qty: 100, critical: false },
  { id: 10, item: "Endüstriyel Konnektör M12 (Phoenix Contact)", supplier: "Phoenix Contact", status: "stokta", eta: "Hazır", project: "Çoklu Proje", qty: 500, critical: false },
  { id: 11, item: "Xenon Flash Lambası (Hamamatsu L9455)", supplier: "Hamamatsu", status: "siparis", eta: "3 hafta", project: "SAT210 Spektrofotometrik Sensör", qty: 20, critical: false },
  { id: 12, item: "Industrial SSD 32GB SLC (Innodisk)", supplier: "Innodisk", status: "stokta", eta: "Hazır", project: "T7 Operatör Panel 10\"", qty: 50, critical: false }
];

const COST_DATA = [
  { project: "T9 PLC v3 Ana Kart", total: 850000, spent: 520000, id: 1 },
  { project: "T7 Operatör Panel 10\"", total: 420000, spent: 280000, id: 2 },
  { project: "Teleskop v5 Boyahane Yönetim", total: 380000, spent: 195000, id: 4 },
  { project: "PMT140 pH Sensörü v2", total: 290000, spent: 210000, id: 8 },
  { project: "SAT210 Spektrofotometrik Sensör", total: 340000, spent: 150000, id: 10 },
  { project: "ADW Toz Boyarmadde Otomasyon", total: 260000, spent: 180000, id: 6 },
  { project: "IIoT Gateway & Bulut", total: 220000, spent: 95000, id: 11 },
  { project: "RD96 Sıvı Dozajlama v2", total: 310000, spent: 310000, id: 5 },
  { project: "ICT200 İletkenlik Sensörü", total: 220000, spent: 220000, id: 9 },
  { project: "T7PAC Firmware v6", total: 180000, spent: 15000, id: 3 },
  { project: "LABx Next Laboratuvar", total: 320000, spent: 0, id: 7 },
  { project: "PPD Baskı Boya Mutfağı v3", total: 290000, spent: 0, id: 12 }
];

const FILES = [
  { id: 1, name: "T9_PLC_Schematic_Rev4.pdf", dept: "Elektronik & Donanım", author: "Ahmet Yılmaz", authorId: 1, size: "2.4MB", project: "T9 PLC v3 Ana Kart", date: "28 Nisan 2026", type: "pdf" },
  { id: 2, name: "T7_Panel_LCD_Datasheet.pdf", dept: "Elektronik & Donanım", author: "Selin Arslan", authorId: 4, size: "1.8MB", project: "T7 Operatör Panel 10\"", date: "22 Nisan 2026", type: "pdf" },
  { id: 3, name: "Teleskop_v5_API_Doc.pdf", dept: "Üst Yazılım", author: "Kaan Yıldırım", authorId: 34, size: "3.2MB", project: "Teleskop v5 Boyahane Yönetim", date: "20 Nisan 2026", type: "pdf" },
  { id: 4, name: "PMT140_Kalibrasyon_Raporu.xlsx", dept: "Sensör Geliştirme", author: "Fikret Akbulut", authorId: 48, size: "890KB", project: "PMT140 pH Sensörü v2", date: "18 Nisan 2026", type: "xlsx" },
  { id: 5, name: "SAT210_Optik_Test_Sonuclari.pdf", dept: "Sensör Geliştirme", author: "Halil Çetin", authorId: 50, size: "1.5MB", project: "SAT210 Spektrofotometrik Sensör", date: "16 Nisan 2026", type: "pdf" },
  { id: 6, name: "RD96_Impeller_CAD.step", dept: "Mekatronik & Robotik", author: "Cenk Yücel", authorId: 62, size: "12MB", project: "RD96 Sıvı Dozajlama v2", date: "14 Nisan 2026", type: "step" },
  { id: 7, name: "ADW_Motor_Secim_Raporu.pdf", dept: "Mekatronik & Robotik", author: "Ali Rıza Çam", authorId: 60, size: "2.1MB", project: "ADW Toz Boyarmadde Otomasyon", date: "12 Nisan 2026", type: "pdf" },
  { id: 8, name: "IIoT_Gateway_Mimari.png", dept: "Üst Yazılım", author: "Ozan Türk", authorId: 36, size: "450KB", project: "IIoT Gateway & Bulut", date: "10 Nisan 2026", type: "png" },
  { id: 9, name: "T9_EMC_Test_Report.pdf", dept: "Test & Kalite", author: "Kemal Turan", authorId: 70, size: "4.5MB", project: "T9 PLC v3 Ana Kart", date: "8 Nisan 2026", type: "pdf" },
  { id: 10, name: "T7PAC_v6_Requirements.docx", dept: "Gömülü Yazılım", author: "Kerem Yalçın", authorId: 27, size: "1.2MB", project: "T7PAC Firmware v6", date: "5 Nisan 2026", type: "docx" },
  { id: 11, name: "ICT200_Final_Calibration.xlsx", dept: "Sensör Geliştirme", author: "Kadir Varol", authorId: 52, size: "650KB", project: "ICT200 İletkenlik Sensörü", date: "2 Nisan 2026", type: "xlsx" },
  { id: 12, name: "Teleskop_DB_Migration_Plan.md", dept: "Üst Yazılım", author: "Caner Özdemir", authorId: 38, size: "180KB", project: "Teleskop v5 Boyahane Yönetim", date: "30 Mart 2026", type: "md" },
  { id: 13, name: "LABx_Next_Fizibilite.pdf", dept: "Sistem & Proje", author: "Tarık Güneyli", authorId: 78, size: "2.8MB", project: "LABx Next Laboratuvar", date: "28 Mart 2026", type: "pdf" },
  { id: 14, name: "T9_Thermal_Analysis.pdf", dept: "Elektronik & Donanım", author: "Elif Kaya", authorId: 2, size: "5.1MB", project: "T9 PLC v3 Ana Kart", date: "25 Mart 2026", type: "pdf" },
  { id: 15, name: "ADW_Conveyor_PID_Parameters.xlsx", dept: "Mekatronik & Robotik", author: "Erhan Soylu", authorId: 64, size: "320KB", project: "ADW Toz Boyarmadde Otomasyon", date: "22 Mart 2026", type: "xlsx" }
];

const AUDIT_LOG = [
  { id: 1, user: "Ahmet Yılmaz", action: "Not ekledi", detail: "T9 PLC şematik review notu", time: "10 dk önce", category: "note" },
  { id: 2, user: "Kaan Yıldırım", action: "Dosya yükledi", detail: "Teleskop_v5_API_Doc.pdf", time: "25 dk önce", category: "file" },
  { id: 3, user: "Fikret Akbulut", action: "Not güncelledi", detail: "PMT140 kalibrasyon notu", time: "1 saat önce", category: "note" },
  { id: 4, user: "Onur Tekin", action: "Proje durumu güncelledi", detail: "T7PAC v6 → Planlanan", time: "2 saat önce", category: "project" },
  { id: 5, user: "Ali Rıza Çam", action: "Risk bildirdi", detail: "ADW Beckhoff EL7047 tedarik sorunu", time: "3 saat önce", category: "risk" },
  { id: 6, user: "Cenk Yücel", action: "Dosya yükledi", detail: "RD96_Impeller_CAD.step", time: "4 saat önce", category: "file" },
  { id: 7, user: "Barış Kaplan", action: "Not ekledi", detail: "T7 boot süresi optimizasyon notu", time: "5 saat önce", category: "note" },
  { id: 8, user: "Gülşen Erdal", action: "Risk bildirdi", detail: "SAT210 optik filtre fiyat artışı", time: "6 saat önce", category: "risk" },
  { id: 9, user: "Caner Özdemir", action: "Not ekledi", detail: "Teleskop DB migration riski", time: "7 saat önce", category: "risk" },
  { id: 10, user: "Erhan Soylu", action: "Dosya güncelledi", detail: "ADW_Conveyor_PID_Parameters.xlsx", time: "8 saat önce", category: "file" },
  { id: 11, user: "Selin Arslan", action: "Risk bildirdi", detail: "T7 panel LCD tedarik sorunu", time: "1 gün önce", category: "risk" },
  { id: 12, user: "Serkan Ateş", action: "Not ekledi", detail: "T9 Ethernet/IP protokol notu", time: "1 gün önce", category: "note" },
  { id: 13, user: "Merve Aksoy", action: "Not ekledi", detail: "Teleskop mobil app gelişme notu", time: "1 gün önce", category: "note" },
  { id: 14, user: "Kemal Turan", action: "Dosya yükledi", detail: "T9_EMC_Test_Report.pdf", time: "2 gün önce", category: "file" },
  { id: 15, user: "Tarık Güneyli", action: "Not ekledi", detail: "LABx Next kickoff planı", time: "2 gün önce", category: "note" }
];

const NOTIFICATIONS = [
  { id: 1, title: "Risk Bildirimi", text: "T9 PLC FPGA tedarik süresi 8 haftaya çıktı", type: "risk", time: "10 dk önce", read: false },
  { id: 2, title: "Proje Güncellemesi", text: "Teleskop v5 — migration riski yüksek olarak işaretlendi", type: "warning", time: "1 saat önce", read: false },
  { id: 3, title: "Yeni Not", text: "Ahmet Yılmaz T9 PLC projesine not ekledi", type: "info", time: "2 saat önce", read: false },
  { id: 4, title: "Deadline Uyarısı", text: "ADW Toz Boyarmadde — 4 hafta kaldı", type: "deadline", time: "3 saat önce", read: true },
  { id: 5, title: "Dosya Yüklendi", text: "Teleskop_v5_API_Doc.pdf — Kaan Yıldırım", type: "file", time: "4 saat önce", read: true },
  { id: 6, title: "Risk Bildirimi", text: "SAT210 optik filtre tedarikçisi fiyat %30 artırdı", type: "risk", time: "6 saat önce", read: true }
];

const DEPENDENCIES = [
  { from: "T7PAC Firmware v6", to: "T7 Operatör Panel 10\"", type: "bekliyor", desc: "Panel donanımı hazır olunca firmware geliştirme hızlanacak" },
  { from: "IIoT Gateway & Bulut", to: "Teleskop v5 Boyahane Yönetim", type: "entegrasyon", desc: "Teleskop IoT verilerini gateway üzerinden buluta gönderecek" },
  { from: "LABx Next Laboratuvar", to: "PMT140 pH Sensörü v2", type: "bekliyor", desc: "LABx pH ölçümü için PMT140 kullanacak" },
  { from: "LABx Next Laboratuvar", to: "ICT200 İletkenlik Sensörü", type: "entegrasyon", desc: "LABx iletkenlik modülü ICT200 üzerine kurulu" },
  { from: "PPD Baskı Boya Mutfağı v3", to: "T9 PLC v3 Ana Kart", type: "bekliyor", desc: "PPD kontrolü için T9 PLC kullanılacak" },
  { from: "PPD Baskı Boya Mutfağı v3", to: "ADW Toz Boyarmadde Otomasyon", type: "entegrasyon", desc: "PPD toz boya alt sistemi ADW mimarisine dayanıyor" },
  { from: "Teleskop v5 Boyahane Yönetim", to: "SAT210 Spektrofotometrik Sensör", type: "entegrasyon", desc: "Teleskop renk verisi SAT210'dan alıyor" },
  { from: "T9 PLC v3 Ana Kart", to: "T7PAC Firmware v6", type: "paralel", desc: "Her ikisi de aynı donanım platformunu paylaşıyor" }
];

// Performance data Q1 vs Q2
const PERFORMANCE_DATA = {
  departments: ["Elektronik", "Gömülü", "Üst Yazılım", "Sensör", "Mekatronik", "Test", "Sistem"],
  q1Completed: [14, 11, 9, 8, 12, 10, 6],
  q2Planned: [18, 15, 13, 11, 10, 12, 9],
  noteCount: [28, 22, 19, 18, 15, 12, 10],
  riskCount: [3, 1, 2, 2, 2, 0, 0]
};

// Gantt months reference (index 0 = Ocak 2026)
const GANTT_MONTHS = ["Oca", "Şub", "Mar", "Nis", "May", "Haz", "Tem", "Ağu", "Eyl", "Eki", "Kas", "Ara"];
const GANTT_START_OFFSET = 1; // Show from Şubat (index 1)
const GANTT_VISIBLE_MONTHS = 8; // Show 8 months

// ============================================================
// Personel — Proje & Görev Atamaları
// ============================================================
(function assignPersonnelData() {
  // Step 1: Derive projects from PROJECTS.members
  PROJECTS.forEach(project => {
    (project.members || []).forEach(memberId => {
      const person = PERSONNEL.find(p => p.id === memberId);
      if (person) {
        if (!person.projects) person.projects = [];
        if (!person.projects.includes(project.id)) person.projects.push(project.id);
      }
    });
  });
  // Ensure every person has a projects array
  PERSONNEL.forEach(p => { if (!p.projects) p.projects = []; });

  // Step 2: Task assignments (2-5 tasks per person)
  const taskData = {
    // ---- Dept 1: Elektronik & Donanım ----
    1: [ // Ahmet Yılmaz
      { title: 'Şematik review', project: 'T9 PLC v3 Ana Kart', projectId: 1, status: 'done', startDate: '2026-02-01', endDate: '2026-03-15' },
      { title: 'EMC filtre tasarımı', project: 'T9 PLC v3 Ana Kart', projectId: 1, status: 'in_progress', startDate: '2026-04-01', endDate: '2026-05-31' },
      { title: 'CE belgelendirme hazırlığı', project: 'T9 PLC v3 Ana Kart', projectId: 1, status: 'planned', startDate: '2026-06-01', endDate: '2026-07-31' }
    ],
    2: [ // Elif Kaya
      { title: 'Termal analiz simülasyonu', project: 'T9 PLC v3 Ana Kart', projectId: 1, status: 'done', startDate: '2026-02-15', endDate: '2026-03-31' },
      { title: 'Güç dağıtım simülasyonu', project: 'T9 PLC v3 Ana Kart', projectId: 1, status: 'in_progress', startDate: '2026-04-15', endDate: '2026-05-31' },
      { title: 'PCB katman optimizasyonu', project: 'T9 PLC v3 Ana Kart', projectId: 1, status: 'planned', startDate: '2026-06-01', endDate: '2026-07-15' }
    ],
    3: [ // Burak Demir
      { title: 'PCB stack analizi', project: 'T9 PLC v3 Ana Kart', projectId: 1, status: 'done', startDate: '2026-02-01', endDate: '2026-03-01' },
      { title: '6 katman PCB layout', project: 'T9 PLC v3 Ana Kart', projectId: 1, status: 'in_progress', startDate: '2026-03-01', endDate: '2026-05-31' },
      { title: 'DFM review ve üretim paketi', project: 'T9 PLC v3 Ana Kart', projectId: 1, status: 'planned', startDate: '2026-06-01', endDate: '2026-06-30' }
    ],
    4: [ // Selin Arslan
      { title: 'LCD sürücü seçimi', project: 'T7 Operatör Panel 10"', projectId: 2, status: 'done', startDate: '2026-03-01', endDate: '2026-04-01' },
      { title: 'Donanım entegrasyonu', project: 'T7 Operatör Panel 10"', projectId: 2, status: 'in_progress', startDate: '2026-04-01', endDate: '2026-06-30' },
      { title: 'Panel kalite testi', project: 'T7 Operatör Panel 10"', projectId: 2, status: 'planned', startDate: '2026-07-01', endDate: '2026-08-31' }
    ],
    5: [ // Murat Öztürk
      { title: 'Güç katı tasarımı', project: 'T9 PLC v3 Ana Kart', projectId: 1, status: 'done', startDate: '2026-02-01', endDate: '2026-03-31' },
      { title: 'T7 donanım testi', project: 'T7 Operatör Panel 10"', projectId: 2, status: 'in_progress', startDate: '2026-04-01', endDate: '2026-05-31' },
      { title: 'Saha test desteği', project: 'T7 Operatör Panel 10"', projectId: 2, status: 'planned', startDate: '2026-07-01', endDate: '2026-08-31' }
    ],
    6: [ // Zeynep Çelik
      { title: 'Şematik kontrol', project: 'T9 PLC v3 Ana Kart', projectId: 1, status: 'done', startDate: '2026-02-10', endDate: '2026-03-20' },
      { title: 'Konnektör tasarımı', project: 'T9 PLC v3 Ana Kart', projectId: 1, status: 'in_progress', startDate: '2026-04-01', endDate: '2026-05-15' },
      { title: 'DRC review', project: 'T9 PLC v3 Ana Kart', projectId: 1, status: 'planned', startDate: '2026-05-20', endDate: '2026-06-30' }
    ],
    7: [ // Can Aydın
      { title: 'Güç yönetimi tasarımı', project: 'T7 Operatör Panel 10"', projectId: 2, status: 'done', startDate: '2026-03-01', endDate: '2026-04-15' },
      { title: 'LCD panel testi', project: 'T7 Operatör Panel 10"', projectId: 2, status: 'in_progress', startDate: '2026-04-15', endDate: '2026-06-15' },
      { title: 'Termal test', project: 'T7 Operatör Panel 10"', projectId: 2, status: 'planned', startDate: '2026-06-15', endDate: '2026-08-31' }
    ],
    8: [ // Derya Koç
      { title: 'Komponent seçimi', project: 'T9 PLC v3 Ana Kart', projectId: 1, status: 'done', startDate: '2026-02-01', endDate: '2026-03-15' },
      { title: 'BOM hazırlama', project: 'T9 PLC v3 Ana Kart', projectId: 1, status: 'in_progress', startDate: '2026-03-15', endDate: '2026-05-15' },
      { title: 'Tedarik takibi', project: 'T9 PLC v3 Ana Kart', projectId: 1, status: 'planned', startDate: '2026-05-15', endDate: '2026-07-31' }
    ],
    9: [ // Fatih Şahin
      { title: 'PCB kural seti tanımlama', project: 'T9 PLC v3 Ana Kart', projectId: 1, status: 'done', startDate: '2026-02-01', endDate: '2026-03-01' },
      { title: 'PCB layout tamamlama', project: 'T9 PLC v3 Ana Kart', projectId: 1, status: 'in_progress', startDate: '2026-03-01', endDate: '2026-05-31' },
      { title: 'Üretim paketi hazırlama', project: 'T9 PLC v3 Ana Kart', projectId: 1, status: 'planned', startDate: '2026-06-01', endDate: '2026-06-30' }
    ],
    10: [ // Emre Yıldız
      { title: 'Panel şematik review', project: 'T7 Operatör Panel 10"', projectId: 2, status: 'done', startDate: '2026-03-01', endDate: '2026-04-01' },
      { title: 'Güç kartı entegrasyonu', project: 'T7 Operatör Panel 10"', projectId: 2, status: 'done', startDate: '2026-04-01', endDate: '2026-04-30' },
      { title: 'Panel sistem testi', project: 'T7 Operatör Panel 10"', projectId: 2, status: 'in_progress', startDate: '2026-05-01', endDate: '2026-07-31' }
    ],
    11: [ // Hakan Güneş
      { title: 'Ar-Ge araştırması', project: 'T9 PLC v3 Ana Kart', projectId: 1, status: 'done', startDate: '2026-02-01', endDate: '2026-03-15' },
      { title: 'Prototip testi', project: 'T7 Operatör Panel 10"', projectId: 2, status: 'in_progress', startDate: '2026-04-01', endDate: '2026-06-30' },
      { title: 'Performans optimizasyonu', project: 'T9 PLC v3 Ana Kart', projectId: 1, status: 'planned', startDate: '2026-06-01', endDate: '2026-07-31' }
    ],
    12: [ // Ayşe Korkmaz
      { title: 'Sinyal bütünlüğü simülasyonu', project: 'T9 PLC v3 Ana Kart', projectId: 1, status: 'done', startDate: '2026-02-15', endDate: '2026-03-31' },
      { title: 'Analiz raporu hazırlama', project: 'T9 PLC v3 Ana Kart', projectId: 1, status: 'in_progress', startDate: '2026-04-01', endDate: '2026-05-31' },
      { title: 'Tasarım revizyonu', project: 'T9 PLC v3 Ana Kart', projectId: 1, status: 'planned', startDate: '2026-06-01', endDate: '2026-07-15' }
    ],
    13: [ // Tolga Eren
      { title: 'EMC tasarım güncelleme', project: 'T9 PLC v3 Ana Kart', projectId: 1, status: 'done', startDate: '2026-02-01', endDate: '2026-04-01' },
      { title: 'Pre-compliance testi', project: 'T9 PLC v3 Ana Kart', projectId: 1, status: 'in_progress', startDate: '2026-04-01', endDate: '2026-05-31' },
      { title: 'CE başvurusu', project: 'T9 PLC v3 Ana Kart', projectId: 1, status: 'planned', startDate: '2026-07-01', endDate: '2026-07-31' }
    ],
    14: [ // Nur Aktaş
      { title: 'Parça kataloğu hazırlama', project: 'T7 Operatör Panel 10"', projectId: 2, status: 'done', startDate: '2026-03-01', endDate: '2026-04-15' },
      { title: 'BOM güncelleme', project: 'T7 Operatör Panel 10"', projectId: 2, status: 'in_progress', startDate: '2026-04-15', endDate: '2026-05-31' },
      { title: 'Tedarik siparişleri', project: 'T7 Operatör Panel 10"', projectId: 2, status: 'planned', startDate: '2026-06-01', endDate: '2026-07-31' }
    ],
    15: [ // Cem Polat
      { title: 'Sinyal analizi', project: 'T9 PLC v3 Ana Kart', projectId: 1, status: 'done', startDate: '2026-02-15', endDate: '2026-03-31' },
      { title: 'Filtre devresi tasarımı', project: 'T9 PLC v3 Ana Kart', projectId: 1, status: 'in_progress', startDate: '2026-04-01', endDate: '2026-05-31' },
      { title: 'Filtre testi', project: 'T9 PLC v3 Ana Kart', projectId: 1, status: 'planned', startDate: '2026-06-01', endDate: '2026-07-15' }
    ],
    16: [ // Sibel Doğan
      { title: 'Panel şematik çizimi', project: 'T7 Operatör Panel 10"', projectId: 2, status: 'done', startDate: '2026-03-01', endDate: '2026-04-15' },
      { title: 'Kablo tasarımı', project: 'T7 Operatör Panel 10"', projectId: 2, status: 'in_progress', startDate: '2026-04-15', endDate: '2026-06-30' },
      { title: 'Elektriksel test', project: 'T7 Operatör Panel 10"', projectId: 2, status: 'planned', startDate: '2026-07-01', endDate: '2026-08-31' }
    ],
    17: [ // Oğuz Kartal
      { title: 'PCB analizi', project: 'T9 PLC v3 Ana Kart', projectId: 1, status: 'done', startDate: '2026-02-01', endDate: '2026-03-15' },
      { title: 'T7 PCB layout', project: 'T7 Operatör Panel 10"', projectId: 2, status: 'in_progress', startDate: '2026-03-15', endDate: '2026-06-30' },
      { title: 'Kalite onayı', project: 'T7 Operatör Panel 10"', projectId: 2, status: 'planned', startDate: '2026-07-01', endDate: '2026-08-31' }
    ],
    18: [ // İrem Başar
      { title: 'Komponent analizi', project: 'T7 Operatör Panel 10"', projectId: 2, status: 'done', startDate: '2026-03-01', endDate: '2026-04-15' },
      { title: 'Test devresi tasarımı', project: 'T7 Operatör Panel 10"', projectId: 2, status: 'in_progress', startDate: '2026-04-15', endDate: '2026-06-30' },
      { title: 'Doğrulama testi', project: 'T7 Operatör Panel 10"', projectId: 2, status: 'planned', startDate: '2026-07-01', endDate: '2026-08-31' }
    ],
    // ---- Dept 2: Gömülü Yazılım / Firmware ----
    19: [ // Onur Tekin
      { title: 'Touchscreen Linux driver', project: 'T7 Operatör Panel 10"', projectId: 2, status: 'done', startDate: '2026-03-01', endDate: '2026-04-20' },
      { title: 'Boot süresi optimizasyonu', project: 'T7 Operatör Panel 10"', projectId: 2, status: 'done', startDate: '2026-04-01', endDate: '2026-04-30' },
      { title: 'T7PAC EtherCAT stack', project: 'T7PAC Firmware v6', projectId: 3, status: 'planned', startDate: '2026-06-01', endDate: '2026-08-31' }
    ],
    20: [ // Seda Uçar
      { title: 'T7PAC gereksinim analizi', project: 'T7PAC Firmware v6', projectId: 3, status: 'done', startDate: '2026-03-01', endDate: '2026-04-30' },
      { title: 'Protokol mimari tasarımı', project: 'T7PAC Firmware v6', projectId: 3, status: 'planned', startDate: '2026-06-01', endDate: '2026-08-15' },
      { title: 'Firmware implementasyonu', project: 'T7PAC Firmware v6', projectId: 3, status: 'planned', startDate: '2026-08-15', endDate: '2026-10-31' }
    ],
    21: [ // Barış Kaplan
      { title: 'Linux kernel entegrasyonu', project: 'T7 Operatör Panel 10"', projectId: 2, status: 'done', startDate: '2026-03-01', endDate: '2026-04-20' },
      { title: 'Boot optimizasyonu', project: 'T7 Operatör Panel 10"', projectId: 2, status: 'done', startDate: '2026-04-01', endDate: '2026-04-30' },
      { title: 'Test otomasyonu', project: 'T7 Operatör Panel 10"', projectId: 2, status: 'planned', startDate: '2026-06-01', endDate: '2026-08-31' }
    ],
    22: [ // Melis Tunç
      { title: 'EtherCAT araştırması', project: 'T7PAC Firmware v6', projectId: 3, status: 'done', startDate: '2026-03-01', endDate: '2026-04-30' },
      { title: 'Tasarım dokümanı', project: 'T7PAC Firmware v6', projectId: 3, status: 'planned', startDate: '2026-06-01', endDate: '2026-07-31' },
      { title: 'Firmware geliştirme', project: 'T7PAC Firmware v6', projectId: 3, status: 'planned', startDate: '2026-08-01', endDate: '2026-10-31' }
    ],
    23: [ // Serkan Ateş
      { title: 'Ethernet/IP implementasyonu', project: 'T9 PLC v3 Ana Kart', projectId: 1, status: 'done', startDate: '2026-02-15', endDate: '2026-04-15' },
      { title: 'CIP protokol geliştirme', project: 'T9 PLC v3 Ana Kart', projectId: 1, status: 'in_progress', startDate: '2026-04-15', endDate: '2026-06-30' },
      { title: 'T7PAC EtherCAT master', project: 'T7PAC Firmware v6', projectId: 3, status: 'planned', startDate: '2026-06-01', endDate: '2026-09-30' }
    ],
    24: [ // Gamze Özkan
      { title: 'ADW HMI tasarımı', project: 'ADW Toz Boyarmadde Otomasyon', projectId: 6, status: 'done', startDate: '2026-02-01', endDate: '2026-03-15' },
      { title: 'Kullanıcı testi', project: 'ADW Toz Boyarmadde Otomasyon', projectId: 6, status: 'done', startDate: '2026-03-15', endDate: '2026-04-30' },
      { title: 'HMI güncelleme', project: 'ADW Toz Boyarmadde Otomasyon', projectId: 6, status: 'in_progress', startDate: '2026-05-01', endDate: '2026-06-30' }
    ],
    25: [ // Arda Sezer
      { title: 'RTOS konfigürasyonu', project: 'T9 PLC v3 Ana Kart', projectId: 1, status: 'done', startDate: '2026-02-15', endDate: '2026-04-01' },
      { title: 'Görev yönetimi modülü', project: 'T9 PLC v3 Ana Kart', projectId: 1, status: 'in_progress', startDate: '2026-04-01', endDate: '2026-05-31' },
      { title: 'IO driver geliştirme', project: 'T9 PLC v3 Ana Kart', projectId: 1, status: 'planned', startDate: '2026-06-01', endDate: '2026-07-15' }
    ],
    26: [ // Deniz Acar
      { title: 'Protokol araştırması', project: 'T7PAC Firmware v6', projectId: 3, status: 'done', startDate: '2026-03-01', endDate: '2026-04-30' },
      { title: 'Stack seçimi ve test', project: 'T7PAC Firmware v6', projectId: 3, status: 'planned', startDate: '2026-06-01', endDate: '2026-08-01' },
      { title: 'Implementasyon', project: 'T7PAC Firmware v6', projectId: 3, status: 'planned', startDate: '2026-08-01', endDate: '2026-10-31' }
    ],
    27: [ // Kerem Yalçın
      { title: 'T7PAC gereksinim hazırlama', project: 'T7PAC Firmware v6', projectId: 3, status: 'done', startDate: '2026-03-01', endDate: '2026-04-30' },
      { title: 'T7PAC mimari tasarımı', project: 'T7PAC Firmware v6', projectId: 3, status: 'planned', startDate: '2026-06-01', endDate: '2026-08-31' },
      { title: 'T7 Panel entegrasyon', project: 'T7 Operatör Panel 10"', projectId: 2, status: 'in_progress', startDate: '2026-04-01', endDate: '2026-06-30' }
    ],
    28: [ // Pınar Güler
      { title: 'T7PAC araştırması', project: 'T7PAC Firmware v6', projectId: 3, status: 'done', startDate: '2026-03-01', endDate: '2026-04-30' },
      { title: 'Modül tasarımı', project: 'T7PAC Firmware v6', projectId: 3, status: 'planned', startDate: '2026-06-01', endDate: '2026-08-15' },
      { title: 'Kod yazma', project: 'T7PAC Firmware v6', projectId: 3, status: 'planned', startDate: '2026-08-15', endDate: '2026-10-31' }
    ],
    29: [ // Taner Kurt
      { title: 'Sistem analizi', project: 'T7PAC Firmware v6', projectId: 3, status: 'done', startDate: '2026-03-01', endDate: '2026-04-30' },
      { title: 'Entegrasyon tasarımı', project: 'T7PAC Firmware v6', projectId: 3, status: 'planned', startDate: '2026-06-01', endDate: '2026-08-31' },
      { title: 'Test planı', project: 'T7PAC Firmware v6', projectId: 3, status: 'planned', startDate: '2026-09-01', endDate: '2026-10-31' }
    ],
    30: [ // Aslı Çetin
      { title: 'Test senaryoları hazırlama', project: 'T9 PLC v3 Ana Kart', projectId: 1, status: 'done', startDate: '2026-02-15', endDate: '2026-04-01' },
      { title: 'Test uygulaması', project: 'T9 PLC v3 Ana Kart', projectId: 1, status: 'in_progress', startDate: '2026-04-01', endDate: '2026-06-30' },
      { title: 'Test raporlama', project: 'T9 PLC v3 Ana Kart', projectId: 1, status: 'planned', startDate: '2026-06-01', endDate: '2026-07-31' }
    ],
    31: [ // Bora Kılıç
      { title: 'EtherCAT analizi', project: 'T7PAC Firmware v6', projectId: 3, status: 'done', startDate: '2026-03-01', endDate: '2026-04-30' },
      { title: 'Prototip geliştirme', project: 'T7PAC Firmware v6', projectId: 3, status: 'planned', startDate: '2026-06-01', endDate: '2026-09-01' },
      { title: 'Entegrasyon testi', project: 'T7PAC Firmware v6', projectId: 3, status: 'planned', startDate: '2026-09-01', endDate: '2026-10-31' }
    ],
    32: [ // Ece Taş
      { title: 'Panel driver geliştirme', project: 'T7 Operatör Panel 10"', projectId: 2, status: 'done', startDate: '2026-03-01', endDate: '2026-04-15' },
      { title: 'Performans optimizasyonu', project: 'T7 Operatör Panel 10"', projectId: 2, status: 'in_progress', startDate: '2026-04-15', endDate: '2026-06-30' },
      { title: 'Doğrulama testi', project: 'T7 Operatör Panel 10"', projectId: 2, status: 'planned', startDate: '2026-07-01', endDate: '2026-08-31' }
    ],
    33: [ // Volkan Erdoğan
      { title: 'EtherCAT stack seçimi', project: 'T7PAC Firmware v6', projectId: 3, status: 'done', startDate: '2026-03-01', endDate: '2026-04-30' },
      { title: 'Master implementasyonu', project: 'T7PAC Firmware v6', projectId: 3, status: 'planned', startDate: '2026-06-01', endDate: '2026-09-15' },
      { title: 'Performans testi', project: 'T7PAC Firmware v6', projectId: 3, status: 'planned', startDate: '2026-09-15', endDate: '2026-10-31' }
    ],
    // ---- Dept 3: Üst Yazılım ----
    34: [ // Kaan Yıldırım
      { title: 'WebSocket mimari tasarımı', project: 'Teleskop v5 Boyahane Yönetim', projectId: 4, status: 'done', startDate: '2026-01-01', endDate: '2026-03-01' },
      { title: 'Mobil app geliştirme', project: 'Teleskop v5 Boyahane Yönetim', projectId: 4, status: 'in_progress', startDate: '2026-04-01', endDate: '2026-06-30' },
      { title: 'PPD proje koordinasyonu', project: 'PPD Baskı Boya Mutfağı v3', projectId: 12, status: 'planned', startDate: '2026-08-01', endDate: '2026-10-31' }
    ],
    35: [ // Merve Aksoy
      { title: 'React Native kurulum', project: 'Teleskop v5 Boyahane Yönetim', projectId: 4, status: 'done', startDate: '2026-01-15', endDate: '2026-03-15' },
      { title: 'Push notification entegrasyonu', project: 'Teleskop v5 Boyahane Yönetim', projectId: 4, status: 'done', startDate: '2026-03-15', endDate: '2026-04-30' },
      { title: 'iOS beta yayını', project: 'Teleskop v5 Boyahane Yönetim', projectId: 4, status: 'in_progress', startDate: '2026-05-01', endDate: '2026-06-30' }
    ],
    36: [ // Ozan Türk
      { title: 'Modbus TCP entegrasyonu', project: 'Teleskop v5 Boyahane Yönetim', projectId: 4, status: 'done', startDate: '2026-01-01', endDate: '2026-03-01' },
      { title: 'SCADA panel geliştirme', project: 'Teleskop v5 Boyahane Yönetim', projectId: 4, status: 'in_progress', startDate: '2026-04-01', endDate: '2026-06-30' },
      { title: 'IIoT OPC-UA geliştirme', project: 'IIoT Gateway & Bulut', projectId: 11, status: 'in_progress', startDate: '2026-05-01', endDate: '2026-07-31' }
    ],
    37: [ // Büşra Kara
      { title: 'Veritabanı şema tasarımı', project: 'Teleskop v5 Boyahane Yönetim', projectId: 4, status: 'done', startDate: '2026-01-01', endDate: '2026-03-01' },
      { title: 'Web HMI geliştirme', project: 'Teleskop v5 Boyahane Yönetim', projectId: 4, status: 'done', startDate: '2026-03-01', endDate: '2026-04-30' },
      { title: 'API entegrasyonu', project: 'Teleskop v5 Boyahane Yönetim', projectId: 4, status: 'in_progress', startDate: '2026-04-01', endDate: '2026-06-30' }
    ],
    38: [ // Caner Özdemir
      { title: 'PostgreSQL migration', project: 'Teleskop v5 Boyahane Yönetim', projectId: 4, status: 'done', startDate: '2026-01-01', endDate: '2026-03-15' },
      { title: 'İndeks optimizasyonu', project: 'Teleskop v5 Boyahane Yönetim', projectId: 4, status: 'done', startDate: '2026-03-15', endDate: '2026-04-30' },
      { title: 'Yedekleme sistemi', project: 'Teleskop v5 Boyahane Yönetim', projectId: 4, status: 'planned', startDate: '2026-06-01', endDate: '2026-07-31' }
    ],
    39: [ // Duygu Şen
      { title: 'Frontend bileşenler', project: 'Teleskop v5 Boyahane Yönetim', projectId: 4, status: 'done', startDate: '2026-01-15', endDate: '2026-03-31' },
      { title: 'Alarm arayüzü', project: 'Teleskop v5 Boyahane Yönetim', projectId: 4, status: 'done', startDate: '2026-03-01', endDate: '2026-04-30' },
      { title: 'Mobil arayüz geliştirme', project: 'Teleskop v5 Boyahane Yönetim', projectId: 4, status: 'in_progress', startDate: '2026-05-01', endDate: '2026-06-30' }
    ],
    40: [ // Erdem Bayrak
      { title: 'AWS IoT Core kurulum', project: 'IIoT Gateway & Bulut', projectId: 11, status: 'done', startDate: '2026-04-01', endDate: '2026-04-30' },
      { title: 'OPC-UA implementasyonu', project: 'IIoT Gateway & Bulut', projectId: 11, status: 'in_progress', startDate: '2026-05-01', endDate: '2026-07-31' },
      { title: 'API gateway tasarımı', project: 'IIoT Gateway & Bulut', projectId: 11, status: 'planned', startDate: '2026-07-01', endDate: '2026-09-30' }
    ],
    41: [ // Gizem Aslan
      { title: 'Alarm yönetim modülü', project: 'Teleskop v5 Boyahane Yönetim', projectId: 4, status: 'done', startDate: '2026-01-15', endDate: '2026-03-31' },
      { title: 'UI geliştirme', project: 'Teleskop v5 Boyahane Yönetim', projectId: 4, status: 'in_progress', startDate: '2026-04-01', endDate: '2026-06-30' },
      { title: 'Mobil erişim', project: 'Teleskop v5 Boyahane Yönetim', projectId: 4, status: 'planned', startDate: '2026-06-01', endDate: '2026-07-31' }
    ],
    42: [ // Hakan Korur
      { title: 'IEC 62443 analizi', project: 'IIoT Gateway & Bulut', projectId: 11, status: 'done', startDate: '2026-04-01', endDate: '2026-04-30' },
      { title: 'Pentest hazırlığı', project: 'IIoT Gateway & Bulut', projectId: 11, status: 'in_progress', startDate: '2026-05-01', endDate: '2026-06-30' },
      { title: 'Sertifikasyon süreci', project: 'IIoT Gateway & Bulut', projectId: 11, status: 'planned', startDate: '2026-07-01', endDate: '2026-09-30' }
    ],
    43: [ // İlker Duman
      { title: 'API entegrasyon testi', project: 'Teleskop v5 Boyahane Yönetim', projectId: 4, status: 'done', startDate: '2026-01-15', endDate: '2026-04-01' },
      { title: 'IIoT test senaryoları', project: 'IIoT Gateway & Bulut', projectId: 11, status: 'in_progress', startDate: '2026-05-01', endDate: '2026-07-31' },
      { title: 'Güvenlik review', project: 'IIoT Gateway & Bulut', projectId: 11, status: 'planned', startDate: '2026-07-01', endDate: '2026-09-30' }
    ],
    44: [ // Aylin Yavuz
      { title: 'UI/UX tasarımı', project: 'Teleskop v5 Boyahane Yönetim', projectId: 4, status: 'done', startDate: '2026-01-01', endDate: '2026-03-31' },
      { title: 'Kullanıcı testi', project: 'Teleskop v5 Boyahane Yönetim', projectId: 4, status: 'done', startDate: '2026-03-15', endDate: '2026-04-30' },
      { title: 'Mobil UI geliştirme', project: 'Teleskop v5 Boyahane Yönetim', projectId: 4, status: 'in_progress', startDate: '2026-05-01', endDate: '2026-06-30' }
    ],
    45: [ // Berk Çağlar
      { title: 'AWS IoT Core kurulum', project: 'IIoT Gateway & Bulut', projectId: 11, status: 'done', startDate: '2026-04-01', endDate: '2026-04-30' },
      { title: 'Sertifika altyapısı', project: 'IIoT Gateway & Bulut', projectId: 11, status: 'done', startDate: '2026-04-15', endDate: '2026-04-30' },
      { title: 'Bulut mimari geliştirme', project: 'IIoT Gateway & Bulut', projectId: 11, status: 'in_progress', startDate: '2026-05-01', endDate: '2026-08-31' }
    ],
    46: [ // Cemre Aydoğan
      { title: 'Rapor modülü geliştirme', project: 'Teleskop v5 Boyahane Yönetim', projectId: 4, status: 'done', startDate: '2026-01-15', endDate: '2026-03-31' },
      { title: 'Dashboard geliştirme', project: 'Teleskop v5 Boyahane Yönetim', projectId: 4, status: 'done', startDate: '2026-03-01', endDate: '2026-04-30' },
      { title: 'Analitik modülü', project: 'Teleskop v5 Boyahane Yönetim', projectId: 4, status: 'planned', startDate: '2026-06-01', endDate: '2026-07-31' }
    ],
    47: [ // Dilara Usta
      { title: 'MQTT yük testi', project: 'IIoT Gateway & Bulut', projectId: 11, status: 'done', startDate: '2026-04-01', endDate: '2026-04-30' },
      { title: 'Entegrasyon testi', project: 'IIoT Gateway & Bulut', projectId: 11, status: 'in_progress', startDate: '2026-05-01', endDate: '2026-07-31' },
      { title: 'Üretim deploy', project: 'IIoT Gateway & Bulut', projectId: 11, status: 'planned', startDate: '2026-08-01', endDate: '2026-09-30' }
    ],
    // ---- Dept 4: Sensör Geliştirme ----
    48: [ // Fikret Akbulut
      { title: 'Cam elektrot karakterizasyon', project: 'PMT140 pH Sensörü v2', projectId: 8, status: 'done', startDate: '2026-03-01', endDate: '2026-04-15' },
      { title: 'IP68 muhafaza tasarımı', project: 'PMT140 pH Sensörü v2', projectId: 8, status: 'in_progress', startDate: '2026-04-15', endDate: '2026-06-30' },
      { title: 'Müşteri demo hazırlığı', project: 'PMT140 pH Sensörü v2', projectId: 8, status: 'planned', startDate: '2026-06-15', endDate: '2026-07-31' }
    ],
    49: [ // Gülşen Erdal
      { title: 'Optik modül testi', project: 'SAT210 Spektrofotometrik Sensör', projectId: 10, status: 'done', startDate: '2026-02-01', endDate: '2026-03-31' },
      { title: 'Termal stabilite testi', project: 'SAT210 Spektrofotometrik Sensör', projectId: 10, status: 'done', startDate: '2026-03-15', endDate: '2026-04-30' },
      { title: 'Müşteri pilot hazırlığı', project: 'SAT210 Spektrofotometrik Sensör', projectId: 10, status: 'in_progress', startDate: '2026-05-01', endDate: '2026-07-31' }
    ],
    50: [ // Halil Çetin
      { title: 'DSP algoritma optimizasyonu', project: 'SAT210 Spektrofotometrik Sensör', projectId: 10, status: 'done', startDate: '2026-02-01', endDate: '2026-04-18' },
      { title: 'Tarama hızı artırma', project: 'SAT210 Spektrofotometrik Sensör', projectId: 10, status: 'done', startDate: '2026-03-01', endDate: '2026-04-30' },
      { title: 'Referans hücre tasarımı', project: 'SAT210 Spektrofotometrik Sensör', projectId: 10, status: 'in_progress', startDate: '2026-05-01', endDate: '2026-07-31' }
    ],
    51: [ // İpek Sarı
      { title: 'Saha test hazırlığı', project: 'SAT210 Spektrofotometrik Sensör', projectId: 10, status: 'done', startDate: '2026-02-15', endDate: '2026-04-01' },
      { title: 'Demo sunumu', project: 'SAT210 Spektrofotometrik Sensör', projectId: 10, status: 'done', startDate: '2026-04-20', endDate: '2026-04-30' },
      { title: 'LOI takibi ve müşteri iletişim', project: 'SAT210 Spektrofotometrik Sensör', projectId: 10, status: 'in_progress', startDate: '2026-05-01', endDate: '2026-08-31' }
    ],
    52: [ // Kadir Varol
      { title: 'Final kalibrasyon', project: 'ICT200 İletkenlik Sensörü', projectId: 9, status: 'done', startDate: '2025-12-01', endDate: '2026-01-15' },
      { title: 'TÜRKAK akreditasyonu', project: 'ICT200 İletkenlik Sensörü', projectId: 9, status: 'done', startDate: '2026-01-15', endDate: '2026-02-28' },
      { title: 'Üretim süreci desteği', project: 'ICT200 İletkenlik Sensörü', projectId: 9, status: 'done', startDate: '2026-02-15', endDate: '2026-02-28' }
    ],
    53: [ // Leyla Durmuş
      { title: 'Referans hücre tasarımı', project: 'SAT210 Spektrofotometrik Sensör', projectId: 10, status: 'done', startDate: '2026-02-01', endDate: '2026-04-11' },
      { title: 'Kalibrasyon optimizasyonu', project: 'SAT210 Spektrofotometrik Sensör', projectId: 10, status: 'in_progress', startDate: '2026-04-11', endDate: '2026-06-30' },
      { title: 'Test raporlama', project: 'SAT210 Spektrofotometrik Sensör', projectId: 10, status: 'planned', startDate: '2026-06-15', endDate: '2026-08-31' }
    ],
    54: [ // Mustafa Bayar
      { title: 'Gümrük takibi', project: 'PMT140 pH Sensörü v2', projectId: 8, status: 'done', startDate: '2026-03-15', endDate: '2026-04-15' },
      { title: 'Alternatif tedarik çözümü', project: 'PMT140 pH Sensörü v2', projectId: 8, status: 'done', startDate: '2026-04-01', endDate: '2026-04-30' },
      { title: 'Depo ve stok yönetimi', project: 'PMT140 pH Sensörü v2', projectId: 8, status: 'in_progress', startDate: '2026-05-01', endDate: '2026-07-31' }
    ],
    55: [ // Neslihan Özer
      { title: 'ICT200 saha testi', project: 'ICT200 İletkenlik Sensörü', projectId: 9, status: 'done', startDate: '2025-12-01', endDate: '2026-01-31' },
      { title: 'Teknik rapor hazırlama', project: 'ICT200 İletkenlik Sensörü', projectId: 9, status: 'done', startDate: '2026-01-15', endDate: '2026-02-28' },
      { title: 'TSE belgesi alımı', project: 'ICT200 İletkenlik Sensörü', projectId: 9, status: 'done', startDate: '2026-02-01', endDate: '2026-02-28' }
    ],
    56: [ // Orhan Koç
      { title: 'Dalga boyu kalibrasyon', project: 'SAT210 Spektrofotometrik Sensör', projectId: 10, status: 'done', startDate: '2026-02-01', endDate: '2026-04-01' },
      { title: 'Sensör entegrasyon testi', project: 'SAT210 Spektrofotometrik Sensör', projectId: 10, status: 'in_progress', startDate: '2026-04-01', endDate: '2026-06-30' },
      { title: 'Akreditasyon hazırlığı', project: 'SAT210 Spektrofotometrik Sensör', projectId: 10, status: 'planned', startDate: '2026-07-01', endDate: '2026-08-31' }
    ],
    57: [ // Selma Tuncer
      { title: 'ICT200 kalibrasyon', project: 'ICT200 İletkenlik Sensörü', projectId: 9, status: 'done', startDate: '2025-12-01', endDate: '2026-01-31' },
      { title: 'Sertifika başvurusu', project: 'ICT200 İletkenlik Sensörü', projectId: 9, status: 'done', startDate: '2026-01-15', endDate: '2026-02-15' },
      { title: 'Yeni proje hazırlığı', project: 'ICT200 İletkenlik Sensörü', projectId: 9, status: 'in_progress', startDate: '2026-04-01', endDate: '2026-05-31' }
    ],
    58: [ // Ümit Korkut
      { title: 'PMT140 elektronik tasarım', project: 'PMT140 pH Sensörü v2', projectId: 8, status: 'done', startDate: '2026-03-01', endDate: '2026-04-15' },
      { title: 'SAT210 devre testi', project: 'SAT210 Spektrofotometrik Sensör', projectId: 10, status: 'in_progress', startDate: '2026-04-15', endDate: '2026-06-30' },
      { title: 'Elektronik revizyon', project: 'PMT140 pH Sensörü v2', projectId: 8, status: 'planned', startDate: '2026-06-15', endDate: '2026-07-31' }
    ],
    59: [ // Yasemin Bal
      { title: 'Test prosedürü hazırlama', project: 'ICT200 İletkenlik Sensörü', projectId: 9, status: 'done', startDate: '2025-12-01', endDate: '2026-01-15' },
      { title: 'Doğrulama testi', project: 'ICT200 İletkenlik Sensörü', projectId: 9, status: 'done', startDate: '2026-01-15', endDate: '2026-02-28' },
      { title: 'Teknik doküman güncelleme', project: 'ICT200 İletkenlik Sensörü', projectId: 9, status: 'in_progress', startDate: '2026-04-01', endDate: '2026-05-31' }
    ],
    // ---- Dept 5: Mekatronik & Robotik ----
    60: [ // Ali Rıza Çam
      { title: 'ADW servo kalibrasyon', project: 'ADW Toz Boyarmadde Otomasyon', projectId: 6, status: 'done', startDate: '2026-02-01', endDate: '2026-04-15' },
      { title: 'RD96 tamamlama desteği', project: 'RD96 Sıvı Dozajlama v2', projectId: 5, status: 'done', startDate: '2025-11-01', endDate: '2026-03-31' },
      { title: 'PPD mekanik araştırma', project: 'PPD Baskı Boya Mutfağı v3', projectId: 12, status: 'planned', startDate: '2026-08-01', endDate: '2026-10-31' }
    ],
    61: [ // Betül Kırıcı
      { title: 'ADW mekanik tasarım', project: 'ADW Toz Boyarmadde Otomasyon', projectId: 6, status: 'done', startDate: '2026-02-01', endDate: '2026-04-08' },
      { title: 'SOLIDWORKS model', project: 'ADW Toz Boyarmadde Otomasyon', projectId: 6, status: 'in_progress', startDate: '2026-04-08', endDate: '2026-05-31' },
      { title: 'Üretim çizimi', project: 'ADW Toz Boyarmadde Otomasyon', projectId: 6, status: 'planned', startDate: '2026-06-01', endDate: '2026-06-30' }
    ],
    62: [ // Cenk Yücel
      { title: 'RD96 impeller tasarımı', project: 'RD96 Sıvı Dozajlama v2', projectId: 5, status: 'done', startDate: '2025-11-01', endDate: '2026-01-31' },
      { title: 'Kavitasyon testi', project: 'RD96 Sıvı Dozajlama v2', projectId: 5, status: 'done', startDate: '2026-01-01', endDate: '2026-03-31' },
      { title: 'LABx prototip tasarımı', project: 'LABx Next Laboratuvar', projectId: 7, status: 'planned', startDate: '2026-08-01', endDate: '2026-10-01' }
    ],
    63: [ // Damla Öğüt
      { title: 'Vibrasyon analizi', project: 'ADW Toz Boyarmadde Otomasyon', projectId: 6, status: 'done', startDate: '2026-02-15', endDate: '2026-04-26' },
      { title: 'Dampfer testi', project: 'ADW Toz Boyarmadde Otomasyon', projectId: 6, status: 'done', startDate: '2026-03-15', endDate: '2026-04-30' },
      { title: 'Hassasiyet testi', project: 'ADW Toz Boyarmadde Otomasyon', projectId: 6, status: 'in_progress', startDate: '2026-05-01', endDate: '2026-06-30' }
    ],
    64: [ // Erhan Soylu
      { title: 'RD96 pompa testi', project: 'RD96 Sıvı Dozajlama v2', projectId: 5, status: 'done', startDate: '2025-11-01', endDate: '2026-03-31' },
      { title: 'ADW PID optimizasyonu', project: 'ADW Toz Boyarmadde Otomasyon', projectId: 6, status: 'done', startDate: '2026-02-15', endDate: '2026-03-25' },
      { title: 'ADW test süreci', project: 'ADW Toz Boyarmadde Otomasyon', projectId: 6, status: 'in_progress', startDate: '2026-04-01', endDate: '2026-06-30' }
    ],
    65: [ // Ferhat Güngör
      { title: 'Konveyör tasarımı', project: 'ADW Toz Boyarmadde Otomasyon', projectId: 6, status: 'done', startDate: '2026-02-01', endDate: '2026-03-31' },
      { title: 'Motor seçimi', project: 'ADW Toz Boyarmadde Otomasyon', projectId: 6, status: 'done', startDate: '2026-03-01', endDate: '2026-04-15' },
      { title: 'Mekanik test', project: 'ADW Toz Boyarmadde Otomasyon', projectId: 6, status: 'in_progress', startDate: '2026-04-15', endDate: '2026-06-30' }
    ],
    66: [ // Gökhan Arıkan
      { title: 'PMT140 IP68 testi', project: 'PMT140 pH Sensörü v2', projectId: 8, status: 'done', startDate: '2026-03-01', endDate: '2026-03-08' },
      { title: 'Muhafaza tasarımı', project: 'PMT140 pH Sensörü v2', projectId: 8, status: 'done', startDate: '2026-03-01', endDate: '2026-04-30' },
      { title: 'Saha montaj desteği', project: 'PMT140 pH Sensörü v2', projectId: 8, status: 'in_progress', startDate: '2026-05-01', endDate: '2026-07-31' }
    ],
    67: [ // Hatice Ülker
      { title: 'Robotik analiz', project: 'ADW Toz Boyarmadde Otomasyon', projectId: 6, status: 'done', startDate: '2026-02-01', endDate: '2026-03-31' },
      { title: 'Pnömatik sistem tasarımı', project: 'ADW Toz Boyarmadde Otomasyon', projectId: 6, status: 'in_progress', startDate: '2026-04-01', endDate: '2026-05-31' },
      { title: 'Entegrasyon testi', project: 'ADW Toz Boyarmadde Otomasyon', projectId: 6, status: 'planned', startDate: '2026-06-01', endDate: '2026-06-30' }
    ],
    68: [ // İsmail Keskin
      { title: 'LABx gereksinim analizi', project: 'LABx Next Laboratuvar', projectId: 7, status: 'done', startDate: '2026-03-01', endDate: '2026-04-30' },
      { title: 'LABx robotik tasarım', project: 'LABx Next Laboratuvar', projectId: 7, status: 'planned', startDate: '2026-07-01', endDate: '2026-09-30' },
      { title: 'PPD modül tasarımı', project: 'PPD Baskı Boya Mutfağı v3', projectId: 12, status: 'planned', startDate: '2026-09-01', endDate: '2026-11-30' }
    ],
    69: [ // Jale Türkmen
      { title: 'Güvenlik analizi', project: 'ADW Toz Boyarmadde Otomasyon', projectId: 6, status: 'done', startDate: '2026-02-01', endDate: '2026-03-31' },
      { title: 'CE gereksinim analizi', project: 'ADW Toz Boyarmadde Otomasyon', projectId: 6, status: 'done', startDate: '2026-03-01', endDate: '2026-04-30' },
      { title: 'Makine yönergesi hazırlama', project: 'ADW Toz Boyarmadde Otomasyon', projectId: 6, status: 'in_progress', startDate: '2026-05-01', endDate: '2026-06-30' }
    ],
    // ---- Dept 6: Test & Kalite ----
    70: [ // Kemal Turan
      { title: 'T9 EMC testi', project: 'T9 PLC v3 Ana Kart', projectId: 1, status: 'done', startDate: '2026-02-15', endDate: '2026-04-08' },
      { title: 'SAT210 optik kalite testi', project: 'SAT210 Spektrofotometrik Sensör', projectId: 10, status: 'done', startDate: '2026-03-01', endDate: '2026-04-30' },
      { title: 'T9 CE başvurusu desteği', project: 'T9 PLC v3 Ana Kart', projectId: 1, status: 'in_progress', startDate: '2026-05-01', endDate: '2026-07-31' }
    ],
    71: [ // Lale Demirtaş
      { title: 'ICT200 kalite testi', project: 'ICT200 İletkenlik Sensörü', projectId: 9, status: 'done', startDate: '2025-12-01', endDate: '2026-02-28' },
      { title: 'PMT140 test planı', project: 'PMT140 pH Sensörü v2', projectId: 8, status: 'in_progress', startDate: '2026-04-01', endDate: '2026-06-30' },
      { title: 'Kalite belgeleri', project: 'PMT140 pH Sensörü v2', projectId: 8, status: 'planned', startDate: '2026-06-15', endDate: '2026-07-31' }
    ],
    72: [ // Mehmet Akif Ceylan
      { title: 'T9 PLC sistem testi', project: 'T9 PLC v3 Ana Kart', projectId: 1, status: 'done', startDate: '2026-02-15', endDate: '2026-04-30' },
      { title: 'ADW kalite güvence', project: 'ADW Toz Boyarmadde Otomasyon', projectId: 6, status: 'in_progress', startDate: '2026-04-01', endDate: '2026-06-30' },
      { title: 'ISO 9001 hazırlık', project: 'T9 PLC v3 Ana Kart', projectId: 1, status: 'planned', startDate: '2026-06-01', endDate: '2026-07-31' }
    ],
    73: [ // Nihal Yazıcı
      { title: 'Teleskop entegrasyon testi', project: 'Teleskop v5 Boyahane Yönetim', projectId: 4, status: 'done', startDate: '2026-01-15', endDate: '2026-04-01' },
      { title: 'IIoT test senaryoları', project: 'IIoT Gateway & Bulut', projectId: 11, status: 'in_progress', startDate: '2026-04-01', endDate: '2026-07-31' },
      { title: 'Güvenlik denetimi', project: 'IIoT Gateway & Bulut', projectId: 11, status: 'planned', startDate: '2026-07-01', endDate: '2026-09-30' }
    ],
    74: [ // Osman Kılınç
      { title: 'T9 PLC EMC testi', project: 'T9 PLC v3 Ana Kart', projectId: 1, status: 'done', startDate: '2026-02-15', endDate: '2026-03-31' },
      { title: 'T7 Panel EMC testi', project: 'T7 Operatör Panel 10"', projectId: 2, status: 'done', startDate: '2026-03-15', endDate: '2026-04-30' },
      { title: 'CE test raporu', project: 'T9 PLC v3 Ana Kart', projectId: 1, status: 'in_progress', startDate: '2026-05-01', endDate: '2026-07-15' }
    ],
    75: [ // Perihan Boz
      { title: 'RD96 kalite denetimi', project: 'RD96 Sıvı Dozajlama v2', projectId: 5, status: 'done', startDate: '2025-11-01', endDate: '2026-03-31' },
      { title: 'PMT140 saha testi', project: 'PMT140 pH Sensörü v2', projectId: 8, status: 'in_progress', startDate: '2026-04-01', endDate: '2026-06-30' },
      { title: 'Kalite raporlama', project: 'PMT140 pH Sensörü v2', projectId: 8, status: 'planned', startDate: '2026-06-15', endDate: '2026-07-31' }
    ],
    76: [ // Ramazan Acar
      { title: 'ADW doğrulama testi', project: 'ADW Toz Boyarmadde Otomasyon', projectId: 6, status: 'done', startDate: '2026-02-15', endDate: '2026-04-30' },
      { title: 'SAT210 doğrulama', project: 'SAT210 Spektrofotometrik Sensör', projectId: 10, status: 'in_progress', startDate: '2026-04-01', endDate: '2026-06-30' },
      { title: 'Akreditasyon başvurusu', project: 'SAT210 Spektrofotometrik Sensör', projectId: 10, status: 'planned', startDate: '2026-07-01', endDate: '2026-08-31' }
    ],
    77: [ // Sevgi Ertürk
      { title: 'Test otomasyon çerçevesi', project: 'Teleskop v5 Boyahane Yönetim', projectId: 4, status: 'done', startDate: '2026-01-15', endDate: '2026-03-31' },
      { title: 'T7PAC entegrasyon testi', project: 'T7PAC Firmware v6', projectId: 3, status: 'planned', startDate: '2026-06-01', endDate: '2026-09-30' },
      { title: 'Regresyon test suite', project: 'Teleskop v5 Boyahane Yönetim', projectId: 4, status: 'planned', startDate: '2026-06-01', endDate: '2026-07-31' }
    ],
    // ---- Dept 7: Sistem & Proje Mühendisliği ----
    78: [ // Tarık Güneyli
      { title: 'LABx Next kickoff', project: 'LABx Next Laboratuvar', projectId: 7, status: 'done', startDate: '2026-03-01', endDate: '2026-04-30' },
      { title: 'LABx proje planlama', project: 'LABx Next Laboratuvar', projectId: 7, status: 'in_progress', startDate: '2026-05-01', endDate: '2026-07-31' },
      { title: 'PPD fizibilite koordinasyonu', project: 'PPD Baskı Boya Mutfağı v3', projectId: 12, status: 'planned', startDate: '2026-07-01', endDate: '2026-09-30' }
    ],
    79: [ // Ufuk Yıldırım
      { title: 'Teleskop sistem desteği', project: 'Teleskop v5 Boyahane Yönetim', projectId: 4, status: 'done', startDate: '2026-01-15', endDate: '2026-04-01' },
      { title: 'Sistem entegrasyon analizi', project: 'LABx Next Laboratuvar', projectId: 7, status: 'in_progress', startDate: '2026-05-01', endDate: '2026-07-31' },
      { title: 'LABx arşiv hazırlama', project: 'LABx Next Laboratuvar', projectId: 7, status: 'planned', startDate: '2026-08-01', endDate: '2026-11-30' }
    ],
    80: [ // Vahit Ergün
      { title: 'T9 PLC sistem entegrasyon analizi', project: 'T9 PLC v3 Ana Kart', projectId: 1, status: 'done', startDate: '2026-02-01', endDate: '2026-04-01' },
      { title: 'IIoT sistem testi', project: 'IIoT Gateway & Bulut', projectId: 11, status: 'in_progress', startDate: '2026-04-15', endDate: '2026-07-31' },
      { title: 'Sistem entegrasyon raporu', project: 'IIoT Gateway & Bulut', projectId: 11, status: 'planned', startDate: '2026-08-01', endDate: '2026-09-30' }
    ],
    81: [ // Yeliz Çakır
      { title: 'ADW kullanıcı eğitimi', project: 'ADW Toz Boyarmadde Otomasyon', projectId: 6, status: 'done', startDate: '2026-02-15', endDate: '2026-04-14' },
      { title: 'Eğitim dökümanı güncelleme', project: 'ADW Toz Boyarmadde Otomasyon', projectId: 6, status: 'done', startDate: '2026-04-01', endDate: '2026-04-30' },
      { title: 'PPD proje koordinasyonu', project: 'PPD Baskı Boya Mutfağı v3', projectId: 12, status: 'planned', startDate: '2026-08-01', endDate: '2026-10-31' }
    ],
    82: [ // Zafer Bulut
      { title: 'PPD fizibilite raporu', project: 'PPD Baskı Boya Mutfağı v3', projectId: 12, status: 'done', startDate: '2026-03-01', endDate: '2026-04-25' },
      { title: 'LABx proje planı', project: 'LABx Next Laboratuvar', projectId: 7, status: 'in_progress', startDate: '2026-05-01', endDate: '2026-07-31' },
      { title: 'PPD gereksinim analizi', project: 'PPD Baskı Boya Mutfağı v3', projectId: 12, status: 'planned', startDate: '2026-07-01', endDate: '2026-09-30' }
    ],
    83: [ // Ayça Köse
      { title: 'Teleskop izleme raporları', project: 'Teleskop v5 Boyahane Yönetim', projectId: 4, status: 'done', startDate: '2026-01-15', endDate: '2026-04-01' },
      { title: 'Teleskop proje raporu', project: 'Teleskop v5 Boyahane Yönetim', projectId: 4, status: 'in_progress', startDate: '2026-04-01', endDate: '2026-06-30' },
      { title: 'PPD proje desteği', project: 'PPD Baskı Boya Mutfağı v3', projectId: 12, status: 'planned', startDate: '2026-08-01', endDate: '2026-12-31' }
    ],
    84: [ // Bilge Tanrıverdi
      { title: 'T9 PLC sistem analizi', project: 'T9 PLC v3 Ana Kart', projectId: 1, status: 'done', startDate: '2026-02-01', endDate: '2026-04-01' },
      { title: 'LABx mimari analizi', project: 'LABx Next Laboratuvar', projectId: 7, status: 'in_progress', startDate: '2026-05-01', endDate: '2026-08-15' },
      { title: 'Entegrasyon review', project: 'LABx Next Laboratuvar', projectId: 7, status: 'planned', startDate: '2026-09-01', endDate: '2026-11-30' }
    ],
    85: [ // Cengiz Yılmazer
      { title: 'IIoT gereksinim analizi', project: 'IIoT Gateway & Bulut', projectId: 11, status: 'done', startDate: '2026-04-01', endDate: '2026-04-30' },
      { title: 'Protokol analizi', project: 'IIoT Gateway & Bulut', projectId: 11, status: 'in_progress', startDate: '2026-05-01', endDate: '2026-07-31' },
      { title: 'PPD proje planlaması', project: 'PPD Baskı Boya Mutfağı v3', projectId: 12, status: 'planned', startDate: '2026-08-01', endDate: '2026-10-31' }
    ]
  };

  PERSONNEL.forEach(p => {
    p.tasks = taskData[p.id] || [];
    // Step 3: Also add projects referenced in tasks but not already in projects array
    p.tasks.forEach(t => {
      if (t.projectId && !p.projects.includes(t.projectId)) {
        p.projects.push(t.projectId);
      }
    });
  });
})();

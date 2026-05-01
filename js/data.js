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

// Personel görev verileri — her kişiye 2-5 görev
const PERSONNEL_TASKS = {
  // Elektronik & Donanım
  1: [
    { title: 'Şematik tasarım ve review', projectId: 1, project: 'T9 PLC v3 Ana Kart', status: 'done', startDate: '2026-02-01', endDate: '2026-03-20' },
    { title: 'EMC filtre katı optimizasyonu', projectId: 1, project: 'T9 PLC v3 Ana Kart', status: 'done', startDate: '2026-03-15', endDate: '2026-04-20' },
    { title: 'PCB Rev4 layout tamamlama', projectId: 1, project: 'T9 PLC v3 Ana Kart', status: 'in_progress', startDate: '2026-04-20', endDate: '2026-05-30' },
    { title: 'CE belgelendirme süreci başlatma', projectId: 1, project: 'T9 PLC v3 Ana Kart', status: 'planned', startDate: '2026-07-01', endDate: '2026-07-31' },
  ],
  2: [
    { title: 'Güç dağıtım şeması tasarımı', projectId: 1, project: 'T9 PLC v3 Ana Kart', status: 'done', startDate: '2026-02-01', endDate: '2026-03-15' },
    { title: 'Termal analiz simülasyonu', projectId: 1, project: 'T9 PLC v3 Ana Kart', status: 'in_progress', startDate: '2026-04-01', endDate: '2026-05-15' },
    { title: 'PCB maliyet revizyon', projectId: 1, project: 'T9 PLC v3 Ana Kart', status: 'planned', startDate: '2026-05-15', endDate: '2026-06-30' },
  ],
  3: [
    { title: 'PCB stackup tasarımı', projectId: 1, project: 'T9 PLC v3 Ana Kart', status: 'done', startDate: '2026-02-01', endDate: '2026-03-10' },
    { title: 'PCB Rev4 layout', projectId: 1, project: 'T9 PLC v3 Ana Kart', status: 'in_progress', startDate: '2026-03-20', endDate: '2026-05-15' },
    { title: 'PCB DRC kontrolü ve üretim çıktıları', projectId: 1, project: 'T9 PLC v3 Ana Kart', status: 'planned', startDate: '2026-05-20', endDate: '2026-06-15' },
  ],
  4: [
    { title: 'LCD panel seçimi ve test', projectId: 2, project: 'T7 Operatör Panel 10"', status: 'done', startDate: '2026-03-01', endDate: '2026-04-01' },
    { title: 'Dokunmatik sensör entegrasyon', projectId: 2, project: 'T7 Operatör Panel 10"', status: 'in_progress', startDate: '2026-04-05', endDate: '2026-05-20' },
    { title: 'Panel RF şielding tasarımı', projectId: 2, project: 'T7 Operatör Panel 10"', status: 'planned', startDate: '2026-05-25', endDate: '2026-07-10' },
  ],
  5: [
    { title: 'Donanım mimarisi tasarımı', projectId: 1, project: 'T9 PLC v3 Ana Kart', status: 'done', startDate: '2026-02-01', endDate: '2026-03-01' },
    { title: 'FPGA entegrasyon devresi', projectId: 1, project: 'T9 PLC v3 Ana Kart', status: 'in_progress', startDate: '2026-03-15', endDate: '2026-05-25' },
    { title: 'Güç koruma devreleri tasarımı', projectId: 1, project: 'T9 PLC v3 Ana Kart', status: 'planned', startDate: '2026-05-25', endDate: '2026-06-30' },
  ],
  6: [
    { title: 'Analog giriş devreleri tasarımı', projectId: 1, project: 'T9 PLC v3 Ana Kart', status: 'done', startDate: '2026-02-15', endDate: '2026-04-01' },
    { title: 'ADC seçimi ve entegrasyon', projectId: 1, project: 'T9 PLC v3 Ana Kart', status: 'in_progress', startDate: '2026-04-05', endDate: '2026-05-25' },
    { title: 'Dijital I/O koruma devreleri', projectId: 1, project: 'T9 PLC v3 Ana Kart', status: 'planned', startDate: '2026-05-25', endDate: '2026-07-01' },
  ],
  7: [
    { title: 'T9 güç elektroniği tasarımı', projectId: 1, project: 'T9 PLC v3 Ana Kart', status: 'done', startDate: '2026-02-01', endDate: '2026-03-31' },
    { title: 'T7 Panel güç kaynağı tasarımı', projectId: 2, project: 'T7 Operatör Panel 10"', status: 'in_progress', startDate: '2026-04-01', endDate: '2026-05-31' },
    { title: 'DC/DC dönüştürücü optimizasyonu', projectId: 1, project: 'T9 PLC v3 Ana Kart', status: 'planned', startDate: '2026-06-01', endDate: '2026-07-15' },
  ],
  8: [
    { title: 'Komponent katalog güncelleme', projectId: 1, project: 'T9 PLC v3 Ana Kart', status: 'done', startDate: '2026-02-01', endDate: '2026-03-15' },
    { title: 'Alternatif komponent araştırma', projectId: 1, project: 'T9 PLC v3 Ana Kart', status: 'in_progress', startDate: '2026-04-01', endDate: '2026-05-30' },
    { title: 'Komponent RoHS uyum kontrolü', projectId: 2, project: 'T7 Operatör Panel 10"', status: 'planned', startDate: '2026-06-01', endDate: '2026-07-15' },
  ],
  9: [
    { title: 'PCB sinyal bütünlüğü analizi', projectId: 1, project: 'T9 PLC v3 Ana Kart', status: 'done', startDate: '2026-02-15', endDate: '2026-03-31' },
    { title: 'Yüksek hızlı hat yönlendirme', projectId: 1, project: 'T9 PLC v3 Ana Kart', status: 'in_progress', startDate: '2026-04-01', endDate: '2026-05-20' },
    { title: 'PCB üretim test noktaları', projectId: 1, project: 'T9 PLC v3 Ana Kart', status: 'planned', startDate: '2026-05-20', endDate: '2026-06-20' },
  ],
  10: [
    { title: 'T7 Panel şematik tasarımı', projectId: 2, project: 'T7 Operatör Panel 10"', status: 'done', startDate: '2026-03-01', endDate: '2026-04-15' },
    { title: 'Panel I/O genişletme devresi', projectId: 2, project: 'T7 Operatör Panel 10"', status: 'in_progress', startDate: '2026-04-15', endDate: '2026-06-01' },
    { title: 'Panel EMC filtre tasarımı', projectId: 2, project: 'T7 Operatör Panel 10"', status: 'planned', startDate: '2026-06-15', endDate: '2026-07-31' },
  ],
  11: [
    { title: 'FPGA güç besleme tasarımı', projectId: 1, project: 'T9 PLC v3 Ana Kart', status: 'done', startDate: '2026-02-15', endDate: '2026-04-01' },
    { title: 'PLL ve saat ağı tasarımı', projectId: 1, project: 'T9 PLC v3 Ana Kart', status: 'in_progress', startDate: '2026-04-01', endDate: '2026-05-31' },
    { title: 'Sistem entegrasyon testi', projectId: 1, project: 'T9 PLC v3 Ana Kart', status: 'planned', startDate: '2026-06-01', endDate: '2026-07-15' },
  ],
  12: [
    { title: 'Watchdog ve reset devresi tasarımı', projectId: 1, project: 'T9 PLC v3 Ana Kart', status: 'done', startDate: '2026-02-15', endDate: '2026-04-01' },
    { title: 'Enerji depolama ve yedekleme', projectId: 1, project: 'T9 PLC v3 Ana Kart', status: 'in_progress', startDate: '2026-04-15', endDate: '2026-05-31' },
    { title: 'Yedekleme pil yönetimi', projectId: 1, project: 'T9 PLC v3 Ana Kart', status: 'planned', startDate: '2026-06-01', endDate: '2026-07-15' },
  ],
  13: [
    { title: 'EMI pre-compliance testi', projectId: 1, project: 'T9 PLC v3 Ana Kart', status: 'done', startDate: '2026-03-01', endDate: '2026-04-15' },
    { title: 'CISPR 11 test hazırlığı', projectId: 1, project: 'T9 PLC v3 Ana Kart', status: 'done', startDate: '2026-04-01', endDate: '2026-04-30' },
    { title: 'CE uyum dokümanları hazırlama', projectId: 1, project: 'T9 PLC v3 Ana Kart', status: 'planned', startDate: '2026-06-01', endDate: '2026-07-31' },
  ],
  14: [
    { title: 'Haberleşme arayüzleri tasarımı', projectId: 1, project: 'T9 PLC v3 Ana Kart', status: 'done', startDate: '2026-02-15', endDate: '2026-04-01' },
    { title: 'RS-485 / CAN bus devresi', projectId: 1, project: 'T9 PLC v3 Ana Kart', status: 'in_progress', startDate: '2026-04-01', endDate: '2026-05-20' },
    { title: 'Industrial Ethernet tasarımı', projectId: 1, project: 'T9 PLC v3 Ana Kart', status: 'planned', startDate: '2026-05-20', endDate: '2026-07-01' },
  ],
  15: [
    { title: 'Prototip PCB montaj denetimi', projectId: 1, project: 'T9 PLC v3 Ana Kart', status: 'done', startDate: '2026-03-01', endDate: '2026-04-15' },
    { title: 'İşlevsel donanım testi', projectId: 1, project: 'T9 PLC v3 Ana Kart', status: 'in_progress', startDate: '2026-04-15', endDate: '2026-05-30' },
    { title: 'Üretim test prosedürü hazırlama', projectId: 1, project: 'T9 PLC v3 Ana Kart', status: 'planned', startDate: '2026-06-01', endDate: '2026-07-10' },
  ],
  16: [
    { title: 'Bileşen tolerans analizi', projectId: 1, project: 'T9 PLC v3 Ana Kart', status: 'done', startDate: '2026-02-20', endDate: '2026-04-01' },
    { title: 'Sıcaklık kompanzasyon devreleri', projectId: 1, project: 'T9 PLC v3 Ana Kart', status: 'in_progress', startDate: '2026-04-01', endDate: '2026-05-20' },
    { title: 'Güvenilirlik testi hazırlığı', projectId: 1, project: 'T9 PLC v3 Ana Kart', status: 'planned', startDate: '2026-05-20', endDate: '2026-07-01' },
  ],
  17: [
    { title: 'Çok katmanlı PCB tasarım kuralları', projectId: 1, project: 'T9 PLC v3 Ana Kart', status: 'done', startDate: '2026-02-01', endDate: '2026-03-15' },
    { title: 'Impedans kontrollü hat tasarımı', projectId: 1, project: 'T9 PLC v3 Ana Kart', status: 'in_progress', startDate: '2026-03-20', endDate: '2026-05-15' },
    { title: 'PCB Gerber çıktı ve dokümantasyon', projectId: 1, project: 'T9 PLC v3 Ana Kart', status: 'planned', startDate: '2026-05-20', endDate: '2026-06-30' },
  ],
  18: [
    { title: 'Konektör ve kablo harness şeması', projectId: 1, project: 'T9 PLC v3 Ana Kart', status: 'done', startDate: '2026-02-15', endDate: '2026-04-01' },
    { title: 'Bağlantı elemanları entegrasyonu', projectId: 1, project: 'T9 PLC v3 Ana Kart', status: 'in_progress', startDate: '2026-04-01', endDate: '2026-05-20' },
    { title: 'Mekanik kutu tasarım desteği', projectId: 1, project: 'T9 PLC v3 Ana Kart', status: 'planned', startDate: '2026-05-25', endDate: '2026-07-01' },
  ],
  // Gömülü Yazılım / Firmware
  19: [
    { title: 'T7 Panel Linux kernel entegrasyonu', projectId: 2, project: 'T7 Operatör Panel 10"', status: 'done', startDate: '2026-03-01', endDate: '2026-04-20' },
    { title: 'Touchscreen sürücü geliştirme', projectId: 2, project: 'T7 Operatör Panel 10"', status: 'done', startDate: '2026-04-01', endDate: '2026-04-30' },
    { title: 'T7PAC v6 teknik mimari tasarımı', projectId: 3, project: 'T7PAC Firmware v6', status: 'in_progress', startDate: '2026-04-15', endDate: '2026-05-31' },
    { title: 'EtherCAT master implementasyonu', projectId: 3, project: 'T7PAC Firmware v6', status: 'planned', startDate: '2026-06-01', endDate: '2026-08-01' },
  ],
  20: [
    { title: 'T7PAC v6 gereksinim analizi', projectId: 3, project: 'T7PAC Firmware v6', status: 'in_progress', startDate: '2026-04-20', endDate: '2026-05-31' },
    { title: 'Protokol kütüphanesi hazırlama', projectId: 3, project: 'T7PAC Firmware v6', status: 'planned', startDate: '2026-06-01', endDate: '2026-07-15' },
    { title: 'Birim test framework kurulumu', projectId: 3, project: 'T7PAC Firmware v6', status: 'planned', startDate: '2026-07-15', endDate: '2026-08-31' },
  ],
  21: [
    { title: 'T7 Panel boot hızı optimizasyonu', projectId: 2, project: 'T7 Operatör Panel 10"', status: 'done', startDate: '2026-03-01', endDate: '2026-04-15' },
    { title: 'eMMC storage optimizasyonu', projectId: 2, project: 'T7 Operatör Panel 10"', status: 'in_progress', startDate: '2026-04-15', endDate: '2026-05-31' },
    { title: 'OTA güncelleme mekanizması', projectId: 2, project: 'T7 Operatör Panel 10"', status: 'planned', startDate: '2026-06-01', endDate: '2026-07-31' },
  ],
  22: [
    { title: 'T7PAC haberleşme protokol araştırma', projectId: 3, project: 'T7PAC Firmware v6', status: 'in_progress', startDate: '2026-04-15', endDate: '2026-06-01' },
    { title: 'Profinet IRT implementasyonu', projectId: 3, project: 'T7PAC Firmware v6', status: 'planned', startDate: '2026-06-01', endDate: '2026-08-01' },
    { title: 'Gerçek zamanlı OS yapılandırması', projectId: 3, project: 'T7PAC Firmware v6', status: 'planned', startDate: '2026-08-01', endDate: '2026-09-30' },
  ],
  23: [
    { title: 'T9 Ethernet/IP stack implementasyonu', projectId: 1, project: 'T9 PLC v3 Ana Kart', status: 'done', startDate: '2026-03-01', endDate: '2026-04-30' },
    { title: 'T9 EtherCAT slave implementasyonu', projectId: 1, project: 'T9 PLC v3 Ana Kart', status: 'in_progress', startDate: '2026-05-01', endDate: '2026-06-15' },
    { title: 'T9 FPGA-MCU haberleşme protokolü', projectId: 1, project: 'T9 PLC v3 Ana Kart', status: 'planned', startDate: '2026-06-15', endDate: '2026-07-31' },
  ],
  24: [
    { title: 'ADW servo kontrol firmware', projectId: 6, project: 'ADW Toz Boyarmadde Otomasyon', status: 'done', startDate: '2026-02-15', endDate: '2026-04-01' },
    { title: 'ADW PID döngü optimizasyonu', projectId: 6, project: 'ADW Toz Boyarmadde Otomasyon', status: 'in_progress', startDate: '2026-04-01', endDate: '2026-05-20' },
    { title: 'ADW HMI haberleşme protokolü', projectId: 6, project: 'ADW Toz Boyarmadde Otomasyon', status: 'planned', startDate: '2026-05-20', endDate: '2026-06-30' },
  ],
  25: [
    { title: 'T7 Panel BSP geliştirme', projectId: 2, project: 'T7 Operatör Panel 10"', status: 'done', startDate: '2026-03-01', endDate: '2026-04-20' },
    { title: 'T7 CAN bus sürücüsü', projectId: 2, project: 'T7 Operatör Panel 10"', status: 'in_progress', startDate: '2026-04-20', endDate: '2026-06-01' },
    { title: 'T7 Modbus TCP firmware', projectId: 2, project: 'T7 Operatör Panel 10"', status: 'planned', startDate: '2026-06-01', endDate: '2026-07-31' },
  ],
  26: [
    { title: 'T7PAC v6 geliştirme ortamı kurulumu', projectId: 3, project: 'T7PAC Firmware v6', status: 'in_progress', startDate: '2026-04-20', endDate: '2026-05-31' },
    { title: 'Cross-compile toolchain hazırlama', projectId: 3, project: 'T7PAC Firmware v6', status: 'planned', startDate: '2026-06-01', endDate: '2026-07-01' },
    { title: 'RTOS porting ve konfigurasyon', projectId: 3, project: 'T7PAC Firmware v6', status: 'planned', startDate: '2026-07-01', endDate: '2026-08-31' },
  ],
  27: [
    { title: 'T7PAC gereksinim belgesi hazırlama', projectId: 3, project: 'T7PAC Firmware v6', status: 'done', startDate: '2026-03-01', endDate: '2026-04-15' },
    { title: 'T7 Panel UART/USB protokolleri', projectId: 2, project: 'T7 Operatör Panel 10"', status: 'in_progress', startDate: '2026-04-15', endDate: '2026-05-31' },
    { title: 'T7PAC EtherCAT slave stack', projectId: 3, project: 'T7PAC Firmware v6', status: 'planned', startDate: '2026-06-15', endDate: '2026-08-15' },
  ],
  28: [
    { title: 'T7PAC bellek yönetimi araştırma', projectId: 3, project: 'T7PAC Firmware v6', status: 'in_progress', startDate: '2026-04-15', endDate: '2026-06-01' },
    { title: 'T7PAC flash programlama desteği', projectId: 3, project: 'T7PAC Firmware v6', status: 'planned', startDate: '2026-06-01', endDate: '2026-07-15' },
    { title: 'T7PAC konfigürasyon yönetimi', projectId: 3, project: 'T7PAC Firmware v6', status: 'planned', startDate: '2026-07-15', endDate: '2026-09-01' },
  ],
  29: [
    { title: 'T7PAC gömülü işletim sistemi değerlendirme', projectId: 3, project: 'T7PAC Firmware v6', status: 'in_progress', startDate: '2026-04-20', endDate: '2026-05-31' },
    { title: 'T7PAC FPGA-CPU haberleşme', projectId: 3, project: 'T7PAC Firmware v6', status: 'planned', startDate: '2026-06-01', endDate: '2026-07-31' },
    { title: 'T7PAC gerçek zamanlı görev yöneticisi', projectId: 3, project: 'T7PAC Firmware v6', status: 'planned', startDate: '2026-08-01', endDate: '2026-09-30' },
  ],
  30: [
    { title: 'T7PAC güvenlik mekanizmaları tasarımı', projectId: 3, project: 'T7PAC Firmware v6', status: 'in_progress', startDate: '2026-04-15', endDate: '2026-06-01' },
    { title: 'T7PAC watchdog ve hata yönetimi', projectId: 3, project: 'T7PAC Firmware v6', status: 'planned', startDate: '2026-06-01', endDate: '2026-07-15' },
    { title: 'T7PAC factory reset mekanizması', projectId: 3, project: 'T7PAC Firmware v6', status: 'planned', startDate: '2026-07-15', endDate: '2026-09-01' },
  ],
  31: [
    { title: 'T9 gömülü uygulama katmanı', projectId: 1, project: 'T9 PLC v3 Ana Kart', status: 'done', startDate: '2026-03-01', endDate: '2026-04-20' },
    { title: 'T9 PLC IO sürücüleri', projectId: 1, project: 'T9 PLC v3 Ana Kart', status: 'in_progress', startDate: '2026-04-20', endDate: '2026-05-31' },
    { title: 'T9 web HMI backend entegrasyonu', projectId: 1, project: 'T9 PLC v3 Ana Kart', status: 'planned', startDate: '2026-06-01', endDate: '2026-07-15' },
  ],
  32: [
    { title: 'T7PAC test altyapısı kurulumu', projectId: 3, project: 'T7PAC Firmware v6', status: 'in_progress', startDate: '2026-04-20', endDate: '2026-05-31' },
    { title: 'T7PAC otomatik test senaryoları', projectId: 3, project: 'T7PAC Firmware v6', status: 'planned', startDate: '2026-06-01', endDate: '2026-07-31' },
    { title: 'T7PAC HIL test ortamı', projectId: 3, project: 'T7PAC Firmware v6', status: 'planned', startDate: '2026-08-01', endDate: '2026-09-30' },
  ],
  33: [
    { title: 'EtherCAT referans implementasyonu', projectId: 3, project: 'T7PAC Firmware v6', status: 'in_progress', startDate: '2026-04-15', endDate: '2026-06-15' },
    { title: 'T7PAC EtherCAT slave iletişim', projectId: 3, project: 'T7PAC Firmware v6', status: 'planned', startDate: '2026-06-15', endDate: '2026-08-01' },
    { title: 'T7PAC çoklu eksen koordinasyonu', projectId: 3, project: 'T7PAC Firmware v6', status: 'planned', startDate: '2026-08-01', endDate: '2026-10-01' },
  ],
  // Üst Yazılım
  34: [
    { title: 'Teleskop v5 WebSocket modülü', projectId: 4, project: 'Teleskop v5 Boyahane Yönetim', status: 'done', startDate: '2026-01-15', endDate: '2026-04-01' },
    { title: 'Teleskop mobil uygulama beta', projectId: 4, project: 'Teleskop v5 Boyahane Yönetim', status: 'in_progress', startDate: '2026-04-15', endDate: '2026-05-31' },
    { title: 'Teleskop v5 performans optimizasyonu', projectId: 4, project: 'Teleskop v5 Boyahane Yönetim', status: 'planned', startDate: '2026-05-15', endDate: '2026-07-01' },
    { title: 'PPD yazılım mimarisi', projectId: 12, project: 'PPD Baskı Boya Mutfağı v3', status: 'planned', startDate: '2026-08-01', endDate: '2026-09-30' },
  ],
  35: [
    { title: 'Teleskop React Native mobil uygulama', projectId: 4, project: 'Teleskop v5 Boyahane Yönetim', status: 'done', startDate: '2026-02-01', endDate: '2026-04-20' },
    { title: 'Teleskop push notification modülü', projectId: 4, project: 'Teleskop v5 Boyahane Yönetim', status: 'in_progress', startDate: '2026-04-20', endDate: '2026-05-31' },
    { title: 'Teleskop iOS beta TestFlight', projectId: 4, project: 'Teleskop v5 Boyahane Yönetim', status: 'planned', startDate: '2026-06-01', endDate: '2026-07-01' },
  ],
  36: [
    { title: 'Teleskop SCADA Modbus TCP entegrasyon', projectId: 4, project: 'Teleskop v5 Boyahane Yönetim', status: 'done', startDate: '2026-01-15', endDate: '2026-03-31' },
    { title: 'IIoT Gateway MQTT broker yapılandırma', projectId: 11, project: 'IIoT Gateway & Bulut', status: 'done', startDate: '2026-04-01', endDate: '2026-04-30' },
    { title: 'IIoT OPC-UA sunucu implementasyonu', projectId: 11, project: 'IIoT Gateway & Bulut', status: 'in_progress', startDate: '2026-04-15', endDate: '2026-06-01' },
    { title: 'IIoT veri analiz modülü', projectId: 11, project: 'IIoT Gateway & Bulut', status: 'planned', startDate: '2026-06-01', endDate: '2026-08-01' },
  ],
  37: [
    { title: 'T9 web HMI React frontend', projectId: 1, project: 'T9 PLC v3 Ana Kart', status: 'done', startDate: '2026-03-01', endDate: '2026-04-30' },
    { title: 'Teleskop admin panel UI', projectId: 4, project: 'Teleskop v5 Boyahane Yönetim', status: 'in_progress', startDate: '2026-04-15', endDate: '2026-05-31' },
    { title: 'Teleskop raporlama modülü', projectId: 4, project: 'Teleskop v5 Boyahane Yönetim', status: 'planned', startDate: '2026-05-31', endDate: '2026-07-01' },
  ],
  38: [
    { title: 'Teleskop PostgreSQL migration', projectId: 4, project: 'Teleskop v5 Boyahane Yönetim', status: 'done', startDate: '2026-02-01', endDate: '2026-04-01' },
    { title: 'Teleskop veritabanı indeks optimizasyonu', projectId: 4, project: 'Teleskop v5 Boyahane Yönetim', status: 'in_progress', startDate: '2026-04-01', endDate: '2026-05-15' },
    { title: 'Teleskop veri yedekleme stratejisi', projectId: 4, project: 'Teleskop v5 Boyahane Yönetim', status: 'planned', startDate: '2026-05-15', endDate: '2026-06-30' },
  ],
  39: [
    { title: 'IIoT Gateway REST API geliştirme', projectId: 11, project: 'IIoT Gateway & Bulut', status: 'in_progress', startDate: '2026-04-01', endDate: '2026-06-01' },
    { title: 'IIoT cihaz yönetimi modülü', projectId: 11, project: 'IIoT Gateway & Bulut', status: 'planned', startDate: '2026-06-01', endDate: '2026-08-01' },
    { title: 'IIoT dashboard geliştirme', projectId: 11, project: 'IIoT Gateway & Bulut', status: 'planned', startDate: '2026-07-01', endDate: '2026-09-01' },
  ],
  40: [
    { title: 'IIoT Gateway backend geliştirme', projectId: 11, project: 'IIoT Gateway & Bulut', status: 'done', startDate: '2026-04-01', endDate: '2026-04-30' },
    { title: 'IIoT OPC-UA server implementasyonu', projectId: 11, project: 'IIoT Gateway & Bulut', status: 'in_progress', startDate: '2026-04-20', endDate: '2026-06-01' },
    { title: 'IIoT data pipeline optimizasyonu', projectId: 11, project: 'IIoT Gateway & Bulut', status: 'planned', startDate: '2026-06-01', endDate: '2026-08-01' },
  ],
  41: [
    { title: 'Teleskop alarm yönetimi UI', projectId: 4, project: 'Teleskop v5 Boyahane Yönetim', status: 'done', startDate: '2026-02-01', endDate: '2026-04-15' },
    { title: 'Teleskop real-time monitoring dashboard', projectId: 4, project: 'Teleskop v5 Boyahane Yönetim', status: 'in_progress', startDate: '2026-04-15', endDate: '2026-05-31' },
    { title: 'Teleskop responsive mobil UI', projectId: 4, project: 'Teleskop v5 Boyahane Yönetim', status: 'planned', startDate: '2026-05-31', endDate: '2026-07-01' },
  ],
  42: [
    { title: 'IIoT güvenlik mimarisi tasarımı', projectId: 11, project: 'IIoT Gateway & Bulut', status: 'done', startDate: '2026-04-01', endDate: '2026-04-30' },
    { title: 'IIoT penetrasyon testi hazırlığı', projectId: 11, project: 'IIoT Gateway & Bulut', status: 'in_progress', startDate: '2026-04-20', endDate: '2026-05-31' },
    { title: 'IIoT IEC 62443 belgelendirmesi', projectId: 11, project: 'IIoT Gateway & Bulut', status: 'planned', startDate: '2026-06-01', endDate: '2026-09-01' },
  ],
  43: [
    { title: 'Teleskop makine bağlantı modülü', projectId: 4, project: 'Teleskop v5 Boyahane Yönetim', status: 'done', startDate: '2026-02-01', endDate: '2026-04-01' },
    { title: 'IIoT veri protokol dönüşüm servisi', projectId: 11, project: 'IIoT Gateway & Bulut', status: 'in_progress', startDate: '2026-04-15', endDate: '2026-06-01' },
    { title: 'IIoT bulut senkronizasyon servisi', projectId: 11, project: 'IIoT Gateway & Bulut', status: 'planned', startDate: '2026-06-01', endDate: '2026-08-15' },
  ],
  44: [
    { title: 'Teleskop UX araştırması ve prototipleme', projectId: 4, project: 'Teleskop v5 Boyahane Yönetim', status: 'done', startDate: '2026-01-15', endDate: '2026-03-15' },
    { title: 'Teleskop v5 tasarım sistemi oluşturma', projectId: 4, project: 'Teleskop v5 Boyahane Yönetim', status: 'in_progress', startDate: '2026-03-20', endDate: '2026-05-15' },
    { title: 'Teleskop kullanıcı testi yürütme', projectId: 4, project: 'Teleskop v5 Boyahane Yönetim', status: 'planned', startDate: '2026-05-15', endDate: '2026-06-30' },
  ],
  45: [
    { title: 'IIoT AWS IoT Core entegrasyonu', projectId: 11, project: 'IIoT Gateway & Bulut', status: 'done', startDate: '2026-04-01', endDate: '2026-04-30' },
    { title: 'IIoT X.509 kimlik doğrulama', projectId: 11, project: 'IIoT Gateway & Bulut', status: 'done', startDate: '2026-04-15', endDate: '2026-04-30' },
    { title: 'IIoT cloud scalability testi', projectId: 11, project: 'IIoT Gateway & Bulut', status: 'in_progress', startDate: '2026-05-01', endDate: '2026-06-15' },
    { title: 'IIoT AWS Lambda fonksiyonları', projectId: 11, project: 'IIoT Gateway & Bulut', status: 'planned', startDate: '2026-06-15', endDate: '2026-08-01' },
  ],
  46: [
    { title: 'Teleskop makine veri entegrasyonu', projectId: 4, project: 'Teleskop v5 Boyahane Yönetim', status: 'done', startDate: '2026-02-15', endDate: '2026-04-15' },
    { title: 'Teleskop enerji izleme modülü', projectId: 4, project: 'Teleskop v5 Boyahane Yönetim', status: 'in_progress', startDate: '2026-04-15', endDate: '2026-05-31' },
    { title: 'Teleskop raporlama servisi', projectId: 4, project: 'Teleskop v5 Boyahane Yönetim', status: 'planned', startDate: '2026-06-01', endDate: '2026-07-15' },
  ],
  47: [
    { title: 'IIoT cihaz kayıt sistemi', projectId: 11, project: 'IIoT Gateway & Bulut', status: 'in_progress', startDate: '2026-04-15', endDate: '2026-06-01' },
    { title: 'IIoT telemetri akış işleme', projectId: 11, project: 'IIoT Gateway & Bulut', status: 'planned', startDate: '2026-06-01', endDate: '2026-07-31' },
    { title: 'IIoT edge computing entegrasyonu', projectId: 11, project: 'IIoT Gateway & Bulut', status: 'planned', startDate: '2026-08-01', endDate: '2026-09-30' },
  ],
  // Sensör Geliştirme
  48: [
    { title: 'PMT140 cam elektrot tasarımı ve test', projectId: 8, project: 'PMT140 pH Sensörü v2', status: 'done', startDate: '2026-03-01', endDate: '2026-04-20' },
    { title: 'PMT140 ATEX sertifikasyonu başvurusu', projectId: 8, project: 'PMT140 pH Sensörü v2', status: 'in_progress', startDate: '2026-04-20', endDate: '2026-06-30' },
    { title: 'PMT140 müşteri demo hazırlığı', projectId: 8, project: 'PMT140 pH Sensörü v2', status: 'planned', startDate: '2026-05-01', endDate: '2026-05-20' },
    { title: 'PMT140 kullanıcı kılavuzu hazırlama', projectId: 8, project: 'PMT140 pH Sensörü v2', status: 'planned', startDate: '2026-06-01', endDate: '2026-07-15' },
  ],
  49: [
    { title: 'PMT140 tekstil saha testi', projectId: 8, project: 'PMT140 pH Sensörü v2', status: 'done', startDate: '2026-03-01', endDate: '2026-04-15' },
    { title: 'SAT210 termal stabilite testi', projectId: 10, project: 'SAT210 Spektrofotometrik Sensör', status: 'done', startDate: '2026-03-01', endDate: '2026-04-01' },
    { title: 'SAT210 optik filtre alternatif araştırma', projectId: 10, project: 'SAT210 Spektrofotometrik Sensör', status: 'in_progress', startDate: '2026-04-20', endDate: '2026-05-31' },
    { title: 'SAT210 optik modül revizyonu', projectId: 10, project: 'SAT210 Spektrofotometrik Sensör', status: 'planned', startDate: '2026-05-31', endDate: '2026-07-15' },
  ],
  50: [
    { title: 'SAT210 dalga boyu tarama hızı optimizasyonu', projectId: 10, project: 'SAT210 Spektrofotometrik Sensör', status: 'done', startDate: '2026-02-15', endDate: '2026-04-01' },
    { title: 'SAT210 referans hücre tasarımı', projectId: 10, project: 'SAT210 Spektrofotometrik Sensör', status: 'in_progress', startDate: '2026-04-01', endDate: '2026-05-31' },
    { title: 'SAT210 saha testi protokolü', projectId: 10, project: 'SAT210 Spektrofotometrik Sensör', status: 'planned', startDate: '2026-06-01', endDate: '2026-07-31' },
  ],
  51: [
    { title: 'SAT210 müşteri demo sunumu', projectId: 10, project: 'SAT210 Spektrofotometrik Sensör', status: 'done', startDate: '2026-04-15', endDate: '2026-04-30' },
    { title: 'SAT210 müşteri saha testi planlaması', projectId: 10, project: 'SAT210 Spektrofotometrik Sensör', status: 'in_progress', startDate: '2026-05-01', endDate: '2026-06-01' },
    { title: 'SAT210 müşteri tesisinde kurulum', projectId: 10, project: 'SAT210 Spektrofotometrik Sensör', status: 'planned', startDate: '2026-06-01', endDate: '2026-07-01' },
  ],
  52: [
    { title: 'ICT200 final kalibrasyon', projectId: 9, project: 'ICT200 İletkenlik Sensörü', status: 'done', startDate: '2025-12-01', endDate: '2026-02-15' },
    { title: 'ICT200 Türkiye akreditasyon belgesi', projectId: 9, project: 'ICT200 İletkenlik Sensörü', status: 'done', startDate: '2026-02-15', endDate: '2026-04-30' },
    { title: 'PMT140 iletkenlik modülü entegrasyonu', projectId: 8, project: 'PMT140 pH Sensörü v2', status: 'in_progress', startDate: '2026-04-15', endDate: '2026-06-01' },
  ],
  53: [
    { title: 'SAT210 DSP algoritma optimizasyonu', projectId: 10, project: 'SAT210 Spektrofotometrik Sensör', status: 'done', startDate: '2026-03-01', endDate: '2026-04-15' },
    { title: 'SAT210 renk kalibrasyon prosedürü', projectId: 10, project: 'SAT210 Spektrofotometrik Sensör', status: 'in_progress', startDate: '2026-04-15', endDate: '2026-05-31' },
    { title: 'SAT210 ATEX ön değerlendirme', projectId: 10, project: 'SAT210 Spektrofotometrik Sensör', status: 'planned', startDate: '2026-06-01', endDate: '2026-07-31' },
  ],
  54: [
    { title: 'PMT140 kimyasal direnç testi', projectId: 8, project: 'PMT140 pH Sensörü v2', status: 'done', startDate: '2026-03-01', endDate: '2026-04-15' },
    { title: 'PMT140 referans elektrot kalibrasyon', projectId: 8, project: 'PMT140 pH Sensörü v2', status: 'in_progress', startDate: '2026-04-15', endDate: '2026-05-31' },
    { title: 'PMT140 sıcaklık kompanzasyon algoritması', projectId: 8, project: 'PMT140 pH Sensörü v2', status: 'planned', startDate: '2026-06-01', endDate: '2026-07-15' },
  ],
  55: [
    { title: 'ICT200 saha testi raporları', projectId: 9, project: 'ICT200 İletkenlik Sensörü', status: 'done', startDate: '2025-12-01', endDate: '2026-02-28' },
    { title: 'PMT140 3 aylık saha testi', projectId: 8, project: 'PMT140 pH Sensörü v2', status: 'done', startDate: '2026-01-15', endDate: '2026-04-30' },
    { title: 'PMT140 drift analizi raporu', projectId: 8, project: 'PMT140 pH Sensörü v2', status: 'in_progress', startDate: '2026-05-01', endDate: '2026-06-30' },
  ],
  56: [
    { title: 'SAT210 dedektör array tasarımı', projectId: 10, project: 'SAT210 Spektrofotometrik Sensör', status: 'done', startDate: '2026-02-15', endDate: '2026-04-01' },
    { title: 'SAT210 sinyal işleme kartı testi', projectId: 10, project: 'SAT210 Spektrofotometrik Sensör', status: 'in_progress', startDate: '2026-04-01', endDate: '2026-05-31' },
    { title: 'SAT210 optik raf tasarımı', projectId: 10, project: 'SAT210 Spektrofotometrik Sensör', status: 'planned', startDate: '2026-06-01', endDate: '2026-07-31' },
  ],
  57: [
    { title: 'ICT200 kalibrasyon katsayıları hesaplama', projectId: 9, project: 'ICT200 İletkenlik Sensörü', status: 'done', startDate: '2025-12-01', endDate: '2026-01-31' },
    { title: 'ICT200 üretim kalibrasyon prosedürü', projectId: 9, project: 'ICT200 İletkenlik Sensörü', status: 'done', startDate: '2026-01-15', endDate: '2026-02-28' },
    { title: 'SAT210 iletkenlik karşılaştırma testi', projectId: 10, project: 'SAT210 Spektrofotometrik Sensör', status: 'in_progress', startDate: '2026-04-15', endDate: '2026-06-01' },
  ],
  58: [
    { title: 'PMT140 elektronik kart tasarımı', projectId: 8, project: 'PMT140 pH Sensörü v2', status: 'done', startDate: '2026-03-01', endDate: '2026-04-15' },
    { title: 'SAT210 elektronik kart tasarımı', projectId: 10, project: 'SAT210 Spektrofotometrik Sensör', status: 'in_progress', startDate: '2026-04-15', endDate: '2026-06-01' },
    { title: 'PMT140 ATEX elektronik tasarımı', projectId: 8, project: 'PMT140 pH Sensörü v2', status: 'planned', startDate: '2026-06-01', endDate: '2026-07-15' },
  ],
  59: [
    { title: 'ICT200 sıcaklık kompanzasyon testi', projectId: 9, project: 'ICT200 İletkenlik Sensörü', status: 'done', startDate: '2025-12-15', endDate: '2026-02-15' },
    { title: 'ICT200 üretim sertifikasyonu', projectId: 9, project: 'ICT200 İletkenlik Sensörü', status: 'done', startDate: '2026-02-01', endDate: '2026-02-28' },
    { title: 'SAT210 tekstil sektörü uygulamaları analizi', projectId: 10, project: 'SAT210 Spektrofotometrik Sensör', status: 'in_progress', startDate: '2026-04-01', endDate: '2026-05-31' },
  ],
  // Mekatronik & Robotik
  60: [
    { title: 'ADW servo kalibrasyon tamamlama', projectId: 6, project: 'ADW Toz Boyarmadde Otomasyon', status: 'done', startDate: '2026-02-15', endDate: '2026-04-15' },
    { title: 'ADW vibrasyon analizi', projectId: 6, project: 'ADW Toz Boyarmadde Otomasyon', status: 'done', startDate: '2026-04-01', endDate: '2026-04-30' },
    { title: 'ADW yeni model mekanik tasarım', projectId: 6, project: 'ADW Toz Boyarmadde Otomasyon', status: 'in_progress', startDate: '2026-05-01', endDate: '2026-06-30' },
    { title: 'PPD mekanik tasarım koordinasyonu', projectId: 12, project: 'PPD Baskı Boya Mutfağı v3', status: 'planned', startDate: '2026-08-01', endDate: '2026-10-01' },
  ],
  61: [
    { title: 'ADW konveyör mekanik tasarım', projectId: 6, project: 'ADW Toz Boyarmadde Otomasyon', status: 'done', startDate: '2026-02-01', endDate: '2026-03-31' },
    { title: 'ADW yeni model SOLIDWORKS tasarım', projectId: 6, project: 'ADW Toz Boyarmadde Otomasyon', status: 'in_progress', startDate: '2026-04-01', endDate: '2026-06-30' },
    { title: 'ADW montaj ve kurulum kılavuzu', projectId: 6, project: 'ADW Toz Boyarmadde Otomasyon', status: 'planned', startDate: '2026-05-15', endDate: '2026-06-30' },
  ],
  62: [
    { title: 'RD96 impeller yeniden tasarımı', projectId: 5, project: 'RD96 Sıvı Dozajlama v2', status: 'done', startDate: '2025-11-01', endDate: '2026-02-28' },
    { title: 'RD96 72 saat sürekli çalışma testi', projectId: 5, project: 'RD96 Sıvı Dozajlama v2', status: 'done', startDate: '2026-03-01', endDate: '2026-03-31' },
    { title: 'LABx Next mekanik tasarım', projectId: 7, project: 'LABx Next Laboratuvar', status: 'planned', startDate: '2026-07-01', endDate: '2026-09-30' },
    { title: 'PPD mekanik sistem tasarımı', projectId: 12, project: 'PPD Baskı Boya Mutfağı v3', status: 'planned', startDate: '2026-08-01', endDate: '2026-10-31' },
  ],
  63: [
    { title: 'ADW tartım sensörü entegrasyonu', projectId: 6, project: 'ADW Toz Boyarmadde Otomasyon', status: 'done', startDate: '2026-02-15', endDate: '2026-04-01' },
    { title: 'ADW titreşim analizi', projectId: 6, project: 'ADW Toz Boyarmadde Otomasyon', status: 'done', startDate: '2026-04-01', endDate: '2026-04-30' },
    { title: 'ADW dampfer tasarımı', projectId: 6, project: 'ADW Toz Boyarmadde Otomasyon', status: 'planned', startDate: '2026-05-01', endDate: '2026-06-30' },
  ],
  64: [
    { title: 'RD96 kavitasyon problemi çözümü', projectId: 5, project: 'RD96 Sıvı Dozajlama v2', status: 'done', startDate: '2025-11-01', endDate: '2026-02-28' },
    { title: 'ADW konveyör PID optimizasyonu', projectId: 6, project: 'ADW Toz Boyarmadde Otomasyon', status: 'done', startDate: '2026-02-15', endDate: '2026-04-01' },
    { title: 'ADW servo motor testleri', projectId: 6, project: 'ADW Toz Boyarmadde Otomasyon', status: 'in_progress', startDate: '2026-04-15', endDate: '2026-05-31' },
    { title: 'ADW otomasyon sistemi devreye alma', projectId: 6, project: 'ADW Toz Boyarmadde Otomasyon', status: 'planned', startDate: '2026-06-01', endDate: '2026-06-30' },
  ],
  65: [
    { title: 'ADW güç aktarma sistemi tasarımı', projectId: 6, project: 'ADW Toz Boyarmadde Otomasyon', status: 'done', startDate: '2026-02-01', endDate: '2026-03-31' },
    { title: 'ADW step motor sürücü entegrasyon', projectId: 6, project: 'ADW Toz Boyarmadde Otomasyon', status: 'in_progress', startDate: '2026-04-15', endDate: '2026-06-01' },
    { title: 'ADW yeni motor seçimi ve test', projectId: 6, project: 'ADW Toz Boyarmadde Otomasyon', status: 'planned', startDate: '2026-05-15', endDate: '2026-06-30' },
  ],
  66: [
    { title: 'RD96 mekanik test platformu', projectId: 5, project: 'RD96 Sıvı Dozajlama v2', status: 'done', startDate: '2025-12-01', endDate: '2026-02-28' },
    { title: 'PMT140 sensör muhafaza IP68 testi', projectId: 8, project: 'PMT140 pH Sensörü v2', status: 'done', startDate: '2026-03-01', endDate: '2026-04-01' },
    { title: 'PMT140 koruyucu kılıf revizyonu', projectId: 8, project: 'PMT140 pH Sensörü v2', status: 'in_progress', startDate: '2026-04-15', endDate: '2026-06-01' },
  ],
  67: [
    { title: 'ADW güvenlik sistemleri tasarımı', projectId: 6, project: 'ADW Toz Boyarmadde Otomasyon', status: 'done', startDate: '2026-02-15', endDate: '2026-04-01' },
    { title: 'ADW acil durdurma mekanizması', projectId: 6, project: 'ADW Toz Boyarmadde Otomasyon', status: 'in_progress', startDate: '2026-04-15', endDate: '2026-05-31' },
    { title: 'ADW CE makine direktifi uyum', projectId: 6, project: 'ADW Toz Boyarmadde Otomasyon', status: 'planned', startDate: '2026-06-01', endDate: '2026-06-30' },
  ],
  68: [
    { title: 'LABx Next robotik arm tasarımı', projectId: 7, project: 'LABx Next Laboratuvar', status: 'planned', startDate: '2026-07-01', endDate: '2026-09-30' },
    { title: 'PPD robotik boya karıştırma sistemi', projectId: 12, project: 'PPD Baskı Boya Mutfağı v3', status: 'planned', startDate: '2026-08-01', endDate: '2026-11-01' },
    { title: 'LABx otomasyon kontrol sistemi', projectId: 7, project: 'LABx Next Laboratuvar', status: 'planned', startDate: '2026-09-01', endDate: '2026-11-30' },
  ],
  69: [
    { title: 'ADW hassasiyet test protokolü', projectId: 6, project: 'ADW Toz Boyarmadde Otomasyon', status: 'done', startDate: '2026-03-01', endDate: '2026-04-15' },
    { title: 'ADW 3000 döngü dayanım testi', projectId: 6, project: 'ADW Toz Boyarmadde Otomasyon', status: 'in_progress', startDate: '2026-04-15', endDate: '2026-05-31' },
    { title: 'ADW müşteri kabulü testi hazırlığı', projectId: 6, project: 'ADW Toz Boyarmadde Otomasyon', status: 'planned', startDate: '2026-06-01', endDate: '2026-06-30' },
  ],
  // Test & Kalite
  70: [
    { title: 'T9 EMC CISPR 11 test yürütme', projectId: 1, project: 'T9 PLC v3 Ana Kart', status: 'done', startDate: '2026-03-15', endDate: '2026-04-15' },
    { title: 'SAT210 optik kalite güvence testi', projectId: 10, project: 'SAT210 Spektrofotometrik Sensör', status: 'in_progress', startDate: '2026-04-15', endDate: '2026-06-01' },
    { title: 'T9 fonksiyonel test prosedürü', projectId: 1, project: 'T9 PLC v3 Ana Kart', status: 'planned', startDate: '2026-06-01', endDate: '2026-07-15' },
  ],
  71: [
    { title: 'T9 PLC fonksiyonel test hazırlığı', projectId: 1, project: 'T9 PLC v3 Ana Kart', status: 'done', startDate: '2026-03-15', endDate: '2026-04-30' },
    { title: 'T9 çevre koşulları testi', projectId: 1, project: 'T9 PLC v3 Ana Kart', status: 'in_progress', startDate: '2026-04-30', endDate: '2026-06-01' },
    { title: 'T7 Panel dokunmatik test', projectId: 2, project: 'T7 Operatör Panel 10"', status: 'planned', startDate: '2026-06-01', endDate: '2026-07-31' },
  ],
  72: [
    { title: 'T9 kalite kontrol prosedürü', projectId: 1, project: 'T9 PLC v3 Ana Kart', status: 'done', startDate: '2026-03-01', endDate: '2026-04-20' },
    { title: 'Teleskop yazılım kalite güvencesi', projectId: 4, project: 'Teleskop v5 Boyahane Yönetim', status: 'in_progress', startDate: '2026-04-15', endDate: '2026-06-01' },
    { title: 'ADW üretim kalite planı', projectId: 6, project: 'ADW Toz Boyarmadde Otomasyon', status: 'planned', startDate: '2026-05-15', endDate: '2026-06-30' },
  ],
  73: [
    { title: 'PMT140 çevre testi yürütme', projectId: 8, project: 'PMT140 pH Sensörü v2', status: 'done', startDate: '2026-03-15', endDate: '2026-04-30' },
    { title: 'PMT140 güvenilirlik testi planı', projectId: 8, project: 'PMT140 pH Sensörü v2', status: 'in_progress', startDate: '2026-04-30', endDate: '2026-06-15' },
    { title: 'PMT140 ATEX test dokümantasyonu', projectId: 8, project: 'PMT140 pH Sensörü v2', status: 'planned', startDate: '2026-06-15', endDate: '2026-07-31' },
  ],
  74: [
    { title: 'T9 PLC EMC pre-compliance ölçümleri', projectId: 1, project: 'T9 PLC v3 Ana Kart', status: 'done', startDate: '2026-03-01', endDate: '2026-04-15' },
    { title: 'T9 CE test hazırlık paketi', projectId: 1, project: 'T9 PLC v3 Ana Kart', status: 'in_progress', startDate: '2026-04-15', endDate: '2026-06-01' },
    { title: 'T7 Panel EMC test planı', projectId: 2, project: 'T7 Operatör Panel 10"', status: 'planned', startDate: '2026-06-15', endDate: '2026-08-01' },
  ],
  75: [
    { title: 'ADW kalite kontrol protokolü', projectId: 6, project: 'ADW Toz Boyarmadde Otomasyon', status: 'done', startDate: '2026-03-01', endDate: '2026-04-20' },
    { title: 'Teleskop v5 yazılım test raporu', projectId: 4, project: 'Teleskop v5 Boyahane Yönetim', status: 'in_progress', startDate: '2026-04-20', endDate: '2026-05-31' },
    { title: 'ADW seri üretim kalite standardı', projectId: 6, project: 'ADW Toz Boyarmadde Otomasyon', status: 'planned', startDate: '2026-05-31', endDate: '2026-06-30' },
  ],
  76: [
    { title: 'T7 Panel LCD dokunmatik test protokolü', projectId: 2, project: 'T7 Operatör Panel 10"', status: 'done', startDate: '2026-04-01', endDate: '2026-05-01' },
    { title: 'T7 Panel yazılım entegrasyon testi', projectId: 2, project: 'T7 Operatör Panel 10"', status: 'in_progress', startDate: '2026-05-01', endDate: '2026-06-15' },
    { title: 'T7 Panel güvenilirlik testi', projectId: 2, project: 'T7 Operatör Panel 10"', status: 'planned', startDate: '2026-06-15', endDate: '2026-07-31' },
  ],
  77: [
    { title: 'IIoT Gateway test otomasyon altyapısı', projectId: 11, project: 'IIoT Gateway & Bulut', status: 'done', startDate: '2026-04-01', endDate: '2026-04-30' },
    { title: 'IIoT yük ve stres testi', projectId: 11, project: 'IIoT Gateway & Bulut', status: 'in_progress', startDate: '2026-04-30', endDate: '2026-06-01' },
    { title: 'IIoT güvenlik test senaryoları', projectId: 11, project: 'IIoT Gateway & Bulut', status: 'planned', startDate: '2026-06-01', endDate: '2026-07-31' },
  ],
  // Sistem & Proje Mühendisliği
  78: [
    { title: 'LABx Next proje kickoff hazırlığı', projectId: 7, project: 'LABx Next Laboratuvar', status: 'in_progress', startDate: '2026-04-15', endDate: '2026-05-15' },
    { title: 'LABx proje planı ve risk yönetimi', projectId: 7, project: 'LABx Next Laboratuvar', status: 'planned', startDate: '2026-05-15', endDate: '2026-07-01' },
    { title: 'PPD fizibilite raporu hazırlama', projectId: 12, project: 'PPD Baskı Boya Mutfağı v3', status: 'in_progress', startDate: '2026-04-20', endDate: '2026-06-01' },
    { title: 'PPD proje ekibi oluşturma', projectId: 12, project: 'PPD Baskı Boya Mutfağı v3', status: 'planned', startDate: '2026-07-01', endDate: '2026-08-01' },
  ],
  79: [
    { title: 'LABx Next sistem gereksinimleri analizi', projectId: 7, project: 'LABx Next Laboratuvar', status: 'in_progress', startDate: '2026-04-20', endDate: '2026-06-01' },
    { title: 'LABx sistem mimarisi tasarımı', projectId: 7, project: 'LABx Next Laboratuvar', status: 'planned', startDate: '2026-06-01', endDate: '2026-08-01' },
    { title: 'LABx entegrasyon planı hazırlama', projectId: 7, project: 'LABx Next Laboratuvar', status: 'planned', startDate: '2026-08-01', endDate: '2026-10-01' },
  ],
  80: [
    { title: 'T9 PLC sistem entegrasyon planı', projectId: 1, project: 'T9 PLC v3 Ana Kart', status: 'done', startDate: '2026-03-01', endDate: '2026-04-20' },
    { title: 'Teleskop v5 sistem kabul testi', projectId: 4, project: 'Teleskop v5 Boyahane Yönetim', status: 'in_progress', startDate: '2026-04-15', endDate: '2026-06-01' },
    { title: 'T9 PLC FAT (Factory Acceptance Test)', projectId: 1, project: 'T9 PLC v3 Ana Kart', status: 'planned', startDate: '2026-06-15', endDate: '2026-07-31' },
  ],
  81: [
    { title: 'ADW eğitim dokümanları koordinasyonu', projectId: 6, project: 'ADW Toz Boyarmadde Otomasyon', status: 'done', startDate: '2026-03-01', endDate: '2026-04-15' },
    { title: 'ADW müşteri eğitimi planlaması', projectId: 6, project: 'ADW Toz Boyarmadde Otomasyon', status: 'in_progress', startDate: '2026-04-15', endDate: '2026-06-01' },
    { title: 'ADW müşteri kabulü koordinasyonu', projectId: 6, project: 'ADW Toz Boyarmadde Otomasyon', status: 'planned', startDate: '2026-06-01', endDate: '2026-06-30' },
  ],
  82: [
    { title: 'PPD Baskı Boya v3 pazar araştırması', projectId: 12, project: 'PPD Baskı Boya Mutfağı v3', status: 'in_progress', startDate: '2026-04-01', endDate: '2026-06-01' },
    { title: 'LABx Next sistem gereksinim belgesi', projectId: 7, project: 'LABx Next Laboratuvar', status: 'planned', startDate: '2026-06-01', endDate: '2026-08-01' },
    { title: 'PPD fizibilite raporu tamamlama', projectId: 12, project: 'PPD Baskı Boya Mutfağı v3', status: 'planned', startDate: '2026-06-01', endDate: '2026-07-31' },
  ],
  83: [
    { title: 'PPD PLC entegrasyon gereksinimleri', projectId: 12, project: 'PPD Baskı Boya Mutfağı v3', status: 'in_progress', startDate: '2026-04-15', endDate: '2026-06-15' },
    { title: 'PPD barkod sistemi entegrasyon planı', projectId: 12, project: 'PPD Baskı Boya Mutfağı v3', status: 'planned', startDate: '2026-06-15', endDate: '2026-08-15' },
    { title: 'PPD FAT hazırlık paketi', projectId: 12, project: 'PPD Baskı Boya Mutfağı v3', status: 'planned', startDate: '2026-10-01', endDate: '2026-11-30' },
  ],
  84: [
    { title: 'T9 PLC sistem analizi ve dokümantasyon', projectId: 1, project: 'T9 PLC v3 Ana Kart', status: 'done', startDate: '2026-02-15', endDate: '2026-04-01' },
    { title: 'T9 kullanıcı gereksinim belgesi', projectId: 1, project: 'T9 PLC v3 Ana Kart', status: 'in_progress', startDate: '2026-04-01', endDate: '2026-05-20' },
    { title: 'T9 kullanım kılavuzu taslağı', projectId: 1, project: 'T9 PLC v3 Ana Kart', status: 'planned', startDate: '2026-05-20', endDate: '2026-07-01' },
  ],
  85: [
    { title: 'ADW proje ilerleme raporları', projectId: 6, project: 'ADW Toz Boyarmadde Otomasyon', status: 'done', startDate: '2026-02-15', endDate: '2026-04-15' },
    { title: 'LABx Next proje planı taslağı', projectId: 7, project: 'LABx Next Laboratuvar', status: 'in_progress', startDate: '2026-04-15', endDate: '2026-05-31' },
    { title: 'LABx kaynak planlaması', projectId: 7, project: 'LABx Next Laboratuvar', status: 'planned', startDate: '2026-06-01', endDate: '2026-07-31' },
  ],
};
// Görevleri personele ekle
PERSONNEL.forEach(p => { p.tasks = PERSONNEL_TASKS[p.id] || []; });

// Rol seviyelerini ata (member = normal personel, lead = takım lideri)
PERSONNEL.forEach(p => { p.role_level = 'member'; });
// Kıdemli ve lider unvanlı personeli takım lideri yap
[1, 9, 19, 23, 33, 34, 36, 48, 60, 70, 78].forEach(id => {
  const p = PERSONNEL.find(x => x.id === id);
  if (p) p.role_level = 'lead';
});

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
  { id: 15, name: "ADW_Conveyor_PID_Parameters.xlsx", dept: "Mekatronik & Robotik", author: "Erhan Soylu", authorId: 64, size: "320KB", project: "ADW Toz Boyarmadde Otomasyon", date: "22 Mart 2026", type: "xlsx" },
  // Revizyon geçmişleri
  { id: 16, name: "T9_PLC_Schematic_Rev1.pdf", dept: "Elektronik & Donanım", author: "Ahmet Yılmaz", authorId: 1, size: "1.8MB", project: "T9 PLC v3 Ana Kart", date: "15 Şubat 2026", type: "pdf" },
  { id: 17, name: "T9_PLC_Schematic_Rev2.pdf", dept: "Elektronik & Donanım", author: "Ahmet Yılmaz", authorId: 1, size: "2.0MB", project: "T9 PLC v3 Ana Kart", date: "5 Mart 2026", type: "pdf" },
  { id: 18, name: "T9_PLC_Schematic_Rev3.pdf", dept: "Elektronik & Donanım", author: "Ahmet Yılmaz", authorId: 1, size: "2.2MB", project: "T9 PLC v3 Ana Kart", date: "28 Mart 2026", type: "pdf" },
  { id: 19, name: "T9_FPGA_PinMap_v1.xlsx", dept: "Elektronik & Donanım", author: "Murat Öztürk", authorId: 5, size: "120KB", project: "T9 PLC v3 Ana Kart", date: "20 Şubat 2026", type: "xlsx" },
  { id: 20, name: "T9_FPGA_PinMap_v4.xlsx", dept: "Elektronik & Donanım", author: "Ahmet Yılmaz", authorId: 1, size: "145KB", project: "T9 PLC v3 Ana Kart", date: "20 Nisan 2026", type: "xlsx" },
  { id: 21, name: "PMT140_Calibration_Data_v2.xlsx", dept: "Sensör Geliştirme", author: "Mustafa Bayar", authorId: 54, size: "760KB", project: "PMT140 pH Sensörü v2", date: "25 Nisan 2026", type: "xlsx" },
  { id: 22, name: "T9_EMC_PreTest_Report.pdf", dept: "Test & Kalite", author: "Osman Kılınç", authorId: 74, size: "3.8MB", project: "T9 PLC v3 Ana Kart", date: "27 Nisan 2026", type: "pdf" },
  { id: 23, name: "ADW_Assembly_CAD_v3.step", dept: "Mekatronik & Robotik", author: "Betül Kırıcı", authorId: 61, size: "28MB", project: "ADW Toz Boyarmadde Otomasyon", date: "18 Nisan 2026", type: "step" },
  { id: 24, name: "Teleskop_OPC-UA_Module_Readme.md", dept: "Üst Yazılım", author: "Erdem Bayrak", authorId: 40, size: "95KB", project: "Teleskop v5 Boyahane Yönetim", date: "22 Nisan 2026", type: "md" },
  { id: 25, name: "SAT210_PCB_Layout_Rev2.png", dept: "Sensör Geliştirme", author: "Ümit Korkut", authorId: 58, size: "820KB", project: "SAT210 Spektrofotometrik Sensör", date: "10 Nisan 2026", type: "png" },
  { id: 26, name: "IIoT_AWS_Architecture.png", dept: "Üst Yazılım", author: "Berk Çağlar", authorId: 45, size: "310KB", project: "IIoT Gateway & Bulut", date: "28 Nisan 2026", type: "png" },
  { id: 27, name: "T7PAC_v6_Sprint_Plan.xlsx", dept: "Gömülü Yazılım", author: "Onur Tekin", authorId: 19, size: "240KB", project: "T7PAC Firmware v6", date: "20 Nisan 2026", type: "xlsx" },
  { id: 28, name: "RD96_72h_Test_Report.pdf", dept: "Test & Kalite", author: "Lale Demirtaş", authorId: 71, size: "2.9MB", project: "RD96 Sıvı Dozajlama v2", date: "31 Mart 2026", type: "pdf" },
  { id: 29, name: "PMT140_ATEX_Application.pdf", dept: "Sensör Geliştirme", author: "Fikret Akbulut", authorId: 48, size: "4.1MB", project: "PMT140 pH Sensörü v2", date: "24 Nisan 2026", type: "pdf" },
  { id: 30, name: "ADW_User_Manual_v1.pdf", dept: "Sistem & Proje", author: "Yeliz Çakır", authorId: 81, size: "6.2MB", project: "ADW Toz Boyarmadde Otomasyon", date: "14 Nisan 2026", type: "pdf" }
];

const AUDIT_LOG = [
  { id: 1, user: "Ahmet Yılmaz", action: "Not ekledi", detail: "T9 PLC rev4 şematik review tamamlandı notu", time: "10 dk önce", category: "note" },
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
  { id: 15, user: "Tarık Güneyli", action: "Not ekledi", detail: "LABx Next kickoff planı", time: "2 gün önce", category: "note" },
  // Geçmiş kayıtlar (3 aylık)
  { id: 16, user: "Ahmet Yılmaz", action: "Dosya yükledi", detail: "T9_PLC_Schematic_Rev4.pdf — 28 Nis", time: "28 Nis 2026", category: "file" },
  { id: 17, user: "Elif Kaya", action: "Görev tamamlandı", detail: "EMC filtre katı optimizasyonu tamamlandı — 27 Nis", time: "27 Nis 2026", category: "project" },
  { id: 18, user: "Burak Demir", action: "Risk bildirdi", detail: "FPGA voltage mismatch riski — Bank 34 level shifter gerekiyor — 27 Nis", time: "27 Nis 2026", category: "risk" },
  { id: 19, user: "Osman Kılınç", action: "Dosya yükledi", detail: "T9_EMC_PreTest_Report.pdf — 27 Nis", time: "27 Nis 2026", category: "file" },
  { id: 20, user: "Kaan Yıldırım", action: "Not ekledi", detail: "Teleskop v5 boyahane modülü 3 müşteri tesisinde canlıya alındı — 28 Nis", time: "28 Nis 2026", category: "note" },
  { id: 21, user: "Serkan Ateş", action: "Görev tamamlandı", detail: "ICT200 kalibrasyon algoritması onaylandı — 29 Nis", time: "29 Nis 2026", category: "project" },
  { id: 22, user: "Erdem Bayrak", action: "Dosya yükledi", detail: "Teleskop_OPC-UA_Module_Readme.md — 22 Nis", time: "22 Nis 2026", category: "file" },
  { id: 23, user: "İpek Sarı", action: "Not ekledi", detail: "SAT210 müşteri demo sunumu yapıldı — 30 Nis", time: "30 Nis 2026", category: "note" },
  { id: 24, user: "Mustafa Bayar", action: "Dosya yükledi", detail: "PMT140_Calibration_Data_v2.xlsx — 25 Nis", time: "25 Nis 2026", category: "file" },
  { id: 25, user: "Fikret Akbulut", action: "Dosya yükledi", detail: "PMT140_ATEX_Application.pdf — 24 Nis", time: "24 Nis 2026", category: "file" },
  { id: 26, user: "Yönetici", action: "Proje oluşturdu", detail: "'ADW Toz Boyarmadde' projesi oluşturuldu — 3 Mar", time: "3 Mar 2026", category: "project" },
  { id: 27, user: "Yönetici", action: "Proje oluşturdu", detail: "'IIoT Gateway & Bulut' projesi oluşturuldu — 15 Mar", time: "15 Mar 2026", category: "project" },
  { id: 28, user: "Ahmet Yılmaz", action: "Dosya yükledi", detail: "T9_PLC_Schematic_Rev1.pdf — 15 Şub", time: "15 Şub 2026", category: "file" },
  { id: 29, user: "Ahmet Yılmaz", action: "Dosya yükledi", detail: "T9_PLC_Schematic_Rev2.pdf — 5 Mar", time: "5 Mar 2026", category: "file" },
  { id: 30, user: "Ahmet Yılmaz", action: "Dosya yükledi", detail: "T9_PLC_Schematic_Rev3.pdf — 28 Mar", time: "28 Mar 2026", category: "file" },
  { id: 31, user: "Kerem Yalçın", action: "Dosya yükledi", detail: "T7PAC_v6_Requirements.docx — 5 Nis", time: "5 Nis 2026", category: "file" },
  { id: 32, user: "Kadir Varol", action: "Görev tamamlandı", detail: "ICT200 final kalibrasyon tamamlandı — 1 Nis", time: "1 Nis 2026", category: "project" },
  { id: 33, user: "Caner Özdemir", action: "Dosya yükledi", detail: "Teleskop_DB_Migration_Plan.md — 30 Mar", time: "30 Mar 2026", category: "file" },
  { id: 34, user: "Barış Kaplan", action: "Görev tamamlandı", detail: "T7 panel boot süresi 2.8sn'ye optimize edildi — 28 Mar", time: "28 Mar 2026", category: "project" },
  { id: 35, user: "Ali Rıza Çam", action: "Dosya yükledi", detail: "ADW_Motor_Secim_Raporu.pdf — 12 Nis", time: "12 Nis 2026", category: "file" },
  { id: 36, user: "Tarık Güneyli", action: "Dosya yükledi", detail: "LABx_Next_Fizibilite.pdf — 28 Mar", time: "28 Mar 2026", category: "file" },
  { id: 37, user: "Berk Çağlar", action: "Not ekledi", detail: "IIoT Gateway AWS IoT Core entegrasyonu tamamlandı — 1 Mar", time: "1 Mar 2026", category: "note" },
  { id: 38, user: "Murat Öztürk", action: "Dosya yükledi", detail: "T9_FPGA_PinMap_v1.xlsx — 20 Şub", time: "20 Şub 2026", category: "file" },
  { id: 39, user: "Gizem Aslan", action: "Görev tamamlandı", detail: "Teleskop v5 alarm yönetimi modülü tamamlandı — 9 Nis", time: "9 Nis 2026", category: "project" },
  { id: 40, user: "Volkan Erdoğan", action: "Not ekledi", detail: "T7PAC v6 EtherCAT master stack lisansı alındı — 20 Nis", time: "20 Nis 2026", category: "note" },
  { id: 41, user: "Elif Kaya", action: "Risk bildirdi", detail: "T9 PLC 6 katman PCB maliyeti beklenenin %20 üzerinde — 12 Nis", time: "12 Nis 2026", category: "risk" },
  { id: 42, user: "Mustafa Bayar", action: "Risk bildirdi", detail: "PMT140 cam elektrot tedariki gecikti — 15 Nis", time: "15 Nis 2026", category: "risk" },
  { id: 43, user: "Erhan Soylu", action: "Görev tamamlandı", detail: "ADW konveyör PID optimizasyonu — Kp=1.2 optimal değer — 25 Mar", time: "25 Mar 2026", category: "project" },
  { id: 44, user: "Hakan Korur", action: "Risk bildirdi", detail: "IIoT Gateway IEC 62443 sertifikası 2-3 ay uzayabilir — 17 Nis", time: "17 Nis 2026", category: "risk" },
  { id: 45, user: "Cenk Yücel", action: "Görev tamamlandı", detail: "RD96 kavitasyon problemi çözüldü — 28 Şub", time: "28 Şub 2026", category: "project" },
  { id: 46, user: "Kadir Varol", action: "Dosya yükledi", detail: "ICT200_Final_Calibration.xlsx — 2 Nis", time: "2 Nis 2026", category: "file" },
  { id: 47, user: "Yeliz Çakır", action: "Dosya yükledi", detail: "ADW_User_Manual_v1.pdf — 14 Nis", time: "14 Nis 2026", category: "file" },
  { id: 48, user: "Betül Kırıcı", action: "Dosya yükledi", detail: "ADW_Assembly_CAD_v3.step — 18 Nis", time: "18 Nis 2026", category: "file" },
  { id: 49, user: "Halil Çetin", action: "Dosya yükledi", detail: "SAT210_Optik_Test_Sonuclari.pdf — 16 Nis", time: "16 Nis 2026", category: "file" },
  { id: 50, user: "Berk Çağlar", action: "Dosya yükledi", detail: "IIoT_AWS_Architecture.png — 28 Nis", time: "28 Nis 2026", category: "file" }
];

const NOTIFICATIONS = [
  { id: 1, title: "Risk Bildirimi", text: "T9 PLC FPGA tedarik süresi 8 haftaya çıktı. Proje takvimi etkilenebilir.", type: "risk", time: "10 dk önce", date: "2026-05-01", read: false },
  { id: 2, title: "Bağımlılık Güncellendi", text: "Elif Kaya 'T9 PLC güç katı tasarımı' görevini tamamladı. EMC test planı etkileniyor.", type: "dependency", time: "30 dk önce", date: "2026-04-28", read: false },
  { id: 3, title: "Deadline Yaklaşıyor", text: "T9 PLC 'PCB layout finalizasyonu' görevi 3 gün içinde bitiyor.", type: "deadline", time: "1 saat önce", date: "2026-04-29", read: false },
  { id: 4, title: "Yeni Mesaj", text: "Ahmet Yılmaz size 'T9 PLC — FPGA pin ataması' hakkında mesaj gönderdi.", type: "message", time: "2 saat önce", date: "2026-04-20", read: false },
  { id: 5, title: "Görev Tamamlandı", text: "Serkan Ateş 'ICT200 kalibrasyon algoritması' görevini tamamladı. Doğrulama bekleniyor.", type: "completion", time: "3 saat önce", date: "2026-04-29", read: false },
  { id: 6, title: "Risk Bildirimi", text: "RD96 projesi: pompa test sonuçları beklentinin altında. Servo timing ayarı gerekiyor.", type: "risk", time: "4 saat önce", date: "2026-04-30", read: false },
  { id: 7, title: "Proje Güncellemesi", text: "Teleskop v5 — migration riski yüksek olarak işaretlendi.", type: "warning", time: "5 saat önce", date: "2026-04-23", read: false },
  { id: 8, title: "Yeni Not", text: "Ahmet Yılmaz T9 PLC projesine kritik not ekledi.", type: "info", time: "6 saat önce", date: "2026-04-27", read: true },
  { id: 9, title: "Deadline Uyarısı", text: "ADW Toz Boyarmadde — Haziran teslimatı için 4 hafta kaldı.", type: "deadline", time: "1 gün önce", date: "2026-04-28", read: true },
  { id: 10, title: "Dosya Yüklendi", text: "Teleskop_v5_API_Doc.pdf — Kaan Yıldırım yükledi.", type: "file", time: "1 gün önce", date: "2026-04-20", read: true },
  { id: 11, title: "Risk Bildirimi", text: "SAT210 optik filtre tedarikçisi fiyat %30 artırdı. Bütçe revizyon gerekebilir.", type: "risk", time: "2 gün önce", date: "2026-04-25", read: true },
  { id: 12, title: "Yeni Mesaj", text: "Burak Demir size FPGA voltage mismatch riski hakkında mesaj gönderdi.", type: "message", time: "2 gün önce", date: "2026-04-20", read: true },
  { id: 13, title: "Görev Atandı", text: "Size yeni görev atandı: 'T9 PLC EMC test hazırlığı' — Kemal Turan tarafından.", type: "info", time: "3 gün önce", date: "2026-04-27", read: true },
  { id: 14, title: "Bağımlılık Uyarısı", text: "ADW Toz Boyarmadde firmware modülü T7PAC projesine bağımlı. T7PAC %70 tamamlandı.", type: "dependency", time: "3 gün önce", date: "2026-04-28", read: true },
  { id: 15, title: "Dosya Güncellendi", text: "T9_FPGA_PinMap_v4.xlsx — Ahmet Yılmaz tarafından güncellendi.", type: "file", time: "4 gün önce", date: "2026-04-20", read: true }
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

// Gantt months reference (index 0 = Ocak 2026)
const GANTT_MONTHS = ["Oca", "Şub", "Mar", "Nis", "May", "Haz", "Tem", "Ağu", "Eyl", "Eki", "Kas", "Ara"];
const GANTT_START_OFFSET = 1; // Show from Şubat (index 1)
const GANTT_VISIBLE_MONTHS = 8; // Show 8 months

// AI Sohbet Geçmişi
const CHAT_HISTORY = [
  {
    id: 1,
    title: 'T9 PLC risk analizi',
    date: '2026-04-15',
    user: 'Yönetici',
    messages: [
      { role: 'user', text: 'T9 PLC projesindeki riskler neler?', time: '09:15' },
      { role: 'ai', text: 'T9 PLC v3 projesinde 3 aktif risk bulunuyor:\n1. 🔴 FPGA tedarik süresi 8 haftaya uzadı (Xilinx Artix-7)\n2. 🟡 EMC test sonuçları sınırda — RE101 testi tekrarlanacak\n3. 🟡 PCB 12 katman — üretici kapasitesi dolu, alternatif aranıyor', time: '09:15' },
      { role: 'user', text: 'FPGA alternatifi var mı?', time: '09:16' },
      { role: 'ai', text: 'Lattice ECP5 alternatif olarak değerlendiriliyor. Ahmet Yılmaz geçen hafta pin-uyumluluk analizi yaptı. Sonuç: %85 uyumlu, 12 pin yeniden atanmalı. Tahmini etki: 2 hafta ek süre.', time: '09:16' }
    ]
  },
  {
    id: 2,
    title: 'Teleskop v5 ilerleme raporu',
    date: '2026-04-22',
    user: 'Yönetici',
    messages: [
      { role: 'user', text: 'Teleskop projesinin son durumu ne?', time: '14:30' },
      { role: 'ai', text: 'Teleskop v5 Boyahane Yönetim Sistemi — Durum Raporu:\n\n📊 İlerleme: %68\n👥 Aktif ekip: 6 kişi (3 Üst Yazılım, 2 Sistem, 1 Test)\n\n✅ Tamamlanan:\n- SCADA altyapı kurulumu\n- OPC-UA haberleşme modülü\n- Reçete yönetimi v1\n\n🔄 Devam Eden:\n- Boyahane PLC entegrasyonu\n- Gerçek zamanlı izleme dashboardu\n- Alarm yönetimi\n\n📅 Planlanan:\n- Sahada commissioning (Haziran)\n- Kullanıcı eğitimleri', time: '14:30' }
    ]
  },
  {
    id: 3,
    title: 'Personel iş yükü analizi',
    date: '2026-04-25',
    user: 'Yönetici',
    messages: [
      { role: 'user', text: 'Elektronik departmanında en yoğun çalışan kim?', time: '10:45' },
      { role: 'ai', text: 'Elektronik & Donanım departmanı iş yükü analizi:\n\n🔴 En Yoğun:\n1. Ahmet Yılmaz — 4 aktif görev, 2 projede (T9 PLC, T7 Panel)\n2. Elif Kaya — 3 aktif görev, T9 PLC + termal analiz\n\n🟡 Orta Yoğunluk:\n3. Burak Demir — 2 görev, T9 PLC\n4. Selin Arslan — 2 görev, T7 Panel\n\n🟢 Uygun:\n5. Fatih Şahin — 1 görev tamamlandı, yeni görev atanabilir\n\nÖneri: Fatih Şahin\'e T9 PLC sinyal bütünlüğü görevini atayabilirsiniz.', time: '10:45' }
    ]
  },
  {
    id: 4,
    title: 'ADW proje bağımlılıkları',
    date: '2026-04-28',
    user: 'Yönetici',
    messages: [
      { role: 'user', text: 'ADW projesinin bağımlılıkları ne durumda?', time: '16:20' },
      { role: 'ai', text: 'ADW Toz Boyarmadde Otomasyon — Bağımlılık Durumu:\n\n⚠️ Kritik Bağımlılık:\n- T7PAC Firmware v6 → ADW kontrol yazılımı T7PAC üzerinde çalışacak. Firmware henüz %70 — ADW başlangıcı etkilenebilir.\n\n✅ Çözülen:\n- Servo motor tedariki tamamlandı (Yaskawa Sigma-7)\n- Mekanik tasarım onaylandı\n\n📋 Bekleyen:\n- Tartım hücresi kalibrasyonu (Sensör dept. ile koordineli)\n- HMI panel montajı (T7 Panel projesine bağlı)', time: '16:20' }
    ]
  },
  {
    id: 5,
    title: 'Haftalık özet — 28 Nisan',
    date: '2026-04-28',
    user: 'Yönetici',
    messages: [
      { role: 'user', text: 'Bu haftanın özetini ver', time: '17:00' },
      { role: 'ai', text: '📋 Haftalık Özet — 22-28 Nisan 2026\n\n✅ Tamamlanan Görevler: 8\n🔄 Devam Eden: 24\n📅 Yeni Planlanan: 5\n\n🎯 Öne Çıkanlar:\n- T9 PLC rev4 şematik review tamamlandı ✅\n- ICT200 kalibrasyon algoritması onaylandı ✅\n- Teleskop OPC-UA modülü teste hazır ✅\n\n⚠️ Dikkat Gerektiren:\n- FPGA tedarik hâlâ belirsiz (Ahmet takip ediyor)\n- RD96 pompa testi 2 gün gecikmeli\n- PPD baskı kalitesi sorunu devam ediyor\n\n📊 Departman Performansı:\n- Elektronik: %92 (en yüksek)\n- Gömülü Yazılım: %88\n- Sensör: %85\n- Mekatronik: %78 (RD96 gecikmesi)', time: '17:00' }
    ]
  },
  {
    id: 6,
    title: 'Personel görev dağılımı',
    date: '2026-04-10',
    user: 'Yönetici',
    messages: [
      { role: 'user', text: 'Tüm projelerde görev dağılımını göster', time: '11:00' },
      { role: 'ai', text: 'Proje Görev Dağılımı Özeti:\n\n🔵 T9 PLC v3 (en büyük proje):\n- 18 aktif personel\n- 52 görev (14 tamamlandı, 24 devam, 14 planlanan)\n- Kritik yol: PCB layout → EMC test → CE belgelendirme\n\n🔵 Teleskop v5:\n- 6 aktif personel\n- 18 görev (7 tamamlandı, 8 devam, 3 planlanan)\n\n🔵 ADW Otomasyon:\n- 6 aktif personel\n- 20 görev (8 tamamlandı, 9 devam, 3 planlanan)\n\n📊 Toplam: 85 personel, 220+ görev, 12 proje', time: '11:00' }
    ]
  },
  {
    id: 7,
    title: 'Bütçe analizi — Nisan',
    date: '2026-04-05',
    user: 'Yönetici',
    messages: [
      { role: 'user', text: 'Projelerin bütçe durumu nasıl?', time: '09:30' },
      { role: 'ai', text: 'Proje Bütçe Durumu — Nisan 2026:\n\n🟢 Bütçe Uyumlu:\n- ICT200 İletkenlik (tamamlandı): 220.000₺ / 220.000₺ ✅\n- RD96 Sıvı Dozajlama (tamamlandı): 310.000₺ / 310.000₺ ✅\n\n🟡 Dikkat:\n- T9 PLC: 520.000₺ / 850.000₺ (%61) — PCB maliyet aşımı riski var\n- PMT140: 210.000₺ / 290.000₺ (%72) — ATEX sertifikasyon maliyeti eklenecek\n\n🔴 Revizyon Gerekiyor:\n- SAT210: Thorlabs fiyat artışı nedeniyle 340.000₺ bütçe yetersiz kalabilir (+50.000₺ tahmin)\n\nÖneri: SAT210 için bütçe revizyon talebini bu ay sonuna kadar hazırlayın.', time: '09:30' },
      { role: 'user', text: 'T9 PCB maliyet aşımının detayı?', time: '09:32' },
      { role: 'ai', text: 'T9 PLC PCB Maliyet Detayı:\n\nMevcut Durum: JLCPCB fiyat artışı sonrası 6 katman PCB rev4 maliyeti beklenenin %20 üzerinde.\n\n📊 Hesap:\n- Orijinal tahmin: 45.000₺ (10 adet)\n- Güncel fiyat: 54.000₺\n- Fark: +9.000₺\n\nÇözüm Seçenekleri:\n1. 4 katmana indirim — PCB tasarım 2 hafta ek süre (Elif Kaya inceliyor)\n2. Farklı üretici (PCBWay) — %8 daha ucuz, kalite farkı test edilmeli\n3. Bütçe revizyonu — en hızlı ama mali onay gerekiyor', time: '09:33' }
    ]
  },
  {
    id: 8,
    title: 'IIoT güvenlik durumu',
    date: '2026-03-20',
    user: 'Yönetici',
    messages: [
      { role: 'user', text: 'IIoT Gateway güvenlik durumu?', time: '14:00' },
      { role: 'ai', text: 'IIoT Gateway & Bulut — Güvenlik Durumu:\n\n✅ Tamamlanan:\n- X.509 sertifika tabanlı kimlik doğrulama aktif\n- TLS 1.3 iletişim şifreleme\n- AWS IoT Core entegrasyonu\n\n🔄 Devam Eden:\n- IEC 62443 sertifikasyonu (tahmini 3 ay)\n- Penetrasyon testi hazırlığı\n- RBAC yetki yönetimi\n\n⚠️ Dikkat:\n- Sertifikasyon süreci beklenenden uzun — Hakan Korur danışmanlık firmasıyla görüşüyor\n- 3. parti kütüphane güvenlik güncellemeleri bekliyor (6 CVE)\n\n🔐 Tavsiye: CVE güncellemelerini öncelikle yapın.', time: '14:00' }
    ]
  }
];

// Personel Arası Mesajlaşma
const MESSAGES = [
  {
    id: 1,
    from: 1, // Ahmet Yılmaz
    to: 19,  // Onur Tekin (Gömülü Yazılım)
    subject: 'T9 PLC — FPGA pin ataması',
    text: 'Onur, FPGA pin atamasını güncelledim. EtherCAT portları artık Bank 34 üzerinde. Firmware tarafında SPI konfigürasyonunu günceller misin? Ekte güncel pin listesi.',
    date: '2026-04-20',
    time: '11:30',
    read: true,
    attachment: 'T9_FPGA_PinMap_v4.xlsx',
    relatedProject: 'T9 PLC v3 Ana Kart',
    relatedProjectId: 1
  },
  {
    id: 2,
    from: 19, // Onur Tekin
    to: 1,   // Ahmet Yılmaz
    subject: 'RE: T9 PLC — FPGA pin ataması',
    text: "Ahmet, SPI konfigürasyonunu güncelledim. Ama Bank 34'te voltage mismatch riski var — 3.3V ile 1.8V karışıyor. Level shifter gerekebilir. Yarın toplantıda konuşalım.",
    date: '2026-04-20',
    time: '14:15',
    read: true,
    relatedProject: 'T9 PLC v3 Ana Kart',
    relatedProjectId: 1
  },
  {
    id: 3,
    from: 34, // Kaan Yıldırım (Üst Yazılım)
    to: 36,  // Ozan Türk (SCADA)
    subject: 'Teleskop — OPC-UA server hazır',
    text: "OPC-UA server modülü hazır ve test ortamında çalışıyor. SCADA tarafında endpoint konfigürasyonunu yapabilirsin. Port: 4840, SecurityPolicy: Basic256Sha256. Dökümantasyonu wiki'ye ekledim.",
    date: '2026-04-22',
    time: '09:45',
    read: true,
    relatedProject: 'Teleskop v5 Boyahane Yönetim',
    relatedProjectId: 4
  },
  {
    id: 4,
    from: 54, // Mustafa Bayar (Sensör)
    to: 70,  // Kemal Turan (Test)
    subject: 'PMT140 — kalibrasyon verisi',
    text: 'pH 4.0, 7.0, 10.0 tampon çözeltileriyle kalibrasyon tamamlandı. Lineerlik: R²=0.9998. Test raporunu hazırlayabilirsin. Ham veri ekte.',
    date: '2026-04-25',
    time: '16:00',
    read: false,
    attachment: 'PMT140_Calibration_Data_v2.xlsx',
    relatedProject: 'PMT140 pH Sensörü v2',
    relatedProjectId: 8
  },
  {
    id: 5,
    from: 1,  // Ahmet Yılmaz
    to: 74,  // Osman Kılınç (EMC Test)
    subject: 'T9 PLC — EMC pre-test sonuçları',
    text: 'EMC ön test sonuçları geldi. RE101 30-100MHz bandında 3dB sınır aşımı var. Ferrit bead eklenmesi gerekiyor. Test raporu ekte. Resmi test öncesi düzeltme yapacağız.',
    date: '2026-04-27',
    time: '10:30',
    read: false,
    attachment: 'T9_EMC_PreTest_Report.pdf',
    relatedProject: 'T9 PLC v3 Ana Kart',
    relatedProjectId: 1
  },
  {
    id: 6,
    from: 60, // Ali Rıza Çam (Mekatronik)
    to: 24,  // Gamze Özkan (Firmware)
    subject: 'ADW — servo kontrol parametreleri',
    text: 'ADW servo kalibrasyon tamamlandı. ±0.05g hassasiyete ulaştık. Yaskawa Sigma-7 parametrelerini güncelledim: Pn100=2450, Pn101=280. Firmware tarafında güncelleme gerekiyor mu?',
    date: '2026-04-15',
    time: '14:20',
    read: true,
    relatedProject: 'ADW Toz Boyarmadde Otomasyon',
    relatedProjectId: 6
  },
  {
    id: 7,
    from: 24, // Gamze Özkan
    to: 60,  // Ali Rıza Çam
    subject: 'RE: ADW — servo kontrol parametreleri',
    text: 'Ali Rıza bey, parametreleri firmware v2.3.1\'e yükledim. Servo PID döngüsü yeni değerlerle test edildi — yanıt zamanı %15 iyileşti. Yarın tam yük testi yapabiliriz.',
    date: '2026-04-15',
    time: '17:05',
    read: true,
    relatedProject: 'ADW Toz Boyarmadde Otomasyon',
    relatedProjectId: 6
  },
  {
    id: 8,
    from: 48, // Fikret Akbulut (Sensör)
    to: 78,  // Tarık Güneyli (PM)
    subject: 'PMT140 ATEX başvurusu — TÜV randevusu',
    text: 'TÜV randevusu alındı: 15 Haziran 2026. Ex ia IIC T4 Ga sınıfı için gerekli belgeler tamamlandı. Başvuru dosyası hazır, onayınızı bekliyorum. İnceleme süresi 6-8 hafta.',
    date: '2026-04-24',
    time: '11:15',
    read: true,
    attachment: 'PMT140_ATEX_Application.pdf',
    relatedProject: 'PMT140 pH Sensörü v2',
    relatedProjectId: 8
  },
  {
    id: 9,
    from: 45, // Berk Çağlar (Cloud)
    to: 42,  // Hakan Korur (Güvenlik)
    subject: 'IIoT — AWS IAM rolleri',
    text: 'IIoT Gateway için AWS IAM rolleri oluşturuldu. Principle of least privilege uygulandı. 6 CVE güvenlik güncellemesi de tamamlandı. Penetrasyon testi hazırlığını başlatabiliriz.',
    date: '2026-04-26',
    time: '09:30',
    read: true,
    relatedProject: 'IIoT Gateway & Bulut',
    relatedProjectId: 11
  },
  {
    id: 10,
    from: 42, // Hakan Korur
    to: 45,  // Berk Çağlar
    subject: 'RE: IIoT — pentest planı',
    text: 'Harika! Pentest firması ile 28 Mayıs randevusu alındı. Scope: External network, API endpoints, MQTT broker. Hazırlık listesini ekliyorum.',
    date: '2026-04-26',
    time: '13:45',
    read: true,
    relatedProject: 'IIoT Gateway & Bulut',
    relatedProjectId: 11
  },
  {
    id: 11,
    from: 50, // Halil Çetin (Optik)
    to: 49,  // Gülşen Erdal (Sensör)
    subject: 'SAT210 — filtre alternatifi bulundu',
    text: 'Thorlabs yerine Semrock FF01-450/40 filtresini test ettim. Geçirgenlik %95 (Thorlabs %93). Fiyat %22 daha düşük. Mevcut montaj çerçevesiyle uyumlu. Onay için Fikret Bey\'e gönderelim mi?',
    date: '2026-04-28',
    time: '15:30',
    read: false,
    relatedProject: 'SAT210 Spektrofotometrik Sensör',
    relatedProjectId: 10
  },
  {
    id: 12,
    from: 21, // Barış Kaplan (Firmware)
    to: 4,   // Selin Arslan (Elektronik)
    subject: 'T7 Panel — kapasitif ekran sürücüsü güncelleme',
    text: 'Linux kernel 5.15 için ekran sürücüsü tamamlandı. Çoklu dokunma (10 parmak) çalışıyor. Ama yeni AUO panel ile test etmem lazım — bende sadece Innolux var. Panel temin edilince haber ver.',
    date: '2026-04-23',
    time: '10:00',
    read: true,
    relatedProject: 'T7 Operatör Panel 10"',
    relatedProjectId: 2
  },
  {
    id: 13,
    from: 64, // Erhan Soylu (Mekatronik)
    to: 65,  // Ferhat Güngör (Mekatronik)
    subject: 'ADW — Beckhoff EL7047 alternatifi',
    text: 'Beckhoff EL7047 stokta yok. Alternatif: Kollmorgen AKD-P00306 servo sürücü. Spesler uyumlu, fiyat %5 daha yüksek ama 1 hafta içinde teslim. Yöneticiye bildirmeden önce görüşün?',
    date: '2026-04-21',
    time: '16:45',
    read: true,
    relatedProject: 'ADW Toz Boyarmadde Otomasyon',
    relatedProjectId: 6
  },
  {
    id: 14,
    from: 38, // Caner Özdemir (DB)
    to: 35,  // Merve Aksoy (Full Stack)
    subject: 'Teleskop — PostgreSQL migration tamamlandı',
    text: '5 milyon kayıt başarıyla PostgreSQL\'e migrate edildi. NULL constraint ihlalleri düzeltildi, rollback planı hazır. Mobil app için yeni API endpoint\'lerini ekledim. Swagger\'da güncel.',
    date: '2026-04-18',
    time: '11:30',
    read: true,
    relatedProject: 'Teleskop v5 Boyahane Yönetim',
    relatedProjectId: 4
  },
  {
    id: 15,
    from: 78, // Tarık Güneyli (PM)
    to: 1,   // Ahmet Yılmaz
    subject: 'T9 PLC — bütçe revizyon talebi',
    text: 'Ahmet bey, PCB ve FPGA tedarik sorunları nedeniyle T9 bütçe revizyonu gerekiyor. Mevcut: 850K₺, Revize tahmin: 920K₺. Yönetim toplantısı için gerekçe dokümanını hazırlar mısınız? 30 Nisan son gün.',
    date: '2026-04-22',
    time: '14:00',
    read: true,
    relatedProject: 'T9 PLC v3 Ana Kart',
    relatedProjectId: 1
  }
];

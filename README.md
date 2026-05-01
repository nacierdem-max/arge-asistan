# 🧠 ELİAR Akıllı Ar-Ge Asistanı

**Eliar Elektronik** — Endüstriyel Otomasyon Çözümleri  
Yapay Zeka Destekli Ar-Ge İş Takip Sistemi Demo

---

## 🚀 Demo Deploy (Ücretsiz)

### GitHub Pages (Önerilen)

1. Bu repo'yu fork'la veya kendi repo'na yükle
2. `Settings` → `Pages` → `Source: Deploy from a branch`
3. `Branch: main` / `/(root)` seç → **Save**
4. 1-2 dakika bekle, adres hazır:

```
https://kullaniciadi.github.io/arge-asistan/
```

### Cloudflare Pages (Alternatif)

1. [pages.cloudflare.com](https://pages.cloudflare.com) → "Create a project"
2. GitHub hesabını bağla → Bu repo'yu seç
3. Build settings: **hepsini boş bırak** (statik site)
4. Deploy → Otomatik `https://arge-asistan.pages.dev` adresi

### Netlify (Alternatif)

1. [netlify.com](https://netlify.com) → "Add new site" → "Deploy manually"
2. Repo klasörünü sürükle-bırak
3. Anında yayında

### Yerel Test

Sadece `index.html` dosyasını tarayıcıda açın. Herhangi bir kurulum gerekmez.

---

## 📁 Dosya Yapısı

```
/
├── index.html          → Giriş ekranı (Personel / Yönetici seçimi)
├── personnel.html      → Personel paneli
├── admin.html          → Yönetici paneli (Ana panel)
├── css/
│   └── style.css       → Tüm özel stiller
├── js/
│   ├── data.js         → Tüm mock veriler (85 personel, 12 proje, 64+ not...)
│   ├── app.js          → Navigasyon, auth, yardımcı fonksiyonlar
│   ├── gantt.js        → Gantt chart çizimi ve filtreleme
│   ├── chat.js         → AI sohbet simülasyonu
│   └── speech.js       → Web Speech API (Türkçe ses girişi)
└── README.md
```

---

## 🏢 Hakkında

**Eliar Elektronik** Ar-Ge merkezine özel demo uygulama.

### Kapsam:
- 85 Ar-Ge mühendisi, 7 departman
- 12 aktif proje (T9 PLC, T7 Panel, Teleskop v5, Sensörler, IIoT...)
- 64+ not girişi (proje, plan, bilgi bankası, risk)
- Gantt chart (filtreli, interaktif)
- AI sohbet simülasyonu
- Maliyet ve tedarik takibi
- Performans grafikleri (Chart.js)

### Kullanılan Teknolojiler:
- **Tailwind CSS** (CDN)
- **Chart.js** (CDN)
- **Web Speech API** (Türkçe ses girişi — tr-TR)
- **Vanilla JavaScript** (framework yok)
- **Backend yok** — tamamen statik

### Önemli Not:
Tüm veriler **mock/demo** amaçlıdır. Gerçek kişi, proje veya finansal bilgi içermez.

---

© 2026 Eliar Elektronik Demo — [eliar.com/tr](https://eliar.com/tr)

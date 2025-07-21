# HABS Project Studio - Portfolio Website

Modern ve responsive bir Vue.js uygulaması ile geliştirilmiş **HABS Project Studio** ajansının kurumsal web sitesi.

## 🌟 Özellikler

- **Modern Vue.js 3 Composition API** kullanımı
- **Responsive tasarım** - Mobil ve desktop uyumlu
- **Smooth scroll** animasyonları
- **Tailwind CSS** ile modern UI tasarım
- **Component tabanlı** mimari
- **Vue Router** ile sayfa yönetimi

## 🛠 Teknolojiler

- **Vue.js 3.4.15** - Progressive JavaScript framework
- **Vue Router 4.2.5** - Client-side routing
- **Tailwind CSS 3.4.1** - Utility-first CSS framework
- **Vite 5.1.0** - Next generation build tool
- **Vitest** - Unit testing framework

## 📋 Gereksinimler

- Node.js (v16 veya üzeri)
- npm veya yarn package manager

## 🚀 Kurulum

1. **Depoyu klonlayın:**
```bash
git clone [repository-url]
cd portfolio-new
```

2. **Bağımlılıkları yükleyin:**
```bash
npm install
```

3. **Geliştirme sunucusunu başlatın:**
```bash
npm run dev
```

4. **Tarayıcınızda açın:**
```
http://localhost:5173
```

## 📝 Available Scripts

Projede kullanabileceğiniz npm scriptleri:

- `npm run dev` - Geliştirme sunucusunu başlatır
- `npm run build` - Production için build alır
- `npm run preview` - Build'i önizler
- `npm run test:unit` - Unit testleri çalıştırır

## 🏗 Proje Yapısı

```
src/
├── components/           # Vue komponenları
│   └── icons/           # İkon komponenları
├── views/               # Sayfa komponenları
│   └── Home.vue        # Ana sayfa
├── router/             # Vue Router konfigürasyonu
│   └── index.js
├── assets/             # Statik dosyalar (resimler, CSS)
├── App.vue            # Ana uygulama komponenti
└── main.js           # Uygulama giriş noktası
```

## 🎨 Tasarım Özellikleri

- **Renk Paleti:**
  - Ana renk: `#EC4E34` (Turuncu)
  - Arka plan: `#262626` (Koyu gri)
  - Açık arka plan: `#F0F0F0` / `#F7F7F7`

- **Typography:**
  - Ana font: Montserrat
  - Başlık fontu: Anton
  - Sistem fontları ile fallback

- **Responsive Breakpoints:**
  - Mobil: < 768px
  - Desktop: ≥ 768px

## 📱 Sayfalar & Bölümler

1. **Ana Sayfa** - Hero section ve tanıtım
2. **Hakkımızda** - Şirket tanıtımı
3. **Ekibimiz** - Kurucu ortaklar
4. **Hedefimiz** - Vizyon ve misyon
5. **Ne Yapıyoruz** - Hizmetler
6. **Yaklaşımımız** - İş felsefesi
7. **Projeler** - Portfolio örnekleri
8. **İletişim** - İletişim bilgileri

## ⚡ Performance Optimizations

- Vite ile hızlı build süreçleri
- Lazy loading ile optimize edilmiş görsel yükleme
- Modern CSS Grid ve Flexbox kullanımı
- Mobile-first responsive design

## 🧪 Test Etme

Unit testler için Vitest kullanılmaktadır:

```bash
npm run test:unit
```

## 📦 Production Build

Production için optimize edilmiş build almak için:

```bash
npm run build
```

Build dosyaları `dist/` klasörüne oluşturulacaktır.

## 🤝 Geliştirme

- **Design:** [Sarp Dökmeci](https://www.linkedin.com/in/sarpdokmeci/)
- **Development:** [Burak Toprakcam](https://www.linkedin.com/in/buraktoprakcam/)

## 📞 İletişim

**HABS Project Studio**
- Email: project@habsproject.com
- Website: [habsproject.com](https://habsproject.com)

---

*Bu proje Vue.js 3 ve modern web teknolojileri kullanılarak geliştirilmiştir.*

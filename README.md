# 💒 Website Undangan Nikah Marina & Imam Faizal

Website undangan pernikahan yang elegan dengan efek parallax yang memukau.

## ✨ Fitur Utama

✅ **Parallax Scrolling Effect** - Animasi scroll yang smooth dan menarik  
✅ **Responsive Design** - Sempurna di desktop, tablet, dan mobile  
✅ **Tema Minimalis Blue Sky** - Warna cerah dan elegan  
✅ **Google Maps Integration** - Lokasi acara terintegrasi  
✅ **RSVP Form** - Konfirmasi kehadiran tamu  
✅ **Gallery Section** - Tempat untuk foto-foto  
✅ **Smooth Animations** - Transisi halus di setiap section  
✅ **Print Function** - Fitur cetak undangan  

## 📋 Struktur Project

```
marina-faizal-wedding/
├── index.html          # File utama
├── css/
│   └── style.css       # Stylesheet
├── js/
│   └── script.js       # JavaScript
├── images/             # Folder untuk gambar
│   └── README.md       # Panduan menambah gambar
└── README.md           # File ini
```

## 🚀 Cara Menggunakan

### 1. Clone Repository
```bash
git clone https://github.com/kiritozoldyck/marina-faizal-wedding.git
cd marina-faizal-wedding
```

### 2. Buka di Browser
Cukup buka file `index.html` di browser Anda. Tidak perlu instalasi atau setup khusus!

### 3. Dengan Live Server (VS Code)
1. Install extension "Live Server" oleh Ritwick Dey
2. Klik kanan pada `index.html`
3. Pilih "Open with Live Server"

## 📸 Menambah Gambar

1. Siapkan foto Anda (ukuran rekomendasi: 800x800px untuk gallery)
2. Simpan file gambar di folder `images/`
3. Edit `index.html` dan ganti placeholder dengan path gambar Anda

### Gambar Gratis:
- Unsplash.com - Foto berkualitas tinggi gratis
- Pexels.com - Koleksi foto premium
- Pixabay.com - Ribuan gambar bebas royalti

## ✏️ Kustomisasi

### Mengubah Warna
Edit file `css/style.css`, cari `:root`:
```css
:root {
    --primary-color: #87CEEB;      /* Warna biru utama */
    --secondary-color: #E0F6FF;    /* Warna biru muda */
    --accent-color: #FF69B4;       /* Warna pink aksen */
    /* ... warna lainnya */
}
```

### Mengubah Teks
Edit `index.html` langsung. Cari dan ganti:
- Nama pengantin
- Tanggal dan waktu
- Lokasi acara
- Pesan ucapan

### Mengubah Font
Edit `css/style.css`:
```css
body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    /* Ganti dengan font favorit Anda */
}
```

## 📧 Form RSVP

Form RSVP saat ini adalah form lokal. Untuk mengirimkan data ke email:

### Opsi 1: Menggunakan FormSubmit.co (Gratis)
1. Buka file `index.html`
2. Ubah line form menjadi:
```html
<form class="rsvp-form" action="https://formsubmit.co/YOUR_EMAIL@example.com" method="POST">
```
3. Ganti `YOUR_EMAIL@example.com` dengan email Anda

### Opsi 2: Menggunakan Netlify Forms
1. Deploy ke Netlify
2. Tambahkan `netlify` attribute ke form

## 🌐 Deploy

### Opsi 1: GitHub Pages (Gratis)
1. Push ke GitHub
2. Buka Settings → Pages
3. Pilih branch `main`
4. Website otomatis live!

### Opsi 2: Vercel (Gratis, Recommended)
1. Buka Vercel.com
2. Klik "Import Project"
3. Pilih repository GitHub Anda
4. Deploy!
5. Connect custom domain Anda

### Opsi 3: Netlify (Gratis)
1. Buka Netlify.com
2. Klik "Add new site"
3. Pilih repository GitHub
4. Deploy!

### Opsi 4: Upload ke Hosting Sendiri
1. Download folder project
2. Upload via FTP ke hosting Anda
3. Set folder `public_html`

## 📱 Responsive Breakpoints

- **Desktop**: 1200px+
- **Tablet**: 768px - 1199px
- **Mobile**: 480px - 767px
- **Small Mobile**: < 480px

## 🎨 Browser Support

✅ Chrome (90+)  
✅ Firefox (88+)  
✅ Safari (14+)  
✅ Edge (90+)  
✅ Mobile browsers (iOS Safari, Chrome Android)  

## 📝 Data Acara

- **Nama Pengantin Wanita**: Marina Sapta Yuliana
- **Nama Pengantin Pria**: Imam Faizal
- **Tanggal**: 6 Juni 2026
- **Waktu**: 16:00 WIB
- **Lokasi**: Masjid Nur Setiasih
- **Maps**: https://maps.app.goo.gl/J3f4PG2isX3kPYLp9

## 🛠️ Tips & Tricks

1. **Optimize Gambar**: Gunakan TinyPNG.com untuk compress gambar
2. **SEO**: Edit title di `<title>` di index.html
3. **Favicon**: Ganti favicon di folder root
4. **Performance**: Gunakan CDN untuk font eksternal
5. **Analytics**: Tambahkan Google Analytics code

## ⚙️ Troubleshooting

### Parallax tidak bekerja?
- Cek browser support (harus ES6 compatible)
- Buka browser console (F12) untuk melihat error

### Maps tidak muncul?
- Periksa koneksi internet
- Verifikasi koordinat lokasi

### Form tidak kirim?
- Gunakan FormSubmit.co atau Netlify forms
- Cek console untuk error

## 📄 Lisensi

Free to use untuk kebutuhan pribadi.

## 👨‍💻 Dibuat dengan ❤️

Website ini dibuat khusus untuk pernikahan Marina & Imam Faizal.

## 📞 Support

Jika ada pertanyaan atau butuh bantuan, hubungi kami melalui:
- GitHub Issues
- Email
- WhatsApp

---

**Selamat menikah, Marina & Imam! 💕**

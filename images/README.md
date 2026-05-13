# 📸 Folder Gambar

Simpan semua gambar Anda di folder ini.

## Rekomendasi Gambar

### Hero Background
- Foto couple atau landscape indah
- Ukuran minimal: 1920x1080px
- Format: JPG atau PNG
- Nama file: `hero-bg.jpg`

### Gallery Photos
- Foto pernikahan atau couple
- Ukuran: 800x800px (square)
- Format: JPG atau PNG
- Nama file: `gallery-1.jpg`, `gallery-2.jpg`, dst

## Website Gambar Gratis

- **Unsplash** - unsplash.com
  - 1000+ foto wedding berkualitas tinggi
  - Cari: "wedding", "couple", "blue sky", "flowers"

- **Pexels** - pexels.com
  - Koleksi foto premium gratis
  - HD quality

- **Pixabay** - pixabay.com
  - Ribuan gambar bebas royalti
  - Commercial use allowed

- **Unsplash Collections**
  - Weddings: unsplash.com/collections
  - Curated by photographers

## Tips Memilih Gambar

1. **Resolusi Tinggi** - Minimal 800x800px
2. **Format PNG/JPG** - Hindari WEBP jika tidak support
3. **Ukuran File** - Compress untuk loading lebih cepat
4. **Tema Warna** - Match dengan warna blue sky minimalis
5. **License** - Pastikan bebas royalti (CC0)

## Optimasi Gambar

### Compress Online (Gratis)
- **TinyPNG.com** - Compress JPG/PNG
- **ImageOptim.com** - Batch processing
- **Optimizilla.com** - Visual quality control

### Resize Gambar
- **Canva.com** - Resize & edit
- **Pixlr.com** - Free online editor
- **Photopea.com** - Photoshop alternative

## Struktur Folder

```
images/
├── hero-bg.jpg         # Hero section background
├── gallery-1.jpg       # Gallery photo 1
├── gallery-2.jpg       # Gallery photo 2
├── gallery-3.jpg       # Gallery photo 3
├── gallery-4.jpg       # Gallery photo 4
├── gallery-5.jpg       # Gallery photo 5
├── gallery-6.jpg       # Gallery photo 6
└── README.md           # File ini
```

## Cara Menambah Gambar

### Metode 1: Drag & Drop (VS Code)
1. Buka folder `images` di VS Code
2. Drag gambar dari explorer ke folder
3. Gambar otomatis tersimpan

### Metode 2: Copy Paste
1. Simpan gambar di komputer
2. Copy-paste ke folder `images`

### Metode 3: Git Push
```bash
git add images/
git commit -m "Add wedding photos"
git push
```

## Edit HTML untuk Menambah Gambar

Setelah gambar tersimpan di folder, edit `index.html`:

### Mengubah Hero Background
```html
<!-- Cari section hero, edit inline style -->
<div class="parallax-layer" style="background: url('images/hero-bg.jpg');">
```

### Mengubah Gallery Photos
```html
<!-- Cari gallery section, ganti placeholder -->
<div class="gallery-item">
    <img src="images/gallery-1.jpg" alt="Foto 1">
    <p>Foto 1</p>
</div>
```

## Ukuran File Optimal

| Tipe | Ukuran | Format | Rekomendasi |
|------|--------|--------|-------------|
| Hero | 1920x1080 | JPG | 200-300KB |
| Gallery | 800x800 | JPG | 50-100KB |
| Thumbnail | 400x400 | JPG | 20-50KB |

## License

Pastikan gambar yang Anda gunakan memiliki lisensi yang tepat:
- ✅ CC0 (Creative Commons Zero)
- ✅ CC BY (Attribution)
- ✅ Pribadi/Milik sendiri
- ❌ Copyright protected
- ❌ Commercial use tidak diizinkan

---

**Tip**: Gambar berkualitas tinggi membuat website terlihat profesional! 📸✨

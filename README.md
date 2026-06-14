# 💕 Apology Website - Permintaan Maaf Yang Lucu

Website interaktif untuk permintaan maaf yang lucu, romantis, dan tidak bisa ditolak! 🥺✨

## 🎯 Fitur Utama

✨ **Desain Lucu dan Romantis**
- Tema warna abu-abu elegan dengan sentuhan pink yang manis
- Elemen kucing lucu yang bergerak di sekitar layar
- Animasi halus dan interactive yang menggemaskan

🎮 **Interaktif**
- Tombol "IYAA" untuk menerima permintaan maaf dengan konfetti celebration
- Tombol "TIDAK" yang lari-larian ketika diklik (bukan hanya hover!)
- Pesan berubah setelah dimaafkan

💌 **Personalisasi**
- Pesan permintaan maaf yang dapat disesuaikan
- Background gradient yang berubah saat diterima
- Efek visual yang menciptakan suasana romantis

📱 **Responsive Design**
- Bekerja sempurna di desktop, tablet, dan mobile
- Optimized untuk semua ukuran layar

## 🚀 Cara Deploy ke GitHub Pages

### Langkah 1: Repository Sudah Siap! ✅
Repository `for-princess` sudah dibuat dan siap digunakan.

### Langkah 2: Aktifkan GitHub Pages
1. Pergi ke https://github.com/jabirfirdaus/for-princess
2. Klik "Settings"
3. Pilih "Pages" di sidebar kiri
4. Di bagian "Source", pilih branch "main" dan folder "root (/)"
5. Klik "Save"
6. Tunggu beberapa detik, website Anda akan live di: `https://jabirfirdaus.github.io/for-princess/`

## 📝 Cara Menyesuaikan Pesan

### Edit Pesan Permintaan Maaf
Buka file `index.html` dan cari bagian:
```html
<p class="apology-message" id="message">
    Princess Bilqis Inayatuz Zahwa,<br><br>
    Andika minta maaf karena membuat princess yang imut lucu cantik pinter tinggi mancung wangi baik hati dan tidak sombong menjadi kesal dan nangis. 😭<br><br>
    Mohon dimaafkan yaa 🤗🤗
</p>
```

Ubah nama, deskripsi, atau pesan sesuai keinginan!

### Edit Pesan Terima Kasih
Buka file `script.js` dan cari function `handleYesClick()`, kemudian ubah teks di bagian:
```javascript
messageEl.innerHTML = `
    Princess Bilqis Inayatuz Zahwa,<br><br>
    Terima kasih sudah mau memaafkan Andika... 💕<br>
    Andika janji gak akan membuat princess kesal lagi. 😭<br><br>
    I love you so much, princess! ✨💕✨
`;
```

## 🎨 Kustomisasi Warna

Edit file `styles.css` untuk mengubah warna:

```css
/* Ubah warna tombol IYAA */
.btn-yes {
    background: linear-gradient(135deg, #ff6b9d 0%, #ff5e8a 100%);
    /* Ganti dengan warna favorit Anda */
}

/* Ubah warna background */
body {
    background: linear-gradient(135deg, #f5f5f5 0%, #e8e8e8 100%);
    /* Ganti dengan gradien favorit */
}
```

## 💬 Cara Kerja Tombol "TIDAK"

Tombol "TIDAK" tidak hanya berpindah saat hover, tapi juga:
- Berpindah ke posisi random setiap kali diklik
- Bekerja di desktop (hover) dan mobile (click)
- Tidak memberikan respon lain, hanya terus berpindah
- Membuat orang harus klik "IYAA" ☺️

## 🎉 Yang Terjadi Saat "IYAA" Diklik

1. ✨ Konfetti jatuh dari atas (hearts dan warna-warni)
2. 💌 Pesan berubah menjadi pesan terima kasih
3. 🎨 Background berubah menjadi warna pastel yang lebih ceria
4. 😸 Kucing-kucing terus bergerak lucu
5. 🔘 Tombol "TIDAK" tidak berfungsi lagi

## 📂 Struktur File

```
for-princess/
├── index.html      # Struktur HTML
├── styles.css      # Styling dan animasi
├── script.js       # Logic dan interaktivitas
└── README.md       # File ini
```

## 💡 Tips

- Buka di browser untuk preview sebelum di-deploy
- Gunakan browser DevTools (F12) untuk mobile preview
- Sharekan link website kepada orang terkasih
- Jangan lupa yang penting adalah tulus dalam meminta maaf! 💕

## 🌟 Browser Support

✅ Chrome
✅ Firefox
✅ Safari
✅ Edge
✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 📄 License

Free to use and modify for personal use! ❤️

---

**Made with love and cuteness** 😸💕✨

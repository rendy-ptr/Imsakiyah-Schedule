# Imsakiyah Schedule

Aplikasi jadwal imsakiyah (waktu berbuka puasa dan sahur) selama bulan Ramadhan yang dikembangkan dengan React.js dan Bun.

## 🤖 Demo Url

- https://imsakiyah-schedule.vercel.app/
  
## 🌙 Deskripsi

Imsakiyah Schedule adalah aplikasi web modern yang memudahkan umat Muslim untuk mengakses jadwal waktu imsak, sahur, dan berbuka puasa selama bulan Ramadhan. Aplikasi ini dikembangkan menggunakan React.js dan Bun sebagai runtime JavaScript/TypeScript, serta memanfaatkan API dari sumber eQuran untuk mendapatkan data jadwal imsakiyah yang akurat.

## ✨ Fitur

- Menampilkan jadwal imsakiyah harian
- Pencarian jadwal berdasarkan lokasi/kota
- Tampilan responsif dan intuitif
- Dukungan untuk berbagai wilayah Indonesia
- Mode gelap/terang (theme switching)

## 🚀 Cara Menjalankan

1. **Install Bun (jika belum)**

   ```bash
   curl -fsSL https://bun.sh/install | bash
   ```

2. **Install dependencies**

   ```bash
   bun install
   ```

3. **Jalankan aplikasi dalam mode development**

   ```bash
   bun run dev
   ```

4. **Build untuk produksi**

   ```bash
   bun run build
   ```

## 📋 Persyaratan Sistem

- Node.js 16.x atau lebih baru
- Bun runtime
- Koneksi internet untuk mengakses API eQuran

## 🛠️ Teknologi yang Digunakan

- React.js
- Bun (sebagai runtime JavaScript/TypeScript)
- eQuran API
- React Router
- Tailwind CSS / styled-components (untuk styling)

## 📝 Penggunaan

1. Buka aplikasi di browser
2. Pilih kota atau masukkan lokasi Anda
3. Lihat jadwal imsakiyah untuk hari ini atau pilih tanggal tertentu

## 🔄 API Endpoints

Aplikasi ini menggunakan API dari eQuran dengan endpoint berikut:

- `GET /api/v2/imsakiyah/provinsi` - Mendapatkan data provinsi di indonesia
- `POST /api/v2/imsakiyah/kabkota` - Mendapatkan data kabupaten/kota berdasarkan provinsi terpilih
- `POST /api/v2/imsakiyah` - Mendapatkan jadwal imsakiyah berdasarkan provinsi dan kota terplih

## 📄 Lisensi

Proyek ini dilisensikan di bawah [MIT License](LICENSE).

## 🙏 Terima Kasih

Terima kasih kepada eQuran yang telah menyediakan API untuk data jadwal imsakiyah.

---

Dibuat dengan ❤️ untuk memudahkan ibadah Ramadhan

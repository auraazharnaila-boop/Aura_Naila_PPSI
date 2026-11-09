---
name: patunganku-pink-fintech-design
description: Panduan desain UI untuk aplikasi PatunganKu, PWA pencatat tagihan bulanan dan patungan penghuni kos/kontrakan. Gunakan saat membuat, memperbaiki, atau menambah halaman UI yang harus konsisten dengan kode HTML/Tailwind PatunganKu.
---

# Skill Desain UI — PatunganKu

## 1. Tujuan dan karakter desain

Gunakan skill ini untuk membuat tampilan PatunganKu yang konsisten dengan kode referensi. PatunganKu adalah PWA untuk mengelola tagihan bersama, pembagian nominal, status pembayaran, pengingat, dan riwayat patungan.

Karakter visual:
- **Friendly, ringan, modern, dan tepercaya**; hindari kesan aplikasi perbankan yang kaku.
- Tema utama **pink/rose pastel** dengan aksen pink yang jelas untuk aksi utama.
- Layout mengutamakan **mobile-first**, satu kolom, dan nyaman dipakai dengan satu tangan.
- Gunakan kartu dengan sudut membulat, border lembut, ruang kosong cukup, ikon sederhana, dan teks yang mudah dipindai.
- Bahasa antarmuka menggunakan **Bahasa Indonesia yang natural dan ringkas**.

## 2. Teknologi dan dependensi referensi

Pertahankan pendekatan teknologi yang tampak pada kode sumber:
- HTML semantik.
- Tailwind CSS melalui CDN dengan plugin `forms` dan `container-queries`.
- Font **Plus Jakarta Sans** dari Google Fonts.
- Ikon **Material Symbols Outlined**.
- JavaScript sisi klien untuk interaksi sederhana seperti menutup banner, mengubah status simulasi, menghitung pembagian, menampilkan toast, dan membuka modal.
- Tampilan diperlakukan sebagai **PWA/mobile web**; jangan menganggap fitur demo berarti backend atau transaksi pembayaran sungguhan sudah tersedia.

Jika proyek memakai framework lain, terapkan prinsip visual dan perilaku yang sama tanpa memaksakan struktur HTML asli.

## 3. Design tokens

### Warna

Gunakan palet berikut sebagai sumber utama. Jika ada warna status, gunakan dengan fungsi yang konsisten.

| Token | Nilai | Penggunaan |
|---|---|---|
| `primary` | `#DB2777` | Tombol utama, ikon aktif, tautan aktif |
| `primary-container` | `#FBCFE8` | Latar aksen pink lembut |
| `secondary` | `#BE185D` | Hover/aksen sekunder |
| `secondary-container` | `#FCE7F3` | Latar chip dan elemen sekunder |
| `surface` / `background` | `#FDF2F8` | Latar halaman |
| `surface-container-low` | `#FDF0F5` | Panel lembut |
| `surface-container` | `#FAE8F0` | Latar kontrol/selector |
| `surface-container-high` | `#F5E0EA` | Permukaan dengan penekanan lebih tinggi |
| `surface-container-highest` | `#F0D5E3` | Latar status netral lembut |
| `surface-container-lowest` | `#FFFFFF` | Kartu utama dan input |
| `on-surface` | `#1E131D` | Teks utama |
| `on-surface-variant` | `#4F3B47` | Teks sekunder |
| `outline` | `#9D7183` | Outline seperlunya |
| `outline-variant` | `#F3D1E1` | Border lembut |
| `error` | `#BA1A1A` | Penolakan, kesalahan, status bermasalah |

Status pembayaran:
- **Lunas/berhasil:** latar emerald muda, teks emerald gelap, ikon centang.
- **Menunggu konfirmasi:** latar amber muda, teks amber gelap, ikon jam.
- **Belum bayar:** latar permukaan netral/pink sangat muda.
- **Terlambat atau ditolak:** warna error merah, disertai label yang jelas.
- Jangan hanya mengandalkan warna; selalu tampilkan teks status dan/atau ikon.

### Tipografi

- Font utama: `Plus Jakarta Sans`, fallback `sans-serif`.
- Judul hero mobile: sekitar 26 px, line-height 34 px, bobot 700–800.
- Judul bagian: sekitar 18 px, line-height 24 px, bobot 600–700.
- Teks isi: 14 px, line-height 20 px.
- Teks pendukung: 12 px, line-height 16 px.
- Label kecil: 11–12 px, bobot 600–700.
- Angka nominal penting dapat memakai 28–32 px dan bobot 800.
- Gunakan hierarki yang jelas; hindari terlalu banyak ukuran atau gaya huruf pada satu layar.

### Radius, jarak, dan bayangan

- Radius default: `4px`.
- Radius `lg`: `8px`.
- Radius `xl`: `12px`.
- Kartu penting umumnya memakai radius `16px` (`rounded-2xl`).
- Elemen pill memakai radius penuh (`rounded-full`).
- Spasi umum: 4, 8, 12, 16, 24, dan 32 px.
- Padding layar mobile: sekitar 16 px; gutter komponen sekitar 12–16 px.
- Gunakan border pink tipis dan bayangan lembut. Hindari bayangan gelap atau border kontras berlebihan.
- Tombol sentuh dan kontrol utama idealnya memiliki tinggi sekitar 44–48 px.

## 4. Kerangka layout

### Mobile-first

- Konten utama dibatasi sekitar `max-width: 480px` pada layar mobile.
- Gunakan satu kolom dengan jarak antarseksi yang konsisten.
- Sediakan ruang atas untuk header tetap dan ruang bawah untuk navigasi bawah tetap.
- Perhatikan safe area perangkat melalui `env(safe-area-inset-top)` dan `env(safe-area-inset-bottom)`.
- Sembunyikan scrollbar visual hanya jika scroll tetap berfungsi dan tidak mengganggu aksesibilitas.
- Pada layar lebih lebar, pertahankan lebar baca yang nyaman; jangan sekadar meregangkan kartu sampai terlalu lebar.

### Header

- Header tetap (`fixed`) dengan latar putih/pink transparan dan efek blur ringan.
- Tampilkan logo/ikon dompet, nama **PatunganKu**, konteks halaman, tombol notifikasi, dan avatar profil jika relevan.
- Ikon aktif memakai pink utama.
- Jika ada banner pemasangan PWA, tempatkan di atas header atau di area teratas; sediakan tombol tutup dengan label aksesibel.

### Navigasi bawah

- Navigasi bawah tetap dengan latar semi-transparan, border atas tipis, dan tiga tujuan utama: **Beranda**, **Notifikasi**, **Profil**.
- Item aktif memakai warna pink dan bobot teks lebih kuat.
- Beri label teks di bawah ikon; jangan hanya menampilkan ikon.
- Pastikan konten halaman tidak tertutup oleh navigasi bawah.

## 5. Komponen dan pola visual

### Tombol

- **Primary:** latar `#DB2777`, teks putih, radius 12–16 px, tinggi sekitar 48 px, label berupa kata kerja yang jelas.
- **Secondary:** latar putih atau pink muda, border pink lembut, teks gelap.
- **Destructive:** gaya merah/error untuk tindakan menolak atau menghapus.
- Tambahkan perubahan visual saat hover/active jika platform mendukung.
- Jangan memberi kesan tombol benar-benar melakukan pembayaran atau mengirim notifikasi nyata jika kode hanya simulasi.

### Kartu tagihan

Setiap kartu tagihan sebaiknya memuat:
1. Ikon kategori, misalnya listrik, Wi-Fi, air, atau langganan.
2. Nama tagihan.
3. Total nominal dan/atau nominal per anggota.
4. Ringkasan status, misalnya jumlah anggota yang sudah membayar.
5. Jatuh tempo bila relevan.
6. Rincian anggota dan status masing-masing ketika dibutuhkan.
7. Aksi terkait sesuai peran pengguna.

Kartu utama memakai latar putih, border pink muda, radius besar, padding sekitar 16 px, dan bayangan halus.

### Ringkasan dashboard

- Sapaan singkat dan pilihan grup/kos berada di bagian atas.
- Kartu ringkasan menampilkan periode, total tagihan, total terkumpul, dan progress pembayaran.
- Progress bar memakai warna pink dan harus disertai angka/teks sehingga nilainya tetap jelas tanpa melihat warna.
- Indikator kecil seperti jatuh tempo, belum lunas, dan terkumpul dapat disusun dalam tiga kolom jika ruang cukup.
- Letakkan peringatan jatuh tempo dekat ringkasan, bukan tersembunyi jauh di bawah.

### Status pembayaran

Gunakan label yang eksplisit:
- `Lunas`
- `Menunggu konfirmasi`
- `Belum bayar`
- `Terlambat`
- `Ditolak`

Status `Menunggu konfirmasi` tidak boleh langsung diperlakukan sebagai lunas. Pada alur admin, tampilkan aksi **Konfirmasi** dan **Tolak** dengan perbedaan visual yang jelas.

### Form tambah tagihan dan pembagian

Kelompokkan form menjadi beberapa bagian:
1. **Informasi dasar:** nama tagihan, kategori, nominal total.
2. **Jatuh tempo dan penalang:** tanggal jatuh tempo dan anggota yang menalangi.
3. **Metode pembagian:** pembagian sama rata atau nominal manual, mengikuti fitur yang tersedia.
4. **Anggota peserta:** daftar anggota dengan checkbox dan nominal bagian.
5. **Validasi pembagian:** total bagian dibandingkan dengan nominal tagihan.
6. **Aksi bawah:** tombol utama untuk membuat/menyimpan tagihan.

Perilaku penting:
- Format rupiah memakai format lokal Indonesia, misalnya `Rp450.000`.
- Saat anggota dipilih/dihapus atau nominal berubah, hitung ulang pembagian jika mode otomatis digunakan.
- Tampilkan sisa/selisih pembagian dengan jelas.
- Cegah submit jika data wajib belum valid atau total pembagian tidak sesuai.
- Jangan mengubah angka yang dimasukkan pengguna secara diam-diam selain pemformatan tampilan yang aman.

### Bottom sheet konfirmasi pembayaran

- Gunakan overlay gelap/transparan di belakang sheet.
- Bottom sheet memakai permukaan putih, sudut atas membulat besar, drag handle dekoratif, dan konten yang bisa di-scroll bila panjang.
- Tampilkan identitas anggota, nominal yang diklaim, status, serta pratinjau bukti transfer jika memang ada.
- Aksi konfirmasi harus menonjol dengan warna pink.
- Aksi penolakan memakai warna error dan dapat membuka panel alasan penolakan.
- Jika ada gambar bukti, sediakan pratinjau lebih besar/lightbox dan kontrol tutup yang jelas.
- Jangan menganggap bukti transfer terverifikasi otomatis; keputusan konfirmasi tetap dilakukan oleh admin/penalang sesuai alur produk.

### Toast dan umpan balik

- Toast berupa panel ringkas dengan kontras yang cukup, ikon, dan pesan yang menjelaskan hasil aksi.
- Letakkan di posisi yang tidak menutupi tombol penting atau navigasi.
- Pesan harus spesifik, misalnya “Pembayaran berhasil dikonfirmasi” atau “Tagihan berhasil dibuat”.
- Gunakan toast hanya setelah aksi berhasil. Pada demo sisi klien, beri penanda bahwa perubahan masih simulasi jika berpotensi disalahartikan sebagai data tersimpan di server.

### Banner pemasangan PWA

- Latar pink pastel, ikon instalasi, teks singkat, dan tombol `Pasang`.
- Sediakan tombol tutup dengan `aria-label` yang sesuai.
- Instruksi pemasangan harus sesuai perilaku browser; jangan menyatakan PWA sudah terpasang sebelum sistem mengonfirmasinya.

## 6. Ikon dan ilustrasi

- Gunakan Material Symbols Outlined dengan gaya konsisten.
- Ikon yang sesuai dengan konteks kode: `account_balance_wallet`, `receipt_long`, `bolt`, `wifi`, `water_drop`, `notifications`, `notifications_active`, `event`, `payments`, `check_circle`, `schedule`, `person`, `home`, `install_mobile`, dan `verified_user`.
- Gunakan ikon untuk membantu pemindaian, bukan sebagai pengganti label penting.
- Foto/ilustrasi penghuni kos bersifat pendukung. Gunakan gambar yang relevan, hangat, dan tidak mendominasi informasi tagihan.
- Foto avatar harus berbentuk lingkaran, terpotong rapi, dan memiliki teks alternatif yang sesuai.
- Jangan memakai gambar dekoratif yang membuat informasi nominal/status sulit dibaca.

## 7. Micro-interactions

Interaksi yang cocok dengan referensi:
- Banner dapat ditutup.
- Tombol utama memiliki feedback visual saat ditekan.
- Pengingat menampilkan feedback/toast setelah aksi.
- Status klaim pembayaran berubah setelah admin mengonfirmasi atau menolak.
- Panel alasan penolakan dapat dibuka/tutup.
- Pratinjau bukti dapat dibuka dalam lightbox.
- Pilihan anggota memicu kalkulasi ulang pembagian.
- Tombol pilih semua/hapus semua mengubah seluruh checkbox peserta.
- Validasi nominal diperbarui saat input berubah.

Aturan implementasi:
- Hindari aksi yang hanya tampak interaktif tetapi tidak memiliki hasil.
- Jika backend belum tersedia, dokumentasikan aksi sebagai simulasi/dummy.
- Tangani kondisi kosong, input tidak valid, kegagalan, dan aksi berulang.
- Jangan menampilkan pesan “terkirim” jika notifikasi tidak benar-benar dikirim melalui layanan yang terhubung.

## 8. Aksesibilitas dan usability

- Gunakan elemen semantik: `header`, `main`, `nav`, `section`, `form`, `label`, `button`.
- Setiap input harus memiliki label yang terlihat dan terhubung dengan input.
- Tombol ikon saja harus memiliki `aria-label`.
- Pertahankan kontras teks yang memadai terhadap latar.
- Status penting harus ditulis sebagai teks, bukan dibedakan hanya dengan warna.
- Sediakan fokus keyboard yang terlihat.
- Gunakan area sentuh yang cukup besar dan jarak antartombol yang mengurangi salah tekan.
- Modal/bottom sheet perlu kontrol tutup yang jelas dan fokus keyboard yang masuk akal.
- Hindari teks yang terlalu kecil untuk informasi penting seperti nominal, jatuh tempo, dan status.

## 9. Prinsip konten dan bahasa

- Gunakan bahasa Indonesia yang sederhana, akrab, dan sopan.
- Contoh microcopy: `Tambah Tagihan Baru`, `Jatuh Tempo Tinggal 3 Hari`, `Belum bayar`, `Konfirmasi`, `Tolak`, `Tandai Lunas Tunai`, `Riwayat`.
- Utamakan kalimat singkat yang menjelaskan tindakan atau status.
- Gunakan format mata uang Rupiah yang konsisten (`Rp112.500`).
- Tanggal tampil dengan format yang mudah dibaca, misalnya `25 Okt`.
- Hindari bahasa yang menyalahkan anggota yang belum membayar. Pengingat sebaiknya netral dan ramah.

## 10. Aturan konsistensi produk

Saat membuat layar baru:
1. Pertahankan palet pink/rose, font Plus Jakarta Sans, radius besar, border lembut, dan bayangan ringan.
2. Gunakan komponen yang sama untuk tombol, kartu, badge status, header, toast, dan navigasi.
3. Utamakan ringkasan penting di atas; detail anggota dan histori berada di bagian berikutnya.
4. Bedakan jelas peran admin/penalang dan anggota biasa.
5. Pastikan angka tagihan, nominal per anggota, status, dan jatuh tempo mudah ditemukan.
6. Tampilkan state kosong, loading, error, sukses, dan disabled bila relevan.
7. Jangan menambahkan fitur yang bertentangan dengan ruang lingkup produk tanpa konfirmasi.
8. Jangan mengklaim transfer uang, verifikasi bank, atau pengiriman WhatsApp berjalan hanya berdasarkan tampilan UI.
9. Pastikan desain tetap nyaman pada lebar layar 320–480 px dan dapat menyesuaikan layar yang lebih besar.
10. Jika desain yang diminta berbeda dari kode referensi, jelaskan perbedaan dan minta keputusan hanya jika pilihan itu memengaruhi arah desain secara signifikan.

## 11. Checklist sebelum hasil diserahkan

- [ ] Warna dan tipografi konsisten dengan design tokens.
- [ ] Tampilan mobile-first, tidak overflow horizontal.
- [ ] Header dan navigasi bawah tidak menutupi konten.
- [ ] Nominal, jatuh tempo, dan status pembayaran terbaca jelas.
- [ ] Tombol memiliki label tindakan yang jelas dan feedback yang sesuai.
- [ ] Form memiliki label, validasi, dan pesan error.
- [ ] Status tidak bergantung pada warna saja.
- [ ] Komponen modal/toast dapat ditutup atau hilang dengan cara yang jelas.
- [ ] Aksi demo tidak diklaim sebagai transaksi/backend nyata.
- [ ] Bahasa Indonesia ringkas, ramah, dan konsisten.

## 12. Instruksi singkat untuk AI desain/developer

> Buat atau perbarui UI PatunganKu berdasarkan skill ini dan kode HTML/Tailwind referensi. Gunakan tema pink pastel/rose, Plus Jakarta Sans, Material Symbols Outlined, kartu putih dengan radius besar, border pink lembut, bayangan ringan, dan layout mobile-first sekitar 480 px. Pertahankan bahasa Indonesia yang ringkas dan ramah. Prioritaskan keterbacaan nominal Rupiah, jatuh tempo, status pembayaran, dan pembagian per anggota. Implementasikan interaksi yang benar-benar berfungsi; tandai simulasi jika backend belum tersedia. Jangan mengubah ruang lingkup produk atau mengklaim transaksi/notifikasi nyata tanpa integrasi yang sesuai.

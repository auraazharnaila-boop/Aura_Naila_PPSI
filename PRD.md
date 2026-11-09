**PRODUCT REQUIREMENTS DOCUMENT**

**TRACKER TAGIHAN BULANAN DAN PATUNGAN UNTUK ORANG YANG TINGGAL BARENG**


Disusun Oleh :

Aura Azhar Naila

**PROGRAM STUDI S1 SISTEM INFORMASI**

**FAKULTAS TEKNIK DAN ILMU KOMPUTER**

**UNIVERSITAS TEKNOKRAT INDONESIA**

**BANDAR LAMPUNG**

2026


# 1. Problem Statement

## 1.1 Siapa yang Dirugikan

Produk ini ditujukan kepada orang yang tinggal bersama dan berbagi pembayaran tagihan rutin, terutama mahasiswa atau anak kos serta pekerja muda yang tinggal serumah atau sekontrakan. Pengguna dapat berbagi biaya listrik, air, WiFi, dan langganan digital dengan beberapa orang.

## 1.2 Masalah dan Dampaknya

Masalah utama terjadi ketika satu orang menjadi penalang tagihan, kemudian harus menagih anggota lain satu per satu melalui chat. Kondisi ini membuat informasi pembayaran tidak tersimpan pada satu tempat.

Penalang harus menanggung uang di muka dan melakukan penagihan berulang.

Bukti pembayaran mudah tenggelam di dalam riwayat chat.

Pengguna dapat lupa tanggal jatuh tempo sehingga tagihan terlambat.

Pembagian tagihan yang berubah setiap bulan harus dihitung kembali secara manual.

Perbedaan catatan pembayaran dapat menimbulkan kesalahpahaman antaranggota.

## 1.3 Kenapa Masalah Ini Penting

Masalah pembayaran bersama terjadi secara berulang setiap bulan. Walaupun nominal setiap orang relatif kecil, proses penagihan dan pencatatan yang tidak teratur dapat mengganggu hubungan antaranggota. Produk ini menyediakan satu tempat untuk mencatat tagihan, pembagian nominal, status pembayaran, pengingat, dan riwayat.

# 2. Target User dan Persona

## 2.1 Target User

Target utama adalah mahasiswa atau anak kos dan pekerja muda berusia sekitar 18–30 tahun yang berbagi biaya rutin dengan 2–8 orang, menggunakan smartphone, serta terbiasa melakukan pembayaran melalui transfer bank atau e-wallet.

## 2.2 Persona 1: Rina, Penalang Tetap

| Atribut | Deskripsi |
| --- | --- |
| Profil | 24 tahun, pekerja admin, tinggal bersama 3 teman. |
| Peran | Sering menjadi penalang tagihan listrik dan WiFi. |
| Kebutuhan | Melihat siapa yang belum membayar tanpa menagih satu per satu. |
| Frustrasi | Harus menghitung pembagian tagihan dan mencari bukti pembayaran di chat. |
| Kesuksesan | Semua anggota membayar sebelum jatuh tempo dan penagihan manual berkurang. |

## 2.3 Persona 2: Dimas, Anggota yang Pelupa

| Atribut | Deskripsi |
| --- | --- |
| Profil | 21 tahun, mahasiswa, tinggal bersama 2 teman. |
| Peran | Membayar bagian tagihan kepada penalang. |
| Kebutuhan | Mengetahui jumlah yang harus dibayar dan tanggal jatuh tempo. |
| Frustrasi | Lupa tanggal pembayaran dan tidak yakin dengan jumlah bagiannya. |
| Kesuksesan | Menerima pengingat, membayar, dan status pembayaran tercatat dengan jelas. |

# 3. Goals dan Non-Goals

## 3.1 Goals

Satu sumber informasi untuk setiap tagihan bersama: nominal, tanggal jatuh tempo, bagian tiap anggota, dan status pembayaran.

Mengurangi penagihan manual melalui pengingat otomatis.

Membuat pembagian nominal transparan dan dapat dilihat oleh seluruh anggota.

Menyediakan proses pembuatan grup dan tagihan berulang yang sederhana.

Menyediakan riwayat pembayaran yang dapat digunakan untuk memeriksa status pembayaran sebelumnya.

## 3.2 Non-Goals

Memproses atau menyimpan uang pengguna.

Melakukan integrasi rekening bank atau e-wallet untuk verifikasi pembayaran otomatis.

Mengelola pengeluaran pribadi atau anggaran pribadi.

Mendukung split bill sekali jalan seperti makan bersama atau patungan hadiah.

Membangun aplikasi native Android atau iOS pada MVP.

Membaca tagihan PLN, PDAM, atau provider secara otomatis.

Melakukan penagihan kepada pihak di luar grup.

# 4. User Stories

## 4.1 User Stories Penalang/Admin

| ID | User Story | Fitur |
| --- | --- | --- |
| US-01 | Sebagai penalang, saya ingin membuat grup dan mengundang teman melalui tautan, supaya semua orang yang berbagi tagihan berada di satu tempat. | F1, F2 |
| US-02 | Sebagai penalang, saya ingin membuat tagihan berulang dengan nominal dan tanggal jatuh tempo, supaya saya tidak perlu memasukkan tagihan ulang setiap bulan. | F3 |
| US-03 | Sebagai penalang, saya ingin membagi tagihan secara sama rata atau dengan nominal berbeda, supaya pembagian sesuai kesepakatan. | F4 |
| US-04 | Sebagai penalang, saya ingin mengubah nominal untuk satu periode saja, supaya tagihan yang berubah setiap bulan tetap akurat. | F3, F4 |
| US-07 | Sebagai penalang, saya ingin mengonfirmasi atau menolak klaim pembayaran anggota, supaya status pembayaran tetap akurat. | F5 |
| US-09 | Sebagai penalang, saya ingin melihat siapa saja yang belum membayar pada satu layar, supaya saya dapat mengetahui kondisi pembayaran dengan cepat. | F7 |

## 4.2 User Stories Anggota

| ID | User Story | Fitur |
| --- | --- | --- |
| US-05 | Sebagai anggota, saya ingin melihat bagian tagihan dan tanggal jatuh tempo, supaya saya tahu berapa yang harus dibayar dan kapan harus membayar. | F5, F7 |
| US-06 | Sebagai anggota, saya ingin menandai bagian saya sudah dibayar, supaya penalang mengetahui pembayaran tanpa saya harus mengirim pesan melalui chat. | F5 |
| US-08 | Sebagai anggota, saya ingin menerima pengingat sebelum jatuh tempo, supaya saya tidak lupa membayar. | F6 |
| US-10 | Sebagai anggota, saya ingin melihat riwayat pembayaran periode sebelumnya, supaya saya dapat memeriksa data jika terjadi perbedaan informasi. | F5, F7 |

# 5. Daftar Fitur

## 5.1 MVP

| ID | Fitur | Keputusan |
| --- | --- | --- |
| F1 | Akun dan sesi masuk | Email dan password. |
| F2 | Grup dan undangan anggota | Undangan melalui tautan, maksimal 8 anggota per grup. |
| F3 | Tagihan berulang | Frekuensi bulanan. |
| F4 | Pembagian nominal | Sama rata atau nominal manual. |
| F5 | Status bayar per anggota per periode | Klaim oleh anggota dan konfirmasi oleh penalang; tidak mendukung pembayaran sebagian. |
| F6 | Pengingat jatuh tempo | Push notification PWA. |
| F7 | Dashboard dan riwayat | Menampilkan kondisi tagihan periode berjalan dan riwayat. |

## 5.2 Versi 2

Lampiran bukti transfer berupa foto.

Frekuensi tagihan selain bulanan.

Pembagian berdasarkan persentase atau bobot.

Ringkasan bulanan dan ekspor CSV.

Tautan pembayaran atau salin nomor rekening penalang.

## 5.3 Nanti

Integrasi e-wallet atau bank untuk verifikasi otomatis.

Pengingat melalui WhatsApp.

Aplikasi native Android/iOS jika PWA terbukti tidak memenuhi kebutuhan penggunaan.

Fitur 'siapa berutang ke siapa' lintas tagihan (netting).

# 6. Functional Requirements (MVP)

Seluruh requirement berikut bersifat wajib untuk MVP.

## F1. Akun dan Sesi Masuk

| ID | Requirement | Kriteria Penerimaan |
| --- | --- | --- |
| F1-1 | Pengguna dapat mendaftar dan masuk menggunakan email dan password. | Pengguna dapat membuat akun dan masuk kembali dari perangkat lain. |
| F1-2 | Pengguna wajib mengisi nama tampilan saat pertama masuk. | Nama tampil di daftar anggota dan tidak boleh kosong. |
| F1-3 | Sesi tetap aktif pada perangkat yang sama sampai pengguna keluar. | Membuka kembali PWA tidak meminta login selama sesi masih valid. |
| F1-4 | Pengguna dapat mengubah nama tampilan dan menghapus akun. | Saat akun dihapus, data pribadi dianonimkan sesuai kebijakan produk. |

## F2. Grup dan Undangan

| ID | Requirement | Kriteria Penerimaan |
| --- | --- | --- |
| F2-1 | Pengguna dapat membuat grup dengan nama dan otomatis menjadi admin. | Grup muncul pada daftar grup dengan peran admin. |
| F2-2 | Admin dapat membuat tautan undangan. | Tautan dapat dinonaktifkan dan dibuat ulang. |
| F2-3 | Pengguna yang menerima tautan dapat bergabung ke grup. | Pengguna tanpa akun diarahkan mendaftar lalu masuk ke grup tujuan. |
| F2-4 | Admin dapat mengeluarkan anggota dan anggota dapat keluar sendiri. | Riwayat pembayaran tidak dihapus. |
| F2-5 | Jumlah anggota aktif dalam satu grup maksimal 8 orang. | Sistem menolak anggota ke-9. |
| F2-6 | Satu grup dapat memiliki lebih dari satu admin. | Admin dapat menunjuk anggota lain sebagai admin. |
| F2-7 | Satu pengguna dapat memiliki maksimal 5 grup aktif. | Sistem menolak pembuatan/join grup aktif ke-6. |

## F3. Tagihan Berulang

| ID | Requirement | Kriteria Penerimaan |
| --- | --- | --- |
| F3-1 | Admin dapat membuat tagihan dengan nama, kategori, nominal total, tanggal jatuh tempo 1–31, dan penalang. | Semua field wajib valid dan nominal harus lebih dari nol. |
| F3-2 | Sistem membuat periode tagihan baru setiap bulan. | Periode bulan berikutnya tersedia sebelum pengingat pertama dikirim. |
| F3-3 | Admin dapat mengubah nominal untuk satu periode. | Perubahan hanya berlaku pada periode yang dipilih. |
| F3-4 | Admin dapat mengubah nominal default untuk periode berikutnya. | Periode yang sudah berjalan tidak berubah. |
| F3-5 | Admin dapat menjeda atau mengarsipkan tagihan. | Tagihan yang dijeda/diarsipkan tidak menghasilkan periode baru atau pengingat. |
| F3-6 | Jika tanggal jatuh tempo tidak tersedia pada bulan tertentu, sistem menggunakan hari terakhir bulan tersebut. | Contoh: tanggal 31 menjadi tanggal 30 pada bulan April. |

## F4. Pembagian Nominal

| ID | Requirement | Kriteria Penerimaan |
| --- | --- | --- |
| F4-1 | Sistem mendukung pembagian sama rata. | Total seluruh bagian harus sama persis dengan total tagihan. |
| F4-2 | Sistem mendukung nominal manual per anggota. | Sistem menolak penyimpanan jika jumlah bagian tidak sama dengan total. |
| F4-3 | Admin dapat memilih anggota yang mengikuti tagihan. | Anggota yang tidak ikut tidak menerima pengingat dan tidak memiliki status pembayaran pada tagihan tersebut. |
| F4-4 | Bagian penalang tetap tercatat dan otomatis lunas. | Bagian penalang tidak menghasilkan pengingat. |
| F4-5 | Seluruh anggota dapat melihat pembagian tagihan. | Anggota dapat melihat nominal bagian setiap peserta. |
| F4-6 | Jika pembagian rata menghasilkan sisa rupiah, sisa diberikan kepada penalang. | Total pembagian selalu sama dengan total tagihan. |

## F5. Status Bayar per Anggota per Periode

| ID | Requirement | Kriteria Penerimaan |
| --- | --- | --- |
| F5-1 | Setiap bagian memiliki status Belum Bayar, Menunggu Konfirmasi, Lunas, atau Terlambat. | Status Terlambat muncul otomatis setelah melewati jatuh tempo dan belum Lunas. |
| F5-2 | Anggota dapat menandai bagian sebagai sudah dibayar. | Status berubah menjadi Menunggu Konfirmasi dan penalang menerima notifikasi dalam aplikasi. |
| F5-3 | Penalang dapat mengonfirmasi atau menolak klaim pembayaran. | Konfirmasi mengubah status menjadi Lunas; penolakan mengembalikan status menjadi Belum Bayar. |
| F5-4 | Penalang dapat langsung menandai bagian sebagai Lunas. | Aksi tercatat sebagai konfirmasi langsung oleh penalang. |
| F5-5 | MVP tidak mendukung pembayaran sebagian. | Pengguna hanya mencatat pembayaran penuh. |
| F5-6 | Riwayat perubahan status tidak dapat dihapus. | Setiap perubahan menyimpan waktu dan pelaku. |

## F6. Pengingat Jatuh Tempo

| ID | Requirement | Kriteria Penerimaan |
| --- | --- | --- |
| F6-1 | Sistem mengirim pengingat H-3 dan H-0. | Pengingat hanya dikirim kepada anggota yang belum Lunas. |
| F6-2 | Sistem mengirim pengingat untuk status Terlambat. | Pengingat dikirim H+1, kemudian setiap 3 hari sampai maksimal 3 kali. |
| F6-3 | Pengguna dapat mematikan pengingat untuk suatu grup. | Pengaturan tersimpan per pengguna per grup. |
| F6-4 | Channel MVP adalah push notification PWA. | Pengguna memberikan izin notifikasi pada perangkat/browser. |
| F6-5 | Penalang menerima ringkasan anggota yang belum bayar pada hari jatuh tempo. | Ringkasan menampilkan nama dan nominal tertunggak. |
| F6-6 | Waktu pengingat menggunakan WIB dan hanya dikirim pukul 07.00–21.00. | Sistem tidak mengirim pengingat di luar rentang waktu tersebut. |

## F7. Dashboard dan Riwayat

| ID | Requirement | Kriteria Penerimaan |
| --- | --- | --- |
| F7-1 | Beranda menampilkan daftar grup dan jumlah tagihan belum lunas. | Data sesuai dengan periode berjalan. |
| F7-2 | Halaman grup menampilkan tagihan, jatuh tempo, total, dan status anggota. | Informasi dapat dibaca pada layar lebar 360 px tanpa scroll horizontal. |
| F7-3 | Anggota melihat ringkasan bagian yang harus dibayar bulan ini. | Total konsisten dengan data tagihan. |
| F7-4 | Riwayat periode sebelumnya dapat dilihat per tagihan. | Riwayat menampilkan nominal, status akhir, dan tanggal lunas. |
| F7-5 | PWA dapat dipasang ke layar utama smartphone. | PWA memenuhi kriteria installable pada Chrome Android. |

# 7. Sketsa Data Model

Model data berikut merupakan model konseptual MVP.

| Entitas | Field Kunci | Relasi/Keterangan |
| --- | --- | --- |
| User | id, display_name, email, password_hash, timezone, created_at, deleted_at | Memiliki banyak Membership. |
| Group | id, name, created_by, invite_token, invite_active, created_at | Memiliki banyak Membership dan Bill. |
| Membership | id, group_id, user_id, role, status, joined_at, left_at, reminders_enabled | Menghubungkan User dan Group. |
| Bill | id, group_id, name, category, default_amount, due_day, payer_membership_id, split_mode, status | Memiliki banyak BillCycle dan BillParticipant. |
| BillParticipant | id, bill_id, membership_id, default_share_amount | Menentukan anggota yang mengikuti tagihan. |
| BillCycle | id, bill_id, period, due_date, total_amount, amount_overridden, created_at | Mewakili satu periode tagihan. |
| BillShare | id, cycle_id, membership_id, amount_due, amount_paid, status, paid_at, confirmed_by | Mewakili bagian satu anggota pada satu periode. |
| StatusLog | id, share_id, from_status, to_status, actor_membership_id, note, created_at | Mencatat perubahan status secara append-only. |
| Reminder | id, share_id, type, channel, scheduled_at, sent_at, result | Mencatat pengiriman pengingat dan mencegah pengiriman ganda. |
| Notification | id, user_id, type, payload, read_at, created_at | Menyimpan notifikasi dalam aplikasi. |

## 7.2 Keputusan Desain Data

Nominal disimpan sebagai bilangan bulat rupiah tanpa desimal.

BillShare menyimpan nominal per periode agar perubahan nominal di masa depan tidak mengubah riwayat.

Anggota yang keluar tidak dihapus dari data, tetapi status Membership berubah menjadi left.

Perubahan status pembayaran dicatat pada StatusLog dan tidak dapat dihapus.

# 8. Edge Case dan Failure State

| ID | Situasi | Perilaku Sistem |
| --- | --- | --- |
| EC-01 | Tanggal jatuh tempo 29, 30, atau 31 tidak tersedia pada bulan tertentu. | Sistem menggunakan hari terakhir bulan tersebut. |
| EC-02 | Total tidak habis dibagi jumlah peserta. | Sisa rupiah diberikan kepada penalang. |
| EC-03 | Anggota bergabung di tengah periode berjalan. | Anggota mulai ikut pada periode berikutnya, kecuali admin menambahkannya secara manual ke periode berjalan. |
| EC-04 | Anggota keluar atau dikeluarkan saat memiliki tunggakan. | Riwayat dan tunggakan tetap tercatat; pengingat berhenti. |
| EC-05 | Penalang keluar dari grup. | Penalang tidak dapat keluar sampai setiap tagihan aktif memiliki penalang pengganti. |
| EC-06 | Admin terakhir ingin keluar. | Sistem meminta penunjukan admin pengganti atau pembubaran grup. |
| EC-07 | Anggota mengklaim sudah bayar tetapi belum membayar. | Status tetap Menunggu Konfirmasi sampai penalang mengonfirmasi atau menolak. |
| EC-08 | Pengguna menghapus akun. | Data pribadi dianonimkan dan riwayat tetap tersedia dengan nama 'Anggota terhapus'. |
| EC-09 | Nominal diubah setelah sebagian anggota Lunas. | Bagian yang sudah Lunas tidak berubah otomatis; admin harus menangani selisih secara manual. |
| EC-10 | Koneksi terputus saat mengubah status pembayaran. | Aksi gagal dengan pesan jelas dan dapat diulangi tanpa membuat status ganda. |
| EC-11 | Dua pengguna mengubah data secara bersamaan. | Perubahan terakhir berlaku untuk field biasa; perubahan status tetap dicatat pada log. |
| EC-12 | Browser tidak mendukung push notification. | Status pembayaran tetap tersedia di dalam aplikasi. |
| EC-13 | Tautan undangan tersebar ke orang asing. | Admin dapat menonaktifkan tautan dan mengeluarkan anggota yang tidak dikenal. |
| EC-14 | Job pengingat berjalan dua kali. | Sistem menggunakan identitas unik Reminder agar satu pengingat tidak terkirim dua kali. |
| EC-15 | Zona waktu perangkat salah. | Perhitungan periode dan jatuh tempo menggunakan waktu server dengan WIB sebagai zona waktu MVP. |
| EC-16 | Format nominal berbeda seperti 1.000.000 atau 1,000,000. | Sistem menormalkan input menjadi bilangan bulat atau menolak input yang tidak valid dengan pesan jelas. |

# 9. Success Metrics

Target berikut digunakan sebagai target awal evaluasi produk selama tiga bulan pertama.

| Metrik | Definisi | Target |
| --- | --- | --- |
| Aktivasi | Persentase pengguna baru yang membuat/bergabung ke grup dan memiliki minimal satu tagihan aktif dalam 7 hari. | 50% |
| Waktu setup | Median waktu dari pendaftaran sampai tagihan pertama tersimpan lengkap dengan pembagian. | Di bawah 3 menit |
| Grup aktif | Grup dengan minimal 2 anggota dan 1 periode tagihan tercatat. | 50 grup |
| Retensi periode kedua | Persentase grup yang masih menggunakan aplikasi pada periode tagihan kedua. | 60% |
| Ketepatan bayar | Persentase BillShare berstatus Lunas pada atau sebelum jatuh tempo. | Meningkat dibanding baseline |
| Konversi pengingat | Persentase pengingat yang diikuti perubahan status menjadi Menunggu Konfirmasi atau Lunas dalam 24 jam. | 30% |
| Beban penagihan | Persentase penalang yang menyatakan kebutuhan menagih manual melalui chat berkurang. | Minimal 60% |

## 9.2 Guardrail

| Guardrail | Definisi | Target |
| --- | --- | --- |
| Kesalahan perhitungan | Laporan jumlah bagian tidak sesuai dengan total tagihan. | 0 kasus |

# 10. Open Questions

Pada versi final ini, keputusan utama yang sebelumnya masih terbuka telah ditetapkan sebagai berikut.

| Area | Keputusan Final |
| --- | --- |
| Target user | Mahasiswa/anak kos dan pekerja muda usia sekitar 18–30 tahun; grup 2–8 orang. |
| Metode login | Email dan password. |
| Platform | Progressive Web App (PWA). |
| Channel pengingat | Push notification PWA. |
| Frekuensi tagihan | Bulanan pada MVP. |
| Batas anggota | Maksimal 8 anggota per grup dan maksimal 5 grup aktif per pengguna. |
| Pembayaran sebagian | Tidak tersedia pada MVP. |
| Bukti transfer | Masuk V2. |
| Tanggal 29–31 | Jika tanggal tidak tersedia, digunakan hari terakhir bulan. |
| Pembulatan | Sisa rupiah diberikan kepada penalang. |
| Anggota baru | Mulai mengikuti tagihan pada periode berikutnya, kecuali ditambahkan manual oleh admin. |
| Zona waktu | WIB untuk MVP. |
| Validasi user | Dilakukan melalui 5–10 calon pengguna sebelum pengembangan penuh. |
| Penghapusan akun | Data pribadi dianonimkan; riwayat tetap dipertahankan. |
| Definisi selesai | Alur utama grup sampai riwayat pembayaran berjalan, PWA dapat digunakan, pengingat berjalan, dan tidak ada kesalahan perhitungan. |
| Monetisasi | Gratis tanpa iklan pada MVP. |

Keputusan di atas menjadi dasar desain, pengembangan, pengujian, dan evaluasi MVP. Perubahan setelah dokumen ini disetujui harus dicatat sebagai perubahan requirement agar tidak menimbulkan perbedaan antara desain, data model, dan implementasi.

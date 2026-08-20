# Tarik Merdeka

Tarik Merdeka adalah game kuis dua tim bertema Hari Kemerdekaan Indonesia. Game ini dirancang untuk dimainkan pada satu layar landscape berukuran besar dengan dua panel touchscreen: satu untuk tim kiri dan satu untuk tim kanan.

Kedua tim adalah pemain manusia. Game tidak menggunakan AI atau simulasi jawaban lawan.

## Cara Bermain

1. Buka `index.html` melalui browser.
2. Isi nama tim kiri dan kanan.
3. Pilih durasi pertandingan, waktu per soal, tingkat kesulitan, dan kategori.
4. Tekan **Mulai Lomba**.
5. Setelah hitung mundur `3, 2, 1, MERDEKA!`, kedua tim dapat menjawab dari panel masing-masing.
6. Jawaban benar menambah skor dan menarik tali ke arah tim yang menjawab.
7. Setelah sebuah tim menjawab, panel tim tersebut langsung menampilkan soal berikutnya tanpa menunggu lawan.
8. Ketika waktu pertandingan habis, tim dengan skor tertinggi menjadi pemenang.

Jika kedua tim memiliki skor yang sama, pertandingan dinyatakan seri.

## Mode Pertandingan

Durasi pertandingan yang tersedia:

- 1 menit
- 5 menit
- 10 menit

Timer pertandingan ditampilkan di bagian tengah header. Pada 30 detik terakhir, timer berubah menjadi lebih mencolok.

Setiap pertanyaan juga mempunyai timer independen:

- 10 detik
- 15 detik
- 20 detik
- 30 detik

Jika timer soal mencapai nol, jawaban dianggap salah dan soal berikutnya akan dimuat secara otomatis.

## Dua Panel Touchscreen

Layar permainan dibagi menjadi tiga bagian:

```text
30% Panel Tim Kiri | 40% Arena Tarik Tambang | 30% Panel Tim Kanan
```

Setiap panel mempunyai:

- Nama tim
- Skor
- Combo
- Kategori dan tingkat kesulitan
- Pertanyaan
- Empat tombol jawaban besar
- Timer soal independen
- Indikator benar, salah, atau waktu habis

Kedua panel berjalan secara independen. Tim yang menjawab lebih cepat dapat langsung melanjutkan ke pertanyaan selanjutnya.

## Kontrol

### Touchscreen atau mouse

Tekan tombol jawaban A, B, C, atau D pada panel tim masing-masing.

### Keyboard

| Tim | A | B | C | D |
|---|---:|---:|---:|---:|
| Tim kiri | `1` | `2` | `3` | `4` |
| Tim kanan | `7` | `8` | `9` | `0` |

Kontrol keyboard dapat digunakan untuk pengujian atau dihubungkan dengan tombol fisik eksternal.

## Sistem Skor

Jawaban benar memberikan:

- Skor dasar
- Bonus berdasarkan sisa waktu
- Bonus combo

Semakin cepat pemain menjawab dengan benar, semakin besar skor dan kekuatan tarik yang diperoleh.

Jawaban salah atau timeout akan mengatur ulang combo tim tersebut.

### Bonus kecepatan tarik

| Waktu yang digunakan | Bonus |
|---|---:|
| 0–25% | +5 |
| 25–50% | +3 |
| 50–75% | +1 |
| 75–100% | +0 |

### Bonus combo tarik

| Combo | Bonus |
|---|---:|
| 2 jawaban benar | +2 |
| 3–4 jawaban benar | +3 |
| 5 atau lebih | +5 |

Tim yang tertinggal jauh pada posisi tali mendapatkan bonus comeback kecil sebesar 15%. Bonus ini tidak memberikan jawaban otomatis dan tidak menjamin kemenangan.

## Bank Soal

Bank soal berada di `questions.js` dan saat ini berisi **331 soal** dengan ID unik: 100 soal mudah, 200 soal sedang, dan 31 soal sulit. Level mudah dan sedang dibagi rata ke seluruh kategori, masing-masing 10 dan 20 soal per kategori.

Kategori yang tersedia:

- Sejarah Indonesia
- Geografi Indonesia
- Budaya Nusantara
- Tokoh Nasional
- Pancasila dan Kenegaraan
- Alam Indonesia
- Bahasa Indonesia
- Kuliner Nusantara
- Seni
- Olahraga

Pilihan tingkat kesulitan:

- Mudah
- Sedang
- Sulit
- Campuran

Setiap pertanyaan menggunakan struktur berikut:

```js
{
  id: "history-001",
  question: "Pertanyaan...",
  options: ["A", "B", "C", "D"],
  correctAnswer: 0,
  category: "history",
  difficulty: 1,
  explanation: "Penjelasan jawaban."
}
```

Nilai `correctAnswer` menggunakan indeks `0–3`, sedangkan `difficulty` menggunakan nilai:

- `1` untuk mudah
- `2` untuk sedang
- `3` untuk sulit

Pada mode Campuran, kedua tim mendapat urutan tingkat kesulitan yang sama sehingga persentase bobotnya identik pada setiap ronde. Soal di dalam setiap tingkat kesulitan dan posisi pilihan A/B/C/D tetap diacak secara independen untuk tiap tim pada awal pertandingan. Dalam satu sesi, soal tidak pernah berulang pada tim yang sama. Tim lawan tetap dapat menerima soal yang pernah muncul di tim sebelah. Jika seluruh soal yang cocok dengan filter telah habis, panel tim berhenti tanpa mengulang soal sampai waktu pertandingan selesai.

## Kondisi Selesai dan Hasil

Pertandingan berakhir hanya ketika timer pertandingan mencapai `00:00`.

Pemenang ditentukan berdasarkan skor tertinggi. Posisi tali berfungsi sebagai visualisasi dominasi permainan dan tidak menghentikan pertandingan sebelum waktunya.

Layar hasil menampilkan:

- Nama pemenang
- Papan skor kedua tim
- Jumlah jawaban benar dan salah
- Akurasi setiap tim
- Riwayat jawaban setiap tim
- Jawaban yang dipilih, jawaban yang benar, alasan benar atau salah, waktu menjawab, dan poin setiap soal

Pilihan setelah pertandingan:

- **Main Lagi** menggunakan pengaturan yang sama
- **Pertandingan Baru** membuka kembali konfigurasi tim

## Penyimpanan Pengaturan

Pengaturan berikut disimpan pada `localStorage` browser:

- Nama kedua tim
- Durasi pertandingan
- Waktu per soal
- Tingkat kesulitan

Game tidak menggunakan backend, akun, database, atau koneksi multiplayer daring.

## Target Tampilan

Game dioptimalkan untuk layar landscape 16:9:

- Laptop 1366 × 768
- Full HD 1920 × 1080
- Monitor atau proyektor 2K 2560 × 1440
- TV atau layar acara berukuran besar

Pada viewport yang terlalu sempit, game menampilkan pesan agar pengguna memakai layar landscape.

## Menjalankan Project

Tidak diperlukan proses build atau instalasi dependency.

### Membuka langsung

Buka `index.html` dengan browser modern.

### Menggunakan local server

Local server direkomendasikan selama pengembangan:

```bash
npx serve .
```

Kemudian buka alamat yang ditampilkan pada terminal.

## Struktur Project

```text
game-merdeka/
├── index.html      # Struktur layar, setup, countdown, dan hasil
├── style.css       # Layout responsif, arena, karakter, dan animasi
├── game.js         # State, timer, skor, pertanyaan, dan mesin permainan
├── questions.js    # Bank soal Indonesia
└── README.md       # Dokumentasi project
```

## Arsitektur Saat Ini

Project menggunakan:

- HTML5
- CSS responsif
- JavaScript tanpa framework
- `localStorage` untuk preferensi

State utama game mempunyai status:

```text
setup → countdown → playing → finished
```

Setiap tim menyimpan state sendiri, termasuk skor, combo, soal aktif, sisa waktu, jumlah jawaban benar/salah, dan progres pertanyaan.

## Catatan Pengembangan

- Jangan menambahkan simulasi AI untuk tim lawan.
- Pertahankan dua panel input manusia yang independen.
- Jangan membuat pemain menunggu lawan sebelum mendapat soal berikutnya.
- Kondisi kemenangan utama harus tetap berdasarkan skor saat timer pertandingan habis.
- Tombol jawaban harus tetap besar dan nyaman digunakan dari touchscreen.
- Gameplay harus muat dalam satu viewport tanpa scrolling.
- Gunakan transform untuk animasi agar tetap ringan pada layar besar.

## Pengembangan Mendatang

Arsitektur dapat dikembangkan untuk mendukung:

- Panel touchscreen pada perangkat terpisah
- Host screen atau spectator screen
- WebSocket dan room code
- QR join
- Paket soal khusus acara
- Efek suara dan kontrol mute
- Riwayat pertandingan dan leaderboard

Fitur tersebut belum menjadi bagian dari implementasi saat ini.

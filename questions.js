// questions.js

const indonesiaQuestions = [
  // =========================================================
  // SEJARAH INDONESIA
  // =========================================================

  {
    id: "history-001",
    question: "Pada tanggal berapa Indonesia memproklamasikan kemerdekaannya?",
    options: [
      "17 Agustus 1945",
      "18 Agustus 1945",
      "1 Juni 1945",
      "10 November 1945"
    ],
    correctAnswer: 0,
    category: "history",
    difficulty: 1,
    explanation: "Proklamasi Kemerdekaan Indonesia dibacakan pada 17 Agustus 1945."
  },

  {
    id: "history-002",
    question: "Siapa yang membacakan teks Proklamasi Kemerdekaan Indonesia?",
    options: [
      "Mohammad Hatta",
      "Soekarno",
      "Sutan Sjahrir",
      "Ahmad Soebardjo"
    ],
    correctAnswer: 1,
    category: "history",
    difficulty: 1,
    explanation: "Soekarno membacakan teks Proklamasi pada 17 Agustus 1945."
  },

  {
    id: "history-003",
    question: "Siapa yang mendampingi Soekarno saat Proklamasi Kemerdekaan Indonesia?",
    options: [
      "Mohammad Hatta",
      "Ki Hajar Dewantara",
      "Soepomo",
      "Mohammad Yamin"
    ],
    correctAnswer: 0,
    category: "history",
    difficulty: 1,
    explanation: "Soekarno dan Mohammad Hatta menandatangani teks Proklamasi atas nama bangsa Indonesia."
  },

  {
    id: "history-004",
    question: "Di kota manakah peristiwa Rengasdengklok terjadi?",
    options: [
      "Bandung",
      "Karawang",
      "Cirebon",
      "Bogor"
    ],
    correctAnswer: 1,
    category: "history",
    difficulty: 2,
    explanation: "Rengasdengklok berada di Kabupaten Karawang, Jawa Barat."
  },

  {
    id: "history-005",
    question: "Tanggal 10 November diperingati sebagai hari apa di Indonesia?",
    options: [
      "Hari Kebangkitan Nasional",
      "Hari Pahlawan",
      "Hari Sumpah Pemuda",
      "Hari Kesaktian Pancasila"
    ],
    correctAnswer: 1,
    category: "history",
    difficulty: 1,
    explanation: "Hari Pahlawan diperingati setiap 10 November."
  },

  {
    id: "history-006",
    question: "Sumpah Pemuda diikrarkan pada tahun berapa?",
    options: [
      "1908",
      "1928",
      "1942",
      "1945"
    ],
    correctAnswer: 1,
    category: "history",
    difficulty: 1,
    explanation: "Sumpah Pemuda diikrarkan pada 28 Oktober 1928."
  },

  {
    id: "history-007",
    question: "Organisasi Budi Utomo didirikan pada tahun berapa?",
    options: [
      "1908",
      "1912",
      "1928",
      "1945"
    ],
    correctAnswer: 0,
    category: "history",
    difficulty: 2,
    explanation: "Budi Utomo berdiri pada 20 Mei 1908."
  },

  {
    id: "history-008",
    question: "VOC merupakan kongsi dagang yang berasal dari negara mana?",
    options: [
      "Inggris",
      "Portugal",
      "Belanda",
      "Spanyol"
    ],
    correctAnswer: 2,
    category: "history",
    difficulty: 1,
    explanation: "VOC merupakan perusahaan dagang Belanda."
  },

  {
    id: "history-009",
    question: "VOC dibubarkan pada akhir tahun berapa?",
    options: [
      "1799",
      "1811",
      "1825",
      "1901"
    ],
    correctAnswer: 0,
    category: "history",
    difficulty: 3,
    explanation: "VOC secara resmi dibubarkan pada akhir tahun 1799."
  },

  {
    id: "history-010",
    question: "Perang Diponegoro berlangsung pada periode mana?",
    options: [
      "1800–1805",
      "1825–1830",
      "1845–1850",
      "1908–1912"
    ],
    correctAnswer: 1,
    category: "history",
    difficulty: 2,
    explanation: "Perang Diponegoro berlangsung dari 1825 hingga 1830."
  },

  // =========================================================
  // GEOGRAFI INDONESIA
  // =========================================================

  {
    id: "geography-001",
    question: "Danau Toba terletak di provinsi mana?",
    options: [
      "Sumatera Barat",
      "Sumatera Utara",
      "Aceh",
      "Riau"
    ],
    correctAnswer: 1,
    category: "geography",
    difficulty: 1,
    explanation: "Danau Toba berada di Provinsi Sumatera Utara."
  },

  {
    id: "geography-002",
    question: "Gunung Semeru berada di pulau mana?",
    options: [
      "Sumatra",
      "Jawa",
      "Sulawesi",
      "Bali"
    ],
    correctAnswer: 1,
    category: "geography",
    difficulty: 1,
    explanation: "Gunung Semeru berada di Jawa Timur, Pulau Jawa."
  },

  {
    id: "geography-003",
    question: "Pulau Komodo berada di provinsi mana?",
    options: [
      "Bali",
      "Nusa Tenggara Barat",
      "Nusa Tenggara Timur",
      "Maluku"
    ],
    correctAnswer: 2,
    category: "geography",
    difficulty: 2,
    explanation: "Pulau Komodo merupakan bagian dari Provinsi Nusa Tenggara Timur."
  },

  {
    id: "geography-004",
    question: "Sungai Kapuas berada di pulau mana?",
    options: [
      "Jawa",
      "Sumatra",
      "Kalimantan",
      "Sulawesi"
    ],
    correctAnswer: 2,
    category: "geography",
    difficulty: 1,
    explanation: "Sungai Kapuas mengalir di Kalimantan Barat."
  },

  {
    id: "geography-005",
    question: "Kota Yogyakarta berada di pulau mana?",
    options: [
      "Jawa",
      "Bali",
      "Lombok",
      "Sumatra"
    ],
    correctAnswer: 0,
    category: "geography",
    difficulty: 1,
    explanation: "Daerah Istimewa Yogyakarta berada di Pulau Jawa."
  },

  {
    id: "geography-006",
    question: "Selat Sunda memisahkan Pulau Jawa dengan pulau apa?",
    options: [
      "Kalimantan",
      "Sumatra",
      "Bali",
      "Sulawesi"
    ],
    correctAnswer: 1,
    category: "geography",
    difficulty: 1,
    explanation: "Selat Sunda berada di antara Pulau Jawa dan Sumatra."
  },

  {
    id: "geography-007",
    question: "Selat Bali memisahkan Pulau Bali dengan pulau apa?",
    options: [
      "Lombok",
      "Sumbawa",
      "Jawa",
      "Flores"
    ],
    correctAnswer: 2,
    category: "geography",
    difficulty: 2,
    explanation: "Selat Bali memisahkan Pulau Jawa dan Bali."
  },

  {
    id: "geography-008",
    question: "Kota Bukittinggi berada di provinsi mana?",
    options: [
      "Sumatera Utara",
      "Sumatera Selatan",
      "Sumatera Barat",
      "Jambi"
    ],
    correctAnswer: 2,
    category: "geography",
    difficulty: 2,
    explanation: "Bukittinggi berada di Provinsi Sumatera Barat."
  },

  {
    id: "geography-009",
    question: "Kepulauan Raja Ampat berada di wilayah Indonesia bagian mana?",
    options: [
      "Papua Barat Daya",
      "Jawa Timur",
      "Maluku Utara",
      "Sulawesi Utara"
    ],
    correctAnswer: 0,
    category: "geography",
    difficulty: 2,
    explanation: "Raja Ampat berada di Provinsi Papua Barat Daya."
  },

  {
    id: "geography-010",
    question: "Gunung Rinjani berada di pulau mana?",
    options: [
      "Bali",
      "Lombok",
      "Sumbawa",
      "Flores"
    ],
    correctAnswer: 1,
    category: "geography",
    difficulty: 2,
    explanation: "Gunung Rinjani terletak di Pulau Lombok, Nusa Tenggara Barat."
  },

  // =========================================================
  // BUDAYA NUSANTARA
  // =========================================================

  {
    id: "culture-001",
    question: "Rumah Gadang merupakan rumah adat dari daerah mana?",
    options: [
      "Sumatera Barat",
      "Aceh",
      "Riau",
      "Lampung"
    ],
    correctAnswer: 0,
    category: "culture",
    difficulty: 1,
    explanation: "Rumah Gadang merupakan rumah adat masyarakat Minangkabau di Sumatera Barat."
  },

  {
    id: "culture-002",
    question: "Tari Kecak berasal dari daerah mana?",
    options: [
      "Jawa Tengah",
      "Bali",
      "Aceh",
      "Papua"
    ],
    correctAnswer: 1,
    category: "culture",
    difficulty: 1,
    explanation: "Tari Kecak berasal dari Bali."
  },

  {
    id: "culture-003",
    question: "Tari Saman berasal dari daerah mana?",
    options: [
      "Aceh",
      "Bali",
      "Jawa Barat",
      "Kalimantan Selatan"
    ],
    correctAnswer: 0,
    category: "culture",
    difficulty: 1,
    explanation: "Tari Saman berasal dari tradisi masyarakat Gayo di Aceh."
  },

  {
    id: "culture-004",
    question: "Angklung merupakan alat musik tradisional yang berkembang kuat di daerah mana?",
    options: [
      "Jawa Barat",
      "Maluku",
      "Bali",
      "Papua"
    ],
    correctAnswer: 0,
    category: "culture",
    difficulty: 1,
    explanation: "Angklung sangat erat dengan tradisi Sunda di Jawa Barat."
  },

  {
    id: "culture-005",
    question: "Sasando merupakan alat musik tradisional dari daerah mana?",
    options: [
      "Nusa Tenggara Timur",
      "Sulawesi Selatan",
      "Sumatera Utara",
      "Kalimantan Barat"
    ],
    correctAnswer: 0,
    category: "culture",
    difficulty: 2,
    explanation: "Sasando berasal dari Pulau Rote, Nusa Tenggara Timur."
  },

  {
    id: "culture-006",
    question: "Honai merupakan rumah tradisional yang identik dengan wilayah mana?",
    options: [
      "Papua",
      "Bali",
      "Madura",
      "Lampung"
    ],
    correctAnswer: 0,
    category: "culture",
    difficulty: 1,
    explanation: "Honai merupakan rumah tradisional yang dikenal dari wilayah pegunungan Papua."
  },

  {
    id: "culture-007",
    question: "Tongkonan merupakan rumah adat masyarakat apa?",
    options: [
      "Minangkabau",
      "Toraja",
      "Betawi",
      "Sasak"
    ],
    correctAnswer: 1,
    category: "culture",
    difficulty: 2,
    explanation: "Tongkonan merupakan rumah adat masyarakat Toraja di Sulawesi Selatan."
  },

  {
    id: "culture-008",
    question: "Wayang kulit berkembang sangat kuat dalam kebudayaan daerah mana?",
    options: [
      "Jawa",
      "Papua",
      "Maluku",
      "Nusa Tenggara Timur"
    ],
    correctAnswer: 0,
    category: "culture",
    difficulty: 1,
    explanation: "Wayang kulit merupakan salah satu tradisi pertunjukan penting dalam budaya Jawa."
  },

  // =========================================================
  // TOKOH NASIONAL
  // =========================================================

  {
    id: "figure-001",
    question: "Siapa yang dikenal sebagai Bapak Pendidikan Nasional?",
    options: [
      "Ki Hajar Dewantara",
      "Mohammad Hatta",
      "Tan Malaka",
      "Soepomo"
    ],
    correctAnswer: 0,
    category: "national_figure",
    difficulty: 1,
    explanation: "Ki Hajar Dewantara dikenal sebagai Bapak Pendidikan Nasional."
  },

  {
    id: "figure-002",
    question: "Siapa Wakil Presiden pertama Republik Indonesia?",
    options: [
      "Sutan Sjahrir",
      "Mohammad Hatta",
      "Adam Malik",
      "Soepomo"
    ],
    correctAnswer: 1,
    category: "national_figure",
    difficulty: 1,
    explanation: "Mohammad Hatta adalah Wakil Presiden pertama Republik Indonesia."
  },

  {
    id: "figure-003",
    question: "Pangeran Diponegoro terkenal karena memimpin perang melawan pemerintahan kolonial apa?",
    options: [
      "Belanda",
      "Inggris",
      "Portugal",
      "Jepang"
    ],
    correctAnswer: 0,
    category: "national_figure",
    difficulty: 1,
    explanation: "Pangeran Diponegoro memimpin perang melawan pemerintah kolonial Belanda."
  },

  {
    id: "figure-004",
    question: "R.A. Kartini berasal dari daerah mana?",
    options: [
      "Jepara",
      "Bandung",
      "Surabaya",
      "Padang"
    ],
    correctAnswer: 0,
    category: "national_figure",
    difficulty: 2,
    explanation: "R.A. Kartini lahir di Jepara."
  },

  {
    id: "figure-005",
    question: "Jenderal Sudirman dikenal sebagai tokoh utama dalam bidang apa?",
    options: [
      "Kesusastraan",
      "Perjuangan militer",
      "Pendidikan",
      "Perdagangan"
    ],
    correctAnswer: 1,
    category: "national_figure",
    difficulty: 1,
    explanation: "Jenderal Sudirman merupakan Panglima Besar Tentara Nasional Indonesia."
  },

  {
    id: "figure-006",
    question: "Cut Nyak Dhien merupakan pahlawan yang berasal dari daerah mana?",
    options: [
      "Aceh",
      "Banten",
      "Bali",
      "Sulawesi Selatan"
    ],
    correctAnswer: 0,
    category: "national_figure",
    difficulty: 1,
    explanation: "Cut Nyak Dhien merupakan tokoh perjuangan dari Aceh."
  },

  // =========================================================
  // PANCASILA & KENEGARAAN
  // =========================================================

  {
    id: "state-001",
    question: "Berapa jumlah sila dalam Pancasila?",
    options: [
      "3",
      "4",
      "5",
      "6"
    ],
    correctAnswer: 2,
    category: "state",
    difficulty: 1,
    explanation: "Pancasila terdiri atas lima sila."
  },

  {
    id: "state-002",
    question: "Apa semboyan negara Indonesia?",
    options: [
      "Tut Wuri Handayani",
      "Bhinneka Tunggal Ika",
      "Merdeka atau Mati",
      "Jalesveva Jayamahe"
    ],
    correctAnswer: 1,
    category: "state",
    difficulty: 1,
    explanation: "Semboyan negara Indonesia adalah Bhinneka Tunggal Ika."
  },

  {
    id: "state-003",
    question: "Apa lambang negara Republik Indonesia?",
    options: [
      "Harimau Sumatra",
      "Garuda Pancasila",
      "Burung Cenderawasih",
      "Elang Jawa"
    ],
    correctAnswer: 1,
    category: "state",
    difficulty: 1,
    explanation: "Lambang negara Indonesia adalah Garuda Pancasila."
  },

  {
    id: "state-004",
    question: "Apa warna bendera nasional Indonesia?",
    options: [
      "Merah dan putih",
      "Merah dan biru",
      "Putih dan hijau",
      "Merah dan kuning"
    ],
    correctAnswer: 0,
    category: "state",
    difficulty: 1,
    explanation: "Bendera Indonesia terdiri atas warna merah dan putih."
  },

  {
    id: "state-005",
    question: "Sila pertama Pancasila berbunyi apa?",
    options: [
      "Kemanusiaan yang Adil dan Beradab",
      "Ketuhanan Yang Maha Esa",
      "Persatuan Indonesia",
      "Keadilan Sosial bagi Seluruh Rakyat Indonesia"
    ],
    correctAnswer: 1,
    category: "state",
    difficulty: 1,
    explanation: "Sila pertama adalah Ketuhanan Yang Maha Esa."
  },

  {
    id: "state-006",
    question: "UUD 1945 merupakan singkatan dari apa?",
    options: [
      "Undang-Undang Dasar 1945",
      "Undang-Undang Daerah 1945",
      "Undang-Undang Demokrasi 1945",
      "Undang-Undang Dasar Negara 1945"
    ],
    correctAnswer: 0,
    category: "state",
    difficulty: 1,
    explanation: "UUD adalah singkatan dari Undang-Undang Dasar."
  },

  // =========================================================
  // ALAM INDONESIA
  // =========================================================

  {
    id: "nature-001",
    question: "Komodo secara alami dapat ditemukan di wilayah Indonesia mana?",
    options: [
      "Nusa Tenggara Timur",
      "Jawa Barat",
      "Sumatera Selatan",
      "Kalimantan Utara"
    ],
    correctAnswer: 0,
    category: "nature",
    difficulty: 1,
    explanation: "Habitat alami komodo berada di wilayah Nusa Tenggara Timur."
  },

  {
    id: "nature-002",
    question: "Orangutan Indonesia secara alami hidup terutama di pulau mana?",
    options: [
      "Jawa dan Bali",
      "Sumatra dan Kalimantan",
      "Sulawesi dan Flores",
      "Bali dan Lombok"
    ],
    correctAnswer: 1,
    category: "nature",
    difficulty: 1,
    explanation: "Populasi orangutan Indonesia hidup di Sumatra dan Kalimantan."
  },

  {
    id: "nature-003",
    question: "Burung cenderawasih sangat identik dengan wilayah Indonesia mana?",
    options: [
      "Papua",
      "Jawa",
      "Sumatra",
      "Bali"
    ],
    correctAnswer: 0,
    category: "nature",
    difficulty: 1,
    explanation: "Cenderawasih sangat dikenal sebagai fauna khas Papua."
  },

  {
    id: "nature-004",
    question: "Rafflesia arnoldii terkenal karena memiliki bagian bunga yang sangat besar. Bunga ini banyak diasosiasikan dengan pulau apa?",
    options: [
      "Sumatra",
      "Bali",
      "Madura",
      "Lombok"
    ],
    correctAnswer: 0,
    category: "nature",
    difficulty: 2,
    explanation: "Rafflesia arnoldii ditemukan di hutan-hutan Sumatra."
  },

  {
    id: "nature-005",
    question: "Badak Jawa memiliki populasi liar yang tersisa terutama di taman nasional mana?",
    options: [
      "Taman Nasional Ujung Kulon",
      "Taman Nasional Bromo Tengger Semeru",
      "Taman Nasional Komodo",
      "Taman Nasional Bunaken"
    ],
    correctAnswer: 0,
    category: "nature",
    difficulty: 2,
    explanation: "Populasi badak Jawa liar bertahan di Taman Nasional Ujung Kulon."
  },

  {
    id: "nature-006",
    question: "Taman Nasional Bunaken terkenal terutama karena kekayaan ekosistem apa?",
    options: [
      "Gurun",
      "Terumbu karang dan laut",
      "Hutan mangrove saja",
      "Padang rumput"
    ],
    correctAnswer: 1,
    category: "nature",
    difficulty: 1,
    explanation: "Bunaken terkenal dengan keanekaragaman hayati laut dan terumbu karangnya."
  },

  // =========================================================
  // BAHASA INDONESIA
  // =========================================================

  {
    id: "language-001",
    question: "Manakah bentuk baku yang benar?",
    options: [
      "Aktifitas",
      "Aktivitas",
      "Aktifitaz",
      "Aktivitaz"
    ],
    correctAnswer: 1,
    category: "language",
    difficulty: 1,
    explanation: "Bentuk baku menurut bahasa Indonesia adalah aktivitas."
  },

  {
    id: "language-002",
    question: "Manakah bentuk baku yang benar?",
    options: [
      "Resiko",
      "Risiko",
      "Riziko",
      "Resikho"
    ],
    correctAnswer: 1,
    category: "language",
    difficulty: 1,
    explanation: "Bentuk baku yang benar adalah risiko."
  },

  {
    id: "language-003",
    question: "Antonim dari kata 'optimis' adalah...",
    options: [
      "Aktif",
      "Pesimis",
      "Realistis",
      "Dinamis"
    ],
    correctAnswer: 1,
    category: "language",
    difficulty: 1,
    explanation: "Lawan kata optimis adalah pesimis."
  },

  {
    id: "language-004",
    question: "Sinonim yang paling dekat dengan kata 'cerdas' adalah...",
    options: [
      "Pandai",
      "Lambat",
      "Bingung",
      "Malas"
    ],
    correctAnswer: 0,
    category: "language",
    difficulty: 1,
    explanation: "Pandai memiliki makna yang dekat dengan cerdas."
  },

  {
    id: "language-005",
    question: "Kata tanya yang digunakan untuk menanyakan alasan adalah...",
    options: [
      "Siapa",
      "Kapan",
      "Mengapa",
      "Di mana"
    ],
    correctAnswer: 2,
    category: "language",
    difficulty: 1,
    explanation: "Mengapa digunakan untuk menanyakan sebab atau alasan."
  },

  {
    id: "language-006",
    question: "Manakah penulisan kata depan yang benar?",
    options: [
      "dirumah",
      "di rumah",
      "diRumah",
      "d'i rumah"
    ],
    correctAnswer: 1,
    category: "language",
    difficulty: 1,
    explanation: "Kata depan 'di' yang menunjukkan tempat ditulis terpisah."
  },

  // =========================================================
  // KULINER NUSANTARA
  // =========================================================

  {
    id: "culinary-001",
    question: "Rendang berasal dari tradisi kuliner daerah mana?",
    options: [
      "Minangkabau",
      "Betawi",
      "Sunda",
      "Madura"
    ],
    correctAnswer: 0,
    category: "culinary",
    difficulty: 1,
    explanation: "Rendang berasal dari tradisi kuliner Minangkabau."
  },

  {
    id: "culinary-002",
    question: "Pempek merupakan makanan khas daerah mana?",
    options: [
      "Palembang",
      "Padang",
      "Bandung",
      "Manado"
    ],
    correctAnswer: 0,
    category: "culinary",
    difficulty: 1,
    explanation: "Pempek merupakan makanan khas Palembang."
  },

  {
    id: "culinary-003",
    question: "Gudeg merupakan makanan yang sangat identik dengan kota mana?",
    options: [
      "Semarang",
      "Yogyakarta",
      "Bandung",
      "Makassar"
    ],
    correctAnswer: 1,
    category: "culinary",
    difficulty: 1,
    explanation: "Gudeg sangat identik dengan Yogyakarta."
  },

  {
    id: "culinary-004",
    question: "Coto Makassar berasal dari daerah mana?",
    options: [
      "Sulawesi Selatan",
      "Sulawesi Utara",
      "Jawa Timur",
      "Bali"
    ],
    correctAnswer: 0,
    category: "culinary",
    difficulty: 1,
    explanation: "Coto Makassar berasal dari Makassar, Sulawesi Selatan."
  },

  {
    id: "culinary-005",
    question: "Papeda merupakan makanan berbahan dasar utama apa?",
    options: [
      "Beras",
      "Jagung",
      "Sagu",
      "Kedelai"
    ],
    correctAnswer: 2,
    category: "culinary",
    difficulty: 2,
    explanation: "Papeda dibuat dari sagu."
  },

  {
    id: "culinary-006",
    question: "Rawon merupakan makanan khas yang sangat identik dengan provinsi mana?",
    options: [
      "Jawa Timur",
      "Jawa Barat",
      "Banten",
      "Lampung"
    ],
    correctAnswer: 0,
    category: "culinary",
    difficulty: 1,
    explanation: "Rawon sangat identik dengan kuliner Jawa Timur."
  },

  // =========================================================
  // SENI & MUSIK
  // =========================================================

  {
    id: "art-001",
    question: "Lagu 'Indonesia Raya' diciptakan oleh siapa?",
    options: [
      "Ismail Marzuki",
      "W.R. Supratman",
      "Kusbini",
      "C. Simanjuntak"
    ],
    correctAnswer: 1,
    category: "art",
    difficulty: 1,
    explanation: "Indonesia Raya diciptakan oleh Wage Rudolf Supratman."
  },

  {
    id: "art-002",
    question: "Gamelan merupakan ansambel musik tradisional yang berkembang kuat terutama di daerah mana?",
    options: [
      "Jawa dan Bali",
      "Papua dan Maluku",
      "Aceh dan Riau",
      "Kalimantan dan Papua"
    ],
    correctAnswer: 0,
    category: "art",
    difficulty: 1,
    explanation: "Tradisi gamelan berkembang kuat terutama di Jawa dan Bali."
  },

  {
    id: "art-003",
    question: "Kolintang merupakan alat musik tradisional yang terkenal dari daerah mana?",
    options: [
      "Sulawesi Utara",
      "Sumatera Barat",
      "Jawa Barat",
      "Nusa Tenggara Barat"
    ],
    correctAnswer: 0,
    category: "art",
    difficulty: 2,
    explanation: "Kolintang merupakan alat musik tradisional Minahasa, Sulawesi Utara."
  },

  {
    id: "art-004",
    question: "Alat musik tifa sangat dikenal dalam kebudayaan wilayah mana?",
    options: [
      "Papua dan Maluku",
      "Jawa dan Bali",
      "Sumatra dan Jawa",
      "Kalimantan dan Lombok"
    ],
    correctAnswer: 0,
    category: "art",
    difficulty: 2,
    explanation: "Tifa dikenal dalam tradisi musik Papua dan Maluku."
  },

  // =========================================================
  // OLAHRAGA INDONESIA
  // =========================================================

  {
    id: "sport-001",
    question: "Cabang olahraga apa yang sangat identik dengan prestasi Indonesia di Olimpiade?",
    options: [
      "Bulu tangkis",
      "Hoki es",
      "Bisbol",
      "Rugbi"
    ],
    correctAnswer: 0,
    category: "sport",
    difficulty: 1,
    explanation: "Bulu tangkis merupakan salah satu cabang olahraga dengan sejarah prestasi internasional Indonesia yang kuat."
  },

  {
    id: "sport-002",
    question: "Istora Senayan berada di kota mana?",
    options: [
      "Surabaya",
      "Jakarta",
      "Bandung",
      "Medan"
    ],
    correctAnswer: 1,
    category: "sport",
    difficulty: 1,
    explanation: "Istora Gelora Bung Karno berada di Jakarta."
  },

  {
    id: "sport-003",
    question: "Pencak silat merupakan olahraga bela diri yang berasal dari kawasan budaya mana?",
    options: [
      "Nusantara",
      "Skandinavia",
      "Amerika Selatan",
      "Afrika Utara"
    ],
    correctAnswer: 0,
    category: "sport",
    difficulty: 1,
    explanation: "Pencak silat berkembang sebagai tradisi bela diri di kawasan Nusantara."
  },

  {
    id: "sport-004",
    question: "Stadion Gelora Bung Karno berada di kota mana?",
    options: [
      "Jakarta",
      "Solo",
      "Malang",
      "Makassar"
    ],
    correctAnswer: 0,
    category: "sport",
    difficulty: 1,
    explanation: "Kompleks Gelora Bung Karno berada di Jakarta."
  },

  // =========================================================
  // BONUS CAMPURAN
  // =========================================================

  {
    id: "general-001",
    question: "Batik merupakan warisan budaya yang sangat identik dengan negara mana?",
    options: [
      "Indonesia",
      "Thailand",
      "India",
      "Vietnam"
    ],
    correctAnswer: 0,
    category: "culture",
    difficulty: 1,
    explanation: "Batik merupakan salah satu warisan budaya Indonesia."
  },

  {
    id: "general-002",
    question: "Candi Borobudur berada di provinsi mana?",
    options: [
      "Jawa Tengah",
      "Jawa Timur",
      "Banten",
      "Jawa Barat"
    ],
    correctAnswer: 0,
    category: "history",
    difficulty: 1,
    explanation: "Candi Borobudur berada di Kabupaten Magelang, Jawa Tengah."
  },

  {
    id: "general-003",
    question: "Candi Prambanan berada di kawasan perbatasan provinsi Yogyakarta dan provinsi apa?",
    options: [
      "Jawa Tengah",
      "Jawa Barat",
      "Banten",
      "Jawa Timur"
    ],
    correctAnswer: 0,
    category: "history",
    difficulty: 2,
    explanation: "Kompleks Prambanan berada di kawasan perbatasan DI Yogyakarta dan Jawa Tengah."
  },

  {
    id: "general-004",
    question: "Monumen Nasional atau Monas berada di kota mana?",
    options: [
      "Bandung",
      "Jakarta",
      "Surabaya",
      "Semarang"
    ],
    correctAnswer: 1,
    category: "history",
    difficulty: 1,
    explanation: "Monumen Nasional berada di Jakarta."
  },

  {
    id: "general-005",
    question: "Kawah Ijen berada di provinsi mana?",
    options: [
      "Jawa Timur",
      "Jawa Barat",
      "Bali",
      "Nusa Tenggara Barat"
    ],
    correctAnswer: 0,
    category: "geography",
    difficulty: 2,
    explanation: "Kawah Ijen berada di Jawa Timur."
  },

  {
    id: "general-006",
    question: "Tanah Toraja berada di pulau mana?",
    options: [
      "Sumatra",
      "Sulawesi",
      "Jawa",
      "Kalimantan"
    ],
    correctAnswer: 1,
    category: "geography",
    difficulty: 1,
    explanation: "Wilayah Toraja berada di Sulawesi Selatan."
  },

  {
    id: "general-007",
    question: "Suku Baduy berasal dari provinsi mana?",
    options: [
      "Banten",
      "Jawa Timur",
      "Bali",
      "Lampung"
    ],
    correctAnswer: 0,
    category: "culture",
    difficulty: 2,
    explanation: "Masyarakat Baduy tinggal di wilayah Kabupaten Lebak, Banten."
  },

  {
    id: "general-008",
    question: "Suku Asmat berasal dari wilayah mana?",
    options: [
      "Papua",
      "Jawa Barat",
      "Sumatera Barat",
      "Kalimantan Selatan"
    ],
    correctAnswer: 0,
    category: "culture",
    difficulty: 1,
    explanation: "Suku Asmat berasal dari wilayah Papua."
  },

  {
    id: "general-009",
    question: "Masyarakat Minangkabau berasal terutama dari provinsi mana?",
    options: [
      "Sumatera Barat",
      "Sumatera Utara",
      "Sumatera Selatan",
      "Bengkulu"
    ],
    correctAnswer: 0,
    category: "culture",
    difficulty: 1,
    explanation: "Minangkabau merupakan kelompok etnis yang berasal terutama dari Sumatera Barat."
  },

  {
    id: "general-010",
    question: "Masyarakat Betawi secara historis identik dengan kota mana?",
    options: [
      "Jakarta",
      "Bandung",
      "Semarang",
      "Surabaya"
    ],
    correctAnswer: 0,
    category: "culture",
    difficulty: 1,
    explanation: "Budaya Betawi berkembang di wilayah Jakarta dan sekitarnya."
  },

  // =========================================================
  // PAKET TANTANGAN - LEVEL SULIT
  // =========================================================
  { id: "history-011", question: "Siapa ketua BPUPKI?", options: ["Radjiman Wedyodiningrat", "Soepomo", "Mohammad Yamin", "Ahmad Soebardjo"], correctAnswer: 0, category: "history", difficulty: 3, explanation: "BPUPKI diketuai oleh Dr. Radjiman Wedyodiningrat." },
  { id: "history-012", question: "Dalam Perjanjian Linggarjati, Belanda mengakui Republik Indonesia secara de facto atas wilayah mana?", options: ["Jawa, Madura, dan Sumatra", "Jawa dan Kalimantan", "Sumatra dan Sulawesi", "Seluruh bekas Hindia Belanda"], correctAnswer: 0, category: "history", difficulty: 3, explanation: "Pengakuan de facto dalam Linggarjati mencakup Jawa, Madura, dan Sumatra." },
  { id: "history-013", question: "Konferensi Meja Bundar yang menghasilkan pengakuan kedaulatan Indonesia diselenggarakan di kota mana?", options: ["Amsterdam", "Den Haag", "Rotterdam", "Leiden"], correctAnswer: 1, category: "history", difficulty: 3, explanation: "Konferensi Meja Bundar berlangsung di Den Haag, Belanda." },

  { id: "geography-011", question: "Selat yang dilalui garis Wallace dan memisahkan Bali dengan Lombok adalah...", options: ["Selat Alas", "Selat Lombok", "Selat Badung", "Selat Sape"], correctAnswer: 1, category: "geography", difficulty: 3, explanation: "Garis Wallace melewati Selat Lombok di antara Bali dan Lombok." },
  { id: "geography-012", question: "Sungai Mahakam bermuara ke perairan mana?", options: ["Laut Jawa", "Selat Makassar", "Laut Sulawesi", "Selat Karimata"], correctAnswer: 1, category: "geography", difficulty: 3, explanation: "Sungai Mahakam bermuara melalui deltanya ke Selat Makassar." },
  { id: "geography-013", question: "Pulau Rote merupakan bagian dari provinsi mana?", options: ["Nusa Tenggara Barat", "Nusa Tenggara Timur", "Maluku", "Maluku Utara"], correctAnswer: 1, category: "geography", difficulty: 3, explanation: "Pulau Rote berada di Kabupaten Rote Ndao, Nusa Tenggara Timur." },

  { id: "culture-009", question: "Tradisi Pela Gandong berasal dari wilayah budaya mana?", options: ["Maluku", "Minangkabau", "Toraja", "Banyuwangi"], correctAnswer: 0, category: "culture", difficulty: 3, explanation: "Pela Gandong adalah tradisi persaudaraan antarnegeri di Maluku." },
  { id: "culture-010", question: "Sistem organisasi pengairan tradisional masyarakat Bali disebut...", options: ["Sasi", "Subak", "Awig", "Pela"], correctAnswer: 1, category: "culture", difficulty: 3, explanation: "Subak adalah sistem pengelolaan irigasi tradisional masyarakat Bali." },
  { id: "culture-011", question: "Kain ulos merupakan bagian penting dari tradisi masyarakat...", options: ["Batak", "Dayak", "Sasak", "Baduy"], correctAnswer: 0, category: "culture", difficulty: 3, explanation: "Ulos merupakan kain tradisional yang penting dalam adat masyarakat Batak." },

  { id: "figure-007", question: "Tokoh yang mengganti namanya dari Ernest Douwes Dekker menjadi Danudirja Setiabudi adalah...", options: ["Ki Hajar Dewantara", "E.F.E. Douwes Dekker", "Tjipto Mangoenkoesoemo", "Sutan Sjahrir"], correctAnswer: 1, category: "national_figure", difficulty: 3, explanation: "Ernest Douwes Dekker kemudian menggunakan nama Danudirja Setiabudi." },
  { id: "figure-008", question: "Siapa pendiri Sakola Istri di Bandung pada 1904?", options: ["R.A. Kartini", "Dewi Sartika", "Maria Walanda Maramis", "Rohana Kudus"], correctAnswer: 1, category: "national_figure", difficulty: 3, explanation: "Dewi Sartika mendirikan Sakola Istri untuk pendidikan perempuan." },
  { id: "figure-009", question: "Semboyan 'Si Tou Timou Tumou Tou' lekat dengan tokoh nasional...", options: ["Sam Ratulangi", "Pattimura", "Sultan Hasanuddin", "Wolter Monginsidi"], correctAnswer: 0, category: "national_figure", difficulty: 3, explanation: "Semboyan Minahasa tersebut dikenal luas melalui Sam Ratulangi." },

  { id: "state-007", question: "Ketentuan bahwa Indonesia adalah negara hukum terdapat dalam UUD 1945 pasal...", options: ["Pasal 1 ayat (1)", "Pasal 1 ayat (2)", "Pasal 1 ayat (3)", "Pasal 2 ayat (1)"], correctAnswer: 2, category: "state", difficulty: 3, explanation: "Pasal 1 ayat (3) UUD 1945 menyatakan bahwa Indonesia adalah negara hukum." },
  { id: "state-008", question: "Lembaga yang berwenang mengubah dan menetapkan UUD menurut UUD 1945 adalah...", options: ["DPR", "MPR", "Mahkamah Konstitusi", "DPD"], correctAnswer: 1, category: "state", difficulty: 3, explanation: "Pasal 3 UUD 1945 memberi MPR kewenangan mengubah dan menetapkan UUD." },
  { id: "state-009", question: "Badan Pemeriksa Keuangan diatur terutama dalam UUD 1945 pasal...", options: ["23A", "23C", "23E", "24A"], correctAnswer: 2, category: "state", difficulty: 3, explanation: "Ketentuan utama mengenai BPK tercantum dalam Pasal 23E UUD 1945." },

  { id: "nature-007", question: "Burung maleo merupakan satwa endemik pulau...", options: ["Sumatra", "Sulawesi", "Kalimantan", "Jawa"], correctAnswer: 1, category: "nature", difficulty: 3, explanation: "Maleo merupakan burung endemik Sulawesi." },
  { id: "nature-008", question: "Anoa dataran rendah dan anoa pegunungan merupakan satwa endemik...", options: ["Sulawesi", "Papua", "Sumatra", "Jawa"], correctAnswer: 0, category: "nature", difficulty: 3, explanation: "Kedua jenis anoa merupakan fauna endemik Sulawesi." },
  { id: "nature-009", question: "Nama ilmiah bunga bangkai raksasa yang berasal dari Sumatra adalah...", options: ["Rafflesia arnoldii", "Amorphophallus titanum", "Nepenthes rafflesiana", "Anaphalis javanica"], correctAnswer: 1, category: "nature", difficulty: 3, explanation: "Bunga bangkai raksasa bernama ilmiah Amorphophallus titanum." },

  { id: "language-007", question: "Manakah kata ulang yang mengalami perubahan bunyi?", options: ["Anak-anak", "Rumah-rumah", "Sayur-mayur", "Buku-buku"], correctAnswer: 2, category: "language", difficulty: 3, explanation: "Sayur-mayur adalah kata ulang berubah bunyi." },
  { id: "language-008", question: "Manakah penulisan bentuk terikat yang tepat?", options: ["antar kota", "antar-kota", "antarkota", "antarKota"], correctAnswer: 2, category: "language", difficulty: 3, explanation: "Bentuk terikat antar- ditulis serangkai, sehingga bentuk yang tepat adalah antarkota." },
  { id: "language-009", question: "Kalimat yang menggunakan konjungsi intrakalimat dengan tepat adalah...", options: ["Ia rajin. Sedangkan adiknya malas.", "Ia rajin, sedangkan adiknya malas.", "Ia rajin sedangkan. Adiknya malas.", "Ia rajin; Sedangkan adiknya malas."], correctAnswer: 1, category: "language", difficulty: 3, explanation: "Konjungsi sedangkan menghubungkan dua klausa dalam satu kalimat dan didahului koma." },

  { id: "culinary-007", question: "Tempoyak dibuat melalui fermentasi bahan utama berupa...", options: ["Nangka", "Durian", "Singkong", "Kedelai"], correctAnswer: 1, category: "culinary", difficulty: 3, explanation: "Tempoyak adalah hasil fermentasi daging buah durian." },
  { id: "culinary-008", question: "Warna gelap dan cita rasa khas rawon terutama berasal dari bumbu...", options: ["Kemiri", "Kluwek", "Kapulaga", "Andaliman"], correctAnswer: 1, category: "culinary", difficulty: 3, explanation: "Kluwek memberikan warna gelap dan rasa khas pada rawon." },
  { id: "culinary-009", question: "Tinutuan adalah bubur khas dari daerah...", options: ["Ambon", "Manado", "Gorontalo", "Ternate"], correctAnswer: 1, category: "culinary", difficulty: 3, explanation: "Tinutuan dikenal sebagai bubur khas Manado." },

  { id: "art-005", question: "Lagu 'Rayuan Pulau Kelapa' diciptakan oleh...", options: ["Ismail Marzuki", "Kusbini", "Cornel Simanjuntak", "Gesang"], correctAnswer: 0, category: "art", difficulty: 3, explanation: "Rayuan Pulau Kelapa merupakan karya Ismail Marzuki." },
  { id: "art-006", question: "Tari Pakarena berasal dari provinsi...", options: ["Sulawesi Tengah", "Sulawesi Selatan", "Sulawesi Tenggara", "Sulawesi Utara"], correctAnswer: 1, category: "art", difficulty: 3, explanation: "Tari Pakarena berasal dari tradisi masyarakat Sulawesi Selatan." },
  { id: "art-007", question: "Talempong merupakan alat musik tradisional masyarakat...", options: ["Minangkabau", "Betawi", "Banjar", "Madura"], correctAnswer: 0, category: "art", difficulty: 3, explanation: "Talempong merupakan alat musik tradisional Minangkabau." },

  { id: "sport-005", question: "Pekan Olahraga Nasional pertama pada 1948 diselenggarakan di kota...", options: ["Jakarta", "Bandung", "Surakarta", "Surabaya"], correctAnswer: 2, category: "sport", difficulty: 3, explanation: "PON pertama diselenggarakan di Surakarta pada 1948." },
  { id: "sport-006", question: "Siapa peraih medali emas Olimpiade pertama bagi Indonesia?", options: ["Liem Swie King", "Susi Susanti", "Rudy Hartono", "Taufik Hidayat"], correctAnswer: 1, category: "sport", difficulty: 3, explanation: "Susi Susanti meraih emas tunggal putri pada Olimpiade Barcelona 1992 sebelum final tunggal putra." },
  { id: "sport-007", question: "Berapa jumlah pemain inti dalam satu regu sepak takraw untuk nomor regu?", options: ["Dua", "Tiga", "Empat", "Lima"], correctAnswer: 1, category: "sport", difficulty: 3, explanation: "Satu regu sepak takraw dimainkan oleh tiga pemain inti." }
];

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

// 100 soal tingkat sedang tambahan (10 soal per kategori).
// Format ringkas: id, pertanyaan, A, B, C, D, indeks jawaban, kategori, penjelasan.
const mediumQuestionRows = [
  ["medium-history-001","Organisasi Putera dipimpin oleh kelompok yang dikenal sebagai...","Tiga Serangkai","Empat Serangkai","Panitia Sembilan","Dwi Tunggal",1,"history","Putera dipimpin Empat Serangkai: Soekarno, Hatta, Ki Hajar Dewantara, dan K.H. Mas Mansyur."],
  ["medium-history-002","Siapa ketua PPKI?","Mohammad Hatta","Soekarno","Radjiman Wedyodiningrat","Soepomo",1,"history","PPKI diketuai oleh Soekarno."],
  ["medium-history-003","Kabinet pertama Republik Indonesia menggunakan sistem pemerintahan...","Parlementer","Presidensial","Federal","Monarki",1,"history","Kabinet pertama dibentuk dalam sistem presidensial."],
  ["medium-history-004","KNIP dibentuk untuk membantu tugas...","Presiden","Mahkamah Agung","BPK","Tentara Nasional",0,"history","KNIP dibentuk untuk membantu presiden sebelum lembaga perwakilan terbentuk."],
  ["medium-history-005","Serangan Umum 1 Maret 1949 berlangsung di...","Surabaya","Bandung","Yogyakarta","Semarang",2,"history","Serangan Umum 1 Maret 1949 berlangsung di Yogyakarta."],
  ["medium-history-006","Peristiwa Bandung Lautan Api terjadi pada tahun...","1945","1946","1947","1948",1,"history","Bandung Lautan Api terjadi pada 23 Maret 1946."],
  ["medium-history-007","Tokoh yang memimpin pasukan Indonesia dalam Palagan Ambarawa adalah...","A.H. Nasution","Sudirman","Gatot Subroto","Ahmad Yani",1,"history","Palagan Ambarawa dipimpin Kolonel Sudirman."],
  ["medium-history-008","Indische Partij didirikan oleh kelompok yang disebut...","Empat Serangkai","Tiga Serangkai","Panitia Sembilan","Angkatan 45",1,"history","Pendiri Indische Partij dikenal sebagai Tiga Serangkai."],
  ["medium-history-009","Perguruan Taman Siswa didirikan di kota...","Bandung","Surabaya","Yogyakarta","Jakarta",2,"history","Ki Hajar Dewantara mendirikan Taman Siswa di Yogyakarta."],
  ["medium-history-010","Nama Jepang untuk BPUPKI adalah...","Dokuritsu Junbi Inkai","Dokuritsu Junbi Cosakai","Gunseikanbu","Heiho",1,"history","BPUPKI disebut Dokuritsu Junbi Cosakai."],

  ["medium-geography-001","Pulau Weh berada di provinsi...","Aceh","Sumatera Utara","Riau","Kepulauan Riau",0,"geography","Pulau Weh berada di Aceh dan dikenal dengan Kota Sabang."],
  ["medium-geography-002","Pulau Miangas termasuk wilayah provinsi...","Maluku Utara","Sulawesi Utara","Gorontalo","Papua Barat Daya",1,"geography","Miangas merupakan bagian dari Sulawesi Utara."],
  ["medium-geography-003","Sungai Barito mengalir terutama di wilayah...","Kalimantan Selatan","Kalimantan Barat","Kalimantan Timur","Kalimantan Utara",0,"geography","Sungai Barito mengalir ke bagian selatan Kalimantan."],
  ["medium-geography-004","Sungai Mamberamo berada di pulau...","Sulawesi","Papua","Sumatra","Kalimantan",1,"geography","Mamberamo merupakan salah satu sungai utama di Papua."],
  ["medium-geography-005","Gunung Kerinci berada di rangkaian pegunungan...","Meratus","Bukit Barisan","Jayawijaya","Kendeng",1,"geography","Gunung Kerinci merupakan bagian dari Bukit Barisan."],
  ["medium-geography-006","Pegunungan Jayawijaya berada di wilayah...","Papua","Maluku","Sulawesi","Nusa Tenggara",0,"geography","Pegunungan Jayawijaya berada di Papua."],
  ["medium-geography-007","Sungai Mahakam berada di provinsi...","Kalimantan Barat","Kalimantan Tengah","Kalimantan Timur","Kalimantan Selatan",2,"geography","Sungai Mahakam berada di Kalimantan Timur."],
  ["medium-geography-008","Laut Banda dikelilingi oleh kepulauan di wilayah...","Maluku","Riau","Bangka Belitung","Nusa Tenggara Barat",0,"geography","Laut Banda terletak di kawasan Kepulauan Maluku."],
  ["medium-geography-009","Selat Karimata memisahkan Pulau Sumatra dengan...","Jawa","Sulawesi","Kalimantan","Bali",2,"geography","Selat Karimata berada di antara Sumatra dan Kalimantan."],
  ["medium-geography-010","Bengawan Solo bermuara di wilayah pesisir provinsi...","Banten","Jawa Barat","Jawa Tengah","Jawa Timur",3,"geography","Bengawan Solo bermuara di pesisir Jawa Timur."],

  ["medium-culture-001","Upacara Ngaben berasal dari tradisi masyarakat...","Bali","Sasak","Toraja","Tengger",0,"culture","Ngaben merupakan upacara kremasi dalam tradisi Hindu Bali."],
  ["medium-culture-002","Rambu Solo merupakan upacara adat masyarakat...","Minangkabau","Toraja","Dayak","Asmat",1,"culture","Rambu Solo adalah upacara kematian adat Toraja."],
  ["medium-culture-003","Tradisi Tabuik diselenggarakan di daerah...","Pariaman","Cirebon","Madura","Banjarmasin",0,"culture","Tabuik merupakan tradisi terkenal dari Pariaman, Sumatera Barat."],
  ["medium-culture-004","Tradisi Pasola berasal dari pulau...","Lombok","Sumba","Flores","Timor",1,"culture","Pasola merupakan tradisi masyarakat Sumba."],
  ["medium-culture-005","Karapan sapi merupakan tradisi dari...","Madura","Bali","Sumbawa","Minahasa",0,"culture","Karapan sapi sangat identik dengan Madura."],
  ["medium-culture-006","Tari Cakalele berasal dari kawasan budaya...","Maluku","Jawa Barat","Lampung","Kalimantan Barat",0,"culture","Cakalele merupakan tarian perang tradisional Maluku."],
  ["medium-culture-007","Reog berasal dari kabupaten...","Ponorogo","Banyuwangi","Jember","Kediri",0,"culture","Reog berasal dari Ponorogo, Jawa Timur."],
  ["medium-culture-008","Noken merupakan tas tradisional masyarakat...","Papua","Aceh","Bali","Betawi",0,"culture","Noken merupakan kerajinan tas tradisional Papua."],
  ["medium-culture-009","Mandau merupakan senjata tradisional masyarakat...","Dayak","Batak","Bugis","Sunda",0,"culture","Mandau dikenal sebagai senjata tradisional masyarakat Dayak."],
  ["medium-culture-010","Sasi merupakan aturan adat pengelolaan sumber daya yang dikenal di...","Maluku","Jawa","Sumatra Barat","Bali",0,"culture","Sasi dikenal di Maluku sebagai aturan adat pemanfaatan sumber daya."],

  ["medium-figure-001","Tjipto Mangoenkoesoemo merupakan salah satu pendiri...","Budi Utomo","Indische Partij","Sarekat Islam","Perhimpunan Indonesia",1,"national_figure","Tjipto merupakan anggota Tiga Serangkai pendiri Indische Partij."],
  ["medium-figure-002","Haji Agus Salim dikenal menonjol dalam bidang...","Diplomasi","Arsitektur","Kedokteran","Penerbangan",0,"national_figure","Agus Salim berperan besar dalam diplomasi Indonesia."],
  ["medium-figure-003","Julukan Si Jalak Harupat diberikan kepada...","Otto Iskandardinata","Djuanda Kartawidjaja","Mohammad Natsir","Iwa Kusumasumantri",0,"national_figure","Otto Iskandardinata dikenal sebagai Si Jalak Harupat."],
  ["medium-figure-004","Tokoh yang mendorong lahirnya Budi Utomo melalui gagasan dana pelajar adalah...","Wahidin Sudirohusodo","Cipto Mangunkusumo","Douwes Dekker","HOS Tjokroaminoto",0,"national_figure","Gagasan Wahidin Sudirohusodo mendorong lahirnya Budi Utomo."],
  ["medium-figure-005","Martha Christina Tiahahu merupakan pahlawan dari...","Maluku","Aceh","Bali","Sulawesi Selatan",0,"national_figure","Martha Christina Tiahahu berasal dari Maluku."],
  ["medium-figure-006","Nyi Ageng Serang berjuang dalam Perang...","Aceh","Diponegoro","Banjar","Padri",1,"national_figure","Nyi Ageng Serang turut berjuang dalam Perang Diponegoro."],
  ["medium-figure-007","Teuku Umar melawan kolonialisme Belanda di...","Aceh","Banten","Maluku","Bali",0,"national_figure","Teuku Umar merupakan pahlawan perjuangan Aceh."],
  ["medium-figure-008","Sultan Ageng Tirtayasa merupakan sultan dari kerajaan...","Banten","Mataram","Gowa","Ternate",0,"national_figure","Sultan Ageng Tirtayasa memimpin Kesultanan Banten."],
  ["medium-figure-009","Pangeran Antasari memimpin perlawanan rakyat...","Banjar","Minahasa","Madura","Lombok",0,"national_figure","Pangeran Antasari merupakan pemimpin Perang Banjar."],
  ["medium-figure-010","Frans Kaisiepo merupakan pahlawan nasional dari...","Papua","Maluku","Nusa Tenggara Timur","Sulawesi Utara",0,"national_figure","Frans Kaisiepo merupakan tokoh perjuangan dari Papua."],

  ["medium-state-001","Hari Lahir Pancasila diperingati setiap...","20 Mei","1 Juni","17 Agustus","18 Agustus",1,"state","Tanggal 1 Juni diperingati sebagai Hari Lahir Pancasila."],
  ["medium-state-002","UUD 1945 pertama kali disahkan pada tanggal...","17 Agustus 1945","18 Agustus 1945","22 Juni 1945","29 Agustus 1945",1,"state","PPKI mengesahkan UUD 1945 pada 18 Agustus 1945."],
  ["medium-state-003","Kekuasaan membentuk undang-undang dipegang oleh...","DPR","MPR","Mahkamah Agung","BPK",0,"state","Menurut UUD 1945, DPR memegang kekuasaan membentuk undang-undang."],
  ["medium-state-004","Lembaga yang menguji undang-undang terhadap UUD 1945 adalah...","Mahkamah Agung","Mahkamah Konstitusi","Komisi Yudisial","MPR",1,"state","Mahkamah Konstitusi berwenang menguji undang-undang terhadap UUD."],
  ["medium-state-005","Lembaga yang menjaga kehormatan dan perilaku hakim adalah...","Komisi Yudisial","Komisi Pemilihan Umum","BPK","DPD",0,"state","Komisi Yudisial memiliki tugas terkait kehormatan dan perilaku hakim."],
  ["medium-state-006","Lembaga yang memeriksa pengelolaan keuangan negara adalah...","BPK","DPR","Bank Indonesia","Mahkamah Agung",0,"state","BPK memeriksa pengelolaan dan tanggung jawab keuangan negara."],
  ["medium-state-007","Bahasa negara diatur dalam UUD 1945 Pasal...","35","36","36A","36B",1,"state","Pasal 36 menetapkan Bahasa Indonesia sebagai bahasa negara."],
  ["medium-state-008","Bendera negara diatur dalam UUD 1945 Pasal...","35","36","36A","37",0,"state","Pasal 35 menetapkan Sang Merah Putih sebagai bendera negara."],
  ["medium-state-009","Lambang negara Garuda Pancasila diatur dalam Pasal...","36","36A","36B","36C",1,"state","Lambang negara diatur dalam Pasal 36A UUD 1945."],
  ["medium-state-010","Lagu kebangsaan Indonesia Raya diatur dalam Pasal...","35","36A","36B","37",2,"state","Lagu kebangsaan diatur dalam Pasal 36B UUD 1945."],

  ["medium-nature-001","Jalak Bali merupakan satwa endemik pulau...","Jawa","Bali","Lombok","Flores",1,"nature","Jalak Bali merupakan burung endemik Bali."],
  ["medium-nature-002","Elang Jawa merupakan inspirasi visual bagi burung...","Garuda","Cenderawasih","Maleo","Rangkong",0,"nature","Elang Jawa sering dikaitkan dengan inspirasi visual Garuda."],
  ["medium-nature-003","Bekantan hidup alami terutama di pulau...","Sumatra","Kalimantan","Sulawesi","Papua",1,"nature","Bekantan merupakan primata khas Kalimantan."],
  ["medium-nature-004","Babirusa merupakan satwa asli wilayah...","Sulawesi","Jawa","Bali","Sumatra",0,"nature","Babirusa hidup alami di Sulawesi dan pulau-pulau sekitarnya."],
  ["medium-nature-005","Taman Nasional Ujung Kulon berada di provinsi...","Banten","Jawa Barat","Lampung","Bengkulu",0,"nature","Ujung Kulon berada di Provinsi Banten."],
  ["medium-nature-006","Taman Nasional Lorentz berada di wilayah...","Papua","Kalimantan","Sumatra","Maluku",0,"nature","Taman Nasional Lorentz berada di Papua."],
  ["medium-nature-007","Taman Nasional Way Kambas berada di provinsi...","Lampung","Jambi","Bengkulu","Sumatera Selatan",0,"nature","Way Kambas berada di Lampung."],
  ["medium-nature-008","Taman Nasional Tanjung Puting terkenal sebagai kawasan konservasi...","Komodo","Orangutan","Badak Jawa","Jalak Bali",1,"nature","Tanjung Puting dikenal sebagai kawasan konservasi orangutan."],
  ["medium-nature-009","Taman Nasional Bunaken berada di provinsi...","Sulawesi Utara","Sulawesi Tengah","Maluku Utara","Gorontalo",0,"nature","Bunaken berada di Sulawesi Utara."],
  ["medium-nature-010","Rangkong gading merupakan fauna yang banyak dikaitkan dengan pulau...","Kalimantan","Madura","Bali","Sumbawa",0,"nature","Rangkong gading merupakan salah satu fauna penting Kalimantan."],

  ["medium-language-001","Manakah bentuk baku yang benar?","Apotik","Apotek","Apothek","Apoték",1,"language","Bentuk baku yang benar adalah apotek."],
  ["medium-language-002","Manakah bentuk baku yang benar?","Ijin","Izin","Idzin","Ijzin",1,"language","Bentuk baku yang benar adalah izin."],
  ["medium-language-003","Manakah bentuk baku yang benar?","Obyek","Objek","Object","Objék",1,"language","Bentuk baku yang benar adalah objek."],
  ["medium-language-004","Manakah bentuk baku yang benar?","Praktek","Praktik","Praktekkan","Praktekh",1,"language","Bentuk baku yang benar adalah praktik."],
  ["medium-language-005","Manakah bentuk baku yang benar?","Analisa","Analisis","Analisisir","Analisys",1,"language","Bentuk baku yang benar adalah analisis."],
  ["medium-language-006","Manakah bentuk baku yang benar?","Sekedar","Sekadar","Sakadar","Skadar",1,"language","Bentuk baku yang benar adalah sekadar."],
  ["medium-language-007","Manakah bentuk baku yang benar?","Nafas","Napas","Nafaz","Naphas",1,"language","Bentuk baku yang benar adalah napas."],
  ["medium-language-008","Manakah bentuk baku yang benar?","Karir","Karier","Karirh","Career",1,"language","Bentuk baku yang benar adalah karier."],
  ["medium-language-009","Manakah bentuk baku yang benar?","Sistim","Sistem","System","Sistiem",1,"language","Bentuk baku yang benar adalah sistem."],
  ["medium-language-010","Manakah bentuk baku yang benar?","Antri","Antre","Anter","Antré",1,"language","Bentuk baku yang benar adalah antre."],

  ["medium-culinary-001","Soto Banjar berasal dari provinsi...","Kalimantan Selatan","Kalimantan Barat","Kalimantan Timur","Kalimantan Tengah",0,"culinary","Soto Banjar berasal dari Kalimantan Selatan."],
  ["medium-culinary-002","Ayam betutu merupakan makanan khas...","Bali","Lombok","Madura","Banten",0,"culinary","Ayam betutu merupakan kuliner khas Bali."],
  ["medium-culinary-003","Sate lilit sangat identik dengan kuliner...","Bali","Aceh","Betawi","Minang",0,"culinary","Sate lilit merupakan kuliner khas Bali."],
  ["medium-culinary-004","Bagea dibuat terutama dari bahan...","Sagu","Beras ketan","Singkong","Gandum",0,"culinary","Bagea adalah kue berbahan utama sagu."],
  ["medium-culinary-005","Kerak telor merupakan makanan khas masyarakat...","Betawi","Sunda","Madura","Banjar",0,"culinary","Kerak telor merupakan kuliner khas Betawi."],
  ["medium-culinary-006","Mi Aceh biasanya menggunakan mi bertekstur...","Tebal dan kuning","Tipis dan putih","Transparan","Datar tanpa warna",0,"culinary","Mi Aceh dikenal menggunakan mi kuning yang tebal."],
  ["medium-culinary-007","Pallubasa merupakan kuliner khas...","Makassar","Manado","Palu","Kendari",0,"culinary","Pallubasa merupakan hidangan khas Makassar."],
  ["medium-culinary-008","Seblak dikenal sebagai makanan khas daerah...","Bandung","Semarang","Madiun","Cirebon",0,"culinary","Seblak dikenal sebagai makanan khas Bandung, Jawa Barat."],
  ["medium-culinary-009","Rujak cingur sangat identik dengan kota...","Surabaya","Solo","Bogor","Serang",0,"culinary","Rujak cingur merupakan kuliner khas Surabaya."],
  ["medium-culinary-010","Serabi tradisional umumnya dibuat dari adonan berbahan dasar...","Tepung beras","Tepung sagu","Tepung jagung","Tepung kedelai",0,"culinary","Serabi tradisional umumnya dibuat dari tepung beras."],

  ["medium-art-001","Tari Jaipong berasal dari...","Jawa Barat","Jawa Tengah","Jawa Timur","Banten",0,"art","Jaipong berkembang di Jawa Barat."],
  ["medium-art-002","Tari Piring berasal dari provinsi...","Sumatera Barat","Sumatera Utara","Riau","Jambi",0,"art","Tari Piring berasal dari tradisi Minangkabau, Sumatera Barat."],
  ["medium-art-003","Tari Serimpi berkembang kuat di lingkungan keraton...","Yogyakarta dan Surakarta","Cirebon dan Banten","Ternate dan Tidore","Gowa dan Bone",0,"art","Serimpi berkembang dalam tradisi keraton Yogyakarta dan Surakarta."],
  ["medium-art-004","Tari Gending Sriwijaya berasal dari...","Sumatera Selatan","Sumatera Barat","Lampung","Bengkulu",0,"art","Gending Sriwijaya merupakan tari penyambutan dari Sumatera Selatan."],
  ["medium-art-005","Tari Gambyong berasal dari tradisi seni...","Jawa Tengah","Bali","Madura","Betawi",0,"art","Gambyong merupakan tari tradisional Jawa Tengah."],
  ["medium-art-006","Sampek atau sape merupakan alat musik petik masyarakat...","Dayak","Asmat","Betawi","Sasak",0,"art","Sape merupakan alat musik petik masyarakat Dayak."],
  ["medium-art-007","Aramba merupakan alat musik tradisional dari...","Nias","Bali","Madura","Ambon",0,"art","Aramba adalah alat musik tradisional dari Nias."],
  ["medium-art-008","Saluang merupakan alat musik tiup tradisional...","Minangkabau","Sunda","Banjar","Papua",0,"art","Saluang berasal dari tradisi Minangkabau."],
  ["medium-art-009","Gambang kromong berkembang dalam kebudayaan...","Betawi","Bugis","Bali","Batak",0,"art","Gambang kromong merupakan kesenian musik Betawi."],
  ["medium-art-010","Ludruk merupakan seni pertunjukan tradisional dari...","Jawa Timur","Jawa Barat","Bali","Lampung",0,"art","Ludruk berkembang sebagai seni pertunjukan Jawa Timur."],

  ["medium-sport-001","Satu gim bulu tangkis umumnya dimenangkan oleh pemain yang lebih dahulu mencapai...","15 poin","21 poin","25 poin","30 poin",1,"sport","Sistem rally point bulu tangkis menggunakan target 21 poin per gim."],
  ["medium-sport-002","Jumlah pemain satu tim bola voli yang berada di lapangan adalah...","Lima","Enam","Tujuh","Delapan",1,"sport","Satu tim bola voli memainkan enam pemain di lapangan."],
  ["medium-sport-003","Jumlah pemain satu tim bola basket yang berada di lapangan adalah...","Empat","Lima","Enam","Tujuh",1,"sport","Satu tim bola basket memainkan lima pemain di lapangan."],
  ["medium-sport-004","Jumlah pemain inti satu tim sepak bola adalah...","Sembilan","Sepuluh","Sebelas","Dua belas",2,"sport","Satu tim sepak bola terdiri dari sebelas pemain inti."],
  ["medium-sport-005","Jumlah pemain satu tim futsal yang berada di lapangan termasuk penjaga gawang adalah...","Empat","Lima","Enam","Tujuh",1,"sport","Satu tim futsal memainkan lima pemain termasuk penjaga gawang."],
  ["medium-sport-006","Pemain yang melakukan sepak mula dalam sepak takraw disebut...","Tekong","Smasher","Libero","Setter",0,"sport","Tekong adalah pemain yang melakukan sepak mula."],
  ["medium-sport-007","Piala Thomas merupakan kejuaraan beregu dunia untuk bulu tangkis...","Putra","Putri","Campuran","Junior",0,"sport","Piala Thomas adalah kejuaraan beregu putra dunia."],
  ["medium-sport-008","Piala Uber merupakan kejuaraan beregu dunia untuk bulu tangkis...","Putra","Putri","Campuran","Veteran",1,"sport","Piala Uber adalah kejuaraan beregu putri dunia."],
  ["medium-sport-009","Piala Sudirman merupakan kejuaraan bulu tangkis beregu...","Putra","Putri","Campuran","Junior",2,"sport","Piala Sudirman adalah kejuaraan beregu campuran dunia."],
  ["medium-sport-010","Dalam pencak silat, tempat pertandingan disebut...","Gelanggang","Velodrom","Diamond","Matras dojo",0,"sport","Arena pertandingan pencak silat lazim disebut gelanggang." ]
];

indonesiaQuestions.push(...mediumQuestionRows.map(([id, question, a, b, c, d, correctAnswer, category, explanation]) => ({
  id,
  question,
  options: [a, b, c, d],
  correctAnswer,
  category,
  difficulty: 2,
  explanation
})));

// Perluasan bank soal: melengkapi level mudah menjadi 100 soal
// (10 per kategori) dan level sedang menjadi 200 soal (20 per kategori).
const easyExpansionRows = [
  ["easy-history-001","Organisasi pergerakan nasional yang berdiri pada 20 Mei 1908 adalah...","Budi Utomo","Sarekat Islam","Indische Partij","Perhimpunan Indonesia",0,"history","Budi Utomo berdiri pada 20 Mei 1908."],
  ["easy-history-002","Sumpah Pemuda diikrarkan pada tanggal...","17 Agustus 1945","28 Oktober 1928","10 November 1945","1 Juni 1945",1,"history","Sumpah Pemuda diikrarkan pada 28 Oktober 1928."],
  ["easy-geography-001","Ibu kota Provinsi Sumatera Barat adalah...","Medan","Padang","Pekanbaru","Jambi",1,"geography","Ibu kota Sumatera Barat adalah Padang."],
  ["easy-geography-002","Ibu kota Provinsi Jawa Tengah adalah...","Bandung","Semarang","Surabaya","Serang",1,"geography","Ibu kota Jawa Tengah adalah Semarang."],
  ["easy-geography-003","Ibu kota Provinsi Sulawesi Selatan adalah...","Manado","Palu","Makassar","Kendari",2,"geography","Ibu kota Sulawesi Selatan adalah Makassar."],
  ["easy-geography-004","Danau Toba berada di Pulau...","Jawa","Sumatra","Sulawesi","Kalimantan",1,"geography","Danau Toba berada di Sumatera Utara, Pulau Sumatra."],
  ["easy-figure-001","Tokoh yang dijuluki Bapak Pendidikan Nasional adalah...","Ki Hajar Dewantara","Bung Tomo","Mohammad Yamin","Jenderal Sudirman",0,"national_figure","Ki Hajar Dewantara dikenal sebagai Bapak Pendidikan Nasional."],
  ["easy-figure-002","Pahlawan perempuan Cut Nyak Dien berasal dari...","Aceh","Bali","Maluku","Papua",0,"national_figure","Cut Nyak Dien adalah pahlawan dari Aceh."],
  ["easy-figure-003","Bung Tomo dikenal melalui perjuangannya dalam Pertempuran...","Bandung","Surabaya","Ambarawa","Medan",1,"national_figure","Bung Tomo membangkitkan semangat rakyat dalam Pertempuran Surabaya."],
  ["easy-figure-004","Pattimura merupakan pahlawan yang berasal dari...","Maluku","Lampung","Banten","Bengkulu",0,"national_figure","Pattimura berasal dari Maluku."],
  ["easy-figure-005","R.A. Kartini lahir di daerah...","Jepara","Bogor","Padang","Manado",0,"national_figure","R.A. Kartini lahir di Jepara."],
  ["easy-state-001","Mata uang resmi Indonesia adalah...","Ringgit","Rupiah","Baht","Peso",1,"state","Mata uang resmi Indonesia adalah rupiah."],
  ["easy-state-002","Garuda Pancasila merupakan ... negara Indonesia.","Lambang","Bendera","Lagu","Bahasa",0,"state","Garuda Pancasila adalah lambang negara Indonesia."],
  ["easy-state-003","Kepala negara Republik Indonesia adalah...","Presiden","Gubernur","Ketua DPR","Menteri",0,"state","Presiden merupakan kepala negara sekaligus kepala pemerintahan."],
  ["easy-state-004","Pemilihan umum merupakan pelaksanaan prinsip...","Monarki","Demokrasi","Kolonialisme","Feodalisme",1,"state","Pemilu merupakan salah satu pelaksanaan demokrasi."],
  ["easy-nature-001","Komodo termasuk kelompok hewan...","Reptil","Mamalia","Burung","Amfibi",0,"nature","Komodo adalah reptil terbesar yang masih hidup."],
  ["easy-nature-002","Burung cenderawasih sangat identik dengan wilayah...","Papua","Bali","Jawa","Madura",0,"nature","Cenderawasih dikenal sebagai burung khas Papua."],
  ["easy-nature-003","Orangutan hidup alami di Sumatra dan...","Kalimantan","Jawa","Bali","Sulawesi",0,"nature","Orangutan hidup alami di Sumatra dan Kalimantan."],
  ["easy-nature-004","Hutan mangrove umumnya tumbuh di kawasan...","Pesisir","Puncak gunung","Padang pasir","Gua kapur",0,"nature","Mangrove tumbuh di kawasan pesisir yang dipengaruhi pasang surut."],
  ["easy-nature-005","Rafflesia arnoldii dikenal karena ukuran ... yang sangat besar.","Bunganya","Daunnya","Batangnya","Buahnya",0,"nature","Rafflesia arnoldii dikenal memiliki bunga berukuran sangat besar."],
  ["easy-nature-006","Terumbu karang hidup terutama di ekosistem...","Laut","Gurun","Pegunungan","Sawah",0,"nature","Terumbu karang merupakan bagian dari ekosistem laut."],
  ["easy-language-001","Sinonim kata 'indah' adalah...","Elok","Buruk","Sempit","Lambat",0,"language","Elok memiliki arti yang sepadan dengan indah."],
  ["easy-language-002","Antonim kata 'tinggi' adalah...","Lebar","Rendah","Jauh","Besar",1,"language","Lawan kata tinggi adalah rendah."],
  ["easy-language-003","Kata tanya untuk menanyakan waktu adalah...","Siapa","Kapan","Mengapa","Bagaimana",1,"language","Kapan digunakan untuk menanyakan waktu."],
  ["easy-language-004","Penulisan keterangan tempat yang tepat adalah...","dirumah","di rumah","diRumah","di-rumah",1,"language","Kata depan di ditulis terpisah dari kata yang mengikutinya."],
  ["easy-culinary-001","Rendang paling dikenal sebagai makanan khas...","Sumatera Barat","Jawa Barat","Maluku","Kalimantan Barat",0,"culinary","Rendang merupakan kuliner khas Minangkabau, Sumatera Barat."],
  ["easy-culinary-002","Pempek merupakan makanan khas kota...","Palembang","Semarang","Denpasar","Balikpapan",0,"culinary","Pempek merupakan makanan khas Palembang."],
  ["easy-culinary-003","Gudeg dibuat terutama dari...","Nangka muda","Kentang","Jagung","Kedelai",0,"culinary","Gudeg dibuat terutama dari nangka muda."],
  ["easy-culinary-004","Papeda berbahan dasar...","Sagu","Gandum","Kacang hijau","Beras ketan",0,"culinary","Papeda adalah makanan berbahan sagu."],
  ["easy-culinary-005","Coto Makassar berasal dari...","Sulawesi Selatan","Sulawesi Utara","Sumatera Selatan","Kalimantan Selatan",0,"culinary","Coto Makassar adalah kuliner khas Sulawesi Selatan."],
  ["easy-art-001","Angklung dimainkan dengan cara...","Digoyangkan","Dipetik","Digesek","Ditiup",0,"art","Angklung menghasilkan bunyi ketika digoyangkan."],
  ["easy-art-002","Alat musik sasando dimainkan dengan cara...","Dipetik","Dipukul","Ditiup","Digesek",0,"art","Sasando merupakan alat musik petik."],
  ["easy-art-003","Tari Kecak berasal dari...","Bali","Aceh","Jambi","Banten",0,"art","Tari Kecak berasal dari Bali."],
  ["easy-art-004","Tari Saman berasal dari...","Aceh","Papua","Lampung","Maluku",0,"art","Tari Saman berasal dari Aceh."],
  ["easy-art-005","Wayang kulit dimainkan menggunakan boneka dari bahan...","Kulit","Kaca","Batu","Kertas",0,"art","Wayang kulit dibuat dari kulit yang dipahat."],
  ["easy-art-006","Kolintang berasal dari wilayah...","Sulawesi Utara","Jawa Timur","Sumatera Barat","Nusa Tenggara Barat",0,"art","Kolintang merupakan alat musik tradisional Sulawesi Utara."],
  ["easy-art-007","Lagu kebangsaan Indonesia adalah...","Indonesia Raya","Bagimu Negeri","Hari Merdeka","Rayuan Pulau Kelapa",0,"art","Indonesia Raya adalah lagu kebangsaan Indonesia."],
  ["easy-art-008","Gamelan banyak berkembang dalam budaya Jawa dan...","Bali","Papua","Maluku","Aceh",0,"art","Gamelan berkembang kuat dalam tradisi Jawa dan Bali."],
  ["easy-sport-001","Olahraga yang menggunakan raket dan kok adalah...","Bulu tangkis","Sepak bola","Renang","Pencak silat",0,"sport","Bulu tangkis dimainkan menggunakan raket dan kok."],
  ["easy-sport-002","Sepak bola dimainkan menggunakan bola yang terutama ditendang dengan...","Kaki","Tangan","Raket","Tongkat",0,"sport","Dalam sepak bola, pemain lapangan terutama memainkan bola dengan kaki."],
  ["easy-sport-003","Olahraga pencak silat berasal dari kawasan...","Nusantara","Eropa","Amerika","Australia",0,"sport","Pencak silat merupakan seni bela diri yang berakar di Nusantara."],
  ["easy-sport-004","Dalam bola basket, bola dimasukkan ke dalam...","Ring","Gawang","Lubang","Jaring voli",0,"sport","Tujuan bola basket adalah memasukkan bola ke ring lawan."],
  ["easy-sport-005","Olahraga yang dilakukan di kolam adalah...","Renang","Panahan","Bersepeda","Lari",0,"sport","Renang dilakukan di air, umumnya di kolam."],
  ["easy-sport-006","Induk organisasi sepak bola Indonesia disingkat...","PSSI","PBSI","PERBASI","PBVSI",0,"sport","PSSI adalah Persatuan Sepak Bola Seluruh Indonesia."]
];

const mediumExpansionRows = [
  ["medium2-history-001","Serangan Umum 1 Maret 1949 berlangsung di kota...","Yogyakarta","Surabaya","Bandung","Semarang",0,"history","Serangan Umum 1 Maret 1949 berlangsung di Yogyakarta."],
  ["medium2-history-002","Perjanjian yang ditandatangani di atas kapal USS Renville disebut...","Linggarjati","Renville","Roem-Royen","KMB",1,"history","Perjanjian Renville ditandatangani di atas USS Renville."],
  ["medium2-history-003","Agresi Militer Belanda II dimulai pada tahun...","1946","1947","1948","1949",2,"history","Agresi Militer Belanda II dimulai pada Desember 1948."],
  ["medium2-history-004","Pemerintahan Darurat Republik Indonesia dipimpin oleh...","Sjafruddin Prawiranegara","Sutan Sjahrir","Amir Sjarifuddin","Ali Sastroamidjojo",0,"history","PDRI dipimpin oleh Sjafruddin Prawiranegara."],
  ["medium2-history-005","Konferensi Asia Afrika 1955 diselenggarakan di...","Jakarta","Bandung","Bogor","Yogyakarta",1,"history","Konferensi Asia Afrika 1955 berlangsung di Bandung."],
  ["medium2-history-006","Deklarasi Djuanda diumumkan pada tahun...","1949","1955","1957","1960",2,"history","Deklarasi Djuanda diumumkan pada 13 Desember 1957."],
  ["medium2-geography-001","Ibu kota Provinsi Kalimantan Selatan adalah...","Samarinda","Banjarbaru","Palangka Raya","Pontianak",1,"geography","Ibu kota Kalimantan Selatan adalah Banjarbaru."],
  ["medium2-geography-002","Pegunungan Meratus membentang terutama di provinsi...","Kalimantan Selatan","Kalimantan Barat","Kalimantan Utara","Kalimantan Timur",0,"geography","Pegunungan Meratus membentang terutama di Kalimantan Selatan."],
  ["medium2-geography-003","Selat Sunda memisahkan Pulau Jawa dan...","Bali","Sumatra","Kalimantan","Madura",1,"geography","Selat Sunda berada di antara Jawa dan Sumatra."],
  ["medium2-geography-004","Sungai Kapuas mengalir di provinsi...","Kalimantan Barat","Kalimantan Timur","Kalimantan Selatan","Kalimantan Utara",0,"geography","Sungai Kapuas mengalir di Kalimantan Barat."],
  ["medium2-culture-001","Upacara Rambu Solo merupakan tradisi masyarakat...","Toraja","Baduy","Sasak","Asmat",0,"culture","Rambu Solo adalah upacara kematian adat Toraja."],
  ["medium2-culture-002","Tradisi lompat batu Fahombo berasal dari...","Nias","Madura","Flores","Seram",0,"culture","Fahombo merupakan tradisi masyarakat Nias."],
  ["medium2-culture-003","Sistem kekerabatan Minangkabau mengikuti garis...","Ibu","Ayah","Kakak","Adik",0,"culture","Masyarakat Minangkabau menganut sistem matrilineal."],
  ["medium2-culture-004","Rumah adat Tongkonan berasal dari masyarakat...","Toraja","Betawi","Minahasa","Melayu",0,"culture","Tongkonan adalah rumah adat Toraja."],
  ["medium2-culture-005","Tradisi karapan sapi berasal dari Pulau...","Madura","Bali","Lombok","Nias",0,"culture","Karapan sapi merupakan tradisi khas Madura."],
  ["medium2-culture-006","Sasi adalah kearifan lokal pengelolaan sumber daya yang dikenal di...","Maluku","Banten","Jawa Tengah","Sumatera Barat",0,"culture","Sasi dikenal dalam masyarakat Maluku dan wilayah sekitarnya."],
  ["medium2-culture-007","Rumah Gadang memiliki bentuk atap yang menyerupai...","Tanduk kerbau","Sayap burung","Perahu layar","Gunung berapi",0,"culture","Atap gonjong Rumah Gadang menyerupai tanduk kerbau."],
  ["medium2-figure-001","Tokoh pendiri Taman Siswa adalah...","Ki Hajar Dewantara","Dewi Sartika","R.A. Kartini","Ahmad Dahlan",0,"national_figure","Ki Hajar Dewantara mendirikan Perguruan Taman Siswa."],
  ["medium2-figure-002","Pahlawan yang dijuluki Ayam Jantan dari Timur adalah...","Sultan Hasanuddin","Pattimura","Pangeran Diponegoro","Tuanku Imam Bonjol",0,"national_figure","Sultan Hasanuddin dijuluki Ayam Jantan dari Timur."],
  ["medium2-figure-003","Nama asli Pattimura adalah...","Thomas Matulessy","Wage Rudolf Supratman","Douwes Dekker","Teuku Umar",0,"national_figure","Pattimura bernama asli Thomas Matulessy."],
  ["medium2-figure-004","Tokoh emansipasi perempuan dari Minahasa adalah...","Maria Walanda Maramis","Rohana Kudus","Dewi Sartika","Cut Meutia",0,"national_figure","Maria Walanda Maramis merupakan pelopor kemajuan perempuan dari Minahasa."],
  ["medium2-figure-005","Jenderal Sudirman terpilih sebagai Panglima Besar TKR pada tahun...","1945","1946","1947","1948",0,"national_figure","Sudirman terpilih sebagai Panglima Besar pada 1945."],
  ["medium2-figure-006","Pendiri Muhammadiyah adalah...","K.H. Ahmad Dahlan","K.H. Hasyim Asy'ari","H.O.S. Tjokroaminoto","Agus Salim",0,"national_figure","K.H. Ahmad Dahlan mendirikan Muhammadiyah."],
  ["medium2-figure-007","Pendiri Nahdlatul Ulama yang dikenal sebagai Rais Akbar adalah...","K.H. Hasyim Asy'ari","K.H. Ahmad Dahlan","Buya Hamka","Wahid Hasyim",0,"national_figure","K.H. Hasyim Asy'ari merupakan pendiri dan Rais Akbar NU."],
  ["medium2-figure-008","Rohana Kudus dikenal sebagai pelopor jurnalis perempuan dari...","Sumatera Barat","Jawa Barat","Sulawesi Selatan","Maluku",0,"national_figure","Rohana Kudus berasal dari Sumatera Barat."],
  ["medium2-figure-009","Pahlawan nasional Sisingamangaraja XII berasal dari wilayah...","Tapanuli","Minahasa","Banten","Madura",0,"national_figure","Sisingamangaraja XII memimpin perjuangan di Tapanuli."],
  ["medium2-state-001","Sila kedua Pancasila berbunyi...","Kemanusiaan yang adil dan beradab","Persatuan Indonesia","Keadilan sosial bagi seluruh rakyat Indonesia","Ketuhanan Yang Maha Esa",0,"state","Sila kedua adalah Kemanusiaan yang adil dan beradab."],
  ["medium2-state-002","Jumlah provinsi yang diwakili setiap anggota DPD tidak boleh berbeda karena DPD mewakili...","Daerah","Partai politik","Kementerian","Profesi",0,"state","DPD merupakan lembaga perwakilan daerah."],
  ["medium2-state-003","Lembaga penyelenggara pemilihan umum di Indonesia adalah...","KPU","BPK","KY","MA",0,"state","KPU menyelenggarakan pemilihan umum."],
  ["medium2-state-004","Hak DPR untuk meminta keterangan kepada pemerintah disebut hak...","Interpelasi","Angket","Imunitas","Budget",0,"state","Hak interpelasi adalah hak meminta keterangan kepada pemerintah."],
  ["medium2-state-005","Hak DPR untuk melakukan penyelidikan disebut hak...","Angket","Interpelasi","Petisi","Veto",0,"state","Hak angket digunakan DPR untuk melakukan penyelidikan."],
  ["medium2-state-006","Pemegang kekuasaan kehakiman menurut UUD 1945 mencakup MA dan...","Mahkamah Konstitusi","DPR","MPR","BPK",0,"state","Kekuasaan kehakiman dilakukan oleh MA beserta badan peradilan di bawahnya dan MK."],
  ["medium2-state-007","Semboyan Bhinneka Tunggal Ika berasal dari kitab...","Sutasoma","Negarakertagama","Arjunawiwaha","Pararaton",0,"state","Bhinneka Tunggal Ika terdapat dalam Kakawin Sutasoma."],
  ["medium2-state-008","Warna merah pada bendera Indonesia melambangkan...","Keberanian","Kesucian","Kemakmuran","Keadilan",0,"state","Merah lazim dimaknai sebagai keberanian."],
  ["medium2-state-009","Pembukaan UUD 1945 terdiri atas ... alinea.","Dua","Tiga","Empat","Lima",2,"state","Pembukaan UUD 1945 terdiri atas empat alinea."],
  ["medium2-state-010","Asas pemilu yang berarti pemilih memberikan suara tanpa perantara adalah...","Langsung","Umum","Bebas","Rahasia",0,"state","Asas langsung berarti pemilih memberikan suaranya sendiri tanpa perantara."],
  ["medium2-nature-001","Badak Jawa dilindungi terutama di Taman Nasional...","Ujung Kulon","Baluran","Komodo","Bunaken",0,"nature","Populasi badak Jawa dilindungi di Taman Nasional Ujung Kulon."],
  ["medium2-nature-002","Harimau Sumatra memiliki nama ilmiah...","Panthera tigris sumatrae","Panthera pardus melas","Elephas maximus","Nasalis larvatus",0,"nature","Nama ilmiah harimau Sumatra adalah Panthera tigris sumatrae."],
  ["medium2-nature-003","Taman Nasional Baluran berada di provinsi...","Jawa Timur","Jawa Barat","Bali","Banten",0,"nature","Taman Nasional Baluran berada di Jawa Timur."],
  ["medium2-nature-004","Satwa endemik Papua yang terkenal karena hiasan bulunya adalah...","Cenderawasih","Maleo","Bekantan","Jalak Bali",0,"nature","Cenderawasih merupakan burung khas Papua."],
  ["medium2-nature-005","Danau Kelimutu terkenal karena memiliki...","Tiga danau kawah berwarna","Pulau vulkanik besar","Terumbu karang","Hutan mangrove",0,"nature","Kelimutu memiliki tiga danau kawah yang dapat menunjukkan warna berbeda."],
  ["medium2-nature-006","Ekosistem yang menjadi tempat peralihan sungai dan laut disebut...","Estuari","Savana","Taiga","Tundra",0,"nature","Estuari adalah perairan peralihan antara sungai dan laut."],
  ["medium2-nature-007","Pohon cendana sangat identik dengan wilayah...","Nusa Tenggara Timur","Kalimantan Barat","Jawa Barat","Sulawesi Utara",0,"nature","Cendana lama dikenal sebagai tumbuhan khas Nusa Tenggara Timur."],
  ["medium2-nature-008","Kawasan konservasi laut Wakatobi berada di provinsi...","Sulawesi Tenggara","Sulawesi Tengah","Maluku","Papua Barat",0,"nature","Wakatobi berada di Sulawesi Tenggara."],
  ["medium2-language-001","Kalimat yang hanya memiliki satu klausa disebut kalimat...","Tunggal","Majemuk","Langsung","Pasif",0,"language","Kalimat tunggal terdiri atas satu klausa."],
  ["medium2-language-002","Imbuhan pada kata 'berlarian' adalah...","ber-an","me-kan","di-i","pe-an",0,"language","Kata berlarian dibentuk dengan konfiks ber-an."],
  ["medium2-language-003","Kata 'pelari' dibentuk dengan imbuhan...","pe-","ber-","ter-","ke-",0,"language","Pelari dibentuk dari kata lari dengan awalan pe-."],
  ["medium2-language-004","Hubungan makna kata 'mawar' terhadap 'bunga' adalah...","Hiponim","Antonim","Homonim","Polisemi",0,"language","Mawar merupakan salah satu jenis bunga sehingga menjadi hiponim bunga."],
  ["medium2-language-005","Kata yang memiliki pelafalan sama tetapi ejaan dan makna berbeda disebut...","Homofon","Sinonim","Antonim","Hipernim",0,"language","Homofon memiliki bunyi sama tetapi ejaan dan makna berbeda."],
  ["medium2-language-006","Manakah kalimat efektif?","Para siswa-siswa sedang belajar.","Para siswa sedang belajar.","Siswa-siswa para sedang belajar.","Para siswa sedang belajar-belajar.",1,"language","Penanda jamak tidak perlu digunakan ganda; bentuk efektifnya 'Para siswa sedang belajar'."],
  ["medium2-language-007","Tanda baca yang digunakan untuk mengapit petikan langsung adalah...","Tanda petik","Tanda hubung","Tanda kurung","Tanda titik dua",0,"language","Petikan langsung diapit dengan tanda petik."],
  ["medium2-language-008","Penulisan baku untuk kata yang berarti akibat kurang menyenangkan adalah...","Risiko","Resiko","Riskio","Riziko",0,"language","Bentuk baku dalam bahasa Indonesia adalah risiko."],
  ["medium2-language-009","Penulisan baku untuk kata yang berarti kegiatan adalah...","Aktivitas","Aktifitas","Aktifitaz","Aktivitaz",0,"language","Bentuk baku yang benar adalah aktivitas."],
  ["medium2-language-010","Majas yang membandingkan dua hal dengan kata seperti atau bagai disebut...","Simile","Personifikasi","Hiperbola","Ironi",0,"language","Simile menggunakan kata pembanding seperti, bagai, atau laksana."],
  ["medium2-culinary-001","Bumbu khas yang memberi rasa getir dan aroma pada arsik Batak adalah...","Andaliman","Kluwek","Kencur","Asam jawa",0,"culinary","Andaliman merupakan bumbu penting dalam masakan Batak termasuk arsik."],
  ["medium2-culinary-002","Lemang dimasak di dalam ruas...","Bambu","Tebu","Kelapa","Pandan",0,"culinary","Lemang dimasak dalam bambu yang dilapisi daun pisang."],
  ["medium2-culinary-003","Nasi jamblang merupakan kuliner khas daerah...","Cirebon","Bogor","Madiun","Kupang",0,"culinary","Nasi jamblang berasal dari Cirebon."],
  ["medium2-culinary-004","Plecing kangkung merupakan hidangan khas...","Lombok","Madura","Nias","Belitung",0,"culinary","Plecing kangkung dikenal sebagai kuliner khas Lombok."],
  ["medium2-culinary-005","Sate bandeng merupakan makanan khas provinsi...","Banten","Lampung","Bengkulu","Riau",0,"culinary","Sate bandeng merupakan makanan khas Banten."],
  ["medium2-culinary-006","Bubur pedas merupakan kuliner tradisional yang dikenal di...","Kalimantan Barat","Kalimantan Timur","Sulawesi Barat","Papua Barat",0,"culinary","Bubur pedas dikenal sebagai kuliner masyarakat Melayu Sambas, Kalimantan Barat."],
  ["medium2-culinary-007","Kapurung berbahan dasar sagu dan berasal dari...","Sulawesi Selatan","Jawa Tengah","Sumatera Utara","Nusa Tenggara Barat",0,"culinary","Kapurung merupakan makanan berbahan sagu dari Sulawesi Selatan."],
  ["medium2-culinary-008","Kue bika ambon dikenal sebagai oleh-oleh khas kota...","Medan","Ambon","Makassar","Padang",0,"culinary","Bika ambon terkenal sebagai oleh-oleh khas Medan."],
  ["medium2-culinary-009","Ayam taliwang berasal dari wilayah...","Nusa Tenggara Barat","Nusa Tenggara Timur","Bali","Sulawesi Selatan",0,"culinary","Ayam taliwang berasal dari Lombok, Nusa Tenggara Barat."],
  ["medium2-art-001","Alat musik tifa dimainkan dengan cara...","Dipukul","Ditiup","Dipetik","Digesek",0,"art","Tifa merupakan alat musik pukul."],
  ["medium2-art-002","Tari Pendet berasal dari tradisi seni...","Bali","Aceh","Betawi","Banjar",0,"art","Tari Pendet berasal dari Bali."],
  ["medium2-art-003","Lagu 'Bengawan Solo' diciptakan oleh...","Gesang","Ismail Marzuki","Kusbini","C. Simanjuntak",0,"art","Bengawan Solo diciptakan oleh Gesang."],
  ["medium2-art-004","Ondel-ondel merupakan kesenian khas masyarakat...","Betawi","Sunda","Madura","Bugis",0,"art","Ondel-ondel merupakan kesenian khas Betawi."],
  ["medium2-art-005","Tari Yapong diciptakan untuk perayaan ulang tahun kota...","Jakarta","Bandung","Surabaya","Medan",0,"art","Tari Yapong diciptakan untuk perayaan ulang tahun Jakarta."],
  ["medium2-art-006","Alat musik rebab dimainkan dengan cara...","Digesek","Dipukul","Ditiup","Digoyangkan",0,"art","Rebab adalah alat musik gesek."],
  ["medium2-art-007","Kesenian Debus berasal dari provinsi...","Banten","Bali","Aceh","Jambi",0,"art","Debus merupakan kesenian tradisional Banten."],
  ["medium2-art-008","Tari Cakalele berasal dari wilayah...","Maluku","Sumatra","Jawa","Kalimantan",0,"art","Cakalele merupakan tarian tradisional Maluku."],
  ["medium2-sport-001","Panjang lintasan lomba maraton adalah sekitar...","21,1 km","42,195 km","50 km","100 km",1,"sport","Jarak resmi maraton adalah 42,195 kilometer."],
  ["medium2-sport-002","Dalam bola voli, pukulan awal untuk memulai reli disebut...","Servis","Smash","Blok","Passing",0,"sport","Servis digunakan untuk memulai reli bola voli."],
  ["medium2-sport-003","Istilah hat-trick berarti seorang pemain mencetak ... gol dalam satu pertandingan.","Dua","Tiga","Empat","Lima",1,"sport","Hat-trick berarti mencetak tiga gol dalam satu pertandingan."],
  ["medium2-sport-004","Induk organisasi bulu tangkis Indonesia adalah...","PBSI","PSSI","PERBASI","PASI",0,"sport","PBSI adalah Persatuan Bulu Tangkis Seluruh Indonesia."],
  ["medium2-sport-005","Induk organisasi bola basket Indonesia adalah...","PERBASI","PBVSI","PERSANI","PRSI",0,"sport","PERBASI adalah Persatuan Bola Basket Seluruh Indonesia."],
  ["medium2-sport-006","Dalam tenis meja, satu gim normal dimenangkan pada ... poin.","11","15","21","25",0,"sport","Satu gim tenis meja normal dimainkan hingga 11 poin dengan selisih minimal dua."],
  ["medium2-sport-007","Gaya renang yang gerakannya menyerupai katak adalah gaya...","Dada","Bebas","Punggung","Kupu-kupu",0,"sport","Gaya dada juga sering disebut gaya katak."],
  ["medium2-sport-008","Dalam sepak bola, kartu merah berarti pemain harus...","Keluar dari pertandingan","Mengganti sepatu","Pindah posisi","Mengambil tendangan sudut",0,"sport","Kartu merah membuat pemain dikeluarkan dari pertandingan."],
  ["medium2-sport-009","Nomor estafet atletik yang umum dipertandingkan adalah...","4 x 100 meter","3 x 100 meter","5 x 50 meter","2 x 400 meter",0,"sport","Estafet 4 x 100 meter merupakan nomor resmi yang umum dipertandingkan."],
  ["medium2-sport-010","Dalam bulu tangkis, pukulan keras dan menukik disebut...","Smash","Lob","Dropshot","Drive",0,"sport","Smash adalah pukulan keras yang diarahkan menukik ke bidang lawan."]
];

function appendQuestionRows(rows, difficulty) {
  indonesiaQuestions.push(...rows.map(([id, question, a, b, c, d, correctAnswer, category, explanation]) => ({
    id,
    question,
    options: [a, b, c, d],
    correctAnswer,
    category,
    difficulty,
    explanation
  })));
}

appendQuestionRows(easyExpansionRows, 1);
appendQuestionRows(mediumExpansionRows, 2);

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

/* Data undangan (nama, tanggal, acara, rekening, galeri, cerita) — edit di file ini. */
/* ============ DATA — edit di sini ============ */
// Foto dummy pernikahan dari Unsplash (lisensi bebas pakai). Ganti dengan foto kostumer saat pesanan asli.
const U = (id, w, h) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&q=75&w=${w}&h=${h}`;
// Kosongkan ("" / []) bagian opsional bila tidak dipakai: live, giftAddress, gifts, story.
const C = {
  bride: {
    full: "Desi Nursanti", // nama + gelar
    nick: "Enci", // nama panggilan (tampil di cover)
    ig: "desinursanti62", // tanpa @
    wa: "6281313121463", // format 62xxx
    father: "Hadiro",
    mother: "Rumsiti",
    role: "Putri", // Putri / Putri pertama / Putri kedua ...
    address:
      "Kp. Jaksi, RT 03/05, Desa Mandalawangi, Kec. Salopa, Kab. Tasikmalaya",
    photo: "img/wanita.jpg",
  },
  groom: {
    full: "Arip Nugraha",
    nick: "Arip",
    ig: "arip_n08",
    wa: "6287891016628",
    father: "Jamal Eko",
    mother: "Eros",
    role: "Putra",
    address:
      "Kp. Mekarharuman, RT 37/07, Desa Sindangasih, Kec. Cikatomas, Kab. Tasikmalaya",
    photo: "img/pria.jpg",
  },
  date: "2026-12-20T09:00:00", // tanggal & jam mulai acara (Minggu, 20 Desember 2026)
  // Identitas & teks undangan
  site: {
    title: "The Wedding of Enci & Arip", // judul tab browser
    copyright: "© 2026 Aisyae Digital Invitation",
  },
  text: {
    greeting: "Assalamu'alaikum Wr. Wb.",
    intro:
      "Segala puji bagi Allah SWT yang telah menjadikan hamba-Nya hidup berpasang-pasangan. Dengan memohon ridho, rahmat, dan berkah-Nya, kami bermaksud mengundang Bapak/Ibu/Saudara/i dalam acara pernikahan kami.",
    quote:
      "Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang.",
    quoteSource: "AR-RUM AYAT : 21",
    closing:
      "Merupakan sebuah kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir dan memberikan doa restu. Terima kasih.",
  },
  // URL Web App Google Apps Script (berakhiran /exec) untuk RSVP & ucapan. Kosongkan = disimpan di browser saja (hanya untuk uji coba)
  rsvp: "https://script.google.com/macros/s/AKfycbwgIJc92JJP1vABY-kZk-FJ_oPv9Jn0sNmndA_EgWS__CNtdZVGQCfVVliGUOlT0KDT/exec",
  // foto latar tiap bagian
  bg: {
    cover: "img/cover.jpg",
    quote: "img/bg-quote.jpg",
    foot: "img/bg-foot.jpg",
    date: "img/bg-date.jpg",
  },
  events: [
    {
      t: "Akad Nikah",
      time: "09.00 WIB",
      place: "Kediaman Mempelai Wanita",
      addr: "Kp. Jaksi, RT 03/05, Desa Mandalawangi, Kec. Salopa, Kab. Tasikmalaya",
      map: "https://maps.app.goo.gl/7S1cCjMgEU6Ag9uG6?g_st=ic",
    },
    {
      t: "Resepsi",
      time: "11.00 WIB - selesai",
      place: "Kediaman Mempelai Wanita",
      addr: "Kp. Jaksi, RT 03/05, Desa Mandalawangi, Kec. Salopa, Kab. Tasikmalaya",
      map: "https://maps.app.goo.gl/7S1cCjMgEU6Ag9uG6?g_st=ic",
    },
  ],
  live: "", // link live streaming (kosongkan jika tidak ada)
  music: "sound/enci.mp4", // lagu latar: taruh file mp3 di folder sound/
  // alamat pengiriman kado (kosongkan {} jika tidak dipakai)
  giftAddress: {
    name: "Desi Nursanti",
    addr: "Pasir Salam, RT 03/05, Kp. Jaksi, Desa Mandalawangi, Kec. Salopa, Kab. Tasikmalaya, Jawa Barat 46192",
  },
  // rekening amplop digital (boleh lebih dari satu; kosongkan [] jika tidak dipakai)
  gifts: [
    { bank: "BCA", no: "8731136831", name: "Desi Nursanti" },
    { bank: "BCA", no: "0541603432", name: "Arip Nugraha" },
    { bank: "Dana", no: "081313121463", name: "Desi Nursanti" },
  ],
  // galeri: foto melebar (landscape) otomatis tampil selebar grid
  gallery: [
    "img/g01.jpg",
    "img/g02.jpg",
    "img/g03.jpg",
    "img/g04.jpg",
    "img/g05.jpg",
    "img/g06.jpg",
    "img/g07.jpg",
    "img/g08.jpg",
    "img/g10.jpg",
    "img/g09.jpg",
    "img/g11.jpg",
    "img/g12.jpg",
    "img/g13.jpg",
    "img/g14.jpg",
  ],
  // cerita (kosongkan [] jika tidak dipakai)
  story: [
    {
      d: "05 Januari 2021",
      t: "Pertemuan",
      p: "Tidak ada yang kebetulan di dunia ini, semua sudah tersusun sangat rapi oleh Sang Maha Kuasa. Kita tidak bisa memilih kepada siapa kita akan jatuh cinta. Ternyata Tuhan mempertemukan kita pada tanggal 05 Januari 2021 sebagai teman, dan menjadi awal dari perjalanan panjang kami.",
      i: "img/s1.jpg",
    },
    {
      d: "18 Februari 2021",
      t: "Menjalin Hubungan",
      p: "Dari teman, menjadi teman dekat, hingga akhirnya pada tanggal 18 Februari 2021 kami berjanji untuk melangkah bersama. Setelah itu, semua terasa lebih berarti. Kami belajar memahami, saling percaya, dan tumbuh bersama. Kami melewati musim hujan dan terik bersama. Setiap waktu mengajarkan kami arti cinta sesungguhnya. Bukan sekadar rasa, tapi keputusan untuk bertahan.",
      i: "img/s2.jpg",
    },
    {
      d: "07 Juni 2025",
      t: "Lamaran",
      p: "Setelah saling menguatkan selama beberapa tahun, pada 07 Juni 2025 kami memutuskan untuk melangkah ke jenjang yang lebih serius dengan mempertemukan keluarga besar kami, membawa harapan baru dalam ikatan yang lebih serius.",
      i: "img/s3.jpg",
    },
    {
      d: "20 Desember 2026",
      t: "Pernikahan",
      p: "Kami tidak mencari kesempurnaan, tapi saling melengkapi kekurangan. Setelah melewati ombak, badai, dan angin yang begitu kencang, sampailah kami di titik ini. Hari ini, 20 Desember 2026, bukan hanya awal dari lembaran baru, tetapi juga peneguh cinta yang ingin kami jaga selamanya dalam ikatan pernikahan. Dan inilah janji kami untuk hari ini dan selamanya.",
      i: "img/s4.jpg",
    },
  ],
};
// Ukuran tampil foto galeri (lebar, tinggi). Potret 3:4 = 1 kolom, lebar 3:2 = 2 kolom. Jumlah foto potret di antara foto lebar sebaiknya genap agar grid rapi.
const GD = {
  "img/g01.jpg": [3, 2],
  "img/g02.jpg": [3, 4],
  "img/g03.jpg": [3, 4],
  "img/g04.jpg": [3, 4],
  "img/g05.jpg": [3, 4],
  "img/g06.jpg": [3, 2],
  "img/g07.jpg": [3, 4],
  "img/g08.jpg": [3, 4],
  "img/g10.jpg": [3, 2],
  "img/g09.jpg": [3, 4],
  "img/g11.jpg": [3, 4],
  "img/g12.jpg": [3, 4],
  "img/g13.jpg": [3, 4],
  "img/g14.jpg": [3, 2],
};
/* =============================================== */

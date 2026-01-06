const data = {
  en: {
    title: "THE WANN",
    subtitle: "Luxury Nightclub & Bar Experience",
    servicesTitle: "OUR SERVICES",
    s1: "Nightclub",
    s1d: "High-energy music, premium sound & lighting.",
    s2: "Bar & Lounge",
    s2d: "Signature cocktails & luxury seating.",
    s3: "Table Booking",
    s3d: "VIP tables & private areas.",
    book: "BOOK NOW"
  },
  vi: {
    title: "THE WANN",
    subtitle: "Trải nghiệm Nightclub & Bar đẳng cấp",
    servicesTitle: "DỊCH VỤ",
    s1: "Nightclub",
    s1d: "Âm nhạc sôi động, ánh sáng & âm thanh cao cấp.",
    s2: "Bar & Lounge",
    s2d: "Cocktail đặc trưng & không gian sang trọng.",
    s3: "Đặt bàn",
    s3d: "Khu VIP & không gian riêng tư.",
    book: "ĐẶT BÀN NGAY"
  }
};

function setLang(lang) {
  const d = data[lang];
  document.getElementById("title").innerText = d.title;
  document.getElementById("subtitle").innerText = d.subtitle;
  document.getElementById("servicesTitle").innerText = d.servicesTitle;
  document.getElementById("s1").innerText = d.s1;
  document.getElementById("s1d").innerText = d.s1d;
  document.getElementById("s2").innerText = d.s2;
  document.getElementById("s2d").innerText = d.s2d;
  document.getElementById("s3").innerText = d.s3;
  document.getElementById("s3d").innerText = d.s3d;
  document.getElementById("bookBtn").innerText = d.book;
}

// BOOKING LINK
document.getElementById("bookBtn").href =
  "https://zalo.me/YOUR_ZALO_ID";
// hoặc WhatsApp:
// "https://wa.me/84XXXXXXXXX";


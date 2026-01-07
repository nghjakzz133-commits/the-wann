document.addEventListener('DOMContentLoaded', function () {

  /* ===== VARIABLES ===== */
  const openBtn = document.getElementById('openBooking');
  const popup = document.getElementById('bookingPopup');
  const closeBtn = document.querySelector('.close');
  const form = document.getElementById('bookingForm');
  const hamburger = document.getElementById('hamburger');
  const navbar = document.querySelector('.nav .navbar');
  const langToggle = document.getElementById('langToggle');

  /* ===== OPEN POPUP ===== */
  function openBooking() {
    popup.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    setTimeout(() => {
      const firstInput = popup.querySelector('input');
      if (firstInput) firstInput.focus();
    }, 300);
  }

  /* ===== CLOSE POPUP ===== */
  function closeBooking() {
    popup.style.display = 'none';
    document.body.style.overflow = '';
  }

  /* ===== EVENTS POPUP ===== */
  if (openBtn) {
    openBtn.addEventListener('click', openBooking);
    openBtn.addEventListener('touchstart', function (e) {
      e.preventDefault();
      openBooking();
    });
  }

  if (closeBtn) closeBtn.addEventListener('click', closeBooking);

  if (popup) {
    popup.addEventListener('click', function (e) {
      if (e.target === popup) closeBooking();
    });
  }

  /* ===== SUBMIT FORM → WHATSAPP ===== */
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      const name = document.getElementById('name').value.trim();
      const phone = document.getElementById('phone').value.trim();
      const date = document.getElementById('date').value;
      const people = document.getElementById('people').value;
      const note = document.getElementById('note').value.trim();

      if (!name || !phone || !date || !people) {
        alert('Vui lòng điền đầy đủ thông tin!');
        return;
      }

      const message =
`🔥 BOOKING THE WANN 🔥
👤 Tên: ${name}
📞 SĐT: ${phone}
📅 Ngày: ${date}
👥 Số khách: ${people}
📝 Ghi chú: ${note || 'Không có'}`;

      const adminPhone = '0778307889';
      const whatsappURL = `https://wa.me/84${adminPhone.substring(1)}?text=${encodeURIComponent(message)}`;

      window.open(whatsappURL, '_blank');
      closeBooking();
      form.reset();
    });
  }

  /* ===== SMOOTH SCROLL MENU ===== */
  document.querySelectorAll('header.nav a').forEach(link => {
    link.addEventListener('click', function(e){
      const href = this.getAttribute('href');
      if (href.startsWith('#')) {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) target.scrollIntoView({ behavior: 'smooth' });

        if (navbar.classList.contains('active')) {
          navbar.classList.remove('active');
        }
      }
    });
  });

  /* ===== HAMBURGER MENU ===== */
  if (hamburger && navbar) {
    hamburger.addEventListener('click', () => {
      navbar.classList.toggle('active');
    });
  }

  /* ===== LANGUAGE TOGGLE EN / VI ===== */
  const translations = {
    vi: {
      home: "Trang Chủ",
      menu: "Menu",
      booking: "Đặt bàn",
      gallery: "Hình ảnh",
      news: "Tin tức",
      about: "Giới thiệu",
      contact: "Liên hệ",
      hero: "Trải nghiệm nightlife cao cấp",
      features: ["Đặt bàn nhanh qua WhatsApp, Zalo hoặc Form.", "Âm nhạc đỉnh cao mỗi đêm.", "Dịch vụ cao cấp – bảo mật."],
      bookingHeader: "Đặt Bàn VIP",
      bookNow: "BOOK NOW",
      bookingAlert: "Vui lòng điền đầy đủ thông tin!"
    },
    en: {
      home: "Home",
      menu: "Menu",
      booking: "Booking",
      gallery: "Gallery",
      news: "News",
      about: "About",
      contact: "Contact",
      hero: "Premium Nightlife Experience",
      features: ["Quick booking via WhatsApp, Zalo or Form.", "Top-notch music every night.", "Premium & confidential services."],
      bookingHeader: "VIP Table Booking",
      bookNow: "BOOK NOW",
      bookingAlert: "Please fill in all required fields!"
    }
  };

  let currentLang = 'vi';

  if (langToggle) {
    langToggle.addEventListener('click', () => {
      currentLang = currentLang === 'vi' ? 'en' : 'vi';
      langToggle.textContent = currentLang.toUpperCase();

      // NAV
      const navLinks = document.querySelectorAll('.nav .navbar li a');
      const navKeys = ["home","menu","booking","gallery","news","about","contact"];
      navLinks.forEach((link,i) => {
        link.textContent = translations[currentLang][navKeys[i]];
      });

      // HERO
      document.querySelector('.hero p').textContent = translations[currentLang].hero;

      // FEATURES
      document.querySelectorAll('.features-container .feature-item p').forEach((p,i)=>{
        p.textContent = translations[currentLang].features[i];
      });

      // BOOKING SECTION
      document.querySelector('#booking h2').textContent = translations[currentLang].bookingHeader;
      document.querySelector('#openBooking').textContent = translations[currentLang].bookNow;
    });
  }

});

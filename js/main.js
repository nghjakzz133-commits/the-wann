document.addEventListener('DOMContentLoaded', function () {

  /* ===== VARIABLES ===== */
  const openBtn = document.getElementById('openBooking');
  const popup = document.getElementById('bookingPopup');
  const closeBtn = document.querySelector('.close');
  const form = document.getElementById('bookingForm');
  const hamburger = document.getElementById('hamburger');
  const navbar = document.querySelector('.nav .navbar');

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

  if (closeBtn) {
    closeBtn.addEventListener('click', closeBooking);
  }

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
      const whatsappURL =
        `https://wa.me/84${adminPhone.substring(1)}?text=${encodeURIComponent(message)}`;

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
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
        // Nếu menu mobile đang mở, đóng nó sau khi click
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

});

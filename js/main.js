document.addEventListener('DOMContentLoaded', function () {

  const openBtn = document.getElementById('openBooking');
  const popup = document.getElementById('bookingPopup');
  const closeBtn = document.querySelector('.close');
  const form = document.getElementById('bookingForm');

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

  /* ===== EVENTS ===== */
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

  popup.addEventListener('click', function (e) {
    if (e.target === popup) closeBooking();
  });

  /* ===== SUBMIT FORM → WHATSAPP ===== */
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      const name = document.getElementById('name').value.trim();
      const phone = document.getElementById('phone').value.trim();
      const date = document.getElementById('date').value;
      const people = document.getElementById('people').value;
      const table = document.getElementById('table').value;
      const note = document.getElementById('note').value.trim();

      if (!name || !phone || !date || !people || !table) {
        alert('Vui lòng điền đầy đủ thông tin!');
        return;
      }

      const message =
`🔥 BOOKING THE WANN 🔥
👤 Tên: ${name}
📞 SĐT: ${phone}
📅 Ngày: ${date}
👥 Số khách: ${people}
🍾 Loại bàn: ${table}
📝 Ghi chú: ${note || 'Không có'}`;

      const adminPhone = '0778307889';
      const whatsappURL =
        `https://wa.me/84${adminPhone.substring(1)}?text=${encodeURIComponent(message)}`;

      window.open(whatsappURL, '_blank');

      closeBooking();
      form.reset();
    });
  }

});

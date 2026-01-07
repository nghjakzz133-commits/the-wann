document.getElementById('openBooking').addEventListener('click', openBooking);
document.querySelector('.close').addEventListener('click', closeBooking);

function openBooking() {
  document.getElementById('bookingPopup').style.display = 'flex';
  document.body.style.overflow = 'hidden';
}

function closeBooking() {
  document.getElementById('bookingPopup').style.display = 'none';
  document.body.style.overflow = '';
}

document.getElementById('bookingPopup').addEventListener('click', function(e) {
  if (e.target === this) closeBooking();
});

document.getElementById('openBooking').addEventListener('touchstart', function(e) {
  e.preventDefault();
  openBooking();
});
function openBooking() {
  const popup = document.getElementById('bookingPopup');
  popup.style.display = 'flex';

  setTimeout(() => {
    const firstInput = popup.querySelector('input');
    if (firstInput) firstInput.focus();
  }, 300);
}
document.getElementById('bookingForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const phone = document.getElementById('phone').value;
  const date = document.getElementById('date').value;
  const people = document.getElementById('people').value;
  const table = document.getElementById('table').value;
  const note = document.getElementById('note').value;

  const message =
`🔥 BOOKING THE WANN 🔥
👤 Tên: ${name}
📞 SĐT: ${phone}
📅 Ngày: ${date}
👥 Số khách: ${people}
🍾 Loại bàn: ${table}
📝 Ghi chú: ${note || 'Không có'}`;

  const phoneAdmin = '0778307889'; // SĐT của mày
  const whatsappURL = `https://wa.me/84${phoneAdmin.substring(1)}?text=${encodeURIComponent(message)}`;

  window.open(whatsappURL, '_blank');

  closeBooking();
});

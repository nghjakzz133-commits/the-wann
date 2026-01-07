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

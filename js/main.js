// Mở popup khi nhấn vào nút BOOK NOW
document.getElementById('openBooking').addEventListener('click', function() {
  openBooking();
});

// Đóng popup khi nhấn vào nút "×"
document.querySelector('.close').addEventListener('click', function() {
  closeBooking();
});

// Hàm mở popup
function openBooking() {
  document.getElementById('bookingPopup').style.display = 'flex';
}

// Hàm đóng popup
function closeBooking() {
  document.getElementById('bookingPopup').style.display = 'none';
}

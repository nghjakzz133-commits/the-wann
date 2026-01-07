let currentLang = "vi";
const toggleBtn = document.getElementById("langToggle");
const elements = document.querySelectorAll("[data-vi]");

toggleBtn.addEventListener("click", () => {
  currentLang = currentLang === "vi" ? "en" : "vi";
  toggleBtn.textContent = currentLang === "vi" ? "EN" : "VI";
  
  elements.forEach(el => {
    // Sửa lỗi nhỏ: Kiểm tra nếu data attribute tồn tại trước khi gán
    if (el.dataset[currentLang]) { 
      el.textContent = el.dataset[currentLang];
    }
  });
});

// Lazy loading images
// Lưu ý: Nếu ảnh của bạn đã có class="lazy", đoạn code này sẽ hoạt động.
const images = document.querySelectorAll("img.lazy"); 

const options = {
  root: null,
  rootMargin: "0px",
  threshold: 0.1
};

const imageObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const img = entry.target;
      // Giả định bạn có data-src trên thẻ img cho lazy loading
      if (img.dataset.src) {
        img.src = img.dataset.src;
      }
      img.classList.remove("lazy");
      observer.unobserve(img);
    }
  });
}, options);

images.forEach(img => imageObserver.observe(img));

/* --- SỬA LỖI POPUP BOOKING --- */

const bookingPopup = document.getElementById("bookingPopup");
const closeBtn = document.getElementById("closeBtn"); // Lấy nút đóng (X) theo ID

// 1. Hàm MỞ Pop-up (được gọi từ onclick="openBooking()" trong HTML)
function openBooking() {
  bookingPopup.classList.add("active");
  // Ngăn chặn cuộn trang
  document.body.style.overflow = 'hidden'; 
}

// 2. Hàm ĐÓNG Pop-up
function closeBooking() {
  bookingPopup.classList.remove("active");
  // Cho phép cuộn trang trở lại
  document.body.style.overflow = 'auto'; 
}

// 3. Gắn sự kiện ĐÓNG cho nút (X)
if (closeBtn) {
  closeBtn.onclick = closeBooking;
}

// 4. Đóng Pop-up khi click ra vùng nền tối
bookingPopup.onclick = (e) => {
  // Nếu đối tượng được click là chính Pop-up (không phải form bên trong)
  if(e.target === bookingPopup){ 
    closeBooking();
  }
};

// 5. Đóng Pop-up khi nhấn phím ESC
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && bookingPopup.classList.contains('active')) {
    closeBooking();
  }
});

/* ----------------------------- */

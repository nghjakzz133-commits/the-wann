let currentLang = "vi";
const toggleBtn = document.getElementById("langToggle");
const elements = document.querySelectorAll("[data-vi]");

toggleBtn.addEventListener("click", () => {
  currentLang = currentLang === "vi" ? "en" : "vi";
  toggleBtn.textContent = currentLang === "vi" ? "EN" : "VI";
  
  elements.forEach(el => {
    if (el.dataset[currentLang]) { 
      el.textContent = el.dataset[currentLang];
    }
  });
});

// Lazy loading images (Giữ nguyên chức năng bạn đã viết)
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
      if (img.dataset.src) {
        img.src = img.dataset.src;
      }
      img.classList.remove("lazy");
      observer.unobserve(img);
    }
  });
}, options);

images.forEach(img => imageObserver.observe(img));

/* --- CHỨC NĂNG POPUP BOOKING (Đã Sửa Lỗi) --- */

const bookingPopup = document.getElementById("bookingPopup");
const closeBtn = document.getElementById("closeBtn"); 

// Hàm MỞ Pop-up (được gọi từ onclick="openBooking()" trong HTML)
function openBooking() {
  bookingPopup.classList.add("active");
  // Ngăn chặn cuộn trang
  document.body.style.overflow = 'hidden'; 
}

// Hàm ĐÓNG Pop-up
function closeBooking() {
  bookingPopup.classList.remove("active");
  // Cho phép cuộn trang trở lại
  document.body.style.overflow = 'auto'; 
}

// Gắn sự kiện ĐÓNG cho nút (X)
if (closeBtn) {
  closeBtn.onclick = closeBooking;
}

// Đóng Pop-up khi click ra vùng nền tối
bookingPopup.onclick = (e) => {
  if(e.target === bookingPopup){ 
    closeBooking();
  }
};

// Đóng Pop-up khi nhấn phím ESC
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && bookingPopup.classList.contains('active')) {
    closeBooking();
  }
});

/* ----------------------------- */

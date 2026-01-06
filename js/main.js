/* =====================
   LANGUAGE TOGGLE (VI / EN)
===================== */
document.addEventListener("DOMContentLoaded", () => {
  let currentLang = "vi";

  const toggleBtn = document.getElementById("langToggle");
  const elements = document.querySelectorAll("[data-vi]");

  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      currentLang = currentLang === "vi" ? "en" : "vi";
      toggleBtn.textContent = currentLang === "vi" ? "EN" : "VI";

      elements.forEach(el => {
        el.textContent = el.dataset[currentLang];
      });
    });
  }

  /* =====================
     BOOKING POPUP
  ===================== */
  const bookingPopup = document.getElementById("bookingPopup");

  window.openBooking = function () {
    if (bookingPopup) {
      bookingPopup.style.display = "flex";
    }
  };

  window.closeBooking = function () {
    if (bookingPopup) {
      bookingPopup.style.display = "none";
    }
  };

  // Click ngoài popup để đóng
  if (bookingPopup) {
    bookingPopup.addEventListener("click", (e) => {
      if (e.target === bookingPopup) {
        bookingPopup.style.display = "none";
      }
    });
  }
});

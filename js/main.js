/* =====================
   LANGUAGE TOGGLE
===================== */
let currentLang = "vi";

const toggleBtn = document.getElementById("langToggle");
const elements = document.querySelectorAll("[data-vi]");

toggleBtn.addEventListener("click", () => {
  currentLang = currentLang === "vi" ? "en" : "vi";
  toggleBtn.textContent = currentLang === "vi" ? "EN" : "VI";

  elements.forEach(el => {
    el.textContent = el.dataset[currentLang];
  });
});

/* =====================
   BOOKING POPUP
===================== */
const bookingPopup = document.getElementById("bookingPopup");

function openBookingBtn() {
  bookingPopup.style.display = "flex";
}

function closeBooking() {
  bookingPopup.style.display = "none";
}

// Click ra ngoài popup để đóng
bookingPopup.addEventListener("click", (e) => {
  if (e.target === bookingPopup) {
    closeBooking();
  }
});

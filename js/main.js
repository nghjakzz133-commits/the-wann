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
const openBookingBtn = document.getElementById("openBooking");
const closeBookingBtn = document.getElementById("closeBooking");

openBookingBtn.onclick = (e) => {
  e.preventDefault();
  bookingPopup.classList.add("active");
};

closeBookingBtn.onclick = () => {
  bookingPopup.classList.remove("active");
};

bookingPopup.onclick = (e) => {
  if(e.target === bookingPopup){
    bookingPopup.classList.remove("active");
  }
};

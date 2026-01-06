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
const openBooking = document.getElementById("openBooking");
const bookingPopup = document.getElementById("bookingPopup");
const closeBooking = document.getElementById("closeBooking");

openBooking.onclick = (e) => {
  e.preventDefault();
  bookingPopup.classList.add("active");
};

closeBooking.onclick = () => {
  bookingPopup.classList.remove("active");
};

bookingPopup.onclick = (e) => {
  if(e.target === bookingPopup){
    bookingPopup.classList.remove("active");
  }
};
function openBooking() {
  document.getElementById("bookingPopup").style.display = "flex";
}

function closeBooking() {
  document.getElementById("bookingPopup").style.display = "none";
}

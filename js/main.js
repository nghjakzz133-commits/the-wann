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

// Lazy loading images
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
      img.src = img.dataset.src;
      img.classList.remove("lazy");
      observer.unobserve(img);
    }
  });
}, options);

images.forEach(img => imageObserver.observe(img));

// Popup booking
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

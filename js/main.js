// LANGUAGE TOGGLE (VN / EN)

let currentLang = "vi";

const langToggle = document.getElementById("langToggle");
const elements = document.querySelectorAll("[data-vi]");

if (langToggle) {
  langToggle.addEventListener("click", () => {
    currentLang = currentLang === "vi" ? "en" : "vi";

    langToggle.textContent = currentLang === "vi" ? "EN" : "VI";

    elements.forEach(el => {
      el.textContent = el.dataset[currentLang];
    });
  });
}

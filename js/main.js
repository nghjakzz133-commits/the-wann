document.addEventListener("DOMContentLoaded", function () {

  /* ===== MOBILE MENU ===== */
  const menuToggle = document.getElementById("menuToggle");
  const nav = document.querySelector(".nav");

  if (menuToggle && nav) {
    menuToggle.addEventListener("click", function () {
      nav.classList.toggle("active");
    });
  }

  /* ===== BOOKING POPUP ===== */
  const openBtn = document.getElementById("openBooking");
  const popup = document.getElementById("bookingPopup");
  const closeBtn = document.getElementById("closeBooking");

  if (openBtn && popup) {
    openBtn.addEventListener("click", function () {
      popup.style.display = "block";
    });
  }

  if (closeBtn && popup) {
    closeBtn.addEventListener("click", function () {
      popup.style.display = "none";
    });
  }

  /* ===== MENU LOAD ===== */
  let current = 0;
  const perLoad = 12;
  const total = 70;
  const gallery = document.getElementById("menuGallery");
  const btn = document.getElementById("loadMore");

  function loadMenu() {
    for (let i = current + 1; i <= current + perLoad && i <= total; i++) {
      const img = document.createElement("img");
      img.src = `assets/menu/menu-${String(i).padStart(2, "0")}.jpg`;
      img.loading = "lazy";
      gallery.appendChild(img);
    }
    current += perLoad;
    if (current >= total && btn) btn.style.display = "none";
  }

  if (gallery && btn) {
    btn.addEventListener("click", loadMenu);
    loadMenu();
  }

});

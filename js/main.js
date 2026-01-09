document.addEventListener("DOMContentLoaded", () => {

  /* ================= LUX MOBILE MENU ================= */
  const menuToggle = document.getElementById("menuToggle");
  const luxMenu = document.getElementById("luxMenu");
  const luxOverlay = document.getElementById("luxOverlay");
  const luxClose = document.getElementById("luxClose");

  if (menuToggle && luxMenu && luxOverlay) {
    menuToggle.addEventListener("click", () => {
      luxMenu.classList.add("active");
      luxOverlay.classList.add("active");
    });
  }

  if (luxClose && luxMenu && luxOverlay) {
    luxClose.addEventListener("click", () => {
      luxMenu.classList.remove("active");
      luxOverlay.classList.remove("active");
    });
  }

  if (luxOverlay && luxMenu) {
    luxOverlay.addEventListener("click", () => {
      luxMenu.classList.remove("active");
      luxOverlay.classList.remove("active");
    });
  }

  /* ================= BOOKING POPUP ================= */
  const bookingPopup = document.getElementById("bookingPopup");
  const closeBooking = document.getElementById("closeBooking");

  document.querySelectorAll("#openBooking").forEach(btn => {
    btn.addEventListener("click", () => {
      if (bookingPopup) bookingPopup.style.display = "block";
    });
  });

  if (closeBooking && bookingPopup) {
    closeBooking.addEventListener("click", () => {
      bookingPopup.style.display = "none";
    });
  }

  /* ================= MENU IMAGE LOAD ================= */
  const gallery = document.getElementById("menuGallery");
  const loadBtn = document.getElementById("loadMore");

  let current = 0;
  const perLoad = 12;
  const total = 70;

  function loadMenuImages() {
    if (!gallery) return;

    for (let i = current + 1; i <= current + perLoad && i <= total; i++) {
      const img = document.createElement("img");
      img.src = `assets/menu/menu-${String(i).padStart(2, "0")}.jpg`;
      img.loading = "lazy";
      img.addEventListener("click", () => openLightbox(img.src));
      gallery.appendChild(img);
    }

    current += perLoad;
    if (current >= total && loadBtn) loadBtn.style.display = "none";
  }

  if (gallery && loadBtn) {
    loadBtn.addEventListener("click", loadMenuImages);
    loadMenuImages();
  }

  /* ================= MENU LIGHTBOX ================= */
  const lightbox = document.createElement("div");
  lightbox.className = "menu-lightbox";
  lightbox.innerHTML = `<span>&times;</span><img>`;
  document.body.appendChild(lightbox);

  function openLightbox(src) {
    lightbox.classList.add("active");
    lightbox.querySelector("img").src = src;
  }

  lightbox.addEventListener("click", () => {
    lightbox.classList.remove("active");
  });

});

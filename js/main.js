document.addEventListener('DOMContentLoaded', function () {

  /* ===== VARIABLES ===== */
  const openBtn = document.getElementById('openBooking');
  const popup = document.getElementById('bookingPopup');
  const closeBtn = document.querySelector('.close');
  const form = document.getElementById('bookingForm');
  const hamburger = document.getElementById('hamburger');
  const navbar = document.querySelector('.nav .navbar');

  /* ===== OPEN POPUP ===== */
  function openBooking() {
    if (!popup) return;
    popup.style.display = 'flex';
    document.body.style.overflow = 'hidden';

    setTimeout(() => {
      const firstInput = popup.querySelector('input');
      if (firstInput) firstInput.focus();
    }, 300);
  }

  /* ===== CLOSE POPUP ===== */
  function closeBooking() {
    if (!popup) return;
    popup.style.display = 'none';
    document.body.style.overflow = '';
  }

  /* ===== EVENTS POPUP ===== */
  if (openBtn) {
    openBtn.addEventListener('click', openBooking);
    openBtn.addEventListener('touchstart', function (e) {
      e.preventDefault();
      openBooking();
    });
  }

  if (closeBtn) {
    closeBtn.addEventListener('click', closeBooking);
  }

  if (popup) {
    popup.addEventListener('click', function (e) {
      if (e.target === popup) closeBooking();
    });
  }

  /* ===== SUBMIT FORM → ZALO ===== */
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      const name = document.getElementById('name').value.trim();
      const phone = document.getElementById('phone').value.trim();
      const date = document.getElementById('date').value;
      const people = document.getElementById('people').value;
      const note = document.getElementById('note').value.trim();

      if (!name || !phone || !date || !people) {
        alert('Vui lòng điền đầy đủ thông tin!');
        return;
      }

      const message =
`🔥 BOOKING THE WANN 🔥
👤 Tên: ${name}
📞 SĐT: ${phone}
📅 Ngày: ${date}
👥 Số khách: ${people}
📝 Ghi chú: ${note || 'Không có'}`;

      const zaloURL = `https://zalo.me/0778307889?text=${encodeURIComponent(message)}`;
      window.open(zaloURL, '_blank');

      closeBooking();
      form.reset();
    });
  }

  /* ===== SMOOTH SCROLL MENU ===== */
  document.querySelectorAll('header.nav a').forEach(link => {
    link.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href && href.startsWith('#')) {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) target.scrollIntoView({ behavior: 'smooth' });

        if (navbar && navbar.classList.contains('active')) {
          navbar.classList.remove('active');
        }
      }
    });
  });

  /* ===== HAMBURGER MENU ===== */
  if (hamburger && navbar) {
    hamburger.addEventListener('click', () => {
      navbar.classList.toggle('active');
    });
  }

});
/* ===== SUBMENU MOBILE ===== */
document.querySelectorAll('.submenu-toggle').forEach(toggle => {
  toggle.addEventListener('click', () => {
    const parent = toggle.closest('.has-submenu');
    parent.classList.toggle('open');
  });
});
// ===== HAMBURGER MENU FIX =====
document.addEventListener('DOMContentLoaded', function () {
  const hamburger = document.getElementById('hamburger');
const navbar = document.querySelector('.nav .navbar');

if (hamburger && navbar) {
  hamburger.addEventListener('click', () => {
    navbar.classList.toggle('active');
  });
}
  }
});
// ===== MOBILE MENU CLICK FIX =====
document.addEventListener("DOMContentLoaded", function () {

  const hamburger = document.getElementById("hamburger");
  const navbar = document.querySelector(".nav .navbar");

  if (hamburger && navbar) {
    hamburger.addEventListener("click", function () {
      navbar.classList.toggle("active");
    });
  }

  // SUBMENU TOGGLE
  document.querySelectorAll(".submenu-toggle").forEach(toggle => {
    toggle.addEventListener("click", function (e) {
      e.preventDefault();
      this.parentElement.classList.toggle("open");
    });
  });

});
<script>
let current = 0;
const perLoad = 12;
const total = 70;

const gallery = document.getElementById("menuGallery");
const btn = document.getElementById("loadMore");

function loadMenu() {
  for (let i = current + 1; i <= current + perLoad && i <= total; i++) {
    const img = document.createElement("img");
    img.src = `assets/menu/menu-${String(i).padStart(2, '0')}.jpg`;
    img.loading = "lazy";
    gallery.appendChild(img);
  }
  current += perLoad;
  if (current >= total) btn.style.display = "none";
}

btn.addEventListener("click", loadMenu);
loadMenu();
</script>
document.addEventListener("DOMContentLoaded", function () {
  const burger = document.querySelector(".menu-toggle");
  const luxMenu = document.getElementById("luxMenu");
  const luxOverlay = document.getElementById("luxOverlay");
  const luxClose = document.getElementById("luxClose");

  if (!burger || !luxMenu || !luxOverlay || !luxClose) return;

  burger.addEventListener("click", () => {
    luxMenu.classList.add("active");
    luxOverlay.classList.add("active");
  });

  function closeLux() {
    luxMenu.classList.remove("active");
    luxOverlay.classList.remove("active");
  }

  luxOverlay.addEventListener("click", closeLux);
  luxClose.addEventListener("click", closeLux);
});
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

if (hamburger && mobileMenu) {
  hamburger.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
  });
}
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

hamburger.addEventListener('click', () => {
  mobileMenu.classList.toggle('active');
});
document.getElementById('menuToggle').onclick=()=>{
  document.querySelector('.nav').classList.toggle('active');
}

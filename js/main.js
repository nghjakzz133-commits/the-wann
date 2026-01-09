document.addEventListener("DOMContentLoaded", () => {

  /* MENU FULL SCREEN */
  const toggle = document.getElementById("menuToggle");
  const menu = document.getElementById("luxMenu");
  const close = document.getElementById("luxClose");

  toggle.onclick = () => menu.classList.add("active");
  close.onclick = () => menu.classList.remove("active");

  /* BOOKING POPUP */
  const popup = document.getElementById("bookingPopup");
  const closeBooking = document.getElementById("closeBooking");

  document.querySelectorAll("#openBooking").forEach(btn=>{
    btn.onclick = () => popup.style.display = "block";
  });

  closeBooking.onclick = () => popup.style.display = "none";

});

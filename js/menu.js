const isHome =
  location.pathname === "/" ||
  location.pathname.includes("index")

document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", e => {
    if (!isHome) return

    const target = document.querySelector(link.getAttribute("href"))
    if (!target) return

    e.preventDefault()
    target.scrollIntoView({ behavior: "smooth" })
  })
})

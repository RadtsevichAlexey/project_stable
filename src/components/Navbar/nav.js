const navSlide = (burger, nav, navLinks) => {
  nav.classList.toggle('nav-active')

  navLinks.forEach((link, index) => {
    if (link.style.animation) {
      link.style.animation = ''
    } else {
      link.style.animation = `navLinkFade 0.3s ease forwards ${index / 7 + 0.7}s`
    }
  })

  burger.classList.toggle('toggle')

  console.log('working!')
}

navSlide()

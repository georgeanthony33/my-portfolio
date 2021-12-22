function init() {

  const mobileNav = document.querySelector('.icon')
  
  function logPosition() {
    if (window.innerWidth > 641) {
      if (window.scrollY > 490) {
        document.documentElement.style.setProperty('--visibility', 'hidden')
      } else {
        document.documentElement.style.setProperty('--visibility', 'visible')
      }
    } else {
      if (window.scrollY > 515) {
        document.documentElement.style.setProperty('--visibility', 'hidden')
      } else {
        document.documentElement.style.setProperty('--visibility', 'visible')
      }
    }
  }

  /* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
  function myFunction() {
    var x = document.querySelector('#hiddenLinks')
    if (x.style.display === 'block') {
      x.style.display = 'none'
    } else {
      x.style.display = 'block'
    }
  }


  mobileNav.addEventListener('click', myFunction)
  window.addEventListener('scroll', logPosition)
}

window.addEventListener('DOMContentLoaded', init)
function init() {
  
  function logPosition() {
    if (window.scrollY > 520) {
      document.documentElement.style.setProperty('--visibility', 'hidden')
    } else {
      document.documentElement.style.setProperty('--visibility', 'visible')
    }
  }

  window.addEventListener('scroll', logPosition)
}

window.addEventListener('DOMContentLoaded', init)
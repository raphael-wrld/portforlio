// Smooth scroll for navigation links with offset
document.addEventListener('DOMContentLoaded', function () {
  const navLinks = document.querySelectorAll('nav a')

  // Function to remove 'active' class from all links
  function removeActiveClasses () {
    navLinks.forEach(link => link.classList.remove('active'))
  }

  navLinks.forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault()
      const targetId = this.getAttribute('href')
      const targetElement = document.querySelector(targetId)

      // Get the height of the header
      const headerOffset = document.querySelector('header').offsetHeight
      // Calculate the position to scroll to
      const elementPosition =
        targetElement.getBoundingClientRect().top + window.scrollY
      const offsetPosition = elementPosition - headerOffset

      // Scroll to the calculated position
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })

      // Add 'active' class to the clicked link
      removeActiveClasses()
      this.classList.add('active')

      navLinks.forEach(link => link.setAttribute('aria-expanded', 'false'))
      this.setAttribute('aria-expanded', 'true')
    })
  })
  navLinks.forEach(link => {
    link.setAttribute(
      'aria-expanded',
      link.classList.contains('active') ? 'true' : 'false'
    )
  })
  // Scroll to the correct position when the page loads or reloads
  const currentHash = window.location.hash
  if (currentHash) {
    const targetElement = document.querySelector(currentHash)
    if (targetElement) {
      const headerOffset = document.querySelector('header').offsetHeight
      const elementPosition =
        targetElement.getBoundingClientRect().top + window.scrollY
      const offsetPosition = elementPosition - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })

      // Add 'active' class to the link of the current section
      document
        .querySelector(`nav a[href="${currentHash}"]`)
        .classList.add('active')
    }
  }
})

// Intersection Observer for animations
const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.1 // Trigger animation when 10% of the section is visible
}

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate')
    } else {
      entry.target.classList.remove('animate') // Remove 'animate' class when not in view
    }
  })
}, observerOptions)

document.querySelectorAll('section').forEach(section => {
  observer.observe(section)
})

// Function to toggle the menu
function toggleMenu () {
  document.querySelector('nav.main-nav ul').classList.toggle('active')
}

// Function to close the menu
function closeMenu () {
  document.querySelector('nav.main-nav ul').classList.remove('active')
}

// Toggle the menu when the hamburger button is clicked
document
  .querySelector('.hamburger-menu')
  .addEventListener('click', function (event) {
    event.stopPropagation() // Prevent the event from bubbling up to the document
    toggleMenu()
  })

// Close the menu when a link inside the menu is clicked
document.querySelectorAll('nav.main-nav ul a').forEach(function (link) {
  link.addEventListener('click', function () {
    closeMenu()
  })
})

// Close the menu when clicking outside of the menu
document.addEventListener('click', function (event) {
  const menu = document.querySelector('nav.main-nav ul')
  const hamburgerMenu = document.querySelector('.hamburger-menu')

  // Check if the click was outside of the menu and the hamburger button
  if (!menu.contains(event.target) && !hamburgerMenu.contains(event.target)) {
    closeMenu()
  }
})

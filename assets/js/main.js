// ./assets/js/main.js
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
      this.classList.add('active');

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

// // Form validation and submission
const contactForm = document.getElementById('contact-form')
if (contactForm) {
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault()
    const name = document.getElementById('name').value.trim()
    const email = document.getElementById('email').value.trim()
    const message = document.getElementById('message').value.trim()

    if (name && email && message) {
      if (validateEmail(email)) {
        alert(`Thank you, ${name}! Your message has been sent.`)
        contactForm.reset()
      } else {
        alert('Please enter a valid email address.')
      }
    } else {
      alert('Please fill out all fields.')
    }
  })
}

// // Email validation function
function validateEmail (email) {
  const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/
  return re.test(email)
}

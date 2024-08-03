// Smooth scroll for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    })
  })
})

// Intersection Observer for animations
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate')
    }
  })
})

document.querySelectorAll('section').forEach(section => {
  observer.observe(section)
})


  // Form validation and submission
  const contactForm = document.getElementById('contact-form')
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault()
    const name = document.getElementById('name').value.trim()
    const email = document.getElementById('email').value.trim()
    const message = document.getElementById('message').value.trim()

    if (name && email && message) {
      alert(`Thank you, ${name}! Your message has been sent.`)
      contactForm.reset()
    } else {
      alert('Please fill out all fields.')
    }
  })


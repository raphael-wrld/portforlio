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

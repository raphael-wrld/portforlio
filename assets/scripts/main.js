// Smooth scroll for navigation links
// Select all anchor tags in the nav element
document.querySelectorAll('nav a').forEach(anchor => {
  // Add click event listener to each anchor tag
  anchor.addEventListener('click', function (e) {
    // Prevent default link behavior
    e.preventDefault()
    // Get the href attribute value and use it to select the target element
    // and scroll to it smoothly
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    })
  })
})

// Intersection Observer for animations
// Create a new instance of IntersectionObserver
const observer = new IntersectionObserver(entries => {
  // Loop through each entry
  entries.forEach(entry => {
    // If the element is intersecting the viewport
    if (entry.isIntersecting) {
      // Add the 'animate' class to the target element
      entry.target.classList.add('animate')
    }
  })
})

// Select all section elements and observe each one
document.querySelectorAll('section').forEach(section => {
  observer.observe(section)
})


  // Form validation and submission
  // Get the contact form element
  const contactForm = document.getElementById('contact-form')
  // Add submit event listener to the contact form
  contactForm.addEventListener('submit', function (e) {
    // Prevent default form submission behavior
    e.preventDefault()
    // Get the values of the name, email, and message input fields
    // and trim any leading or trailing whitespace
    const name = document.getElementById('name').value.trim()
    const email = document.getElementById('email').value.trim()
    const message = document.getElementById('message').value.trim()

    // If all fields have a value
    if (name && email && message) {
      // Show a success message with the user's name
      alert(`Thank you, ${name}! Your message has been sent.`)
      // Reset the contact form
      contactForm.reset()
    } else {
      // Show an error message if any fields are empty
      alert('Please fill out all fields.')
    }
  })


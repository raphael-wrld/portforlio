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
// Define an object that contains information about each project
const projects = {
  'pirple-final-project': {
    title: 'Netflix Home-Page Clone',
    description:
      "As part of my Pirple HTML & CSS course, my final project was to recreate Neflix's home page.",
    githubLink: 'https://github.com/raphael-wrld/Pirple-Final-Project-2020.git',
    previewLink: 'https://raphael-wrld.github.io/Pirple-Final-Project-2020/'
  },
  'music-player': {
    title: 'Music Player App',
    description: 'A sleek music player with playlist management and controls.',
    githubLink: 'https://github.com/raphael-wrld/music-player',
    previewLink: 'https://raphael-wrld.github.io/music-player/'
  },
  'todo-app': {
    title: 'To-do App',
    description: 'Organize tasks with this intuitive to-do list app.',
    githubLink: 'https://github.com/raphael-wrld/advanced-todo-app',
    previewLink: 'https://advanced-todo-app-8c108.web.app/'
  },
  'messaging-app': {
    title: 'Messaging App',
    description: 'Real-time messaging app with user authentication.',
    githubLink: 'https://github.com/raphael-wrld/messaging-app',
    previewLink: 'https://raphael-wrld.github.io/messaging-app/'
  },
  'portfolio-webpage': {
    title: 'Portfolio Webpage',
    description: 'My personal portfolio showcasing my projects and skills.',
    githubLink: 'https://github.com/raphael-wrld/portfolio-webpage',
    previewLink: 'https://raphael-wrld.github.io/portfolio-webpage/'
  },
  'web-assignment': {
    title: 'Web Assignment',
    description:
      'After barely learning the basics of HTML we were given an assignment to create a basic website and this is what I came up with.',
    githubLink: 'https://github.com/raphael-wrld/Web-Assignment-2020',
    previewLink: 'https://raphael-wrld.github.io/Web-Assignment-2020/'
  },
  'transparent-login-form': {
    title: 'Transparent Login Form',
    description: 'Login Form I created for fun.',
    githubLink:
      'https://github.com/raphael-wrld/Transparent-Login-Form-2020-.git',
    previewLink: 'https://raphael-wrld.github.io/Transparent-Login-Form-2020-/'
  }
}

// Function to open a modal for a specific project
function openModal (projectKey) {
  // Get the project information from the projects object
  const project = projects[projectKey]

  // Check if the project exists
  if (project) {
    // Update the modal with the project information
    document.getElementById('modal-title').innerText = project.title
    document.getElementById('modal-description').innerText = project.description
    document.getElementById('modal-github-link').href = project.githubLink
    document.getElementById('modal-preview-link').href = project.previewLink

    // Show the modal
    document.getElementById('project-modal').style.display = 'block'
  }
}

// Function to close the modal
function closeModal () {
  // Hide the modal
  document.getElementById('project-modal').style.display = 'none'
}

// Add an event listener to close the modal when clicking outside of it
window.onclick = function (event) {
  if (event.target == document.getElementById('project-modal')) {
    closeModal()
  }
}

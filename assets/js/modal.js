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
    githubLink: 'https://github.com/raphael-wrld/todo-app',
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

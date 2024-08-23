// Applies the dark mode based on the stored preference in localStorage
function applyDarkMode () {
  const isDarkModeEnabled = localStorage.getItem('dark-mode') === 'enabled'
  document.documentElement.setAttribute(
    'data-theme',
    isDarkModeEnabled ? 'dark-mode' : ''
  )
  document.getElementById('dark-mode-toggle').checked = isDarkModeEnabled
}

// Function to toggle dark mode and save preference to localStorage
function toggleDarkMode () {
  const isDarkMode = document.getElementById('dark-mode-toggle').checked
  if (isDarkMode) {
    document.documentElement.setAttribute('data-theme', 'dark-mode')
    localStorage.setItem('dark-mode', 'enabled')
  } else {
    document.documentElement.removeAttribute('data-theme')
    localStorage.setItem('dark-mode', 'disabled')
  }
}

// Initialize dark mode on page load
applyDarkMode()

// Add event listener to the dark mode toggle checkbox
document
  .getElementById('dark-mode-toggle')
  .addEventListener('change', toggleDarkMode)

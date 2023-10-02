// Navigation Menu
document.getElementById('nav-button')
    .addEventListener('click', () => {
        document.getElementById('nav-menu').classList.toggle('hidden');
    });

// Animation
const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
        if (e.isIntersecting) {
            e.target.classList.add('show');
        } else {
            e.target.classList.remove('show');
        }
    });
})

const hiddenElements = document.querySelectorAll('.hide');
hiddenElements.forEach(el => observer.observe(el));

// Function to set dark mode
function setDarkMode(isDark) {
    const mode = isDark ? 'dark' : 'light';
    const icon = isDark ? 'fa-moon' : 'fa-sun';
    const removeIcon = isDark ? 'fa-sun' : 'fa-moon';

    document.documentElement.classList.toggle('dark', isDark);
    localStorage.theme = mode;
    const iconElement = document.getElementById('dark-mode-icon');
    iconElement.classList.remove(removeIcon);
    iconElement.classList.add(icon);
}

// Initialize Dark or Light mode
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
const storedTheme = localStorage.theme;
const isDarkMode = storedTheme === 'dark' || (!storedTheme && prefersDark);

setDarkMode(isDarkMode);

// Toggle Dark mode
function toggleDarkMode() {
    const isDarkMode = localStorage.theme === 'dark';
    setDarkMode(!isDarkMode);
}
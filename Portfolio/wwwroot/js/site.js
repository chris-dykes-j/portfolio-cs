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

// Dark Mode Toggle
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark');
    localStorage.theme = 'dark';
} else {
    document.documentElement.classList.remove('dark');
    localStorage.theme = 'light'
}

function toggleDarkMode() {
    if (localStorage.theme === 'dark') {
        document.documentElement.classList.remove('dark');
        localStorage.theme = 'light';
    } else {
        document.documentElement.classList.add('dark')
        localStorage.theme = 'dark';
    }
}
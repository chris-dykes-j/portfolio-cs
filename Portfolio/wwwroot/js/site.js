document.getElementById('nav-button')
    .addEventListener('click', () => {
        document.getElementById('nav-menu').classList.toggle('hidden');
    });

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
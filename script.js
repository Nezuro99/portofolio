function toggleMenu() {
    const menu = document.querySelector('.nav-links');
    menu.style.display = (menu.style.display === 'flex') ? 'none' : 'flex';
}

window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('.content');
    sections.forEach(section => {
        const position = section.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;
        if (position < screenHeight - 100) {
            section.style.animation = 'fadeInUp 1s forwards';
        }
    });
});
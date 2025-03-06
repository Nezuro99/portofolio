// Toggle menu navigasi
function toggleMenu() {
    const menu = document.querySelector('.nav-links');
    menu.style.display = (menu.style.display === 'flex') ? 'none' : 'flex';
}

// Efek animasi saat scroll
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

// Efek klik tombol
document.querySelectorAll('.download-btn, .info-button').forEach(button => {
    button.addEventListener('click', function () {
        this.classList.add('clicked');
        setTimeout(() => {
            this.classList.remove('clicked');
        }, 500);
    });
});

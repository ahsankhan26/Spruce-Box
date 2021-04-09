const navShow = () => {
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('.navLinks');

    hamburger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
    });
}

const app = () => {
    navShow();
}

app();
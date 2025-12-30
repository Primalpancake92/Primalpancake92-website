const activePage = window.location.pathname;
const navLinks = document.querySelectorAll(".nav-item")

navLinks.forEach((link) => {
    const linkPath = new URL(link.href).pathname;
    link.classList.toggle("active", linkPath === activePage)
})

const profile = document.getElementById('profile');
const social = document.getElementById('socials');

profile.addEventListener('mouseenter', () => {
    setTimeout(() => {
        social.style.animation = "social-opacity 0.3s ease-in-out forwards";
    }, 150);
});

profile.addEventListener('mouseleave', () => {
    setTimeout(() => {
        social.style.animation = "social-reverse 0.3s ease-in-out forwards";
    }, 150);
});

/* This is for the experience page */
window.addEventListener('DOMContentLoaded', () => {
    const slider = document.querySelector('.exp-viewbox')

    slider.addEventListener('mouseenter', () => {
        slider.style.overflowY = 'scroll'
    })

    slider.addEventListener('mouseleave', () => {
        slider.style.overflowY = 'hidden'
    })
})

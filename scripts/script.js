window.addEventListener("DOMContentLoaded", () => {
    const activePage = window.location.pathname;
    const navLinks = document.querySelectorAll(".nav-item")

    navLinks.forEach(link => {
        const linkPath = new URL(link.href).pathname;
        link.classList.toggle("active", linkPath === activePage)
    })
})

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

/* This is for the image gallery slider */

const imageSlider = document.querySelector("#project-grid")
const backBtn = document.querySelector("#back")
const forwardBtn = document.querySelector("#forwards")
const items = document.querySelectorAll(".boxes")

let index = 0;
const itemWidth = items[index].clientWidth;
const totalItems = items.length;

const firstItem = items[0];
const lastItem = items[totalItems - 1];

backBtn.disabled = true;

function moveItems() {
    const offset = index * (itemWidth + 50)

    imageSlider.style.transform = `translate(${-offset}px)`

    backBtn.disabled = index <= 0
    forwardBtn.disabled = index >= totalItems - 3
}

forwardBtn.addEventListener('click', () => {
    forwardBtn.style.animation = "none"
    forwardBtn.offsetHeight
    forwardBtn.style.animation = "bounce 0.15s linear"
    if (index < totalItems - 3) {
        index += 1
        moveItems()
    }
})

backBtn.addEventListener('click', () => {
    backBtn.style.animation = "none"
    backBtn.offsetHeight
    backBtn.style.animation = "bounce 0.15s linear"
    if (index > 0) {
        index -= 1
        moveItems()
    }
})

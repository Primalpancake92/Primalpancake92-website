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

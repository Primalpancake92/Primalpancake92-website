const projGrid = document.querySelector('.proj-grid'); // THis is the container that contains the NodeCollection
const projItems = document.querySelectorAll('.latest-proj'); // The items in the NodeCollection 
const circ = document.querySelectorAll('.circ'); // The NodeCollection of dots that do not have the active class;

let index = 0;
const itemWidth = projItems[index].clientWidth;
const gap = 50;

const circArray = Array.from(circ);

circArray.forEach((dot, i) => {
    dot.addEventListener('click', () => {
        index = i;
        console.log('dot', i);
        moveTo(index);
        updateActive(index);
    });
});

function moveTo(i) {
    const offset = i * (itemWidth + gap);
    projGrid.style.transition = "transform 1s ease-in-out";
    projGrid.style.transform = `translateX(${-offset}px)`;
}

function moveForwards() {
    moveTo(index);
}

function updateActive(index) {
    circArray.forEach((dot, i) => {
        dot.classList.toggle('circ-active', i === index);
    });
}

window.addEventListener("DOMContentLoaded", () => {
    updateActive(index);

    setInterval(() => {
        index = (index + 1) % projItems.length;
        moveForwards();
        updateActive(index);
    }, 5000);
});
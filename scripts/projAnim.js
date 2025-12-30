const projGrid = document.querySelector('.proj-grid'); // THis is the container that contains the NodeCollection
const projItems = document.querySelectorAll('.latest-proj'); // The items in the NodeCollection 
const circ = document.querySelectorAll('.circ'); // The NodeCollection of dots that do not have the active class;

let index = 0;
const itemWidth = projItems[index].clientWidth;
const gap = 50;

const circArray = Array.from(circ);

applyActiveEl(index);

function moveForwards() {
    const offset = (index) * (itemWidth + gap);

    projGrid.style.transition = "transform 1s ease-in-out";
    projGrid.style.transform = `translateX(${-offset}px)`;
}

function applyActiveEl (index) {
    for (let i = 0; i < circArray.length; i++) { 
        if (i == index) {
            circArray[i].classList.add('circ-active');
        } else {
             circArray[i].classList.remove('circ-active');
        }
    }
}

function returnIndex () {
    for (let i = 0; i < circArray.length; i++) {
        c
    }
}

window.addEventListener("DOMContentLoaded", () => {
    setInterval(() => {
        index = (index + 1) % projItems.length;
        moveForwards();
        applyActiveEl(index);
    }, 5000);

    clickIndex();
});
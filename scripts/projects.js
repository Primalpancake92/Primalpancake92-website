const imageSlider = document.querySelector("#project-grid")
const backBtn = document.querySelector("#back")
const forwardBtn = document.querySelector("#forwards")
const items = document.querySelectorAll(".boxes")

let index = 0;
const itemWidth = items[index].clientWidth;
const totalItems = items.length;

window.addEventListener("DOMContentLoaded", () => {
    backBtn.classList.add("disabled", index === 0);
});

function moveItems() {
    const offset = index * (itemWidth + 20)

    imageSlider.style.transform = `translateX(${-offset}px)`

    backBtn.classList.toggle("disabled", index === 0);
    forwardBtn.classList.toggle("disabled", index >= totalItems - 3);
}

forwardBtn.addEventListener('click', () => {
    forwardBtn.style.animation = "none";
    forwardBtn.offsetHeight;
    forwardBtn.style.animation = "bounce 0.1s ease";
    if (index < totalItems - 3) {
        index += 1;
        moveItems();
    }
})

backBtn.addEventListener('click', () => {
    backBtn.style.animation = "none";
    backBtn.offsetHeight;
    backBtn.style.animation = "bounce 0.1s ease";
    if (index > 0) {
        index -= 1
        moveItems()
    }
}); 

const projectLinks = document.querySelectorAll(".project-link");

projectLinks.forEach(link => {
    const seeMoreText = link.querySelector(".see-more p");
    const arrow = link.querySelector(".see-more i");

    link.addEventListener("mouseenter", () => {
        arrow.style.transform = "rotate(45deg)";
        seeMoreText.style.animation = "opacity-more 0.3s ease-in-out forwards";
        seeMoreText.style.display = "flex";
        link.style.animation = 'see-more 0.3s ease-in-out forwards';
    });

    link.addEventListener("mouseleave", () => {
        arrow.style.transform = "rotate(0deg)";
        setTimeout(() => {
            link.style.animation = 'see-less 0.3s ease-in-out forwards';
            seeMoreText.style.animation = "opacity-less 0.3s ease-in-out forwards";
            seeMoreText.style.display = "none";
        }, 5);
    });
});

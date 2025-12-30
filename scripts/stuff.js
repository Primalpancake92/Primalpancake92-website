const firstDot = document.querySelector('.dots-1');
const secDot = document.querySelector('.dots-2');
const thirdDot = document.querySelector('.dots-3');
const fourthDot = document.querySelector('.dots-4');

window.addEventListener("DOMContentLoaded", () => {
    firstDot.style.animation = 'bubbles 7s ease-in-out infinite';
    
    setTimeout(() => {
        secDot.style.animation = 'bubbles 7s ease-in-out infinite';
    }, 1000);

    setTimeout(() => {
        thirdDot.style.animation = 'bubbles 7s ease-in-out infinite';
    }, 2000);

    setTimeout(() => {
        fourthDot.style.animation = 'bubbles 7s ease-in-out infinite';
    }, 5000);
});

const toHomeLink = document.querySelector('.to-home a');

toHomeLink.addEventListener('mouseover', () => {
    toHomeLink.style.animation = "bouncy 1s ease infinite";
})

toHomeLink.addEventListener('mouseout', () => {
    toHomeLink.style.animation = 'none'; 
})

const arrayOfSocials = document.querySelectorAll(".social-bub");
console.log(Array.from(arrayOfSocials));

for (let i = 0; i < Array.from(arrayOfSocials).length ; i++) {
    setTimeout(() => {
        arrayOfSocials[i].style.animation = "social-bounce 2s ease-in-out infinite";
    }, i * 400);
    
};
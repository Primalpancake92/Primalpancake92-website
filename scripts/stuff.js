const firstDot = document.querySelector('.dots-1');
const secDot = document.querySelector('.dots-2');
const thirdDot = document.querySelector('.dots-3');

window.addEventListener("DOMContentLoaded", () => {
    firstDot.style.animation = 'bubbles 7s ease-in-out infinite';
    
    setTimeout(() => {
        secDot.style.animation = 'bubbles 7s ease-in-out infinite';
    }, 1000);

    setTimeout(() => {
        thirdDot.style.animation = 'bubbles 7s ease-in-out infinite';
    }, 2000);
});

const toHomeLink = document.querySelector('.to-home a');

toHomeLink.addEventListener('mouseover', () => {
    toHomeLink.style.animation = "bouncy 1s ease infinite";     
})

toHomeLink.addEventListener('mouseout', () => {
    toHomeLink.style.animation = 'none'; 
})

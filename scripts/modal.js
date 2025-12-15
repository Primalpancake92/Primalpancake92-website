const contactBtn = document.querySelector('.contact-btn');
const modal = document.querySelector('.some-modal');

contactBtn.onclick = function() {
    modal.style.animation = "appear 0.3s ease-in";
    modal.style.display = 'flex';
}

window.onclick = (event) => {
    if (event.target == modal) {
        modal.style.animation = "disappear 0.3s ease-out";
        setTimeout(() => {
            modal.style.display = "none";
        }, 300);
    }
}

const inputCollection = document.querySelectorAll('.email-side input');

const inputArray = Array.from(inputCollection);
console.log(inputArray);

for (const input of inputArray) {
    input.addEventListener('click', () => {  
        input.classList.add('input-active');
    }); 
    input.addEventListener('blur', () => {
        input.classList.remove('input-active');
    });
};
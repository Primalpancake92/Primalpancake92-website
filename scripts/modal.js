const contactBtn = document.querySelector('.contact-btn');
const modal = document.querySelector('.some-modal');
const form = document.querySelector('.email-side');

window.addEventListener('DOMContentLoaded', () => {
    contactBtn.onclick = function() {
        modal.style.animation = 'appear 0.5s ease';
        modal.style.display = 'flex';
    }

    window.onclick = (event) => {
        if (event.target == modal) {
            modal.style.animation = 'disappear 0.5s ease';

            setTimeout(() => {
                modal.style.display = 'none';
            }, 300);
        }
    }
});
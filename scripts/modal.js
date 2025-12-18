const contactBtn = document.querySelector('.contact-btn');
const modal = document.querySelector('.some-modal');
const form = document.querySelector('.email-side');

contactBtn.onclick = function() {
    modal.style.animation = 'appear 0.3s ease-in';
    modal.style.display = 'flex';
}

window.onclick = (event) => {
    if (event.target == modal) {
        modal.style.animation = 'disappear 0.3s ease-out';

        setTimeout(() => {
            modal.style.display = 'none';
            form.reset();
        }, 300);
    }
}

const inputCollection = document.querySelectorAll('.email-side input');

const inputArray = Array.from(inputCollection);
console.log(inputArray);

for (const input of inputArray) {
    input.addEventListener('focus', () => {  
        input.classList.add('input-active') ;
    }); 
    input.addEventListener('blur', () => {
        input.classList.remove('input-active');
    });
};

/* This is the character counter function */

function maxCharCount (someTextarea, charCounter) {
    const maxChar = 1000;
    let currentLength = someTextarea.value.length;

    charCounter.textContent = currentLength.toString() + '/' + maxChar.toString();

    if (!someTextarea.value) {
        charCounter.textContent = "";
    }
    
    if (currentLength >= maxChar) {
        someTextarea.value = someTextarea.value.substring(0, maxChar);
        charCounter.textContent = '1000' + '/' + maxChar.toString();
    }

    if (someTextarea.value.length >= 950) {
        charCounter.style.color = '#eb4b4bf3';
    } else {
        charCounter.style.color = 'black';
    }
}

const message = document.querySelector('#modal-msg');
const charCnt = document.querySelector('.char-count');
console.log(message);

message.addEventListener('focus', () => {
    message.classList.add('input-active');
}); 

message.addEventListener('blur', () => {
    message.classList.remove('input-active');
});

message.addEventListener('input', () => {
    console.log(message.value.length);
    charCnt.innerHTML = message.value.length;
    maxCharCount(message, charCnt);
});

function sendEmail (event) {
    event.preventDefault();

    const submitBtn = document.getElementById('submit');
    const formData = new FormData(form);

    console.log("working...");
    submitBtn.disabled = true

    fetch("https://formspree.io/f/xaqwwjaw", {
        method: "POST",
        body: formData,
        headers: {
            "Accept" : "application/json"
        }
    }).then((response) => {
        if (response.ok) {
            alert("Your email has been sent.");
            console.log({
                code: "200 OK",
                inter: "Email sent..."
            });
            form.reset();
        } else {
            alert("There was a problem submitting the form");
            console.log({
                code: "554 Failed",
                inter: "Email not sent..."
            });
        }
    }).catch((error) => {
        alert("Server couldn't be connected");
    }).finally(() => {
        submitBtn.innerText = "Submit";
        submitBtn.disabled = false;
    })
}

form.addEventListener('submit', sendEmail());

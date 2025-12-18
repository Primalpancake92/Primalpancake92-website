const formName = document.getElementById('modal-email');

function sendEmail () {
    var params = {
        name: formName.toString(),
        email:  document.getElementById('modal-email'),
        subject: document.getElementById('modal-about'),
        message: document.getElementById('modal-msg')
    };
}

const serviceId = "service_0ak9lp5";
const tempId = "";
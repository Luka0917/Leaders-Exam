const form = document.querySelector('form');
const errorP = document.getElementById('error-p');

form.addEventListener('submit', e => {
    e.preventDefault();
    const username = form.username.value;
    const password = form.password.value;
    const data = JSON.parse(localStorage.getItem('data'));

    let equalUsername = false;
    let equalPassword = false;

    if(username === data.username){
        equalUsername = true;
    };
    if(password === data.password){
        equalPassword = true;
    };

    if(!equalUsername){
        errorP.textContent = 'Wrong username!'
    };
    if(!equalPassword){
        errorP.textContent = 'Wrong password!'
    };

    if(equalUsername && equalPassword){
        window.open('/Exam-2/index.html', '_self');
    };
});
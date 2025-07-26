const form = document.querySelector('form');
const errorP = document.getElementById('error-p');

form.addEventListener('submit', e => {
    e.preventDefault();
    const username = form.username.value;
    const email = form.email.value;
    const password = form.password.value;

    let is8SymbolsLong = false;
    let haveUpper = false;
    let haveNumber = false;
    let haveSymbol = false;
    const symbols = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '=', '+', '{', '}', '[', ']', ':', ';', '/', '?', '<', '>', '|'];

    if(password.length >= 8){
        is8SymbolsLong = true;
    };
    for(let i = 0; i < password.length; i++){
        if(password[i] === password[i].toUpperCase()){
            haveUpper = true;
        };
        if(password[i] >= 0 && password[i] <= 9){
            haveNumber = true;
        };
    };
    for(let x = 0; x < symbols.length; x++){
        if(password.includes(symbols[x])){
            haveSymbol = true
        };
    };

    if(!is8SymbolsLong){
        errorP.textContent = 'Password must be 8 symbols long!'
    };
    if(!haveUpper){
        errorP.textContent = 'Password must have one special symbol!'
    };
    if(!haveNumber){
        errorP.textContent = 'Password must have one number!'
    };
    if(!haveSymbol){
        errorP.textContent = 'Password must have one special symbol!'
    };

    if(is8SymbolsLong && haveUpper && haveNumber && haveSymbol){
        const data = {
            username: username,
            email: email,
            password: password
        };
        localStorage.setItem('data', JSON.stringify(data));
        window.open('/Exam-2/index.html', '_self');
    };
});
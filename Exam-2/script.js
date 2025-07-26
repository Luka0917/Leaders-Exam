const loginBtn = document.getElementById('log');
const registerBtn = document.getElementById('reg');
const regLogDiv = document.getElementById('reg-log-div');
const form = document.querySelector('form');
const main = document.getElementById('main');
const postDiv = document.getElementById('post-div');
const data = JSON.parse(localStorage.getItem('data'));


loginBtn.addEventListener('click', () => window.open('./login/index.html', '_self'));
registerBtn.addEventListener('click', () => window.open('./register/index.html', '_self'));


let haveAcc = false;
if(data){
    haveAcc = true;
    regLogDiv.innerHTML = `
        <p id="username-p">${data.username}</p>
        <div id="user-div">
            <i class="fa-solid fa-user"></i>
        </div>
    `;
};
if(!haveAcc){
    postDiv.style.opacity = '0';
};

// localStorage.clear();


form.addEventListener('submit', e => {
    e.preventDefault();

    const title = form.title.value;
    const text = form.text.value;
    const publicPrivate = form.publicPrivate.value;

    main.innerHTML += `
        <div class="post-div">
            <b class="post-title">${title}</b>
            <p class="post-text">${text}</p>
        </div>
    `;
});
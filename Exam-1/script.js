const main = document.getElementById('main');
const productsImg = document.getElementsByClassName('product-img');
const title = document.getElementsByClassName('title');
const price = document.getElementsByClassName('price');
const addToCartBtn = document.getElementsByClassName('add-to-cart-btn');
const totalPrice = document.querySelector('#total-p b');
const orderBtn = document.getElementById('order-btn');

async function func(){
    const fetchedData = await fetch('https://fakestoreapi.com/products');
    if(!fetchedData.ok){
        throw new Error('Error!');
    };
    const data = await fetchedData.json();
    console.log(data);
    for(let i = 0; i < productsImg.length; i++){
        productsImg[i].src = data[i].image;
        title[i].textContent = data[i].title;
        price[i].textContent = `$${data[i].price}`;
    };
    let totalPriceCount = 0;
    for(let i = 0; i < addToCartBtn.length; i++){
        addToCartBtn[i].addEventListener('click', () => {
            totalPriceCount += data[i].price;
            totalPrice.innerHTML = `$${totalPriceCount.toFixed(2)}`;
        });
    };
};
func();

orderBtn.addEventListener('click', () => {
    if(totalPrice.textContent === '$0.00'){
        alert('There is nothing to order!');
    }else{
        alert('Products ordered!');
    };
});
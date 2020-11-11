let cart;
const addToCartBtn=document.querySelector('.cartButton');
addToCartBtn.addEventListener('click',addToCart);

function addToCart(){
    alert('adding to cart');
    const ingrediants=document.querySelectorAll('.ing');
    for(ingrediant of ingrediants){
        cart.push(ingrediant.innerHTML);
    }
    
}
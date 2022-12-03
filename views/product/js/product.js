



function createCard(img ,name, price, description,i) {
    const card = document.createElement('div');
    card.classList.add('card');

    const nameElement = document.createElement('h1');
    nameElement.textContent = name;

    const imgElement = document.createElement('img');
    imgElement.src = img;

    const priceElement = document.createElement('div');
    priceElement.classList.add('price');
    priceElement.textContent = "$" + price;

    const descrtElement = document.createElement('div');
    descrtElement.classList.add('pescrtion');
    descrtElement.textContent = description;

    const detallElement = document.createElement('button');
    detallElement.classList.add('detallElement');
    detallElement.textContent = "Detall";
    detallElement.dataset.index = i
    detallElement.addEventListener("click", detailProduct);

 
    
    card.appendChild(nameElement);
    card.appendChild(imgElement);
    card.appendChild(priceElement);
    card.appendChild(descrtElement);
    card.appendChild(detallElement);
    
    return card;
}
// get value form localStorage 
function displayProduct() {
    let products = JSON.parse(localStorage.getItem('product-name')) ?? [];
    for (let i in products) {
        let product = products[i]
        
        let card = createCard(product.imag ,product.name, product.price, product.description,i);
        container.appendChild(card);
    }
}
const container = document.querySelector('#container');




// Search Product -----------------------------------
function getSearch(){
    let allcard = document.querySelectorAll(".card")
    console.log(allcard)
    let text_search = search_value.value.toLocaleLowerCase();
    for(let i =0; i < allcard.length; i++){
         let card = allcard[i]
        let cards = card.firstElementChild.textContent.toLocaleLowerCase();
        // console.log(card)
        if (cards.includes(text_search)){
            card.style.display ="block";      

        }
        else{
            card.style.display ="none";
            
            
        }
    }
}
let search_value = document.querySelector("#search");
search_value.addEventListener("keyup", getSearch)






// -----------Product detalls-------------------
const dom_product_dialog = document.querySelector("#detail-product");

function show(element) {
    element.style.display = "block";
}

function hide(element) {
    element.style.display = "none";
  }

function onCancel(e) {

    hide(dom_product_dialog);
}
function onBuynow(e) {

    hide(dom_product_dialog);
}

function detailProduct(event) {
    let products = JSON.parse(localStorage.getItem('product-name')) ?? [];

    let index = event.target.dataset.index;
    let product = products[index]
    console.log(product)
    let title  = document.getElementById('title')
    let image  = document.getElementById('image')
    let price  = document.getElementById('price')
    let description  = document.getElementById('description')
    image.src = product.imag;
    title.textContent = "Product Name : "+product.name;
    price.textContent = "Price : "+ "$" + product.price;
    description.textContent ="description :  "+ product.description;

    show(dom_product_dialog);
    
}


  

let btn_cancel = document.querySelector("#cancel");
let btn_buy = document.querySelector("#buy");
btn_cancel.addEventListener("click", onCancel);
btn_buy.addEventListener("click", onBuynow);
document.addEventListener('DOMContentLoaded', () => { displayProduct(); });
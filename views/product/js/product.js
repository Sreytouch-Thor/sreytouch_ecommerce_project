
function createCard(img ,name, price, pescrtion) {
    const card = document.createElement('div');
    card.classList.add('card');
    // console.log(card)

    const nameElement = document.createElement('h1');
    // nameElement.classList.add('name');
    nameElement.textContent = name;

    const imgElement = document.createElement('img');
    imgElement.src = img;
    // console.log(imgElement)


    // const cardBody = document.createElement('div');
    // cardBody.classList.add('card-body');

    const priceElement = document.createElement('div');
    priceElement.classList.add('price');
    priceElement.textContent = "$" + price;

    const descrtElement = document.createElement('div');
    descrtElement.classList.add('pescrtion');
    descrtElement.textContent = pescrtion;

    const buyElement = document.createElement('button');
    buyElement.classList.add('buyElement');
    buyElement.textContent = "Buy Now";
    // console.log(buyElement)
    
    card.appendChild(nameElement);
    card.appendChild(imgElement);
    card.appendChild(priceElement);
    card.appendChild(descrtElement);
    card.appendChild(buyElement);
    
    return card;
}
// get value form localStorage 
function displayProduct() {
    let products = JSON.parse(localStorage.getItem('product-name')) ?? [];
    for (let product of products) {
        let card = createCard(product.imag ,product.name, product.price, product.description);
        container.appendChild(card);
    }
}
const container = document.querySelector('#container');




// Search Product 
function getSearch(){
    let allcard = document.querySelectorAll(".card")
    let text_search = search_value.value.toLocaleLowerCase();
    for(let i =0;i < allcard.length; i++){
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

document.addEventListener('DOMContentLoaded', () => { displayProduct(); });
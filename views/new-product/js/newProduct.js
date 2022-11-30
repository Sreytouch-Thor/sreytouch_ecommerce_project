
const fullname = document.getElementById('fname');
const prices = document.getElementById("price");
console.log(prices)
const imag = document.getElementById("myFile");
console.log(imag);
const description = document.getElementById("description");
console.log(description)
const display =document.getElementById("display");
const button = document.querySelector("#add-product");
let productlist = [];
let productoject = {};
button.addEventListener("click",(e) =>{
        e.preventDefault();
        // console.log(fullname.value);
        productoject = {name: fullname.value ,price: prices.value , imag: imag.value , description : description.value }
        productlist.push(productoject);
        console.log(productlist)
    
        localStorage.setItem("product", JSON.stringify(productlist));
})
    
let productsum = JSON.parse(localStorage.getItem("product"));

// let addProduct = document.getElementById("add-product");
// addProduct.addEventListener("click", submitProduct);
// document.querySelector(".create_product").style.display = "none";
const dom_questions_dialog = document.querySelector("#questions-dialog");
function addProductToLocalStorage(key, value) {
    localStorage.setItem(key, value);
}

function getProductFromLocalStorage(key) {
    return JSON.parse(localStorage.getItem(key)) ?? [];
}



function createNewRecord(index,name, price,image , description ,edit, deleteproduct) {
    const tr = document.createElement('tr');
    tr.dataset.index = index;
    const tdOne = document.createElement('td');
    const tdTwo = document.createElement('td');
    const tdThree = document.createElement('td');
    const tdfour = document.createElement('td');
    const tdfive = document.createElement('td');
    const tdsix = document.createElement('td');
    const tagImage = document.createElement('img');
    tdOne.textContent = name;
    tdTwo.textContent = price;
    // tdThree.textContent = imag;
    tagImage.src = image;
    tagImage.className = 'tagImage';
    tdThree.appendChild(tagImage);
    tdfour.textContent = description;
    tdfive.textContent = edit;
    tdsix.textContent = deleteproduct;


    //create button edit
    const btnEdit = document.createElement('button');
    btnEdit.classList.add('btnEdit');
    btnEdit.textContent = "Edit";

    btnEdit.addEventListener("click",(e) =>{
        // document.querySelector("#questions-dialog").style.display = "block";
        let index = e.target.parentElement.parentElement.dataset.index;
        document.getElementById('chose_name').value = name;
        document.getElementById("chose_price").value = price;
        document.getElementById("chose_img").value = imag;
        document.getElementById("chose_description").value = description;        
        productList.splice(index,1)
        show(dom_questions_dialog);
        // document.querySelector("#create").textContent = "Edit";
        
    })
    

    const btnDelete = document.createElement('button');
    btnDelete.classList.add('btnDelete');
    btnDelete.textContent = "Delete";
    btnDelete.addEventListener("click",(e) =>{
        let index = e.target.parentElement.parentElement.dataset.index;
        productList.splice(index ,1);
        addProductToLocalStorage("product-name",JSON.stringify(productList));
        displayProduct();
    });

    tdfive.appendChild(btnEdit);
    tdsix.appendChild(btnDelete);

    // const editProduct = document.createElement("img");
    


    tr.appendChild(tdOne);
    tr.appendChild(tdTwo);
    tr.appendChild(tdThree);
    tr.appendChild(tdfour);
    tr.appendChild(tdfive);
    tr.appendChild(tdsix);

    return tr
}

function createTableHeader() {
    const headerRow = document.createElement('tr');
    const thOne = document.createElement('th');
    const thTwo = document.createElement('th');
    const thThree = document.createElement('th');
    const thfour = document.createElement('th');
    const thfive = document.createElement('th');
    const thsix = document.createElement('th');



    thOne.textContent = "name";
    thTwo.textContent = "price";
    thThree.textContent = "imag";
    thfour.textContent = "description";
    thfive.textContent = "edit";
    thsix.textContent = "delete";

    headerRow.appendChild(thOne);
    headerRow.appendChild(thTwo);
    headerRow.appendChild(thThree);
    headerRow.appendChild(thfour); 
    headerRow.appendChild(thfive); 
    headerRow.appendChild(thsix); 

    return headerRow;
}

function displayProduct() {

    if(tableData.firstElementChild !== null ) {
        document.querySelector('table').remove();
    }
    const  newTable = document.createElement('table');
    newTable.appendChild(createTableHeader());
    let products = getProductFromLocalStorage("product-name");

    for (let index = 0 ; index < products.length ; index++) {
        let product = products[index];
        let row = createNewRecord(index,product.name, product.price + "$", product.imag , product.description );
        newTable.appendChild(row)
    }
    tableData.appendChild(newTable);

}
const table = document.getElementById("table");

const fullname = document.getElementById('fname');
const prices = document.getElementById("price");
const imag = document.getElementById("myFile");

const description = document.getElementById("description");
const btn = document.querySelector("#button");
const tableData = document.querySelector('.table-data');

let productList = JSON.parse(localStorage.getItem('product-name')) ?? [];

btn.addEventListener('click', (e) => {
    e.preventDefault();
    
    if (fullname.value !== "" && prices.value !== "" && imag.value !== "" && description.value !== "" ) {

    
    let productObject = {name: fullname.value, price: prices.value, imag:imag.value, description:description.value}

    productList.push(productObject);

    fullname.value = ""
    prices.value = ""
    imag.value = ""
    description.value = ""
    // add the product
    addProductToLocalStorage('product-name', JSON.stringify(productList));
    }else {
        window.confirm("You must complete all inputs");
        return;
    }

    displayProduct();
})


function hide(element) {
    element.style.display = "none";
}
  
function show(element) {
    element.style.display = "block";
}
  
  

  
function onCancel(e) {
    // TODO : when clicking on ADD button, hide the dialog
    dom_questions_dialog.style.display = "none";
    products = JSON.parse(localStorage.getItem("product-name"));
}




let chose_name = document.getElementById('chose_name');
let chose_price = document.getElementById("chose_price") ;
let chose_img = document.getElementById("chose_img");
let chose_description = document.getElementById("chose_description");
let btnCreate = document.getElementById("edit");
btnCreate.addEventListener("click",(e) =>{
    //  when clicking on CREATE button :
    // 1- Hide the dialog
    dom_questions_dialog.style.display = "none";
    // 2- Create a new product with the dialog form values
    let newProduct = {name: chose_name.value, price: chose_price.value, imag:chose_img.value, description:chose_description.value}
    productList.push(newProduct)

    addProductToLocalStorage('product-name', JSON.stringify(productList));
    displayProduct();
})
  // Add Events
  let btn_cancel = document.querySelector("#cancel");
  btn_cancel.addEventListener("click", onCancel);
document.addEventListener('DOMContentLoaded', () => { displayProduct() })


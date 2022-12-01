function addProductToLocalStorage(key, value) {
    localStorage.setItem(key, value);
}

function getProductFromLocalStorage(key) {
    return JSON.parse(localStorage.getItem(key)) ?? [];
}
const table = document.getElementById("table");

function createNewRecord(name, price,imag , description ,edit, deleteproduct) {
    const tr = document.createElement('tr');
    const tdOne = document.createElement('td');
    const tdTwo = document.createElement('td');
    const tdThree = document.createElement('td');
    const tdfour = document.createElement('td');
    const tdfive = document.createElement('td');
    const tdsix = document.createElement('td');
    tdOne.textContent = name;
    tdTwo.textContent = price;
    tdThree.textContent = imag;
    tdfour.textContent = description;
    tdfive.textContent = edit;
    tdsix.textContent = deleteproduct;

    // const btnEdit = document.createElement("img");
    // btnEdit.src='../imag/edit.png';
    
    // const btnDelete = document.createElement("img");
    // btnDelete.src='../imag/delete.png';
    const btnEdit = document.createElement('button');
    btnEdit.classList.add('btnEdit');
    btnEdit.textContent = "Edit";
    

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
    console.log(tdsix)

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
    for (let product of products) {
        let row = createNewRecord(product.name, product.price + "$", product.imag , product.description );
        newTable.appendChild(row)
    }
    tableData.appendChild(newTable);

}

const fullname = document.getElementById('fname');
const prices = document.getElementById("price");
const imag = document.getElementById("myFile");
const description = document.getElementById("description");
// const edit = document.querySelector("#edit");
// console.log(edit)
// const deleteproduct = document.querySelector("#delete");
// edit.appendChild()
// console.log(action)
const btn = document.querySelector("#button");
const tableData = document.querySelector('.table-data');

let productList = JSON.parse(localStorage.getItem('product-name')) ?? [];

btn.addEventListener('click', (e) => {
    e.preventDefault();
    
    if (fullname.value !== "" && prices.value !== "" && imag.value !== "" && description.value !== "" ) {

    
    let productObject = {name: fullname.value, price: prices.value, imag:imag.value, description:description.value}

    productList.push(productObject);

    // fullname.value = ""
    // prices.value = ""
    // imag.value = ""
    // description.value = ""
    // add the product
    addProductToLocalStorage('product-name', JSON.stringify(productList));
    }else {
        window.confirm("You must complete all inputs");
        return;
    }

    displayProduct();
})
document.addEventListener('DOMContentLoaded', () => { displayProduct() })


// function search(event) {
//     // 1- Get the search text
//     let searchProduct = searchProduct.value.toLowerCase();
//     // let textlower = bookoftext.toLowerCase()
//     let allBooks = document.querySelectorAll(".name")
//     // 2- Loop on all LI
//     for (let i in allBooks){
//       if (allBooks[i].textContent.toLowerCase() === searchBooks|| allBooks[i].textContent.toLowerCase().includes(searchBooks)) {
//         allBooks[i].parentNode.style.display="block"
//       }
//       else {
//         allBooks[i].parentNode.style.display="none";
//       }
//     }
  
//   }
  

  
// function deleteResult(event) {
	
//     // 1- Check the event if raised on the button delete 
//     if(event.target.textContent == "delete"){
//       event.target.this.parentElement.style.display = 'none';
//       console.log(deleteResult);
//     }
    
//   }
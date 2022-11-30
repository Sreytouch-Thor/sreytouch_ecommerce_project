function addProductToLocalStorage(key, value) {
    localStorage.setItem(key, value);
}

function getProductFromLocalStorage(key) {
    return JSON.parse(localStorage.getItem(key)) ?? [];
}

function createNewRecord(name, price,imag , quantity) {
    const tr = document.createElement('tr');
    const tdOne = document.createElement('td');
    const tdTwo = document.createElement('td');
    const tdThree = document.createElement('td');
    const tdfour = document.createElement('td');
    tdOne.textContent = name;
    tdTwo.textContent = price;
    tdThree.textContent = imag;
    tdfour.textContent = quantity;

    tr.appendChild(tdOne);
    tr.appendChild(tdTwo);
    tr.appendChild(tdfour);
    tr.appendChild(tdThree);
    console.log(tr)

    return tr;

}

function createTableHeader() {
    const headerRow = document.createElement('tr');
    const thOne = document.createElement('th');
    const thTwo = document.createElement('th');
    const thThree = document.createElement('th');
    const thfour = document.createElement('th');
    thOne.textContent = "name";
    thTwo.textContent = "price";
    thThree.textContent = "imag";
    thfour.textContent = "quantity";

    headerRow.appendChild(thOne);
    headerRow.appendChild(thTwo);
    headerRow.appendChild(thThree);
    headerRow.appendChild(thfour);

    return headerRow;
}
function displayProduct() {

    if(tableData.firstElementChild !== null ) {
        document.querySelector('table').remove();
    }
    const  newTable = document.createElement('table');
    newTable.appendChild(createTableHeader());
    let products = getProductFromLocalStorage('product-name');
    for (let product of products) {
        let row = createNewRecord(product.name, product.price, product.imag , product.quantity);
        newTable.appendChild(row)
        console.log(row)
    }
    tableData.appendChild(newTable);

}

const result = document.querySelector('#result');
const productName = document.querySelector('#product-name');
const btn = document.querySelector('button');
const tableData = document.querySelector('.table-data');

let productList = JSON.parse(localStorage.getItem('product-name')) ?? [];

btn.addEventListener('click', (e) => {
    e.preventDefault();
    if (productName.value === '') {
        return;
    }
    let productObject = {name: productName.value, price: 10, imag:77, quantity:2}

    productList.push(productObject);

    productName.value = ""
    // add the product
    addProductToLocalStorage('product-name', JSON.stringify(productList));

    displayProduct();
})



document.addEventListener('DOMContentLoaded', () => { displayProduct() })

//invoice3.js  aka Poke 10.1
//import data from products.js into this file
import { itemData, quantity} from './products_data.js';

//consolidate declared variables to one area for ease of edit and review
let subtotal=0;
let taxRate = 0.0575;
let taxAmount = 0;
let total = 0;
let shippingCharge = 0;

//Calculate extened prices for each item using a loop and increment subtotal as it goes
 
 
generateItemRows();

//Calculate shipping based on sub-total

if (Subtotal <= 50) {
    shippingCharge = 2;
} else if (Subtotal <= 100) {
    shippingCharge = 5;
} else {
    shippingCharge = Subtotal * 0.05; //5% of the subtotal
}
//Calculate total including shipping
taxAmount = subtotal*taxRate;
Total = Subtotal + taxAmount + shippingCharge;

//Use DOM manipulation to add product rows dynamically to the table.
let table = document.getElementById('invoiceTable');
//use the generate_item_rows function to generate the part of the invoice table related to the items
for (let i = 0; i < itemData.length; i++) {
    let row = table.insertRow();
    row.insertCell(0).innerHTML = itemData[i].brand;
    row.insertCell(1).innerHTML = quantity[itemData[i].quantityIndex];
    row.insertCell(2).innerHTML = '$' + itemData[i].price.toFixed(2);
    row.insertCell(3).innerHTML = '$' + extendedPrices[i].toFixed(2);
}
//Set the total cell in bold
document.getElementById ('total_cell').innerHTML = `$${Total.toFixed (2)}`; 

// Send the subtotal, tax, and total cells to the table
document.getElementById('subtotal_cell').innerHTML = '$' + Subtotal.toFixed(2);
document.getElementById('tax_cell').innerHTML = '$' + taxAmount.toFixed(2);
document.getElementById('shipping_cell').innerHTML = '$' +shippingCharge.toFixed(2);

//validateQuantity function
function validateQuantity(quantity) {
    if (isNaN(quantity)) {
        return "Not a Number";
    }
    if (quantity < 0 && !Number.isInteger(quantity)) {
        return "Negative inventory and not an Integer";
    }
    if (quantity < 0) {
        return "Negative Inventory";
    }
    if (!Number.isInteger(quantity)) {
        return "not an Integer";
    }
    return ""; //no errors. 
}

//function to generate item rows and apply quantity validation
function generateItemRows() {
    //get the table element to populate
    let table = document.getElementById('invoiceTable');

    //clear the table content
    table.innerHTML = '';

    //initialize variable to keep track of errors
    let hasErrors = false;

    //loop through the itemData and quantity arrays
    for (let i = 0; i < itemData.length; i++) {
        let item = itemData[i];
        let itemQuantity = quantity[item.quantityIndex];

        //validate the quantity
        let validateMessage = validateQuantity(itemQuantity);

        //if there are validation errors, display the item with an error message
        if (validateMessage !== "") {
            hasErrors = true;
            let row =table.insertRow();
            row.insertCell(0).innerHTML = item.brand;
            row.insertCell(1).innerHTML = validateMessage;
            row.insertCell(2).innerHTML = '$'+ item.price;
            row.insertCell(3).innerHTML = '';
        } else if (itemQuantity > 0) {
            //calculate the extended price if quantity is valid and positive
            let extendedPrice = item.price * itemQuantity;
            subtotal += extendedPrice;

            //display the item with the calculated extended price
            let row =table.insertRow();
            row.insertCell(0).innerHTML = item.brand;
            row.insertCell(1).innerHTML = itemQuantity;
            row.insertCell(2).innerHTML = '$'+ item.price.toFixed(2);
            row.insertCell(3).innerHTML = '$'+ extendedPrice.toFixed(2);
        }
    }
    //IF there are no errors, display the total
    if (!hasErrors) {
        document.getElementById('total_cell').innerHTML = '$'+ total.toFixed(2);
    }
}




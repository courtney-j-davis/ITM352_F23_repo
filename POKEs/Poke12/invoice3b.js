// invoice3.js

// Fetch the query string parameters
const params = new URL(document.location).searchParams;
// Loop through the expected quantity parameters and update the quantity array

let quantity=[];//defining the variable here so JS doesn't default to global variable. 

for (let i = 0; i < itemData.length; i++) {//the for loop, inside the loop we are trying to find the quantity of each item. 
    let quantityValue = params.get(`quantity${i}`);//This value comes from a form that is filled out on a URL
    if (quantityValue !== null) { //this is checking if there is a quantity and if we did it tells us how many items we want. 
        quantity[itemData[i].quantityIndex] = Number(quantityValue);
    }
}

//import data from products.js into this file. This is specifying what to import from the 'products.js' file. It is importing an object 'itemData'
import { itemData } from './products.js';

//the following defines the variables for subtotal, tax, shipping charge, and total that will be on the invoice
let subtotal=0;
let taxRate = 0.0575; // 5.75%
let taxAmount = 0;
let total = 0;
let shippingCharge = 0;

generateItemRows();
//This is the shipping charge rule for the store.
if (subtotal <= 50) {
    shippingCharge = 2;
} else if (subtotal <= 100) {
    shippingCharge = 5;
} else {
    shippingCharge = subtotal * 0.05; // 5% of the subtotal
}

// Calculate total including shipping
taxAmount = subtotal*taxRate;
total = subtotal + taxAmount + shippingCharge;

// Set the total cell in bold
document.getElementById('total_cell').innerHTML = `$${total.toFixed(2)}`;

// Set the subtotal, tax, and total cells
document.getElementById('subtotal_cell').innerHTML = '$' + subtotal.toFixed(2);
document.getElementById('tax_cell').innerHTML = '$' + taxAmount.toFixed(2);
document.getElementById('shipping_cell').innerHTML = '$' +shippingCharge.toFixed(2);

//there are many ways to code the validateQuantity function... here is one. I have a different method used for the previous invoice 3. 
function validateQuantity(quantity) {
  let errorMessage = "";

  switch (true) {
      case isNaN(quantity):
          errorMessage = "Not a number. Please enter a non-negative quantity to order.";
          break;
      case quantity < 0 && !Number.isInteger(quantity):
          errorMessage = "Negative inventory and not an Integer. Please enter a non-negative quantity to order.";
          break;
      case quantity < 0:
          errorMessage = "Negative inventory. Please enter a non-negative quantity to order.";
          break;
      case !Number.isInteger(quantity):
          errorMessage = "Not an Integer. Please enter a non-negative quantity to order.";
          break;
      default:
          errorMessage = ""; // No errors
          break;
  }

  return errorMessage;
}
  

  // Function to generate item rows and apply quantity validation
function generateItemRows() {
    // Get the table element to populate
    let table = document.getElementById('invoiceTable');
  
    // Clear the table content
    table.innerHTML = '';
  
    // Initialize variable to keep track of errors.  In this context, false typically means that no errors have been encountered yet, and everything is functioning without any issues.
    let hasErrors = false;
  
    // Loop through the itemData and quantity arrays. This is a for loop, which is a repetivitive task the computer does. Let i= 0 means, start counting at 0. i is the variable to keep track of the count. We keep counting as long as 'i' is less than the total number of things in the 'itemdata' list = i < itemData.length. i++ means after each count we increment by one. 
    for (let i = 0; i < itemData.length; i++) {
      let item = itemData[i];
      let itemQuantity = quantity[item.quantityIndex];//how many items do we have?
  
      // Check if the quantity of an item is valid. 
      let validationMessage = validateQuantity(itemQuantity);//this Function is going to examine the quantity value to see if it's valid or not. 
  
      // If there are validation errors, display the item with an error message. 
      if (validationMessage !== "") {//"Is there an error message?" If there is, it means there's a validation error.
        hasErrors = true;
        let row = table.insertRow();//creates a new row in a table
        row.insertCell(0).innerHTML = item.brand; //the first cell is filled with the brand of the item
        row.insertCell(1).innerHTML = validationMessage; //the second cell is filled with the validation error message. 
        row.insertCell(2).innerHTML =""; //two more empty cells are added and will be used for other information like the item price and extended price.  
        row.insertCell(2).innerHTML = "";
      } else if (itemQuantity > 0) {
        // Calculate the extended price if quantity is valid and positive
        let extendedPrice = item.price * itemQuantity;
        subtotal += extendedPrice;
  
        // Display the item with the calculated extended price
        let row = table.insertRow();
        row.insertCell(0).innerHTML = item.brand;
        row.insertCell(1).innerHTML = itemQuantity;
        row.insertCell(2).innerHTML = '$' + item.price.toFixed(2);
        row.insertCell(3).innerHTML = '$' + extendedPrice.toFixed(2);
      }
    }
  
    // If there are no errors, display the total
    if (!hasErrors) {
      document.getElementById('total_cell').innerHTML = '$' + total.toFixed(2);
    }
  }

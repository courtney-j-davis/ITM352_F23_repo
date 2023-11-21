









  //initialize variables for subtotal, tax, shippping charge, and total
let subtotal=0;
let taxRate = 0.04712 ; //4.712%
let taxAmount = 0;
let total = 0;
let shippingCharge = 0;

//generate item rows for the purchased items dynamically
generateItemRows();

//shipping charge changes according to the amount of the sub-total

if (subtotal >= 5000) {
    shippingCharge = 250;
} else {
    shippingCharge = 0;
};

//calculate total including tax and shipping
taxAmount = subtotal * taxRate;
total = subtotal + taxAmount + shippingCharge ;


//set the total cell in bold
document.getElementById('total_cell').innerHTML = `$${total.toFixed(2)}`;


//set the subtotal, tax, and total cells
document.getElementById('subtotal_cell').innerHTML = '$' + subtotal.toFixed(2);
document.getElementById('tax_cell').innerHTML = '$' + taxAmount.toFixed(2);
document.getElementById('shipping_cell').innerHTML = '$' + shippingCharge.toFixed(2);

//function to generate item rows for the purchased items
function generateItemRows() {

  //get the table element to populate
  let table = document.getElementById('invoiceTable');

  //clear the table content
  table.innerHTML = '';

  //loop through the products arrays
  for (i in products) {
      let itemName = products[i]["Make"];
      let itemArtist = products[i]["Model"];
      let itemYear = products[i]["Year"];
      let itemPrice = products[i]["Price"];
      let itemIcon = products[i]["image"];
      let itemQuantity = products[i]["qty_desired"];

//Validating Quantity refrenced from Lab12/public/receipt.js
function validateQuantity(quantity) {
  let errorMessage = "";

  if (isNaN(quantity)) {
    errorMessage = "Not a number. Please enter a non-negative quantity to order.";
  } else if (quantity <= 0 && !Number.isInteger(quantity)) {
    errorMessage = "Negative inventory and not an Integer. Please enter a non-negative quantity to order.";
  } else if (quantity <= 0) {
    errorMessage = "Negative inventory. Please enter a non-negative quantity to order.";
  } else if (!Number.isInteger(quantity)) {
    errorMessage = "Not an Integer. Please enter a non-negative quantity to order.";
  }

  return errorMessage;
}

//calculate the Grand Total
let grandTotal = itemPrice * itemQuantity;
subtotal += grandTotal;

//generate the row only if the user enters a positive quantity, NOT "0"
if (itemQuantity != 0) {
    let row = table.insertRow();
};
};
};

/*AR2: When displaying the invoice, add a small icon image of the product to the line item. 
If the user hovers over the icon, have a popup window appear with a product description*/
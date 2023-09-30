/* POKE 6.1 Invoice 1 Assisgnment*/
//Product Data
//compute extended price



//Product 1
let item1= 'Dinner Plates';
let quantity1= 12;
let price1=24.00;
let extended_price1=quantity1*price1;
//Product 2
let item2= 'Salad Plates';
let quantity2= 12;
let price2=38.00;
let extended_price2=quantity2*price2;
//Product 3
let item3 = 'Platter';
let quantity3 = 1;
let price3 = 159.00;
let extended_price3 = quantity3 * price3;
//Product 4
let item4 = 'Linen Napkins';
let quantity4 = 12;
let price4 = 12.00;
let extended_price4 = quantity4*price4;
//Product 5
let item5 = 'Serving Bowls';
let quantity5 = 4;
let price5 = 18.00;
let extended_price5 = quantity5 * price5;



//Overall Subtotal for all items
let Subtotal= extended_price1 + extended_price2 + extended_price3 + extended_price4 + extended_price4 + extended_price5;

//Calculate 5.75% sales tax rate
let taxRate = 0.0575;;
let taxAmount = Subtotal * taxRate;


//Calculate Total
let Total = Subtotal + taxAmount;

//Use DOM manipulation to add product rows dynamically to the table.
let table = document.getElementById('invoiceTable');

// Create a new row for each item
let row = table.insertRow(); 
row.insertCell(0).innerHTML = `${item1}`;
row.insertCell(1).innerHTML = `${quantity1}`;
row.insertCell(2).innerHTML = '$'+`${price1}`;
row.insertCell(3).innerHTML = ('$' + `${extended_price1}`);

row = table.insertRow(); 
row.insertCell(0).innerHTML = `${item2}`;
row.insertCell(1).innerHTML = `${quantity2}`;
row.insertCell(2).innerHTML = '$'+`${price2}`;
row.insertCell(3).innerHTML = ('$' + `${extended_price2}`);

row = table.insertRow(); 
row.insertCell(0).innerHTML = `${item3}`;
row.insertCell(1).innerHTML = `${quantity3}`;
row.insertCell(2).innerHTML = '$'+`${price3}`;
row.insertCell(3).innerHTML = ('$' + `${extended_price3}`);

row = table.insertRow(); 
row.insertCell(0).innerHTML = `${item4}`;
row.insertCell(1).innerHTML = `${quantity4}`;
row.insertCell(2).innerHTML = '$'+`${price4}`;
row.insertCell(3).innerHTML = ('$' + `${extended_price4}`);

row = table.insertRow(); 
row.insertCell(0).innerHTML = `${item5}`;
row.insertCell(1).innerHTML = `${quantity5}`;
row.insertCell(2).innerHTML = '$'+`${price5}`;
row.insertCell(3).innerHTML = ('$' + `${extended_price5}`);

// Send the subtotal, tax, and total cells to the table
document.getElementById('subtotal_cell').innerHTML = '$' + Subtotal.toFixed(2);
document.getElementById('tax_cell').innerHTML = '$' + taxAmount.toFixed(2);
document.getElementById('total_cell').innerHTML = '$' + Total.toFixed(2);




/* POKE 6.1 Invoice 1 Assisgnment*/
//Product Data
//compute extended price


//lab8 2.1
let product_quantities= [12,12,1,1,1];

//lab8 2.3
product_quantities.push(3);
//alert("the size of the products array is "+product_quantities.length);
product_quantities.pop();
//lab8 2.2
//alert("the size of the products array is "+product_quantities.length);
//Product 1
let item1= 'Dinner Plates';
let quantity1= product_quantities [0];
let price1=24.00;
//let extended_price1=quantity1*price1;
//Product 2
let item2= 'Salad Plates';
let quantity2= product_quantities [1];
let price2=38.00;
let extended_price2=quantity2*price2;
//Product 3
let item3 = 'Platter';
let quantity3 = product_quantities [3];
let price3 = 159.00;
let extended_price3 = quantity3 * price3;
//Product 4
let item4 = 'Linen Napkins';
let quantity4 = product_quantities [12];
let price4 = 12.00;
let extended_price4 = quantity4*price4;
//Product 5
let item5 = 'Serving Bowls';
let quantity5 = product_quantities [4];
let price5 = 18.00;
let extended_price5 = quantity5 * price5;
//lab8 1.1
let product1 = {
    itemName: 'Table Cloth',
    quantity: product_quantities [0],
    price: 150.00
};
//lab8 1.4
product1["SKU#"] = 1234;
delete product1["SKU#"]; 
//lab8 1.3
//product1.quantity = 0;

//lab8 1.2
let extended_price1 = product1.quantity * product1.price;




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
//lab8 part 1.2 changed item1 to product1.item ect. 
row.insertCell(0).innerHTML = `${product1.itemName}`;
row.insertCell(1).innerHTML = `${product1.quantity}`;
row.insertCell(2).innerHTML = '$'+`${product1.price}`;
row.insertCell(3).innerHTML = ('$' + `${extended_price1.toFixed(2)}`);

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




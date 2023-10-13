//Lab8 3.1
// Define the product_quantities array
let product_quantities = [1,12,1,1,1];

// array of all products
// corresponds to product_quantities array
// product_quantities[i] is the quantity for products[i]
let products = [
    { 'name': 'small gumball', 'price': 0.02 },
    { 'name': 'medium gumball', 'price': 0.05 },
    { 'name': 'large gumball', 'price': 0.07 },
    { 'name': 'small jawbreaker', 'price': 0.06 },
    { 'name': 'large jawbreaker', 'price': 0.10 }
   ];


// Iterate through product_quantities and print each element in a table
document.write("<table>");
//document.write("<tr><th>Product #</th>Quantity</th></tr>");
//Lab 8 3.2
document.write("<tr><th>Product #</th><th>Name</th><th>Price</th><th>Quantity</th><th>Extended Cost</th></tr>");

for (let i=0; i < product_quantities.length; i++) {
    
    let quantity = product_quantities[i];
    let product = products[i];
    let extended_cost = quantity * product.price;

    //creat a new row for each product and add hover effect
    let newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td>${i +1}</td>
        <td>${product.name}</td>
        <td>${product.price.toFixed(2)}</td>
        <td>${quantity}</td>
        <td>${extended_cost.toFixed(2)}</td>
    `;
    //append the new row to the table
    document.querySelector('table').appendChild(newRow);

    //add a yellow hover effect on any table row
    //add an event listener to turn the row yellow on mouseover
    newRow.addEventListener('mouseover', function () {
        newRow.style.backgroundColor = 'yellow';
    });
    //add an event listener to turn OFF the yellow on the row on mouseover
    newRow.addEventListener('mouseout', function(){
        newRow.style.backgroundColor = '';
    });
    /*these need to be added to both the for loop (when you generate the table) and the function that adds rows.*/ 
    //lab8 4.3
    /* when row is clicked, delete that row. Check to make sure there is at least one row before the delete happens. The delete row function needs to be in the for loop and the function that adds rows. */
     newRow.addEventListener('click', function () {
        document.querySelector('table').deleteRow(newRow.rowIndex);
    });

}

//lab8 4.3
/* when row is clicked, delete that row. Check to make sure there is at least one row before the delete happens. The delete row function needs to be in the for loop and the function that adds rows. */

/*change the button to add a new row to the end, not delete the last row
1: a button on the DOM created from the .js file
2: a function to add a row
3: an event listener for the button to activiate the add-row function */

let addButton = document.createElement('button');

addButton.textContent = 'Add New Row';

addButton.addEventListener('click', addNewRow)
//append the button to the document's body
document.body.appendChild(addButton);


// Add a click event listener to the table to trigger the addNewRow function document.addEventListener('DOMContentLoaded', function () {let table = document.querySelector('table')table.addEventListener('click', addNewRow);});

//Lab8 4.1 add a row if the table is clicked.

function addNewRow(){
    let table = document.querySelector('table');

    let newRow = table.insertRow();
    newRow.innerHTML = `
        <td> blank </td>
        <td> blank </td>
        <td> blank </td>
        <td> blank </td>
        <td> blank </td>
    `;
    newRow.addEventListener('mouseover', function () {
        newRow.style.backgroundColor = 'yellow';
    });
    //add an event listener to turn OFF the yellow on the row on mouseover
    newRow.addEventListener('mouseout', function(){
        newRow.style.backgroundColor = '';
});
    newRow.addEventListener('click', function(){
        table.deleteRow(newRow.rowIndex);
    })
};
/*
//Function to delete last row
function deleteLastRow (){
    let table = document.querySelector('table');
    let rowCount = table.rows.length; //gives a row count to make sure when we delete a row, there is a row to be deleted

    if (rowCount >1) {
        table.deleteRow(rowCount -1); //deletes the last row
    };
};
/*


/* when row is clicked, delete that row. Check to make sure there is at least one row before the delete happens. The delete row function needs to be in the for loop and the function that adds rows. */

/*change the button to add a new row to the end, not delete the last row
1: a button on the DOM created from the .js file
2: a function to add a row
3: an event listener for the button to activiate the add-row function */


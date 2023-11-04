//order_multiple.js (Lab12 part 6)


window.onload = function (){




    //Check the URL for any error parameters, quantity and  display/use them
    let params = (new URL(document.location)).searchParams;
    let q = Number(params.get('quantity')); 
    let error = params.get('error');

    //if there is an error, alert the user
    if (error){
        alert(error);
    }
    //define a variable that ponts to a form on the DOM in order to dynamically populate the form
    const form = document.getElementById('productForm');
    let formHTML = ''; //blank content of form to add to

    //write a loop to print product information and then add a quantity input box for every element of the product array
    for (let i in products) {
        formHTML += `<h3>${products[i]["brand"]} at \$${products[i]["price"]}</h3>`;
    }
    
    //ensure the submit button is part of the form

    //add the checkQuantitytextbox ()
    // add the validateQuantity()
}



//select a div where the product details should be displayed
let productDetailsDiv = document.getElementById('productDetails');
//Display the first product's details
productDetailsDiv.innerHTML = `<h3>${products[0]["brand"]} at \$${products[0]["price"]}</h3>`;

//select div where the product list will be deployed
let productListDiv=document.getElementById('productList');

//iterate throught the products and display their sold counts
for (let i in products){
    productListDiv.innerHTML += `<h4>${products[i]["total_sold"]} ${products[i]["brand"]}have been sold.`
}
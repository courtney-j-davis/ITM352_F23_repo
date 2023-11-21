//products_display.js
// assignment 1, Part B

window.onload = function () {

    //define a variable that points to the form on the DOM in order to dynamically populate the form
    const form = document.getElementById('productForm');
    


    //blank content of the form to add to
    let formHTML = '';

    //Use a loop to display your products. Display the information for each product (Make, Model, Price, image, qty_available).
    let products
    for (let i in products) {
        
        formHTML += `
            <div class="col-md-4 mb-3">
                <div class="card">
                    <img src="${products[i].Image}" class="card-img-top" alt="${products[i].Make} ${products[i].Model}">
                    <div class="card-body">
                        <h5 class="card-title">${products[i].Make} ${products[i].Model}</h5>
                        <p class="card-text">Year: ${products[i].Year}</p>
                        <p class="card-text">Price: $${products[i].Price.toFixed(2)}</p>
                        <p class="card-text">Available: ${products[i].qty_available}</p>
                    </div>
                </div>
            <form class="addToCartForm">
            <input type="text" class="quantity-input" name="quantity_textbox${i}" value="0" min="0" data-max="${products[i]["qty_available"]}"/>
             <span id = "quantity_textbox[${i}]_message">Enter a quantity</span>
            <br>
            <br>
            <button onclick="addToCart(${i})">Add to Cart</button>
            </form>

            <div class="col-auto">
              <label class="visually-hidden" for="quantity_textbox_${i}">Quantity Desired</label>
              <input type="text" class="btn btn-outline-secondary" name="quantity_textbox_${i}" id="quantity_textbox_${i}" placeholder="Quantity Desired" onkeyup="checkQuantityTextbox(this);"><br>
              <span id="quantity_textbox_${i}_message" style="font-family: 'Open Sans', serif; font-size: 12px;"></span><br>
            </div>
        </div>
        `;
    }
    
    
    //push the form content to the DOM
    
    form.innerHTML = formHTML;
    };    

    //create a submit button is part of the form
    
    //formHTML += `<br><br><input type="submit" class="btn btn-secondary" value="Purchase"><br><br><br>`;

//Create a display error messages to direct customers to enter valid data:
function validateForm() {
    let errorMessage = '';
    let  noErrors = true;

    for (let i = 0; i < products.length; i++) {
        let num = Number(document.getElementById(`quantity_textbox_${i}`).value);
        for (let i = 0; i < products.length; i++) {
            console.log(`Processing product ${i}: ${products[i].Make} ${products[i].Model}`);

        if (isNaN(num)) {
            errorMessage += `You may not purchase a non-numeric quantity for ${products[i]["Make"]}`;
        } else if (num < 0 && num % 1 !== 0) {
            errorMessage += `You may not purchase a negative decimal quantity for ${products[i]["Make"]}`;
        } else if (num < 0) {
            errorMessage += `Purchase is a negative quantity for ${products[i]["Make"]}, try again.`;
        } else if (num % 1 !== 0) {
            errorMessage += `Purchase cannot have a decimal quantity for ${products[i]["Make"]}, tyr again`;
        } else if (num > products[i]["qty_available"]) {
            errorMessage += `The purchase is more than the available stock for ${products[i]["Make"]}`;
        }

        if (num !== 0) {
            nothingOrdered = false;
        }
    }

    if (nothingOrdered) {
        errorMessage += 'You need to have an item in your cart.';
    };

    if (errorMessage !== '') {
        alert(errorMessage);
        return false;
    } else {
        return true;
    }
};
};


// Update remaining quantity
function updateRemainingQuantity(index, quantityInput) {
    const remainingQuantitySpan = document.getElementById(`remaining${index}`);
    const quantityInputValue = parseInt(quantityInput.value, 10);
  
    if (!isNaN(quantityInputValue)) {
      const remainingQuantity = products[index].availableQuantity - quantityInputValue;
      remainingQuantitySpan.textContent = `Remaining Quantity: ${remainingQuantity}`;
    }
  };


  
function updateQuantityMessage(textbox) {
    let quantityMessage=document.getElementById('qty_textbox_message');
    
    //validate the quantity entered
    let validationMessage = validateQuantity(Number(textbox.value));

    //if there are validation errors, display error message
    if (validationMessage !=="") {
        quantityMessage.innerHTML= validationMessage;
    } else {
        quantityMessage.innerHTML = textbox.value;
    }

}



function validateQuantity(quantity) {
    let errorMessage ="";

    switch (true) {
        case isNaN(quantity):
            errorMessage = "not a number. Please enter a nin-negative quantity to order.";
            break;
        case quantity <= 0 && !NumberisInteger(quantity):    
    }
}
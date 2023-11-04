let express = require('express');
let app = express();

//part 2c
app.use(express.static(__dirname + '/public'));//'express.static(...) this tells the server to use a middleware function that serves static files. 'dirname' is the variable that repreents the directory pathh of the current JS file. This code serves static files and assetts to the web app.
//part 2a
app.get('/test',function (req, res) {
    res.send ("<h2> you have reached the test page - Aloha</h2>");
    console.log('You have reached the test page- Aloha');
});
let products = require(__dirname + '/products.json');
products.forEach( (prod,i) => {prod.total_sold = 0});

    app.get("/products.js", function (request, response, next) {
        response.type('.js');
        let products_str = `let products = ${JSON.stringify(products)};`;
        response.send(products_str);
     });

app.use(express.urlencoded({ extended: true }));//this is a middleware function provided by Express.js for handling data that's submitted through HTML forms. It is used to parse and process data that comes from HTML form submissions. This middleware will help your Express application parse and extract data submited on your website, making it accessible for your server-side code to use. 

app.post("/process_form", function (request, response) {
    let receipt = '';
    let qtys = request.body[`quantity_textbox`];
    console.log(qtys);
    for (i in qtys) {
        let q = Number(qtys [i]);
        console.log("the quantity value is "+q);
        let validationMessage = validateQuantity(q);
        let brand = products[i]['brand'];
        let brand_price = products[i]['price'];
        if (validateQuantity(q)==="") {
            products[i]['total_sold'] += Number(q);
            receipt += `<h3>Thank you for purchasing: ${q} ${brand}. Your total is \$${q * brand_price}!</h3>`; // render template string
        } else {
            receipt += `<h3><font color="red">${q} is not a valid quantity for ${brand}!<br>
            ${validationMessage}</font></h3>`;
        }
    }
    response.send(receipt);
    response.end(); 
}); 

app.all('*', function (request, response, next) {
    //response.send(request.method + ' to path ' + request.path);
    console.log(request.method + ' to path ' + request.path);
});
    
app.listen(8080, () => console.log(`listening on port 8080`)); // note the use of an anonymous function here to do a callback

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
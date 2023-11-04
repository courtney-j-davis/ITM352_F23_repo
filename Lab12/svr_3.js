let express = require('express');
let app = express();

//part 2c
app.use(express.static(__dirname + '/public'));//'express.static(...) this tells the server to use a middleware function that serves static files. 'dirname' is the variable that repreents the directory pathh of the current JS file. This code serves static files and assetts to the web app.
//part 2a
app.get('/test',function (req, res) {
    res.send ("<h2> you have reached the test page - Aloha</h2>");
    console.log('You have reached the test page- Aloha');
});

app.use(express.urlencoded({ extended: true }));//this is a middleware function provided by Express.js for handling data that's submitted through HTML forms. It is used to parse and process data that comes from HTML form submissions. This middleware will help your Express application parse and extract data submited on your website, making it accessible for your server-side code to use. 

app.post("/process_form", function (request, response) {
        //response.send(request.body); 
    let q = Number(request.body['qty_textbox']);
    console.log("the input value is..."+q);
    let validationMessage = validateQuantity(q);
  
    if (validationMessage === "") {
        response.send(`Thank you for purchasing ${q} things!`);
    } else {
        response.send(validationMessage+ '<br>'+ `Error: ${q} is not a quantity. Hit the back button to fix.`);
    }
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
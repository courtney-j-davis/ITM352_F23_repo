let express = require('express');
let app = express();
//part 2a
app.get('/test',function (req, res) {
    res.send ("<h2> you have reached the test page - Aloha</h2>");
    console.log('You have reached the test page- Aloha');
});

app.all('*', function (request, response, next) {
    //response.send(request.method + ' to path ' + request.path);
    console.log(request.method + ' to path ' + request.path);
    
});
app.listen(8080, () => console.log(`listening on port 8080`)); // note the use of an anonymous function here to do a callback
const fs=require('fs');

let filename = __dirname+ '/user_data.json';
let user_reg_data;


if (fs.existsSync(filename)){
    let data = fs.readFileSync(filename, 'utf-8');
        
    
    
    user_reg_data = JSON.parse(data);

    let user_stats = fs.statSync(filename);

    let stats_size=user+stats.size;

   
    console.log(`The file name ${filename}has ${stats_size} characters.`);
}else {
    console.log(`The file name ${filename}does not exist.`);
}

//Part 4 of lab 12
username = 'newuser';
users_reg_data[username] = {};
users_reg_data[username].password = 'newpass';
users_reg_data[username].email = 'newuser@user.com';

fs.writeFileSync(filename, JSON.stringify(user_reg_data), 'utf-8');

let express = require('express');
let app = express();


app.use(express.urlencoded({ extended: true }));

app.get("/login", function (request, response) {
    // Give a simple login form
    str = `
<body>
<form action="" method="POST">
<input type="text" name="username" size="40" placeholder="enter username" ><br />
<input type="password" name="password" size="40" placeholder="enter password"><br />
<input type="submit" value="Submit" id="submit">
</form>
</body>
    `;
    response.send(str);
 });

app.post("/login", function (request, response) {
    // Process login form POST and redirect to logged in page if ok, back to login page if not

    //Retrieved user's entry for password and username
    let username_entered = request.body['username'];
    let password_entered = request.body['password'];

    let response_msg = "";
    let errors = false;

    //if statement to check is username exists in user_reg_data
    if (typeof user_reg_data[username_entered]!= 'undefined') {
        //check if the password matches with username
        if (password_entered == user_reg_data[username_entered].password) {
            response_msg = `Incorrect password.`;
            errors = true;
        }
    } else {
        response_msg = `${username_entered} does not exist.`;
        errors = true;
    }
    if (!errors) {
        response.send(response_msg);
    } else {
        response.redirect(`./logini?error=${response_msg}`)
    }

});

app.listen(8080, () => console.log(`listening on port 8080`));
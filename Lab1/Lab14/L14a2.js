const fs=require('fs');

let filename = __dirname+ '/user_data.json';

let data = fs.readFileSync(filename, 'utf-8');
//encodes and read the file synchro. 
let user_reg_data = JSON.parse(data);
//this line, after the file contents is read this code uses the JASON parse functionality to parse the data into a js object which is necessary be the 'readFileSynce' returns as a string, we want JSON formatted data to use not a string 

console.log(user_reg_data);

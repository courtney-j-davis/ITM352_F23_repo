//declare variables per lab 5.1 directions
let age=41;
let fav_num=7; //not my real fav number
let day_of_birth=19;
let month_of_birth=11;

//define caluculations
let calc1=age + fav_num / day_of_birth * month_of_birth;
let calc2=(age + fav_num) / day_of_birth * month_of_birth

/* PEMDAS
Please
Excuse
My
Dear 
Aunt
Sally

Parathensis
Exponent
Multi
Div
Add
Subtract*/
//output calc1 and 2 to the DOM
document.getElementById("result1").innerHTML = calc1;
document.getElementById("result2").innerHTML = calc2;
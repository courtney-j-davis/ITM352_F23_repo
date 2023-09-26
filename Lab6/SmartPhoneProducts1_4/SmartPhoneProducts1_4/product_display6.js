//define store name and push it to the DOM in the top title
const store_name="Courtney";
top_title.innerHTML=(store_name + "'s Used Smart Phone Store");

//send store name info to the footer title
bottom_title.innerHTML=("Your one stop shop for used phones - "+store_name+"'s");            

//initialize hits and spins and send to the DOM
let hits= 0;
let spins=0;
//let wins;
let over_half=false;
hits_span.innerHTML = hits; 
spins_span.innerHTML = spins;

//this should be two functions or more but... it changes the item name to rotate for the images and updates the spin count and calculates hits/spins ratio, sending both to the DOM
function changeClassName(element) {
    if(element.className=='item'){
        spins=spins+1
        element.className = 'item rotate';
}
    //spins=spins+1;
    if(spins<2*hits&&hits<spins){
        //wins=true;
        over_half=true;
    } else {
       // wins=false;
    }
    //win_span.innerHTML=wins;
    win_span.innerHTML=over_half;
    spins_span.innerHTML = spins; 
    hit_spin_span.innerHTML=(hits/spins).toFixed(2);
}
// -- Winning progress depends on hits/spins
let hits_spins_ratio = hits/spins;
let progress;
//The original nested if statement is commented out for a revised if else statement
/*if ( hits_spins_ratio > 0 ) {
    progress = 'On your way!';
    if ( hits_spins_ratio >= 0.25 ) {
        progress = 'Almost there!';
        if ( hits_spins_ratio >= 0.5 ) {
            if( hits < spins) { 
                progress = 'You win!';
            }
        }
    }
}
else {
    progress = 'Get going!' ;
}*/
if (hits_spins_ratio>=0.5 && hits<spins){
    progress='You win!';
} else if (hits_spins_ratio>= 0.25){
progress= 'Almost there!';
} else if (hits_spins_ratio>0){
progress= "On your way";
}
else {
progress = 'Get going!';
}
win_span.innerHTML=progress;


//this should be two functions or more but... it changes the item name by removing the rotate for the images and updates the hits count and calculates hits/spins ratio, sending both to the DOM
function resetClassName(element) {
    if(element.className == 'item rotate'){
        hits=hits+=2;
        element.changeClassName='item';
        } else {
            changeClassName(element);
        }

    if(spins<2*hits&&hits<spins){
        //wins=true;
        over_half=true;
    } else {
        //wins=false;
    }
    //win_span.innerHTML=wins;
    win_span.innerHTML=over_half;
    hits_span.innerHTML = hits; 
    hit_spin_span.innerHTML=(hits_span.innerHTML/spins_span.innerHTML).toFixed(2);
}
/*let hits_spins_ratio = hits/spins;
//let progress;
if ( hits_spins_ratio > 0 ) {
    progress = 'On your way!';
    if ( hits_spins_ratio >= 0.25 ) {
        progress = 'Almost there!';
        if ( hits_spins_ratio >= 0.5 ) {
            if( hits < spins) { 
                progress = 'You win!';
            }
        }
    }
}
else {
    progress = 'Get going!' ;
}*/


//You can't use the nested if statements needs to be reevaluated. try goin backwards start with .5
if (hits_spins_ratio>=0.5 && hits<spins){
        progress='You win!';
} else if (hits_spins_ratio>= 0.25){
    progress= 'Almost there!';
} else if (hits_spins_ratio>0){
    progress= "On your way";
}
else {
    progress = 'Get going!';
}
win_span.innerHTML=progress;
//Chat GPT Code replacing if else 
/*shits_spins_ratio = hits / spins;

if (hits_spins_ratio > 0) {
    progress = 'On your way!';
    if (hits_spins_ratio >= 0.5 && hits < spins) {
        progress = 'You win!';
    } else if (hits_spins_ratio >= 0.25) {
        progress = 'Almost there!';
    }
} else {
    progress = 'Get going!';
}*/

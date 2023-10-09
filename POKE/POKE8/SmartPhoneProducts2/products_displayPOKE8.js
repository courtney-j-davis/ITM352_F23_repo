//define store name and push it to the DOM in the top title
//const first_name = "Courtney";//need to declare first and last name for the footer. 
//const last_name = "Davis";//I moved this to the footer because that's where i need it 
const store_name="Courtney";//kept from earlier instructions, the page doesn't work without it...strange. 
top_title.innerHTML=(store_name + "'s Used Smart Phone Store");

// Manipulate the header to display your name with formatting
//const firstNameSpan = document.getElementById('first_name_span');
//const lastNameSpan = document.getElementById('last_name_span');
//firstNameSpan.textContent = first_name;
//lastNameSpan.textContent = last_name;
//const storeTitle = first_name + ' ' + last_name + "'s Used Smart Phone Store";
//top_title.innerHTML = storeTitle;

//initialize hits, spins, over_half and send to the DOM
let hits= 0;
let spins=0;
let over_half=false;
hits_span.innerHTML = hits; 
spins_span.innerHTML = spins;

//this is the code for POKE8. Start by defining the items, prices, images
let name1 = "HTC";
let price1 = 40.00;
let image1 = "./images/HTC.jpg";

let name2 = "Apple";
let price2 = 75.00;
let image2 = "./images/iphone-3gs.jpg";

let name3 = "Nokia";
let price3 = 35.00;
let image3 = "./images/Nokia.jpg";

let name4 = "Samsung";
let price4 = 45.00;
let image4 = "images/Samsung.jpg";

let name5 = "Blackberry";
let price5 = 10.00;
let image5 = "images/Blackberry.jpg";

/*
Make a for loop to dynamically create the web page output. Here's what I need to do:
1. in the html, cut out all the sections from main. Leave main since we have css to format the page
2. Challenge: how do you put html generated by the loop into the correct location under main? Solution: Use document.querySelector('.main'); it is used to select and reference the HTML element with the class name main. In this case, it's selecting the <main> element with the class="main" attribute from the HTML document.
-- The purpose of this line of code is to target the specific HTML element where I want to add the dynamically generated content. In the code, I am dynamically creating HTML sections for the items in a loop, and I want to insert these sections into the <main> element with the class main so that they appear on my amazing webpage.
--Once there is a reference to this <main> element using document.querySelector('.main'), I can use it to manipulate its innerHTML property by appending or inserting HTML content dynamically. This allows me to add the generated item sections to my amazing webpage within the specified <main> element.
-- document.querySelector('.main').innerHTML += `
--- selects the innerHTML of main and then the ` allows you to execute the string template
3. replicate the <section ...> information from the orginal html in the loop so the onclick and on mouseovers still work
4. use string templates to send name to the DOM:  ${eval("name"+i)}; same goes for price and image
*/
for (let i=1; eval("typeof name"+i) != 'undefined'; i++){
    document.querySelector('.main').innerHTML += `
    <section class="item" onmouseover="changeClassName(this);" onclick="resetClassName(this);">
        <h2>${eval("name"+i)}</h2>
        <p>$${eval("price"+i)}</p>
        <img src="${eval("image"+i)}" />
    </section>`;
}



function changeClassName(element) {
    if(element.className=='item'){
        element.className = 'item rotate';
        spins=spins+1;
    }
    if(spins<2*hits&&hits<spins){
       over_half=true;
    } else {
        //wins=false;
    }
    //win_span.innerHTML=wins;
    win_span.innerHTML=over_half;
    spins_span.innerHTML = spins; 
    hit_spin_span.innerHTML=Number(hits/spins).toFixed(2)

}

function resetClassName(element) {
    if(element.className=='item rotate'){
        element.className = 'item';
        hits=hits+=2;
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
    hit_spin_span.innerHTML=Number(hits/spins).toFixed(2)
}

//create variables to push to the DOM for current year and time in the footer
const currentYear = new Date().getFullYear();
const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });


/* This is a HTML table that includes:
 1. header cell with stylized text
 2. rows containing copyright details
 3. the current year
 4. the current time
 Dynamic values are inserted using JavaScript variables for a
 personalized and up-to-date footer. Note the use of backticks 
 instead of quotes ``*/
const first_name = "Courtney";//need to declare first and last name for the footer. 
const last_name = "Davis";
const footerTable = `
    <table>
        <tr>
            <td></td>
            <td class="table-header">Your One Stop For Used Phones - ${first_name.charAt(0).toUpperCase()}.${last_name.charAt(0).toUpperCase()}'s</td>
        </tr>
        <tr>
            <td>1.</td>
            <td>Copyright @ ${first_name} ${last_name}</td>
        </tr>
        <tr>
            <td>2.</td>
            <td>${currentYear}</td>
        </tr>
        <tr>
            <td>3.</td>
            <td>${currentTime}</td>
        </tr>
    </table>
`;

// Set the innerHTML of the bottom_title element to the generated table
bottom_title.innerHTML = footerTable;
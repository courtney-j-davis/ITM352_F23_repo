/*
Required to use a 'for loop' to dynamically create the web page output. 
1. In the HTML, cut all the sections from main. Leave main since we have css to format the page. 
2. How do you put html generated by the loop into the correct location under main? ---You need to use the document. querySelector('.main'); it is used to select and reference the html element with the class name main. In this case, its selecting the <main> element with the class="main" attribute from your html document. 
---The purpose of this line of code is to targer the specific html element where you want to add the dynamically generated content. In your code, you are dynamically creating html sections for the items in a loop, and you want to insert these sections in to the <main> element with the class main so that they appear on your webpage. 
--Once a reference to the <main> element using document.querySelector('main') I can manipulate the innerHTML property by appending or inserting HTML content dynamically. This allows you to add the generated item section to your webpage within the specified <main> element.
--document.querySelectore('main').innerHTML +=`
---selects the innerHTML of main and then the `allows me to execute the string template
3. replicate the <section ...> information form the orginal html in the loop so your onclick and on mouseovers still work
4. use string templates to send name to the DOM: ${eval("name"+i)}; same goes for price and image
*/

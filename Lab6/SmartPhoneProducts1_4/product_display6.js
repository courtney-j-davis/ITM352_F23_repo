
        //define all my variables for the document
        const store_name="Courtney";
        let first_name= "Courtney";
        let last_name= "Davis";
        //making date and time variables to write in footer table
        let now = new Date ();
        let year = now.getFullYear();
        let hours = now.getHours();
        let minutes = now.getMinutes();
        //add leading zeros to minutes 
        minutes = (minutes<10)? "0"+minutes : minutes;
        //convert hours to 12 hour format and determine AM/PM
        let ampm = (hours >= 12)? "PM" : "AM";
        hours= (hours % 12==0)? 12 : hours % 12;
        // create a string to display the time in the HTML doc
        let currentTime = hours + ":" + minutes + ampm;


    document.write ("<strong>"+first_name+ "<strong/>"+" "+ last_name+"'s" +" " +"Used Smart Phone Store");
        top_title.innerHTML=(store_name+"'s Used Smart Phone Store"); 
        
    function changeClassName (element){
        element.className='item rotate';
        spin=spins+1
        spins_span.innerHTML= spins;
        hit_spin_span.innerHTML=Number(hits/spins).toFixed(2)
        if (spins<(2*hits)) {
            wins=true;
            over_half=true;
    }
    else {
        wins=false;
    }
        //win_span.innerHTML=wins;
        win_span.innerHTML=over_half;
    }

    function resetClassName(element) {
        element.className='item';

    function changeClassName (element){
            element.className='item rotate';
        }
    function resetClassName(element) {
            element.className='item';
        }
        let hits= 0;
        let spins=0;
        let wins;
        let over_half=false;
        hits_span.innerHTML=hits;
            spins_span.innerHTML=spins;
            
    }
    let hits= 0;
    let spins=0;
    hits_span.innerHTML=hits;
        spins_span.innerHTML=spins;

//Lab 6 question 1a) on a mouse over the spins increase on a click hits increase. 
        
 
 
        document.write("Your One Stop Phone Shop - "+store_name+"'s");
    
    
                document.write ("Copyright @ "+first_name+ " "+last_name);
        

        
                document.write (year)
        
            
                document.write (currentTime);
        
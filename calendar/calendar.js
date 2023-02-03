

// luna si anul de sus 

var d = new Date();

var months = [ "Ianuarie" , "Februarie", "Martie", "Aprilie", "Mai", "Iunie", "Iulie", "August" ,"Septembrie" 
 ,"Octombrie" , "Noiembrie" , "Decembrie"];

document.getElementById("yd").innerHTML =  months[d.getMonth()] + "  " +   d.getFullYear()  ;

var x = d.getMonth();

var y =  d.getFullYear();

var getDaysInMonth = function(month,year) {

   return new Date(year, month+1, 0).getDate();
 
  };

  var z = getDaysInMonth(x, y);

   var s = document.getElementsByClassName('day');

   for (i=0; i < s.length && i != z; i++) {

     s[i].innerHTML = i+1;
 

   
   }

   
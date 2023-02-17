var d = new Date();
Cyear = d.getFullYear();
Cmounth =d.getMonth(); 
days = document.querySelector(".days");
prevNextIcon = document.querySelectorAll(".btn button")




var months = [ "Ianuarie" , "Februarie", "Martie", "Aprilie", "Mai", "Iunie", "Iulie", "August" ,"Septembrie" 
 ,"Octombrie" , "Noiembrie" , "Decembrie"];

document.getElementById("title").innerHTML = months[Cmounth] + "  " +   d.getFullYear()  ;
document.getElementsByTagName('title')[0]. innerHTML =`${months[Cmounth]}` + "  " +   d.getFullYear()  ;

const calendar = () => {

let liTag = "";

let firstDateofMounth = new Date(Cyear, Cmounth,0).getDay();

let lastDateofLastMounth = new Date(Cyear, Cmounth,0).getDate();


let lastDayofMounth = new Date (Cyear,Cmounth,lastDateofLastMounth).getDay();

for (let i = firstDateofMounth; i > 0; i-- ) {

    liTag += `<li class="inactive">${lastDateofLastMounth -i +1}</li>`;

}

let lastDateofMounth = new Date(Cyear, Cmounth +1,0).getDate();

for(let i = 1; i<= lastDateofMounth; i++) {

    let isToday = i === d.getDate() && Cmounth === new Date().getMonth() 
    
    && Cyear === new Date().getFullYear() ? "active" : " ";

   liTag += `<li class="${isToday}">${i}</li>`;

}

for (let i = lastDayofMounth; i < 6; i++) {

    liTag += `<li class="inactive">${ i - lastDayofMounth +1}</li>`;
}

days.innerHTML = liTag;

}

calendar();

 prevNextIcon.forEach(btn => {

    btn.addEventListener('click', () => {

        Cmounth = btn.id === "prev" ? Cmounth -1 : Cmounth +1;
         calendar();  
         
         document.getElementById("title").innerHTML =  months[Cmounth] + "  " +  Cyear  ;

         if(Cmounth < 0 || Cmounth > 11) { 
            d = new Date(Cyear, Cmounth, new Date().getDate());
            Cyear  = d.getFullYear(); 
            Cmounth = d.getMonth(); 

            document.getElementById("title").innerHTML =  months[Cmounth] + "  " +  Cyear   ;     

            // functie pentru a schimba data la next/prev 

        } else {
            date = new Date(); 
        }
    })

}); 

function goTodate() {

    var x = document.getElementById('time').value;
   
   
    let y = new Date(x);

    Cyear = y.getFullYear();
    Cmounth =y.getMonth(); 

    calendar();

    document.getElementById("title").innerHTML =  months[Cmounth] + "  " +  Cyear  ;

    
   
}

goBack = () => location.reload();
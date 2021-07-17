//createvfunction to validate user input
function validate(){
    var date=document.getElementById("date").value;
    var month=document.getElementById("month").value;
     var year=document.getElementById("year").value;


     if(date=="" || month=="" ||year==""){
         return false;
     }else{
          var CC=year.slice(0,1);
          var YY=year.slice(2,3);
          var dayOfTheWeek=( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(month+1)/10)) + date ) % 7;
          return dayOfTheWeek;
 }
    
}




 

 

 
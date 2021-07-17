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
function gender(){
    var genderCheck=document.getElementsByName("gender");
    var female=document.getElementById("female");
    var male=document.getElementById("male");

    if(!(genderCheck[0].checked ||genderCheck[1].checked)){
        return false;
    }else if(female.checked){
        genderCheck=female.value;
        return genderCheck;

    }else if(male.checked){
        genderCheck=male.value;
        return genderCheck;
    }
}






 

 

 
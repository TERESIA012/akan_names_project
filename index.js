//createvfunction to validate user input
function validate(){
    var date=document.getElementById("date").value;
    var month=document.getElementById("month").value;
    var year=document.getElementById("year").value;


    if(date=="" || month=="" ||year==""){
         return false;
    }else{
          var CC=year.slice(2);
          var YY=year.slice(-2);
          var dayOfTheWeek=Math.trunc(( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(month+1)/10)) + date ) % 7);
          return dayOfTheWeek;
 }
    
}


function yourAkanName(){
    var maleNames=["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    var femaleNames=["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
    var weekDays=["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    var gender=document.querySelector('input[name="gender"]:checked');



    if(gender==="male"){
        document.querySelector(".any").innerHTML="Your Akan name is"+ maleNames[validate()];
        document.querySelector(".text").innerHTML="Your birth day is" + weekDays[validate()];
    }
    else{
        document.querySelector(".any").innerHTML="Your Akan name is"+ maleNames[validate()];
        document.querySelector(".text").innerHTML="Your birth day is" + weekDays[validate()]; 
    }
    if(gender==="female"){
        document.querySelector(".any").innerHTML="Your Akan name is"+ femaleNames[validate()];
        document.querySelector(".text").innerHTML="Your birth day is" + weekDays[validate()];
    }
    else{
        document.querySelector(".any").innerHTML="Your Akan name is"+ femaleNames[validate()];
        document.querySelector(".text").innerHTML="Your birth day is" + weekDays[validate()]; 
    }
}
    
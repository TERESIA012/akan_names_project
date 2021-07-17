// displaying and hidding the modal
var myModal = document.getElementById('myModal')
var myInput = document.getElementById('myInput')
myModal.addEventListener('shown.bs.modal', function () {
  myInput.focus()
})
// declaration of data to be feed by user
function myValidation(){
    var date=document.getElementById("date").Value;
    var month=document.getElementById("month").value;
    var year= document.getElementById("year").value;
    var dob=date+" /"+month+"/ "+year;
    date=document.form.date.value;
    month=document.form.month.value;
    year=document.form.year.value;
    if(date==="" || date<0 || date>=32){
        alert("date is not valid!!");
    }else if(month==="" || month<0 || month>12){
        alert("Unrecognized month enterd");
    }else if(year==="" || year<1900 || year>2100){
        alert("Year out of bound");
    } else{
        alert(dob+akanNames());
    }
    // array decratation
    var femaleNames=["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];
    var maleNames=["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
    var daysOTheOfWeek=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    // formula to calculate the actual birth day
    const CC=year.slice(2);
    const YY=year.slice(0,2);
    const MM=month;
    const DD=date;    
   function daysOTheOfWeek (){ 
       let day;
       return day=Math.floor(( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) % 7);
                }
    // function to return the names
     function akanNames(){
        let gender=document.getElementById("gender").value;
        switch (gender){
            // female name here
            case "femaleNames":
                if(daysOTheOfWeek[0]===femaleNames[0]){
                    alert("Your Akan name  is "+femaleNames[0]);
                }else if(daysOTheOfWeek[1]===femaleNames[1]){
                    alert("Your Akan name is "+femaleNames[1]);
                }else if(daysOTheOfWeek[2]===femaleNames[1]){
                    alert("Your akan name is "+femaleNames[2]);
                }else if(daysOTheOfWeek[3]===femaleNames[3]){
                    alert("Your Akan name "+femaleNames[3]);
                } else if(daysOTheOfWeek[4]===femaleNames[4]){
                    alert("Your Akan name "+femaleNames[4]);
                } else if(daysOTheOfWeek[5]===femaleNames[5]){
                    alert("Your Akan name "+femaleNames[5]);
                } else if(daysOTheOfWeek[6]===femaleNames[6]){
                    alert("Your Akan name "+femaleNames[6]);
                } else{
                    alert("No match of Akan name");
                }
                break;
                // malenames here
            case "maleNames":
                if(daysOTheOfWeek[0]===maleNames[0]){
                    alert("Your Akan name  is "+maleNames[0]);
                }else if(daysOTheOfWeek[1]===maleNames[1]){
                    alert("Your Akan name is "+maleNames[1]);
                }else if(daysOTheOfWeek[2]===maleNames[1]){
                    alert("Your akan name is "+maleNames[2]);
                }else if(daysOTheOfWeek[3]===maleNames[3]){
                    alert("Your Akan name "+maleNames[3]);
                } else if(daysOTheOfWeek[4]===maleNames[4]){
                    alert("Your Akan name "+maleNames[4]);
                } else if(daysOTheOfWeek[5]===maleNames[5]){
                    alert("Your Akan name "+maleNames[5]);
                } else if(daysOTheOfWeek[6]===maleNames[6]){
                    alert("Your Akan name "+maleNames[6]);
                } else{
                    alert("No match of Akan name");
                }
                break;
        }
    };
};
function findName(){
    day= daysOTheOfWeek();
    akanNames();
  }
})
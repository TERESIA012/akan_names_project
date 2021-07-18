//createvfunction to validate user input
function validate() {
    var date = document.getElementById("date").value;
    console.log(date);
    var month = document.getElementById("month").value;
    console.log(month);
    var year = document.getElementById("year").value;
    console.log(year);


    if (date == " " || month == " " || year == " ") {
        return false;
    } else {
        var CC = year.slice(2);
        var YY = year.slice(-2);
        console.log("CC" + CC + "YY" + YY)
        let fullBirthday = year + "-" + month + "-" + date;
        let dayvalue = new Date(fullBirthday);
        console.log(dayvalue);
        let dayOfTheWeek = dayvalue.getDay();

        return dayOfTheWeek;
    }


}


function myAkanName() {
    let femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
    let maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    let weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    var genders = document.getElementsByName("gender");
    //console.log(gender);
    genders.forEach((gender) => {
        if (gender.checked) {
            console.log(`You checked: ${gender.value}`);
           
            
            console.log(gender.value);
  console.log(gender);


        if (gender.value === "Female") {
            document.querySelector(".any").innerHTML = "Your Akan name is" + femaleNames[validate()];
            document.querySelector(".text").innerHTML = "Your birth day is" + weekDays[validate()];
            console.log("Your Akan name is" + femaleNames[validate()]);
        }
        else if (gender.value === "Male") {
            document.querySelector(".any").innerHTML = "Your Akan name is" + maleNames[validate()];
            document.querySelector(".text").innerHTML = "Your birth day is" + weekDays[validate()];
            console.log("Your Akan name is" + maleNames[validate()]);
        }
        }

        //var gender="female" ; 


  
    })


}
    // if(gender=="male"){
    //    document.querySelector(".any").innerHTML="Your Akan name is"+ maleNames[validate()]                                
    //    document.querySelector(".text").innerHTML="Your birth day is" + weekDays[validate()];
    // }
    //  else{       
    //      document.querySelector(".any").innerHTML="Your Akan name is"+ maleNames[validate()];
    //      document.querySelector(".text").innerHTML="Your birth day is" + weekDays[validate()]; 
    // }



 //function yourAkanName(){
//     var maleNames=["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
//     var femaleNames=["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
//     var weekDays=["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

//     var gender=document.querySelector('input[name="gender"]:checked');




//     if(gender==="male"){
//         document.querySelector(".any").innerHTML="Your Akan name is"+ maleNames[validate()];
//         document.querySelector(".text").innerHTML="Your birth day is" + weekDays[validate()];
//     }
//     else{
//         document.querySelector(".any").innerHTML="Your Akan name is"+ maleNames[validate()];
//         document.querySelector(".text").innerHTML="Your birth day is" + weekDays[validate()]; 
//     }

// }    
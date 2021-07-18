//create function to validate user input
//variables
function validate() {
    var date = document.getElementById("date").value;
    console.log(date);
    var month = document.getElementById("month").value;
    console.log(month);
    var year = document.getElementById("year").value;
    console.log(year);

//dayofthe week calculation
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

//akan names function
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

//conditions
        if (gender.value === "Female") {
            document.querySelector(".any").innerHTML = "Your Akan name is" +  femaleNames[validate()];
            document.querySelector(".text").innerHTML = "Your birth day is" +  weekDays[validate()];
            console.log("Your Akan name is"  +  femaleNames[validate()]);
        }
        else if (gender.value === "Male") {
            document.querySelector(".any").innerHTML = "Your Akan name is" + maleNames[validate()];
            document.querySelector(".text").innerHTML = "Your birth day is" + weekDays[validate()];
            console.log("Your Akan name is" + maleNames[validate()]);
        }
        }

        


  
    })


}
    
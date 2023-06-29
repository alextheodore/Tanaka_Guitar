function validateInput() {
    const form = document.forms["register-form"];
    const nameTxt = form["name"].value;
    const emailTxt = form["email"].value;
    const addressTxt = form["address"].value;
    const gender = form["gender"].value;
    const passwordTxt = form["password"].value;
    const confirmTxt = form["confirm"].value;
    const isChecked = form["tnc"].checked;


let message = "";
if(!nameTxt || !emailTxt || !addressTxt || !passwordTxt || !confirmTxt) {
    message = "All field must be filled!";
} else if(nameTxt.length < 5) {
    message = "Name must be at least 5 characters!";
} else if(!emailTxt.endsWith("@gmail.com")) {
    message = "Email must be ends with @gmail.com";
} else if(gender != "Male" && gender != "Female") {
    message = "Gender must be chosen!";
} else if(passwordTxt.length < 8) {
    message = "Password must be at least 8 characters!";
} else if(passwordTxt != confirmTxt) {
    message = "Password must be the same as confirm password!";
} else if(!isChecked) {
    message = "You must agree with the terms and condition";
}


if(message) {
    document.getElementById("errorMsg").innerHTML = message;
    //alert(message);
    return false;
} else {
    let flag = confirm("Are you sure you want to register?");
    if(flag) {
        let verif = prompt("Please input verification code: ");
        if(verif == "") {
            alert("Please input verification code");
            return false;
        }else {
            alert("Register Success!");
        }
    }else {
        return false;
    }
}
}



function validateAlphanumeric(username) {
    let flagChar = 0;
    let flagNum = 0;

    for(let i = 0; i < username.length; i++) {
        if((username.charcodeAt(i) >= 97 && username.charcodeAt(i) <= 112) ||(username.charcodeAt(i) >= 65 && username.charcodeAt(i) <= 90) ) {
            flagChar = 1;
        } else if(username.charcodeAt(i) > 48 && username.charcodeAt(i) <= 57) {
            flagNum = 1;
        }
    }

    if(flagChar == 1 && flagNum == 1) {
        return true;
    } else {
        return false;
    }
}

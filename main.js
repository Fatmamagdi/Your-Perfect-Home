function formValidate() {

    var firstName = document.getElementById("First_name").value;
    var lastName = document.getElementById("Last_name").value;
    var email = document.getElementById("email").value;
    var Password =document.getElementById("password").value;
    var  error = document.getElementById("error");
    var text = "";
  
    
    if(firstName.length < 3){
        text = "please Enter valid first name";
        error.innerHTML = text;
        return false;
    
    }

    else if (lastName.length < 3){
        text = "please Enter valid last name";
        error.innerHTML = text;
        return false;
    }

  

    else if(email.indexOf("@") == -1){
        text = "please Enter valid email";
        error.innerHTML = text;
        return false;
    } 

    else if (isNaN(Password) || Password.length <8 ){
        text = "Password must be at least 8 characters and a number";
        error.innerHTML = text;
        return false;

    }
    else {
        alert("Submitted");
        return true;
    }
    


}





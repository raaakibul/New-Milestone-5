document.getElementById("login-submit-btn").addEventListener('click', function(){
    const emailField = document.getElementById("user-email");
    const userEmail = emailField.value;
    // console.log(userEmail);

    const userPasswordField = document.getElementById("user-password");
    const userPassword = userPasswordField.value;
    //console.log(userPassword);


    if(userEmail == "sontan@baap.com" && userPassword == "secret"){
        console.log("valid user");
        window.location.href = "banking.html";
    }
})
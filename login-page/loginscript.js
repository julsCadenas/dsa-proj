function auth(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Check if the username is a 9-digit number and password is not empty
    var usernameRegex = /^\d{9}$/;

    if(username.match(usernameRegex) && password.trim() !== ""){
      alert("Login Success");
      window.location.assign("http://127.0.0.1:5500/WEB/secondPage.html");
    } else {
      alert("Invalid Info");
    }
  }
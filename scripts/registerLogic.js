$(document).ready(function() {
  document.getElementById("submitRegBtn").addEventListener("click", function() {
    register();
  });
});

//Md5 will be used to encrypt the password
function register() {
  var username = document.getElementById("usernameReg").value;
  var password = document.getElementById("passwordReg").value;
  var email = document.getElementById("emailReg").value;
  var params = {
    "username": username,
    "password": md5(password),
    "email": email
  }

  var request = new XMLHttpRequest();
  request.open('POST', 'http://pure-brushlands-81405.herokuapp.com/users', true);
  request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  request.onload = function() {
    // Begin accessing JSON data here
    var data = JSON.parse(this.response)
    if (request.status >= 200 && request.status < 400) {
      $('#login').modal("hide");
      $('#register').modal("hide");
      var request2 = new XMLHttpRequest()
      request2.open('GET', 'http://pure-brushlands-81405.herokuapp.com/users/login/' + username + "," + md5(password), true)
      request2.onload = function() {
        var data = JSON.parse(this.response);
        if (request2.status >= 200 && request2.status < 400) {
          //we keep the user to know who is connected (and like that we can use it in the scoreboard)
          localStorage.setItem("user", data.username);
          document.getElementById("loginBtn").style.display = 'none';
          document.getElementById("logoutBtn").style.display = 'block';
        } else {
          alert("Not right combination");
          const errorMessage = document.createElement('marquee')
          errorMessage.textContent = `Gah, it's not working!`
        }
      }
      request2.send();
    } else {
      const errorMessage = document.createElement('marquee')
      errorMessage.textContent = `Gah, it's not working!`
    }
  }
  request.send(JSON.stringify(params));
}

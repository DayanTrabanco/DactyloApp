const rmCheck = document.getElementById("rememberMe"),
  usernameInput = document.getElementById("username"),
  passwordInput = document.getElementById("password");

$(document).ready(function() {
  //It checks if the rememberMe was checked
  //If yes it will put the info in the inputfields
  if (window.localStorage.getItem('checked') === "true") {
    rmCheck.setAttribute("checked", "checked");
    usernameInput.value = window.localStorage.getItem('username');
    passwordInput.value = window.localStorage.getItem('password');
  } else {
    rmCheck.removeAttribute("checked");
    usernameInput.value = "";
    passwordInput.value = "";
  }
  document.getElementById("submitBtn").addEventListener("click", function() {
    submit();
  });
});

function submit() {
  //if rememberMe is checked it will keep the user info
  if (rmCheck.checked && usernameInput.value !== "") {
    window.localStorage.setItem('username', usernameInput.value);
    window.localStorage.setItem('password', passwordInput.value);
    window.localStorage.setItem('checked', true);
  } else {
    window.localStorage.setItem("username", "");
    window.localStorage.setItem("password", "");
    window.localStorage.setItem("checked", false);
  }

  //if combination is correct it will login
  //md5 need to be used to hash the password before checking if it is the same (It is hashed in the table)
  var request = new XMLHttpRequest()
  request.open('GET', 'http://pure-brushlands-81405.herokuapp.com/users/login/' + usernameInput.value + "," + md5(passwordInput.value), true)
  request.onload = function() {
    var data = JSON.parse(this.response);
    if (request.status >= 200 && request.status < 400) {
      //we keep the user to know who is connected (and like that we can use it in scoreBoard)
      localStorage.setItem("user", data.username);
      document.getElementById("loginBtn").style.display = 'none';
      document.getElementById("logoutBtn").style.display = 'block';
      $('#login').modal("hide");
    } else {
      alert("Not right combination");
      const errorMessage = document.createElement('marquee')
      errorMessage.textContent = `Gah, it's not working!`
    }
  }
  request.send();
}

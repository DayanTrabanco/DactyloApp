const rmCheck = document.getElementById("rememberMe"),

  usernameInput = document.getElementById("username"),
  passwordInput = document.getElementById("password");

$(document).ready(function() {
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
  if (rmCheck.checked && usernameInput.value !== "") {
    //localStorage.username = usernameInput.value;
    //localStorage.checkbox = rmCheck.value;
    window.localStorage.setItem('username', usernameInput.value);
    window.localStorage.setItem('password', passwordInput.value);
    window.localStorage.setItem('checked', true);
  } else {
    window.localStorage.setItem("username" ,"");
    window.localStorage.setItem("password" , "");
    window.localStorage.setItem("checked", false);
  }

  var request = new XMLHttpRequest()
  request.open('GET', 'http://pure-brushlands-81405.herokuapp.com/users/login/' + usernameInput.value + "," + md5(passwordInput.value), true)
  request.onload = function() {
    var data = JSON.parse(this.response);
    if (request.status >= 200 && request.status < 400) {
      //we keep the user to know who is connected (and like that we can use it in scoreBoard)
      localStorage.setItem("user" , data.username);
      document.getElementById("loginBtn").style.display = 'none';
      document.getElementById("logoutBtn").style.display = 'block';
      $('#login').modal("hide");
    } else {
      alert("Not right combination");
      const errorMessage = document.createElement('marquee')
      errorMessage.textContent = `Gah, it's not working!`
      //app.appendChild(errorMessage)
    }
  }
  request.send();
}

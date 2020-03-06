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

  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  //  var username = "dayanT";
  //var password = "test125";
  console.log(username, password);
  var request = new XMLHttpRequest()
  request.open('GET', 'http://localhost:8080/users/login/' + username + "," + password, true)
  request.onload = function() {
    var data = JSON.parse(this.response);
    if (request.status >= 200 && request.status < 400) {
      console.log(data);
      //backend aanpassen zodat 2 params kunnen ingevoerd worden en dus daarop checken voor de login
      alert("you are in");
    } else {
      alert("not logged in");
      const errorMessage = document.createElement('marquee')
      errorMessage.textContent = `Gah, it's not working!`
      //app.appendChild(errorMessage)
    }
  }
  request.send();
}

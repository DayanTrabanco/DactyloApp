function submit() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
//  var username = "dayanT";
  //var password = "test125";


  console.log(username);
  var request = new XMLHttpRequest()
  request.open('GET', 'http://localhost:8080/users/login/' + username + "," + password, true)
  request.onload = function() {
    var data = JSON.parse(this.response);
    if (request.status >= 200 && request.status < 400) {
      console.log(data);
        //backend aanpassen zodat 2 params kunnen ingevoerd worden en dus daarop checken voor de login
      //document.getElementById("textField").value = stepString;
      alert("you are in");
    } else {
      const errorMessage = document.createElement('marquee')
      errorMessage.textContent = `Gah, it's not working!`
      //app.appendChild(errorMessage)
    }
  }

  request.send();
}

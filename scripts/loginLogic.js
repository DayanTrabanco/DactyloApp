function submit() {
  console.log("test");
  var request = new XMLHttpRequest()
  request.open('GET', 'http://localhost:8080/users', true)
  request.onload = function() {
    var data = JSON.parse(this.response);
    if (request.status >= 200 && request.status < 400) {
        //backend aanpassen zodat 2 params kunnen ingevoerd worden en dus daarop checken voor de login
      //document.getElementById("textField").value = stepString;
    } else {
      const errorMessage = document.createElement('marquee')
      errorMessage.textContent = `Gah, it's not working!`
      //app.appendChild(errorMessage)
    }
  }

  request.send();
}

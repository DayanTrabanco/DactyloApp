var currentStep = localStorage.getItem('step');

const app = document.getElementById('root')

const container = document.createElement('div')
container.setAttribute('class', 'container')
document.getElementById("stepName").innerHTML = "Step" + currentStep;

var letters = [" "];
var stepString = ""

var request = new XMLHttpRequest()
request.open('GET', 'http://localhost:8080/letters/step/' + currentStep, true)
request.onload = function() {
  // Begin accessing JSON data here
  var data = JSON.parse(this.response)
  if (request.status >= 200 && request.status < 400) {
    data.forEach(step => {
      letters.push(step.letter);
    })
    for(var i = 0; i < 10; i++) {
      var randomNumber = letters[Math.floor(Math.random() * 3)];
      //Like this we won't get multiple spaces next to each other
      if(stepString[i-1] === " " && randomNumber === " ") {
        i--;
      } else {
      stepString += randomNumber;
      }
    }
    document.getElementById("textField").value = stepString;
  } else {
    const errorMessage = document.createElement('marquee')
    errorMessage.textContent = `Gah, it's not working!`
    //app.appendChild(errorMessage)
  }
}

request.send()

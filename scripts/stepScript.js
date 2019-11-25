var currentStep = localStorage.getItem('step');

const app = document.getElementById('root')

const container = document.createElement('div')
container.setAttribute('class', 'container')

console.log(localStorage.getItem('step'));

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
      console.log(step.letter);
      letters.push(step.letter);
    })
    for(var i = 0; i < 200; i++) {
      if(stepString[i] === " " && letters[Math.floor(Math.random() * 3)]) {
        i--;
      } else {
      stepString += letters[Math.floor(Math.random() * 3)];
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

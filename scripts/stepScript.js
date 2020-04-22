$(document).ready(function() {

});
var currentStep = localStorage.getItem('step');
const app = document.getElementById('root')
const container = document.createElement('div')
container.setAttribute('class', 'container')
document.getElementById("stepName").innerHTML = "Step" + " " + currentStep;

var letters = [" "];
//We put the letters in a string so we can just use it for checking the char before
var stepString = [""]

var request = new XMLHttpRequest()
request.open('GET', 'http://pure-brushlands-81405.herokuapp.com/letters/smaller/' + currentStep, true)
request.onload = function() {
  // Begin accessing JSON data here
  var data = JSON.parse(this.response)
  if (request.status >= 200 && request.status < 400) {
    var letterDiv = document.getElementById('input');
    data.forEach(step => {
      letters.push(step.letter);
    })
    for (var i = 0; i < 100; i++) {
      // random using lenth array because sometimes it can be more than 3
      var randomLetter = letters[Math.floor(Math.random() * letters.length)];
      //Like this we won't get multiple spaces next to each other
      if (stepString[i - 1] === " " && randomLetter === " ") {
        i--;
      } else {
        stepString += randomLetter;
        var letterSpan = document.createElement('span');
        letterSpan.innerText = randomLetter;
        letterSpan.id = "letter_" + i;
        letterSpan.className = "letterStyle";
        letterDiv.appendChild(letterSpan);
        var startLetter = document.getElementById("letter_0");
        startLetter.classList.add("active");

      }
    }
  } else {
    const errorMessage = document.createElement('marquee')
    errorMessage.textContent = `Gah, it's not working!`
  }
}
request.send();

//globals that will be used onKeyClicked
var correct = 0;
var errors = 0;
var currentLength = 10;
var sec = 0;

var score = document.getElementById("score");
var error = document.getElementById("error");
var time = document.getElementById("time");
var stepname = document.getElementById("stepName").innerHTML;

$(document).ready(function() {
  timer()
});

function timer() {
  var timer = setInterval(function() {
    sec++;
  }, 1000);
}

function keyClicked(e) {
  console.log(stepString.length);
  var currentSpan = stepString.length - currentLength;
  var span = document.getElementById("letter_" + currentSpan);
  console.log("this" + stepString.length + "-" + currentLength);
  var keynum;
  if (window.event) { // IE
    keynum = e.keyCode;
  } else if (e.which) { // Netscape/Firefox/Opera
    keynum = e.which;
  }
  console.log("the pressed key" + "'" + String.fromCharCode(keynum).trim() + "'");
  console.log("the correct key needed" + "'" + document.getElementById("letter_" + currentSpan).innerText + "'");
  console.log("current letter : " + currentSpan);
  console.log("currentLength of the string :" + currentLength);
  if (document.getElementById("letter_" + currentSpan).innerText === String.fromCharCode(keynum).trim()) {
    //if correct we will reduce the length of the string
    currentLength--;
    correct++;
    //will remove the span when correct
    span.remove();
  } else {
    errors++;
    span.style.background = "pink";
    span.style.color = "darkred";
    span.style.border.bottom = "1px solid Red";
  }
  if (currentLength < 1) {
    var test = (correct - errors) / (sec / 100);
    score.innerText = (correct - errors) / (sec / 100);
    error.innerText = errors;
    time.innerText = sec + " seconds";
    $('#scoreBoard').modal("show");
    //window.location.href = "home.html";


    if (localStorage.getItem("user") !== "") {
      var params = {
        "totalChars": 10,
        "totalCorrect": correct,
        "totalErrors": errors,
        "wpm": 15,
        "timeNeeded": sec,
        "score": test,
        "username": localStorage.getItem("user"),
        "stepname": stepname
      }
      var request = new XMLHttpRequest();
      request.open('POST', 'http://localhost:8080/scores', true);
      request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
      request.onload = function() {
        // Begin accessing JSON data here
        var data = JSON.parse(this.response)
        if (request.status >= 200 && request.status < 400) {
          console.log(request.responseText);
        } else {
          const errorMessage = document.createElement('marquee')
          errorMessage.textContent = `Gah, it's not working!`
        }
      }
      request.send(JSON.stringify(params));
    }

  }
}

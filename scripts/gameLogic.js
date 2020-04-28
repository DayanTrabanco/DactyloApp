//globals that will be used onKeyClicked
var correct = 0;
var errors = 0;
var currentLength = 100;
var sec = 0;

var score = document.getElementById("score");
var error = document.getElementById("error");
var time = document.getElementById("time");
var stepname = document.getElementById("stepName").innerHTML;
var keyArray = [];

$(document).ready(function() {
  timer()
});

function timer() {
  var timer = setInterval(function() {
    sec++;
  }, 1000);
}

function keyBoard(){
  var parentDOM = document.getElementById("keyboard__key-id");
  var keyboardLetters = parentDOM.getElementsByClassName("keyboard__key");

  for (var i = 0; i < keyboardLetters.length; i++) {
    keyArray.push(keyboardLetters[i].textContent.trim());
  }
  console.log("keyboardLetters:", keyArray);
}

function keyClicked(e) {
  console.log(stepString.length);
  var currentSpan = stepString.length - currentLength;
  var span = document.getElementById("letter_" + currentSpan);
  var nextSpan = document.getElementById("letter_" + (currentSpan + 1));
  var nextLetter = nextSpan.innerText;
  var highlightNextKey = document.getElementById(nextLetter);
  highlightNextKey.setAttribute("color", "red");
  console.log("nextSpan:", nextLetter);
  var prevSpan = nextSpan - 1;
  console.log("this" + stepString.length + "-" + currentLength);

  keyBoard();
  if(keyArray.includes(nextLetter)){
    console.log(nextLetter);

  }

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
    //go to next span if incorrect
    span.classList.remove("active");
    if(nextSpan){
      nextSpan.classList.add("active");
    }

    //Style span
    span.style.background = "#e7fbd3";
    span.style.color = "#0e630e";
    span.style.border.radius = "4px";
  } else {
    currentLength--;
    errors++;
    span.classList.remove("active");
    if(nextSpan){
      nextSpan.classList.add("active")
    }
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
        "totalChars": 100,
        "totalCorrect": correct,
        "totalErrors": errors,
        "wpm": 15,
        "timeNeeded": sec,
        "score": test,
        "username": localStorage.getItem("user"),
        "stepname": stepname
      }
      var request = new XMLHttpRequest();
      request.open('POST', 'http://pure-brushlands-81405.herokuapp.com/scores', true);
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

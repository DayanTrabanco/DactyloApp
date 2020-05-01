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

function currentSpan(){
  return stepString.length - currentLength;
}

function span(){
  return document.getElementById("letter_" + currentSpan());
}

function nextSpan(){
  return document.getElementById("letter_" + (currentSpan() + 1));
}

function nextLetter(){
  return nextSpan().innerText;
}

function redLetters(){
  return 'f' || 'F' || 'j' || 'J';
}

function colorLetter(e){
  switch(nextLetter()) {
  case 'f': case 'F': case 'j': case 'J': case 'G': case 'g': case 'H': case 'h':
    return e.style.background = "#fd4a46";
    break;
  case 'e': case 'd': case 'c': case 'E': case 'D': case 'i': case 'k':
  case 'I':
  case 'K':
  case 'C': return e.style.background = "#fac025";
  case '': return e.style.background = "#bdccd4";
    // code block
    break;
  default: return e.style.background = "#bdccd4";
    // code block
}
}

function keyBoard(){
  var parentDOM = document.getElementById("keyboard__key-id");
  var keyboardLetters = parentDOM.getElementsByClassName("keyboard__key");

  for (var i = 0; i < keyboardLetters.length; i++) {
    keyArray.push(keyboardLetters[i].textContent.trim());
    if(nextSpan() && (keyArray[i] == nextLetter().toLowerCase())){
      if(nextLetter() === nextLetter().toUpperCase() && nextLetter() !== ''){
        var caps = parentDOM.getElementsByClassName("caps-lock")[0];
        //change Colors
        colorLetter(caps);
      }
      var getKey = parentDOM.getElementsByClassName("keyboard__key")[i];
      colorLetter(getKey);
    }
    else if(keyboardLetters[i].style.background != null){
      keyboardLetters[i].style.background = "rgba(255, 255, 255, 0.7)";
    }
  }
}

function keyClicked(e) {
  var span = document.getElementById("letter_" + currentSpan());
  var nextSpan = document.getElementById("letter_" + (currentSpan() + 1));

  console.log("this" + stepString.length + "-" + currentLength);

  //keyboard logic
  keyBoard();

  var keynum;
  if (window.event) { // IE
    keynum = e.keyCode;
  } else if (e.which) { // Netscape/Firefox/Opera
    keynum = e.which;
  }
  console.log("the pressed key" + "'" + String.fromCharCode(keynum).trim() + "'");
  console.log("the correct key needed" + "'" + document.getElementById("letter_" + currentSpan()).innerText + "'");
  console.log("current letter : " + currentSpan());
  console.log("currentLength of the string :" + currentLength);
  if (document.getElementById("letter_" + currentSpan()).innerText === String.fromCharCode(keynum).trim()) {
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

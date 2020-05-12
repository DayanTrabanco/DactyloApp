//globals that will be used onKeyClicked
var correct = 0;
var errors = 0;
var currentLength = 70;
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

function currentSpan() {
  return stepString.length - currentLength;
}

function span() {
  return document.getElementById("letter_" + currentSpan());
}

function nextSpan() {
  return document.getElementById("letter_" + (currentSpan() + 1));
}

function nextLetter() {
  switch (nextSpan().innerText) {
    case '+':
      return "=";
    case '?':
      return ",";
    case ".":
      return ";";
    case "/":
      return ":";
  }
  return nextSpan().innerText;
}

function nextSymbol() {
  return nextSpan().innerText;
}

function colorLetter(e) {
  switch (nextLetter()) {
    case 'f':
    case 'F':
    case 'G':
    case 'g':
    case 'v':
    case 'V':
    case 'r':
    case 'R':
    case 'T':
    case 't':
    case 'b':
    case 'B':
    case 'j':
    case 'J':
    case 'H':
    case 'h':
    case ',':
    case 'u':
    case 'U':
    case 'y':
    case 'Y':
    case 'n':
    case 'N':
      return e.style.background = "#fd4a46";
      break;
    case 'd':
    case 'c':
    case 'e':
    case 'D':
    case 'C':
    case 'E':
    case 'k':
    case 'K':
    case ';':
    case 'i':
    case 'I':
      return e.style.background = "#fac025";
      break;
    case 's':
    case 'S':
    case 'z':
    case 'Z':
    case 'x':
    case 'X':
    case 'l':
    case 'L':
    case 'o':
    case 'O':
    case ':':
      return e.style.background = "#7db721";
      break;
    case 'q':
    case 'Q':
    case 'w':
    case 'W':
    case 'a':
    case 'A':
    case 'p':
    case 'P':
    case 'M':
    case 'm':
    case '=':
      return e.style.background = "#0176ff";
      break;
    case '':
      return e.style.background = "#bdccd4";
      // code block
      break;
    default:
      return e.style.background = "#bdccd4";
      // code block
  }
}

function colorHand(e) {
  switch (nextLetter()) {
    // Left index finger
    case 'f':
    case 'g':
    case 'v':
    case 'r':
    case 't':
    case 'b':
    case 'B':
      return e.style.backgroundImage = "url('./images/key_hands_red_left_hand.svg')";
      break;
      // Right index finger
    case 'j':
    case 'h':
    case ',':
    case 'u':
    case 'y':
    case 'n':
      return e.style.backgroundImage = "url('./images/key_hands_red_right_hand.svg')";
      break;
      // Left middle finger
    case 'd':
    case 'c':
    case 'e':
      return e.style.backgroundImage = "url('./images/key_hands_yellow_left_hand.svg')";
      break;
      // Right middle finger
    case 'k':
    case ';':
    case 'i':
      return e.style.backgroundImage = "url('./images/key_hands_yellow_right_hand.svg')";
      break;
      // Left ring finger
    case 's':
    case 'z':
    case 'x':
      return e.style.backgroundImage = "url('./images/key_hands_green_left_hand.svg')";
      break;
      // Right ring finger
    case 'l':
    case 'o':
    case ':':
      return e.style.backgroundImage = "url('./images/key_hands_green_right_hand.svg')";
      break;
      // Left pinky finger
    case 'q':
    case 'w':
    case 'a':
      e.style.backgroundImage = "url('./images/key_hands_blue_left_hand.svg')";
      break;
      // Right pinky finger
    case 'p':
    case 'm':
    case '=':
      return e.style.backgroundImage = "url('./images/key_hands_blue_right_hand.svg')";
      break;
    case '':
      return e.style.backgroundImage = "url('./images/key_hands_space_right.svg')";
      // code block
      break;
    case 'J':
    case 'H':
    case 'Y':
    case 'U':
    case 'N':
    case '?':
      return e.style.backgroundImage = "url('./images/key_hands_blue_left_hand_red_right_hand.svg')";
    case 'K':
    case 'I':
    case '.':
      return e.style.backgroundImage = "url('./images/key_hands_blue_left_hand_yellow_right_hand.svg')";
    case 'L':
    case 'O':
    case '/':
      return e.style.backgroundImage = "url('./images/key_hands_blue_left_hand_green_right_hand.svg')";
    case 'M':
    case 'P':
    case 'W':
    case 'Q':
    case 'A':
      return e.style.backgroundImage = "url('./images/key_hands_blue_left_hand_blue_right_hand.svg')";
    case 'F':
    case 'G':
    case 'T':
    case 'R':
    case 'V':
    case 'B':
      return e.style.backgroundImage = "url('./images/key_hands_red_left_hand_blue_right_hand.svg')";
    case 'D':
    case 'E':
    case 'C':
      return e.style.backgroundImage = "url('./images/key_hands_yellow_left_hand_blue_right_hand.svg')";
    case 'S':
    case 'Z':
    case 'X':
      return e.style.backgroundImage = "url('./images/key_hands_green_left_hand_blue_right_hand.svg')";
    default:
      return e.style.backgroundImage = "url('./images/key_hands_space_left.svg')";
      // code block
  }
}

function keyBoard() {
  var handDOM = document.getElementById("hands");
  var parentDOM = document.getElementById("keyboard__key-id");
  var keyboardLetters = parentDOM.getElementsByClassName("keyboard__key");

  for (var i = 0; i < keyboardLetters.length; i++) {
    keyArray.push(keyboardLetters[i].textContent.trim());
    if (nextSpan() && (keyArray[i] == nextLetter().toLowerCase())) {
      if (nextLetter() === nextLetter().toUpperCase() && (nextSymbol() !== "" && nextSymbol() !== "," && nextSymbol() !== ";" && nextSymbol() !== ":" && nextSymbol() !== "=")) {
        var caps = parentDOM.getElementsByClassName("caps-left")[0];
        //change Colors
        colorLetter(caps);
      }
      var handImg = handDOM.getElementsByClassName("key_hands")[0];
      var getKey = parentDOM.getElementsByClassName("keyboard__key")[i];
      colorLetter(getKey);
      colorHand(handImg);
    } else if (keyboardLetters[i].style.background != null) {
      keyboardLetters[i].style.background = "rgba(255, 255, 255, 0.7)";
    }
  }
}

function keyClicked(e) {
  var span = document.getElementById("letter_" + currentSpan());
  var nextSpan = document.getElementById("letter_" + (currentSpan() + 1));

  console.log("this" + stepString.length + "-" + currentLength);

  //keyboard logic


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
    //change key only when it is correct
    keyBoard();
    currentLength--;
    correct++;
    //go to next span if incorrect
    span.classList.remove("active");
    if (nextSpan) {
      nextSpan.classList.add("active");
    }

    //Style span
    span.style.background = "#e7fbd3";
    span.style.color = "#0e630e";
    span.style.border.radius = "4px";
  } else {
    //currentLength--;
    errors++;
    /*span.classList.remove("active");
    if (nextSpan) {
      nextSpan.classList.add("active")
    } */
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

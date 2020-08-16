//globals that will be used onKeyClicked
var correct = 0;
var errors = 0;
var sec = 0;
var oneIsEnough = 0;
var currentLength = localStorage.getItem("currentLength");
var score = document.getElementById("score");
var error = document.getElementById("error");
var time = document.getElementById("time");
var wordPerMin = document.getElementById("wpm");
var stepname = document.getElementById("stepName").innerHTML;
var keyArray = [];

$(document).ready(function() {
  timer();
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
  return nextSpan().innerText;
}

function nextSymbol() {
  return nextSpan().innerText;
}
//Based on the char it will put a color on the key
function colorLetter(e) {
  var parentDOM = document.getElementById("keyboard__key-id");
  var capsLeft = parentDOM.getElementsByClassName("caps_left")[0];
  var capsRight = parentDOM.getElementsByClassName("caps_right")[0];
  //rollback color shift
  capsRight.style.background = "rgba(255, 255, 255, 0.7)";
  capsLeft.style.background = "rgba(255, 255, 255, 0.7)";

  switch (nextLetter()) {
    case 'F':
    case 'G':
    case 'V':
    case 'B':
    case 'T':
    case 'R':
      e.style.background = "#fd4a46";
      capsRight.style.background = "#0176ff";
      break;
    case 'Y':
    case 'U':
    case 'J':
    case 'H':
    case 'N':
    case '?':
      e.style.background = "#fd4a46";
      capsLeft.style.background = "#0176ff";
      break
    case 'f':
    case 'g':
    case 'v':
    case 'r':
    case 't':
    case 'b':
    case 'j':
    case 'h':
    case ',':
    case 'u':
    case 'y':
    case 'n':
      return e.style.background = "#fd4a46";
      break;
    case 'D':
    case 'C':
    case 'E':
      capsRight.style.background = "#0176ff";
      e.style.background = "#fac025";
      break;
    case 'K':
    case 'I':
    case '.':
      capsLeft.style.background = "#0176ff";
      e.style.background = "#fac025";
      break;
    case 'd':
    case 'c':
    case 'e':
    case 'k':
    case ';':
    case 'i':
      e.style.background = "#fac025";
      break;
    case 'Z':
    case 'S':
    case 'X':
      capsRight.style.background = "#0176ff";
      e.style.background = "#7db721";
      break;
    case 'L':
    case 'O':
    case '/':
      capsLeft.style.background = "#0176ff";
      e.style.background = "#7db721";
      break;
    case 's':
    case 'z':
    case 'x':
    case 'l':
    case 'o':
    case ':':
      e.style.background = "#7db721";
      break;
    case 'Q':
    case 'W':
    case 'A':
      capsRight.style.background = "#0176ff";
      e.style.background = "#0176ff";
      break;
    case '+':
    case 'P':
    case 'M':
      capsLeft.style.background = "#0176ff";
      e.style.background = "#0176ff";
      break;
    case 'q':
    case 'w':
    case 'a':
    case 'p':
    case 'm':
    case '=':
      e.style.background = "#0176ff";
      break;
    case '':
      e.style.background = "#bdccd4";
      break;
    default:
      e.style.background = "#bdccd4";
      break;
  }
}

//Based on the letter the right finger will have an highlight
function colorHand(e) {
  var test = nextLetter();
  switch (nextLetter()) {
    // Left index finger
    case 'f':
    case 'g':
    case 'v':
    case 'r':
    case 't':
    case 'b':
      e.style.backgroundImage = "url('./images/key_hands_red_left_hand.svg')";
      break;
      // Right index finger
    case 'j':
    case 'h':
    case ',':
    case 'u':
    case 'y':
    case 'n':
      e.style.backgroundImage = "url('./images/key_hands_red_right_hand.svg')";
      break;
      // Left middle finger
    case 'd':
    case 'c':
    case 'e':
      e.style.backgroundImage = "url('./images/key_hands_yellow_left_hand.svg')";
      break;
      // Right middle finger
    case 'k':
    case ';':
    case 'i':
      e.style.backgroundImage = "url('./images/key_hands_yellow_right_hand.svg')";
      break;
      // Left ring finger
    case 's':
    case 'z':
    case 'x':
      e.style.backgroundImage = "url('./images/key_hands_green_left_hand.svg')";
      break;
      // Right ring finger
    case 'l':
    case 'o':
    case ':':
      e.style.backgroundImage = "url('./images/key_hands_green_right_hand.svg')";
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
      e.style.backgroundImage = "url('./images/key_hands_blue_right_hand.svg')";
      break;
    case '':
      e.style.backgroundImage = "url('./images/key_hands_space_right.svg')";
      break;
    case 'J':
    case 'H':
    case 'Y':
    case 'U':
    case 'N':
    case '?':
      e.style.backgroundImage = "url('./images/key_hands_blue_left_hand_red_right_hand.svg')";
      break;
    case 'K':
    case 'I':
    case '.':
      e.style.backgroundImage = "url('./images/key_hands_blue_left_hand_yellow_right_hand.svg')";
      break;
    case 'L':
    case 'O':
    case '/':
      e.style.backgroundImage = "url('./images/key_hands_blue_left_hand_green_right_hand.svg')";
      break;
    case 'M':
    case 'P':
    case 'W':
    case 'Q':
    case 'A':
    case '+':
      e.style.backgroundImage = "url('./images/key_hands_blue_left_hand_blue_right_hand.svg')";
      break;
    case 'F':
    case 'G':
    case 'T':
    case 'R':
    case 'V':
    case 'B':
      e.style.backgroundImage = "url('./images/key_hands_red_left_hand_blue_right_hand.svg')";
      break;
    case 'D':
    case 'E':
    case 'C':
      e.style.backgroundImage = "url('./images/key_hands_yellow_left_hand_blue_right_hand.svg')";
      break;
    case 'S':
    case 'Z':
    case 'X':
      e.style.backgroundImage = "url('./images/key_hands_green_left_hand_blue_right_hand.svg')";
      break;
    default:
      e.style.backgroundImage = "url('./images/key_hands_space_left.svg')";
      break;
  }
}

function keyBoard() {
  var handDOM = document.getElementById("hands");
  var parentDOM = document.getElementById("keyboard__key-id");
  var keyboardLetters = parentDOM.getElementsByClassName("keyboard__key");
  var capsRight = parentDOM.getElementsByClassName("caps_left")[0];

  for (var i = 0; i < keyboardLetters.length; i++) {
    if (oneIsEnough === 0) {
      keyArray.push(keyboardLetters[i].textContent.trim());
    }
    if (i >= keyboardLetters.length - 1) {
      oneIsEnough = 1;
    }
    //Check which letter it will be next to show the right color and hand
    if (nextSpan() && (keyArray[i].charAt(0) === nextLetter().toLowerCase() || (keyArray[i].charAt(1) === nextLetter().toLowerCase() && keyArray[i].charAt(1) !== ""))) {
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
  var keynum;
  if (window.event) { // IE
    keynum = e.keyCode;
  } else if (e.which) { // Netscape/Firefox/Opera
    keynum = e.which;
  }
  if (document.getElementById("letter_" + currentSpan()).innerText === String.fromCharCode(keynum).trim()) {
    //if correct we will reduce the length of the string
    //change key only when it is correct
    //keyboard logic
    if (currentLength > 1) {
      keyBoard();
    }
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
    errors++;
    span.style.background = "pink";
    span.style.color = "darkred";
    span.style.border.bottom = "1px solid Red";
  }
  //Calculate the score
  if (currentLength < 1) {
    var highscore = (correct - errors) * 100 / (sec / 60);
    var wpm = (200 / 5) / (sec / 60)
    score.innerText = Math.round(highscore);
    error.innerText = errors;
    time.innerText = sec + " seconds";
    wordPerMin.innerText = Math.round(wpm);
    $('#scoreBoard').modal("show");
    //When final need to change name so it corresponds to the get of the leaderboard
    //The one received here is step final(n)
    if (stepname.includes("Final") === true) {
      stepname = "Final";
    }
    //if user is connected it will add his score to the database
    if (localStorage.getItem("user") !== "") {
      var params = {
        "totalChars": 200,
        "totalCorrect": correct,
        "totalErrors": errors,
        "wpm": wpm,
        "timeNeeded": sec,
        "score": highscore,
        "username": localStorage.getItem("user"),
        "stepname": stepname
      }
      var request = new XMLHttpRequest();
      request.open('POST', 'http://pure-brushlands-81405.herokuapp.com/scores', true);
      request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
      request.onload = function() {
        // Begin accessing JSON data here
        var data = JSON.parse(this.response)
        if (request.status >= 200 && request.status < 400) {} else {
          const errorMessage = document.createElement('marquee')
          errorMessage.textContent = `Gah, it's not working!`
        }
      }
      request.send(JSON.stringify(params));
    }
    // when closing the score screen it will go back to the steps list
    $("#scoreBoard").on("hidden.bs.modal", function() {
      window.location.href = "home.html";
    });
  }
}

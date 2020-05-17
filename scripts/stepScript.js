$(document).ready(function() {

});

function startLetter() {
  return document.getElementById("letter_0");
}

function colorFirstLetter(e) {
  var parentDOM = document.getElementById("keyboard__key-id");
  var capsLeft = parentDOM.getElementsByClassName("caps_left")[0];
  var capsRight = parentDOM.getElementsByClassName("caps_right")[0];
  switch (startLetter().innerText) {
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


function colorFirstHand(e) {
  switch (startLetter().innerText) {
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
      break
    default:
      e.style.backgroundImage = "url('./images/key_hands_space_left.svg')";
      break;
  }
}

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
    for (var i = 0; i < 200; i++) {
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
        startLetter().classList.add("active");
      }
    }

    //Get first Letter + color and hand
    var parentDOM = document.getElementById("keyboard__key-id");
    var handDOM = document.getElementById("hands");
    var keyboardLetters = parentDOM.getElementsByClassName("keyboard__key");
    var keyArray = [];

    for (var i = 0; i < keyboardLetters.length; i++) {
      keyArray.push(keyboardLetters[i].textContent.trim());
      if ((keyArray[i].charAt(0) === startLetter().innerText.toLowerCase() || (keyArray[i].charAt(1) === startLetter().innerText.toLowerCase() && keyArray[i].charAt(1) !== ""))) {
        var firstKey = parentDOM.getElementsByClassName("keyboard__key")[i];
        var handImg = handDOM.getElementsByClassName("key_hands")[0];
        colorFirstLetter(firstKey);
        colorFirstHand(handImg);
        return true;
      }
    }
  } else {
    const errorMessage = document.createElement('marquee')
    errorMessage.textContent = `Gah, it's not working!`
  }
}

request.send();

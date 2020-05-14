$(document).ready(function() {

});

function startLetter() {
  return document.getElementById("letter_0");
}

function colorFirstLetter(e) {
  switch (startLetter().innerText) {
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


function colorFirstHand(e) {
  switch (startLetter().innerText) {
    case 'f':
    case 'g':
    case 'v':
    case 'r':
    case 't':
    case 'b':
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
    for (var i = 0; i < 70; i++) {
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
      if (keyArray[i] === startLetter().innerText.toLowerCase()) {
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

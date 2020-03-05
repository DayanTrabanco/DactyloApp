//globals that will be used onKeyClicked
var correct = 0;
var errors = 0;
var currentLength = 10;

var score = document.getElementById("score");
var error = document.getElementById("error");

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
    score.innerText = (correct - errors) * 1.2;
    error.innerText = errors;
    $('#scoreBoard').modal("show");
    //window.location.href = "home.html";
  }
}

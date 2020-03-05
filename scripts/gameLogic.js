//globals that will be used onKeyClicked
var correct = 0;
var errors = 0;
var currentLength = 20;

function keyClicked(e) {
  console.log(stepString.length);
  var currentSpan = stepString.length - currentLength;
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
    var span = document.getElementById("letter_" + currentSpan);
    span.remove();
  } else {
    errors++;
    document.getElementById("letter_" + currentSpan).style.background = "pink";
    document.getElementById("letter_" + currentSpan).style.color = "darkred";
    document.getElementById("letter_" + currentSpan).style.border.bottom = "1px solid Red";
  }
  if (currentLength < 1) {
    alert("Errors:" + errors + " & correct first try: " + correct + "on a string of :" + stepString.length);
    window.location = 'home.html';
  }
}

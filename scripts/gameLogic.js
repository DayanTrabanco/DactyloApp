var correct = 0;
var errors = 0;

function myFunction(e) {
  //alert("You pressed a key inside the input field");
  var text = document.getElementById("textField").value;

  var textLength = document.getElementById("textField").value.length;
  //var aantalkerenGeprobeerd;
  //if(text[0] === )
  var keynum;
  if (window.event) { // IE
    keynum = e.keyCode;
  } else if (e.which) { // Netscape/Firefox/Opera
    keynum = e.which;
  }

  if (text[0] === String.fromCharCode(keynum)) {
    //document.getElementById("textField").value.replace(/^/,'');
    text = text.replace(text[0], '')
    correct++;
    document.getElementById("textField").value = text;
  } else {
    errors++;
    alert("it isn't correct");
  }
  if (text.length < 1) {
    alert("Errors:" + errors + " & correct first try: " + correct + "on a string of :" + textLength);
  }
}

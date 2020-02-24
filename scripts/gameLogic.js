var correct = 0;
var errors = 0;

function keyClicked(e) {
  //alert("You pressed a key inside the input field");
  // it will give the text of the span
  var text2 = document.getElementById("letter_1");
  console.log(text2);
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
    document.getElementById("textField").style.color = "Black";
  } else {
    errors++;
    document.getElementById("textField").style.color = "red";
    document.getElementById("textField").classList.add('error');

    setTimeout(function() {
        document.getElementById("textField").classList.remove('error');
    }, 300);
  }
  if (text.length < 1) {
    alert("Errors:" + errors + " & correct first try: " + correct + "on a string of :" + textLength);
    window.location = 'home.html';
  }
  //
}

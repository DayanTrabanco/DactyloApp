var correct = 0;
var errors = 0;
var currentLength = 100;

function keyClicked(e) {
  //alert("You pressed a key inside the input field");
  // it will give the text of the span

  console.log(stepString.length);
  var stirng = stepString.length;
  //var text = document.getElementById("textField").value;
  var currentSpan = stepString.length - currentLength;

  console.log("this" + stepString.length + "-" + currentLength);

  //var textLength = document.getElementById("textField").value.length;
  //var aantalkerenGeprobeerd;
  //if(text[0] === )
  var keynum;
  if (window.event) { // IE
    keynum = e.keyCode;
  } else if (e.which) { // Netscape/Firefox/Opera
    keynum = e.which;
  }

  console.log("curren" + currentSpan);
  console.log("currentLength" + currentLength);
  if (document.getElementById("letter_" + currentSpan).innerText === String.fromCharCode(keynum)) {
    //document.getElementById("textField").value.replace(/^/,'');
    //text = text.replace(text[0], '')
    currentLength--;
    correct++;
    var span = document.getElementById("letter_" + currentSpan);
    $('span[id^="letter_'+ currentSpan + '"]').remove();

    //span.parentNode.removeChild(span)
    //document.getElementById("textField").value = text;
    //document.getElementById("textField").style.color = "Black";
  } else {
    errors++;
    document.getElementById("letter_" + currentSpan).style.color = "Red";
    document.getElementById("letter_" + currentSpan).style.border.bottom = "1px solid Red";
    //document.getElementById("letter_" + currentSpan).classList.add('error');

    /* setTimeout(function() {
        document.getElementById("textField").classList.remove('error');
    }, 300); */
  }
  if (currentLength < 1) {
    alert("Errors:" + errors + " & correct first try: " + correct + "on a string of :" + stepString.length);
    window.location = 'home.html';
  }
  //
}

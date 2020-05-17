const app = document.getElementById('root')

const userOption = document.getElementById("me");
if (localStorage.getItem("user") !== "") {
  userOption.innerText = localStorage.getItem("user");
  userOption.style.display = "block";
} else {
  userOption.style.display = "none";
}

const container = document.createElement('div')
container.setAttribute('class', 'container')
var tbl = document.getElementById('table')
tbl.setAttribute('border', '1');

container.appendChild(tbl);
app.appendChild(container);

const steps = document.getElementById("steps");
const options = document.getElementById("options");

steps.addEventListener('change', function(e) {
  showLeaderboard(e);
})

options.addEventListener('change', function(e) {
  showLeaderboard(e);
})


var request1 = new XMLHttpRequest()
request1.open('GET', 'http://pure-brushlands-81405.herokuapp.com/steps', true)
request1.onload = function() {
  // Begin accessing JSON data here
  var data1 = JSON.parse(this.response)
  if (request1.status >= 200 && request1.status < 400) {
    data1.forEach(step => {
      const option = document.createElement('option');
      option.innerText = step.name;
      steps.appendChild(option);
    })
  } else {
    const errorMessage = document.createElement('marquee')
    errorMessage.textContent = `Gah, it's not working!`
    app.appendChild(errorMessage)
  }
}
request1.send();

function showLeaderboard(e) {
  var step = document.getElementById("steps").value;
  var option = document.getElementById("options").value;
  var tableLength = tbl.rows.length;
  debugger;
  var oldTr = document.getElementById("tr0");
  if (oldTr !== undefined && oldTr !== null) {
    for(var i = 0; i < tableLength - 1; i++) {
      var trId = "tr"+i;
      var oldTr = document.getElementById(trId);
      oldTr.remove();
    }

  }
  //leaderboard step 1
  var request = new XMLHttpRequest()
  if (document.getElementById("options").value === "All") {
    request.open('GET', 'http://pure-brushlands-81405.herokuapp.com/scores/top/' + step, true);
  } else {
    request.open('GET', 'http://pure-brushlands-81405.herokuapp.com/scores/topBoth/' + step + "," + localStorage.getItem("user"), true);
  }
  var i = 0;
  request.onload = function() {
    // Begin accessing JSON data here
    var data = JSON.parse(this.response)
    if (request.status >= 200 && request.status < 400) {
      data.forEach(score => {
        var tr = document.createElement('tr');
        tr.id = "tr" + i++;
        var highScore = document.createElement('td');
        var user = document.createElement('td');
        var correct = document.createElement('td');
        var errors = document.createElement('td');
        var time = document.createElement('td');
        var date = document.createElement('td');
        var step = document.createElement('td');

        highScore.innerText = Math.round(score.score);
        correct.innerText = score.totalCorrect;
        user.innerText = score.username;
        errors.innerText = score.totalErrors;
        time.innerText = score.timeNeeded;
        date.innerText = score.createdOn;
        step.innerText = score.stepname;

        tr.appendChild(user);
        tr.appendChild(step);
        tr.appendChild(correct);
        tr.appendChild(errors);
        tr.appendChild(time);
        tr.appendChild(highScore);
        tr.appendChild(date);
        tbl.appendChild(tr);
      })

    } else {
      const errorMessage = document.createElement('marquee')
      errorMessage.textContent = `Gah, it's not working!`
      app.appendChild(errorMessage)
    }
  }
  request.send()
}

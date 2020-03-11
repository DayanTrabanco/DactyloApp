const app = document.getElementById('root')

const container = document.createElement('div')
container.setAttribute('class', 'container')
var tbl = document.getElementById('table')
tbl.setAttribute('border', '1');

container.appendChild(tbl);
app.appendChild(container);


var request = new XMLHttpRequest()
request.open('GET', 'http://localhost:8080/scores/top/step 1', true)
request.onload = function() {
  // Begin accessing JSON data here
  var data = JSON.parse(this.response)
  if (request.status >= 200 && request.status < 400) {
    data.forEach(step => {
      var tr = document.createElement('tr');
      var td = document.createElement('td');
      td.innerText = step.score;


      var user = document.createElement('td');
      user.innerText = step.username;

      tr.appendChild(user);
      tr.appendChild(td);
      tbl.appendChild(tr);
    })

  } else {
    const errorMessage = document.createElement('marquee')
    errorMessage.textContent = `Gah, it's not working!`
    app.appendChild(errorMessage)
  }
}

request.send()

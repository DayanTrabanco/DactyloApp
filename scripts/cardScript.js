const app = document.getElementById('root')
const container = document.createElement('div')
container.setAttribute('class', 'container')

app.appendChild(container)

var request = new XMLHttpRequest()
request.open('GET', 'http://pure-brushlands-81405.herokuapp.com/steps', true)
request.onload = function() {
  // Begin accessing JSON data here
  var data = JSON.parse(this.response)
  if (request.status >= 200 && request.status < 400) {
    data.forEach(step => {
      const card = document.createElement('div')
      card.setAttribute('class', 'card')
      card.setAttribute("id", step.name)
      const h1 = document.createElement('h1')
      h1.textContent = step.name
      const p = document.createElement('p')
      step.description = step.description.substring(0, 300)
      p.textContent = `${step.description}`
      container.appendChild(card)
      card.appendChild(h1)
      card.appendChild(p)
    })

    //put click event on the cards
    //on click go to the step
    $('.card').click(function(e) {
      if(e.originalEvent.path[1].innerText.split(" ")[1].replace(/[^0-9]+/g, "") > 0) {
        window.location = 'step.html';
        localStorage.setItem('step', e.originalEvent.path[1].innerText.split(" ")[1].replace(/[^0-9]+/g, ""));
      } else {
        window.location = 'final.html';
        localStorage.setItem('step', "Final");
      }
    });

    $('.leaderboard-btn').click(function(e) {
      window.location = 'index.html';
    });
  } else {
    const errorMessage = document.createElement('marquee')
    errorMessage.textContent = `Gah, it's not working!`
    app.appendChild(errorMessage)
  }
}

request.send()

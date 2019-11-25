const app = document.getElementById('root')

const container = document.createElement('div')
container.setAttribute('class', 'container')

app.appendChild(container)

var request = new XMLHttpRequest()
request.open('GET', 'http://localhost:8080/steps/', true)
request.onload = function() {
  // Begin accessing JSON data here
  var data = JSON.parse(this.response)
  if (request.status >= 200 && request.status < 400) {
    data.forEach(step => {
      const card = document.createElement('div')
      card.setAttribute('class', 'card')
      card.setAttribute("id", step.id)
      const h1 = document.createElement('h1')
      h1.textContent = step.name
      const p = document.createElement('p')
      step.description = step.description.substring(0, 300)
      p.textContent = `${step.description}`

      container.appendChild(card)
      card.appendChild(h1)
      card.appendChild(p)
    })

    $('.card').click(function (e) {
        window.location = 'step.html';
        //console.log(e.originalEvent.path[1].id);

        localStorage.setItem('step' , e.originalEvent.path[1].id);
    });
  } else {
    const errorMessage = document.createElement('marquee')
    errorMessage.textContent = `Gah, it's not working!`
    app.appendChild(errorMessage)
  }
}

request.send()

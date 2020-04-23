document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("form#create-task-form")
    .addEventListener("submit", event => {
      event.preventDefault()
      let ul = document.getElementById('tasks')
      let li = document.createElement('li')
      li.innerText = document.getElementById('new-task-description').value
      ul.appendChild(li)
    })
});

/*
step one: event listener for submit form
  step one-ay: .preventDefault so we do not redirect

step two: take the submitted info and transform it into something usable
  step two-ay: append it to our unordered list that looks like this:
<div id="list">
      <h2>My Todos</h2>
      <ul id="tasks">
      </ul>
    </div>
*/
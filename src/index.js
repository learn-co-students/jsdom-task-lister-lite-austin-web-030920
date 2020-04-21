document.addEventListener("DOMContentLoaded", () => {
  // your code here
  f = document.getElementById("create-task-form")

  f.addEventListener('submit', function(event) {
    event.preventDefault();
    let inputField = document.getElementById("new-task-description")
    let value = inputField.value
    let listField = document.getElementById("tasks")
    listField.append(value)

    });
});


// document.createElement('li').textContent=listField.value()
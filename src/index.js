document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("create-task-form");
  const tasks = document.getElementById("tasks")

  form.addEventListener('submit', addTask);

  function addTask(event) {
    let newTask = document.getElementById("new-task-description").value
    tasks.innerHTML += `<li>${newTask}</li>`
    event.preventDefault();
  }


});

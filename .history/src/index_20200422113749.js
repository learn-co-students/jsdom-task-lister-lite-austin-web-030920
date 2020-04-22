document.addEventListener("DOMContentLoaded", () => {
  // your code here
  document
    .getElementById('create-task-form')
    .addEventListener('submit')
});

function createTask(event) {
  event.preventDefault();
  appendTask(event.target.description.value)
}

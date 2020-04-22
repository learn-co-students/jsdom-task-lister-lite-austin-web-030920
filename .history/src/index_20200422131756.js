document.addEventListener("DOMContentLoaded", () => {
  // your code here
  document.getElementById('create-task-form').addEventListener('submit', createTask);
});

function createTask(event) {
  event.preventDefault();
  appendTask(event.target.description.value);
}

function appendTask(task) {
  const list = document.getElementById('tasks');
  const item = document.createElement('li');
  item.innerText = task;
  // console.log(item)
  // console.log(list)
  const button = document.createElement('button');
  button.addEventListener('click', deleteItem);
  button.innerText = '[X]';
  item.append(button)
  list.appendChild(item);
}

function deleteItem(event) {
  console.log(event.target);
}

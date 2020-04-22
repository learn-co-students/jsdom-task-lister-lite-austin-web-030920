document.addEventListener("DOMContentLoaded", () => {
  // step one: console log to insure working dom
  // save variable after getElement
  // addEventListener to variable for submitting task
  const form = document.getElementById('create-task-form');
  form.addEventListener('submit', createTask);
});

function createTask(e){
 // console.log("button hit")
  e.preventDefault();
  let newTask = e.target.description.value;
  appendTask(newTask);
}

function appendTask(newTask){
  //console.log(newTask);
  const tasks = document.getElementById('tasks');
  const item = document.createElement('li');
  item.innerText = newTask;
  tasks.appendChild(item);
}

/* 
  function createTask(e){
    // use preventDefault
    // create variable to target event
    // log task value ##appendTask
  }

  function appendTask(arg){
    console.log(arg)
    //get task id
    //create li element
    //innerText passed in arguement
    //append li element to todos
  }

  */
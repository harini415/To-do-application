
let tasks = [];

function renderTasks() {
  const taskList = document.getElementById("taskList");
  taskList.innerHTML = "";

  tasks.forEach((task, index) => {
    const listItem = document.createElement("li");
    listItem.textContent = task.title;

    if (task.completed) {
      listItem.classList.add("completed");
    }

    listItem.addEventListener("click", () => {
      toggleTaskCompleted(index);
    });

    taskList.appendChild(listItem);
  });
}

function addTask(title) {
  tasks.push({ title, completed: false });
  renderTasks();
}

function toggleTaskCompleted(index) {
  tasks[index].completed = !tasks[index].completed;
  renderTasks();
}


function deleteTask(index) {
  tasks.splice(index, 1);
  renderTasks();
}


const addButton = document.getElementById("addButton");
addButton.addEventListener("click", () => {
  const taskInput = document.getElementById("taskInput");
  const taskTitle = taskInput.value.trim();

  if (taskTitle !== "") {
    addTask(taskTitle);
    taskInput.value = "";
  }
});

renderTasks();
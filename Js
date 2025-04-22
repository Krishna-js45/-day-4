// Simple To-Do List App - 50+ lines

document.body.innerHTML = `
  <h2>My To-Do List</h2>
  <input type="text" id="taskInput" placeholder="Enter task" />
  <button onclick="addTask()">Add Task</button>
  <ul id="taskList"></ul>
`;

const tasks = [];

function addTask() {
  const taskInput = document.getElementById("taskInput");
  const task = taskInput.value.trim();
  if (task) {
    tasks.push({ task, completed: false });
    taskInput.value = "";
    renderTasks();
  }
}

function toggleTask(index) {
  tasks[index].completed = !tasks[index].completed;
  renderTasks();
}

function deleteTask(index) {
  tasks.splice(index, 1);
  renderTasks();
}

function renderTasks() {
  const list = document.getElementById("taskList");
  list.innerHTML = "";

  tasks.forEach((t, i) => {
    const li = document.createElement("li");
    li.textContent = t.task;
    li.style.textDecoration = t.completed ? "line-through" : "none";

    const toggleBtn = document.createElement("button");
    toggleBtn.textContent = t.completed ? "Undo" : "Done";
    toggleBtn.onclick = () => toggleTask(i);

    const delBtn = document.createElement("button");
    delBtn.textContent = "Delete";
    delBtn.onclick = () => deleteTask(i);

    li.appendChild(toggleBtn);
    li.appendChild(delBtn);
    list.appendChild(li);
  });
}

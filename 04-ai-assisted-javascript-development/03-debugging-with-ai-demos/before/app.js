// Task Prioritizer
// The page elements are looked up here so the rest of the code can use them.

import { filterTasksByPriority } from "./logic.js";
import { loadTasks, saveTasks } from "./storage.js";

const taskInput = document.getElementById("task-inpt");
const prioritySelect = document.getElementById("priority-select");
const addButton = document.getElementById("add-button");
const filterSelect = document.getElementById("filter-select");
const taskList = document.getElementById("task-list");

// Builds the <li> element for a single task.
// A task looks like: { title: "Buy milk", priority: "high" }
function createTaskElement(task) {
  const listItem = document.createElement("li");
  listItem.className = `task task-${task.priority}`;

  const titleSpan = document.createElement("span");
  titleSpan.textContent = task.title;

  listItem.appendChild(titleSpan);

  return listItem;
}

// Every task the user has added, in the order they added them.
const tasks = [];

// Restore anything saved on a previous visit.
const restored = loadTasks();
if (Array.isArray(restored)) {
  tasks.push(...restored);
}

// Reads the input and select, then stores a new task.
function addTask() {
  const title = taskInput.value.trim();

  // Ignore clicks when the input is empty.
  if (title === "") {
    return;
  }

  tasks.push({
    title: title,
    priority: prioritySelect.value,
  });

  saveTasks(tasks);

  // Clear the input so the next task is easy to type.
  taskInput.value = "";
  taskInput.focus();

  renderTasks();
}

// Empties the list, then rebuilds it from the tasks that match the filter.
function renderTasks() {
  taskList.replaceChildren();

  const visibleTasks = filterTasksByPriority(tasks, filterSelect.value);

  for (const task of visibleTasks) {
    const listItem = createTaskElement(task);
    taskList.appendChild(listItem);
  }
}

addButton.addEventListener("click", addTask);
filterSelect.addEventListener("change", renderTasks);

renderTasks();

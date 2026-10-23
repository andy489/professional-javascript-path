// Task Prioritizer
// The page elements are looked up here so the rest of the code can use them.

import {
  createTask,
  filterTasksByPriority,
  normalizeTasks,
  sortTasksByPriority,
  summarizeTasks,
  toggleTaskCompletion,
} from "./logic.js";
import { loadTasks, saveTasks } from "./storage.js";

const taskInput = document.getElementById("task-input");
const prioritySelect = document.getElementById("priority-select");
const addButton = document.getElementById("add-button");
const filterSelect = document.getElementById("filter-select");
const taskList = document.getElementById("task-list");
const summary = document.getElementById("summary");

// Builds the <li> element for a single task.
// A task looks like:
// { id: 1, title: "Buy milk", priority: "high", completed: false }
function createTaskElement(task) {
  const listItem = document.createElement("li");
  listItem.className = `task task-${task.priority}`;

  if (task.completed === true) {
    listItem.classList.add("task-completed");
  }

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.checked = task.completed === true;
  // index.html has no label for this one, so name it for screen readers.
  checkbox.setAttribute("aria-label", `Mark "${task.title}" complete`);
  checkbox.addEventListener("change", () => toggleTask(task.id));

  const titleSpan = document.createElement("span");
  titleSpan.textContent = task.title;

  listItem.appendChild(checkbox);
  listItem.appendChild(titleSpan);

  return listItem;
}

// Every task the user has added, in the order they added them. Reassigned
// rather than mutated, because the logic functions hand back new arrays.
let tasks = [];

// Restore anything saved on a previous visit. Normalizing fills in the id and
// completed flag for anything saved before those existed.
const restored = loadTasks();
if (Array.isArray(restored)) {
  tasks = normalizeTasks(restored);
}

// Reads the input and select, then stores a new task.
function addTask() {
  const title = taskInput.value.trim();

  // Ignore clicks when the input is empty.
  if (title === "") {
    return;
  }

  tasks = [...tasks, createTask(tasks, title, prioritySelect.value)];

  saveTasks(tasks);

  // Clear the input so the next task is easy to type.
  taskInput.value = "";
  taskInput.focus();

  renderTasks();
}

// Flips one task between done and not done, then saves and redraws.
function toggleTask(taskId) {
  tasks = toggleTaskCompletion(tasks, taskId);

  saveTasks(tasks);
  renderTasks();
}

// The line above the list. Reports the whole task list, so the numbers are
// deliberately unaffected by the filter.
function renderSummary() {
  const { total, remaining, high } = summarizeTasks(tasks);

  if (total === 0) {
    summary.textContent = "No tasks yet — add your first one.";
  } else if (remaining === 0) {
    summary.textContent = "All tasks complete.";
  } else {
    summary.textContent = `${remaining} of ${total} tasks remaining · ${high} high priority`;
  }
}

// Empties the list, then rebuilds it from the tasks that match the filter,
// highest priority first. The sort is display-only: `tasks` stays in the
// order things were added.
function renderTasks() {
  renderSummary();

  taskList.replaceChildren();

  const visibleTasks = sortTasksByPriority(
    filterTasksByPriority(tasks, filterSelect.value),
  );

  for (const task of visibleTasks) {
    const listItem = createTaskElement(task);
    taskList.appendChild(listItem);
  }
}

addButton.addEventListener("click", addTask);
filterSelect.addEventListener("change", renderTasks);

renderTasks();

// Task Prioritizer — filtering logic.
// Pure functions only: nothing in here touches the DOM.

// Selections that mean "don't filter at all".
const SHOW_ALL = new Set([null, undefined, "", "all"]);

// Display order: lower sorts first. Anything not listed here sorts last.
const PRIORITY_ORDER = { high: 0, medium: 1, low: 2 };
const UNKNOWN_PRIORITY_ORDER = 3;

// Returns the id to give the next task: one past the highest already in use,
// so an id stays unique even after earlier tasks are removed.
export function nextTaskId(tasks) {
  if (!Array.isArray(tasks)) {
    return 1;
  }

  let highest = 0;

  for (const task of tasks) {
    if (typeof task.id === "number" && task.id > highest) {
      highest = task.id;
    }
  }

  return highest + 1;
}

// Builds a new task. The existing tasks are read only to pick the id.
export function createTask(tasks, title, priority) {
  return {
    id: nextTaskId(tasks),
    title: title,
    priority: priority,
    completed: false,
  };
}

// Flips the completed flag on one task, matched by id.
//
// A new array comes back holding a new object for the task that changed; the
// tasks passed in are never modified.
export function toggleTaskCompletion(tasks, taskId) {
  if (!Array.isArray(tasks)) {
    return [];
  }

  return tasks.map((task) => {
    if (task.id !== taskId) {
      return task;
    }

    return { ...task, completed: task.completed !== true };
  });
}

// Fills in the fields that tasks saved before completion existed are missing:
// an id, and a completed flag. Anything already carrying them is left as is.
export function normalizeTasks(tasks) {
  if (!Array.isArray(tasks)) {
    return [];
  }

  // Start past every id already in use so the ones handed out here can't
  // collide with an id further along in the list.
  let idForNextMissing = nextTaskId(tasks);

  return tasks.map((task) => {
    const id = typeof task.id === "number" ? task.id : idForNextMissing++;

    return { ...task, id: id, completed: task.completed === true };
  });
}

// Where one task's priority sits in the display order.
function priorityOrder(task) {
  const order = PRIORITY_ORDER[task.priority];

  return typeof order === "number" ? order : UNKNOWN_PRIORITY_ORDER;
}

// Returns the tasks ordered highest priority first.
//
// Tasks sharing a priority keep the order they came in, and an unrecognized
// priority sorts last. A new array comes back; the one passed in is never
// modified.
export function sortTasksByPriority(tasks) {
  if (!Array.isArray(tasks)) {
    return [];
  }

  return tasks.toSorted((a, b) => priorityOrder(a) - priorityOrder(b));
}

// Counts up a task list: how many there are, how many are still to do, and
// how many of those still to do are high priority.
//
// `high` counts remaining tasks only, so it is never larger than `remaining`.
export function summarizeTasks(tasks) {
  if (!Array.isArray(tasks)) {
    return { total: 0, remaining: 0, high: 0 };
  }

  let remaining = 0;
  let high = 0;

  for (const task of tasks) {
    // Anything other than an explicit true — a missing flag, a task saved
    // before completion existed — counts as not done.
    if (task.completed === true) {
      continue;
    }

    remaining++;

    if (task.priority === "high") {
      high++;
    }
  }

  return { total: tasks.length, remaining: remaining, high: high };
}

// Returns the tasks that match the chosen priority.
// A task looks like:
// { id: 1, title: "Buy milk", priority: "high", completed: false }
//
// - Bad input (anything that isn't an array) hands back an empty list.
// - A missing selection ("", null, undefined) behaves like "all".
// - "all" returns every task.
// - Anything else keeps only exact priority matches, so an unknown
//   priority matches nothing.
//
// The tasks array passed in is never modified; a new array comes back.
export function filterTasksByPriority(tasks, selectedPriority) {
  if (!Array.isArray(tasks)) {
    return [];
  }

  const results = [];

  for (const task of tasks) {
    if (SHOW_ALL.has(selectedPriority)) {
      results.push(task);
    } else if (task.priority === selectedPriority) {
      results.push(task);
    }
  }

  return results;
}

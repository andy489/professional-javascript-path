// Task Prioritizer — saving and loading.
// The only file that talks to localStorage.

const STORAGE_KEY = "task-prioritizer.tasks";

// Writes the whole task list to localStorage as JSON.
export function saveTasks(tasks) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
}

// Reads the task list back. Returns an empty list when nothing is stored.
export function loadTasks() {
  const saved = localStorage.getItem(STORAGE_KEY);

    return saved ? JSON.parse(saved) : [];
}

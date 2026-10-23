// Task Prioritizer — filtering logic.
// Pure functions only: nothing in here touches the DOM.

// Selections that mean "don't filter at all".
const SHOW_ALL = new Set([null, undefined, "", "all"]);

// Returns the tasks that match the chosen priority.
// A task looks like: { title: "Buy milk", priority: "high" }
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

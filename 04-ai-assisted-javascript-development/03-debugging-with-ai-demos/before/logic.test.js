import { describe, it, expect } from "vitest";

import { filterTasksByPriority } from "./logic.js";

// Small fixed sample: two priorities represented, one duplicated, so a
// filter that matches has to return more than a single task.
const tasks = [
  { title: "Buy milk", priority: "high" },
  { title: "Water plants", priority: "low" },
  { title: "Call the bank", priority: "high" },
];

describe("filterTasksByPriority", () => {
  it("returns only the tasks with the chosen priority", () => {
    expect(filterTasksByPriority(tasks, "high")).toEqual([
      { title: "Buy milk", priority: "high" },
      { title: "Call the bank", priority: "high" },
    ]);
  });

  it("returns a new array rather than the one passed in", () => {
    expect(filterTasksByPriority(tasks, "all")).not.toBe(tasks);
  });

  it("does not modify the tasks array passed in", () => {
    filterTasksByPriority(tasks, "high");

    expect(tasks).toHaveLength(3);
  });

  it("returns every task for 'all'", () => {
    expect(filterTasksByPriority(tasks, "all")).toEqual(tasks);
  });

  it("treats a null selection like 'all'", () => {
    expect(filterTasksByPriority(tasks, null)).toEqual(tasks);
  });

  it("treats an undefined selection like 'all'", () => {
    expect(filterTasksByPriority(tasks, undefined)).toEqual(tasks);
  });

  it("treats an empty-string selection like 'all'", () => {
    expect(filterTasksByPriority(tasks, "")).toEqual(tasks);
  });

  it("returns an empty array for an unknown priority", () => {
    expect(filterTasksByPriority(tasks, "urgent")).toEqual([]);
  });

  it("returns an empty array when there are no tasks", () => {
    expect(filterTasksByPriority([], "high")).toEqual([]);
  });
});

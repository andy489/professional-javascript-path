import { describe, it, expect } from "vitest";

import {
  filterTasksByPriority,
  sortTasksByPriority,
  summarizeTasks,
} from "./logic.js";

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

  // Guards against `task.priority = selectedPriority` in the filter
  // condition. That single-character typo assigns instead of comparing, so
  // every task is returned AND every task's priority is rewritten to the
  // selected one. Both halves are asserted here because either alone can
  // pass while the typo is present.
  it("filters by priority without assigning to it (regression: '=' vs '===')", () => {
    // A local copy so the assertions describe this call only, whatever the
    // shared fixture has been through.
    const input = [
      { title: "Ship report", priority: "high" },
      { title: "Water plants", priority: "low" },
    ];

    const results = filterTasksByPriority(input, "high");

    expect(results).toEqual([{ title: "Ship report", priority: "high" }]);

    // The non-matching task keeps its own priority; nothing was overwritten.
    expect(input).toEqual([
      { title: "Ship report", priority: "high" },
      { title: "Water plants", priority: "low" },
    ]);
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

describe("sortTasksByPriority", () => {
  it("puts the highest priority first", () => {
    const input = [
      { title: "Water plants", priority: "low" },
      { title: "Ship report", priority: "high" },
      { title: "Book flights", priority: "medium" },
    ];

    expect(sortTasksByPriority(input).map((task) => task.title)).toEqual([
      "Ship report",
      "Book flights",
      "Water plants",
    ]);
  });

  it("keeps tasks of equal priority in the order they came in", () => {
    const input = [
      { title: "First high", priority: "high" },
      { title: "Water plants", priority: "low" },
      { title: "Second high", priority: "high" },
    ];

    expect(sortTasksByPriority(input).map((task) => task.title)).toEqual([
      "First high",
      "Second high",
      "Water plants",
    ]);
  });

  it("sorts an unrecognized priority last", () => {
    const input = [
      { title: "Mystery", priority: "urgent" },
      { title: "Water plants", priority: "low" },
    ];

    expect(sortTasksByPriority(input).map((task) => task.title)).toEqual([
      "Water plants",
      "Mystery",
    ]);
  });

  it("does not modify the tasks array passed in", () => {
    const input = [
      { title: "Water plants", priority: "low" },
      { title: "Ship report", priority: "high" },
    ];

    sortTasksByPriority(input);

    // Contents and order both, not just length — a sort that mutated in
    // place would keep the length identical.
    expect(input).toEqual([
      { title: "Water plants", priority: "low" },
      { title: "Ship report", priority: "high" },
    ]);
  });

  it("returns a new array rather than the one passed in", () => {
    const input = [{ title: "Ship report", priority: "high" }];

    expect(sortTasksByPriority(input)).not.toBe(input);
  });

  it("returns an empty array when there are no tasks", () => {
    expect(sortTasksByPriority([])).toEqual([]);
  });

  it("returns an empty array for bad input", () => {
    expect(sortTasksByPriority(null)).toEqual([]);
  });
});

describe("summarizeTasks", () => {
  it("counts remaining tasks and the high-priority ones among them", () => {
    const input = [
      { title: "Ship report", priority: "high", completed: false },
      { title: "Water plants", priority: "low", completed: true },
      { title: "Call the bank", priority: "high", completed: false },
      { title: "Book flights", priority: "medium", completed: true },
      { title: "Renew passport", priority: "medium", completed: false },
    ];

    expect(summarizeTasks(input)).toEqual({ total: 5, remaining: 3, high: 2 });
  });

  it("counts a completed high-priority task as neither remaining nor high", () => {
    const input = [
      { title: "Ship report", priority: "high", completed: true },
      { title: "Water plants", priority: "low", completed: false },
    ];

    expect(summarizeTasks(input)).toEqual({ total: 2, remaining: 1, high: 0 });
  });

  it("reports zeroes for an empty list", () => {
    expect(summarizeTasks([])).toEqual({ total: 0, remaining: 0, high: 0 });
  });

  it("reports no tasks remaining when everything is complete", () => {
    const input = [
      { title: "Ship report", priority: "high", completed: true },
      { title: "Water plants", priority: "low", completed: true },
    ];

    expect(summarizeTasks(input)).toEqual({ total: 2, remaining: 0, high: 0 });
  });

  it("reports no high-priority tasks when none of them are high", () => {
    const input = [
      { title: "Water plants", priority: "low", completed: false },
      { title: "Book flights", priority: "medium", completed: false },
    ];

    expect(summarizeTasks(input)).toEqual({ total: 2, remaining: 2, high: 0 });
  });

  it("treats a task with no completed flag as still remaining", () => {
    // What a task saved before completion existed looks like.
    const input = [{ title: "Ship report", priority: "high" }];

    expect(summarizeTasks(input)).toEqual({ total: 1, remaining: 1, high: 1 });
  });

  it("reports zeroes for bad input", () => {
    expect(summarizeTasks(null)).toEqual({ total: 0, remaining: 0, high: 0 });
  });
});

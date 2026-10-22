// First Jest test — describe one expected behavior with test() and expect()
const { getBadgeColor } = require("./badge");

test("returns blue for employees with fewer than 5 years", () => {
  const result = getBadgeColor(2);

  expect(result).toBe("blue");
});

// Additional test cases — one expect() per scenario keeps failures specific
test("returns yellow for employees with at least 5 but fewer than 10 years", () => {
  expect(getBadgeColor(7)).toBe("yellow");
});

test("returns red for employees with at least 10 but fewer than 15 years", () => {
  expect(getBadgeColor(12)).toBe("red");
});

test("returns silver for employees with 15 or more years", () => {
  expect(getBadgeColor(20)).toBe("silver");
});

// Boundary case test — covers exactly 10 years to catch off-by-one bugs
test("returns red for exactly 10 years", () => {
  expect(getBadgeColor(10)).toBe("red");
});
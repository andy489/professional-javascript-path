// Read top to bottom — predict count, then run to verify
let count = 0;

count += 1;
count += 2;

console.log(count);

// Trace variables — badgeColor changes as each condition is checked
const employee = {
  firstName: "Andrey",
  years: 7,
  isActive: true
};

let badgeColor = "blue";

if (employee.years >= 5) {
  badgeColor = "yellow";
}

if (employee.years >= 10) {
  badgeColor = "red";
}

console.log(badgeColor);

// Trace function calls — argument flows into parameter, return value flows back
function getBadgeColor(years) {
  if (years < 5) {
    return "blue";
  }

  if (years < 10) {
    return "yellow";
  }

  return "red";
}

const color = getBadgeColor(7);

console.log(color);

// Trace a loop — predict the count after each iteration
const employees = [
  { firstName: "Andrey", isActive: true },
  { firstName: "Sarah", isActive: false },
  { firstName: "Mina", isActive: true }
];

let activeCount = 0;

for (const employee of employees) {
  if (employee.isActive) {
    activeCount++;
  }
}

console.log(activeCount);

// Trace a conditional — easy to mix up `>` and `>=` at the boundary
const years = 10;

if (years > 10) {
  console.log("More than ten years.");
} else {
  console.log("Ten years or fewer.");
}
const employee = {
  firstName: "Andrey",
  numberOfYearsEmployed: 7,
  isActive: true
};

// Bonus amount with if/else (long form)
let bonusAmountIfElse;

if (employee.numberOfYearsEmployed > 10) {
  bonusAmountIfElse = 1000;
} else {
  bonusAmountIfElse = 500;
}

console.log(bonusAmountIfElse);

// Ternary syntax: condition ? valueIfTrue : valueIfFalse

// Bonus amount with a ternary
const bonusAmount = employee.numberOfYearsEmployed > 10 ? 1000 : 500;

console.log(bonusAmount);

// Ternary expressions return a value
const statusMessage = employee.isActive ? "Active employee" : "Inactive employee";

console.log(statusMessage);

// Ternary inside a template literal
const message = `${employee.firstName} is ${employee.isActive ? "active" : "inactive"}.`;

console.log(message);

// Nested ternary — valid but hard to read
const badgeColor = employee.numberOfYearsEmployed < 5
  ? "blue"
  : employee.numberOfYearsEmployed < 10
    ? "yellow"
    : employee.numberOfYearsEmployed < 15
      ? "red"
      : "silver";

console.log(badgeColor);

// Same logic as an if/else chain — easier to read
let readableBadgeColor;

if (employee.numberOfYearsEmployed < 5) {
  readableBadgeColor = "blue";
} else if (employee.numberOfYearsEmployed < 10) {
  readableBadgeColor = "yellow";
} else if (employee.numberOfYearsEmployed < 15) {
  readableBadgeColor = "red";
} else {
  readableBadgeColor = "silver";
}

console.log(readableBadgeColor);
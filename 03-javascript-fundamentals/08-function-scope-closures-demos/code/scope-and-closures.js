// Global / outer scope — function reaches outward to find the variable
const applicationName = "Employee Directory";

function printApplicationName() {
  console.log(applicationName);
}

printApplicationName();

// Module scope — top-level variable belongs to this file only
const moduleMessage = "This belongs to this module.";

// Function scope — `firstName` exists only inside printEmployeeName
function printEmployeeName() {
  const firstName = "Andrey";

  console.log(firstName);
}

printEmployeeName();

// Outside the function — `firstName` is not in scope, would throw ReferenceError:
// console.log(firstName);

// Block scope — let/const declared inside `{}` live only inside that block
if (true) {
  const department = "Engineering";
  console.log(department);
}

// Outside the block — `department` is not in scope:
// console.log(department);

// Nested scope — inner scopes can read outer scopes, not the other way around
const company = "Example Corp";

function printEmployee() {
  const firstName = "Andrey";

  if (true) {
    const department = "Engineering";

    console.log(company);
    console.log(firstName);
    console.log(department);
  }
}

printEmployee();

// Closure — inner function remembers `prefix` after the outer function returns
function createEmployeeFormatter(prefix) {
  return function (employee) {
    return `${prefix}: ${employee.firstName} ${employee.lastName}`;
  };
}

const formatActiveEmployee = createEmployeeFormatter("Active employee");

const closureEmployee = {
  firstName: "Andrey",
  lastName: "Stoev"
};

console.log(formatActiveEmployee(closureEmployee));

// Closure for reusable configuration — each returned function captures its own minimumYears
function createMinimumYearsValidator(minimumYears) {
  return function (employee) {
    return employee.numberOfYearsEmployed >= minimumYears;
  };
}

const isFiveYearEmployee = createMinimumYearsValidator(5);
const isTenYearEmployee = createMinimumYearsValidator(10);

const employeeWithYears = {
  firstName: "Mina",
  numberOfYearsEmployed: 11
};

console.log(isFiveYearEmployee(employeeWithYears));
console.log(isTenYearEmployee(employeeWithYears));
// Sample employee data used by every debugging example below
const employees = [
  { firstName: "Andrey", department: "Engineering", isActive: true },
  { firstName: "Sarah", department: "Product", isActive: false },
  { firstName: "Mina", department: "Engineering", isActive: true }
];

// Intentional console.log() — temporary, focused logging inside the filter
const activeEmployees = employees.filter((employee) => {
  console.log("Checking employee:", employee.firstName, employee.isActive);

  return employee.isActive;
});

console.log(activeEmployees);

// console.table() — tabular view of an array of objects
console.table(employees);

// console.error() — write to stderr, marks the line as an error in tools
function validateEmployee(employee) {
  if (!employee.firstName) {
    console.error("Employee is missing a first name.");
    return false;
  }

  return true;
}

console.log(validateEmployee({ lastName: "Stoev" }));

// console.assert() — silent when the condition is true
const passingEmployee = {
  firstName: "Andrey",
  years: 7
};

console.assert(passingEmployee.years >= 0, "Years should not be negative.");

// console.assert() — prints the message when the condition is false
const invalidEmployee = {
  firstName: "Broken",
  years: -1
};

console.assert(invalidEmployee.years >= 0, "Years should not be negative.");
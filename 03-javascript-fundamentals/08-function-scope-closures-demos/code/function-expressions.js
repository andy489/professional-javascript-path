// Function expression — assign an anonymous function to a variable
const formatEmployeeName = function (firstName, lastName) {
  return `${firstName} ${lastName}`;
};

console.log(formatEmployeeName("Andrey", "Stoev"));

// Functions are values — assign one variable's function to another variable
const formatter = formatEmployeeName;

console.log(formatter("Sarah", "Smith"));

// Function as argument — the receiving function calls it with its own values
function printEmployee(firstName, lastName, formatName) {
  const displayName = formatName(firstName, lastName);

  console.log(displayName);
}

printEmployee("Andrey", "Stoev", formatEmployeeName);

// Callback — function passed to filter() and called for each item
const employees = [
  { firstName: "Andrey", department: "Engineering" },
  { firstName: "Sarah", department: "Product" }
];

const engineeringEmployees = employees.filter(function (employee) {
  return employee.department === "Engineering";
});

console.log(engineeringEmployees);

// Function declaration form
function getFullName(firstName, lastName) {
  return `${firstName} ${lastName}`;
}

// Function expressions are NOT hoisted — this would throw if placed before the expression:
// console.log(getFullNameExpression("Andrey", "Stoev"));

// Function expression form — same behavior, assigned to a variable
const getFullNameExpression = function (firstName, lastName) {
  return `${firstName} ${lastName}`;
};
// Function expression — the form we're about to convert to an arrow function
const formatEmployeeName = function (firstName, lastName) {
  return `${firstName} ${lastName}`;
};

// Arrow function — `=>` syntax with curly-brace body and explicit return
const formatEmployeeNameArrow = (firstName, lastName) => {
  return `${firstName} ${lastName}`;
};

console.log(formatEmployeeNameArrow("Andrey", "Stoev"));

// Explicit return with a multi-line arrow function body
const getBadgeColor = (yearsOfService) => {
  if (yearsOfService < 5) {
    return "blue";
  }

  if (yearsOfService < 10) {
    return "yellow";
  }

  return "silver";
};

console.log(getBadgeColor(7));

// Implicit return — expression after `=>` is returned automatically
const formatEmployeeNameShort = (firstName, lastName) => `${firstName} ${lastName}`;

console.log(formatEmployeeNameShort("Sarah", "Smith"));

// Multiple parameters — parentheses required
const add = (a, b) => a + b;

// No parameters — empty parentheses required
const getDefaultDepartment = () => "Engineering";

// Single parameter — parentheses optional
const isActive = employee => employee.isActive;

// Single parameter with parentheses — preferred for consistency
const isActiveEmployee = (employee) => employee.isActive;

// Arrow function as filter() callback — concise inline form
const employees = [
  { firstName: "Andrey", department: "Engineering", isActive: true },
  { firstName: "Sarah", department: "Product", isActive: false },
  { firstName: "Mina", department: "Engineering", isActive: true }
];

const activeEmployees = employees.filter((employee) => employee.isActive);

console.log(activeEmployees);

// Arrow function as map() callback — transform each item
const names = employees.map((employee) => employee.firstName);

console.log(names);

// Implicit return of an object literal — wrap the body in parentheses
const createEmployee = (firstName, department) => ({
  firstName,
  department,
  isActive: true
});

console.log(createEmployee("Andre", "Marketing"));
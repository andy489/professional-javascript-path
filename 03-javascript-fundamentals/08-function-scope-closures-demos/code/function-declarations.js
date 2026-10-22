// Basic function declaration — no parameters, no return value
function sayHello() {
  console.log("Hello, JavaScript.");
}

sayHello();

// Single parameter — same function reused with different arguments
function greetEmployee(firstName) {
  console.log(`Hello, ${firstName}.`);
}

greetEmployee("Andrey");
greetEmployee("Sarah");

// Multiple parameters with a return value
function formatEmployeeName(firstName, lastName) {
  return `${firstName} ${lastName}`;
}

const displayName = formatEmployeeName("Andrey", "Stoev");

console.log(displayName);

// Default parameter value — used when the argument is undefined
function greetEmployeeWithDefault(firstName = "there") {
  console.log(`Hello, ${firstName}.`);
}

greetEmployeeWithDefault("Andrey");
greetEmployeeWithDefault();

// Rest parameter — gathers remaining arguments into an array
function listSkills(employeeName, ...skills) {
  console.log(`${employeeName} has these skills:`);

  for (const skill of skills) {
    console.log(`- ${skill}`);
  }
}

listSkills("Andrey", "JavaScript", "Node.js", "Testing");

// Return value — caller decides what to do with it
function calculateMonthlySalary(annualSalary) {
  return annualSalary / 12;
}

const monthlySalary = calculateMonthlySalary(120000);

console.log(monthlySalary);

// Guard-style returns — first matching condition returns and exits
function getBadgeColor(yearsOfService) {
  if (yearsOfService < 5) {
    return "blue";
  }

  if (yearsOfService < 10) {
    return "yellow";
  }

  return "silver";
}

console.log(getBadgeColor(7));

// Hoisting — function declarations can be called before they appear in the file
console.log(getDepartmentLabel("Engineering"));

function getDepartmentLabel(department) {
  return `Department: ${department}`;
}
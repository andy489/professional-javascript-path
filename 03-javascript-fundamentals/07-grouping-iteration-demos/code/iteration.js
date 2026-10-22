// Traditional for loop — useful when you need the index
const departments = ["Engineering", "Product", "Marketing"];

for (let index = 0; index < departments.length; index++) {
  console.log(index, departments[index]);
}

// for...of with arrays — iterates values without managing an index
for (const department of departments) {
  console.log(department);
}

// for...of with strings — strings are iterable, character by character
const course = "JS";

for (const character of course) {
  console.log(character);
}

// for...of with Map — destructure each [key, value] pair
const employeesById = new Map([
  ["E-1001", { firstName: "Andrey" }],
  ["E-1002", { firstName: "Sarah" }]
]);

for (const [id, employeeRecord] of employeesById) {
  console.log(`${id}: ${employeeRecord.firstName}`);
}

// for...of with Set — iterates unique values
const uniqueDepartments = new Set(["Engineering", "Product", "Engineering"]);

for (const department of uniqueDepartments) {
  console.log(department);
}

// for...in — iterates object property keys, not iterable values
const employee = {
  firstName: "Andrey",
  lastName: "Stoev",
  department: "Engineering"
};

for (const key in employee) {
  console.log(key, employee[key]);
}

// while loop — runs as long as the condition is true
let attempts = 0;

while (attempts < 3) {
  console.log(`Attempt ${attempts + 1}`);
  attempts++;
}

// do...while — body runs once before the condition is checked
let response;
let count = 0;

do {
  response = `Generated response ${count + 1}`;
  console.log(response);
  count++;
} while (count < 1);

// Practical example — iterate, skip inactive, log active employees
const employeesForReport = [
  { firstName: "Andrey", department: "Engineering", isActive: true },
  { firstName: "Sarah", department: "Product", isActive: false },
  { firstName: "Mina", department: "Engineering", isActive: true }
];

for (const employeeForReport of employeesForReport) {
  if (!employeeForReport.isActive) {
    continue;
  }

  console.log(`${employeeForReport.firstName} is active in ${employeeForReport.department}.`);
}
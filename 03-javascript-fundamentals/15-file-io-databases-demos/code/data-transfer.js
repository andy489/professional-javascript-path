// In-memory JavaScript object — the starting point for all data-transfer examples
const employee = {
  id: "E-1001",
  firstName: "Andrey",
  lastName: "Stoev",
  department: "Engineering",
  isActive: true
};

// JSON.stringify() — turn the object into a compact JSON string
const json = JSON.stringify(employee);

console.log(json);
console.log(typeof json);

// JSON.stringify() with indentation — readable output for files and logs
const formattedJson = JSON.stringify(employee, null, 2);

console.log(formattedJson);

// JSON.parse() — turn the JSON string back into a JavaScript object
const parsedEmployee = JSON.parse(json);

console.log(parsedEmployee.firstName);

// fetchEmployees() — request, status check, JSON parse in one helper
async function fetchEmployees() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");

  if (!response.ok) {
    throw new Error(`Request failed with status ${response.status}`);
  }

  return response.json();
}

const users = await fetchEmployees();

console.log(users[0]);

// Validate before using — external data can't be trusted to match what we expect
function isValidUser(user) {
  return Boolean(user.id && user.name && user.email);
}

const validUsers = users.filter(isValidUser);

console.log(validUsers.length);

// Reusable parse + validate — fails fast on missing required fields
function parseEmployeeJson(jsonText) {
  const parsedValue = JSON.parse(jsonText);

  if (!parsedValue.id || !parsedValue.firstName) {
    throw new Error("Invalid employee data.");
  }

  return parsedValue;
}

try {
  const result = parseEmployeeJson(formattedJson);
  console.log(result);
} catch (error) {
  console.error(error.message);
}
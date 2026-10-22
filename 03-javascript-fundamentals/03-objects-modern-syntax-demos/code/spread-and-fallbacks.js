const employee = {
  firstName: "Andrey",
  lastName: "Stoev",
  department: "Engineering",
  title: "Principal Engineer"
};

const departments = ["Engineering", "Marketing"];

// Spread syntax with objects
const updatedEmployee = {
  ...employee,
  title: "Senior Principal Engineer"
};

console.log(updatedEmployee);
console.log(employee);

// Spread syntax with arrays
const allDepartments = [...departments, "HR", "Finance"];

console.log(allDepartments);
console.log(departments);

// Optional chaining
const employeeWithoutContact = {
  firstName: "Andrey"
};

console.log(employeeWithoutContact.contact?.email);

// Nullish coalescing
const displayDepartment = employee.department ?? "Unknown department";

console.log(displayDepartment);

// Comparing || and ?? for zero
const vacationDays = 0;

console.log(vacationDays || 10);
console.log(vacationDays ?? 10);

// Logical nullish assignment
const settings = {};

settings.theme ??= "light";

console.log(settings.theme);

// Logical OR assignment
let displayName = "";

displayName ||= "Anonymous";

console.log(displayName);
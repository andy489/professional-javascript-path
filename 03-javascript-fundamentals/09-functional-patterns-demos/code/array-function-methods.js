// Sample employee data used by every array method example below
const employees = [
  { id: "E-1001", firstName: "Andrey", department: "Engineering", isActive: true, years: 7 },
  { id: "E-1002", firstName: "Sarah", department: "Product", isActive: false, years: 3 },
  { id: "E-1003", firstName: "Mina", department: "Engineering", isActive: true, years: 11 },
  { id: "E-1004", firstName: "Andre", department: "Marketing", isActive: true, years: 2 }
];

// forEach() — run a callback for each item, no return value
employees.forEach((employee) => {
  console.log(`${employee.firstName} works in ${employee.department}.`);
});

// map() — transform each item, return a new array of the same length
const employeeNames = employees.map((employee) => {
  return employee.firstName;
});

console.log(employeeNames);

// map() with an implicit-return arrow function
const employeeLabels = employees.map((employee) => `${employee.id}: ${employee.firstName}`);

console.log(employeeLabels);

// filter() — keep only items where the callback returns true
const activeEmployees = employees.filter((employee) => {
  return employee.isActive;
});

console.log(activeEmployees);

// filter() by a different condition
const engineeringEmployees = employees.filter((employee) => {
  return employee.department === "Engineering";
});

console.log(engineeringEmployees);

// find() — return the first matching item, or undefined
const productEmployee = employees.find((employee) => {
  return employee.department === "Product";
});

console.log(productEmployee);

// some() — true when at least one item matches
const hasInactiveEmployees = employees.some((employee) => {
  return !employee.isActive;
});

console.log(hasInactiveEmployees);

// every() — true only when every item matches
const allEmployeesHaveDepartments = employees.every((employee) => {
  return Boolean(employee.department);
});

console.log(allEmployeesHaveDepartments);

// reduce() — combine all items into a single value (starting from 0)
const totalYears = employees.reduce((total, employee) => {
  return total + employee.years;
}, 0);

console.log(totalYears);
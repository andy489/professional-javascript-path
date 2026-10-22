const employees = [
  { id: "E-1001", firstName: "Andrey", department: "Engineering", years: 7 },
  { id: "E-1002", firstName: "Sarah", department: "Product", years: 3 },
  { id: "E-1003", firstName: "Mina", department: "Engineering", years: 11 },
  { id: "E-1004", firstName: "Andre", department: "Marketing", years: 2 }
];

// find() — return the first item matching a condition
const engineeringEmployee = employees.find((employee) => {
  return employee.department === "Engineering";
});

console.log(engineeringEmployee);

// findIndex() — return the index of the first matching item, or -1 if none
const productIndex = employees.findIndex((employee) => {
  return employee.department === "Product";
});

console.log(productIndex);

// findLast() — search from the end of the array
const lastEngineeringEmployee = employees.findLast((employee) => {
  return employee.department === "Engineering";
});

console.log(lastEngineeringEmployee);

// findLastIndex() — index of the last matching item
const lastEngineeringIndex = employees.findLastIndex((employee) => {
  return employee.department === "Engineering";
});

console.log(lastEngineeringIndex);

// toSorted() — non-mutating sort; the original array stays unchanged
const sortedByYears = employees.toSorted((a, b) => {
  return a.years - b.years;
});

console.log(sortedByYears);
console.log(employees);

// toReversed() — non-mutating reverse
const reversedEmployees = employees.toReversed();

console.log(reversedEmployees);
console.log(employees);

// toSpliced(start, deleteCount) — non-mutating splice
const withoutSecondEmployee = employees.toSpliced(1, 1);

console.log(withoutSecondEmployee);
console.log(employees);

// with(index, value) — non-mutating replacement at one index
const updatedEmployees = employees.with(0, {
  ...employees[0],
  department: "Platform Engineering"
});

console.log(updatedEmployees);
console.log(employees);
// Create a Map and add key/value entries with set()
const employeesById = new Map();

employeesById.set("E-1001", {
  firstName: "Andrey",
  department: "Engineering"
});

employeesById.set("E-1002", {
  firstName: "Sarah",
  department: "Product"
});

console.log(employeesById);

// Read with get(), check with has(), count with size
const employee = employeesById.get("E-1001");
console.log(employee);

console.log(employeesById.has("E-1002"));
console.log(employeesById.has("E-9999"));

console.log(employeesById.size);

// Update by calling set() with an existing key
employeesById.set("E-1001", {
  firstName: "Andrey",
  department: "Platform Engineering"
});

console.log(employeesById.get("E-1001"));

// Delete an entry by key
employeesById.delete("E-1002");

console.log(employeesById.has("E-1002"));

// Iterate a Map — each item is a [key, value] pair
for (const [employeeId, employeeRecord] of employeesById) {
  console.log(`${employeeId}: ${employeeRecord.firstName}`);
}

// Create a Set — stores unique values, duplicates are ignored
const departments = new Set();

departments.add("Engineering");
departments.add("Marketing");
departments.add("Engineering");

console.log(departments);
console.log(departments.size);

// has() checks for a value; delete() removes it
console.log(departments.has("Engineering"));
console.log(departments.has("Finance"));

departments.delete("Marketing");

console.log(departments);

// Sets are iterable with for...of
for (const department of departments) {
  console.log(department);
}

// Build a Set of unique departments from a list
const employees = [
  { firstName: "Andrey", department: "Engineering" },
  { firstName: "Sarah", department: "Product" },
  { firstName: "Mina", department: "Engineering" }
];

const uniqueDepartments = new Set();

for (const employee of employees) {
  uniqueDepartments.add(employee.department);
}

console.log(uniqueDepartments);
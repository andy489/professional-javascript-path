// Sample employee data used by every grouping example below
const employees = [
  { id: "E-1001", firstName: "Andrey", department: "Engineering" },
  { id: "E-1002", firstName: "Sarah", department: "Product" },
  { id: "E-1003", firstName: "Mina", department: "Engineering" },
  { id: "E-1004", firstName: "Andre", department: "Marketing" },
  { id: "E-1005", firstName: "Priya", department: "Product" }
];

// Object.groupBy() — group an array by a key function; result is a plain object
const employeesByDepartment = Object.groupBy(employees, (employee) => {
  return employee.department;
});

console.log(employeesByDepartment);

// Access groups by property name
console.log(employeesByDepartment.Engineering);
console.log(employeesByDepartment.Product);

// Map.groupBy() — same grouping idea, but the result is a Map
const employeesByDepartmentMap = Map.groupBy(employees, (employee) => {
  return employee.department;
});

console.log(employeesByDepartmentMap);

// Read a group from a Map result with get()
console.log(employeesByDepartmentMap.get("Engineering"));

// Group by a derived value — the key function can return any logic-based string
const employeesWithStatus = [
  { id: "E-1001", firstName: "Andrey", isActive: true },
  { id: "E-1002", firstName: "Sarah", isActive: true },
  { id: "E-1003", firstName: "Mina", isActive: false }
];

const employeesByStatus = Object.groupBy(employeesWithStatus, (employee) => {
  return employee.isActive ? "active" : "inactive";
});

console.log(employeesByStatus);

// Pre-groupBy() pattern — manual grouping with reduce(), still common in older code
const groupedWithReduce = employees.reduce((groups, employee) => {
  const department = employee.department;

  if (!groups[department]) {
    groups[department] = [];
  }

  groups[department].push(employee);

  return groups;
}, {});

console.log(groupedWithReduce);
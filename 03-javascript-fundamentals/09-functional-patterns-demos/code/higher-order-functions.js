// Higher-order function — accepts a formatter function as a parameter
function printEmployeeReport(employees, formatter) {
  for (const employee of employees) {
    console.log(formatter(employee));
  }
}

const employees = [
  { firstName: "Andrey", lastName: "Stoev", department: "Engineering" },
  { firstName: "Sarah", lastName: "Smith", department: "Product" }
];

function formatBasicEmployee(employee) {
  return `${employee.firstName} ${employee.lastName}`;
}

printEmployeeReport(employees, formatBasicEmployee);

// Swap the callback — same higher-order function, different formatting behavior
function formatDetailedEmployee(employee) {
  return `${employee.firstName} ${employee.lastName} - ${employee.department}`;
}

printEmployeeReport(employees, formatDetailedEmployee);

// Reusable validators — small named predicates make pipelines easier to read
function isActiveEmployee(employee) {
  return employee.isActive;
}

function isEngineeringEmployee(employee) {
  return employee.department === "Engineering";
}

// Search by validator — pass in different predicates to change the search
function findMatchingEmployees(employees, validator) {
  return employees.filter((employee) => validator(employee));
}

const employeeRecords = [
  { firstName: "Andrey", department: "Engineering", isActive: true },
  { firstName: "Sarah", department: "Product", isActive: false },
  { firstName: "Mina", department: "Engineering", isActive: true }
];

console.log(findMatchingEmployees(employeeRecords, isActiveEmployee));
console.log(findMatchingEmployees(employeeRecords, isEngineeringEmployee));

// Function that returns a function — captures `department` in a closure
function createDepartmentValidator(department) {
  return function (employee) {
    return employee.department === department;
  };
}

const isProductEmployee = createDepartmentValidator("Product");

console.log(employeeRecords.filter(isProductEmployee));

// Returned function builds a custom formatter — flag captured in the closure
function createEmployeeFormatter(includeDepartment) {
  return function (employee) {
    const name = `${employee.firstName} ${employee.lastName ?? ""}`.trim();

    if (includeDepartment) {
      return `${name} - ${employee.department}`;
    }

    return name;
  };
}

const simpleFormatter = createEmployeeFormatter(false);
const detailedFormatter = createEmployeeFormatter(true);

console.log(simpleFormatter({ firstName: "Andrey", lastName: "Stoev", department: "Engineering" }));
console.log(detailedFormatter({ firstName: "Andrey", lastName: "Stoev", department: "Engineering" }));
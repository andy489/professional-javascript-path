// Failing example — `=` instead of `===` inside the `if` (parses, runs, but wrong)
const employees = [
  { firstName: "Andrey", department: "Engineering", isActive: true, years: 7 },
  { firstName: "Sarah", department: "Product", isActive: false, years: 3 },
  { firstName: "Mina", department: "Engineering", isActive: true, years: 11 }
];

function getActiveEngineeringEmployees(employees) {
  return employees.filter((employee) => {
    if (employee.department === "Engineering") {
      return employee.isActive;
    }
    return false;
  });
}

const results = getActiveEngineeringEmployees(employees);

console.log(results);

// Extracted helpers — Step Into lets you walk into a function call
function isEngineering(employee) {
  return employee.department === "Engineering";
}

function isActive(employee) {
  return employee.isActive;
}

function getActiveEngineeringEmployeesWithHelpers(employees) {
  return employees.filter((employee) => {
    return isActive(employee) && isEngineering(employee);
  });
}

console.log(getActiveEngineeringEmployeesWithHelpers(employees));
// Sample employee data used for the algorithm below
const employees = [
  { id: "E-1001", firstName: "Andrey", department: "Engineering", isActive: true, years: 7 },
  { id: "E-1002", firstName: "Sarah", department: "Product", isActive: true, years: 3 },
  { id: "E-1003", firstName: "Mina", department: "Engineering", isActive: true, years: 11 },
  { id: "E-1004", firstName: "Andre", department: "Engineering", isActive: false, years: 9 },
  { id: "E-1005", firstName: "Priya", department: "Engineering", isActive: true, years: 4 }
];

// First implementation — inline arrow callbacks closely follow the pseudocode
function getExperiencedEngineeringEmployees(employees) {
  return employees
    .filter((employee) => employee.isActive)
    .filter((employee) => employee.department === "Engineering")
    .filter((employee) => employee.years >= 5)
    .toSorted((a, b) => b.years - a.years);
}

const results = getExperiencedEngineeringEmployees(employees);

console.log(results);

// Alternative — small named helpers, pipeline reads like the problem statement
const isActive = (employee) => employee.isActive;
const isEngineering = (employee) => employee.department === "Engineering";
const hasAtLeastFiveYears = (employee) => employee.years >= 5;
const sortByYearsDescending = (a, b) => b.years - a.years;

function getExperiencedEngineeringEmployeesV2(employees) {
  return employees
    .filter(isActive)
    .filter(isEngineering)
    .filter(hasAtLeastFiveYears)
    .toSorted(sortByYearsDescending);
}

console.log(getExperiencedEngineeringEmployeesV2(employees));

// Formatting — a separate function so it can be reused or swapped out
function formatEmployeeSummary(employee) {
  return `${employee.firstName} (${employee.years} years)`;
}

const summaries = getExperiencedEngineeringEmployeesV2(employees).map(formatEmployeeSummary);

console.log(summaries);

// Edge case — empty input array
const noMatches = getExperiencedEngineeringEmployeesV2([]);

console.log(noMatches); 

// Edge case — missing `years` field, undefined >= 5 is false so the record is excluded
const incompleteEmployees = [
  { firstName: "No Years", department: "Engineering", isActive: true }
];

console.log(getExperiencedEngineeringEmployeesV2(incompleteEmployees));
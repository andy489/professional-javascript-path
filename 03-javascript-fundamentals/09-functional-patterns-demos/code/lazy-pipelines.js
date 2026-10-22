// Sample employee data used by every pipeline below
const employees = [
  { firstName: "Andrey", department: "Engineering", isActive: true, years: 7 },
  { firstName: "Sarah", department: "Product", isActive: false, years: 3 },
  { firstName: "Mina", department: "Engineering", isActive: true, years: 11 },
  { firstName: "Andre", department: "Marketing", isActive: true, years: 2 },
  { firstName: "Priya", department: "Engineering", isActive: true, years: 5 }
];

// Reusable predicates and transforms — small named functions clarify intent
const isActive = (employee) => employee.isActive;
const isEngineering = (employee) => employee.department === "Engineering";
const getFirstName = (employee) => employee.firstName;

// Array method chain — eager processing, each step builds an intermediate array
const engineeringNames = employees
  .filter(isActive)
  .filter(isEngineering)
  .map(getFirstName);

console.log(engineeringNames);

// Iterator helper chain — lazy processing, take(2) stops once two values are produced
const firstTwoEngineeringNames = Iterator.from(employees)
  .filter(isActive)
  .filter(isEngineering)
  .map(getFirstName)
  .take(2)
  .toArray();

console.log(firstTwoEngineeringNames);

// reduce() inside an iterator pipeline — combine values into one total
const totalEngineeringYears = Iterator.from(employees)
  .filter(isEngineering)
  .map((employee) => employee.years)
  .reduce((total, years) => total + years, 0);

console.log(totalEngineeringYears);
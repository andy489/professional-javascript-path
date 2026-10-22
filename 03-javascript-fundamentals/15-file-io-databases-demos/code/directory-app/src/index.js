// Entry point — read, validate, filter, group, format
import { readJsonFile } from "./files.js";
import { formatEmployeeSummary } from "./formatting.js";
import { getActiveEmployees, groupEmployeesByDepartment } from "./employees.js";
import { validateEmployee } from "./validation.js";

const employees = await readJsonFile("./data/employees.json");

for (const employee of employees) {
  const errors = validateEmployee(employee);

  if (errors.length > 0) {
    console.error(`Invalid employee ${employee.id ?? "unknown"}:`);
    console.error(errors);
  }
}

const activeEmployees = getActiveEmployees(employees);
const groupedEmployees = groupEmployeesByDepartment(activeEmployees);

for (const [department, departmentEmployees] of Object.entries(groupedEmployees)) {
  console.log(`\n${department}`);

  for (const employee of departmentEmployees) {
    console.log(`- ${formatEmployeeSummary(employee)}`);
  }
}
// Entry point — imports from each module and coordinates the flow
import { employees } from "./data/employees.js";
import { formatEmployeeSummary } from "./utilities/formatting.js";
import { isActiveEmployee } from "./utilities/validation.js";
import { getBadgeColor } from "./utilities/badges.js";

const activeEmployees = employees.filter(isActiveEmployee);

for (const employee of activeEmployees) {
  const summary = formatEmployeeSummary(employee);
  const badgeColor = getBadgeColor(employee.years);

  console.log(`${summary} - Badge: ${badgeColor}`);
}
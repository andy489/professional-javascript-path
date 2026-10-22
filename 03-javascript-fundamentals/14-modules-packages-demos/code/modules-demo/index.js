// Multiple named imports — comma-separated inside the curly braces
import { formatEmployeeName, formatDepartmentLabel } from "./formatting.js";

// Default import — pick any name; no curly braces
import getBadgeColor from "./badge.js";

console.log(getBadgeColor(7));

const employee = {
  firstName: "Andrey",
  lastName: "Stoev",
  department: "Engineering"
};

console.log(formatEmployeeName(employee));
console.log(formatDepartmentLabel(employee));
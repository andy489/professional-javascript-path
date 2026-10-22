// Formatting module — display-related helpers, one of which composes the other
export function formatEmployeeName(employee) {
  return `${employee.firstName} ${employee.lastName}`;
}

export function formatEmployeeSummary(employee) {
  return `${formatEmployeeName(employee)} - ${employee.department}`;
}
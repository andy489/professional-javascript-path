// Named export — `export` makes the function importable from other modules
export function formatEmployeeName(employee) {
  return `${employee.firstName} ${employee.lastName}`;
}

// Additional named export — multiple exports per module are normal
export function formatDepartmentLabel(employee) {
  return `Department: ${employee.department}`;
}
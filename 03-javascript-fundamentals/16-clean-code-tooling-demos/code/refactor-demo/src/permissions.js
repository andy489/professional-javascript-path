export function canAccessReports(employee) {
  return employee.isActive && employee.permissions.includes("reports");
}
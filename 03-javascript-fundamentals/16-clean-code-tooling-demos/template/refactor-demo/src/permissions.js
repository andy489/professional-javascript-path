export function canAccessReports(employee) {
  if (employee.isActive) {
    if (employee.permissions.includes("reports")) {
      return true;
    }
  }

  return false;
}

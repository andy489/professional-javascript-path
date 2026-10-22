// Business logic — small, focused functions that compose easily
export function getActiveEmployees(employees) {
  return employees.filter((employee) => employee.isActive);
}

export function groupEmployeesByDepartment(employees) {
  return Object.groupBy(employees, (employee) => employee.department);
}
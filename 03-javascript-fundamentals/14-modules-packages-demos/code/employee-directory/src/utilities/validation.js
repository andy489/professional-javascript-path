// Validation module — small predicates that answer yes/no questions
export function isActiveEmployee(employee) {
  return employee.isActive === true;
}

export function hasRequiredEmployeeFields(employee) {
  return Boolean(employee.id && employee.firstName && employee.lastName && employee.department);
}
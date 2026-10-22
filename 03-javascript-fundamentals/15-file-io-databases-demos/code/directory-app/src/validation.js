// validateEmployee() — returns an array of error messages (empty when valid)
export function validateEmployee(employee) {
  const errors = [];

  if (!employee.id) {
    errors.push("Employee ID is required.");
  }

  if (!employee.firstName) {
    errors.push("First name is required.");
  }

  if (!employee.lastName) {
    errors.push("Last name is required.");
  }

  if (!employee.department) {
    errors.push("Department is required.");
  }

  return errors;
}
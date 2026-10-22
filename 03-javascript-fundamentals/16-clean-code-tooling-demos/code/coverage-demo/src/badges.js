export function getBadgeColor(yearsOfService) {
  if (yearsOfService < 5) {
    return "blue";
  }

  if (yearsOfService < 10) {
    return "yellow";
  }

  if (yearsOfService < 15) {
    return "red";
  }

  return "silver";
}

export function isEligibleForAward(employee) {
  if (!employee.isActive) {
    return false;
  }

  if (employee.years >= 10) {
    return true;
  }

  return false;
}

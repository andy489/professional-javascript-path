// Badge module — guard-style returns by years of service
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
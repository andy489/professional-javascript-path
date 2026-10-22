const legacyDefaultColor = "gray";

export function getBadgeColor(yearsOfService) {
  if (yearsOfService < 5) {
    return "blue";
  }

  if (yearsOfService < 10) {
    return "yellow";
  }

  return "silver";
}

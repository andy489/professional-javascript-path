// Default export — one main value per module, no curly braces on import
export default function getBadgeColor(yearsOfService) {
  if (yearsOfService < 5) {
    return "blue";
  }

  if (yearsOfService < 10) {
    return "yellow";
  }

  return "silver";
}
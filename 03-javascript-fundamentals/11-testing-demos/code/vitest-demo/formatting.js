// Buggy implementation — || treats 0 as falsy and substitutes "Unknown"
export function formatYearsOfService(employee) {
  const years = employee.years ?? "Unknown";

  return `${employee.firstName}: ${years} years`;
}

// Manual reproduction — proves the bug exists before we write a test for it
console.log(formatYearsOfService({ firstName: "New Employee", years: 0 }));
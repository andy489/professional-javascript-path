// Logical AND (&&) — both sides must be true
const employee = {
  department: "Engineering",
  numberOfYearsEmployed: 7,
  isActive: true
};

const shouldInvite = employee.department === "Engineering" && employee.numberOfYearsEmployed >= 5;

console.log(shouldInvite);

// Logical OR (||) — at least one side must be true
const shouldInviteLeadership = employee.department === "Executive" || employee.numberOfYearsEmployed >= 5;

console.log(shouldInviteLeadership);

// Logical NOT (!) — inverts a boolean
const isInactive = !employee.isActive;

console.log(isInactive);

// Common falsy values: false, 0, "", null, undefined, NaN, 0n
// Boolean() of falsy values — every line logs false
console.log(Boolean(false));
console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean(NaN));

// Boolean() of truthy values — note that "false", {}, and [] are truthy
console.log(Boolean(true));
console.log(Boolean(1));
console.log(Boolean(-1));
console.log(Boolean("hello"));
console.log(Boolean("false"));
console.log(Boolean({}));
console.log(Boolean([]));

// Common beginner mistake: the string "false" is truthy
const userInput = "false";

if (userInput) {
  console.log("This value is truthy.");
}

// Falsy default with || — replaces 0 with the fallback
const vacationDays = 0;

const displayValue = vacationDays || "Unknown";

console.log(displayValue);

// Nullish default with ?? — preserves 0, only replaces null/undefined
const betterDisplayValue = vacationDays ?? "Unknown";

console.log(betterDisplayValue);

// Combining boolean logic
const hasRequiredData = employee.department && employee.numberOfYearsEmployed !== undefined;
const isEligible = employee.isActive && employee.numberOfYearsEmployed >= 5;

console.log(hasRequiredData);
console.log(isEligible);
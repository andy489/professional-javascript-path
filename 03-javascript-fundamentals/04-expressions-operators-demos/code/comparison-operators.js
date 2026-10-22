// Greater than and less than
const hasEnoughYears = 7 > 5;
const isNewEmployee = 7 < 1;

console.log(hasEnoughYears);
console.log(isNewEmployee);

// Greater or equal and less or equal
console.log(5 >= 5);
console.log(4 <= 3);

// Loose equality (== and !=) — coerces types before comparing
console.log("42" == 42);
console.log("42" != 42);

// Strict equality (=== and !==) — requires value and type to match
console.log("42" === 42);
console.log("42" !== 42);

// Strict inequality with strings
const department = "Engineering";

console.log(department !== "Marketing");
console.log(department !== "Engineering");

// Primitive equality compares values
const nameOne = "Andrey";
const nameTwo = "Andrey";

console.log(nameOne === nameTwo);

// Object equality compares references, not contents
const employeeOne = {
  firstName: "Andrey"
};

const employeeTwo = {
  firstName: "Andrey"
};

console.log(employeeOne === employeeTwo);

// Same reference is equal
const employeeThree = employeeOne;

console.log(employeeOne === employeeThree);

// Object.is() — behaves like === for most values
console.log(Object.is(42, 42));
console.log(Object.is("Andrey", "Andrey"));

// Object.is() handles NaN differently than ===
console.log(NaN === NaN);
console.log(Object.is(NaN, NaN));

// Booleans for conditional logic
const employee = {
  firstName: "Andrey",
  department: "Engineering",
  numberOfYearsEmployed: 7,
  isActive: true
};

const isEngineering = employee.department === "Engineering";
const isLongTerm = employee.numberOfYearsEmployed >= 5;
const canShowInDirectory = employee.isActive === true;

console.log(isEngineering);
console.log(isLongTerm);
console.log(canShowInDirectory);
// Set up readline and the empty employee object
import { createInterface } from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

const readline = createInterface({ input, output });

const employee = {};

// Validate required first name
const firstName = await readline.question("First name: ");

if (!firstName) {
  console.error("First name is required.");
  readline.close();
  process.exit(1);
}

employee.firstName = firstName;

// Validate required last name (same pattern as first name)
const lastName = await readline.question("Last name: ");

if (!lastName) {
  console.error("Last name is required.");
  readline.close();
  process.exit(1);
}

employee.lastName = lastName;

// Validate numeric value — must be an integer and non-negative
const yearsInput = await readline.question("Years employed: ");
const yearsEmployed = Number(yearsInput);

if (!Number.isInteger(yearsEmployed)) {
  console.error("Years employed must be a whole number.");
  readline.close();
  process.exit(1);
}

if (yearsEmployed < 0) {
  console.error("Years employed cannot be negative.");
  readline.close();
  process.exit(1);
}

employee.numberOfYearsEmployed = yearsEmployed;

// Validate Boolean-like input — accept "yes" or "no", normalize to a boolean
const activeInput = await readline.question("Is the employee active? yes/no: ");
const normalizedActiveInput = activeInput.toLowerCase();

if (normalizedActiveInput !== "yes" && normalizedActiveInput !== "no") {
  console.error("Please enter yes or no.");
  readline.close();
  process.exit(1);
}

employee.isActive = normalizedActiveInput === "yes";

// Close the readline interface and print the validated employee
readline.close();

console.log(JSON.stringify(employee, null, 2));
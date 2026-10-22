// Basic assignment
let department = "Engineering";
let numberOfEmployees = 12;
let isActive = true;

// Addition assignment (equivalent to numberOfEmployees = numberOfEmployees + 3)
numberOfEmployees += 3;

console.log(numberOfEmployees);

// Addition assignment with strings (concatenates)
let message = "Hello";

message += ", JavaScript";

console.log(message);

// Subtraction assignment (equivalent to remainingSeats = remainingSeats - 2)
let remainingSeats = 10;

remainingSeats -= 2;

console.log(remainingSeats);

// Multiplication assignment
let weeklyHours = 40;

weeklyHours *= 4;

console.log(weeklyHours);

// Division assignment
let annualBudget = 120000;

annualBudget /= 12;

console.log(annualBudget);

// Remainder assignment
let value = 21;

value %= 8;

console.log(value);

// Exponentiation assignment (equivalent to power = power ** 3)
let power = 2;

power **= 3;

console.log(power);

// Logical OR assignment (||=) — assigns when current value is falsy
let displayName = "";

displayName ||= "Anonymous";

console.log(displayName);

// Nullish assignment (??=) — keeps 0 because 0 is not nullish
let vacationDays = 0;

vacationDays ??= 10;

console.log(vacationDays);

// Nullish assignment (??=) — undefined gets the fallback
let manager;

manager ??= "No manager assigned";

console.log(manager);

// Logical AND assignment (&&=) — assigns only when current value is truthy
let employee = {
  firstName: "Andrey",
  isActive: true
};

employee.isActive &&= false;

console.log(employee.isActive);

// Sometimes shorthand is clearer
let counter = 0;

counter += 1;

console.log(counter);

// Sometimes the explicit form is clearer than ??=
let supervisor;

if (supervisor === undefined) {
  supervisor = "No supervisor assigned";
}

console.log(supervisor);
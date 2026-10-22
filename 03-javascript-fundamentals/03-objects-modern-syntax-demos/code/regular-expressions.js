const message = "JavaScript Fundamentals 2025";

// Regex literal
const pattern = /JavaScript/;

console.log(pattern.test(message));

// Case-sensitive matching
const lowercasePattern = /javascript/;

console.log(lowercasePattern.test(message));

// Case-insensitive flag
const caseInsensitivePattern = /javascript/i;

console.log(caseInsensitivePattern.test(message));

// RegExp constructor
const searchText = "JavaScript";
const constructorPattern = new RegExp(searchText);

console.log(constructorPattern.test(message));

// Dot is a special character
const fileName = "employee.json";

const dotPattern = /./;

console.log(dotPattern.test(fileName));

// Escape a literal dot
const literalDotPattern = /\./;

console.log(literalDotPattern.test(fileName));

// RegExp.escape() for safety
const userSearch = "employee.json";
const safeSearch = RegExp.escape(userSearch);
const safePattern = new RegExp(safeSearch);

console.log(safePattern.test("Open employee.json"));

// Capture groups
const employeeId = "EMP-1001";

const idPattern = /EMP-(\d+)/;

const match = employeeId.match(idPattern);

console.log(match);

// Named capture groups
const namedIdPattern = /EMP-(?<id>\d+)/;

const namedMatch = employeeId.match(namedIdPattern);

console.log(namedMatch.groups.id);

// Replacing with regex
const phoneNumber = "555-0100";

const digitsOnly = phoneNumber.replace(/\D/g, "");

console.log(digitsOnly);
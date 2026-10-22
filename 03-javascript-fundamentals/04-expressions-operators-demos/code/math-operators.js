// Addition
const value = 3 + 2;

console.log(value);

// String concatenation with +
console.log("Hello, " + "JavaScript");

// Subtraction
const resultOne = 3 - 1;
const resultTwo = 1 - -1;

console.log(resultOne);
console.log(resultTwo);

// Multiplication and division
const multiplication = 3 * 2;
const division = 21 / 9;
const intDivision = Math.floor(division);

console.log(multiplication);
console.log(division);
console.log(intDivision);

// Remainder
const remainder = 9 % 2;

console.log(remainder);

// Even-number check using the remainder
const employeeNumber = 42;
const isEven = employeeNumber % 2 === 0;

console.log(isEven);

// Exponentiation
const squared = 3 ** 2;
const cubed = 2 ** 3;

console.log(squared);
console.log(cubed);

// Increment
let count = 1;

count++;

console.log(count);

// Decrement
let remainingAttempts = 3;

remainingAttempts--;

console.log(remainingAttempts);

// Postfix increment returns the old value, then increments
let valueOne = 10;
let valueTwo = valueOne++;

console.log(valueOne);
console.log(valueTwo);

// Prefix increment increments first, then returns the new value
let valueThree = 10;
let valueFour = ++valueThree;

console.log(valueThree);
console.log(valueFour);

// Operator precedence: multiplication runs before addition
const result = 2 + 3 * 4;

console.log(result);

// Parentheses force the order you intend
const resultWithParentheses = (2 + 3) * 4;

console.log(resultWithParentheses);
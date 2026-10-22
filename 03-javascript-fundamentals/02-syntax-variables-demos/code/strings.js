// Strings are immutable: every method returns a NEW string and leaves the original unchanged.

let greeting = "Hello, World";

console.log(greeting);

// Different ways to quote a string
let single = 'single quotes';
let double = "double quotes";
let backtick = `template literal`;

console.log(single);
console.log(double);
console.log(backtick);

// Template literals: interpolation and multi-line
let name = "Ada";
let age = 36;

console.log(`${name} is ${age} years old`);

console.log(`line one
line two`);

// Length
console.log(greeting.length);

// Accessing characters
console.log(greeting[0]);
console.log(greeting.charAt(0));
console.log(greeting.at(-1));
console.log(greeting.charCodeAt(0));
console.log(greeting.codePointAt(0));
console.log(String.fromCharCode(72, 105));

// Changing case
console.log(greeting.toUpperCase());
console.log(greeting.toLowerCase());
console.log("istanbul".toLocaleUpperCase("tr-TR"));
console.log("İSTANBUL".toLocaleLowerCase("tr-TR"));

// Trimming whitespace
let padded = "   spaced out   ";

console.log(padded.trim());
console.log(padded.trimStart());
console.log(padded.trimEnd());

// Padding
console.log("5".padStart(3, "0"));
console.log("5".padEnd(3, "0"));

// Searching
console.log(greeting.indexOf("o"));
console.log(greeting.lastIndexOf("o"));
console.log(greeting.includes("World"));
console.log(greeting.startsWith("Hello"));
console.log(greeting.endsWith("World"));
console.log(greeting.search(/w/i));

// Extracting substrings
console.log(greeting.slice(0, 5));
console.log(greeting.slice(-5));
console.log(greeting.substring(7, 12));

// Replacing
let departments = "Engineering, Engineering, Engineering";

console.log(departments.replace("Engineering", "Product"));

console.log(departments.replaceAll("Engineering", "Product"));

console.log(departments.replace(/Engineering/g, "Product"));

console.log("abc".replace(/[a-z]/g, (c) => c.toUpperCase()));

// Splitting and joining
let csv = "red,green,blue";
let colors = csv.split(",");

console.log(colors);
console.log("abc".split(""));
console.log(colors.join(" | "));

// Repeating and concatenating
console.log("ab".repeat(3));
console.log("foo".concat("bar", "baz"));
console.log("foo" + "bar");

// Matching with regular expressions
let data = "order 42, item 7, qty 100";

console.log(data.match(/\d+/g));
console.log([...data.matchAll(/(\d+)/g)].map((m) => m[1]));

// Normalization and comparison
console.log("é".normalize() === "é".normalize());
console.log("apple".localeCompare("banana"));

// Converting other values to strings
console.log(String(123));
console.log((255).toString(16));
console.log(JSON.stringify({ a: 1 }));

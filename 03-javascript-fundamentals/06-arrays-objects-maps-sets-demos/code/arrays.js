// Create arrays with square brackets
const departments = ["Engineering", "Marketing", "HR"];
const employees = [];

console.log(departments);
console.log(employees);

// Array.isArray() — the correct way to check for an array
console.log(Array.isArray(departments));
console.log(Array.isArray({ department: "Engineering" }));

// typeof returns "object" — that is why we use Array.isArray() instead
console.log(typeof departments);

// Access values by zero-based index — missing indexes return undefined
console.log(departments[0]);
console.log(departments[1]);
console.log(departments[2]);
console.log(departments[10]);

// length tells us how many items are in the array
console.log(departments.length);

// .at() works like bracket access but also supports negative indexes
console.log(departments.at(0));
console.log(departments.at(1));
console.log(departments.at(-1));

// push() adds to the end; unshift() adds to the beginning (both mutate)
departments.push("Finance");
console.log(departments);

departments.unshift("Executive");
console.log(departments);

// pop() removes from the end; shift() removes from the beginning (both mutate)
const lastDepartment = departments.pop();
console.log(lastDepartment);
console.log(departments);

const firstDepartment = departments.shift();
console.log(firstDepartment);
console.log(departments);

// Mutation — push() changes the original array in place
const skills = ["JavaScript", "HTML"];

skills.push("CSS");

console.log(skills);
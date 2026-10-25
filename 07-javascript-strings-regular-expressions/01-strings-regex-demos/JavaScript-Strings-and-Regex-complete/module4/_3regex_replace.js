let text = "The countdown is starting: 3... 2... 1...";
let digits = /\d+/;
let digits_global = /\d+/g;

console.log("Replace:");
console.log(text.replace(digits, "#"));
console.log(text.replace(digits_global, "#"));

console.log("ReplaceAll:");
// console.log(text.replaceAll(digits, "#"));       // TypeError
let result = text.replaceAll(digits_global, "#");
console.log(result);
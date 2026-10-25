const regexLiteral = /Script/g; 
const regexObject = new RegExp("Script", "g");

console.log("JavaScript CoffeeScript".match(regexLiteral));
console.log("JavaScript CoffeeScript".match(regexObject));
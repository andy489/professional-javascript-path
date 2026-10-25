
let num = 1;
let message = "JavaScript is the number " + num + " language";

console.log(`JavaScript is the number ${num} language`);

console.log("a ".concat("b"));

let languages = ["JavaScript", "Java"];
console.log("My favourite languages are: ".concat(languages));
console.log("My favourite languages are: " + languages);


console.log("My favourite languages are: " + languages.join()); // , is default
console.log("My favourite languages are: " + languages.join(" and "));
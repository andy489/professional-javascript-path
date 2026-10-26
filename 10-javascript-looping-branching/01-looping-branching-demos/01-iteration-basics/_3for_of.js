const arr = [10, 20, 30];

for(let value of arr) {
    console.log(value);
}

console.log("Index Value pairs:");
for(let [index, value] of arr.entries()) {
    console.log(index, value)
}

for(let [index, value, other_thing] of arr.entries()) {
    console.log(index, value, other_thing)
}

console.log("Const:");
for(const value of arr) {
    // value = "x"; // TypeError: Assignment to constant variable.
    console.log(value);
    console.log(value * 2);
}

// for(const step = 1; step <= 5; step++) { // TypeError
//     console.log("Step: " + step);
// }
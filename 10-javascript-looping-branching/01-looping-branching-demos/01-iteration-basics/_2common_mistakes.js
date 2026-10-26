console.log("Classic loop");
for(let step = 0; step <= 4; step++) {
    console.log(step);
}

let strings = ["a", "b", "c", "d"];
for(let i = 0; i <= strings.length; i++) { // off-by-one error
    console.log(strings[i]);
}

// let array = [1, 2, 3, 4, 5];
// for(let i = 0; i < strings.length; i + 2) { // endless loops
//     console.log('Every second element ' + i);
// }

let nums = [5, 10, 3]; // sum 18
for(let j = 0; j < nums.length; j++) {
    var total = 0; // inside the loop
    total += nums[j];
}
console.log(total);

let total2 = 0;
for(let j = 0; j < nums.length; j++) {
    total2 += nums[j];
}
console.log(total2);

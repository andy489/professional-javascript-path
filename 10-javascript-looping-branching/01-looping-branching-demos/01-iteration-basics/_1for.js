console.log("Classic loop");
for(let step = 0; step <= 4; step++) {
    console.log('Walking right one step: ' + step);
}

console.log("Going backwards");
for(let step = 5; step >= 0; step--) {
    console.log('Walking left one step: ' + step);
}

console.log("Getting every n-th element");
let array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
for(let i = 0; i < array.length; i += 2) {
    console.log('Every second element ' + array[i]);
}
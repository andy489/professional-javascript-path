['Apple', 'Google', 'Microsoft'].forEach(x => console.log(x));

['Apple', 'Google', 'Microsoft'].forEach((x, i) => console.log(x, i));

['a', 'b', 'c'].forEach(repeat);
function repeat(str) {
    console.log(str.repeat(3));
}

let arrWithAbsentValues = [10, null, 20, undefined, 50];
for(const num of arrWithAbsentValues) {
    console.log(num);
}

arrWithAbsentValues.forEach(num => console.log(num));

// Sparse Arrays
// arrays may have null, undefined or empty slots
let array = [,,,,];
array.length = 20;
array[30] = 100;
delete array[3];
console.log(array);


arrWithAbsentValues[10] = 100;
console.log(arrWithAbsentValues); // [10, null, 20, undefined, 50, <5 empty items>, 100]
console.log('Sparse array:');
console.log('Normal Loop:');
for(const num of arrWithAbsentValues) {
    console.log(num);
}

console.log('For-each Loop:');
arrWithAbsentValues.forEach(num => console.log(num));
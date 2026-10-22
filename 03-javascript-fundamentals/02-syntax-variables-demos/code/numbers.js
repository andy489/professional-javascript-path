let numberOne = 6;
let numberTwo = -3;
let numberThree = 1.234567;

console.log(numberOne);
console.log(numberTwo);
console.log(numberThree);

let result = 0.1 + 0.2;

console.log(result);

let largeNumber = 1.56e21;
let smallNumber = -2.1e-18;

console.log(largeNumber);
console.log(smallNumber);

let annualRevenue = 1_000_000_000;

console.log(annualRevenue);

console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);

console.log(Number.isSafeInteger(42));
console.log(Number.isSafeInteger(9007199254740993));

let smallBigInt = 1n;

console.log(smallBigInt);

let hugeId = 9_007_199_254_740_993n;

console.log(hugeId);

let anotherHugeId = BigInt("9007199254740993");

console.log(anotherHugeId);

let value = 10n;

// This would cause an error:
// console.log(value + 1);

console.log(value + 1n);


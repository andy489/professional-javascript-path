console.log(Boolean(1));
console.log(Boolean(0));
console.log(Boolean("hello"));
console.log(Boolean(""));
console.log(Boolean(null));
console.log(Boolean(undefined));

console.log(Boolean("false"));

const largeId = BigInt("9007199254740993");

console.log(largeId);
console.log(typeof largeId);

// BigInt("42.5"); // causes an error

console.log("5" + 2);
console.log("5" - 2);
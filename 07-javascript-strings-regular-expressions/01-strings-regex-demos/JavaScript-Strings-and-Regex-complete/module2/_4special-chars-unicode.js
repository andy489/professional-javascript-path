
const money = '💸';
console.log(money);

const moneyMessage = '💸Our rates are the best!';
console.log(moneyMessage.slice(1)); // bad result: �Our rates are the best!
console.log(moneyMessage.slice(2)); // good result: Our rates are the best!


console.log(money.length); // 2
console.log('🤦🏼‍♂️'.length); // 7


console.log("A: " + "A".codePointAt(0));
console.log("z: " + "z".codePointAt(0));


console.log(money.codePointAt(0));
console.log(String.fromCodePoint(128184));
console.log(String.fromCharCode(128184)); // 
console.log(String.fromCodePoint('0x1F4B8')); // replace U+ with 0x

console.log(String.fromCharCode(128184)); // 
console.log(String.fromCharCode('0x1F4B8')); // 
console.log(String.fromCharCode('0xD83D', '0xDCB8')); // this works - 💸


const regexWithOutDFlag = /hi(\d)/g;
const hi = 'hi1hi2';
const result = [...hi.matchAll(regexWithOutDFlag)];
console.log(result[0]);
console.log(result[1]);


const regexWithDflag = /hi(\d)/gd;
const hi2 = 'hi1hi2';
const result2 = [...hi2.matchAll(regexWithDflag)];
console.log(result2[0]);
console.log(result2[1]);
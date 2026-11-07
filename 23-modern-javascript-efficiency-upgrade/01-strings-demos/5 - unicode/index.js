const pretzel = '🥨';

console.log(pretzel.length);

const pretzelCode = 0x1F968;

console.log(String.fromCodePoint(pretzelCode));

console.log(pretzel.codePointAt(0).toString(16));

const composed = 'N\u0303';
const single = 'Ñ';

console.log(composed.normalize() === single.normalize());
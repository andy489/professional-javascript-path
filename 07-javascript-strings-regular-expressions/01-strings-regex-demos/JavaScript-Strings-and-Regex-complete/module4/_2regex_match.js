
let text = "The countdown is starting: 3... 2... 1...";
let digits = /\d+/;
let digits_global = /\d+/g;

console.log(digits.test(text));
console.log(text.search(digits));   // -1 if no match

console.log(text.match(digits)); // ['3', index: 27, input: 'The countdown is starting: 3... 2... 1...', groups: undefined  ]

console.log(text.match(digits).at(0));  // 3
console.log(text.match(digits_global));


console.log("Match all:");
// console.log(text.matchAll(digits));      // TypeError
let matches = text.matchAll(digits_global);
console.log(matches);

for(const match of matches) {
    console.log(`Found value "${match[0]}" at index=${match.index}.
                 The searched string was= ${match.input}`);
}

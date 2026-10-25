let backticks = `Multi

 line string`;


const pair = "usd/eur";
const rate = 0.9;
const simple_concat = "The rate for " + pair + " is " + rate;
console.log(simple_concat);

const simple_template = `The rate for ${pair} is ${rate}`;
console.log(simple_template);

let pairUndefined;
let rateNull = null;

console.log(`The rate for pair ${pairUndefined} is ${rateNull}`);


const sum = 100;
let complex_literal = `A ${"$" + sum} is worth ${sum * rate} Euros`;
console.log(complex_literal);


function calculateFee(sumToConvert) {
    const fee = 0.01;
    const rate = 0.9;
    const converted = sumToConvert * rate;
    return converted - converted * fee;
}

let literal_with_func = `After our small and fair fee, your ${sum} will get you ${calculateFee(sum)} Euros`;
console.log(literal_with_func);


// no!
let currencyPairCount = 2; // usd/eur and usd/jpy
let onePair = 1;
let offer = `We currently convert ${currencyPairCount < 2 ? `${onePair} currency pair` : currencyPairCount} currency pairs`;
console.log(offer);

// yes!
let currencyPairCount2 = 2; // usd/eur and usd/jpy
let onePair2 = 1;
let availablePairsCount = currencyPairCount2 < 2 ? `${onePair} currency pair` : `${currencyPairCount2} currency pairs`;

let offerMessage = `We currently convert ${availablePairsCount}`;



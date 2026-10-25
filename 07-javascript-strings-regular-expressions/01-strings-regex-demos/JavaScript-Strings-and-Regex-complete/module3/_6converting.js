
const num = 10;
const s = num + '';
console.log(typeof s);

console.log(typeof num.toString());

console.log("Converting a Number:");
const numWithDecimals = 15.0156;
console.log(numWithDecimals.toFixed(2));
console.log(numWithDecimals.toPrecision(3));

let stringFromArr = [1,2,3].toString();
console.log([1,2,3]);
console.log(stringFromArr);



const sum = 123456;
const rate = 0.8;
console.log(`${sum} USD is ${(sum * rate).toFixed(2)} EUR`);

function applyUsLocale(sum) {
    return new Intl.NumberFormat("en-US", {style: "currency", currency: "USD"}).format(sum);
}

function applyEurLocale(sum, locale) {
    return new Intl.NumberFormat(locale, {style: "currency", currency: "EUR"}).format(sum);
}

const converted = (sum * rate).toFixed(2);
const americanSum = applyUsLocale(sum);
const germanResult = applyEurLocale(converted, 'de-DE');
const frenchResult = applyEurLocale(converted, 'fr-FR');

console.log(`${americanSum} is ${germanResult}`);
console.log(`${americanSum} is ${frenchResult}`);

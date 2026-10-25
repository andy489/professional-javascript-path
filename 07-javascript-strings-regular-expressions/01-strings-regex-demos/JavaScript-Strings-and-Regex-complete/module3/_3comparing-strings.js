console.log("Basic comparisons:");
console.log('a' === "a");

let b = "b";
console.log('ab' === `a${b}`);

console.log('a' === new String('a')); // false, string vs object
console.log('a' === new String('a').toString());  // true


function areEqual(str1, str2) {
  return str1 === str2;
}

console.log("areEqual:");
console.log(areEqual("a", "a"));  // true
console.log(areEqual("a", "A"));  // false
console.log(areEqual("a", new String("a")));            // false
console.log(areEqual(new String("a"), new String("a")));// false


function areEqual_2(str1, str2) {
  let s1 = coerceObjectString(str1);
  let s2 = coerceObjectString(str2);

  return s1 === s2;
}

function coerceObjectString(str) {
  if(typeof str === 'object' && String.prototype.isPrototypeOf(str)) {
    return str.toString();
  } else {
    return str;
  }
}

console.log("areEqual_2:");
console.log(areEqual_2("a", "a"));                        // true
console.log(areEqual_2("a", "A"));                        // false
console.log(areEqual_2("a", new String("a")));            // true
console.log(areEqual_2(new String("a"), new String("a")));// true



function areEqualIgnoreCase_1(str1, str2) {
  return str1.toLowerCase() === str2.toLowerCase();
}

console.log("areEqualIgnoreCase_1:");
console.log(areEqualIgnoreCase_1("road", "roaD"));  // true
console.log(areEqualIgnoreCase_1("Straße", "straße"));  // true
console.log(areEqualIgnoreCase_1("STRASSE", "straße"));  // false


console.log("ß".toLowerCase());  // ß
console.log("ß".toUpperCase());  // SS


console.log('Straße'.toUpperCase().toLowerCase());  // Straße? No, round trip fails

function areEqualIgnoreCase_2(str1, str2) {
  return str1.toUpperCase() === str2.toUpperCase(); // prefer toUpperCase
}





const cafe = "café";
const cafe2 = "cafe";

const reserved = 'réservé';
const reserved2 = 'reserve';

function isEqualIgnoreDiacritic(str1, str2) {
      return str1.localeCompare(str2, undefined, {sensitivity: 'case'}) === 0;
}

console.log(isEqualIgnoreDiacritic(cafe, cafe2));        
console.log(isEqualIgnoreDiacritic(reserved, reserved2));
console.log(isEqualIgnoreDiacritic("čeština", "cestina"));


let names = ['Andrejs', 'čandrejs', 'candrejs', 'Ándrejs'];

function sortStringArray(stringArray) {
  let copy = stringArray.slice();

  copy.sort((a,b) => a.localeCompare(b));
  return copy;
}

console.log(sortStringArray(names));




let ranks = ['2 - Germany', '1 - US', '10 - India', '22 - France'];

function sortNumberedStrings(numberedStringArray) {
    let copy = numberedStringArray.slice();
    // copy.sort((a,b) => a.localeCompare(b));

    copy.sort((a,b) => a.localeCompare(b, undefined, {numeric: true}));
    return copy;
}

console.log(sortNumberedStrings(ranks));

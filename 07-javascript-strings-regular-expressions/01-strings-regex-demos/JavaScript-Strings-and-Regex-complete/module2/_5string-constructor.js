
let stringObject = new String("hello");
console.log(typeof "hello");
console.log(typeof stringObject);


function getFirstLetter(str) {
        if (typeof str !== 'string') {
                throw 'Parameter is not a string';
        }
        return str.charAt(0);
}

console.log(getFirstLetter("abc"));
// console.log(getFirstLetter(new String("abc"))); // Error - Parameter is not a string

function isString(value) {
        return typeof value === 'string' || String.prototype.isPrototypeOf(value);
}

function getFirstLetterv2(str) {

        if (!isString(str)) {
                throw 'Parameter is not a string';
        }

        return str.charAt(0);
}

console.log('v2: ' + getFirstLetterv2("abc"));
console.log('v2: ' + getFirstLetterv2(new String("abc")));
console.log(getFirstLetterv2(2));

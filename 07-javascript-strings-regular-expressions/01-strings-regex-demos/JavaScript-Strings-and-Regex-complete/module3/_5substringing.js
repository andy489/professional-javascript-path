
console.log("This is a String".indexOf("is a"));   // 5, -1 if no match

const languages = 'These are my favourite languages: JavaScript, TypeScript, CoffeeScript.';

function collectList(str) {
    const start = str.indexOf(":") + 1;
    const end = str.indexOf(".", start);
    const list = str.slice(start, end);
    return list.split(",");
}
console.log(collectList(languages));

function collectListv2(str, startString, endString) {
    const start = str.indexOf(startString);
    const end = str.indexOf(endString, start);
    const list = str.slice(start, end);
    return list.split(",");
}

function contains(str, toSearch) {
    return str.indexOf(toSearch) > -1;
}



console.log("Slice: ");
console.log("Hello".slice());    // makes a copy
console.log("Hello".slice(1));   // ello   
console.log("Hello".slice(-1));  // o
console.log("Hello".slice(1,-1));  // ello


function last(subject, length) {
    return subject.slice(-length);
}

console.log("Slice vs last: ");
console.log(last("Once upon a time", 4));
console.log("Once upon a time".slice(-4));


function truncate(str) {
    const maxLength = 40;
    if (str.length <= maxLength) {
        return str;
    }
    return str.slice(0, maxLength) + "...";
}

console.log(truncate("NO NEWS TODAY"));
console.log(truncate("BREAKING NEWS: ECONOMY - THINGS KEEP HAPPENING TO IT!"));


const url = "https://www.pluralsight.com/search?q=javascript";

function isUrlSecure(str) {
    return str.startsWith("https://");
}

function isPicture(str) {
    return str.endsWith(".png") || str.endsWith(".jpg");
}

function isQuery(str) {
    return str.includes("?q");
}

console.log(
    `The provided url ${url} 
    is secure: ${isUrlSecure(url)},
    is a query: ${isQuery(url)},
    points to a picture: ${isPicture(url)}
    `);


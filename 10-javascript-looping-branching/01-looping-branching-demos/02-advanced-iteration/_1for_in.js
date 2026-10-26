Array.prototype.thing = 'custom-property-in-prototype';

let stocks = ['Apple', 'Google','Microsoft', 'Verizon'];

for(let stock of stocks) {
    console.log(stock);
}

for(let stock in stocks) {
    console.log(stock);
}

for(let index in stocks) {
    console.log(stocks[index]);
}

// since ES6 - for iterables
// for(let e of arr) { ... }

// since ES1 - for object properties
// for(let e in arr) { ... }

let stock = {
    "name": "Microsoft",
    "industry": "Tech",
    "price": 220,
    "dividend": 2,
    getDivYield() {
        return this.dividend / this.price * 100;
    }
};

// for(let property of stock) {
//     console.log(property);
// }

console.log("For in:");
for(let property in stock) {
    if(stock.hasOwnProperty(property)) {
        if(typeof stock[property] == 'function') {
            continue;
        }
        console.log(property + " -> " + stock[property]);
    }
}

console.log("Object.keys:");
for(let property of Object.keys(stock)) {
    console.log(property);
}

console.log("Object.entries (both keys and values): ");
for(let [key, value] of Object.entries(stock)) {
    console.log(key, value);
}
let value = "";

if(value) { // "if (Boolean(value) === true) {}"
    console.log("Truthy");
} else {
    console.log("Falsy");
}

let stock_1 = {
    "name": "Google",
    "dividend": 0,
};

let stock_2 = {
    "name": "Microsoft",
    "dividend": undefined,
};

let stocks = [stock_1, stock_2];
let zeroDividendStocks = [];

for(let stock of stocks) {
    if(stock.dividend) {
        console.log(`${stock.name} does not pay a dividend`);
        zeroDividendStocks.push(stock);
    }
}

function calculateDividendYield(divPerShare, currentPrice) {
    if(!divPerShare || !currentPrice) {
        // throw new Error('Missing parameter divPerShare or currentPrice');
    }
    return divPerShare / currentPrice * 100;
}

console.log(calculateDividendYield(1, 100)); // 1%
console.log(calculateDividendYield(1));
// console.log(calculateDividendYield(0, 100)); // Error, a false positive, because 0 is falsy


function calculateDividendYield_v2(divPerShare, currentPrice) {
    if(divPerShare === 0) {
        return 0;
    }
    if(currentPrice <= 0) {
        throw new Error('Expecting price to be greater than 0');
    }
    if(!divPerShare || !currentPrice) {
        throw new Error('Invalid parameter divPerShare on currentPrice');
    }
    return divPerShare / currentPrice * 100;
}


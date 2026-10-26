class Portfolio {
    constructor(stocksPct, bondsPct) {
        this.stockPct = stocksPct;
        this.bondPct = bondsPct;
    }
}

function generatePortfolio(riskTolerance) {
    switch(riskTolerance) {
        case 'low':
            return new Portfolio(20, 80);
        case 'medium':
            return new Portfolio(50, 50);
        case 'high':
            return new Portfolio(90, 10);
        default:
            return new Portfolio(50, 50);
    }
}

console.log(generatePortfolio('low').stockPct);
console.log(generatePortfolio('average').stockPct);

function generatePortfolio_v2(riskTolerance) {
    let portfolio;
    switch(riskTolerance) {
           case 'low':
            portfolio =  new Portfolio(20, 80);
            break;
        case 'medium':
            portfolio =  new Portfolio(50, 50);
            break;
        case 'high':
            portfolio =  new Portfolio(90, 10);
            break;
        default:
            portfolio =  new Portfolio(50, 50);
    }
    return portfolio;
}

console.log('V2');
console.log(generatePortfolio_v2('low').stockPct);
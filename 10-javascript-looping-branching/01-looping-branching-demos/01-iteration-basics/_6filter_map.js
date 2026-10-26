let prices = [20, 50, 120, 200];

let res = [];
for(let p of prices) {
    if(p > 100) {
        res.push(p);
    }
}

console.log(res);

let res2 = prices.filter(p => p > 100)
console.log(res2);


let newNums = prices.map(p => (p / 3).toFixed(1).toString().concat( " usd"));
console.log(newNums);
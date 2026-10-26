let prices = [20, 50, 120, 200];

console.log("For:");
for(let i = 0; i < prices.length; i++) {
    console.log(prices.at(i));
}

console.log("While:");
let i = 0;
while(i < prices.length) { // always true? infinite loop!
    console.log(prices.at(i));
    i++;
}

console.log("While that never executes:");
let i2 = 10;
while(i2 < prices.length) {
    console.log("Never runs");
    i2++;
}

console.log("Do while:");
do {
    console.log("Will run at least once");
} while (i2 < prices.length);
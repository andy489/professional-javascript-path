// before
// --------------------------
const ourFee = 0.01;
const competitorFee = 0.02;

console.log('Compare our fees with competition. To convert 100 USD to EUR:');
const message = "Us: $" + 100 * ourFee + " | Competitor: $" + 100 * competitorFee;
console.log(message);


// after
// --------------------------
const sum = 100;

const newMessage = `Us: $${calculateFee(sum, ourFee)} | Competitor: $${calculateFee(sum, competitorFee)}`;
console.log(newMessage);

function calculateFee(sum, fee) {
    return sum * fee;
}

const cart = [
    { quantity: 1, event: "The Network Squad", price: 33.99 },
    { quantity: 2, event: "Alexander Lemtov", price: 39 },
    { quantity: 4, event: "Mariam Johnson", price: 24.9 }
];

const events = cart.filter(item => item.quantity <= 2);

console.log(events);
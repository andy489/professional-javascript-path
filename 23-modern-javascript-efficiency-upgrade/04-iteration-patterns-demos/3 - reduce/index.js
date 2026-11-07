const cart = [
    { quantity: 1, event: "The Network Squad", price: 33.99 },
    { quantity: 2, event: "Alexander Lemtov", price: 39 },
    { quantity: 4, event: "Mariam Johnson", price: 24.9 }
];

const total = cart.reduce((sum, item) => sum += item.quantity * item.price, 0);

console.log(total);
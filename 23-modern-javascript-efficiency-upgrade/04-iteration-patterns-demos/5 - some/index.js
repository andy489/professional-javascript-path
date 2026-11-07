const cart = [
    { quantity: 1, event: "The Network Squad", price: 33.99, minAge: 6 },
    { quantity: 2, event: "Alexander Lemtov", price: 39, minAge: 16 },
    { quantity: 4, event: "Mariam Johnson", price: 24.9, minAge: 0 }
];

const isAdultRequired = cart.some(item => item.minAge >= 18);

console.log(isAdultRequired);
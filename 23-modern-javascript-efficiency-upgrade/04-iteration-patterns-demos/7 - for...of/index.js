const cart = [
    { quantity: 1, event: "The Network Squad", price: 33.99, minAge: 6 },
    { quantity: 2, event: "Alexander Lemtov", price: 39, minAge: 18 },
    { quantity: 4, event: "Mariam Johnson", price: 24.9, minAge: 0 }
];

for (const item of cart) {
    console.log(`${item.quantity} ticket(s) for ${item.event.toUpperCase()}, $${item.price} each.`);
}

for (const char of "👨‍👩‍👧‍👦") {
    console.log(char);
}
const event1 = { artist: 'The Firewall Squad', venue: 'Pluralsight Arena' };
const event2 = { artist: 'Pluralsight Staff Choir', venue: 'Pluralsight Stadium' };

const ticketInventory = new Map();

ticketInventory.set(
    event1,
    20
);

ticketInventory.set(
    event2,
    1
);

for (const [event, quantity] of ticketInventory) {
    console.log(quantity, ' ticket(s) for ', event);
}

console.log(ticketInventory.has(event2));
console.log(`${ ticketInventory.size } item(s) in Map.`);

ticketInventory.delete(event2);

console.log(ticketInventory.has(event2));
console.log(`${ ticketInventory.size } item(s) in Map.`);

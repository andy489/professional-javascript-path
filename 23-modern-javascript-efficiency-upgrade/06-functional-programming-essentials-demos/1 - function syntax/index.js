const cartItem  = { quantity: 3, price: 39.99 };

function getTotal1(item) {
    return item.quantity * item.price;
}

const getTotal2 = function(item) {
    return item.quantity * item.price;
};

const getTotal3 = item => item.quantity * item.price;

console.log(`Version 1: $${ getTotal1(cartItem) }.`);
console.log(`Version 2: $${ getTotal2(cartItem) }.`);
console.log(`Version 3: $${ getTotal3(cartItem) }.`);

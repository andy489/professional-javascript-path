const firstName = 'Kim';
const cartItem = {
  event: 'The Firewall Squad',
  quantity: 1,
  price: 42
};

const message = `Hello ${firstName}!
Your cart contains ${cartItem.quantity} ticket${cartItem.quantity > 1 ? 's' : ''} for ${cartItem.event} 
for a total of $${(cartItem.quantity * cartItem.price).toFixed(2)}.`;

console.log(message);
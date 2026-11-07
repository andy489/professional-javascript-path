const firstName = 'Kim';
const cartItem = {
  event: 'The Firewall Squad',
  quantity: 1,
  price: 42
};

function formatPlaceholders(strings, ...values) {
    console.log('strings: ', strings);
    return strings.reduce((result, part, pos) => {
        const value = (pos < values.length) ? `<em>${values[pos]}</em>` : '';
        return result + part + value;
    }, '');
}

const message = formatPlaceholders`${cartItem.quantity} ticket(s) for ${cartItem.event}.`;

console.log(message);
const category = "";
const quantity = 0;

const selectedCategory = category || 'All';

const selectedQuantity = quantity ?? 1; // <-- different behavior!

console.log(`Selected category: ${selectedCategory}
Selected quantity: ${selectedQuantity}`);
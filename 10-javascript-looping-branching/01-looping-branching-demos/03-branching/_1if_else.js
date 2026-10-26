let stock = {
    "name": "Google",
    "price": 100,
};

if(stock.price <= 100) console.log('Buy');

if(stock.price <= 100) 
    console.log('Buy');
    // console.log('Then buy some more!');
else
    console.log('Wait');


if(stock.price <= 100) {
    console.log('Buy');
    console.log('Then buy some more!');
} else {
    console.log('Wait');
}
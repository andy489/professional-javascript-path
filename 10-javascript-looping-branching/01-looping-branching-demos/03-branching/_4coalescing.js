let data_0 = getStockData();
// console.log(data_0);

// if(data_0 !== null && data_0 !== undefined) {
//     console.log(data_0);
// } else {
//     console.log(getBackUpStockData());
// }

// let result = data_0 !== null && data_0 !== undefined ? data_0 : getBackUpStockData();

// let result = data_0 != null ? data_0 : getBackUpStockData(); // null losely equals to undefined

let data = getStockData() ?? getBackUpStockData();

function getStockData() {
    const stockData = [];
    const table = document.getElementById('stocks');
    const rows= table.getElementsByTagName('tr');
    for(let i = 1; i< rows.length; i++) {
        stockData.push(rows[i].innerText.split('\t'));
    }
    return stockData;
}

function getBackUpStockData() {
    return [
        ['Microsoft', 'MSFT', 'Tech', '7.46', '198', '220', '0.96'],
        ['Apple', 'APPL', 'Tech', '16.07', '387', '142', '1.25'],
    ];
}
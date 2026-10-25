
let input = 
`paris,france
london,england
tokyo,japan`;

// desired ouptut - "Paris is the capital of France; London is the capital of England, Tokyo is..."
const array = input.split('\n');

let output = "";
for(let i = 0 ; i < array.length; i++) {
    const cityAndCountry = array[i].split(",");
    const city = cityAndCountry[0]; // or .at(0)
    const country = cityAndCountry[1];

    let cityCapitalized = city.slice(0,1).toUpperCase() + city.slice(1, city.length);
    let countryCapitalized = country.slice(0,1).toUpperCase() + country.slice(1, country.length);
    console.log(cityCapitalized, countryCapitalized);

    // output += cityCapitalized + " is the capital of " + countryCapitalized + "; ";

    output += `${cityCapitalized} is the capital of ${countryCapitalized}; `;    
}
console.log(output);

function capitalize(str) {
    // ...
}

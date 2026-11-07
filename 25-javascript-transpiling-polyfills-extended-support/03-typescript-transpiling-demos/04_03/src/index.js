"use strict";
exports.__esModule = true;
require("core-js/actual");
var countries = [];
window.onload = function () {
    var searchButton = document.getElementById('search-button');
    if (searchButton) {
        searchButton.onclick = function () {
            var _a;
            var searchTerm = (_a = document.getElementById("search")) === null || _a === void 0 ? void 0 : _a.value;
            console.log('searchterm', searchTerm);
            displayCountries(searchTerm);
        };
    }
    fetch('https://restcountries.com/v3.1/all')
        .then(function (response) { return response.json(); })
        .then(function (data) {
        countries = data;
        displayCountries('');
    });
};
function displayCountries(searchTerm) {
    var countriesList = document.getElementById("countries");
    //clear data
    if (countriesList) {
        countriesList.innerHTML = "";
        var filteredCountries = searchTerm ? countries.filter(function (z) { return z.name.common.includes(searchTerm); }) : countries;
        filteredCountries.forEach(function (country) {
            var li = document.createElement("li");
            li.classList.add('list-group-item');
            li.appendChild(document.createTextNode(country.name.common));
            countriesList.appendChild(li);
        });
    }
}


import 'core-js/actual';

var countries=[]
window.onload = function () {
    document.getElementById('search-button').onclick=function(){
       
        var searchTerm=  document.getElementById("search").value;
        console.log('searchterm',searchTerm)
        displayCountries(searchTerm)
    }
    fetch('https://restcountries.com/v3.1/all')
        .then((response) => response.json())
        .then((data) => {
            countries=data;
           displayCountries('')
        });
}

function displayCountries(searchTerm){
    var countriesList = document.getElementById("countries");
    //clear data

    countriesList.innerHTML = "";
    let filteredCountries= searchTerm? countries.filter(z=>z.name.common.includes(searchTerm)): countries;
    filteredCountries.forEach(country => {
        var li = document.createElement("li");
        li.classList = 'list-group-item'
        li.appendChild(document.createTextNode(country.name.common));
        countriesList.appendChild(li);
    })
}
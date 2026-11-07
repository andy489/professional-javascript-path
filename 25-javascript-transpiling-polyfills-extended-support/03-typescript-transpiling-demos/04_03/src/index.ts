
 import 'core-js/actual';

var countries:Countries[]=[]
window.onload = function () {
    const searchButton=document.getElementById('search-button');
    if(searchButton){
        searchButton.onclick=function(){
       
            var searchTerm= ( document.getElementById("search") as HTMLInputElement)?.value;
            console.log('searchterm',searchTerm)
            displayCountries(searchTerm)
        }
    }
   
    fetch('https://restcountries.com/v3.1/all')
        .then((response) => response.json())
        .then((data) => {
            countries=data;
           displayCountries('')
        });
}

function displayCountries(searchTerm:string){
    const countriesList = document.getElementById("countries");
    //clear data
    if(countriesList)
    {
        countriesList.innerHTML = "";
    let filteredCountries= searchTerm? countries.filter(z=>z.name.common.includes(searchTerm)): countries;
    filteredCountries.forEach(country => {
        var li = document.createElement("li");
        li.classList.add('list-group-item')
        li.appendChild(document.createTextNode(country.name.common));
        countriesList.appendChild(li);
    })
    }
}


interface Countries{
    name:{common:string}
}
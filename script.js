//faq
//search bar
//pagination
//api calling
// back and forward
//hamburger using js
//javascript.info


var countryImg = document.querySelector(".country-img");
var countryBox = document.querySelector(".container");
var search = document.querySelector("button");
var searchInput = document.querySelector("input");
var container = document.querySelector(".container");
const URL = `https://restcountries.com/v3.1/all`;
var countryName;
var countryBody;

var result = [];

// 

var itemPerPages = 10;
var currentPage = 1;
var totalPages = 0;


// 

search.addEventListener('click', ()=>{
    searchInput.style.width= "500px";
    search.style.borderRadius = `0 11px 11px 0`;

    fetch(URL)
    .then((data)=>{
        data.json().then((result)=>{
            console.log("Result", result);

            const filteredCountries = result.filter((ele)=>{
                const countryName = ele.name.common.toLowerCase();
                const countryContinent= ele.continents[0].toLowerCase();
                return countryName.includes(searchInput.value.toLowerCase()) || countryContinent.includes(searchInput.value.toLowerCase());
            })

            countryBox.innerHTML = '';

           filteredCountries.forEach((ele) =>{
            console.log("ele", ele); 

            countryBody = ` <div class="country-box">
            <img class="country-img" src="${ele.flags.png}" alt="img">
            <div class="head">
                <h2>${ele.name.common}</h2>
            </div>
            <div class="country-flag-footer">
                <div class="capital flex">
                    <h3>Capital : </h3>
                    <h3>${ele.capital}</h3>
                </div>
                <div class="language flex">
                    <h3>Language : </h3>
                    <h3>${Object.values(ele.languages)[0]}</h3>
                </div>
                <div class="population flex">
                    <h3>Population : </h3>
                    <h3>${ele?.population}</h3>
                </div>
                <div class="currencies flex">
                    <h3>Currencies : </h3>
                    <h3>${Object.values(ele.currencies)[0].symbol}</h3>
                </div>
            </div>
        </div> `

            countryBox.insertAdjacentHTML('beforeend', countryBody);
           })
        } )
    })
});
container.addEventListener('click', ()=>{
    searchInput.style.width= "10px";
    search.style.borderRadius = `11px 11px 11px 11px`;
});




fetch(URL)
    .then((data)=>{
        data.json().then((result)=>{
            console.log("Result", result);

           result.forEach((ele) =>{

            if(ele != undefined && ele.capital != undefined && ele.capital.length > 0){
                countryBody = ` <div class="country-box">
            <img class="country-img" src="${ele.flags.png}" alt="img">
            <div class="head">
                <h2>${ele.name.common}</h2>
            </div>
            <div class="country-flag-footer">
                <div class="capital flex">
                    <h3>Capital : </h3>
                    <h3>${ele.capital}</h3>
                </div>
                <div class="language flex">
                    <h3>Language : </h3>
                    <h3>${Object.values(ele.languages)[0]}</h3>
                </div>
                <div class="population flex">
                    <h3>Population : </h3>
                    <h3>${ele?.population}</h3>
                </div>
                <div class="currencies flex">
                    <h3>Currencies : </h3>
                    <h3>${Object.values(ele.currencies)[0].symbol}</h3>
                </div>
            </div>
        </div> `

            countryBox.insertAdjacentHTML('beforeend', countryBody);
            }
            // console.log("ele", ele); 

            
           })
        } )
    })



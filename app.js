    import countryList from "./countryCodes.js";

let dropFrom = document.querySelector('#from-flag');
let dropTo =  document.querySelector('#to-flag');
let flagFrom = document.querySelector('#flag-from-img');
let flagTo = document.querySelector('#flag-to-img');
let textFrom = document.querySelector('#from-text');
let textTo = document.querySelector('#to-text');
let button = document.querySelector('#submit');
let comment = document.querySelector('#comments');


for(let key in countryList)
{
    let option = document.createElement('option');
    option.innerHTML = key;
    dropFrom.appendChild(option);
}

for(let key in countryList)
{
    let option = document.createElement('option');
    option.innerHTML = key;
    dropTo.appendChild(option);
}

function changeFlag(){

    let elementFrom = dropFrom.value;
    let countryCodeFrom = countryList[elementFrom];
    flagFrom.src = `https://flagsapi.com/${countryCodeFrom}/shiny/64.png`;
    flagFrom.alt = `${elementFrom}flag`;

    let elementTo = dropTo.value;
    let countryCodeTo = countryList[elementTo];
    flagTo.src = `https://flagsapi.com/${countryCodeTo}/shiny/64.png`;
    flagTo.alt = `${elementTo}flag`;

    textFrom.value=""
    textTo.value =""
    comment.innerHTML=""

}

dropFrom.addEventListener('change',changeFlag);
dropTo.addEventListener('change',changeFlag);

async function update(){

    let elementFromUpper = dropFrom.value;
    let elementFromLower = elementFromUpper.toLowerCase();
    let elementTo = dropTo.value;
    let currFrom = textFrom.value;
    let currTo = textTo.value;

    let response = await fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${elementFromLower}.min.json`);
    let data = await response.json();

    let currToCal = data[elementFromLower][elementTo.toLowerCase()];
    let currTotal = currFrom*currToCal;
    textTo.value=currTotal;  

    comment.innerHTML = `${currFrom} ${elementFromUpper} = ${textTo.value} ${elementTo}`

}


button.addEventListener('click',update);


// const urlCoversion ='https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/inr.min.json'
 //const urlFlag = "https://flagsapi.com/IN/shiny/64.png"












  
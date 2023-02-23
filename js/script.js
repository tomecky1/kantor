console.log("Witaj szanowny developerze 😎");

let formElement = document.querySelector(".js-form");
console.log(formElement);
let currencyElement = document.querySelector(".js-baseCurrency");
let converterElement = document.querySelector(".js-conversionFactor");
let newCurrencyElement = document.querySelector(".js-newCurrency");
console.log(newCurrencyElement);



formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let currency = currencyElement.value;
    let converter = converterElement.value;
    let newCurrency = newCurrencyElement.value;

    newCurrency = currency * converter;

    newCurrencyElement.innerText = newCurrency.toFixed(2);
});


{
  console.log("Witaj szanowny developerze 😎");

  
  const valueElement = document.querySelector(".js-newValue");

  const calculateResult = (amount, currency) => {
    const rateEUR = 4.6580;
    const rateGBP = 5.1123;
    const rateUSD = 3.8580;
    
    switch (currency) {
      case "EUR":
        return amount / rateEUR;
        
      case "GBP":
        return amount / rateGBP;    

      case "USD":
        return amount / rateUSD;
    }
  };
  const init = () => {
    const formElement = document.querySelector(".js-form");
    formElement.addEventListener("submit", (event) => {
      event.preventDefault();
      const amountElement = document.querySelector(".js-baseCurrency");
      const currencyElement = document.querySelector(".js-currency");
      const resultElement = document.querySelector(".js-result");

      const amount = +amountElement.value;
      const currency = currencyElement.value;

      const result = calculateResult(amount, currency);

    resultElement.innerHTML = `${amount} PLN = <strong>${result.toFixed(2)} ${currency}</strong>`;
  });
};
  init();
}

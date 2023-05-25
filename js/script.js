{
  console.log("Witaj szanowny developerze 😎");

  const formElement = document.querySelector(".js-form");
  const valueElement = document.querySelector(".js-newValue");

  const calculateResult = (amount, currency) => {
    const rateEUR = 4.6580;
    const rateGBP = 5.5010;
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

  formElement.addEventListener("submit", (event) => {
    event.preventDefault();
    const amountElement = document.querySelector(".js-baseCurrency");
    const currencyElement = document.querySelector(".js-currency");
    const amount = +amountElement.value;
    const currency = currencyElement.value;

    let result = calculateResult(amount, currency);

    valueElement.innerHTML = `${amount.toFixed(
      2
    )} PLN = <strong>${result.toFixed(2)} ${currency}</strong>`;
  });
}

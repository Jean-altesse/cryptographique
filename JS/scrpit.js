// Fonction pour convertir la cryptomonnaie dans la devise sélectionnée
function convertToSelectedCurrency() {
    const cryptoSelect = document.getElementById("crypto");
    const currencySelect = document.getElementById("currency");
    const amountInput = document.getElementById("amount");
    const balanceDiv = document.getElementById("balance");
  
    const crypto = cryptoSelect.value;
    const currency = currencySelect.value;
    const amount = parseFloat(amountInput.value);
  
    // Appel à l'API Exchange Rates API pour obtenir les taux de change
    fetch(`6fd45d6e64e58462094bd95c2f718e109526c3ff27f2390da2d16d4f15e883ff latest?base=${crypto}&symbols=${currency}`)
      .then(response => response.json())
      .then(data => {
        const exchangeRate = data.rates[currency];
        const convertedAmount = amount * exchangeRate;
  
        balanceDiv.textContent = `${convertedAmount} ${currency.toUpperCase()}`;
      })
      .catch(error => {
        console.error("Une erreur s'est produite lors de la conversion :", error);
      });
  }
  
  
  
  
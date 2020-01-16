document.getElementById("loan-form").addEventListener("submit", function(e) {
  document.getElementById("results").style.display = "none";

  document.getElementById("loading").style.display = "block";

  setTimeout(calculateResults, 2000);

  e.preventDefault();
});

function calculateResults() {
  const amountUI = document.getElementById("amount"),
    interestUI = document.getElementById("interest"),
    yearsUI = document.getElementById("years"),
    monthlyPaymentUI = document.getElementById("monthly-payment"),
    totalPaymentUI = document.getElementById("total-payment"),
    totalInterestUI = document.getElementById("total-interest"),
    initialAmount = parseFloat(amountUI.value),
    calculatedInterest = interestUI.value / 100 / 12,
    calculatedPayments = parseFloat(yearsUI.value) * 12,
    x = Math.pow(1 + calculatedInterest, calculatedPayments),
    monthly = (initialAmount * x * calculatedInterest) / (x - 1);

  if (isFinite(monthly)) {
    monthlyPaymentUI.value = monthly.toFixed(2);
    totalPaymentUI.value = (monthly * calculatedPayments).toFixed(2);
    totalInterestUI.value = (
      monthly * calculatedPayments -
      initialAmount
    ).toFixed(2);

    document.getElementById("results").style.display = "block";

    document.getElementById("loading").style.display = "none";
  } else {
    showError("Please check your numbers");
  }
}

function showError(error) {
  document.getElementById("results").style.display = "none";

  document.getElementById("loading").style.display = "none";

  const errorDiv = document.createElement("div"),
    card = document.querySelector(".card"),
    heading = document.querySelector(".heading");

  errorDiv.className = "alert alert-danger";

  errorDiv.appendChild(document.createTextNode(error));

  card.insertBefore(errorDiv, heading);

  setTimeout(clearError, 2000);
}

function clearError() {
  document.querySelector(".alert").remove();
}

document.getElementById("loan-form").addEventListener("submit", function(e) {
  document.getElementById("results").style.display = "none";

  document.getElementById("loading").style.display = "block";

  setTimeout(calculateResults, 2000);

  e.preventDefault();
});

function calculateResults() {
  const amountUI = document.getElementById("amount");
  const interestUI = document.getElementById("interest");
  const yearsUI = document.getElementById("years");
  const monthlyPaymentUI = document.getElementById("monthly-payment");
  const totalPaymentUI = document.getElementById("total-payment");
  const totalInterestUI = document.getElementById("total-interest");

  const initialAmount = parseFloat(amountUI.value);
  const calculatedInterest = interestUI.value / 100 / 12;
  const calculatedPayments = parseFloat(yearsUI.value) * 12;

  const x = Math.pow(1 + calculatedInterest, calculatedPayments);
  const monthly = (initialAmount * x * calculatedInterest) / (x - 1);

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

  const errorDiv = document.createElement("div");

  const card = document.querySelector(".card");
  const heading = document.querySelector(".heading");

  errorDiv.className = "alert alert-danger";

  errorDiv.appendChild(document.createTextNode(error));

  card.insertBefore(errorDiv, heading);

  setTimeout(clearError, 2000);
}

function clearError() {
  document.querySelector(".alert").remove();
}

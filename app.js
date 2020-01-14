document
  .getElementById("loan-form")
  .addEventListener("submit", calculateResults);

function calculateResults(e) {
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

  e.preventDefault();
}

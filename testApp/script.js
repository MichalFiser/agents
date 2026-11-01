const form = document.querySelector("#calculator-form");
const firstNumber = document.querySelector("#first-number");
const secondNumber = document.querySelector("#second-number");
const result = document.querySelector("#result");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const sum = Number(firstNumber.value) + Number(secondNumber.value);
  result.textContent = `The total is ${sum.toLocaleString()}.`;
  result.classList.add("has-answer");
});

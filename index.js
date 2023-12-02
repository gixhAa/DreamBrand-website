// Buttons
const confirmBtn = document.querySelector(".confBtn");
const continueBtn = document.querySelector(".continue");

// Form
const form = document.querySelector("form");

// Containers
const formContainer = document.querySelector(".form-container");
const completedContainer = document.querySelector(".completed-container");

// Sets
const cardNumberOutput = document.getElementById("card-number-output");
const cardNumberInput = document.getElementById("card-number");

const nameOutput = document.getElementById("name-output");
const nameInput = document.getElementById("name");

const monthOutput = document.getElementById("month-output");
const monthInput = document.getElementById("month");

const yearOutput = document.getElementById("year-output");
const yearInput = document.getElementById("year");

const cvcOutput = document.getElementById("cvc-output");
const cvcInput = document.getElementById("cvc");

function setCardNumber(e) {
  cardNumberOutput.innerText = format(e.target.value);
}

function setCardName(e) {
  nameOutput.innerText = format(e.target.value);
}

function setCardMonth(e) {
  monthOutput.innerText = format(e.target.value);
}

function setCardYear(e) {
  yearOutput.innerText = format(e.target.value);
}

function setCardCvc(e) {
  cvcOutput.innerText = format(e.target.value);
}

function handleSubmit(e) {
  e.preventDefault();
  if (!nameInput.value) {
    nameInput.classList.add("error");
    nameInput.parentElement.classList.add("error-message");
  } else {
    nameInput.classList.remove("error");
    nameInput.parentElement.classList.remove("error-message");
  }
  if (!cardNumberInput.value) {
    cardNumberInput.classList.add("error");
    cardNumberInput.parentElement.classList.add("error-message");
  } else if (cardNumberInput.value.length < 16) {
    cardNumberInput.classList.add("error");
  } else {
    cardNumberInput.classList.remove("error");
    cardNumberInput.parentElement.classList.remove("error-message");
  }
  if (!monthInput.value) {
    monthInput.classList.add("error");
    monthInput.parentElement.classList.add("error-message");
  } else {
    monthInput.classList.remove("error");
    monthInput.parentElement.classList.remove("error-message");
  }
  if (!yearInput.value) {
    yearInput.classList.add("error");
  } else {
    yearInput.classList.remove("error");
  }
  if (!cvcInput.value) {
    cvcInput.classList.add("error");
    cvcInput.parentElement.classList.add("error-message");
  } else {
    cvcInput.classList.remove("error");
    cvcInput.parentElement.classList.remove("error-message");
  }
  if (
    nameInput.value &&
    cardNumberInput.value &&
    monthInput.value &&
    yearInput.value &&
    cvcInput.value &&
    cardNumberInput.value.length == 16
  ) {
    formContainer.classList.add("hidden");
    completedContainer.classList.remove("hidden");
  }
}

function format(s) {
  return s.toString().replace(/\d{4}(?=.)/g, "$& ");
}

cardNumberInput.addEventListener("keyup", setCardNumber);
nameInput.addEventListener("keyup", setCardName);
monthInput.addEventListener("keyup", setCardMonth);
yearInput.addEventListener("keyup", setCardYear);
cvcInput.addEventListener("keyup", setCardCvc);
confirmBtn.addEventListener("click", handleSubmit);

continueBtn.addEventListener("click", () => {
  formContainer.classList.remove("hidden");
  completedContainer.classList.add("hidden");
});

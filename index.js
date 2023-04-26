const nameInput = document.querySelector("#name");
const cardNumberInput = document.querySelector("#cardNumber");
const monthNumberInput = document.querySelector("#monthNumber");
const yearNumberInput = document.querySelector("#yearNumber");
const cvcNumberInput = document.querySelector("#cvcNumber");
const buttonConfirmEl = document.querySelector("#buttonConfirm");
const nameCardEl = document.querySelector("#nameCard");
const dateCardEl = document.querySelector("#dateCard");
const monthCardEl = document.querySelector("#monthCard");
const yearCardEl = document.querySelector("#yearCard");
const numberCardEl = document.querySelector("#numberCard");
const cvcCardEl = document.querySelector("#cvcCard");

function isValidLength(string, limit) {
  return string && string.length === limit;
}
//name
let nameValue;
nameInput.addEventListener("input", (event) => {
  nameValue = event.target.value;
});

//cardNumber
let cardNumberValue;
cardNumberInput.addEventListener("input", (event) => {
  cardNumberValue = event.target.value;
});
cardNumberInput.addEventListener("keypress", function (event) {
  console.log("keypress");
  if (isValidLength(cardNumberValue, 16)) {
    event.preventDefault();
  }
});

//monthValue
let monthNumberValue;
monthNumberInput.addEventListener("input", (event) => {
  monthNumberValue = event.target.value;
});
monthNumberInput.addEventListener("keypress", function (event) {
  console.log("keypress");
  if (isValidLength(monthNumberValue, 2)) {
    event.preventDefault();
  }
});

//yearValue
let yearNumberValue;
yearNumberInput.addEventListener("input", (event) => {
  yearNumberValue = event.target.value;
});
yearNumberInput.addEventListener("keypress", function (event) {
  console.log("keypress");
  if (isValidLength(yearNumberValue, 2)) {
    event.preventDefault();
  }
});

//cvcValue
let cvcNumberValue;
cvcNumberInput.addEventListener("input", (event) => {
  cvcNumberValue = event.target.value;
});
cvcNumberInput.addEventListener("keypress", function (event) {
  console.log("keypress");
  if (isValidLength(cvcNumberValue, 3)) {
    event.preventDefault();
  }
});

buttonConfirmEl.addEventListener("click", () => {
  //cardNumber
  const cardNumberError = document.querySelector("#cardNumberError");
  //   const isLength16Valid = cardNumberValue && cardNumberValue.length === 16;
  const isLength16Valid = isValidLength(cardNumberValue, 16);
  cardNumberError.textContent = isLength16Valid
    ? ""
    : "card number is not valid";
  if (isLength16Valid) {
    document.querySelector("#numberCard").textContent = cardNumberValue;
  }

  //name
  const nameError = document.querySelector("#nameError");
  nameError.textContent = nameValue ? "" : "name required";
  if (nameValue !== "") {
    document.querySelector("#nameCard").textContent = nameValue;
  }

  //month
  const monthError = document.querySelector("#monthError");
  const isValidMonth =
    isValidLength(monthNumberValue, 2) &&
    monthNumberValue <= 12 &&
    monthNumberValue >= 01;
  monthError.textContent = isValidMonth ? "" : "not valid";
  if (isValidMonth) {
    document.querySelector("#monthCard").textContent = monthNumberValue;
  }

  // year
  const yearError = document.querySelector("#yearError");
  const isYearValid =
    yearNumberValue >= 23 && isValidLength(yearNumberValue, 2);
  yearError.textContent = isYearValid ? "" : "not valid";
  if (isYearValid) {
    document.querySelector("#yearCard").textContent = yearNumberValue;
  }

  // cvc
  const cvcError = document.querySelector("#cvcError");
  const isLength3Valid = isValidLength(cardNumberValue, 3);
  cvcError.textContent = isLength3Valid ? "" : "not valid";
  if (isLength3Valid) {
    document.querySelector("#cvcCard").textContent = cvcNumberValue;
  }
});

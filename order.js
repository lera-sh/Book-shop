const btnSubmit = document.getElementById("btn-submit")
const nameField = document.getElementById("field_name")
let validName = false

window.onload = function () {
  nameField.focus();
}

let warnPopName = document.getElementById("warn-pop-up-name")
nameField.addEventListener("mouseleave", check)
nameField.addEventListener("input", function () {
  let value = document.getElementById("field_name").value
  let element = document.getElementById("field_name")
  if (/^[A-Za-z]{4,}$/.test(value)) {
    element.className = "valid"
    warnPopName.style.visibility = "hidden"
    validName = true
  } else {
    element.className = "invalid";
    warnPopName.style.visibility = "visible"
    validName = false
  }
})

nameField.addEventListener("blur", check)
nameField.addEventListener("focusout", function () {
  let value = document.getElementById("field_name").value
  let element = document.getElementById("field_name")
  if (value.length < 4) {
    element.className = "invalid"
    warnPopName.style.visibility = "visible"
    validName = false
  } else {
    element.className = "valid"
    warnPopName.style.visibility = "hidden"
    validName = true
  }
})

const SurNameField = document.getElementById("field_surname")
let validSurName = false

let warnPopSurName = document.getElementById("warn-pop-up-surname");
SurNameField.addEventListener("input", check);
SurNameField.addEventListener("input", function () {
  let value = document.getElementById("field_surname").value;
  let element = document.getElementById("field_surname");
  if (/^[A-Za-z]{5,}$/.test(value)) {
    element.className = "valid";
    warnPopSurName.style.visibility = "hidden";
    validSurName = true;
  } else {
    element.className = "invalid";
    warnPopSurName.style.visibility = "visible";
    validSurName = false;
  }
});

document.addEventListener("mousemove", check);
SurNameField.addEventListener("mouseleave", check);
SurNameField.addEventListener("focusout", function () {
  let value = document.getElementById("field_surname").value;
  let element = document.getElementById("field_surname");
  if (value.length < 5) {
    element.className = "invalid";
    warnPopSurName.style.visibility = "visible";
    validSurName = false;
  } else {
    element.className = "valid";
    warnPopSurName.style.visibility = "hidden";
    validSurName = true;
  }
});

const StreetField = document.getElementById("field_street")
let validStreet = false
let warnPopStreet = document.getElementById("warn-pop-up-street");

StreetField.addEventListener("mouseleave", check);
StreetField.addEventListener("input", function () {
  let value = document.getElementById("field_street").value;
  let element = document.getElementById("field_street");
  if (/^[0-9a-zA-Z]{5,}$/.test(value)) {
    element.className = "valid";
    warnPopStreet.style.visibility = "hidden";
    validStreet = true;
  } else {
    element.className = "invalid";
    warnPopStreet.style.visibility = "visible";
    validStreet = false;
  }
});
StreetField.addEventListener("mouseleave", check);
StreetField.addEventListener("focusout", function () {
  let value = document.getElementById("field_street").value;
  let element = document.getElementById("field_street");
  if (value.length < 5) {
    element.className = "invalid";
    warnPopStreet.style.visibility = "visible";
    validStreet = false;
  } else {
    element.className = "valid";
    warnPopStreet.style.visibility = "hidden";
    validStreet = true;
  }
});


const HouseField = document.getElementById("field_house")
let validHouse = false

let warnPopHouse = document.getElementById("warn-pop-up-house");
HouseField.addEventListener("mouseleave", check);
HouseField.addEventListener("input", function () {
  let value = document.getElementById("field_house").value;
  let element = document.getElementById("field_house");
  if (/^[1-9]+[0-9]*$/.test(value)) {
    element.className = "valid";
    warnPopHouse.style.visibility = "hidden";
    validHouse = true;
  } else {
    element.className = "invalid";
    warnPopHouse.style.visibility = "visible";
    validHouse = false;
  }
});
HouseField.addEventListener("mouseleave", check);
HouseField.addEventListener("focusout", function () {
  let value = document.getElementById("field_house").value;
  let element = document.getElementById("field_house");
  if (value.length === 0) {
    element.className = "invalid";
    warnPopHouse.style.visibility = "visible";
    validHouse = false;
  } else {
    element.className = "valid";
    warnPopHouse.style.visibility = "hidden";
    validHouse = true;
  }
});

const FlatField = document.getElementById("field_flat")
let validFlate = false

let warnPopFlat = document.getElementById("warn-pop-up-flat");
FlatField.addEventListener("mouseleave", check);
FlatField.addEventListener("input", function () {
  let value = document.getElementById("field_flat").value;
  let element = document.getElementById("field_flat");
  if (/^[1-9–]+[-0-9–]*$/.test(value)) {
    element.className = "valid";
    warnPopFlat.style.visibility = "hidden";
    validFlate = true;
  } else {
    element.className = "invalid";
    warnPopFlat.style.visibility = "visible";
    validFlate = false;
  }
});

FlatField.addEventListener("mouseleave", check);
FlatField.addEventListener("focusout", function () {
  PaymentField.focus();
  let value = document.getElementById("field_flat").value;
  let element = document.getElementById("field_flat");
  if (value.length === 0) {
    element.className = "invalid";
    warnPopFlat.style.visibility = "visible";
    validFlate = false;
  } else {
    element.className = "valid";
    warnPopFlat.style.visibility = "hidden";
    validFlate = true;
  }
});

let validDate = false
let dateField = document.getElementById("field_date");
let warnPopDate = document.getElementById("warn-pop-up-date");

dateField.addEventListener("input", check);
dateField.addEventListener("mouseleave", function () {
  let element = document.getElementById("field_date");
  let today = new Date();
  let datePicked = document.getElementById("field_date").value;
  let userDate = new Date(datePicked);
  if (userDate <= today) {
    element.className = "invalid";
    warnPopDate.style.visibility = "visible";
    validDate = false;
  } else {
    element.className = "valid";
    warnPopDate.style.visibility = "hidden";
    validDate = true;
  }
});

dateField.addEventListener("mouseleave", check);
dateField.addEventListener("focusout", function () {
  let element = document.getElementById("field_date");
  let today = new Date();
  let datePicked = document.getElementById("field_date").value;
  let userDate = new Date(datePicked);
  if (datePicked  && userDate > today) {
    element.className = "valid";
    warnPopDate.style.visibility = "hidden";
    validDate = true;
  } else {
    element.className = "invalid";
    warnPopDate.style.visibility = "visible";
    validDate = false;
  }
});

const PaymentField = document.getElementById("field_payment")
let validPayment = false
let cashSelected = false;
let cardSelected = false;
let cashField = document.getElementById("cash-radio");
let cardField = document.getElementById("card-radio");
let warnPopPayment = document.getElementById("warn-pop-up-payment");

cashField.addEventListener("mouseleave", check);
cashField.addEventListener("change", function () {
  if (cashField.checked) {
    cashSelected = true;
    cardField.checked = false;
    warnPopPayment.style.visibility = "hidden";
    validPayment = true;
  }
});

cardField.addEventListener("mouseleave", check);
cardField.addEventListener("change", function () {
  if (cardField.checked) {
    cardSelected = true;
    cashField.checked = false;
    warnPopPayment.style.visibility = "hidden";
    validPayment = true;
  }
});

PaymentField.addEventListener("mouseleave", check);
PaymentField.addEventListener("focusout", check);

PaymentField.addEventListener("focusout", function () {
  if (cashField.checked === false && cardField.checked === false) {
    warnPopPayment.style.visibility = "visible";
  }
});

var checks = document.querySelectorAll(".check");
var max = 2;
for (var i = 0; i < checks.length; i++) checks[i].onclick = selectiveCheck;
function selectiveCheck(event) {
  var checkedChecks = document.querySelectorAll(".check:checked");
  if (checkedChecks.length >= max + 1) {
    return false;
  }
}

let fieldArr = [
  nameField.value,
  SurNameField.value,
  dateField.value,
  HouseField.value,
  StreetField.value,
  FlatField.value,
  cardField.value,
  cashField.value,
];

function check() {
  console.log(validName);
  console.log(validSurName);
  console.log(validDate);
  console.log(validStreet);
  console.log(validHouse);
  console.log(validFlate);
  console.log(validPayment);
  if (
    validName &&
    validDate &&
    validSurName &&
    validStreet &&
    validHouse &&
    validFlate &&
    validPayment
  ) {
    btnSubmit.disabled = false;
    btnSubmit.style.cursor = "not-allowed;";
  } else {
    btnSubmit.disabled = true;
    btnSubmit.style.cursor = "pointer";
  }
}

const closePopUpBtn = document.getElementById("close-btn");
const addressInfo = document.getElementById("address-summary");
const customerInfo = document.getElementById("customer-summary");
const PopUp = document.getElementById("popM");

btnSubmit.addEventListener("click", (ev) => {
  addressInfo.innerText = `The delivery address is: ${StreetField.value} ${HouseField.value} ${FlatField.value}.`;
  customerInfo.innerText = `Customer: ${nameField.value} ${SurNameField.value}.`;
  PopUp.style.display = "block";
  ev.preventDefault();
});

closePopUpBtn.addEventListener("click", () => {
  PopUp.style.display = "none";
  nameField.focus();
});
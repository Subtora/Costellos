let myForm = document.getElementById("myForm");
let radioLabel = document.getElementById("radioLabel");
let nameLabel = document.getElementById("nameLabel");
let phoneLabel = document.getElementById("phoneLabel");
let totalcost = document.getElementById("totalcost");
let submitMessage = document.getElementById("submitMessage");

function validateForm() {
  let condition = true;
  let phoneFormat = /^\d\d\d-\d\d\d-\d\d\d\d$/; //regex format

  if (myForm.pastatype.value == "") {
    radioLabel.innerText = "Required field! (You must choose a pasta)";
    condition = false;
  } else {
    radioLabel.innerText = "";
  }
  if (myForm.name.value == "") {
    nameLabel.innerText = "Required field!";
    condition = false;
  } else {
    nameLabel.innerText = "Required field!";
  }
  if (myForm.phone.value == "" || !myForm.phone.value.match(phoneFormat)) {
    phoneLabel.innerText = "Enter in 888-888-8888 format!";
    condition = false;
  } else {
    phoneLabel.innerText = "";
  }
  return condition;
}

function calculatePrice() {
  let cost =
    750 + parseInt(myForm.pastatype.value) + parseInt(myForm.sauce.value);
  if (myForm.extras.value != "") cost += parseInt(myForm.extras.value);

  return (cost / 100).toFixed(2);
}

function calculateOrder() {
  if (!validateForm()) {
    return false;
  } else {
    submitMessage.innerText = "Your total is: $" + calculatePrice();
  }
  console.log("Submitted Successfully!");
  return false;
}

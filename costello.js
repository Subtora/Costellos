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
    nameLabel.innerText = "";
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
  myForm.return(cost / 100).toFixed(2);
  if (myForm.extras[0].checked != "") {
    console.log(myForm.extras[0].value);
  }
  if (myForm.extras[1].checked != "") {
    console.log(myForm.extras[1].value);
  }
}

function calculateOrder() {
  if (!validateForm()) {
    return false;
  } else {
    totalcost.innerText = "Your total is: $" + calculatePrice();
  }
  submitMessage.innerText = "Submitted Successfully!";
  return false;
}

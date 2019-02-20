var myForm = document.getElementById("myForm");
var row = document.getElementsByClassName("row");

function changeLabel(row, text) {
  row.childNodes[5].innerText = text;
}

function validateForm() {
  let condition = true;
  let phoneFormat = /^\d\d\d-\d\d\d-\d\d\d\d$/; //regex format

  if (myForm.pastatype.value == "") {
    changeLabel(row[2], "Required field! (You must choose a pasta)");
    condition = false;
  } else {
    changeLabel(row[2], "");
  }
  if (myForm.name.value == "") {
    changeLabel(row[5], "Required field!");
    condition = false;
  } else {
    changeLabel(row[5], "");
  }
  if (myForm.phone.value == "" || !myForm.phone.value.match(phoneFormat)) {
    changeLabel(row[6], "Enter in 888-888-8888 format!");
    condition = false;
  } else {
    changeLabel(row[6], "");
  }
  return condition;
}

function calculatePrice() {
  var cost =
    750 + parseInt(myForm.pastatype.value) + parseInt(myForm.sauce.value);
  if (myForm.extras.value != "") cost += parseInt(myForm.extras.value);

  return (cost / 100).toFixed(2);
}

function calculateOrder() {
  if (!validateForm()) {
    return false;
  } else {
    row[7].childNodes[3].innerText = "Your total is: $" + calculatePrice();
  }
  console.log("Submitted Successfully!");
  return false;
}

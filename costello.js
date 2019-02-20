let myForm = document.getElementById("myForm");
let radioLabel = document.getElementById("radioLabel");
let nameLabel = document.getElementById("nameLabel");
let phoneLabel = document.getElementById("phoneLabel");
let totalcost = document.getElementById("totalcost");
let submitMessage = document.getElementById("submitMessage");
let condition = true;
var wait;

function validateForm() {
  condition = true;
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
  console.log("calculating price");
  let cost =
    750 + parseInt(myForm.pastatype.value) + parseInt(myForm.sauce.value);
    for (var i = 0; i < myForm.extras.length; i++) {
      if (myForm.extras[i].checked) {
        cost += parseInt(myForm.extras[i].value);
      }
    }
  return (cost / 100).toFixed(2);
}

condition = false;
function calculateOrder() {
  if (!validateForm()) {
    return false;
  } else {
    totalcost.innerText = "Your total is: $" + calculatePrice();
  }
  submitMessage.innerHTML =
    "<p>Order is being submitted....<span id='cancel'>Cancel</span></p>";
  wait = setTimeout(function(){
    if (condition != true ) {
          condition = true;
          calculateOrder();
    }
  }, 5000);
  console.log(condition);
    return false;
}
submitMessage.addEventListener("click", function(){
  console.log("order canceled!");
  clearTimeout(wait);
  submitMessage.innerText = "Order canceled. (Press submit to re-order)"
});

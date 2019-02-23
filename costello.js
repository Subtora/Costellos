let myForm = document.getElementById("myForm");

let radioLabel = document.getElementById("radioLabel");
let nameLabel = document.getElementById("nameLabel");
let phoneLabel = document.getElementById("phoneLabel");
let totalcost = document.getElementById("totalcost");
let submitBtn = document.getElementById("submitBtn");
let submitMessage = document.getElementById("submitMessage");
let condition = true;
let wait;

function isANumber(num){
  let arr = num.split("-");
  if (arr[0].length != 3) return false;
  if (arr[1].length != 3) return false;
  if (arr[2].length != 4) return false;
for(let i = 0; i < arr.length; i++){
	if(isNaN(arr[i])) {
    return false;
    }
  }
    return true;
  }
function validateForm() {
  console.log("validating form");
  condition = true;

  if (myForm.pastatype.value == "") {
    radioLabel.innerText = "Required field! (You must choose a pasta)";
    condition = false;
  } else {
    radioLabel.innerText = "";
  }
  if (myForm.client_name.value == "") {
    nameLabel.innerText = "Required field!";
    condition = false;
  } else {
    nameLabel.innerText = "";
  }
  if (myForm.phone.value == "" || !isANumber(myForm.phone.value)) {
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

function updatePrice() {
  if (!validateForm()) {
    return false;
  } else {
    totalcost.innerText = "Your total is: $" + calculatePrice();
  }
  submitMessage.innerHTML =
    "<p>Order is being submitted....<span id='cancel'>Cancel</span></p>";
    if (condition != true ) {
          condition = true;
          calculateOrder();
    }
  console.log("Prepairing to send Order...");
}

function calculateOrder() {
  wait = setTimeout(function(){
    if (condition) {
      myForm.submit();
      console.log("order sent!");
    }
    console.log("didnt submit...");
  }, 5000);
return false;
}

submitBtn.addEventListener("click", function(){
  updatePrice();
});

submitMessage.addEventListener("click", function(){
  console.log("order canceled!");
  clearTimeout(wait);
  submitMessage.innerText = "Order canceled. (Press submit to re-order)"
});

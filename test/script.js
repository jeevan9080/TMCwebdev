// Validate Toy Name
let toyName = prompt("Enter Toy Name:"); 
if (toyName.length >= 3 && toyName.length <= 20) {
  alert("Toy Name is valid");
} else {
  alert("Toy Name should have minimum of 3 characters and maximum of 20 characters");
}


//Customer Input
let customers = [];
for (let i = 0; i < 5; i++) {
  let price = parseInt(prompt("Enter price for customer " + (i + 1) + ":"));
  let quantity = parseInt(prompt("Enter quantity for customer " + (i + 1) + ":"));
  customers.push({ price: price, quantity: quantity });
}


let totalAmount = 0;
for (let i = 0; i < customers.length; i++) {
  let billAmount = customers[i].price * customers[i].quantity;
  if (billAmount > 5000) {
    billAmount -= billAmount * 0.1; // 10% discount
  } else if (billAmount > 2000) {
    billAmount -= billAmount * 0.05; // 5% discount
  }
  console.log("Customer " + (i + 1) + " Bill Amount: " + billAmount);
  totalAmount += billAmount;
}

alert("Total Amount: " + totalAmount);
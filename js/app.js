const sizes = document.getElementsByClassName("size");
const prices = document.getElementsByClassName("price");
const colors = document.getElementsByClassName("color");
const thumbnail = document.getElementById("thumbnail");
let quantity = document.getElementById("quantity");
const cart = document.getElementById("cart");
const checkout = document.getElementById("checkout");
let totalQuantity = document.getElementById("totalQuantity");
let favorite = document.getElementById("favorite");

let unitPrice = 0;

// product size and unit price
for (const size of sizes) {
  size.addEventListener("click", function () {
    borderColorUnselect();
    size.style.borderColor = "#6576FF";
    size.style.color = "#6576FF";
    // console.log(size.children[0].innerHTML);
    unitPrice = size.children[0].innerHTML;
  });
}

function borderColorUnselect() {
  for (const size of sizes) {
    size.style.borderColor = "#DBDFEA";
    size.style.color = "black";
  }
}

// product quantity
function productQuantityDecrease() {
  let quantityNumber = parseInt(quantity.innerText);
  if (quantityNumber > 0) {
    quantityNumber--;
  }
  quantity.innerText = quantityNumber;
}

function productQuantityIncrease() {
  let quantityNumber = parseInt(quantity.innerText);
  quantityNumber++;
  quantity.innerText = quantityNumber;
}

// product color and thumbnail
for (const color of colors) {
  color.addEventListener("click", function () {
    colorUnselect();
    const borderColor = color.className.match(/bg-\[#([A-Fa-f0-9]{6})\]/);
    color.parentElement.classList.add(
      `border-[#${borderColor[1]}]`,
      "border-2"
    );
    thumbnail.src = `assets/${color.id}.png`;
  });
}

function colorUnselect() {
  for (const color of colors) {
    const borderColor = color.className.match(/bg-\[#([A-Fa-f0-9]{6})\]/);
    color.parentElement.classList.remove(
      "border-2",
      `border-[#${borderColor[1]}]`
    );
  }
}

// checkout section
cart.addEventListener("click", function () {
  let quantityNumber = parseInt(quantity.innerText);
  if (quantityNumber > 0 || parseInt(totalQuantity.innerText) > 0) {
    totalQuantity.innerText =
      parseInt(totalQuantity.innerText) + quantityNumber;
    checkout.classList.remove("hidden");
    checkout.classList.add("flex");
    quantity.innerText = 0;
  }
});

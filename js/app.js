const sizes = document.getElementsByClassName("size");
const price = document.getElementsByClassName("price");
let unitPrice = 0;
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

function productQuantityDecrease() {
  let quantity = document.getElementById("quantity");
  let quantityNumber = parseInt(quantity.innerText);
  if (quantityNumber > 0) {
    quantityNumber--;
  }
  quantity.innerText = quantityNumber;
}

function productQuantityIncrease() {
  let quantity = document.getElementById("quantity");
  let quantityNumber = parseInt(quantity.innerText);
  quantityNumber++;
  quantity.innerText = quantityNumber;
}

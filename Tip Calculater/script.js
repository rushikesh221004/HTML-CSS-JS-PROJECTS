const bill = document.querySelector("#bill");
const tip = document.querySelector("#tip");
const btn = document.querySelector("button");

btn.addEventListener("click", function () {
  let total = document.querySelector("#total");
  let totalAmount =
    Number(bill.value) + Number(bill.value) * (Number(tip.value) / 100);
  total.innerText = totalAmount.toFixed(2);
});

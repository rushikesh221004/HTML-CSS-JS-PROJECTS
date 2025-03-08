const pounds = document.querySelector("#pounds")
let result = document.querySelector(".result")
let kg = document.querySelector(".kg")

pounds.addEventListener("keyup", function() {
    let inKg = Number(pounds.value) * 0.453592
    kg.innerText = inKg.toFixed(2)
})
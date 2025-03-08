const btn = document.querySelector("button")
let vid = document.querySelector(".video")
let close = document.querySelector("i")

btn.addEventListener("click", function () {
    vid.style.display = "block"
})

close.addEventListener("click", function () {
    // console.log("closed")
    vid.style.display = "none"
})
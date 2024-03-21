"use strict"

let lang = document.querySelector(".language");
let currency = document.querySelector(".currency");
let set = document.querySelector(".setting");
let langlist = document.querySelector(".language-list");
let currencylist = document.querySelector(".currency-list");
let settinglist = document.querySelector(".setting-list")


lang.addEventListener("click", function (e) {
    e.preventDefault();
    langlist.classList.toggle("d-none");
    currencylist.classList.add("d-none");
    settinglist.classList.add("d-none");
})

currency.addEventListener("click", function (e) {
    e.preventDefault();
    currencylist.classList.toggle("d-none");
    langlist.classList.add("d-none");
    settinglist.classList.add("d-none");
})

set.addEventListener("click", function (e) {
    e.preventDefault();
    settinglist.classList.toggle("d-none");
    currencylist.classList.add("d-none");
    langlist.classList.add("d-none");
})


// let search = document.querySelector("input").addEventListener("click", function () {
//     this.style.border = "1px solid #0989ff"
// })
"use strict"

let sortPage = document.querySelector(".sort");
let openIcon = document.querySelector(".open");
let closeIcon = document.querySelector(".close");
let sortList = document.querySelector(".sort-list");
let icon = document.querySelector(".sort i");

sortPage.addEventListener("click", function () {
    sortList.classList.toggle("d-none");
    openIcon.classList.add("d-none");
    closeIcon.classList.remove("d-none");
})




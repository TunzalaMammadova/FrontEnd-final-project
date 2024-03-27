"use strict";


let select = document.querySelector(".select-category");
let selectList = document.querySelector(".select-list");
let selectIcon = document.querySelector(".select-category i");

select.addEventListener("click", function () {
    selectList.classList.toggle("d-none");
    selectIcon.classList.toggle("open");
})

let category = document.querySelector(".all-category");
let categoryList = document.querySelector(".all-menu");
let categoryIcon = document.querySelector(".all-category i");

category.addEventListener("click", function () {
    categoryList.classList.toggle("d-none");
    categoryIcon.classList.toggle("open");
})
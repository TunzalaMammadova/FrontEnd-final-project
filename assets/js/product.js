"use strict"

let desc = document.querySelector(".description");
let info = document.querySelector(".information");
let rew = document.querySelector(".review");
let descList = document.querySelector(".desc-title ");
let infoList = document.querySelector(".info ");
let revList = document.querySelector(".rewievs ");

desc.addEventListener("click",function(){
    descList.classList.remove("d-none");
    infoList.classList.add("d-none");
    revList.classList.add("d-none");
    this.style="color:black";
    info.style="color:#a0a2a4";
    rew.style="color:#a0a2a4";
})


info.addEventListener("click",function(){
    descList.classList.add("d-none");
    infoList.classList.remove("d-none");
    revList.classList.add("d-none");
    this.style="color:black";
    desc.style="color:#a0a2a4";
    rew.style="color:#a0a2a4";
})


rew.addEventListener("click",function(){
    descList.classList.add("d-none");
    infoList.classList.add("d-none");
    revList.classList.remove("d-none");
    this.style="color:black";
    desc.style="color:#a0a2a4";
    info.style="color:#a0a2a4";
})
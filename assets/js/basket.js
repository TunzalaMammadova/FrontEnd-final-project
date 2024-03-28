"use strict";

let wish = [];

if (JSON.parse(localStorage.getItem("wish")) == null) {
    localStorage.setItem("wish", JSON.stringify(wish));

} else {

    wish = JSON.parse(localStorage.getItem("wish"));
}

function checkCartForShowDatas(wish) {
    let cartAlert = document.querySelector(".cart-alert");
    let cartTable = document.querySelector(".cart-table");
    if (wish.length == 0) {
        cartAlert.classList.remove("d-none");
        cartTable.classList.add("d-none");

    } else {
        cartAlert.classList.add("d-none");
        cartTable.classList.remove("d-none");
    }
}

checkCartForShowDatas(wish);

getwishCount(wish);

function getwishCount(arr) {
    let wishCount = 0;
    if (arr.length != 0) {
        for (const item of arr) {
            wishCount += item.count;
        }
    }
    document.querySelector(".header-down-right .wish-count").innerText = wishCount;
}


function getwishDatas() {
    let tableBody = document.querySelector("tbody");

    let datas = "";
    wish.forEach(product => {

        datas += `<tr>
        <td> <img src="${product.image}" style="width: 100px; height: 100px;" alt="">
        ${product.name}
        </td>
        <td>${product.price} ₼</td></span>
        <td><button>Add To Cart</button</td>
        <td><p><img src="./assets/images/del.svg" alt=""> Remove<p></i></td>
        </tr>`
    });

    tableBody.innerHTML = datas;
}

getwishDatas();

// function getGrandTotal(datas) {
//     let grandTotal = 0;
//     datas.forEach(data => {
//         grandTotal += (data.price * data.count)
//     });

//     document.querySelector(".total span").innerText = grandTotal;
// }

// getGrandTotal(wish);
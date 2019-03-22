'use strict';

let menu = document.getElementsByClassName("menu")[0],
    menuItem = document.getElementsByClassName("menu-item"),
    title = document.getElementById("title"),
    adv = document.getElementsByClassName("adv")[0],
    promptforApple = document.querySelector("#prompt"),
    menuItemLi = document.createElement("li");


menu.insertBefore(menuItem[2], menuItem[1]); // меняю местами пункты 

menuItemLi.classList.add("menu-item");
menuItemLi.textContent = "Пятый элемент";
menu.appendChild(menuItemLi); // добавляю пятый элемент

document.body.style.backgroundImage = 'url(img/apple_true.jpg)'; // поменял фон
title.textContent = "Мы продаем только подлинную технику Apple"; // поменял надпись

adv.remove(); // удалил рекламу

let yourOpinion = prompt("Ваше отношение к технике Apple?");
    promptforApple.textContent = yourOpinion; // Отношение к технике Apple




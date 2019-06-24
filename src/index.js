//import scss files

import "./scss/style.scss";

import { Popup } from "./libjs/popup.js";

const content = document.querySelector(".content");
const newPopup = new Popup(content);
// console.log(newPopup);

const openBtn = document.querySelector(".js-popup-open");

function openPopup() {
  newPopup.open();
}

openBtn.addEventListener("click", openPopup);

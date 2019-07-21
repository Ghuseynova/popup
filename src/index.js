//import scss files

import "./scss/style.scss";

import { Popup } from "./libjs/popup.js";

const content = document.querySelector(".content");
console.log(content);
const newPopup = new Popup(content);

newPopup.init();
// console.log(newPopup.init);

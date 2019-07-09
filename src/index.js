//import scss files

import "./scss/style.scss";

import { Popup } from "./libjs/popup.js";

const content = document.querySelector("#myPopup");
const newPopup = new Popup(content);

newPopup.open("js-popup-open");

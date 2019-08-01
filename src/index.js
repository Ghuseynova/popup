//import scss files

import "./scss/style.scss";

import { Popup } from "./libjs/popup.js";

const content = document.querySelector(".content"); //It is domNode el

// const markUp = `
//         <h1> String </h1>
//         <p>I am just html markup not domNode el </p>
// `; // It is just html markup

const newPopup = new Popup(content);

newPopup.init();

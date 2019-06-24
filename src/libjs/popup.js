export class Popup {
  constructor(arg) {
    this.popup = null;
    this.container = null;
    this.closeBtn = null;
    this.content = arg;
  }

  close() {
    this.popup.className = "popup";
  }

  open() {
    toBuilt.call(this);
    initEvents.call(this);
    this.popup.classList.add("popup--is-opened");
  }
}

function toBuilt() {
  let content;

  content = this.content;

  this.popup = document.createElement("div");
  this.popup.className = "popup";

  this.container = document.createElement("div");
  this.container.className = "popup__container";

  this.popup.appendChild(this.container);

  this.closeBtn = document.createElement("button");
  this.closeBtn.className = "popup__close";

  this.container.appendChild(this.closeBtn);

  this.container.appendChild(this.content);

  document.querySelector("body").appendChild(this.popup);
}

function initEvents() {
  this.popup.addEventListener("click", this.close.bind(this));
  this.closeBtn.addEventListener("click", this.close.bind(this));
}

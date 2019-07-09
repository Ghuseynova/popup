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

  initEvents(className) {
    const elem = document.querySelector("." + className);

    if (elem) {
      elem.addEventListener("click", () => {
        this.popup.classList.add("popup--is-opened");
      });
    }
    this.popup.addEventListener("click", this.close.bind(this));
    this.closeBtn.addEventListener("click", this.close.bind(this));
  }

  toBuilt() {
    let content;

    content = this.content.innerHTML;

    this.popup = document.createElement("div");
    this.popup.className = "popup";

    this.container = document.createElement("div");
    this.container.className = "popup__container";

    this.popup.appendChild(this.container);

    this.closeBtn = document.createElement("button");
    this.closeBtn.className = "popup__close";

    this.container.appendChild(this.closeBtn);

    this.container.insertAdjacentHTML("beforeend", content);

    document.querySelector("body").appendChild(this.popup);
  }

  open(className) {
    this.toBuilt();
    this.initEvents(className);
  }
}

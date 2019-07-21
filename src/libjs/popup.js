export class Popup {
  constructor(content) {
    this.popup = null;
    this.overlay = null;
    this.container = null;
    this.closeBtn = null;
    this.options = {
      content: content
    };
  }

  close() {
    if (this.popup.classList.contains("is-opened")) {
      this.popup.classList.remove("is-opened");
    }
  }

  _initEvents() {
    const elem = document.querySelector(".js-popup-open");
    if (elem) {
      elem.addEventListener("click", () => {
        this.popup.classList.add("is-opened");
      });
    }

    if (this.closeBtn) {
      this.closeBtn.addEventListener("click", () => this.close());
    }

    if (this.overlay) {
      this.overlay.addEventListener("click", () => this.close());
    }
  }

  _toBuilt() {
    let content;

    if (typeof this.options.content === "string") {
      content = this.options.content;
    } else {
      content = this.options.content;
    }

    this.popup = document.createElement("div");
    this.popup.className = "popup";

    this.overlay = document.createElement("div");
    this.overlay.className = "popup__overlay";
    this.popup.appendChild(this.overlay);

    this.container = document.createElement("div");
    this.container.className = "popup__container";
    this.popup.appendChild(this.container);

    this.content = document.createElement("div");
    this.content.className = "popup__content";
    this.content.appendChild(content);
    this.container.appendChild(this.content);

    this.closeBtn = document.createElement("button");
    this.closeBtn.className = "popup__close";
    this.container.appendChild(this.closeBtn);

    document.querySelector("body").appendChild(this.popup);
  }

  open() {
    this._toBuilt();
    this._initEvents();
  }

  init() {
    this.open();
  }
}

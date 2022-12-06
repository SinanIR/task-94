import EventEmitter from "eventemitter3";

export default class Application extends EventEmitter {
  static get events() {
    return {
      READY: "ready",
    };
  }

  constructor() {
    super();
    this.emojis = [];
    this.banana = "🍌";
    this.emit(Application.events.READY);
  }
  setEmojis(emojis) {
    this.emojis = emojis;
  }

  addBananas() {
   this.emojis = this.emojis.map(e => e + this.banana)
   let p = document.createElement("p");
  p.textContent = app.emojis;
  document.getElementById("emojis").appendChild(p);
  }
}


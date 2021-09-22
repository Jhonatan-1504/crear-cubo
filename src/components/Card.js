import Cubo from "./Cubo.js";
import Result from "./Result.js";
import { createElement } from "../helper/build.js";

export default class Card {
  constructor({ dimension, color }) {
    this.cubo = new Cubo(dimension, color);
    this.result = new Result(this.cubo);
    this.content = createElement({ tag: "div", className: "card" });
  }

  Render() {
    let result = this.result.Render();
    let cubo = this.cubo.Render();

    this.content.appendChild(cubo);
    this.content.appendChild(result);

    document.querySelector("[data-content-cube]").insertAdjacentElement('afterbegin',this.content);
  }
}
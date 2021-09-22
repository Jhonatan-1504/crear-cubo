import { createElement } from "../helper/build.js";

export default class Cubo {
  constructor(dimension, color) {
    this.realDim = dimension;
    this.color = color;
    this.dim = this.getDimension();
    this.params = ["uno", "dos", "tres", "cuatro", "cinco", "seis"];

    this.document = [
      {tag:"div",className:'card-cubo'},
      {tag:"button",className:'btn-animation',text:'inicio'},
      {tag:"span",className:'text-dim',text:`${this.realDim}cm`},
      {tag:"div",className:'cubo'},
    ]

    this.content = this.createElement("div", "card-cubo");
    this.button = this.createElement("button", "btn-animation", "inicio");
    this.spanDim = this.createElement("span", "text-dim", `${this.realDim}cm`);
    this.cubo = this.createElement("div", "cubo");
    this.cubo.style.setProperty("--dimension-cubo", `${this.dim}px`);
  }
  getDimension() {
    if (this.realDim > 200) return 200;
    if (this.realDim < 100) return 100;
    return this.realDim;
  }

  // methods
  AreaBase() {
    return `${Math.pow(this.realDim, 2)}cm²`;
  }

  Perimetro() {
    return `${this.realDim * 12}cm`;
  }

  Diagonal() {
    return `${Math.ceil(Math.pow(3, 1 / 3) * this.realDim, 2)}cm`;
  }

  Volumen() {
    return `${Math.pow(this.realDim, 3)}cm³`;
  }

  // DOM
  createFace(face) {
    let div = createElement({ tag: "div", className: `face ${face}` });
    div.style.setProperty("background-color", this.color);
    return div;
  }

  createElement(tag, className, text = "") {
    let element = document.createElement(tag);
    element.classList.add(className);
    if (text) element.textContent = text;
    return element;
  }

  Render() {
    this.params.map((face) => {
      this.cubo.appendChild(this.createFace(face));
    });

    this.content.appendChild(this.button);
    this.content.appendChild(this.spanDim);
    this.content.appendChild(this.cubo);

    return this.content;
  }
}

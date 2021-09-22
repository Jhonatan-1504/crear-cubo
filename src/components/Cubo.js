import { createElement } from "../helper/build.js";

export default class Cubo {
  constructor(dimension, color) {
    this.realDim = dimension;
    this.color = color;
    this.dim = this.getDimension();
    this.params = ["uno", "dos", "tres", "cuatro", "cinco", "seis"];

    this.components = [
      { tag: "div", className: "card-cubo" },
      { tag: "button", className: "btn-animation", text: "inicio" },
      { tag: "span", className: "text-dim", text: `${this.realDim}cm` },
      { tag: "div", className: "cubo",set:["--face",`${this.dim}px`] },
    ];

    this.listComponents = this.components.map((item) => createElement(item));
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
    return createElement({tag:'div',className:`face ${face}`, set:['background',this.color]})
  }

  Render() {
    let [content,button,text,cubo] = this.listComponents;

    this.params.map((face) => {
      cubo.appendChild(this.createFace(face));
    });

    content.appendChild(button);
    content.appendChild(text);
    content.appendChild(cubo);

    return content;
  }
}

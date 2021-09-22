import { createElement } from "../helper/build.js";

export default class Result {
  constructor(cubo) {
    this.cubo = cubo;
    this.params = [
      { name: "Volumen", result: this.cubo.Volumen() },
      { name: "Area de la Base", result: this.cubo.AreaBase() },
      { name: "Perimetro", result: this.cubo.Perimetro() },
      { name: "Diagonal", result: this.cubo.Diagonal() },
    ];
    this.content = createElement({tag:'div',className:'card-content'})
  }

  createResult({ name, result }) {
    let content = createElement({tag:'div',className:'card-content-result'})
    let title = createElement({tag:'span',className:'title',text:name})
    let resolution = createElement({tag:'span',className:'result',text:result})

    content.appendChild(title);
    content.appendChild(resolution);

    return content;
  }

  Render() {
    this.params.map((item) => {
      this.content.appendChild(this.createResult(item));
    });

    return this.content;
  }
}
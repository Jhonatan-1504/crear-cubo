export default class Result {
  constructor(cubo) {
    this.cubo = cubo;
    this.params = [
      { name: "Volumen", result: this.cubo.Volumen() },
      { name: "Area de la Base", result: this.cubo.AreaBase() },
      { name: "Perimetro", result: this.cubo.Perimetro() },
      { name: "Diagonal", result: this.cubo.Diagonal() },
    ];
    
    this.content = document.createElement("div");
    this.content.classList.add("card-content");
  }

  createElement(tag, className, text = "") {
    let element = document.createElement(tag);
    element.classList.add(className);
    if (text) element.textContent = text;
    return element;
  }

  createResult({ name, result }) {
    let content = this.createElement("div", "card-content-result");
    let title = this.createElement("span", "title", name);
    let resolution = this.createElement("span", "result", result);

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

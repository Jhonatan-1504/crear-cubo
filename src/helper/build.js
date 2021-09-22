class IBuild {
  constructor(tag, className, text = "") {
    this.tag = tag;
    this.className = className;
    this.text = text;
  }
}

export const createElement = ({ className, text, tag } = new IBuild()) => {
  let element = document.createElement(tag);
  element.className = className;
  if (text) element.textContent = text;
  return element;
};

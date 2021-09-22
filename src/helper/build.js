class IBuild {
  constructor(tag, className, text = "", set = []) {
    this.tag = tag;
    this.className = className;
    this.text = text;
    this.set = set;
  }
}

export const createElement = ({ className, text, tag, set } = new IBuild()) => {
  let element = document.createElement(tag);
  element.className = className;
  if (text) element.textContent = text;
  if (set) element.style.setProperty(set[0], set[1]);
  return element;
};
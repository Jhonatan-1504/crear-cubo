import Card from "../components/Card.js";

const frmCubo = document.querySelector("[data-form-cubo]");
const inputColor = document.querySelector("[data-input-color]");
const inputShowColor = document.querySelector("[data-input-show-color]");
const contentCube = document.querySelector("[data-content-cube]");

const useForm = () => {
  return {
    dimension: document.querySelector("[data-input-size]").value,
    color: document.querySelector("[data-input-show-color]").value,
  };
};

const useVerification = ({ dimension, color }) => {
  if (!dimension) return "dimension is import";
  if (!color) return "color is import";
  return;
};

const handlePicker = ({ target: { value } }) => {
  inputShowColor.value = value;
};

const handleAnimation = (ev) => {
  if (ev.target.classList.contains("btn-animation")) {
    ev.target.parentNode.querySelector(".cubo").classList.toggle("active");
  }
  ev.stopPropagation();
};

const handleSubmit = (ev) => {
  ev.preventDefault();
  let newCubo = useForm();
  let msg = useVerification(newCubo);
  if (msg) return alert(msg);
  new Card(newCubo).Render();
  frmCubo.reset();
};

frmCubo.addEventListener("submit", handleSubmit);
inputColor.addEventListener("change", handlePicker);
contentCube.addEventListener("click", handleAnimation);

new Card({ dimension: 150, color: "#fff" }).Render();

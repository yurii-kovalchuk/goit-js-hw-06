function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnRefs = document.querySelector(".change-color");
const nameRefs = document.querySelector(".color");
const bodyRefs = document.querySelector("body");

btnRefs.addEventListener("click", changeColor);

function changeColor() {
  let clr = getRandomHexColor();
  bodyRefs.style.backgroundColor = clr;
  nameRefs.textContent = clr;
}

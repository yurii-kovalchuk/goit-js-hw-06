function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const numRefs = document.querySelector("input");
const createBtnRefs = document.querySelector("[data-create]");
const destroyBtnRefs = document.querySelector("[data-destroy]");
const boxRefs = document.querySelector("#boxes");

createBtnRefs.addEventListener("click", () => createBoxes(numRefs.value));
destroyBtnRefs.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
  let markup = "";
  let length = 30;
  for (let i = 0; i < amount; i += 1) {
    markup += `<div style="background-color: ${getRandomHexColor()}; width: ${length}px; height: ${length}px">
    </div>`;
    length += 10;
  }
  boxRefs.insertAdjacentHTML("afterbegin", markup);
}

function destroyBoxes() {
  boxRefs.innerHTML = "";
}

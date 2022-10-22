const decBtn = document.querySelector('[data-action="decrement"]');
const incBtn = document.querySelector('[data-action="increment"]');
const valueRefs = document.querySelector("#value");
let counterValue = Number(valueRefs.textContent);

decBtn.addEventListener("click", callback);
incBtn.addEventListener("click", callback);

function callback(evt) {
  if (evt.currentTarget.dataset.action === "decrement") {
    counterValue -= 1;
  } else {
    counterValue += 1;
  }
  valueRefs.textContent = counterValue;
}

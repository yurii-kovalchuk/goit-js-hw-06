const inputRefs = document.querySelector("#name-input");
const outputRefs = document.querySelector("#name-output");

inputRefs.addEventListener("input", callback);

function callback(evt) {
  if (evt.currentTarget.value) {
    outputRefs.textContent = evt.currentTarget.value;
  } else {
    outputRefs.textContent = "Anonymous";
  }
}

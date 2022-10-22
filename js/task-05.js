const inputRefs = document.querySelector("#name-input");
const outputRefs = document.querySelector("#name-output");

inputRefs.addEventListener("input", callback);

// 1st method with "inputRefs.value"
//
// function callback() {
//   if (inputRefs.value) {
//     outputRefs.textContent = inputRefs.value;
//   } else {
//     outputRefs.textContent = "Anonymous";
//   }
// }
//
// чи обов’язково застосовувати "evt.currentTarget.value" замість "inputRefs.value" ?

// 2nd method with "evt.currentTarget.value"
//
function callback(evt) {
  if (evt.currentTarget.value) {
    outputRefs.textContent = evt.currentTarget.value;
  } else {
    outputRefs.textContent = "Anonymous";
  }
}

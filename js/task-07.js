const inputRefs = document.querySelector("#font-size-control");
const spanRefs = document.querySelector("#text");

inputRefs.addEventListener(
  "input",
  (evt) => (spanRefs.style.fontSize = `${evt.currentTarget.value}px`)
);

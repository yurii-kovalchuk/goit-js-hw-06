const inputRefs = document.querySelector("#validation-input");

inputRefs.addEventListener("blur", isValid);

function isValid(evt) {
  if (!evt.currentTarget.value.length) {
    evt.currentTarget.classList.remove("invalid");
    evt.currentTarget.classList.remove("valid");
  } else if (
    evt.currentTarget.value.length === Number(evt.currentTarget.dataset.length)
  ) {
    evt.currentTarget.classList.remove("invalid");
    evt.currentTarget.classList.add("valid");
  } else {
    evt.currentTarget.classList.remove("valid");
    evt.currentTarget.classList.add("invalid");
  }
}

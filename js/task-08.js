const formRefs = document.querySelector(".login-form");

formRefs.addEventListener("submit", callback);

function callback(evt) {
  evt.preventDefault();
  const { email, password } = evt.currentTarget.elements;
  if (email.value && password.value) {
    const result = {
      email: email.value,
      password: password.value,
    };
    console.log(result);

    evt.currentTarget.reset();
    return;
  }
  alert("Please fill in all fields!");
}

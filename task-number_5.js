const input = document.querySelector("#name-input");
const span = document.querySelector("#name-output");

input.addEventListener("input", (e) => {
  e.preventDefault();
  if (input.value !== "") {
    span.innerHTML = input.value;
  } else {
    span.innerHTML = "Незнакомец";
  }
});

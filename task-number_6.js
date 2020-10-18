const inpute = document.querySelector("#validation-input");
const data = Number(inpute.getAttribute("data-length"));

console.log();

inpute.addEventListener("change", (e) => {
  if (inpute.value.length === 0) {
    inpute.classList.remove("valid");
    inpute.classList.remove("invalid");
  }

  if (inpute.value.length === data) {
    inpute.classList.remove("invalid");
    inpute.classList.add("valid");
  }
  if (inpute.value.length > data || inpute.value.length < data) {
    inpute.classList.remove("valid");
    inpute.classList.add("invalid");
  }
});
console.log(inpute.value.length);

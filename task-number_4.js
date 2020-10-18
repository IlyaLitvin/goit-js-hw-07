const add = document.querySelector("[data-action='increment']");
const remove = document.querySelector("[data-action='decrement']");
const span = document.querySelector("#value");
let counterValue = 0;

const increment = () => {
  counterValue += 1;
  span.textContent = counterValue;
};
const decrement = () => {
  counterValue -= 1;
  span.textContent = counterValue;
};
add.addEventListener("click", increment);
remove.addEventListener("click", decrement);

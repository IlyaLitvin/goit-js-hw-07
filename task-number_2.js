const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const ul = document.querySelector("#ingredients");
const allIngredients = ingredients.forEach((el) => {
  let list = document.createElement("li");
  list.innerHTML = el;
  ul.append(list);
});

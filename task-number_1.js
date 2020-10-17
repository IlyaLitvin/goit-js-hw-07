const categoriesList = document.querySelectorAll("ul#categories>li.item");
console.log(`В списке ${categoriesList.length} категории`);
categoriesList.forEach((el) => {
  const title = el.querySelector("h2").textContent;
  const items = el.querySelectorAll("li").length;
  console.log(`Категория: ${title} \nКоличество элементов: ${items}`);
});

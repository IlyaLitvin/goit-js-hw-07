// Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое на правильное количество символов.
// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid.

const input = document.querySelector("#validation-input");

input.addEventListener("change", (e) => {
  e.preventDefault();
  if (input.value.length < 6) {
    input.classList.add("#validation-input.invalid");
  } else if (input.value.length >= 6) {
    input.classList.add("#validation-input.valid");
  }
});

console.log(input.value.length);

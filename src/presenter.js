const items = document.querySelector("#cantidad_items");
const form = document.querySelector("#totalizador-form")
const div = document.querySelector("#resultado-div")

form.addEventListener("submit", (event) => {
  event.preventDefault();

  // const firstNumber = Number.parseInt(first.value);

  div.innerHTML = items.value;
});

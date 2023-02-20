const items = document.querySelector("#cantidad_items");
const precio = document.querySelector("#precio_item");
const form = document.querySelector("#totalizador-form")
const precio_resultado = document.querySelector("#precio-span")
const items_resultado = document.querySelector("#items-span")

form.addEventListener("submit", (event) => {
  event.preventDefault();

  // const firstNumber = Number.parseInt(first.value);

  items_resultado.innerHTML = items.value;
  precio_resultado.innerHTML = precio.value;
});

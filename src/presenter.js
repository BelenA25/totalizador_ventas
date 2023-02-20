const items = document.querySelector("#cantidad_items");
const precio = document.querySelector("#precio_item");
const estado = document.querySelector("#estado");
const form = document.querySelector("#totalizador-form")
const precio_neto_resultado = document.querySelector("#precio-neto-span")
const estado_resultado = document.querySelector("#estado-span")
const estado_impuesto_resultado = document.querySelector("#estado-impuesto-span")

form.addEventListener("submit", (event) => {
  event.preventDefault();

  // const firstNumber = Number.parseInt(first.value);

  precio_neto_resultado.innerHTML = precio.value * items.value;
  estado_resultado.innerHTML = estado.value;
  let impuesto;
  switch (estado.value) {
    case "ut":
      impuesto = 6.65; 
      break;
    case "nv":
      impuesto = 8; 
      break;
    case "tx":
      impuesto = 6.25; 
      break;
    case "al":
      impuesto = 4; 
      break;
    case "ca":
      impuesto = 8.25; 
      break;
  }
  estado_impuesto_resultado.innerHTML = impuesto;
});

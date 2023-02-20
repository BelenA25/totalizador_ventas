const items = document.querySelector("#cantidad_items");
const precio = document.querySelector("#precio_item");
const estado = document.querySelector("#estado");
const form = document.querySelector("#totalizador-form")
const precio_neto_resultado = document.querySelector("#precio-neto-span")
const estado_impuesto_resultado = document.querySelector("#estado-impuesto-span")
const estado_seleccionado = document.querySelector("#estado-seleccionado")
const impuesto_resultado = document.querySelector("#impuesto-seleccionado")
const precio_total_resultado = document.querySelector("#precio-total-span")

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let precioNeto = precio.value * items.value;
  precio_neto_resultado.innerHTML = precioNeto;
  let impuesto;
  let precioTotal;
  let tasaImpuesto;
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
  tasaImpuesto = (precioNeto * (impuesto / 100));
  estado_impuesto_resultado.innerHTML = tasaImpuesto;
  estado_seleccionado.innerHTML = estado.value;
  impuesto_resultado.innerHTML = impuesto;

  
  precioTotal = (precioNeto) + tasaImpuesto;


  precio_total_resultado.innerHTML = precioTotal;
});

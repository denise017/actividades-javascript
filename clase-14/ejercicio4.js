const prompt = require("prompt-sync")();

// funcion flecha para total con descuento
const calcularTotal = (cantidad, precio) => {
  let total = cantidad * precio;

  if (cantidad > 5) {
    return total * 0.9;
  }

  return total;
};

// ingreso de datos
let cantidad = parseInt(prompt("cantidad de productos: "));
let precioUnitario = parseFloat(prompt("precio unitario: "));

// ejecucion
console.log("total a pagar: " + calcularTotal(cantidad, precioUnitario));
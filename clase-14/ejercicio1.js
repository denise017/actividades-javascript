const prompt = require('prompt-sync')();
// funcion flecha para calcular precio con iva
const calcularPrecioConIva = (precio, porcentaje) => precio + (precio * porcentaje / 100);
// ingreso de datos
let precioProducto = parseFloat(prompt("ingresa el precio del producto: "));
let porcentajeIva = parseFloat(prompt("ingresa el porcentaje de iva: "));
// ejecucion
console.log("el precio final es: " + calcularPrecioConIva(precioProducto, porcentajeIva));

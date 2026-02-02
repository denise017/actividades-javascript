const prompt = require('prompt-sync')();

// funcion flecha para calcular total
const calcularPrecioConIva = (valor, iva) => valor + (valor * iva / 100);

// datos de entrada
let costo = parseFloat(prompt("ingresa el precio del producto: "));
let ivaIngresado = parseFloat(prompt("ingresa el porcentaje de iva: "));

// salida
let resultadoFinal = calcularPrecioConIva(costo, ivaIngresado);
console.log("el precio final es: " + resultadoFinal);

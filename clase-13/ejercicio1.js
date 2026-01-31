const prompt = require('prompt-sync')();

// funcion declarada que calcula el area de un triangulo
function calcularAreaTriangulo(base, altura) {
  return (base * altura) / 2;
}

// ingreso de datos por consola
let base = parseFloat(prompt("ingresa la base: "));
let altura = parseFloat(prompt("ingresa la altura: "));

// llamada a la funcion y muestra del resultado
console.log("el area del triangulo es:", calcularAreaTriangulo(base, altura));

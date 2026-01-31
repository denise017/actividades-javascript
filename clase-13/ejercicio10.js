const prompt = require('prompt-sync')();

// funcion expresada que calcula el factorial de un numero
const calcularFactorial = function(numero) {
  let resultado = 1;

  for (let i = 1; i <= numero; i++) {
    resultado *= i;
  }

  return resultado;
};

// ingreso del numero
let num = parseInt(prompt("ingresa un numero: "));

// muestra del factorial
console.log("el factorial es:", calcularFactorial(num));

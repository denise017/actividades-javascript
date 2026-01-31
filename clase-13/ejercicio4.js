const prompt = require('prompt-sync')();

// funcion declarada que evalua si un numero es par o impar
function esPar(numero) {
  let resultado;

  if (numero % 2 === 0) {
    resultado = "es par";
  } else {
    resultado = "es impar";
  }

  return resultado;
}

// ingreso del numero
let numero = parseInt(prompt("ingresa un numero: "));

// muestra del resultado
console.log(esPar(numero));

const prompt = require("prompt-sync")();

let numeros = [2, 4, 6, 8];

// crear nuevo array con numeros al cuadrado
let resultado = numeros.map(function(item) {
  return item ** 2;
});

console.log(resultado);
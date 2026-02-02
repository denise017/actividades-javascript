const prompt = require("prompt-sync")();
// ejercicio 3 encontrar el primer numero mayor a 10

let numeros = [5, 8, 12, 20, 3];

// buscar el primer numero mayor a 10
let encontrado = numeros.find(function(dato) {
  return dato > 10;
});

console.log(encontrado);
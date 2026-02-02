const prompt = require("prompt-sync")();
// ejercicio 2 filtra los numeros pares de una lista
// se deben guardar solo los numeros divisibles por dos

// usamos filter para quedarnos solo con los pares

let numeros = [1, 2, 3, 4, 5, 6];
// guardar solo los numeros pares
let soloPares = numeros.filter(function(valor) {
  return valor % 2 === 0;
});

console.log(soloPares);
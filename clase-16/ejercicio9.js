const prompt = require("prompt-sync")();
// ejercicio 9 contar la cantidad total de letras

let palabras = ["sol", "luna", "estrella"];

// sumar cantidad de letras
let letras = palabras.reduce(function(contador, palabra) {
  return contador + palabra.length;
}, 0);

console.log(letras);
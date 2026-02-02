const prompt = require("prompt-sync")();
// ejercicio 6 agregar prefijo y sufijo a cada palabra

let palabras = ['hola', 'mundo', 'javascript'];

// map crea un nuevo array transformado
let modificadas = palabras.map(function(texto) {
  return "¡" + texto + "!";
});

console.log(modificadas);
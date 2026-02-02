const prompt = require("prompt-sync")();
// ejercicio 8 buscar un nombre especifico

let nombres = ["Carlos", "Daniel", "Laura", "Ana"];

// buscar nombre especifico
let buscado = nombres.find(function(item) {
  return item === "Laura";
});

console.log(buscado);
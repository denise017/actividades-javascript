const prompt = require("prompt-sync")();
// ejercicio 7 filtrar nombres que empiecen con la letra a

let nombres = ["Ana", "Luis", "Andrea", "Maria"];

// filtrar nombres que empiezan con a
let conA = nombres.filter(function(persona) {
  return persona.startsWith("A");
});

console.log(conA);
const prompt = require("prompt-sync")();

// frase original
let frase = "los gatos son geniales";

// extraer palabra gatos
let parte = frase.slice(4, 9);

// mostrar resultado
console.log(parte);

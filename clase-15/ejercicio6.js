const prompt = require("prompt-sync")();

// array de numeros
let numeros = [2, 5, 7, 2, 8, 7];

// buscar ultima posicion del numero 7
let ultimaPosicion = numeros.lastIndexOf(7);

// mostrar resultado
console.log("ultima posicion del 7: " + ultimaPosicion);

const prompt = require("prompt-sync")()

let = Numerox = parseInt (prompt("Ingresa un numero"));
let contador = 0;

// Recorremos desde 0 hasta x
for (let i = 0; i <= Numerox; i++) {
  if (i % 2 !== 0) {
    contador++
  }
}

console.log("La cantidad de numeros impares desde 0 hasta " + Numerox + " es " + contador);

const prompt = require("prompt-sync")();

// array vacio
let floresFavoritas = [];

// carga manual
floresFavoritas[0] = prompt("flor favorita 1: ");
floresFavoritas[1] = prompt("flor favorita 2: ");
floresFavoritas[2] = prompt("flor favorita 3: ");

// flor a buscar
let florBuscar = prompt("flor a buscar: ");

// contador
let contador = 0;

// recorrido
for (let i = 0; i < floresFavoritas.length; i++) {
  if (floresFavoritas[i] === florBuscar) {
    contador++;
  }
}

// salida
console.log("aparece " + contador + " veces");

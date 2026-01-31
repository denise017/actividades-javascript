const prompt = require("prompt-sync")()

let nombres = []

// Guardamos los nombres en el array

for (let i = 0; i < 5; i++) {
  nombres[i] = prompt("Ingresa un nombre")
}

let buscar = prompt("Ingresa un nombre a buscar")
let encontrado = false

// Verificamos si el nombre existe
for (let i = 0; i < nombres.length; i++) {
  if (nombres[i] === buscar) {
    encontrado = true
    break;
  }
}
if (encontrado) {
    console.log("El nombre ingresado si esta en la lista.");
} else {
    console.log("El nombre ingresado no esta en la lista.");
}

const prompt = require("prompt-sync")();

let nombre = prompt("Ingresa tu nombre: ");
let edad = prompt("Ingresa tu edad: ");
let peso = prompt("Ingresa tu peso: ");

console.log("Hola " + nombre + ", tenes " + edad + " anios y pesas " + peso + " kg");

const prompt = require("prompt-sync")();

const EDAD_MINIMA = 18;
const EDAD_MAXIMA = 99;

let edad = parseInt(prompt("Ingresa tu edad: "));

if (edad >= EDAD_MINIMA && edad <= EDAD_MAXIMA) {
  console.log("Edad valida");
} else {
  console.log("Edad fuera del rango permitido");
}

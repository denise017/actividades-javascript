const prompt = require("prompt-sync")();

let celsius = parseFloat(prompt("Ingresa temperatura en celsius: "));
let fahrenheit = celsius * 9 / 5 + 32;

console.log("Fahrenheit:", fahrenheit);

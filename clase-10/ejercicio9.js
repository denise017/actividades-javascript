const prompt = require("prompt-sync")();

let peso = parseFloat(prompt("Ingresa tu peso: "));
let altura = parseFloat(prompt("Ingresa tu altura: "));

let imc = peso / (altura * altura);

console.log("Tu IMC es:", imc);

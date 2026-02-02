const prompt = require('prompt-sync')();
// funcion flecha para promedio
const calcularPromedio = (a, b, c, d, e) => (a + b + c + d + e) / 5;

// entradas
let notaA = parseFloat(prompt("nota 1: "));
let notaB = parseFloat(prompt("nota 2: "));
let notaC = parseFloat(prompt("nota 3: "));
let notaD = parseFloat(prompt("nota 4: "));
let notaE = parseFloat(prompt("nota 5: "));

// salida
console.log("el promedio es: " + calcularPromedio(notaA, notaB, notaC, notaD, notaE));

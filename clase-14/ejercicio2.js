const prompt = require('prompt-sync')();
// funcion flecha para promedio
const calcularPromedio = (n1, n2, n3, n4, n5) => (n1 + n2 + n3 + n4 + n5) / 5;
// ingreso de datos
let c1 = parseFloat(prompt("calificacion 1: "));
let c2 = parseFloat(prompt("calificacion 2: "));
let c3 = parseFloat(prompt("calificacion 3: "));
let c4 = parseFloat(prompt("calificacion 4: "));
let c5 = parseFloat(prompt("calificacion 5: "));
// ejecucion
console.log("el promedio es: " + calcularPromedio(c1, c2, c3, c4, c5));
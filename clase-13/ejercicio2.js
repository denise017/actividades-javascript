const prompt = require('prompt-sync')();

// funcion expresada que compara dos numeros
const encontrarMayor = function(a, b) {
  if (a > b) {
    return a;
  } else if (b > a) {
    return b;
  } else {
    return "son iguales";
  }
};

// ingreso de valores
let num1 = parseFloat(prompt("ingresa el primer numero: "));
let num2 = parseFloat(prompt("ingresa el segundo numero: "));

// resultado por consola
console.log("el numero mayor es:", encontrarMayor(num1, num2));

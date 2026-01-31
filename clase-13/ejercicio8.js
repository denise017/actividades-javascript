const prompt = require('prompt-sync')();

// funcion expresada que convierte celsius a fahrenheit
const convertirCelsiusAFahrenheit = function(celsius) {
  return (celsius * 9 / 5) + 32;
};

// ingreso de temperatura
let grados = parseFloat(prompt("ingresa los grados celsius: "));

// resultado convertido
console.log("equivalen a", convertirCelsiusAFahrenheit(grados), "f");

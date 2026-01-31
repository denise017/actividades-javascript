const prompt = require("prompt-sync")();

let suma = 0;
let numero = Number(prompt("Ingresa un numero"));
console.log("--- Sumadora de Números ---");
console.log("Ingresá números positivos para sumar. Ingresá un negativo para terminar.");

while (numero >= 0) {
  suma += numero;
  numero = parseFloat(prompt("Ingresá un número: "));
      if (numero >= 0) {
                suma = suma + numero; 
      }

}

console.log("La suma total es " + suma);

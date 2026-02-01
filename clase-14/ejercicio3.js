const prompt = require("prompt-sync")();

// funcion flecha con condicionales
const clasificarEdad = edad => {
  if (edad < 13) return "nino";
  if (edad < 18) return "adolescente";
  if (edad < 60) return "adulto";
  return "adulto mayor";
};

// ingreso de datos
let edad = parseInt(prompt("ingresa tu edad: "));

// ejecucion
console.log("clasificacion: " + clasificarEdad(edad));

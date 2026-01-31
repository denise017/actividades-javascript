const prompt = require('prompt-sync')();

// funcion expresada que concatena nombre y apellido
const concatenarNombres = function(nombre, apellido) {
  return nombre + " " + apellido;
};

// ingreso de datos
let nombre = prompt("ingresa tu nombre: ");
let apellido = prompt("ingresa tu apellido: ");

// salida por consola
console.log("nombre completo:", concatenarNombres(nombre, apellido));

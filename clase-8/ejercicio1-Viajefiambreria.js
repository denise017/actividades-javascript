//Viaje a la Fiambreria
const prompt = require("prompt-sync")({ sigint: true });

// Variables ingresadas por el usuario
let temperatura = parseFloat(prompt("Ingrese la temperatura actual: "));
let estaLloviendo = prompt("Esta lloviendo? (si/no): ");
let pisoAscensor = parseInt(prompt("En que piso esta el ascensor?: "));
let horaActual = parseInt(prompt("Ingrese la hora actual (0 a 23): "));

// Variables definidas en el archivo
const horaApertura = 9;
const horaCierre = 18;
const cantidadQueso = 150;
let deudaConMonica = 0;

// Mostrar datos
console.log("Temperatura:", temperatura);
console.log("Esta lloviendo:", estaLloviendo);
console.log("Piso del ascensor:", pisoAscensor);

// Verificar si la fiambreria esta abierta
if (horaActual >= horaApertura && horaActual <= horaCierre) {
  console.log("La fiambreria esta abierta");
  console.log("Compraste", cantidadQueso, "gramos de queso");

  deudaConMonica = 500;
  console.log("Deuda con Monica:", deudaConMonica);
} else {
  console.log("La fiambreria esta cerrada");
}

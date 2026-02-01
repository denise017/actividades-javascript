const prompt = require("prompt-sync")();

// fila inicial de mascotas
let mascotas = ["perro", "gato", "conejo"];

// agregar mascota al inicio
mascotas.unshift("hamster");

// atender primera mascota
let atendido = mascotas.shift();

// mostrar mascota atendida
console.log("mascota atendida: " + atendido);

// mostrar fila actual
console.log(mascotas);

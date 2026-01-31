const prompt = require('prompt-sync')();

let notas = []; 


let cantidadDeEstudiantes = 5; 

console.log("Estas son las notas de " + cantidadDeEstudiantes + " estudiantes.");
for (let i = 0; i < cantidadDeEstudiantes; i++) {
    notas[i] = parseFloat(prompt("Ingresá la nota del estudiante " + (i + 1) + ": "));
console.log("Notas Ingresadas");
console.log(notas);
}
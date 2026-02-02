const prompt = require('prompt-sync')();
//ingresamos datos del estudiante
let estudiante = {
    nombre: "Denise",
    edad: 27,
    notas: [6, 7, 8, 9, 7]
};

// funcion solicitada
function procesarEstudiante(estudiante) {

    // agregar una nueva nota
    estudiante.notas.push(10);

    // eliminar la primera nota
    estudiante.notas.shift();

    // sumar todas las notas
    let totalNotas = estudiante.notas.reduce((total, valor) => total + valor, 0);

    // calcular promedio
    let promedioFinal = totalNotas / estudiante.notas.length;

    // convertir nombre a mayusculas
    let nombreEnMayusculas = estudiante.nombre.toUpperCase();

    // devolver nuevo objeto
    return {
        nombre: nombreEnMayusculas,
        promedio: promedioFinal
    };
}

//  ejecucion
console.log(procesarEstudiante(estudiante));
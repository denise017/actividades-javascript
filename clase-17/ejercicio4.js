const prompt = require('prompt-sync')();

//  ingreso de datos
let entrada = prompt("ingresa los nombres separados por comas: ");

//  funcion solicitada
function transformarYAnalizarNombres(entrada) {

    // separar la cadena en nombres
    let nombresSeparados = entrada.split(",");

    // quitar espacios en blanco
    let nombresLimpios = nombresSeparados.map(nombre => nombre.trim());

    // verificar si existe Juan
    let existeJuan = nombresLimpios.includes("Juan");

    // reemplazar Maria por Ana
    let nombresReemplazados = nombresLimpios.map(nombre => {
        if (nombre === "Maria") {
            return "Ana";
        } else {
            return nombre;
        }
    });

    // buscar indice de Pedro
    let indicePedro = nombresReemplazados.indexOf("Pedro");

    // ordenar alfabeticamente y unir con puntos
    let nombresFinales = nombresReemplazados.sort().join(".");

    // salida
    console.log("existe juan:", existeJuan);
    console.log("indice de pedro:", indicePedro);
    console.log("nombres ordenados:", nombresFinales);
}

//  ejecucion
transformarYAnalizarNombres(entrada);

const prompt = require('prompt-sync')();

// ingreso de datos
let oracion = prompt("ingresa una oracion: ");

// funcion solicitada
function procesarOracion(oracion) {

    // quitar espacios al inicio y al final
    let textoRecortado = oracion.trim();

    // dividir la oracion en palabras
    let listaPalabras = textoRecortado.split(" ");

    // reemplazar todas las letras 'a' por '@'
    let textoReemplazado = textoRecortado.replace(/a/g, "@");

    // buscar la posicion de la palabra javascript
    let indiceJavascript = textoRecortado.indexOf("javascript");

    // unir las palabras con guiones
    let textoConGuiones = listaPalabras.join("-");

    // mostrar resultados
    console.log("oracion modificada:", textoReemplazado);
    console.log("posicion de javascript:", indiceJavascript);
    console.log("oracion con guiones:", textoConGuiones);
}

//ejecucion
procesarOracion(oracion);
const prompt = require("prompt-sync")();

// array de frases
let frases = [
    "el clima es MALO hoy",
    "este libro es muy MALO",
    "El servicio aqui es MALO"
];

//  funcion solicitada
function procesarFrases(frases) {

    let frasesFinales = frases.map(texto => {

        // pasar a minusculas
        let textoMinuscula = texto.toLowerCase();

        // separar en palabras
        let palabras = textoMinuscula.split(" ");

        // reemplazar malo por bueno
        let palabrasModificadas = palabras.map(palabra => {
            if (palabra === "malo") {
                return "bueno";
            } else {
                return palabra;
            }
        });

        // unir palabras
        return palabrasModificadas.join(" ");
    });

    return frasesFinales;
}

console.log(procesarFrases(frases));
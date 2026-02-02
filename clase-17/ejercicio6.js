const prompt = require("prompt-sync")();

//  dato inicial
let entrada = "Toyota, HOnda, Ford, Chevrolet, Nissan";

// funcion solicitada
function gestionarAutos(entrada) {

    // separar marcas
    let listaMarcas = entrada.split(",");

    // limpiar espacios
    let marcasLimpias = listaMarcas.map(marca => marca.trim());

    // verificar si existe tesla
    let existeTesla = marcasLimpias.includes("Tesla");

    // reemplazar ford por bmw
    let marcasCambiadas = marcasLimpias.map(marca => {
        if (marca === "Ford") {
            return "BMW";
        } else {
            return marca;
        }
    });

    // buscar indice de chevrolet
    let indiceChevrolet = marcasCambiadas.indexOf("Chevrolet");

    // ordenar y unir
    let marcasOrdenadas = marcasCambiadas.sort().join(".");

    // salida
    console.log("existe tesla:", existeTesla);
    console.log("indice de chevrolet:", indiceChevrolet);
    console.log("marcas finales:", marcasOrdenadas);
}

//  ejecucion
gestionarAutos(entrada);

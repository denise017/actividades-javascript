const prompt = require("prompt-sync")();

// datos iniciales
let entrada = "rosa, tulipan, orquidea, lirio";

// funcion principal
function gestionarFloreria(entrada) {
  // pasar string a array
  let lista = entrada.split(",");

  // limpiar espacios
  let listaLimpia = lista.map(item => item.trim());

  // verificar si existe margarita
  let existe = listaLimpia.includes("margarita");
  if (!existe) {
    listaLimpia.push("azucena");
  }

  // reemplazo simple
  let resultado = [];
  for (let i = 0; i < listaLimpia.length; i++) {
    if (listaLimpia[i] === "orquidea") {
      resultado.push("clavel");
    } else {
      resultado.push(listaLimpia[i]);
    }
  }

  // buscar girasol
  let posicion = resultado.indexOf("girasol");
  if (posicion === -1) {
    resultado.unshift("girasol");
  }

  // ordenar y unir
  let salida = resultado.sort().join(".");

  // mostrar resultado
  console.log("flores finales:", salida);
}

// ejecucion
gestionarFloreria(entrada);
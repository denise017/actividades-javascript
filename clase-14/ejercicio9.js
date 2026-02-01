// array de modelos
let modelosAutos = ["fiat", "ford", "chevrolet", "ford", "toyota", "ford"];

// funcion para buscar ultima aparicion
function ultimaAparicionModeloAuto(modelo) {
  let posicion = -1;

  for (let i = 0; i < modelosAutos.length; i++) {
    if (modelosAutos[i] === modelo) {
      posicion = i + 1;
    }
  }

  if (posicion !== -1) {
    console.log("ultima posicion: " + posicion);
  } else {
    console.log("modelo no encontrado");
  }
}

// ejecucion
ultimaAparicionModeloAuto("ford");

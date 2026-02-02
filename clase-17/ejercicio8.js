const prompt = require("prompt-sync")();

// lista ordenada
let list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

// funcion de busqueda
function busquedaBinaria(array, elemento) {
  let desde = 0;
  let hasta = array.length - 1;

  while (desde <= hasta) {
    let medio = Math.floor((desde + hasta) / 2);

    if (array[medio] === elemento) {
      return medio;
    }

    if (array[medio] < elemento) {
      desde = medio + 1;
    } else {
      hasta = medio - 1;
    }
  }

  return -1;
}

// pruebas
console.log("posicion del 1:", busquedaBinaria(list, 1));
console.log("posicion del 5:", busquedaBinaria(list, 5));
console.log("posicion del 6:", busquedaBinaria(list, 6));
console.log("posicion del 9:", busquedaBinaria(list, 9));
console.log("posicion del 11:", busquedaBinaria(list, 11));
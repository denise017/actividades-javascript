const prompt = require("prompt-sync")();

// lista desordenada
let list = [12, 3, 5, 7, 1, 22, 47, 100];

// bubble sort
function bubbleSort(array) {
  let largo = array.length;

  for (let a = 0; a < largo - 1; a++) {
    for (let b = 0; b < largo - a - 1; b++) {
      if (array[b] > array[b + 1]) {
        let aux = array[b];
        array[b] = array[b + 1];
        array[b + 1] = aux;
      }
    }
  }

  return array;
}

// busqueda binaria
function busquedaBinaria(array, elemento) {
  let inicio = 0;
  let fin = array.length - 1;

  while (inicio <= fin) {
    let mitad = Math.floor((inicio + fin) / 2);

    if (array[mitad] === elemento) {
      return mitad;
    }

    if (array[mitad] < elemento) {
      inicio = mitad + 1;
    } else {
      fin = mitad - 1;
    }
  }

  return -1;
}

// ordenar primero
let listaOrdenada = bubbleSort(list);
console.log("lista ordenada:", listaOrdenada);

// buscar despues
console.log("posicion del 12:", busquedaBinaria(listaOrdenada, 12));
console.log("posicion del 5:", busquedaBinaria(listaOrdenada, 5));
console.log("posicion del 22:", busquedaBinaria(listaOrdenada, 22));
console.log("posicion del 100:", busquedaBinaria(listaOrdenada, 100));
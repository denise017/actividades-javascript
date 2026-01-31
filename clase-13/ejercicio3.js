const prompt = require('prompt-sync')();
// variable global
let saludoGlobal = "hola desde el scope global";

function mostrarMensaje() {
  // variable local
  let saludoLocal = "hola desde el scope local";
  console.log(saludoGlobal);
  console.log(saludoLocal);
}

// ejecucion de la funcion
mostrarMensaje();

// acceso solo a la variable global
console.log(saludoGlobal);

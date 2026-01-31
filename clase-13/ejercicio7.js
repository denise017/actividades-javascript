const prompt = require('prompt-sync')();
// variable global con la hora actual
let horaActual = 14;

// funcion que muestra un saludo segun la hora
function mostrarSaludo() {
  if (horaActual < 12) {
    console.log("buenos dias");
  } else if (horaActual < 18) {
    console.log("buenas tardes");
  } else {
    console.log("buenas noches");
  }
}

// ejecucion de la funcion
mostrarSaludo();

const prompt = require('prompt-sync')();

// funcion declarada para convertir horas en minutos
function convertirHorasAMinutos(horas) {
  return horas * 60;
}

// ingreso de horas
let horas = parseFloat(prompt("ingresa la cantidad de horas: "));

// resultado
console.log("son", convertirHorasAMinutos(horas), "minutos");

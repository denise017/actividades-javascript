const prompt = require('prompt-sync')();

// funcion que imprime numeros del 1 hasta el limite
function contarHasta(numero) {
  for (let i = 1; i <= numero; i++) {
    console.log(i);
  }
}

// ingreso del limite
let limite = parseInt(prompt("hasta que numero contar?: "));

// llamada a la funcion
contarHasta(limite);

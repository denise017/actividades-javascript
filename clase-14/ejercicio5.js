const prompt = require("prompt-sync")();

// funcion flecha para verificar marca
const origenAuto = marca => {
  let marcaLower = marca.toLowerCase();

  if (marcaLower === "chevrolet" || marcaLower === "ford" || marcaLower === "fiat") {
    return "origen nacional";
  }

  return "origen importado";
};

// ingreso de datos
let marca = prompt("ingresa la marca del auto: ");

// ejecucion
console.log(origenAuto(marca));
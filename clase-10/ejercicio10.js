const prompt = require("prompt-sync")();

let precioOriginal = parseFloat(prompt("Precio original: "));
let porcentajeDescuento = parseFloat(prompt("Descuento %: "));

let montoDescuento = precioOriginal * (porcentajeDescuento / 100);
let precioFinal = precioOriginal - montoDescuento;

console.log("Precio final:", precioFinal);

const prompt = require("prompt-sync")();

// lista de comidas
let comidas = ["pizza", "hamburguesa", "tacos"];

// verificar si existe sushi
let tieneSushi = comidas.includes("sushi");

// mostrar resultado
if (tieneSushi) {
  console.log("sushi esta en la lista");
} else {
  console.log("sushi no esta en la lista");
}

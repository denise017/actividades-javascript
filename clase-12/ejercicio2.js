const prompt = require("prompt-sync")()

let password;

// Pedimos la contraseña hasta que sea correcta
do {
  password = prompt("Ingresa la contraseña");
} while (password !== "1234");

console.log("Contraseña correcta");

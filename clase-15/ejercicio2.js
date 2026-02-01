const prompt = require("prompt-sync")();

// lista de invitados
let invitados = ["ana", "juan", "carlos", "sofia"];

// eliminar ultimo elemento
let eliminado = invitados.pop();

// mostrar eliminado
console.log("invitado eliminado: " + eliminado);

// mostrar lista final
console.log(invitados);

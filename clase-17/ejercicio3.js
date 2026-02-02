const prompt = require("prompt-sync")();

// creamos un arreglo de objetos llamado 'productos'
// cada objeto representa un producto con nombre y precio
let productos = [
    { nombre: "arroz", precio: 80 },
    { nombre: "fideos", precio: 65 },
    { nombre: "aceite", precio: 120 },
    { nombre: "azucar", precio: 70 }
]

function gestionarProductos(productos) {

    // se agrega un nuevo producto al final del array
    productos.push({ nombre: "sal", precio: 50 });

    // se elimina el ultimo elemento del array
    productos.pop();

    // Buscamos el índice del producto llamado "aceite"
    let posicionAceite = productos.findIndex(item => item.nombre === "aceite");

    // resultado:
    console.log("Indice del producto aceite:", posicionAceite);
}
 
// llamamos a la funcion
gestionarProductos(productos);
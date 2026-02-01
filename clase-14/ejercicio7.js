// objetos libro
let libro1 = {
  titulo: "el principito",
  autor: "antoine de saint exupery",
  anioPublicacion: 1943
};

let libro2 = {
  titulo: "harry potter",
  autor: "j k rowling",
  anioPublicacion: 1997
};

// funcion para mostrar libros
function mostrarLibro(libros) {
  for (let i = 0; i < libros.length; i++) {
    console.log(
      "titulo: " + libros[i].titulo +
      " autor: " + libros[i].autor +
      " anio: " + libros[i].anioPublicacion
    );
  }
}

// array de libros
let biblioteca = [libro1, libro2];

// ejecucion
mostrarLibro(biblioteca);
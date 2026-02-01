// objeto literal deportista
let deportista = {
  nombre: "messi",
  energia: 100,
  experiencia: 10,

  // metodo para entrenar
  entrenarHoras: function (horas) {
    this.energia -= horas * 5;
    this.experiencia += horas * 2;
  }
};

// estado inicial
console.log(deportista.energia);
console.log(deportista.experiencia);

// ejecucion del metodo
deportista.entrenarHoras(2);

// estado final
console.log(deportista.energia);
console.log(deportista.experiencia);
const prompt = require("prompt-sync")()

let matriz = [
  [10, 3, 2, 1, 4, 7],
  [5, 5, 10, 100, 4],
  [5, 125, 10, 1020, 4],
  [5, 5, 5097, 100, 4]
]

let suma = 0

// Recorremos la matriz
for (let i = 0; i < matriz.length; i++) {
  for (let j = 0; j < matriz[i].length; j++) {
    let valor = matriz[i][j]
    if (valor >= 10 && valor < 1000) {
      suma += valor
    }
  }
}

console.log("La suma es " + suma)

//La suma da 355

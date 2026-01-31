const prompt = require("prompt-sync")()

let matriz = []
let contador = 1

// Creamos la matriz usando push
for (let i = 0; i < 10; i++) {
  let fila = []

  for (let j = 0; j < 10; j++) {
    fila.push(contador)
    contador++
  }

  matriz.push(fila)
}

function sumarRojo(matriz) {
  let suma = 0

  for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
      if (i === j) {
        suma += matriz[i][j]
      }
    }
  }

  return suma
}

function sumarVerde(matriz) {
  let suma = 0

  for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
      if (i + j === matriz.length - 1) {
        suma += matriz[i][j]
      }
    }
  }

  return suma
}

console.log("Suma Diagonal Roja: " + sumarRojo(matriz))
console.log("Suma Diagonal Verde: " + sumarVerde(matriz))

//ambos resultados dan 505
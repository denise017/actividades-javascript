const prompt = require('prompt-sync')();

let gastos = [
    [1135, 2500, 900, 1600, 2800, 650, 1100],
    [1750, 1890, 1900, 1300, 898, 1750, 2800],
    [1700, 1150, 1690, 1900, 1770, 500, 2560],
    [800, 1250, 1430, 2100, 1980, 1270, 950]
];

// A) Total de una semana
console.log("Consultar gastos por semana");
let semanaconsultada = parseInt(prompt("Elegi el numero de semana para ver gastos (1-4): ")) - 1;
let totalsemana = 0;
for (let j = 0; j < 7; j++) {
    totalsemana += gastos[semanaconsultada][j];
}
console.log("El total de gastos de la semana " + (semanaconsultada + 1) + " es: $" + totalsemana);

// B) Total de un día
console.log("Consultar gastos por dia");
let diaconsultado = parseInt(prompt("Elegi el numero de dia para ver gastos (1-7): ")) - 1;
let totaldia = 0;
for (let i = 0; i < 4; i++) {
    totaldia += gastos[i][diaconsultado];
}
console.log("El total de gastos del dia" + (diaconsultado + 1) + " es: $" + totaldia);

// C) Total del mes
console.log("Gastos total del mes");
let totalmes = 0;
for (let i = 0; i < gastos.length; i++) {
    for (let j = 0; j < gastos[i].length; j++) {
        totalmes += gastos[i][j];
    }
}
console.log("El gasto total del mes fue: $" + totalmes);

// D) Semana más gastadora
console.log("Estadisticas: records de gastos");
let maxgastosemanal = 0;
let semanamasgastadora = 0;
for (let i = 0; i < gastos.length; i++) {
    let sumaFila = 0;
    for (let j = 0; j < 7; j++) {
        sumaFila += gastos[i][j];
    }
    if (sumaFila > maxgastosemanal) {
        maxgastosemanal = sumaFila;
        semanamasgastadora = i + 1;
    }
}
console.log("La semana con más gastos fue la Semana " + semanamasgastadora + " con $" + maxgastosemanal);

// Día más gastador
let maxgastodiario = 0;
let diamasgastador = 0;
for (let j = 0; j < 7; j++) {
    let sumaColumna = 0;
    for (let i = 0; i < 4; i++) {
        sumaColumna += gastos[i][j];
    }
    if (sumaColumna > maxgastodiario) {
        maxgastodiario = sumaColumna;
        diamasgastador = j + 1;
    }
}
console.log("El dia con mas gastos globales fue el dia " + diamasgastador + " con $" + maxgastodiario);

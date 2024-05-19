
let nombre = prompt("Ingresa tu nombre:");
do {
    if (nombre === "" || !isNaN(nombre) || nombre.match(/\d/)) {
        alert("Tenes que ingresar un nombre.");
        nombre = prompt("Ingresa tu nombre:");
    } else {
        alert("¡Hola " + nombre + "! Vamos a hacer un simulacro de las ventas de 4 días del mes pasado.");
        break;
    }
} while (nombre === "" || !isNaN(nombre) || nombre.match(/\d/));

console.log("¡Hola " + nombre + "! Vamos a hacer un simulacro de las ventas de 4 días del mes pasado.");

function ventasD(dia) {
    let esNumero;
    do {
        esNumero = parseFloat(prompt("Ingresa las ventas del día" + dia + ": "));
        if (esNumero === null) {
            alert("Debes ingresar un valor.");
        } else {
            const NUMERO = parseFloat(esNumero);
            if (isNaN(NUMERO)) {
                alert("Debes ingresar solo números.");
            } else {
                return parseFloat(NUMERO);
            }
        }
    } while (true);
}

let ventasD1 = ventasD(" 1");
console.log("Día 1: " + ventasD1);
let ventasD2 = ventasD(" 2");
console.log("Día 2: " + ventasD2);
let ventasD3 = ventasD(" 3");
console.log("Día 3: " + ventasD3);
let ventasD4 = ventasD(" 4");
console.log("Día 4: " + ventasD4);

let sumaSemana = (ventasD1 + ventasD2 + ventasD3 + ventasD4);
console.log("El total de esos días fue: " + sumaSemana + ".");
if (sumaSemana <= 20) {
    console.log("El total de esos días esta por debajo del esperado.")
}
else if (sumaSemana >= 20 && sumaSemana < 50) {
    console.log("El total de esos días esta dentro de lo esperado.");
}
else if (sumaSemana >= 50) {
    console.log("El total de esos días supero lo esperado.");
}

function gastos() {
    let esNumeroGastos;
    do {
        esNumeroGastos = prompt("Ingresa los gastos de los cuatro días:");
        if (esNumeroGastos === null) {
            alert("Debes ingresar un valor.");
        } else {
            const NUMEROGASTOS = parseFloat(esNumeroGastos);
            if (isNaN(NUMEROGASTOS)) {
                alert("Debes ingresar solo números.");
            } else {
                return NUMEROGASTOS;
            }
        }
    } while (true);
}

let esNumeroGastos = gastos();
let promedio = parseFloat(sumaSemana / 4);

console.log("El total de gastos ingresados fue de: " + esNumeroGastos + ".");
alert("Suponiendo que las ventas se mantienen en promedio de " + promedio + " vamos a calcular cuantos días necesitamos para cubir los gastos de: " + esNumeroGastos);

let diasParaRecuperar = 0;
for (let i = 1; sumaSemana < esNumeroGastos; i++) {
    sumaSemana = sumaSemana + promedio;
    diasParaRecuperar = i;
}
if (esNumeroGastos === 0 || esNumeroGastos <= sumaSemana) {
    console.log("Vamos a necesitar " + diasParaRecuperar + " dias mas para recuperar esos gastos.");
}
else {
    console.log("No hace falta vender más.");
}
console.log("Vamos a sumar los días 1 y 4 por un lado y por otro los días 2 y 3.");
const suma1y4 = (ventasD1, ventasD4) => ventasD1 + ventasD4;
const suma2y3 = (ventasD2, ventasD3) => ventasD2 + ventasD3;
console.log("La suma de los días 1 y 3 fue de: " + suma1y4(ventasD1, ventasD4) + ". Y la suma de los días 2 y 3 fue: " + suma2y3(ventasD2, ventasD3));
alert("Fin del simulacro");
console.log("Fin del simulacro. ¡Gracias " + nombre + "!");

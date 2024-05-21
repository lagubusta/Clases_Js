// ----------------------ACTIVIDAD 1
// Codificar tres funciones:
// A- Una función entrada(), la cual solicite un valor al usuario y lo retorne.
// B- Una función procesamiento(valor), donde se transforme la entrada.
// C- Una función salida(valor), la cual mostrará el resultado por alerta.
// D- Luego, invocar las tres funciones.

// A-
// function entrada () {
//     return prompt("Ingresa un valor");
// }
// B-
// function procesamiento (valor){
//     return("La entrada es " + valor);
// }
//C-
// function salida(valor){
//     alert(valor);
// }
// D-
// salida(procesamiento(entrada()));


// ----------------------ACTIVIDAD 2

// A- Codificar una función que reciba un número decimal por parámetro, y lo retorne redondeado al entero más cercano. Para ello, puede emplearse  Math.round.

// B- Luego invocar la función de forma iterativa cinco (5) veces, solicitando en cada ciclo un número al usuario.

function entrada () {
    return parseFloat(prompt("Ingresar decimal"));
}
function decim (entrada){
    return Math.round(entrada);
}
console.log(decim);
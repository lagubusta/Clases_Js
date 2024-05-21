// ----------------------ACTIVIDAD 1
// Solicitar al usuario un (1) nombre. Si el mismo es igual a otro nombre almacenado en una variable, realizar una salida por alerta con el mensaje “Fui yo”. Caso contrario, la salida será “Yo no fui”.

// let ingresarNombre = prompt("Ingresa un nombre");
// let nombre ="Bart";

// if (ingresarNombre == nombre){
//     console.log("Yo fui");
// } else {
//     console.log("Yo no fui");
// }

// ----------------------ACTIVIDAD 2
// Solicitar al usuario una (1) tecla. Si se presiona “y” (minúscula), o “Y” (mayúscula), realizar una salida por alerta con el mensaje “Correcto”. Caso contrario, la salida será “Error”.

// let tecla = prompt("Ingresa una tecla cualqueira: ");
// if(tecla == "y" || tecla == "Y") {
//     alert("Correcto");
// } else {
//     alert("Incorrecto");
// }

// ----------------------ACTIVIDAD 3
// Solicitar al usuario un (1) número.
// Si el valor está entre 1 y 4, efectuar una de las siguientes salidas según corresponda: 
// “Elegiste a Homero” si es 1.
// “Elegiste a Marge” si es 2.
// “Elegiste a Bart” si es 3.
// “Elegiste a Lisa” si es 4.

// let nro = parseInt(prompt("Ingresa un numero entre el 1 y el 4:"));
// if (nro == 1) {
//     console.log("Homero");
// } else if (nro == 2) {
//     console.log("Marge");
// } else if (nro == 3) {
//     console.log("Bart");
// } else if (nro == 4) {
//     console.log("Lisa");
// }
// else{
//     alert("Error");
// }

// ----------------------ACTIVIDAD 4
// Solicitar al usuario un (1) número.
// Si el valor está entre dos números, efectuar una de las siguientes salidas, según corresponda: 
// “Presupuesto bajo” si está entre 0 y 1000.
// “Presupuesto medio” si está entre 1001 y 3000.
// “Presupuesto alto” si es  mayor que 3000.

// let nroPresu = parseInt(prompt("Ingresa un numero:"));
// if( nroPresu >= 0 && nroPresu <= 1000){
//     console.log("Presupuesto bajo");
// } else if (nroPresu >= 1001 && nroPresu <= 3000){
//     console.log("Presupuesto medio");
// } else if(nroPresu > 3000){
//     console.log("Presupuesto alto");
// } else {
//     alert("Error");
// }

// ----------------------ACTIVIDAD 5
// Solicitar al usuario cuatro (4) productos de almacén. Si todos los elementos fueron cargados, realizar una única salida compuesta por el listado de productos. Caso contrario, la salida será “Error: Es necesario cargar todos los productos”.

const NoVacio = "";

let producto1 = prompt("Ingresa producto1:");
let producto2 = prompt("Ingresa producto2:");
let producto3 = prompt("Ingresa producto3:");
let producto4 = prompt("Ingresa producto4:");

if (producto1 != "" && producto2 != "" && producto3 != "" && producto4 != ""){
    
}

console.log(producto1 + " " + producto2 +" "+ producto3 +" "+producto4 );
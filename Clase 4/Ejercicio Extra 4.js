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
// C-
// function salida(valor){  
//     alert(valor);
// }
// D-
// salida(procesamiento(entrada()));


// ----------------------ACTIVIDAD 2

// A- Codificar una función que reciba un número decimal por parámetro, y lo retorne redondeado al entero más cercano. Para ello, puede emplearse  Math.round.

// B- Luego invocar la función de forma iterativa cinco (5) veces, solicitando en cada ciclo un número al usuario.

// function redondear(valor){
//     return Math.round(valor);
// }
// for (let i = 0; i<5; i++){
//     let entrada =prompt("Ingresa Numero");
//     alert(Math.round(entrada));
// }

// ----------------------ACTIVIDAD 3

// A- Codificar una función con la siguiente cabecera: impuesto (precio, porcentaje). En ella, se retorna un valor numérico compuesto por el precio recibido, más la suma del porcentaje ingresado.
// B- Luego invocar la función de forma iterativa cinco (5) veces, solicitando en cada ciclo un precio y porcentaje al usuario.

// function impuesto (precio, porcentaje){
//     return precio + ((precio * porcentaje)/100)
// }
// for ( let i = 0; i < 5; i++){
//     let resultado = impuesto(parseFloat(prompt("Ingresar precio")), parseFloat(prompt("Igresar %")));
// alert(resultado);
// }

// ----------------------ACTIVIDAD 4

// Codificar dos funciones:
// A- Una función cotizarDolar(pesos), la cual recibe un valor monetario en pesos argentinos, y lo retorna en su equivalente en dólares.
// B- Una función cotizarPesos(dolar), que recibe un valor monetario en dólares, y lo retorna en su equivalente en pesos argentinos.
// C- Luego invocar las funciones solicitando  al usuario el valor y el tipo de cotización a realizar.


//---------------------- MI FORMA
// function cotizarDolar (){
//     return
// }
// function cotizador() {
//     return peso * dolar;
// }
// let dolar = prompt("Ingresa el valor en usd: ");
// let peso = prompt("Ingresa el valor en pesos: ");

// let total = cotizador();
// console.log(total);


//---------------------- SOLUCION DIAPO
// const COTIZACION_DOLAR = 150;
// const cotizarDolar = (pesos) => pesos / COTIZACION_DOLAR;
// const cotizarPesos = (dolar) => dolar * COTIZACION_DOLAR;
// let seleccion = prompt("SELECCIONAR COTIZACION \n 1- DOLARES A PESOS \n 2- PESOS A DOLAR ");
// let valor = prompt("VALOR");
// switch (seleccion) {
//     case "1":
//         alert(cotizarPesos(valor));
//         break;
//     case "2":
//         alert: (cotizarDolar(valor));
//         break;
//     default:
//         break;
// }

// ----------------------ACTIVIDAD 5

// Codificar una función con la siguiente cabecera: validacion(cadena). En ella, se retorna un valor booleano, el cual es true si el parámetro no es un cadena vacía. Caso contrario, se retorna false.
//Luego invocar la función de forma iterativa, hasta que el usuario tipee “ESC”, solicitando en cada ciclo una cadena a validar.

// function validacion(cadena){
//     return cadena != ""; 
// }
// let entrada = prompt("Ingresar cadena");
// while (entrada != "ESC"){
//     alert (validacion(entrada));
//     entrada = prompt ("Ingresar cadena");
// }
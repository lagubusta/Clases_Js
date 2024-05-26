// Ejercicios Básicos de JavaScript













//------------ Variables y Constantes ------------
// Declara una variable llamada nombre y asígnale tu nombre.
// Declara una constante llamada PI y asígnale el valor de π (pi).

// let nombre;
// nombre = "Agustin";
// const PI = "3,14";


//------------ Booleanos ------------
// Declara una variable llamada esMayorDeEdad y asígnale true si tienes más de 18 años, o false si tienes 18 años o menos.

//------------ let esMayorDeEdad ------------
// esMayorDeEdad = prompt("Ingresa tu edad");
// if (esMayorDeEdad > 18) {
//     alert("Tu edad es de " + esMayorDeEdad + " así que sos mayor de edad");
//     }
//     else if (esMayorDeEdad >0 && esMayorDeEdad < 18){
//         alert("Tu edad es de " + esMayorDeEdad + " así que sos menor de edad") 
// }
//     else if (esMayorDeEdad <0){
//         alert("La edad que ingresaste debe ser mayor a 0");
// }


//------------ Prompt, Alert y Console.log ------------
// Pide al usuario que ingrese su edad utilizando prompt y almacena el valor en una variable llamada edadUsuario.
// Muestra un mensaje de alerta que diga "¡Hola!".
// Imprime en la consola el mensaje "La edad ingresada es: [valor de edadUsuario]".

// let edadUsuario = parseInt(prompt("Ingresa tu edad (ej Prompt, Alert y Console.log)"));
// // alert("Hola");
// console.log("La edad ingresada es: " + edadUsuario);

//------------ Control de Flujo con if y if else ------------
// Utilizando un if, verifica si un número ingresado por el usuario es positivo, negativo o cero, e imprime un mensaje correspondiente.


// if (edadUsuario >= 18) {
//     alert("Tu edad es de " + edadUsuario + " así que sos mayor de edad");
// }
// else if (edadUsuario > 0 && edadUsuario < 18) {
//     alert("Tu edad es de " + edadUsuario + " así que sos menor de edad")
// }
// else if (edadUsuario < 0) {
//     alert("La edad que ingresaste debe ser mayor a 0");
// }
// Utilizando un if else, verifica si un número ingresado por el usuario es par o impar, e imprime un mensaje correspondiente.
// if (edadUsuario % 2 === 0) {
//     console.log(edadUsuario + " es par");
// }
// else if (edadUsuario % 2 !== 0) {
//     console.log(edadUsuario + " es inpar");
// }
// Utilizando un if else, verifica si un número ingresado por el usuario es mayor que 100, menor que 100 o igual a 100, e imprime un mensaje correspondiente.
// if (edadUsuario > 100) {
//     console.log("El valor ingresado es mayor a 100");
// }
// else if (edadUsuario == 100) {
//     console.log("El valor ingresado es igual a 100.");
// }
// else if (edadUsuario < 100) {
//     console.log("El valor ingresado es menor a 100");
// }

// ------------ Operadores Lógicos ------------
// Utilizando operadores lógicos, verifica si un número ingresado por el usuario es divisible tanto por 2 como por 3.
// if (edadUsuario % 2 === 0 && edadUsuario % 3 === 0) {
//     console.log(edadUsuario + " Es divisible tanto por 2 como por 3.");
// }
// else {
//     console.log(" No es divisible por 2 y 3");
// }


// Utilizando operadores lógicos, verifica si un número ingresado por el usuario es mayor que 0 y menor que 100.
// if (edadUsuario > 0 && edadUsuario < 100) {
//     console.log("El numero esta entre 0 y 100");
// }
//     else {
//         console.log ("El numero " + edadUsuario + " no esta entre 0 y 100")
//     }


// Utilizando operadores lógicos, verifica si un número ingresado por el usuario es mayor que 10 o menor que -10.
// if (edadUsuario > 10 || edadUsuario < -10) {
//     console.log("El numero ingresado es mayor a 10 o menor que -10");
// }
//     else {
//         console.log ("El numero ingresado NO es mayor a 10 o menor que -10")
//    }



//------------ Ejercicios Adicionales ------------
// Pide al usuario que ingrese un número utilizando prompt, luego verifica si es un número primo e imprime un mensaje correspondiente.
// let numero = parseInt(prompt("Ingresa un numero"));
// console.log("El numero que elegiste es el " + numero);
// if (numero <= 1){
//     console.log (numero + " No es primo");
// } else {
//     let esPrimo = true;
//     for (let i = 2; i <= numero / 2; i++){
//         if (numero % i === 0){
//             esPrimo = false;
//             break;
//         }
//     }
//     if (esPrimo){
//         console.log ("Es primo");
//     } else {
//         console.log ("No es primo");
//     }
// }

// Crea una variable llamada hora y asígnale un valor numérico que represente una hora del día. Luego, utilizando un if else, imprime un mensaje que indique si es mañana, tarde o noche.
// let hora = parseInt(prompt("Ingresa una hora"));
// if (hora > 0 && hora < 12) {
//     console.log ("Son las " + hora + " entonces es la mañana");
// }
// else if (hora >= 12 && hora < 19) {
//     console.log ("Son las " + hora + " entonces es la tarde");
// }
// else if (hora > 19 && hora <= 24 && hora < 25) {
//     console.log ("Son las " + hora + " entonces es la noche");
    
// }


// Pide al usuario que ingrese dos números utilizando prompt, luego verifica si el primero es divisible por el segundo e imprime un mensaje correspondiente.
// let numeroA = parseInt(prompt("Ingresa el numero A"));
// let numeroB = parseInt(prompt("Ingresa el numero B"));
// if (numeroA % numeroB === 0) {
//     console.log ( numeroA + " Es divisible por " + numeroB);
// }
// else {
//     console.log ( numeroA + " No es divisible por " + numeroB);
// }


// Crea una variable llamada nombreUsuario y asígnale un nombre. Luego, verifica si el nombre tiene más de 6 caracteres e imprime un mensaje correspondiente.
// Utilizando un if else, verifica si un año ingresado por el usuario es bisiesto o no, e imprime un mensaje correspondiente.
// Pide al usuario que ingrese su nombre utilizando prompt, luego verifica si comienza con la letra "A" o "a" e imprime un mensaje correspondiente.
// Declara una variable llamada temperatura y asígnale un valor numérico que represente la temperatura actual. Luego, utilizando un if, imprime un mensaje que indique si hace frío, templado o caliente.
// Pide al usuario que ingrese tres números utilizando prompt, luego verifica si la suma de los dos primeros números es igual al tercer número e imprime un mensaje correspondiente.






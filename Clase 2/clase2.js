//----------------- Ejercicios Básicos de JavaScript

/*
//------------ Variables y Constantes -----------I-
// A-  Declara una variable llamada nombre y asígnale tu nombre.
let nombre = "Agustin";
// B- Declara una constante llamada PI y asígnale el valor de π (pi).
const PI = 3.14;
//------------ Variables y Constantes -----------F-
*/

/*
//------------ Booleanos -----------I-
// A- Declara una variable llamada esMayorDeEdad y asígnale true si tienes más de 18 años, o false si tienes 18 años o menos.
let esMayorDeEdad = parseInt(prompt("Ingresar edad: "));
console.log(esMayorDeEdad >= 18);
//------------ Booleanos -----------F-
*/

// ------------ Prompt, Alert y Console.log -----------I-
// A- Pide al usuario que ingrese su edad utilizando prompt y almacena el valor en una variable llamada edadUsuario.
/*
let edadUsuario = parseInt(prompt("Ingrese su edad:"));
// B- Muestra un mensaje de alerta que diga "¡Hola!".
alert("¡Hola!");
// C- Imprime en la consola el mensaje "La edad ingresada es: [valor de edadUsuario]".
console.log("La edad ingresada es: "+ edadUsuario);
*/
// ------------ Prompt, Alert y Console.log -----------F-

//------------ Control de Flujo con if y if else -----------I-
// Utilizando un if, verifica si un número ingresado por el usuario es positivo, negativo o cero, e imprime un mensaje correspondiente.
/*
if( edadUsuario % 2 === 0){
    console.log("El numero ingresado es par");
} else if( edadUsuario % 2 !== 0){
    console.log("El numero ingresado es inpar");
} else {
    console.log("El valor ingresado no es correcto");
}
*/
// Utilizando un if else, verifica si un número ingresado por el usuario es mayor que 100, menor que 100 o igual a 100, e imprime un mensaje correspondiente.
/*
if( edadUsuario > 100){
    console.log("La edad ingresada es mayor que 100");
} else if(edadUsuario <= 100 ){
    console.log("La edad ingresada es menor o igual a 100");
} else{
    console.log("El valor ingresado no es valido");
}
*/

// Utilizando operadores lógicos, verifica si un número ingresado por el usuario es divisible tanto por 2 como por 3.
/*
if(edadUsuario % 2 == 0 && edadUsuario % 3 == 0){
    console.log("La edad Ingresada es divisible tanto por 2 como por 3")
} else {
    console.log("La edad Ingresada no es divisible por 2 ni por 3");
}
// Utilizando operadores lógicos, verifica si un número ingresado por el usuario es mayor que 0 y menor que 100.
console.log( "Si la edad ingresada es esta entre 0 y 100 es true sino es false: " + 0 < edadUsuario < 100);
*/
//------------ Control de Flujo con if y if else -----------F-

//------------Operadores Lógicos-----------I-
/*
// Utilizando operadores lógicos, verifica si un número ingresado por el usuario es divisible tanto por 2 como por 3.
let edad2y3 = prompt("Ingresar edad para ver si es divisible tanto por 2 como por 3");
console.log("Operador logico si edadUsuario es divisible por 2 y por 3")
let divisiblePor2y3 = (edad2y3 % 2 == 0 && edad2y3 % 3 == 0);
console.log(divisiblePor2y3);
// Utilizando operadores lógicos, verifica si un número ingresado por el usuario es mayor que 0 y menor que 100.
console.log("Si el valor ingresado esta entre 0 y 100 va a ser true, sino false");
console.log(0<edad2y3 < 100);
// Utilizando operadores lógicos, verifica si un número ingresado por el usuario es mayor que 10 o menor que -10.
console.log("Operador logico si edadUsuario es mayor que 10 o menor que -10")
let mayor10 = (edad2y3 > 10);
console.log("Si la edad ingresada es mayor que 10 va a dar true, sino false");
console.log(mayor10);
let menorMenos10 = (edad2y3 < -10);
console.log("Si la edad ingresada es menor que -10 va a dar true, sino false");
console.log(menorMenos10);
*/
//------------Operadores Lógicos-----------F-

//------------ Ejercicios Adicionales -----------I-
/*
// Pide al usuario que ingrese un número utilizando prompt.
let numero = prompt("Igresar numero para ver si es primo o no");
// Luego verifica si es un número primo e imprime un mensaje correspondiente.
if (numero <= 1) {
    console.log(numero + " No es primo");
} else {
    let esPrimo = true;
    for (let i = 2; i <= numero / 2; i++) {
        if (numero % i === 0) {
            esPrimo = false;
            break;
        }
    }
    if (esPrimo) {
        console.log("Es primo");
    } else {
        console.log("No es primo");
    }
}
// Crea una variable llamada hora y asígnale un valor numérico que represente una hora del día. Luego, utilizando un if else, imprime un mensaje que indique si es mañana, tarde o noche.
let hora = parseInt(prompt("Ingresa una hora"));
if (hora > 0 && hora < 12) {
    console.log("Son las " + hora + " entonces es la mañana");
} else if (hora >= 12 && hora < 19) {
    console.log("Son las " + hora + " entonces es la tarde");
} else if (hora > 19 && hora <= 24 && hora < 25) {
    console.log("Son las " + hora + " entonces es la noche");
}
// Pide al usuario que ingrese dos números utilizando prompt, luego verifica si el primero es divisible por el segundo e imprime un mensaje correspondiente.
let numeroA = parseInt(prompt("Ingresa el numero A"));
let numeroB = parseInt(prompt("Ingresa el numero B"));
if (numeroA % numeroB === 0) {
    console.log(numeroA + " Es divisible por " + numeroB);
}
else {
    console.log(numeroA + " No es divisible por " + numeroB);
}
// Crea una variable llamada nombreUsuario y asígnale un nombre. Luego, verifica si el nombre tiene más de 6 caracteres e imprime un mensaje correspondiente.
let nombreUsuario = prompt("Ingresa nombre");
if ( nombreUsuario.length > 6) {
    console.log("El nombre " + nombreUsuario + " tiene mas de 6 letras");
} else {
    console.log("El nombre " + nombreUsuario + " tiene menos de 6 letras");
}
*/


// Utilizando un if else, verifica si un año ingresado por el usuario es bisiesto o no, e imprime un mensaje correspondiente.

// Pide al usuario que ingrese su nombre utilizando prompt, luego verifica si comienza con la letra "A" o "a" e imprime un mensaje correspondiente.
// Declara una variable llamada temperatura y asígnale un valor numérico que represente la temperatura actual. Luego, utilizando un if, imprime un mensaje que indique si hace frío, templado o caliente.
// Pide al usuario que ingrese tres números utilizando prompt, luego verifica si la suma de los dos primeros números es igual al tercer número e imprime un mensaje correspondiente.






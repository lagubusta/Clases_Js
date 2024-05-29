// TODOS LOS EJERCICIOS ESTAN RESUELTOS menos el 20. Me dio fiaca
//-------------------------------------------------------------------------------------
// Ejercicios Básicos de JavaScript

//--------------Control de Flujo con if y if else y Operadores Lógicos-------------I-
//-------------------------------------------------------------------------------------
// 1. Declara una variable llamada edad y asígnale un valor numérico. Utiliza un if else para imprimir en la consola si la persona es mayor de edad o no, basándote en el valor de edad.

// let edad = parseInt(prompt("Ingresa tu edad: "));
// if(edad < 18){
//     console.log("Es menor de edad.");
//     }
//     else {
//         console.log("Es mayor de edad")
// }
//-------------------------------------------------------------------------------------
// 2. Utilizando un if else y operadores lógicos, verifica si un número ingresado por el usuario es positivo y par, e imprime un mensaje correspondiente.

// let edad = parseInt(prompt("Ingresa tu edad: "));
// if(edad > 0 && edad % 2 === 0 ){
//     console.log("La edad es par y mayor a 0");
// }
// else {
//     console.log("La edad no es mayor a 0 o no es par.")
//}
//-------------------------------------------------------------------------------------
// 3. Pide al usuario que ingrese dos números utilizando prompt. Luego, utiliza un if else y operadores lógicos para determinar si el primer número es mayor, menor o igual al segundo, e imprime un mensaje correspondiente.

// let nroA = prompt("Ingresa el numero A: ");
// let nroB = prompt("Ingresa el numero B: ");
// if (nroA > nroB) {
//     console.log("El numero A: " + nroA + " es mayor al numero B: " + nroB)
// } else if (nroA < nroB) {
//     console.log("El numero A: " + nroA + " es menor al numero B: " + nroB)
// } else {
//     console.log("El numero A: " + nroA + " es igual al numero B: " + nroB)
// }

//-------------------------------------------------------------------------------------
//--------------Control de Flujo con if y if else y Operadores Lógicos//-------------F-
//-------------------------------------------------------------------------------------
//-------------- Ciclos e Iteraciones usando for, while y do while-------------I-
//-------------------------------------------------------------------------------------

// 4. Utiliza un bucle for para imprimir en la consola los números del 1 al 10.

// for ( i = 1 ; i < 10 ; i++){
//     console.log(i);
// }

//-------------------------------------------------------------------------------------
// 5. Pide al usuario que ingrese un número utilizando prompt. Utiliza un bucle while para imprimir en la consola los números desde 1 hasta el número ingresado por el usuario.

// let nro = parseInt(prompt("Ingresa un numero para el ejercicio. 5: "));
// let i = 1;
// while (i <= nro ){
//     console.log( i++);
// }

//-------------------------------------------------------------------------------------
// 6. Utiliza un bucle do while para imprimir en la consola los números del 10 al 1.

// let i = 10;
// do {
//     console.log(i); i--;
// } while( i >= 1);

//-------------------------------------------------------------------------------------
//-------------- Ciclos e Iteraciones usando for, while y do while-------------F-
//-------------------------------------------------------------------------------------
//-------------- Control de Flujo con if y if else y Operadores Lógicos-------------I-
//-------------------------------------------------------------------------------------
// 7. Declara una constante llamada TEMPERATURA_MAXIMA y asígnale un valor numérico que represente la temperatura máxima permitida.
// Luego, pide al usuario que ingrese la temperatura actual utilizando prompt.
// Utiliza un if else para imprimir un mensaje en la consola indicando si la temperatura actual supera la temperatura máxima permitida.

// const TEMPERATURA_MAXIMA = 30;
// let temActual = parseInt(prompt("Ingresa la temperatura acutal: "));
// if( temActual > TEMPERATURA_MAXIMA){
//     console.log("La temperatura actual esta superando la temperatura maxima permitida.")
// } else {
//     console.log("La temperatura esta dentro de lo permitido.")
// }

//-------------------------------------------------------------------------------------
// 8. Pide al usuario que ingrese su edad utilizando prompt.
// Utiliza un if else y operadores lógicos para imprimir en la consola si la persona es un adolescente (entre 13 y 19 años), un adulto (mayor de 19 años) o un niño (menor de 13 años).

// let edad = parseInt(prompt("Ingresa tu edad: "));
// if (edad < 0) {
//     console.log("La edad ingresada tiene que ser mayor a 0.")
// } else if (edad >= 0 && edad < 13) {
//     console.log("Sos un menor de 13 años");
// } else if (edad > 13 && edad < 19) {
//     console.log("Sos un adolesente");
// }else if (edad >=19) {
//     console.log("Sos mayor de 19");
// }
//-------------------------------------------------------------------------------------
//-------------- Control de Flujo con if y if else y Operadores Lógicos-------------F-
//-------------- Ciclos e Iteraciones usando for, while y do while-------------I-
//-------------------------------------------------------------------------------------
// 9. Utiliza un bucle for para imprimir en la consola los números pares del 1 al 20.

// for(let  i=1 ; i<=20 ; i++){
//     console.log(i);
// }

//-------------------------------------------------------------------------------------
// 10. Pide al usuario que ingrese un número utilizando prompt.
// Utiliza un bucle while para imprimir en la consola los números desde el número ingresado por el usuario hasta 1.

// let nro = parseInt(prompt("Ingresa un numero para el ejercicio. 10: "));
// let i = 1;
// while (i <= nro ){
//     console.log( i++);
// }
//-------------------------------------------------------------------------------------
// Utiliza un bucle do while para imprimir en la consola la tabla del 5 (del 5 al 50).

// let nro = 5;
// do { console.log(nro);
//     nro += 5;
// } while (nro <= 50);
//-------------------------------------------------------------------------------------
//-------------- Ciclos e Iteraciones usando for, while y do while-------------F-
//-------------------------------------------------------------------------------------
//-------------- Control de Flujo con if y if else y Operadores Lógicos -------------I-
//-------------------------------------------------------------------------------------

// 12. Declara dos variables, numero1 y numero2, y asígnales valores numéricos diferentes. Utiliza un if else para imprimir en la consola cuál de los dos números es mayor.

// let numero1 = parseInt(prompt("Ingresa el primer numero: "));
// let numero2 = parseInt(prompt("Ingresa el segundo numero: "));
// if(numero1 > numero2){
//     console.log("El primer numero ingesado, " + numero1 + ", es mayor al segundo numero ingresado, " + numero2);
// } else{
//     console.log("El primer numero ingesado, " + numero1 + ", es menor al segundo numero ingresado, " + numero2);
// }
//-------------------------------------------------------------------------------------
// 13. Pide al usuario que ingrese tres números utilizando prompt.
// Utiliza un if else y operadores lógicos para imprimir en la consola el número más grande de los tres.

// let n1 = parseInt(prompt("Ingresa el primer numero: "));
// let n2 = parseInt(prompt("Ingresa el segundo numero: "));
// let n3 = parseInt(prompt("Ingresa el tercer numero: "));
// if (n1 > n2 && n1 > n3) {
//     console.log("El prmer numero," + n1 + " es el mayor de los tres numeros ingresados.")
// } else if (n2 > n1 && n2 > n3) {
//     console.log("El segundo numero," + n2 + " es el mayor de los tres numeros ingresados.")
// } else if (n3 > n1 && n3 > n2) {
//     console.log("El tercer numero," + n3 + " es el mayor de los tres numeros ingresados.")
// } else {
//     console.log("O son los tres numeros iguales o no es un dato valido.")
// }
//-------------------------------------------------------------------------------------
//-------------- Control de Flujo con if y if else y Operadores Lógicos -------------F-
//-------------------------------------------------------------------------------------
//-------------- Ciclos e Iteraciones usando for, while y do while  -------------I-
//-------------------------------------------------------------------------------------
// 14. Utiliza un bucle for para imprimir en la consola los números del 1 al 100 que son divisibles por 3.

// for (let i = 1; i <= 100; i++) {
//     if (i % 3 === 0) {
//         console.log(i);
//     }
// }
//-------------------------------------------------------------------------------------
// 15. Pide al usuario que ingrese un número utilizando prompt.
// Utiliza un bucle while para imprimir en la consola los números desde el número ingresado por el usuario hasta el doble de ese número.

// let n1 = parseInt(prompt("Ingresa numero Eje 15: "));
// if (!isNaN(n1)) {
//     let contar = n1;
//     while (contar <= n1 * 2) {
//         console.log(contar);
//         contar++;
//     }
// } else {
//     console.log("No es un numero valido");
// }
//-------------------------------------------------------------------------------------
// 16. Utiliza un bucle do while para imprimir en la consola los números impares del 1 al 25.

// let nro = 1;
// do {
//     if (nro % 2 !== 0){
//         console.log(nro);
//     }
//     nro++;
// } while (nro <= 25);
//-------------------------------------------------------------------------------------
//-------------- Ciclos e Iteraciones usando for, while y do while  -------------F-
//-------------------------------------------------------------------------------------
//-------------- Control de Flujo con switch  -------------I-
//-------------------------------------------------------------------------------------
// 17. Pide al usuario que ingrese un día de la semana utilizando prompt.
// Utiliza una declaración switch para imprimir en la consola si es un día laboral o un día de descanso.

// let dia = prompt("Ingresa un día de la semana");
// switch (dia) {
//     case "Lunes": {
//         console.log("Es día laborar, es " + dia);
//         break;
//     } case "Martes": {
//         console.log("Es día laborar, es " + dia);
//         break;
//     } case "Miercoles": {
//         console.log("Es día laborar, es " + dia);
//         break;
//     } case "Jueves": {
//         console.log("Es día laborar, es " + dia);
//         break;
//     } case "Viernes": {
//         console.log("Es día laborar, es " + dia);
//         break;
//     } case "Sabado": {
//         console.log("Es día de descanso, es " + dia);
//         break;
//     } case "Domingo": {
//         console.log("Es día de descanso, es " + dia);
//         break;
//     } default:
//         console.log(dia + " no es un día de la semana")
// }
//-------------------------------------------------------------------------------------
// 18. Pide al usuario que ingrese un número del 1 al 7 utilizando prompt, donde 1 sea domingo y 7 sea sábado.
// Utiliza una declaración switch para imprimir en la consola el nombre del día de la semana correspondiente al número ingresado por el usuario.

// let dia = parseInt(prompt("Ingresa un numero del 1 al 7 para ver que día de la semana es: "));
// switch (dia) {
//     case 1: {
//         console.log("Es día  " + dia + " es: Lunes");
//         break;
//     } case 2: {
//         console.log("Es día  " + dia + " es: Martes");
//         break;
//     } case 3: {
//         console.log("Es día  " + dia + " es: Miercoles");
//         break;
//     } case 4: {
//         console.log("Es día  " + dia + " es: Jueves");
//         break;
//     } case 5: {
//         console.log("Es día  " + dia + " es: Viernes");
//         break;
//     } case 6: {
//         console.log("Es día " + dia + " es Sabado");
//         break;
//     } case 7: {
//         console.log("Es día " + dia + " es Domingo");
//         break;
//     } default:
//         console.log(dia + " no es un numero valido.")
// }
//-------------------------------------------------------------------------------------
// 19. Pide al usuario que ingrese el nombre de un mes utilizando prompt.
// Utiliza una declaración switch para imprimir en la consola la cantidad de días que tiene ese mes.

// let mes = prompt("Ingresa un mes para saber cuantos días tiene.");
// switch (mes) {
//     case "Enero": {
//         console.log("El mes " + mes + " tiene 31 días.");
//         break;
//     } case "Febrero": {
//         console.log("El mes " + mes + " tiene 28 o 29  días.");
//         break;
//     } case "Marzo": {
//         console.log("El mes " + mes + " tiene 31 días.");
//         break;
//     } case "Abril": {
//         console.log("El mes " + mes + " tiene 30 días.");
//         break;
//     } case "Mayo": {
//         console.log("El mes " + mes + " tiene 31 días.");
//         break;
//     } case "Junio": {
//         console.log("El mes " + mes + " tiene 30 días.");
//         break;
//     } case "Julio": {
//         console.log("El mes " + mes + " tiene 31 días.");
//         break;
//     } case "Agosto": {
//         console.log("El mes " + mes + " tiene 31 días.");
//         break;
//     } case "Septiembre": {
//         console.log("El mes " + mes + " tiene 30 días.");
//         break;
//     } case "Octubre": {
//         console.log("El mes " + mes + " tiene 31 días.");
//         break;
//     } case "Noviembre": {
//         console.log("El mes " + mes + " tiene 30 días.");
//         break;
//     } case "Diciembre": {
//         console.log("El mes " + mes + " tiene 31 días.");
//         break;
//     } default:
//         console.log(dia + " no es un mes valido.")
// }
//-------------------------------------------------------------------------------------
// 20. Pide al usuario que ingrese un número del 1 al 12 utilizando prompt, donde 1 sea enero y 12 sea diciembre. Utiliza una declaración switch para imprimir en la consola el nombre del mes correspondiente al número ingresado por el usuario.

//-------------- Control de Flujo con switch  -------------F-

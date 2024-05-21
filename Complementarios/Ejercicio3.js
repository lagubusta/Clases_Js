// ----------------------ACTIVIDAD 1
// Solicitar al usuario un (1) un número y un (1) texto. Efectuar una salida por alerta con el mensaje ingresado por cada repetición, hasta alcanzar el valor señalado por el usuario.

// let nro = parseInt(prompt("Ingresa la cantidad de vez que se va a repetir la proxima palabra ingresada."));
// let palabra = prompt("Ingresa la palabra que se va a repetir " + nro + " cantidad de veces.");

// for (let i = 0; i < nro; i++) {
//     console.log(palabra);
// }

// ----------------------ACTIVIDAD 2
// Solicitar al usuario un (1) número. Emplear este valor para determinar la cantidad de repeticiones, y efectuar una salida por alerta con el mensaje “lado” en cada repetición. Pero si se alcanza un número de iteraciones mayor que cuatro (4), cancelar el ciclo.

// let nro = prompt("Ingresa cantidad de lados");
// for (let i = 0; i < nro; i++) {
//     if (i > 3) {
//         break;
//     }
//     alert ("Va a repetir el alert la cantidad de veces ingresadas hasta un maximo de 3 veces.");
// }

// ----------------------ACTIVIDAD 3
// Solicitar al usuario la carga de diez (10) alumnos de forma consecutiva. Luego realizar un única salida por alerta, con el listado de alumnos registrados.


// va a imprimr la lista de todos los alumnos ingresados.

// let alumnos = '';
// for (let i = 0; i < 10; i++) {
//     alumnos += prompt("Ingresa nombre de alumno") + "\n";
// }
// alert(alumnos);

// ----------------------ACTIVIDAD 4
// Solicitar al usuario la carga de nombres de forma consecutiva, hasta que se ingrese “Voldemort”. Luego realizar un única salida por alerta, con todos los nombres ingresados.

// Hasta que no ingrese la palabra "clave" no va a imprimir el alert. Especie de "contraseña".

// let entrada = prompt("Ingresa nombre");
// let ingresados ="";
// while (entrada != "Agus"){
//     ingresados += entrada + "\n";
//     entrada = prompt("Ingresa nombre");
// }
// alert (ingresados);


// ----------------------ACTIVIDAD 5
// Solicitar al usuario un (1) número de forma consecutiva, hasta que se ingrese “ESC”. Generar una única salida compuesta por los siguientes productos, según el valor ingresado en cada ciclo:
// “Tomate” si es 1.
// “Papa” si es 2.
// “Carne” si es 3.
// “Pollo” si es 4.

// let nro = prompt("Ingresa producto del numero 1 al 4");
// while (nro != "ESC"){
//     switch (nro){
//         case "1":
//             alert("Tomate");
//             break;
//         case "2":
//             alert("Papa");
//             break;
//             case "3":
//                 alert("Carne");
//                 break;
//             case "4":
//                 alert("Pollo");
//                 break;
//     }
//     nro = prompt("Ingresa producto del numero 1 al 4");
// }

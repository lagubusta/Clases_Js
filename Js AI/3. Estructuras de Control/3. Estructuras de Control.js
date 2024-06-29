//---------------------------------------------------
// ## 3.2 Switch
// let fruta = "manzana";
// switch (fruta) {
//     case "manzana":
//         console.log("La fruta es una manzana");
//         break;
//     case "banana":
//         console.log("La fruta es una banana");
//         break;
//     case "naranja":
//         console.log("La fruta es una naranja");
//         break;
//     default:
//         console.log("Fruta no reconocida");
// }
//---------------------------------------------------
//---------------------------------------------------
// ## 3.3 Bucles
//---------------------------------------------------
// ### For
// for (let i = 0; i < 5; i++) {
//     console.log("El valor de i es " + i);
// }
//---------------------------------------------------
// ### While
// let i = 0;
// while (i < 5) {
//     console.log("El valor de i es " + i);
//     i++;
// };
//---------------------------------------------------
// ### do...while
// let i = 0;
// do {
//     console.log("El valor de i es " + i);
//     i++;
// } while (i < 5);
//---------------------------------------------------
// ### for...in
// let persona = { nombre: "Juan", edad: 30, ciudad: "Madrid" };
// for (let propiedad in persona) {
//     console.log(propiedad + ": " + persona[propiedad]);
// }
//---------------------------------------------------
// ### for...of
// let colores = ["rojo", "verde", "azul"];

// for (let color of colores) {
//     console.log(color);
// }
//---------------------------------------------------
//---------------------------------------------------
// Ejemplos Avanzados
//---------------------------------------------------
// Condicionales y Bucles
// for (let i = 1; i <= 10; i++) {
//     if (i % 2 === 0) {
//         console.log(i + " es par");
//     } else {
//         console.log(i + " es impar");
//     }
// }
//---------------------------------------------------
// Bucle anidado
// for (let i = 1; i <= 10; i++) {
//     for (let j = 1; j <= 10; j++) {
//         console.log(i + " x " + j + " = " + (i * j));
//     }
// }
//---------------------------------------------------
// Bucle con break y continue
// for (let i = 1; i <= 10; i++) {
//     if (i === 5) {
//         break;  // Sale del bucle cuando i es 5
//     }
//     console.log(i);
// }
// for (let i = 1; i <= 10; i++) {
//     if (i % 2 === 0) {
//         continue;  // Salta a la siguiente iteración si i es par
//     }
//     console.log(i);
// }
//---------------------------------------------------
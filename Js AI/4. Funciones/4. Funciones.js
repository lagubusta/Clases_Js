// # 4. Funciones
// ## 4.1 Declaración de Funciones
//---------------------------------------------------
// function saludar(nombre) {
//     console.log("Hola, " + nombre);
// }
// // Llamada a la función
// saludar("Juan");  // "Hola, Juan"
//---------------------------------------------------
//Función Anónima
// let sumar = function(a, b) {
//     return a + b;
// };
// console.log(sumar(3, 4));  // 7
//---------------------------------------------------
// Funciones Flecha
// let multiplicar = (a, b) => a * b;
// console.log(multiplicar(2, 3));  // 6
//---------------------------------------------------
//---------------------------------------------------
// ## 4.2 Parámetros y Argumentos
// function restar(a, b) {
    //     return a - b;
    // }
    // console.log(restar(10, 3));  // 7
//---------------------------------------------------
// ## 4.3 Valores de Retorno
// function cuadrado(numero) {
//     return numero * numero;
// }
// let resultado = cuadrado(4);
// console.log(resultado);  // 16
//---------------------------------------------------
//## 4.4 Funciones como Valores
// function calcular(operacion, a, b) {
//     return operacion(a, b);
// }
// let suma = (a, b) => a + b;
// let resultado = calcular(suma, 5, 3);
// console.log(resultado);  // 8
//---------------------------------------------------
//## 4.5 Funciones Autoejecutables (IIFE)
// (function() {
//     console.log("Esta función se ejecuta inmediatamente");
// })();
//---------------------------------------------------
//## 5.1 Scope Global
// let global = "Soy global";
// function mostrarGlobal() {
//     console.log(global);
// }
// mostrarGlobal(); 
//---------------------------------------------------
//### 5.2 Scope Local
// function mostrarLocal() {
//     let local = "Soy local";
//     console.log(local);
// }
// mostrarLocal();  // "Soy local"
// console.log(local);  // Error: local is not defined
//---------------------------------------------------
//## 7. Closures
// function crearContador() {
//     let contador = 0;
//     return function() {
//         contador++;
//         return contador;
//     };
// }
// let contador1 = crearContador();
// console.log(contador1());  // 1
// console.log(contador1());  // 2
// let contador2 = crearContador();
// console.log(contador2());  // 1
//---------------------------------------------------
//
//---------------------------------------------------
//
//---------------------------------------------------
//
//---------------------------------------------------
//

// let persona = {
//     nombre: "Ana",
//     edad: 28,
//     saludar: function() {
//         console.log("Hola, mi nombre es " + this.nombre);
//     }
// };
// persona.saludar();  // "Hola, mi nombre es Ana"

//#### Clonar y Fusionar Objetos
// - Fusionar:
// let objetoA = { a: 1, b: 2 };
// let objetoB = { b: 3, c: 4 };
// //----
// let fusionado = Object.assign({}, objetoA, objetoB);
// // O usando el operador de propagación
// let fusionado2 = { ...objetoA, ...objetoB };
// console.log(objetoA); //{a: 1, b: 2}
// console.log(objetoB); // {b: 3, c: 4}
// console.log(fusionado2); //{a: 1, b: 3, c: 4}
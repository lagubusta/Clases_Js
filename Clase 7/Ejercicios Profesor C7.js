// PENDIENTE
// 11, 17, 21

//-------------------------------------------------------------------------------------
//-------------- Ejercicios usando Funciones de Orden Superior-------------I-
//-------------------------------------------------------------------------------------
// 1- Usa forEach para imprimir cada elemento de un array de números.
// const arrayNumeros = [14, 71, 96, 12, 52, 60, 36, 56, 89, 47, 8, 73, 66, 3, 84, 58, 96, 34, 3];

// arrayNumeros.forEach(numeros =>{
//     console.log(numeros);
// });

//-------------------------------------------------------------------------------------
// 2. Utiliza find para encontrar el primer número mayor que 50 en un array de números.

// const mayor50 = arrayNumeros.find((numeros) => numeros > 50);
// console.log(mayor50);

//-------------------------------------------------------------------------------------
// 3. Emplea filter para obtener todos los números pares de un array de números.
// const nrosPares = arrayNumeros.filter ((numeros) => numeros % 2 == 0);
// console.log(nrosPares);

//-------------------------------------------------------------------------------------
// 4. Utiliza some para verificar si un array de palabras contiene al menos una palabra de más de 10 caracteres.

// const arrayPalabrasRandom = ['Flor',
//     'Perro',
//     'Gato',
//     'Árbol',
//     'Casa',
//     'Sol',
//     'Montaña',
//     'Lápiz',
//     'Río',
//     'Avión',
//     'Bustamante'
// ];
// console.log(arrayPalabrasRandom);
// const masDe10 = arrayPalabrasRandom.some((palabras) => palabras.length >= 10);
// console.log(masDe10);
//-------------------------------------------------------------------------------------
// 5. Usa map para duplicar cada elemento de un array de números.

// const nrosDupli = arrayNumeros.map((numeros) => numeros * 2);
// console.log(nrosDupli);
//-------------------------------------------------------------------------------------
// 6. Emplea reduce para obtener la suma de todos los elementos de un array de números.

// const sumaReduce = arrayNumeros.reduce((suma, numeros) => suma + numeros);
// console.log(sumaReduce);
//-------------------------------------------------------------------------------------
// 7. Utiliza sort para ordenar un array de palabras alfabéticamente.
// const palabrasOrden = arrayPalabrasRandom.sort((a, b) => a.localeCompare(b));
// console.log(palabrasOrden);
//-------------------------------------------------------------------------------------
// 8. Crea una clase Alumno con las propiedades "nombre", "edad" y "notas" (un array de números). Crea varios objetos Alumno y realiza operaciones con ellos (calcular promedio de notas, encontrar el alumno con la mejor nota, etc.) utilizando funciones de orden superior.

// class Alumno {
//     constructor(nombre, edad, notas) {
//         this.nombre = nombre;
//         this.edad = edad;
//         this.notas = notas;
//     }
//     calcularPromedio() {
//         const sumaNotas = this.notas.reduce((total, nota) => total + nota, 0);
//         return sumaNotas / this.notas.length;
//     }
// }
// function encontrarMejorNota(alumnos) {
//     return alumnos.reduce((mejorAlumno, alumno) => {
//     return alumno.calcularPromedio() > mejorAlumno.calcularPromedio() ? alumno : mejorAlumno;
// });
// }
// const alumnos = [
//     new Alumno("Agustin", 30, [8, 7, 9]),
//     new Alumno("Sofia", 24, [6, 8, 9]),
//     new Alumno("Mateo", 31, [9, 9, 10])
// ]
// const promedioNotasTotal = alumnos.reduce((total, alumno) => total + alumno.calcularPromedio(), 0) / alumnos.length;
// console.log("El promedio de notas es: " + promedioNotasTotal);

// const mejorAlumno = encontrarMejorNota(alumnos);
// console.log("El alumno con la mejor nota es:", mejorAlumno.nombre, "con un promedio de:", mejorAlumno.calcularPromedio());

//-------------------------------------------------------------------------------------
// 9. Utiliza map para convertir un array de temperaturas en grados Celsius a grados Fahrenheit.
// const arrayTemp = [3, 7, 0, -2, 3, 9, -2, 9, -3, -2, 20];
// const gradosF = arrayTemp.map((nro) => nro * (9/5 )+ 32);
// console.log(gradosF);

//-------------------------------------------------------------------------------------
// 10. Emplea filter para obtener todos los objetos de un array de productos que tengan un precio mayor a $250.

// const arrayProductos = [
//     { nombre: "Leche", precio: 1377 },
//     { nombre: "Pan", precio: 150 },
//     { nombre: "Huevos", precio: 873 },
//     { nombre: "Arroz", precio: 1208 },
//     { nombre: "Pasta", precio: 1633 },
//     { nombre: "Aceite", precio: 1967 },
//     { nombre: "Tomates", precio: 1565 },
//     { nombre: "Papas", precio: 1538 },
//     { nombre: "Yogur", precio: 1562 },
//     { nombre: "Cereal", precio: 190 },
// ];
// const productosMayoresA250 = arrayProductos.filter((nero) => nero.precio > 250);
// console.log(productosMayoresA250);
//-------------------------------------------------------------------------------------
// 11. Usa forEach para imprimir la tabla de multiplicar de un número específico (por ejemplo, 5).

//-------------------------------------------------------------------------------------
// 12. Utiliza find para encontrar el primer objeto producto con un descuento mayor al 30% en un array de productos.
//                           Descomentar ejercicio 10 para que funcione.

// const mayor30 = arrayProductos.find ((producto) => {
//     const descuento = producto.precio * 0.3;
//     return producto.precio - descuento > 0;
// });
// console.log(mayor30);

//-------------------------------------------------------------------------------------
// 13. Emplea some para verificar si hay al menos un alumno con edad menor a 18 años en un array de objetos Alumno.
// const nomina = [
//     { nombre: 'Santiago', edad: 19, },
//     { nombre: 'Valentina', edad: 12, },
//     { nombre: 'Mateo', edad: 17, },
//     { nombre: 'Isabella', edad: 13, },
//     { nombre: 'Sebastián', edad: 15, },
//     { nombre: 'Sofía', edad: 14, },
//     { nombre: 'Martín', edad: 5, },
//     { nombre: 'Camila', edad: 13, },
//     { nombre: 'Lucas', edad: 17, },
//     { nombre: 'Victoria', edad: 11, },
// ];
// const menores18 = nomina.some((alumnos) => alumnos.edad < 18);
// console.log("Hay por lo menos un alumno menor de 18: " + menores18);
//-------------------------------------------------------------------------------------

// 14. Usa reduce para obtener el producto de todos los elementos de un array de números.
// const reduceProductos = arrayProductos.reduce((nombre, producto)=> nombre * producto.precio, 1);
// console.log(reduceProductos);

//-------------------------------------------------------------------------------------
// 15. Utiliza sort para ordenar un array de fechas en orden ascendente.

// const fechas = [
//     new Date('2024-05-1'),
//     new Date('2024-05-12'),
//     new Date('2024-05-23'),
// ]
// fechas.sort((a, b)=> a-b);
// console.log(fechas);

//-------------------------------------------------------------------------------------
// 16. Emplea map para obtener un array de objetos con las edades de los alumnos en años-luz (dividiendo la edad en años por 9.46 trillones, que es la cantidad de kilómetros que recorre la luz en un año).

//-------------------------------------------------------------------------------------
// 17. Utiliza filter para obtener todos los números primos de un array de números.

//-------------------------------------------------------------------------------------
// 18. Emplea reduce para obtener el promedio de las edades de un array de objetos Alumno.
// const promedioEdad = nomina.reduce((suma, anios) => suma + anios.edad, 0);
// const totalPromEdad = promedioEdad/nomina.length;
// console.log(totalPromEdad);

//-------------------------------------------------------------------------------------
// 19. Usa forEach para imprimir todos los días de la semana en inglés.
const diasSemana = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
];
const enIngles = diasSemana.forEach(dia => console.log(dia));
//-------------------------------------------------------------------------------------
// 20. Utiliza sort para ordenar un array de objetos producto por precio de forma ascendente.

// arrayProductos.sort((a, b) => a.precio - b.precio);
// console.log(arrayProductos);

//-------------------------------------------------------------------------------------
// 21. Expresar el siguiente script en una sola linea de codigo:

// let total = 0
// for (let i = 1; i <= 10; i++) {
//     total += i
// }
// console.log(total

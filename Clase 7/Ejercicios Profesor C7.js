

//-------------------------------------------------------------------------------------
//-------------- Ejercicios usando Funciones de Orden Superior-------------I-
//-------------------------------------------------------------------------------------
// 1- Usa forEach para imprimir cada elemento de un array de números.
const arrayNumeros = [14, 71, 96, 12, 52, 60, 36, 56, 89, 47, 8, 73, 66, 3, 84, 58, 96, 34, 3];

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

const arrayPalabrasRandom = ['Flor', 'Perro', 'Gato', 'Árbol', 'Casa', 'Sol', 'Montaña', 'Lápiz', 'Río', 'Avión', 'Bustamante'];
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

class Alumno {
    constructor(nombre, edad, notas) {
        this.nombre = nombre;
        this.edad = edad;
        this.notas = notas;
    }
    calcularPromedio() {
        const sumaNotas = this.notas.reduce((total, nota) => total + nota, 0);
        return sumaNotas / this.notas.length;
    }
}
function encontrarMejorNota(alumnos) {
    return alumnos.reduce((mejorAlumno, alumno) => {
        return alumno.calcularPromedio() > mejorAlumno.calcularPromedio() ? alumno : mejorAlumno;
    });
}
const alumnos = [
    new Alumno("Agustin", 30, [8, 7, 9]),
    new Alumno("Sofia", 24, [6, 8, 9]),
    new Alumno("Mateo", 31, [9, 9, 10])
]
const promedioNotasTotal = alumnos.reduce((total, alumno) => total + alumno.calcularPromedio(), 0) /alumnos.length;
console.log("El promedio de notas es: " + promedioNotasTotal);

const mejorAlumno = encontrarMejorNota(alumnos);
console.log("El alumno con la mejor nota es:", mejorAlumno.nombre, "con un promedio de:", mejorAlumno.calcularPromedio());


//-------------------------------------------------------------------------------------
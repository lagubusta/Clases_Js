// function porCadaElemento(myArray, myFuncion){
//     for (const elemento of myArray){
//         myFuncion (elemento);
//     }
// }
// const numeros = [1, 2, 3, 4, 5, 6];
// porCadaElemento(numeros, console.log);

// let total = 0;
// function acumuladora(numero){
//     total += numero;
// }
// porCadaElemento(numeros, acumuladora);
// console.log("Total acumulado: " + total);


// const numerosDuplicados = [];
// porCadaElemento(numeros, (elemento)=>{
//     numerosDuplicados.push(elemento * 2);
// })
// console.log(numerosDuplicados.join(", "));

// let numerosConIva = [];
// numeros.forEach((num) =>{
//     numerosConIva.push(num * 1.21);
// });
// console.log(numerosConIva);

const cursos = [
    { nombre: 'JS', precio: 150000 },
    { nombre: 'ReactJS', precio: 220000 },
    { nombre: 'HTML', precio: 50000 },
    { nombre: 'JAVA', precio: 220000 }
];
// const numeros = [1, 2, 3, 4, 5, 6];
// const numerosDesordenados = [ 1003, 22, 13, 4654, 35, -6];
// console.log(numerosDesordenados.sort((a, b) => a-b)); // Forma ascendente
// console.log(numerosDesordenados.sort((a, b) => b-a)); // Forma descendente

// const palabrasDesordenadas = [ 'Sofia', 'Agustin', 'Mateo', 'Ines', 'Ignacio', 'Carolina'];
// console.log(palabrasDesordenadas.sort((a, b) => a.localeCompare(b))); // Forma ascendente
// console.log(palabrasDesordenadas.sort((a, b) => b.localeCompare(a))); // Forma descendente


const cursosSort = [
    { nombre: 'JS', precio: 150000 },
    { nombre: 'ReactJS', precio: 220000 },
    { nombre: 'HTML', precio: 50000 },
    { nombre: 'JAVA', precio: 220000 }
];
cursosSort.sort ((a, b) =>{
    if( a.nombre > b.nombre){
        return 1;
    }
    if( a.nombre < b.nombre){
        return -1;
    }
    return 0;
}
)
console.log(cursosSort);






// REDUCE
// const numeros = [1, 2, 3, 4, 5, 6];
// const totalEnNumeros = numeros.reduce((acumulador, elemento) => acumulador + elemento, 0);
// console.log(totalEnNumeros);


// MAP

// const cursosConMap = cursos.map((elemento) => elemento.nombre)
// console.log(cursosConMap.join(", "));
// JS, ReactJS, HTML, JAVA

// SOME
// const resultado1 = cursos.some((elemento) => elemento.nombre === "JS");
// console.log(resultado1); // {nombre: 'JS', precio: 150000}
// const resultado2 = cursos.some((elemento) => elemento.nombre === "jS"); // undefined
// console.log(resultado2); // undefined
// const resultado3 = cursos.some((elemento) => elemento.nombre === "DW");
// console.log(resultado3); // undefined


// const actPrecio = cursos.map(elemento => {
//     return{
//         nombre: elemento.nombre,
//         nuevoPrecio: elemento.precio + 5555
//     }}
// )
// console.log(cursos);
// console.log(actPrecio)


// // FILTER
// const resultadoFilter = cursos.filter((elemento) => elemento.nombre.includes("JS"));
// console.log(resultadoFilter);



// // FIND
// const resultado1 = cursos.find((elemento) => elemento.nombre === "JS");
// console.log(resultado1); // {nombre: 'JS', precio: 150000}
// const resultado2 = cursos.find((elemento) => elemento.nombre === "jS");
// console.log(resultado2); // undefined
// const resultado3 = cursos.find((elemento) => elemento.nombre === "DW");
// console.log(resultado3); // undefined
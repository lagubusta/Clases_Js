function mayorQue(n){
    return (m) => m > n
}

let mayorQueDiez = mayorQue(10);
console.log(mayorQueDiez(20));
console.log(mayorQueDiez(8));

















// esta funcion es global ya que puse como nombre "inicio" y "fin" se puede usar en cualquier parte del codigo.

// function sumarRango(inicio, fin){

//     let total = 0;
//     for (let i = inicio; i <= fin; i++) {
//         total += i;
//     }
//     return total;
// }
// console.log(sumarRango(1, 10));

//-------------------------


// Defino una funcion anonima que me va a dar como resultado una funcion.

// "numero" es el numero que quiero dejar fijo.

// function mayorQue(numero){
//     return (numeroAComparar) => numeroAComparar > numero;
// }

// let mayorQueDiez = mayorQue(10);

// console.log(mayorQueDiez(12));




// ESTA FUNCION SERÍA LA "MADRE"
// function asignarOperacion(operacion) {
//     if (operacion == "sumar") {
//         return (a, b) => a + b;
//     }
//     else if (operacion == "restar") {
//         return (a, b) => a - b;
//     }
// }

// const funcionSumar = asignarOperacion("sumar"); // const funcionSumar = (a, b) => a + b
// const funcionRestar = asignarOperacion("restar"); // const funcionRestar = (a, b) => a - b

// console.log(funcionSumar(10, 5));
// console.log(funcionRestar(10, 5));





// RECIBIR UNA FUNCION POR PARAMETRO

// function porCadaElemento(myArray, myFuncion) { //paso una funion como parametro "myFuncion" y un "myArray" como segundo parametro.
//     for (const elemento of myArray) { // POR CADA ELEMENTO DE MYARRAY, EJECUTA LA FUNCION
//         myFuncion(elemento); // QUIERO QUE ESTO SE "APLIQUE" A CADA ELEMENTO DE MYARRAY (EL FOR RECORRE TODOS LOS ELEMENTO DEL ARRAY)
//     }
// }
// const numeros = [1, 2, 3, 4, 5, 6];
// porCadaElemento(numeros, console.log); // cuando paso una funcion como parametro no lleva ().
// // Los () los lleva cuando la defino o cuando la invoco, o la llamo.




// let total = 0;
// function acumuladora (numero){
//     total += numero;
// }
// porCadaElemento(numeros, acumuladora);
// console.log("Total Acumulado: " + total);



// const numerosDuplicados = [];

// porCadaElemento(numeros, (elemento) => {numerosDuplicados.push(elemento * 2);});
// console.log(numerosDuplicados.join(", "));


//----------------METODO forEach


// numerosDuplicados.forEach((numero) =>{
//     console.log(numero);
// })

// let nuevoArray = [];
// numerosDuplicados.forEach( (numero)=> {
//     nuevoArray.push(numeros -1);
// })

// console.log(nuevoArray);

// //----------------metodo Find

// const cursos = [ // es un array de objetos
//     { nombre: "JavaScript", cantidaAlumnos: 120 },
//     { nombre: "JavaScript", cantidaAlumnos: 130 },
//     { nombre: "React", cantidaAlumnos: 90 },
//     { nombre: "PHP", cantidaAlumnos: 60 },
// ];

// const resultadoFind = cursos.find((elemento) => elemento.nombre === "JavaScript");
// console.log(resultadoFind);
// // Filter
// const resultadoFilter = cursos.filter((elemento) => elemento.nombre.includes === "JavaScript");
// console.log(resultadoFilter);

// // const resultadoSome = cursos.some ((elemento) => elemento.nombre.some === )


// // MAP
// //Genera un nuevo array con lo que le digo que quiero

// const resultadoMap = cursos.map((elemento) => elemento.nombre);
// console.log(resultadoMap);
// //Usando map busco y acutalizo nuevos "datos"
// const actualizarCantidadDeAlumnos = cursos.map((elemento) => {
//     return {
//         nombreNuevo: elemento.nombre,
//         cantidadNueva: elemento.cantidaAlumnos + 20
//     }
// })
// console.log(actualizarCantidadDeAlumnos);


// // Reduce

// //ACUMULA COMO ESTO
// // function sumarRango(inicio, fin){

// //     let total = 0;
// //     for (let i = inicio; i <= fin; i++) {
// //         total += i;
// //     }
// //     return total;
// // }

// const numerosReduce = [1, 2, 3, 4, 5, 6];
// const totalEnNumeros = numerosReduce.reduce((acumulador, elemento) => acumulador + elemento, 10);
// console.log(totalEnNumeros);

// //SORT ES DESTRUCTIVO
// // Ordena de menor a mayor o de menor a mayor
// const numerosDesordenados = [991, 12, 43, 1, 1000, 6];
// console.log(numerosDesordenados);
// numerosDesordenados.sort((a,b) => a-b); // FORMA ASCENDENTE
// console.log(numerosDesordenados);
// numerosDesordenados.sort((a,b) => b-a); // FORMA DESCENDENTE
// console.log(numerosDesordenados);

// // sort usando objetos

// const cursosConSort = [ // es un array de objetos
//     { nombre: "JavaScript", cantidaAlumnos: 120 },
//     { nombre: "JavaScript", cantidaAlumnos: 130 },
//     { nombre: "React", cantidaAlumnos: 90 },
//     { nombre: "PHP", cantidaAlumnos: 60 },
// ];

// cursosConSort.sort((a,b) =>{
//     if(a.nombre > b.nombre){
//         return 1;
//     }
//     if(a.nombre < b.nombre){
//         return -1;
//     }
//     return 0;
// })
// console.log(cursosConSort);

// cursosConSort.sort((a,b) =>{
//     if(a.cantidaAlumnos > b.cantidaAlumnos){
//         return 1;
//     }
//     if(a.cantidaAlumnos < b.cantidaAlumnos){
//         return -1;
//     }
//     return 0;
// })
// console.log(cursosConSort);
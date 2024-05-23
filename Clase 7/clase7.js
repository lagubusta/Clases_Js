
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

function porCadaElemento(myArray, myFuncion) { //paso una funion como parametro "myFuncion" y un "myArray" como segundo parametro.
    for (const elemento of myArray) { // POR CADA ELEMENTO DE MYARRAY, EJECUTA LA FUNCION
        myFuncion(elemento); // QUIERO QUE ESTO SE "APLIQUE" A CADA ELEMENTO DE MYARRAY (EL FOR RECORRE TODOS LOS ELEMENTO DEL ARRAY)
    }
}
const numeros = [1, 2, 3, 4, 5, 6];
porCadaElemento(numeros, console.log); // cuando paso una funcion como parametro no lleva ().
// Los () los lleva cuando la defino o cuando la invoco, o la llamo.




let total = 0;
function acumuladora (numero){
    total += numero;
}
porCadaElemento(numeros, acumuladora);
console.log("Total Acumulado: " + total);



const numerosDuplicados = [];

porCadaElemento(numeros, (elemento) => {numerosDuplicados.push(elemento * 2);});
console.log(numerosDuplicados.join(", "));
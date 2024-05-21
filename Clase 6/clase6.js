//Metodos corresponden a función dentro de un objeto. objeto perro. método ladrar


//------------------------------ARRAYS

// cada producto en un carrito de compras es un "objeto".

//------------DECLARACION DEL ARRAY
// Siempre que se define array es en una constante

// Cada valor dentro del array tiene una posicion. Arranca por el valor 0.
// se "busca" así
// console.log(arrayNumerico[3]);

const arrayVacio = [];
// Array no se puede remplazar con otro tipo de dato.

const arrayNumerico = [1, 2, 3, 4, 5]; // Tipo numerico.

const arrayConLetras = ['a', 'b', 'c',] // tipo caracter se completa con ' '.

// const arrayConString = ["Hola", "mundo","como", "estas?"]; //Tipo String se completa con "".

const arrayBooleano = [true, false, true]; // Tipo booleano.

const arrayMixto = ["a", 'Hola', 2] //tipo mixto.
const arrayObjetos = [
    { nombre: "Productos1", cantidad: 8 },
    { nombre: "Productos2", cantidad: 9 }
] // Tipo Objetos

const arrayMixtoConObjetos = [
    "a", 'Hola', 2,
    { nombre: "Productos1", cantidad: 8 },

] // tipo mixto con objetos.

// console.log(arrayNumerico[3]);


// USAR < despues del let
// for (let index = 0; index < 5; index++) {
//     //alert(arrayNumerico[index]);
// }

// for (let index = 0; index < 5; index++) {
//     //alert(arrayMixtoConObjetos[index]);
// }

//---------------METODOS Y PROPIEDADES
//Length
//Sirve para saber cuantos datos estoy guardandoa dentro de un array.

// console.log([arrayNumerico.length]);

// DE ESTA FORMA ME ASEGURO QUE CUENTE TODO LO QUE ESTA DENTRO DEL, EN ESTE CASO, ARRAYNUMERICO.
// for (let index = 0; index < arrayNumerico.length; index++) {
//     alert(arrayMixtoConObjetos[index]);
// }

//---------------------Agregar objetos
//Para agregar elementros dentro de un array.

// // agrega elemnto al final.
// arrayMixto.push("al final"); 
// console.log(arrayMixto);
// // agrega elemnto al principio.
// arrayMixto.unshift("al principio"); 
// console.log(arrayMixto);

// //-------------QUITAR ELEMENTOS
// // Elimina el elemento del final.
// arrayMixto.pop("al final"); 
// console.log(arrayMixto);
// // Elimina el elemento del principio.
// //NO USAR "NUNCA".
// arrayMixto.shift("al principio"); 
// console.log(arrayMixto);
//---------------SLICE
// arrayMixto.splice(1, 2);
// va a eliminar los elementos dentro de las posiciones indicadas.
// console.log(arrayConString);
// arrayConString.splice(2,3);
// // el primera numero es la posicion en la que se va a parar y el segundo parametro es la cantidad que va a eliminar.
// console.log(arrayConString);


//-------------JOIN
// A todo el array lo arma en un solo string, como que los "concatena".
const arrayConString = ["Hola", "mundo","como", "va?"];
// console.log(arrayConString.join(", "));
// console.log(arrayConString.join(" "));
// console.log(arrayConString.join(" Una frase "));

//----------- CONCAT
// console.log (arrayConString.concat(arrayMixto));

//----------- SLICE

// Voy a contruir o generar un nuevo array, en este caso solo contiene el "mundo". Desde la posicion 1 hasta la posicion 2.
// const nuevoArrayConString = arrayConString.slice(1, 2);
// console.log(nuevoArrayConString);

//-------------- INDEXOF
// indica en que posicion se encuentra el "objeto".

// console.log(arrayConString.indexOf("como"));
//como se encuentra en la posicion 2.

//------------- USO DE INCLUDE
//Indica si existe o no existe un elemento dentro del array. NO DIFERENCIA MAYUSCULAS, TIENE QUE SER TAL CUAL.
// console.log(arrayConString.includes("Hola"));
// console.log(arrayConString.includes("como"));
// console.log(arrayConString.includes("Mundo"));

// --------------REVERSE
// muestra las cosas alreves.
// console.log(arrayConString);
// console.log(arrayConString.reverse());

// --------------
const arrayObjetosAgregados = [
    {nombre: 1, cantidad: 5},
    {nombre: 2, cantidad: 8},
];
arrayObjetosAgregados.push({nombre: "Producto3", cantidad: 2});
console.log(arrayObjetos);

// -------------- FOR OF
// defino una variable y toma los atributos de productos y se los guarda
const productos = [
    {id: 1, nombre: "Arroz"},
    {id: 2, nombre: "Pollo"}
    {id: 3, nombre: "Carne"}
]
for (const index of productos){
    console.log("El ID es: " + index.id);
    console.log("El nombre del producto es: " + index.nommbre);
    
}

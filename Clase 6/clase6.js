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

const arrayNumerico = [1, 2, 3, 5, 6]; // Tipo numerico.

const arrayConLetras = ['a', 'b', 'c',] // tipo caracter se completa con ' '.

const arrayConString = [ "Hola", "mundo" ]; //Tipo String se completa con "".

const arrayBooleano = [true, false, true]; // Tipo booleano.

const arrayMixto = ["a", 'Hola', 2] //tipo mixto.
const arrayObjetos = [
    {nombre: "Productos1", cantidad: 8},
    {nombre: "Productos2", cantidad: 9}
] // Tipo Objetos

const arrayMixtoConObjetos = [
    "a", 'Hola', 2,
    {nombre: "Productos1", cantidad: 8},

] // tipo mixto con objetos.

console.log(arrayNumerico[3]);
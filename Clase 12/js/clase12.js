// let temperatura = 30;
// if(temperatura > 24){
//     console.log("Hace calor");
// } else {
//     console.log("Esta templado");
// }

///////////

// let temperatura = 30;

// temperatura > 24 ? console.log("Hace calor con ternario") : console.log("Esta templado con ternario");


// const usuario = {
//     nombre: "John Doe",
//     edad: 22
// }

// 
// // declaramos y asignamos condicionalmente
// const permiso = (usuario.edad >= 18) ? true : false

// // mostramos el mensaje
// permiso ? console.log("Puede comprar cerveza") : console.log("No puede comprar")

// const usuario = {
//     nombre: "Agustin",
//     edad: 30,
// }

// const permiso = (usuario.edad >= 18) ? true : false;
// console.log(permiso);
// permiso ?  console.log("Puede consumir alcohol") : console.log("No puede consumir alcohol");


// const carrito = [];
// if(carrito.length === 0 ){
//     console.log("Carrito vacio");
// } else{
//     console.log("Carrito NO vacio");
// };

// const carrito = [1];
// carrito.length === 0 && console.log("Carrito vacio");


// console.log( 0 || "Falsy")  // Falsy
// console.log( 40 || "Falsy")  // 40
// console.log( null || "Falsy")  // Falsy
// console.log( undefined || "Falsy")  // Falsy
// console.log( "Hola Mundo" || "Falsy")  // Hola Mundo
// console.log( "" || "Falsy")  // Falsy
// console.log( NaN || "Falsy")  // Falsy
// console.log( true || "Falsy")  // true
// console.log( false || "Falsy")  // Falsy



const usuario1 = {
    nombre: "Agustin",
    edad: 30,
}
const usuario2 = null;
console.log(usuario1 || "el usuario no existe")
console.log(usuario2 || "el usuario no existe")
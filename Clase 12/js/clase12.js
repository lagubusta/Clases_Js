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


// ## Operador Logico ?? o Nullish
// const usuario1 = {
//     nombre: "Agustin",
//     edad: 30,
// }
// const usuario2 = null;
// console.log(usuario1 || "el usuario no existe");
// console.log(usuario2 || "el usuario no existe");

// const carrito = localStorage.getItem('cart') || console.log("El carrito esta vacio");
// console.log(carrito);


// ## Acceso condicional a un objeto
/////////////////////////////////////////////
// const usuario1 = {
//     nombre: "Agustin",
//     edad: 30,
// }
// const usuario2 = null;

// console.log(usuario1?.nombre || "El usuario no existe");
// console.log(usuario2?.nombre || "El usuario no existe");
/////////////////////////////////////////////

// const usuario1 = {
//     nombre: "Agustin",
//     edad: 30,
//     cursos: {
//         desarrolloWeb: "Aprobado",
//         javascript: "En curso",
//     }
// }
// const usuario2 =  {
//     nombre: "Sofia",
//     edad: 24,
//     cursos: {
//         desarrolloWeb: "No",
//         javascript: "No",
//     }
// }null;

// console.log(usuario1?.cursos?.desarrolloWeb || "El usuario no existe");
// console.log(usuario2?.cursos?.desarrolloWeb || "El usuario no existe");
/////////////////////////////////////////////

// Desestructuración

// const usuario1 = {
//     nombre: "Agustin",
//     edad: 30,
//     cursos: {
//         desarrolloWeb: "Aprobado",
//         javascript: "En curso",
//     }
// }
// let {nombre, edad, cursos: { desarrolloWeb, javascript}} = usuario1; 
// console.log(desarrolloWeb);
// console.log(javascript);

// console.log(usuario1);
// let {nombre: nombre_usuario, edad: edad_usuario, cursos: { desarrolloWeb, javascript}} = usuario1; 

// console.log(nombre);
// console.log(desarrolloWeb);
// console.log(javascript);

// const producto1 = {
//     nombre: "Azucar",
//     precios: 1080,
// };
// const {nombre: nombre_producto, precio: precio_producto} = producto1;

// console.log(nombre_producto);
// console.log(nombre_usuario);
/////////////////////////////////////////////

// #### Desestructuración en parámetros.

const usuario1 = {
    nombre: "Agustin",
    edad: 30,
    cursos: {
        desarrolloWeb: "Aprobado",
        javascript: "En curso",
    }
}

const desestructurarObjetos = (objeto) => {
    const {nombre, edad} = objeto;
    console.log(nombre, edad);
}
desestructurarObjetos(usuario1);
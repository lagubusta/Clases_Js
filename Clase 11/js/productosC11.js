// // localStorage

// localStorage.setItem("Clave de mi LocalStorage", "Valor de mi LocalSotrage");
// localStorage.setItem("Booleano", true);
// localStorage.setItem("Array", "[1, 2, 3, 4, 5]");

// localStorage.setItem('numeros', 1234);

// let stringLocal = localStorage.getItem('Clave de mi LocalStorage');
// // console.log(stringLocal);

// // console.log(localStorage.getItem('numeros'));

// // sessionStorage

// sessionStorage.setItem("Clave de mi sessionStorage", "Valor de mi sessionStorage");
// sessionStorage.setItem("Booleano session", true);
// sessionStorage.setItem("Array session", "[1, 2, 3, 4, 5]");

// sessionStorage.setItem('numeros session', 1234);

// let stringSession = sessionStorage.getItem('Clave de mi sessionStorage');
// console.log(stringSession);

// console.log(sessionStorage.getItem('numeros session'));

// localStorage.removeItem('numeros');
// sessionStorage.removeItem('Array session');

// Vaciar todo el storage
// localStorage.clear();
// sessionStorage.clear();
// Borrar un item del storage
// localStorage.removeItem('numeros');
// sessionStorage.removeItem('Array session');

// for(let i = 0; i < localStorage.length ; i++){
//     let clave = localStorage.key(i);
//     console.log("La key es: "+ clave +", el value es: " +localStorage.getItem(clave));
// }

////// jason

const productos = {
    id: 1,
    nombre: "Azucar",
    precio: 1080,
}
const productosJSON = JSON.stringify(productos);

// console.log(productos);
// console.log(productosJSON);


localStorage.setItem ('prodcutos', productosJSON);

const prodcutosOBJECT = JSON.parse(productosJSON);
console.log(productosJSON);
console.log(prodcutosOBJECT);

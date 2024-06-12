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

// const productos = {
//     id: 1,
//     nombre: "Azucar",
//     precio: 1080,
// }
// const productosJSON = JSON.stringify(productos);

// // console.log(productos);
// // console.log(productosJSON);


// localStorage.setItem ('productos', productosJSON);

// const productosOBJECT = JSON.parse(productosJSON);
// // console.log(productosOBJECT);
// // console.log(productosJSON);

// const productoRecuperadoDelLocalStorage = JSON.parse(localStorage.getItem('productos'))
// console.log(productoRecuperadoDelLocalStorage);


/////////////////////////////////////////


// const productos = [
//     {
//         id: 1,
//         nombre: "Azucar",
//         precio: 1080,
//     },
//     {
//         id: 2,
//         nombre: "Yerba",
//         precio: 1500,
//     },
//     {
//         id: 3,
//         nombre: "Dulce de Leche",
//         precio: 2800.55,
//     },
// ];

// const guardarEnLocalStorage = (key, value)=> localStorage.setItem(key, value);

// for (const producto of productos) {
//     guardarEnLocalStorage("Producto_" +producto.id, JSON.stringify(producto));
// }

// guardarEnLocalStorage('productos', JSON.stringify(productos));


// console.log(JSON.parse(localStorage.getItem('productos')));



/////////////////////////////////////////////////

// Armar un carrito de compras

const products = [
    { id: 1, nombre: "Azucar", precio: 1080, },
    { id: 2, nombre: "Yerba", precio: 1700, },
    { id: 3, nombre: "Dulce de Leche", precio: 500, },
    { id: 4, nombre: "Miel", precio: 2300, },
    { id: 5, nombre: "Manetca", precio: 150, },
    { id: 6, nombre: "Café", precio: 6000, },
];

let cart = loadCartFromLocalStorage();

function addToCart(productId, cantidad) {
    const product = products.find(p => p.id === productId);
    if (!product) {
        console.error("El producto no fue encontrado");
        return;
    }
    const cartItem = cart.find(item => item.id === productId);
    if (cartItem) {
        cartItem.cantidad += cantidad;
        cartItem.subTotal = cartItem.cantidad * product.precio;
    } else {
        cart.push({
            id: product.id,
            nombre: product.nombre,
            precio: product.precio,
            cantidad: cantidad,
            subTotal: cantidad * product.precio,
        })
    }
    saveCartToLocalStorage();
    renderCart();
};

function renderProducts() {
    const productList = document.getElementById('product-list');
    productList.innerHTML = '';
    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.innerHTML = `
        <p>${product.nombre} - $${product.precio}</p>
        <button onclick="addToCart(${product.id}, 1)">Agregar al carrito</button>
        `;
        productList.appendChild(productDiv);
    });
}

function renderCart() {
    const cartDiv = document.getElementById('cart');
    cartDiv.innerHTML = '';
    cart.forEach(item => {
        const cartItemDiv = document.createElement('div');
        cartItemDiv.innerHTML = `
        <p>ID: ${item.id}, Nombre: ${item.nombre}, Cantidad: ${item.cantidad}, Precio total ${item.totalprecio}</p>
        `;
        cartDiv.appendChild(cartItemDiv);
    }
    )
}

function saveCartToLocalStorage() {
    localStorage.setItem('cart', JSON.stringify(cart));
}
function loadCartFromLocalStorage() {
    const cartData = localStorage.getItem('cart');
    return cartData ? JSON.parse(cartData) : [];
}
document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
    renderCart();
})
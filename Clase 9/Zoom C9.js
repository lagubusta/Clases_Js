const tituloH1 = document.getElementById('titulo');
// console.log(tituloH1.innerText);

const contenedores = document.getElementsByClassName('contenedor');
// console.log(contenedores[0].innerText);
// console.log(contenedores[0].innerHTML);
// console.log(contenedores[1].innerText);
// console.log(contenedores[2].innerText);
// console.log(contenedores[3].innerText);



const secciones = document.getElementsByTagName('section');
// console.log(secciones);
// console.log(secciones);

// for (contenedor of contenedores) {
//     console.log(contenedor.innerText);
// }

tituloH1.innerText = "Hola Agus";

contenedores[0].innerHTML = `
    <h5>Hola Mundo ¿Como están?</h5>
    <p>Hola a todos</p>`;

contenedores[0].classList.add('clase_nueva');


const claseNueva = document.getElementsByClassName('clase_nueva');
claseNueva[0].style.color = 'red';

claseNueva[0].id = 'nuevoID';


const cuerpo = document.body;
cuerpo.style.backgroundColor = 'green';
cuerpo.style.padding = '1rem';

const articuloDiv = document.createElement('article');
articuloDiv.id = 'articulo';
articuloDiv.classList.add('notas', 'texto');

cuerpo.appendChild(articuloDiv);
articuloDiv.remove();


const ejeInput1 = document.createElement('input');
ejeInput1.id = 'nombre';
ejeInput1.type = 'text';
ejeInput1.style.backgroundColor = 'grey';
cuerpo.appendChild(ejeInput1);

const ejeInput2 = document.createElement('input');
ejeInput2.id = 'edad';
ejeInput2.type = 'number';
ejeInput2.style.backgroundColor = 'red';
cuerpo.appendChild(ejeInput2);

document.getElementById('nombre').value = 'Agustin';
document.getElementById('edad').value = 30;

const cabecera = document.getElementById('header');
const navegacion = document.createElement('navbar');
const nav = document.createElement('nav');
const ul = document.createElement('ul');

cabecera.appendChild(navegacion);
navegacion.appendChild(nav);
nav.appendChild(ul);
navegacion.className = 'navbar';

const links = ["Index", "Products", "Contact"];

for (const link of links) {
    const li = document.createElement('li');
    li.innerHTML = `<a href="${link.toLocaleLowerCase()}.html">${link}
    </a>`
    ul.appendChild(li);
}

cabecera.style.backgroundColor = 'pink';
cabecera.style.width = '100%';
ul.style.color = 'white';

const producto = {
    id: 1,
    nombre: "Azucar",
    precio: 1050.56,
}

const divProducto = document.createElement('div');
cuerpo.appendChild(divProducto);
let literal = `ID ${producto.id} - Nombre: ${producto.nombre} - Precio: $${producto.precio}`;
const textoH4 = document.createElement('h4');
textoH4.innerHTML = literal;
divProducto.appendChild(textoH4);




const productos = [
    {
        id: 1,
        nombre: "Azucar",
        precio: 1050.56,
    },
    {
        id: 2,
        nombre: "Leche",
        precio: 1250,
    },
    {
        id: 3,
        nombre: "Café",
        precio: 4500,
    },
    {
        id: 4,
        nombre: "Manzana",
        precio: 250,
    },
];


cuerpo.appendChild(divProducto);

for (const producto of productos){
    let literal = `ID ${producto.id} - Nombre: ${producto.nombre} - Precio: $${producto.precio}`;
const textoH4 = document.createElement('h4');
textoH4.innerHTML = literal;
divProducto.appendChild(textoH4);
}

let parrafo = document.querySelector("#contenedor p")

let contenedor = document.querySelector("#contenedor");
parrafo = document.querySelector(".texto");


let contenedoresConQuery = document.querySelectorAll('.contenedor');
console.log(contenedoresConQuery);


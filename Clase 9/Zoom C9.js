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

contenedores[1].classList.add('clase_nueva');
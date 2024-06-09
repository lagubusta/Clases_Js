const mainBody = document.querySelector('#main');
const boton = document.createElement('button');
boton.textContent = 'Click';
boton.type = 'button';
mainBody.appendChild(boton);
boton.style.backgroundColor = 'yellow';
boton.style.padding = '1rem';
boton.style.width = '6rem';
boton.style.margin = '2rem';
boton.style.fontSize = '1.2rem'

// Asignar evento Opcion 1: addEventListener()
// boton.addEventListener ('click', respuestaAlClick);
// function respuestaAlClick()function respuestaAlClick(){
//     boton.style.backgroundColor = 'red';
//     boton.style.color = 'white';
// }

// // Asignar evento Opción 4: Funión Anónima dentro de addEventListener().
// boton.addEventListener ('click', () => {
//     boton.style.backgroundColor = 'pink';
//     boton.style.color = 'black';
// });

// Asignar evento  Opción 2: .on
// boton.onclick = () => {
//     boton.style.backgroundColor = 'red';
//     boton.style.color = 'white';
// }

boton.addEventListener('mouseover', () => {
    boton.style.color = 'black';
    boton.style.backgroundColor ='pink';
});

boton.addEventListener('mouseout', () => {
    boton.style.color = 'white';
    boton.style.backgroundColor ='grey';
});



// ##### Ejemplo de evento de mouse
let inicioH1 = document.getElementById('inicioH1');

inicioH1.addEventListener('mouseover', () => {
    inicioH1.style.color ='blue';
});

inicioH1.addEventListener('mouseout', () => {
    inicioH1.style.color ='black';
});
// Ejercicios Clase 11
//-------------------------------------------------------------------------------------
// globales
const cuerpo = document.body;
// Ejercicios sobre el DOM
//-------------------------------------------------------------------------------------
//Ejercicio 1: Crea un botón en el HTML y, cuando se haga clic en él, muestra un mensaje en la consola.

// const boton = document.createElement('button');
// cuerpo.appendChild(boton);
// boton.textContent = 'Hace click';
// boton.addEventListener('click', respuestaAlClick);
// function respuestaAlClick(){
//     console.log("Hiciste Click Eje1C11");
// }
//-------------------------------------------------------------------------------------
// Ejercicio 2: Añade un párrafo al HTML y cambia su contenido usando JavaScript cuando se haga clic en un botón.
// const boton = document.createElement('button');
// cuerpo.appendChild(boton);
// boton.textContent = 'Hace click';

// boton.addEventListener('click', respuestaAlClick);
// function respuestaAlClick() {
//     const parrafoEje1 = document.createElement ('p');
//     cuerpo.appendChild (parrafoEje1);
//     parrafoEje1.textContent = "Completaste Ejercicio 2 de la clase 11";

// }
//-------------------------------------------------------------------------------------
// Ejercicio 3: Crea una lista en HTML y añade elementos a ella dinámicamente con JavaScript.

// const boton = document.createElement('button');
// cuerpo.appendChild(boton);
// boton.textContent = 'Hace click';
// const arrayLi = [ 'Producto 1', 'Producto 2', 'Producto 3', 'Producto 4'];
// const uliEje3 = document.getElementById ('uiEje3');
// for(const ppp of arrayLi) {
//     let producttt = `${ppp}`;
//     const li = document.createElement('li');
//     li.innerText = producttt;
//     uliEje3.appendChild (li);
// }

//-------------------------------------------------------------------------------------
// Ejercicio 4: Cambia el color de fondo de una página web cuando se haga clic en un botón.

// const boton = document.createElement('button');
// cuerpo.appendChild(boton);
// boton.textContent = 'Hace click';

// boton.addEventListener('click', respuestaAlClick);
// function respuestaAlClick() {
//     cuerpo.style.backgroundColor = 'Black';
// }
//-------------------------------------------------------------------------------------
// Ejercicio 5: Oculta y muestra un div cuando se haga clic en un botón.
// const boton = document.createElement('button');
// boton.textContent = 'Mostrar';
// cuerpo.appendChild(boton);

// const parrafoMostrar = document.createElement('p');
// parrafoMostrar.textContent = 'Este parafo';
// parrafoMostrar.style.display = 'none';
// cuerpo.appendChild(parrafoMostrar);

// boton.addEventListener('click', respuestaAlClick);
// function respuestaAlClick() {
//     if(parrafoMostrar.style.display === 'none'){
//         parrafoMostrar.style.display = 'block';
//         bonton.textContent = 'Ocultar';
//     } else {
//         parrafoMostrar.style.display = 'none';
//         boton.textContent = 'Mostrar';
//     }
// };
//-------------------------------------------------------------------------------------
// Ejercicio 6: Crea un input de texto y un botón, y muestra el texto del input en un div cuando se haga clic en el botón.

// const inpTexto = document.createElement('input');
// inpTexto.type = 'text';
// cuerpo.appendChild(inpTexto);

// const boton = document.createElement('button');
// boton.textContent = 'Enviar';
// cuerpo.appendChild(boton);

// boton.addEventListener('click', cargarInput);
// function cargarInput () {
//     const divTexto = document.createElement('div');
//     divTexto.textContent = inpTexto.value;
//     cuerpo.appendChild(divTexto);
// };

//-------------------------------------------------------------------------------------
// Ejercicio 7: Cambia la imagen de una etiqueta <img> cuando se haga clic en un botón.

// const imgCargada = document.createElement('img');
// imgCargada.id = 'imgCargadaEje7C11'
// imgCargada.style.width = '150px'
// imgCargada.src = `./img/001.webp`;
// cuerpo.appendChild(imgCargada);
// const boton = document.createElement('button');
// boton.textContent = 'Siguiente';
// cuerpo.appendChild(boton);
// let nro = 1;
// const totalImg = 3;
// boton.addEventListener('click', sig);
// function sig () {
//     nro++;
//     if(nro > totalImg){
//         nro = 1;
//     }
//     imgCargada.src = `./img/00${nro}.webp`;
// };
//-------------------------------------------------------------------------------------
// Ejercicio 8: Añade una clase CSS a un elemento HTML cuando se haga clic en un botón.

// const elementoEje8C11 = document.createElement('div');
// elementoEje8C11.id = 'IdElementoEje8C11';
// elementoEje8C11.textContent = 'Cuando hagas click va a cambiar el color del DIV a rojo. Cualquier modificación ir al Css a Eje8C11';
// cuerpo.appendChild(elementoEje8C11);

// const boton = document.createElement('button');
// boton.textContent = 'Cargar clase al div';
// cuerpo.appendChild(boton);

// boton.addEventListener('click', masClase);
// function masClase () {
//     elementoEje8C11.className = ('NuevaClase');
// }
//-------------------------------------------------------------------------------------
// Ejercicio 9: Crea una tabla en HTML y añade filas dinámicamente con JavaScript.

// // Crear el botón para agregar filas
// const boton = document.createElement('button');
// boton.textContent = 'Agregar Fila';
// cuerpo.appendChild(boton);

// // Crear un div contenedor para la tabla
// const divTabla = document.createElement('div');
// divTabla.id = 'IdDivTabla';
// cuerpo.appendChild(divTabla);

// // Crear la tabla y añadirla al div
// const tabla = document.createElement('table');
// tabla.style.border ='1px solid black';
// tabla.style.borderCollapse = 'collapse';
// divTabla.appendChild(tabla);

// // Crear un div contenedor para la tabla
// const encabezadoTabla = document.createElement('thead');
// tabla.appendChild(encabezadoTabla);

// const filaEncabezado = document.createElement('tr');
// encabezadoTabla.appendChild(filaEncabezado);

// const columnaEncabezado1 = document.createElement('th');
// columnaEncabezado1.textContent = 'Columna 1';
// columnaEncabezado1.style.border = '1px solid black';
// filaEncabezado.appendChild(columnaEncabezado1);

// const columnaEncabezado2 = document.createElement('th');
// columnaEncabezado2.textContent = 'Columna 2';
// columnaEncabezado2.style.border = '1px solid black';
// filaEncabezado.appendChild(columnaEncabezado2);

// // Crear el cuerpo de la tabla
// const cuerpoTabla = document.createElement ('tbody');
// tabla.appendChild(cuerpoTabla);

// // Función para agregar una fila a la tabla
// boton.addEventListener('click', agregarFila);
// function agregarFila() {
//     const nuevaFila = document.createElement('tr');

//     const nuevaCelda1 = document.createElement('td');
//     nuevaCelda1.textContent = `Celda 1`;
//     nuevaCelda1.style.border = '1px solida black';
//     nuevaFila.appendChild(nuevaCelda1);

//     const nuevaCelda2 = document.createElement('td');
//     nuevaCelda2.textContent = `Celda 2`;
//     nuevaCelda2.style.border = '1px solid black';
//     nuevaFila.appendChild(nuevaCelda2);

//     cuerpoTabla.appendChild(nuevaFila);
// }

//-------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------

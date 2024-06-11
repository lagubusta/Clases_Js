// PENDIENTES
// 13, 14, 15, 22
//-------------------------------------------------------------------------------------
// Ejercicios de Manipulación del DOM
//-------------------------------------------------------------------------------------
// Selección de Elementos
//-------------------------------------------------------------------------------------
// En html <!-- Ejercicio 1 -->
// 1. Seleccionar un Elemento por su ID: Usa document.getElementById para seleccionar un elemento con el ID titulo y muestra su contenido en la consola.

// const tituloH1 = document.getElementById('titulo');
// console.log(tituloH1.innerText +" Esto se imprime por consola");
//-------------------------------------------------------------------------------------
// En html <!-- Ejercicio 2 -->
// 2. Seleccionar Elementos por su Clase: Usa document.getElementsByClassName para seleccionar todos los elementos con la clase item y muestra su número en la consola.

// const contenedores = document.getElementsByClassName('contenedor');
// console.log("En el HMTL tenemos " +contenedores.length + " divs con la clase contenedor");
//-------------------------------------------------------------------------------------
// En html <!-- Ejercicio 3 -->
// 3. Seleccionar Elementos por su Etiqueta: Usa document.getElementsByTagName para seleccionar todos los elementos <p> y muestra su número en la consola.

// const parrafos = document.getElementsByTagName('p');
// const div = document.getElementsByTagName('div');
// console.log("En el HMTL tenemos " + div.length + " que tiene " +parrafos.length + " etiquetas p");
//
//-------------------------------------------------------------------------------------
// En html <!-- Ejercicio 4 -->
// 4. Seleccionar el Primer Elemento que Coincida con un Selector: Usa document.querySelector para seleccionar el primer elemento con la clase item y cambia su color de fondo a azul.

// const primerDiv = document.querySelector('div');
// primerDiv.style.backgroundColor = 'blue';
//-------------------------------------------------------------------------------------
// En html <!-- Ejercicio 5 -->
// Seleccionar Todos los Elementos que Coincidan con un Selector: Usa document.querySelectorAll para seleccionar todos los elementos con la clase item y cambia su color de texto a rojo.

// let todosLosDivs = document.querySelectorAll('.item');
// todosLosDivs.forEach(function(item) {
//     item.style.backgroundColor = 'red';
//     item.style.color = 'white';
// });
// console.log(todosLosDivs);
//-------------------------------------------------------------------------------------
//----------------------------Creación de Elementos ----------------------------
//-------------------------------------------------------------------------------------
// En html <!-- Ejercicio 6 -->
// 6. Crear un Nuevo Elemento y Añadirlo al DOM: Usa document.createElement para crear un nuevo <div> y añadirlo al cuerpo del documento.
// Cree un div dentro del body e hice el ejercicio sobre ese nuevo div

// const cuerpo = document.body;
// const eldiv = document.getElementById('divEje6');
// const elarticulo = document.createElement('article');
// elarticulo.id ="idArticulo"
// eldiv.style.backgroundColor ='red';
// eldiv.appendChild(elarticulo);
//-------------------------------------------------------------------------------------
// En html <!-- Ejercicio  7-->
// 7. Crear un Nuevo Elemento con Texto: Usa document.createElement y innerText para crear un nuevo <p> con texto y añadirlo al cuerpo del documento.

// const cuerpo = document.body;
// cuerpo.style.backgroundColor = 'green';
// const div1 = document.createElement('div');
// div1.id = 'idDiv1';
// cuerpo.appendChild(div1);
// const parrafo = document.createElement('p');
// parrafo.id = 'idParrafo';
// div1.appendChild(parrafo);
// parrafo.style.backgroundColor = 'red';
// parrafo.innerText ='esto dice';

//-------------------------------------------------------------------------------------
// En html <!-- Ejercicio 8-->
// 8. Crear un Nuevo Elemento con Atributos: Usa document.createElement y setAttribute para crear un nuevo <img> con un atributo src y añadirlo al cuerpo del documento

// const cuerpo = document.body;
// const nuevaImagen = document.createElement("img");
// nuevaImagen.setAttribute("src", "imagen.jpg");
// cuerpo.appendChild(nuevaImagen);

//-------------------------------------------------------------------------------------
// En html <!-- Ejercicio 9 -->
// 9. Crear y Añadir un Botón al DOM: Crea un nuevo botón <button> con el texto "Click me" y añádelo al cuerpo del documento.

// const cuerpo = document.body;
// const boton = document.createElement('button');
// cuerpo.appendChild(boton);
// boton.innerText = ('Click me');
//-------------------------------------------------------------------------------------
// En html <!-- Ejercicio 10 -->
// Crear un Nuevo Elemento y Añadirlo a un Contenedor Existente: Usa document.createElement y appendChild para crear un nuevo <li> y añadirlo a una lista <ul> existente con el ID lista.

// const cuerpo = document.body;
// const divContenedor = document.getElementById ('divC10');
// const ulContendedor = document.createElement('ul');
// const liContendedor = document.createElement('li');
// divContenedor.appendChild(ulContendedor);
// ulContendedor.appendChild(liContendedor);
// liContendedor.innerText = ('hola');

//-------------------------------------------------------------------------------------
// Aplicar Estilos
//-------------------------------------------------------------------------------------
// En html <!-- Ejercicio 11 -->
// 11. Cambiar el Estilo de un Elemento: Usa getElementById para seleccionar un elemento con el ID titulo y cambia su color de fondo a amarillo.

// const cuerpo = document.body;
// const cambioColor = document.getElementById('divC11');
// cambioColor.style.backgroundColor = ('yellow');
// cambioColor.innerText = 'Este div va a cambiar de color';

//-------------------------------------------------------------------------------------
// En html <!-- Ejercicio 12 -->
// 12. Aplicar Varios Estilos a un Elemento: Usa querySelector para seleccionar un elemento con la clase item y aplica varios estilos (color de texto, tamaño de fuente, y margen).

// const cuerpo = document.body;
// cuerpo.style.backgroundColor = 'pink';
// const nombreDiv = document.createElement ('div');
// const selecionado = document.querySelector ('div');
// nombreDiv.style.backgroundColor = 'red';
// nombreDiv.style.color = 'white';
// nombreDiv.style.fontSize = '1.2rem';
// nombreDiv.innerText = 'hola como estaS?'
// cuerpo.appendChild(nombreDiv);
//-------------------------------------------------------------------------------------
// En html <!-- Ejercicio 13 -->
// 13.Añadir una Clase a un Elemento: Usa classList.add para añadir la clase activo a un elemento con el ID titulo.
//-------------------------------------------------------------------------------------
// En html <!-- Ejercicio 14 -->
// Eliminar una Clase de un Elemento: Usa classList.remove para eliminar la clase activo de un elemento con la clase item.
//-------------------------------------------------------------------------------------
// En html <!-- Ejercicio 15 -->
// 15. Alternar una Clase en un Elemento: Usa classList.toggle para alternar la clase activo en un elemento con el ID boton.
//-------------------------------------------------------------------------------------
// Crear y Manipular Listas
//-------------------------------------------------------------------------------------
// En html <!-- Ejercicio  -->

// 16. Crear una Lista Desordenada y Añadirla al Cuerpo: Usa createElement para crear una lista <ul> y añade varios elementos <li> con texto, luego añade la lista al cuerpo del documento.

// const cuerpo = document.body;

// const contenedorListaa = document.getElementById('contenedorLista');
// const ulContenedor = document.createElement('ul');
// contenedorListaa.appendChild(ulContenedor);
// for (let i = 1 ; i<= 3; i++){
//     const nuevoLi = document.createElement('li');
//     nuevoLi.textContent = `Objeto ${i} `;
//     ulContenedor.appendChild(nuevoLi);
// }
//-------------------------------------------------------------------------------------
// En html <!-- Ejercicio 17 -->
// 17. Crear una Lista Ordenada y Añadirla al Cuerpo: Usa createElement para crear una lista <ol> y añade varios elementos <li> con texto, luego añade la lista al cuerpo del documento.

// const cuerpo = document.body;
// const divConte = document.createElement ('div');
// divConte.id = 'idDivConte'
// const listaOrdenada = document.createElement ('ol');
// listaOrdenada.id = 'idLista'
// cuerpo.appendChild(divConte);
// divConte.appendChild(listaOrdenada);
// for (let i = 1; i<= 6; i++){
//     const nuevoItem = document.createElement('h5');
//     nuevoItem.textContent = `Item: ${i}`
//     listaOrdenada.appendChild(nuevoItem);
// }
//-------------------------------------------------------------------------------------
// En html <!-- Ejercicio 18 -->
// 18. Generar una Lista a partir de un Array: Dado un array de nombres, usa un bucle para crear una lista <ul> y añade un <li> por cada nombre en el array, luego añade la lista al cuerpo del documento.

// const cuerpo = document.body;
// const listaNombres = ['Agustin', 'Sofia', 'Mateo', 'Ines'];
// const divContenedor = document.createElement('div');
// divContenedor.id = 'idDivContenedor';
// const ulContendedor = document.createElement('ul');
// ulContendedor.id = 'idUlContenedor';
// cuerpo.appendChild(divContenedor);
// divContenedor.appendChild(ulContendedor);

// listaNombres.forEach((nombre) => {
//     const liContendedor = document.createElement('li');
//     liContendedor.textContent = nombre;
//     ulContendedor.appendChild(liContendedor);
// })
//-------------------------------------------------------------------------------------
// En html <!-- Ejercicio 19 -->
// 19. Añadir un Elemento a una Lista Existente: Usa createElement y appendChild para añadir un nuevo <li> a una lista <ul> existente con el ID lista.

// const nuevoElemento = document.createElement('li');
// const lista = document.getElementById('lista');
// lista.appendChild('nuevoElemento');

// nuevoElemento.textContent = 'este es el nuevo elemento creado';

//-------------------------------------------------------------------------------------
// En html <!-- Ejercicio 20 -->
// Eliminar el Último Elemento de una Lista: Usa removeChild para eliminar el último <li> de una lista <ul> con el ID lista.

// const lista = document.getElementById('ulId');
// console.log(lista.innerText);
// const ultimoElemento = lista.lastElementChild;
// lista.removeChild(ultimoElemento);
// console.log(lista.innerText);
//-------------------------------------------------------------------------------------
// Ejercicios Intermedios
//-------------------------------------------------------------------------------------
// En html <!-- Ejercicio  -->
// 21. Crear una Lista de Tareas: Crea un formulario con un campo de texto y un botón que permita añadir elementos a una lista de tareas. Cada tarea debe tener un botón para eliminarla.

// const cuerpo = document.body;

// // div
// const contenedor = document.createElement ('div');
// contenedor.id = 'contenedor';
// cuerpo.appendChild(contenedor);
// // form
// const formulario = document.createElement('form');
// formulario.id ='formulario';
// contenedor.appendChild(formulario);
// // ul
// const ul = document.createElement ('ul');
// ul.id = 'ul';
// formulario.appendChild(ul);
// // li
// const li = document.createElement ('li');
// li.id = 'li';
// ul.appendChild(li);
// // input texto
// const inputNombre = document.createElement('input');
// inputNombre.id =('idInput');
// inputNombre.type = 'text';
// li.appendChild(inputNombre);
// // boton enviar
// const boton = document.createElement('button');
// boton.textContent = 'Enviar';
// boton.id='idBoton';
// li.appendChild(boton);
//-------------------------------------------------------------------------------------
// En html <!-- Ejercicio 22 -->
// 22. Crear una Galería de Imágenes: Crea un array de URLs de imágenes y usa un bucle para crear una galería de imágenes en el DOM. Cada imagen debe estar dentro de un contenedor <div>.

// const arrayUrl = [];
// const cuerpo = document.body;
// const galeria = document.createElement('section');
// cuerpo.appendChild(galeria);
// const divContenedor = document.createElement('div');
// galeria.appendChild(divContenedor);

// for( let i = 1 ; i<=5; i++){
//     const nuevImagen = document.createElement('img');
//     nuevImagen.alt = `Imagen nro ${i}`;
//     divContenedor.appendChild = nuevImagen;
// };
//-------------------------------------------------------------------------------------
// En html <!-- Ejercicio 23 -->
// 23. Crear una Tabla Dinámica: Crea una tabla con una fila de encabezado y varias filas de datos generadas a partir de un array de objetos. Añade la tabla al cuerpo del documento.

// const datos = [
//     { nombre: "Juan", edad: 30 },
//     { nombre: "María", edad: 25 },
//     { nombre: "Carlos", edad: 35 },
// ];
// const tabla = document.createElement("table");
// const encabezado = document.createElement("tr");
// for (const key in datos[0]) {
//     const th = document.createElement("th");
//     th.textContent = key;
//     encabezado.appendChild(th);
// }
// tabla.appendChild(encabezado);
// datos.forEach((dato) => {
//     const fila = document.createElement("tr");
//     for (const key in dato) {
//         const celda = document.createElement("td");
//         celda.textContent = dato[key];
//         fila.appendChild(celda);
//     }
//     tabla.appendChild(fila);
// });
// document.body.appendChild(tabla);

//-------------------------------------------------------------------------------------
// En html <!-- Ejercicio 24 -->
// 24. Formulario de Registro: Crea un formulario de registro con campos de texto para nombre, email y contraseña. Al enviar el formulario, muestra un mensaje de bienvenida que incluya el nombre ingresado.

// const cuerpo = document.body;
// const formulario = document.createElement('form');
// formulario.style.backgroundColor = 'green';
// formulario.style.padding = '2rem';
// formulario.style.textAlign = 'center';
// cuerpo.appendChild(formulario);

// const divContenedor = document.createElement('div')
// divContenedor.id = ('divContenedor');
// formulario.appendChild(divContenedor);

// const inputNombre =  document.createElement('input');
// inputNombre.id= ('nombre');
// inputNombre.type = ('text');
// inputNombre.style.margin = '0.3rem';
// divContenedor.appendChild(inputNombre);

// const inputMail =  document.createElement('input');
// inputMail.id = ('email');
// inputMail.type = ('text');
// inputMail.style.margin = '0.3rem';
// divContenedor.appendChild(inputMail);

// const inputContra =  document.createElement('input');
// inputContra.id = ('password');
// inputContra.type = ('password');
// inputContra.style.margin = '0.3rem';
// divContenedor.appendChild(inputContra);

// const boton = document.createElement('button');
// boton.textContent = ('Enviar formulario');
// formulario.appendChild(boton);

// formulario.addEventListener("submit", function (event) {
//       event.preventDefault();
//       const nombre = document.querySelector("#nombre").value;
//       const email = document.querySelector("#email").value;
//       const password = document.querySelector("#password").value;
//       const mensaje = document.createElement("p");
//       mensaje.textContent = `Hola ${nombre}! Como estas?`;
//       document.body.appendChild(mensaje);
//     });
//-------------------------------------------------------------------------------------
// En html <!-- Ejercicio 25 -->
// 25. Calculadora Simple: Crea una calculadora simple con botones para los números y operaciones básicas (+, -, *, /). Muestra el resultado en un campo de texto al presionar el botón de igual (=).

const cuerpo = document.body;

const divContenedor = document.createElement('div');
divContenedor.id = ('IdDivContenedor');
cuerpo.appendChild(divContenedor);

const nDelUnoAlNueve = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];


nDelUnoAlNueve.forEach((i)=> {
    const botonNuevo = document.createElement('button');
    botonNuevo.className ="botonNuevoClas"
    botonNuevo.textContent = i;
    divContenedor.appendChild(botonNuevo);
})

const operaciones = ['+','-','/','*'];
operaciones.forEach((i)=> {
    const botonesOperacion = document.createElement('button');
    botonesOperacion.className ="botonesOperaClas"
    botonesOperacion.textContent = i;
    divContenedor.appendChild(botonesOperacion);
})




//////// mi forma
// let botonera = nDelUnoAlNueve.forEach((i) => {
//     const botonNuevo = document.createElement('button');
//         textContent(i);
//         divContenedor.appendChild(botonNuevo);
// });
// divContenedor.appendChild(botonera);








//-------------------------------------------------------------------------------------
// En html <!-- Ejercicio  -->
//-------------------------------------------------------------------------------------
// En html <!-- Ejercicio  -->

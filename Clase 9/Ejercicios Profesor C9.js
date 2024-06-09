// PENDIENTES
// 13, 14
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
// En html <!-- Ejercicio  -->
//-------------------------------------------------------------------------------------
// En html <!-- Ejercicio  -->
//-------------------------------------------------------------------------------------
// En html <!-- Ejercicio  -->
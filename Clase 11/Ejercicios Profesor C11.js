// Ejercicios Clase 11
//-------------------------------------------------------------------------------------
// Pendientes
// 24, 29, 30
//-------------------------------------------------------------------------------------
// globales
const cuerpo = document.body;
cuerpo.style.backgroundColor = 'grey';

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
// Ejercicio 10: Crea una lista desplegable (select) y muestra el valor seleccionado en un párrafo.

// const divContenedor = document.createElement('div');
// cuerpo.appendChild(divContenedor);

// const listaDesplegable = document.createElement('select');
// divContenedor.appendChild(listaDesplegable);

// const opciones = ['opcion 1', 'opcion2','opcion3','opcion4'];
// opciones.forEach(opcion => {
//     const elementoOpcion = document.createElement('option');
//     elementoOpcion.value = opcion;
//     elementoOpcion.textContent = opcion;
//     listaDesplegable.appendChild(elementoOpcion);
// });

// const parrafoSeleccionado = document.createElement('p');
// parrafoSeleccionado.textContent='Seleccionar Opcion';
// divContenedor.appendChild(parrafoSeleccionado);

// listaDesplegable.addEventListener('change', mostrarSeleccion);

// function mostrarSeleccion(){
//     const valorSeleccionado = listaDesplegable.value;
//     parrafoSeleccionado.textContent = `Seleccionaste ${valorSeleccionado}`
// }
//-------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------
// Ejercicios sobre Storage (Local y Sesión)
//-------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------
// Ejercicio 11: Guarda un valor en el Local Storage cuando se haga clic en un botón.
// const boton = document.createElement('button');
// boton.textContent = 'Agregar a LocalStorage';
// cuerpo.appendChild(boton);

// const guardar = document.createElement('h4');
// guardar.textContent = 'Item guardado2';
// cuerpo.appendChild(guardar);

// boton.addEventListener ('click', cargar);
// function cargar () {
//     localStorage.setItem ('Guardar', guardar.innerText);
// }
//-------------------------------------------------------------------------------------
// Ejercicio 12: Recupera un valor del Local Storage y muéstralo en un div.
///////////////////// descomentar eje 11 para que funcione
// const divRecuperado = document.createElement('div');
// cuerpo.appendChild(divRecuperado);
// const recuperado = document.createElement('h5');
// cuerpo.appendChild(recuperado);
// const valorR = localStorage.getItem('Guardar');
// recuperado.textContent = `Este es recuperado ${valorR}`;
//-------------------------------------------------------------------------------------
// Ejercicio 13: Guarda un valor en el Session Storage cuando se haga clic en un botón.
///////////////////// descomentar eje 11 y 12 para que funcione
// const botonLocalS = document.createElement('button');
// botonLocalS.textContent = 'Guardar en Local Sesion';
// cuerpo.appendChild(botonLocalS);

// botonLocalS.addEventListener ('click', lsesion);
// function lsesion(){
//     sessionStorage.setItem('EnLs', recuperado.innerText);
// }
//-------------------------------------------------------------------------------------
// Ejercicio 14: Recupera un valor del Session Storage y muéstralo en un div.
///////////////////// descomentar eje 11, 12 y 13 para que funcione
// const divRecuperadoLS = document.createElement('div');
// cuerpo.appendChild(divRecuperadoLS);
// const recuperadoLS = document.createElement('h6');
// cuerpo.appendChild(recuperadoLS);
// const valorRLS = sessionStorage.getItem('EnLs');
// recuperado.textContent = `Desde Sesion Storage ${valorRLS}`;
//-------------------------------------------------------------------------------------
// Ejercicio 15: Guarda un objeto en el Local Storage y recupéralo, mostrando sus propiedades en un div.
// const producto = {
//     nombre: 'Agustín',
//     apellido: 'Bustamante',
//     edad: 30,
//     cursos: 'Java Script',
// };
// const productoJSON = JSON.stringify(producto);
// localStorage.setItem('Producto1', productoJSON);

// const productoRecuperdadoJSON = localStorage.getItem('Producto1');
// const productoRecuperdado = JSON.parse(productoRecuperdadoJSON);

// const div = document.createElement('div');
// div.id= 'productoInfo';
// cuerpo.appendChild(div);

// const nombre = document.createElement('p');
// nombre.textContent = `Nombre: ${productoRecuperdado.nombre}`;
// div.appendChild(nombre);

// const apellido = document.createElement('p');
// apellido.textContent = `Apellido: ${productoRecuperdado.apellido}`;
// div.appendChild(apellido);

// const edad = document.createElement('p');
// edad.textContent = `Edad: ${productoRecuperdado.edad}`;
// div.appendChild(edad);

// const cursos = document.createElement('p');
// cursos.textContent = `Cursos: ${productoRecuperdado.cursos}`;
// div.appendChild(cursos);
//-------------------------------------------------------------------------------------
// Ejercicio 16: Guarda un objeto en el Session Storage y recupéralo, mostrando sus propiedades en un div.
// const alumno = {
//     nombre: 'Agustín',
//     apellido: 'Bustamante',
//     edad: 30,
//     cursos: 'Java Script',
// };
// const alumnoJSON = JSON.stringify(alumno);
// localStorage.setItem('alumno1', alumnoJSON);

// const producto = {
//     nombre: 'Agustín',
//     apellido: 'Bustamante',
//     edad: 30,
//     cursos: 'Java Script',
// };
// const productoJSON = JSON.stringify(producto);
// localStorage.setItem('Producto1', productoJSON);


// for(let i = 0; i < localStorage.length ; i++){
//     let clave = localStorage.key(i);
//     const div = document.createElement('div');
//     div.textContent = clave;
//     cuerpo.appendChild(div);
// }

//-------------------------------------------------------------------------------------
// Ejercicio 17: Elimina un valor del Local Storage cuando se haga clic en un botón.
// const alumno = {
//     nombre: 'Agustín',
//     apellido: 'Bustamante',
//     edad: 30,
//     cursos: 'Java Script',
// };
// const alumnoJSON = JSON.stringify(alumno);
// localStorage.setItem('alumno1', alumnoJSON);

// const botonEliminar = document.createElement('button');
// botonEliminar.textContent = 'Eliminar';
// cuerpo.appendChild(botonEliminar);
// botonEliminar.addEventListener('click', eliminar );
// function eliminar (){
//     localStorage.removeItem('alumno1');
// }
//-------------------------------------------------------------------------------------
// Ejercicio 18: Elimina un valor del Session Storage cuando se haga clic en un botón.
////////////////////////////// PRÁCTICAMENTE IGUAL EJERCICIO 17 PERO CON SESSION STORAGE
//-------------------------------------------------------------------------------------
// Ejercicio 19: Guarda un array en el Local Storage y recupéralo, mostrando sus elementos en una lista.

// Crear un array y guardarlo en el Local Storage
// const cursos = ['JavaScript', 'HTML', 'CSS', 'React', 'Node.js'];
// const cursosJSON = JSON.stringify(cursos);
// localStorage.setItem('Cursos', cursosJSON);

// // Recuperar el array del Local Storage
// const cursosRecuperadosJSON = localStorage.getItem('Cursos');
// const cursosRecuperados = JSON.parse(cursosRecuperadosJSON);

// // Crear una lista (ul) y mostrar los elementos del array
// const lista = document.createElement('ul');
// cuerpo.appendChild(lista);

// cursosRecuperados.forEach(curso => {
//     const item = document.createElement('li');
//     item.textContent = curso;
//     lista.appendChild(item);
// });
//-------------------------------------------------------------------------------------
// Ejercicio 20: Guarda un array en el Session Storage y recupéralo, mostrando sus elementos en una lista.
////////////////////////////// PRÁCTICAMENTE IGUAL EJERCICIO 19 PERO CON SESSION STORAGE
//-------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------
// Ejercicios sobre Arrays
//-------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------
// Ejercicio 21: Crea un array de números y muéstralo en un div.
// const div = document.createElement ('div');
// cuerpo.appendChild(div);
// const arrayNumerico = [1,2,3,4,5,6,7,8,9];
// div.textContent = arrayNumerico;
//-------------------------------------------------------------------------------------
// Ejercicio 22: Añade un número al final de un array y muéstralo en un div.
///////////////////// descomentar eje 21 para que funcione
// const div2 = document.createElement ('div');
// cuerpo.appendChild(div2);
// arrayNumerico.push(10);
// div2.textContent = arrayNumerico;
//-------------------------------------------------------------------------------------
// Ejercicio 23: Elimina el último número de un array y muéstralo en un div.
///////////////////// descomentar eje 21, 22 para que funcione
// const div3 = document.createElement ('div');
// cuerpo.appendChild(div3);
// arrayNumerico.pop();
// div3.textContent = arrayNumerico;
//-------------------------------------------------------------------------------------
// Ejercicio 24: Ordena un array de números y muéstralo en un div.
//-------------------------------------------------------------------------------------
// Ejercicio 26: Filtra los números pares de un array y muéstralos en un div.
///////////////////// descomentar eje 21, 22, 23  para que funcione
// const div4 = document.createElement ('div');
// cuerpo.appendChild(div4);
// const numerosPares = arrayNumerico.filter(arrayNumerico => arrayNumerico % 2 === 0 );
// div4.textContent = numerosPares;
//-------------------------------------------------------------------------------------
// Ejercicio 27: Suma los elementos de un array de números y muestra el resultado en un div.
// const suma = numerosPares.reduce((i, numerosPares) => i +numerosPares, 0);
// const div5 = document.createElement ('div');
// div5.textContent = suma;
// cuerpo.appendChild(div5);
//-------------------------------------------------------------------------------------
// Ejercicio 28: Multiplica los elementos de un array de números y muestra el resultado en un div.
// const producto = numerosPares.reduce((i, numerosPares) => i * numerosPares, 1);
// const div6 = document.createElement ('div');
// div6.textContent = producto;
// cuerpo.appendChild(div6);
//-------------------------------------------------------------------------------------
// Ejercicio 29: Usa map para crear un nuevo array duplicando los valores de un array original y muéstralo en un div.
//-------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------
// Ejercicios sobre Objetos
//-------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------
// Ejercicio 31: Crea un objeto con propiedades de un estudiante (nombre, edad, curso) y muéstralo en un div.
// const estudiante = {
//     nombre: 'Agustin',
//     edad: 31,
//     curso: 'Java Script',
// }
// const div = document.createElement('div');
// div.textContent = `Nombre: ${estudiante.nombre}, Edad: ${estudiante.edad}, Curso: ${estudiante.curso} `
// cuerpo.appendChild(div);
// //-------------------------------------------------------------------------------------
// // Ejercicio 32: Añade una propiedad a un objeto existente y muéstralo en un div.
// estudiante.apellido = 'Bustamante';
// estudiante.curso = 'Desarrollo Web'
// const actuEstudiante = document.createElement('div');
// actuEstudiante.textContent = `Nombre: ${estudiante.nombre}, Edad: ${estudiante.edad}, Curso: ${estudiante.curso}, Apellido: ${estudiante.apellido} `
// cuerpo.appendChild(actuEstudiante);
// //-------------------------------------------------------------------------------------
// // Ejercicio 33: Elimina una propiedad de un objeto y muéstralo en un div.
// const propieEliminada = document.createElement('div');
// delete estudiante.edad;
// propieEliminada.textContent =`Nombre: ${estudiante.nombre}, Edad: ${estudiante.edad}, Curso: ${estudiante.curso},`;
// cuerpo.appendChild(propieEliminada);
//-------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------
// Ejercicios Integradores:
//-------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------
// Ejercicio 1: Gestión de Lista de Tareas
//-------------------------------------------------------------------------------------
// Crea una aplicación de lista de tareas donde los usuarios puedan agregar, eliminar y marcar tareas como completadas. Las tareas deben almacenarse en el Local Storage y recuperarse al cargar la página.

// const contenedorInput = document.createElement('div');
// cuerpo.appendChild(contenedorInput);

// const inputTareas = document.createElement('input');
// inputTareas.type = 'text';
// contenedorInput.appendChild(inputTareas);

// const botonGuardar = document.createElement('button');
// botonGuardar.textContent = 'Guardar';
// contenedorInput.appendChild(botonGuardar);

// const listaTareas = document.createElement('ul');
// contenedorInput.appendChild(listaTareas);

// // Función para agregar una tarea a la lista
// function agregarTarea(tareaTexto) {
//     const tarea = document.createElement('li');
//     const textoTarea = document.createElement('span');
//     textoTarea.textContent = textoTarea;
//     tarea.appendChild(textoTarea);

//     const botonEliminar = document.createElement('button');
//     botonEliminar.textContent = 'Eliminar';
//     tarea.appendChild(botonEliminar);

//     botonEliminar.addEventListener('click', () => {
//         listaTareas.removeChild(tarea);
//         guardarTareas();
//     })

//     textoTarea.addEventListener('click', () => {
//         textoTarea.classList.toggle('completada');
//         guardarTareas();
//     });

//     listaTareas.appendChild(tarea);
// };

// // Función para guarda las tareas en el Local Storage

// function guardarTareas() {
//     const tareas = [];
//     listaTareas.querySelectorAll('li').forEach(tarea => {
//         tareas.push({
//             texto: tarea.querySelector('span').textContent,
//             completada: tarea.querySelector('span').classList.contains('completada')
//         });
//     });
//     localStorage.setItem('tareas', JSON.stringify(tareas));
// }

// // Función para cargar las tareas desde el Local Storage

// function cargarTareas(){
//     const tareas = JSON.parse(localStorage.getItem('tareas')) || [];
//     tareas.forEach(tarea => {
//         agregarTarea.apply(tarea.texto);
//         if (tarea.completada){
//             listaTareas.lastChild.querySelector('span').classList.add('completada');
//         }
//     });
// }

// // Evento para agregar una nueva tarea cuando se hace clic en el botón
// botonGuardar.addEventListener('click',() =>{
//     if(inputTareas.value.trim() !== '') {
//         agregarTarea(inputTareas.value.trim());
//         inputTareas.value = '';
//         guardarTareas();
//     }
// });
// // Cargar las tareas al cargar la página
// cargarTareas();
//-------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------
// Ejercicios Integradores:
//-------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------
// Ejercicio 2: Registro de Estudiantes
// Desarrolla una aplicación para registrar estudiantes con nombre, edad y curso. Los datos deben almacenarse en el Local Storage y mostrarse en una tabla. Debe permitir editar y eliminar estudiantes.

// Div Contenedor Sections  
const contenedor = document.createElement('div');
cuerpo.appendChild(contenedor);

//------------ Nombre
//-Section
const sNombre = document.createElement('section');
sNombre.id = 'IdsNombre';
sNombre.textContent = 'Nombre:';
contenedor.appendChild(sNombre);
//-Input
const inNombre = document.createElement('input');
inNombre.type= 'text';
sNombre.appendChild(inNombre);
//------------ Nombre
//------------ Edad
//-Section
const sEdad = document.createElement('section');
sEdad.id = 'IdsEdad';
sEdad.textContent = 'Edad:';
contenedor.appendChild(sEdad);
//-Input
const inEdad = document.createElement('input');
inEdad.type= 'number';
sEdad.appendChild(inEdad);
//------------ Edad
//------------ Curso
//-Section
const sCurso = document.createElement('section');
sCurso.id = 'IdsCurso';
sCurso.textContent = 'Curso:';
contenedor.appendChild(sCurso);
//-Input
const inCurso = document.createElement('input');
inCurso.type= 'text';
sCurso.appendChild(inCurso);
//------------ Curso

//------------ Boton Guardar
const guardarInfo = document.createElement('button');
guardarInfo.textContent = 'Guardar';
contenedor.appendChild(guardarInfo);
//------------ Boton Guardar

const nomina = [];
const estudiante = {
    id: 1,
    nombre: 'Agustín',
    edad: 30,
    cursos: 'Java Script',

};

//------------ Contendeor Tabla
const contenedorTabla = document.createElement('div');
contenedor.appendChild(contenedorTabla);
//------------ Contendeor Tabla
const tablaNomina = document.createElement('table');
contenedorTabla.appendChild(tablaNomina);
//------------Creacion tabla
//-Encabezado tabla
const encabezado = document.createElement('thead');
tablaNomina.appendChild(encabezado);
//-Encabezado fila
const filaEncabezado = document.createElement('tr');
encabezado.appendChild(filaEncabezado);
//-Generar Encabezados
//Que se agregue encabezado en caso que el objeto estudiante tenga una nueva propiedad. Por ejemmplo, si agreguo apellido, se va a agregar un nuevo "encabezdo" y columna a la tabla.
for (const propiedad in estudiante) {
    if (estudiante.hasOwnProperty(propiedad)) {
        const encabe = document.createElement('th');
        encabe.textContent = propiedad.toUpperCase();
        filaEncabezado.appendChild(encabe);
    }
};
//-Generar Encabezados







console.log(estudiante);
console.log(nomina);



// const productoJSON = JSON.stringify(producto);
// localStorage.setItem('Producto1', productoJSON);



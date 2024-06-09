# CLASE 9

## Modelo de objetos del documento (DOM)

- **¿Qué es el Modelo de objetos del documento (DOM) y cómo funciona?**
    - Con JavaScript la empleamos para acceder y modificar de forma dinámica elementos de la interfaz.
    - Es decir que, por ejemplo, desde JavaScript podemos modificar el texto contenido de una etiqueta *<h1>*.
- **¿Cómo funciona?**
    - La estructura de un documento HTML son las etiquetas.
    - En el Modelo de Objetos del Documento (DOM), cada etiqueta HTML es un objeto, al que podemos llamar **nodo**.
    - Las etiquetas anidadas son llamadas *“nodos hijos”* de la etiqueta “nodo padre” que las contiene.
    - Todos estos objetos son accesibles empleando JavaScript mediante el objeto global *document*.
    - Por ejemplo, **document.body** es el nodo que representa la etiqueta *<body>.*

## Estructura del DOM y Nodos

- Cada etiqueta HTML se transforma en un nodo de tipo "Elemento". La conversión se realiza de forma jerárquica.
- De esta forma, del nodo raíz solamente pueden derivar los nodos *HEAD* y *BODY*.
- Cada etiqueta HTML se transforma en un nodo que deriva del correspondiente a su "etiqueta padre".
- La transformación de las etiquetas HTML habituales genera **dos nodos**.
    - **Nodo elemento:** correspondiente a la propia etiqueta HTML.
    - **Nodo texto:** contiene el texto encerrado por esa etiqueta HTML.

#### Ejemplo aplicado: Acceso por objeto document.

```js
console.dir(document);
console.dir(document.head)
console.dir(document.body);
```
- El acceso a **body** usando la referencia **document.body** requiere que el script se incluya al final del *<body>* en el HTML.

```html
<body>
    <h2>Coder House</h2>
    <script src="js/main.js"></script>
</body>
  ```

## Tipos de Nodos
- La especificación completa de DOM define 12 tipos de nodos, los más usados son:

### Document:
- Nodo raíz del que derivan todos los demás nodos del árbol.
### Element:
- Representa cada una de las etiquetas XHTML. Puede contener atributos y derivar otros nodos de él.
### Attr:
- Se define un nodo de este tipo para representar cada uno de los atributos de las etiquetas HTML, es decir, uno por cada par atributo=valor.
### Text:
- Nodo que contiene el texto encerrado por una etiqueta HTML.
### Comment:
- Representa los comentarios incluidos en la página HTML.

## Acceso al DOM

- Podemos acceder a cada una de esas etiquetas a partir de estos metodos.
    - **getElementById()**
        - Es un identificador único.
        - Es como el DNI, identifica a cada elemento unico. No hay dos o mas elementos en un sitio web que tengan el mismo **ID**.
    - **getElementsByClassName()**
        - Toma  varios elementos que tengan la misma clase.
    - **getElementsByTagName()**
        - Toma  varios elementos que tengan la misma etiqueta.
            - Por ejemplo: getElementsByTagName(**h3**) *va a tomar todas las etiquetas h3 de la página.*

#### Ejemplo de como accceder. **getElementById**.
- Sirve para acceder a un elemento de la estructura HTML, utilizando su atributo ID como identificación. 
- Tengo esto en el html.
```html
<h1 id="titulo">Hola Mundo</h1>
```
- Accedo desde **js** así
    - Lo ideal es asiganarle una variable.
```js
const tituloH1 = document.getElementById('titulo');
```
- Si hago un *console.log* de tituloH1 imprime esto:
```js
<h1 id="titulo">Hola Mundo</h1>
```

- Si quiero acceder al nodo texto *Hola Mundo*, tengo que usar el metodo **.inner**
```js
const tituloH1 = document.getElementById('titulo');
console.log(tituloH1.innerText);
// Hola Mundo
```

#### Ejemplo de como accceder. **getElementsByClassName()**.
- Sirve para acceder a un conjunto de elementos de la estructura HTML, utilizando su atributo class como identificación. Se retornará un Array de elementos con todas las coincidencias:
- Tengo esto en el html.
```html
    <div class="contenedor"></div>
    <div class="contenedor"></div>
    <div class="contenedor"></div>
```
- Accedo desde **js** así
    - Lo ideal es asiganarle una variable.
 ```js
const contenedores = document.getElementsByClassName('contenedor'); 
 ```
 - Si hago un *console.log* de contenedores imprime esto:
    - Me dice que tengo un *array*, que cada elemento es un **div.contenedor**
```js
HTMLCollection(4) [div.contenedor, div.contenedor, div.contenedor, div.contenedor]
```

#### Ejemplo de como accceder **getElementsByTagName()**
- Sirve para acceder a un conjunto de elementos de la estructura HTML, utilizando su nombre de etiqueta como identificación. Esta opción es la menos específica de todas, ya que es muy probable que las etiquetas se repitan en el código HTML.
- Tengo esto en el html.
```html
    <section></section>
    <section></section>
```
- Accedo desde **js** así
    - Lo ideal es asiganarle una variable.
 ```js
const secciones = document.getElementsByTagName('section');
 ```
 - Si hago un *console.log* de secciones imprime esto:
    - Me dice que tengo un *array*, que cada elemento es un **section**
```js

HTMLCollection(2) [section, section]
0: section
1: section
length: 2
[[Prototype]]: HTMLCollection
```

#### Como acceder a los elementos de un array por consola.
##### innerText
- Es para acceder si sabemos que es "texto plano".

**Es valido también para el getElementsByTagName**
- Tengo este html:
```html
<div class="contenedor">Contenedor 1</div>
<div class="contenedor">Contenedor 2</div>
<div class="contenedor">Contenedor 3</div>
<div class="contenedor">Contenedor 4</div>
<section>Section 1</section>
<section>Section 2</section>
```
- Lo busco como un array "cualquiera".
```js
const contenedores = document.getElementsByClassName('contenedor');
console.log(contenedores [0]);
console.log(contenedores [1]);
console.log(contenedores [2]);
console.log(contenedores [3]);
// imprime
//<div class="contenedor">Contenedor 1</div>
//<div class="contenedor">Contenedor 2</div>
//<div class="contenedor">Contenedor 3</div>
//<div class="contenedor">Contenedor 4</div>
// o 
// div.contenedor
// div.contenedor
// div.contenedor
// div.contenedor
```
- Para imprimir el nodo texto:
```js
const contenedores = document.getElementsByClassName('contenedor');
console.log(contenedores[0].innerText);
console.log(contenedores[1].innerText);
console.log(contenedores[2].innerText);
console.log(contenedores[3].innerText);
// imprime
// Contenedor 1
// Contenedor 2
// Contenedor 3
// Contenedor 4
```
#### innerHTML
- Ahora si el elemento tiene un hijo como en el siguiente ejemplo y usamos **innerText** pasa esto:
```html
<div class="contenedor">
    <h4>
        Hola gente
    </h4>
</div>
```
- Y hago un conole.log() me imprmi esto:
```js
const contenedores = document.getElementsByClassName('contenedor');
console.log(contenedores[0].innerText);
//Imprime
// Hola gente
 ```

- Si usamos el **innerHTML** se imprime el elemento HTML, sin importar lo que sea lo capta todo y lo transforma en un *string*
```js
const contenedores = document.getElementsByClassName('contenedor');
console.log(contenedores[0].innerHTML);
//Imprime
// <h4>
//     Hola gente
// </h4>
 ```

### for.. of
- Para recorrer en este caso las etiquetas clase *'contenedores'* hacemos así:
```js
for (contenedor of contenedores) {
    console.log(contenedor.innerText);
}
// imprime
// Hola gente
// Contenedor 1
// Contenedor 2
// Contenedor 3
```
- Imprime unicamente el hijo de lo que tiene adentro.

## Modificar el HTML desde JS *se modifica en la consola del navegadorm, no en la de VSC*

Si tengo el *id="titulo"* que su texto es *Hola mundo*....
```html
<h1 id="titulo"> Hola Mundo </h1>
```
y en js esta asignado a un valor **(tituloH1)**....
```js
const tituloH1 = document.getElementById('titulo');
console.log(tituloH1.innerText);
// Imprime
// Hola Mundo
```
.... yo lo puedo "reasignar" para que en el **HTML** se imprima lo que quiero:
```js
tituloH1.innerText = "Hola Agus";
// Imprime en pantalla HTML, no en consola.
// Hola Agus
```
**DE ESTA FORMA SE PUEDE MODIFICAR TODO EL DOCUMENTO HTML DESDE JAVA SCRIPT** 

## Ingresar etiquetas desde js

- **contenedores[0].innerHTML** era:
```js
// <h4>
//     Hola gente
// </h4>
```
- Ahora quiero asignar de forma **literal** un elemento distinto se usan las **backticks** ( **``** ).
```js
contenedores[0].innerHTML = `
    <h5>Hola Mundo ¿Como están?</h5>
    <p>Hola a todos</p>`;
// Imprime en pantalla HTML
//Hola Mundo ¿Como están?
//Hola a todos
```
- Lo que hizo fue agregar al *contenedor 0* un hijo *h5* y un *p*.

### Para agregar una clase al HTML
- Tengo en HTML el div con la clase"contenedor
```HTML
<div class="contenedor">Contenedor 1</div>
```
- Tengo el **classList** que es la lista de clases que tiene ese *nodo*. A su vez ese class List me permite asignar metodos ("*.add*")
```js
contenedores[1].classList.add('clase_nueva');
```
```js
<div class="contenedor clase_nueva">Contenedor 1</div>
```
- A esa clase nueva le puedo asignar una variable desde **JS**. Para cambiarle lo que necesito, en este caso los estilos.

```js
const claseNueva = document.getElementsByClassName('clase_nueva');
claseNueva[0].style.color = 'red';
```
- En este caso tenemos un solo div al que le asignamos *clase_nueva* pero como estamos usando **getElementsByClassName** va a traer una colección de elementos que tiene un orden. Por eso el **[0]**. No importa que sea el unico elemento dentro del array, lo tengo que poner igual.

- Para agregar una **ID** al mismo elemnto:
    -  Desde js escribimos este código.
    - No hace falta poner *.add* por que el **ID** es un elemento unico.
```js
claseNueva[0].id = 'nuevoID';
```
- Pasado en limpio todo lo que se le agrego al div: *se ve en elements en el navegadaor*
```html
<div class="contenedor clase_nueva" id="nuevoID" style="color: red;">
<h5>Hola Mundo ¿Como están?</h5>
<p>Hola a todos</p></div>
```
----
##### Asignar estilos a un elemento.
**siempre se tiene que escribir en formato 'string'**
-Se puede trabajar sobre cualquier elemento del HTML.
- Le asigno una varibale por ejemplo al body.
```js
const cuerpo = document.body;
```

- Llamamos a la variable:
```js
cuerpo.style.backgroundColor = 'green';
cuerpo.style.padding = '1rem';
```
- De esta forma en la pantalla HTML va a mostrarse el background de color *green* y con un *padding* de *1rem*.

### Agregar o sacar nodos.
#### Creación de elementos.
- Para crear elementos se utiliza **document.createElement()**, y se debe indicar el nombre de etiqueta HTML que representará ese elemento. *Dentro del () se tiene que poner la etiqueta. Por ej. p para agregar un parrafo*
- Luego debe agregarse como hijo el nodo creado con **append()**, al body o al otro nodo del documento actual.

#### appendChild
**Ejemplo completo todo desde js.**
- Creamos una constante para nuestro articulo
```js
const articuloDiv = document.createElement('article');
```
- A este articulo le puedo asignar un **ID**.
```js
articuloDiv.id = 'articulo';
```
- También le agregamos varias clases. Para separa una clase de otra se usan **,**.
```js
articuloDiv.classList.add('notas', 'texto');
```
- Hasta ahora no esta dentro del HTML, para ingresarlo tengo que usar **appendChild**.
    - Esto hace que el la etiqueta *articel* se agregue siempre ultimo, abajado de todo lo que haya hecho hasta el momento dentro del *"padre"*, en este caso el body.
```js
cuerpo.appendChild(articuloDiv);
```
- Pasado en limpio todo el código quedaría de esta forma.
```js
const cuerpo = document.body;
cuerpo.style.backgroundColor = 'green';
cuerpo.style.padding = '1rem';
const articuloDiv = document.createElement('article');
articuloDiv.id = 'articulo';
articuloDiv.classList.add('notas', 'texto');
cuerpo.appendChild(articuloDiv);
// En Elements del navegador quedaría:
// <body>
//////////// ..... mas elementos del html ya generados
// <article id="articulo" class="notas texto"></article>
// </body>
```
#### Eliminar elementos.
- Se pueden eliminar nodos existenes y nuevos. El método **remove()** permite eliminar un nodo seleccionado del *DOM*.

- Si quiero sacar el *articuloDiv* que creamos antes se hace:
    - Esto se puede usar para remover articulos de un carrito de compras aunque hay otras formas de hacerlo.
```js
articuloDiv.remove();
// En Elements del navegador quedaría:
// <body>
//////////// ..... mas elementos del html ya generados
// </body>
```
---
### Obtener datos de Inputs.
- Para obtener o modificar datos de un formulario HTML desde JS, podemos hacerlo accediendo a la **propiedad value** de cada input seleccionado:
*no confundir value con innerText*

- Creamos un input:
```js
const ejeInput1 = document.createElement('input');
ejeInput1.id = 'nombre';
ejeInput1.type = 'text';
ejeInput1.style.backgroundColor = 'grey';
cuerpo.appendChild(ejeInput1);
// va a ser de tipo texto, con el fondo gris para diferenciar.
const ejeInput2 = document.createElement('input');
ejeInput2.id = 'edad';
ejeInput2.type = 'number';
ejeInput2.style.backgroundColor = 'red';
cuerpo.appendChild(ejeInput2);
// va a ser de tipo númerico, con el fondo rojo para diferenciar.
```
- Vamos a acceder a estos dos elementos usando el **ID**.
```js
document.getElementById('nombre').value = 'Agustin';
// En la pantalla HTML dentro del input nombre va a mostrar "Agustin".
document.getElementById('edad').value = 30;
// En la pantalla HTML dentro del input edad va a mostrar "30".
```
- Esto value se pueden borrar en la pantalla pero cuando acualizo van a volver a aparecer. Es una especie de por defecto. 
- Esto se puede usar para un carrito de compras. Agregué cosas, me pongo a hacer algo y cuando vuelvo al carrito siguen estando lo ingresado. **Esto se llama persistencia de datos**.

### Crear una barra de navegación.
- Agregamos etiqueta <header> al html con su ID que va a ser header.
- Creamos variables cabecera, navegación nav y ul.
```js
const cabecera = document.getElementById('header');
const navegacion = document.createElement('navBar');
const nav = document.createElement ('nav');
const ul = document.createElement ('ul');
```
- Ahora hay que "juntar" todo.
    - Cabecer sería el padre de todos, le sigue navegación, despues nav y por ultimo ul
```js
cabecera.appendChild(navegacion);
navegacion.appendChild(nav);
nav.appendChild(ul);
```
- A navegación le vamos a asignar una clase.
```js
navegacion.className = 'navbar';
```
- Creamos un array *links* para tener la lista de los "titulos".
```js
const links = ["Index", "Products", "Contact"];
```
- Ahora vamos a reccorer el array **links** usando **for..of**.
- Por cada *link* de *links* va a:
    - Primero crear un **li**.
    - Por cada li creado va a hacer un **innerHTML**.
    - Vamos a usar **``**, esto permite el uso de información **literal**.
    - Dentro de los **``** vamos a hacer un *< a href="" >* que me va a dirigir a algún lado. 
    - Para guardar el *link* de formar literl hay que ponerlo dentro de **${}**. También quiero que haga lo mismo con cada href, pero dentro del array los elementos empiezan con Mayúscula ("Products"), para eso usamos metodo **toLocaleLowerCase** para que lo pase a minúscula.
    - Creamos los *ul*.

```js
for (const link of links){
    const li = document.createElement('li');
    li.innerHTML = `<a href="${link.toLocaleLowerCase()}.html">${link}
    </a>`
    ul.appendChild(li);
}
```
- Con todo esto la barra de navegación ya esta creada, cada uno de los elementos va a ser del array va a aparecer con su link para llevarlo a la pagina correspondiente, pero no van a funcinar hasta que no se creen las páginas en el HTML.

- Cambiar el estilo a la barra de navegación.
```js
cabecera.style.backgroundColor = 'pink';
cabecera.style.width = '100%';
ul.style.color = 'white';
```
### Plantillas Literales.

- Creamos un objeto productos.
```js
const producto = {
    id: 1,
    nombre: "Azucar",
    precio: 1050.56,
}
```
- Creamos un elemento div para que sea el contenedor.
- Agregamos ese div al body.
- Armamos la variable con lo que va a imprimir en pantalla, todo lo que esta dentro de los **``**.
- Dentro de los **${}** vamos a llamar a cada valor del objeto *(producto.nombre)*.
- Creamos el contenedor de nuestro "console.log", *h4*.
- Usamos el innerHTML para que pase el resultado de nuestra variable "literal".
- Asignamos el *h4* para que sea hijo del div y se pueda imprimir todo.

```js
const divProducto = document.createElement('div');
cuerpo.appendChild(divProducto);
let literal = `ID ${producto.id} - Nombre: ${producto.nombre} - Precio: $${producto.precio}`;
const textoH4 = document.createElement('h4');
textoH4.innerHTML = literal;
divProducto.appendChild(textoH4);
```
---
##### Mismo ejemplo usando array.
- Tenemos el divProducto ya en el body.
- Usamos **for of** para recorrer todo el *array* y para cada producto que encuentre genere un **h4** que imprimra toda la información que le pido.
```js
cuerpo.appendChild(divProducto);
for (const producto of productos){
    let literal = `ID ${producto.id} - Nombre: ${producto.nombre} - Precio: $${producto.precio}`;
const textoH4 = document.createElement('h4');
textoH4.innerHTML = literal;
divProducto.appendChild(textoH4);
}
```
### Query Selector
- El método **querySelector()** nos permite seleccionar nodos con la misma sintaxis que utilizamos en los selectores de CSS.
- Es similar al getElementById por que el *querySelector()* va a tomar un solo elemento.

```html
<articulo id="articulo__">
        <p class="parrafo__"></p>
    </articulo>
```
- Puedo seleccionar la etiqueta <p> siguiendo la sintaxis de CSS para selectores:
- Llamo al hijo.
```js
let parrafo = document.querySelector('#articulo__ p');
```
- Seleccionar sólo el contenedor por id con #.
- Llamo al papá.
```js
let parrafo = document.querySelector('#articulo__');
```
- O puedo seleccionar por clase.
- Va a tomar el primer "texto" que tenga esta clase. Por que el querySelector es unico.
```js
parrafo = document.querySelector(".texto");
```
### Query SelectorAll
- De los ejemplos anteriores tenemos estos div con clase contenedor.
```html
<div class="contenedor">Contenedor 1</div>
<div class="contenedor">Contenedor 2</div>
<div class="contenedor">Contenedor 3</div>
```
- Con querySelectorAll busca todos los elementos que, en este caso, tenga la misma clase.
```js
let contenedoresConQuery = document.querySelectorAll('.contenedor');
console.log(contenedoresConQuery);

// en este caso imprime en pantalla de conosola
// NodeList(4) [div#nuevoID.contenedor.clase_nueva, div.contenedor, div.contenedor, div.contenedor]
// 0: div#nuevoID.contenedor.clase_nueva
// 1: div.contenedor
// 2: div.contenedor
// 3: div.contenedor
// length: 4
```
- Dice que tenemos cuatro elementos (div) que tienen el mismo nombre de clase (contenedor).
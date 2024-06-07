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
```js
contenedores[1].classList.add('clase_nueva');
```
```js
<div class="contenedor lase_nueva">Contenedor 1</div>
```
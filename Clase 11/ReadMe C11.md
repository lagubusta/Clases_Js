# Clase 11

## Storage & JSON

## Storage.
- Persistencia: Información que necesito guardar. Como por ejemplo sumar productos al carrito de compras y que se mantengan hasta que finalice la compra.
- Guardar información de manera rápida.
- Dentro del navegador aprtando **F12** dedntro de aplicación, encontramos **Local Storage** o **Session Storage**,

### Localstorage: Setitem
- Los datos almacenados en **localStorage** (variable global preexistente) se almacenan en el navegador de forma indefinida (o hasta que se borren los datos de navegación del browser): 
- La información persiste reinicio de navegador y hasta del sistema operativo.
- La información almacenada en sessionStorage *(variable global preexistente)* se almacena en el navegador hasta que el usuario cierra la ventana. 
- Solo existe dentro de la pestaña actual del navegador. Otra pestaña con la misma página tendrá otro **sessionStorage** distinto, pero se comparte entre iframes en la pestaña (asumiendo que tengan el mismo origen).

- Para alamcenar información se utiliza **setItem**:

```js
// Método ->  localStorage.setItem(clave, valor)
localStorage.setItem('bienvenida', '¡Hola Coder!');
// clave = nombre para identificar el elemento 
localStorage.setItem('esValido', true);
// valor = valor/contenido del elemento 
localStorage.setItem('unNumero', 20);
```
#### Clave o valor.
- La clave sirve como identificador de lo que estoy guardando. El valor es lo que realmente nos interasa. **SIEMPRE SE GUARDA EN FORMATO STRING**
- La información almacenada en el Storage se guarda en la forma de **clave-valor**. Similar al tratamiento de objetos, definimos *claves* en el storage donde almacenamos *valores*.
- **Siempre se tiene que escribir como string, entre ''**.

```js
localStorage.setItem("Clave de mi localStorage", "Valor de mi LocalSotrage");
```
- Se puede guardar cualquier tipo de información.
- Ejemplo de guardar booleanos.

```js
localStorage.setItem("Booleano", true);
```
#### Localstorage: getitem
- Podemos acceder a la información almacenada en localStorage utilizando **getItem**. Las claves y valores de Storage se guardan en formato de cadena de caracteres (**DOMString**).
```js
let mensaje =  localStorage.getItem('bienvenida');
let bandera =  localStorage.getItem('esValido');
let numero  =  localStorage.getItem('unNumero');
console.log(mensaje); // ‘¡Hola Coder!’
console.log(bandera); // ‘true’
console.log(numero);  // ‘20’
```

- Vamos a acceder a nustro valor usando **localStorage.getItem()** y completando con la **key**.
```js
let stringLocal = localStorage.getItem('Clave de mi LocalStorage');
console.log(stringLocal);
// imprime
// Valor de mi LocalSotrage
```
- Creamos un *key* numeros y su *value* 1234 en formato numero. Pero cuando hago el console.log de numeros me lo devuelve como string.
- 
```js
localStorage.setItem('numeros', 1234);
localStorage.setItem('numeros', 1234);
console.log(localStorage.getItem('numeros'));
// imprime
// 1234
```
#### Remove
- Para eleminar items puntuales desde local o session se usa **removeItem**, buscando la *key*.
```js
localStorage.removeItem('numeros');

sessionStorage.removeItem('Array session');
```

#### SessionStorage
- Sirve para alamacenar información sensible.
- Funciona exactamente igual que **LocalStorage** solo que se cambiar la nombre por **sessionStorage()**.
- Para que se borre toda la información del navegador no alcanza con cerrar solamente la pestaña, **necesito cerrar toda la ventana del navegador.**

#### Remove y Clear
- Para eleminar items puntuales desde local o session se usa **removeItem**, buscando la *key*.
```js
localStorage.removeItem('numeros');

sessionStorage.removeItem('Array session');
```
- Para vaciar por completo el local o session Storage se uso el *metodo* **clear**, pero como quiero borrar todo no pongo ninguna *key* dentro de los **()**.
- **ESTO SE USA MUCHO PARA EL CARRITO DE COMPRAS, POR QUE CUANDO FINALIZAMOS LA MISMA NECESITAMOS QUE EL CARRITO VUELVA A ESTAR VACIO**
```js
localStorage.clear();
sessionStorage.clear();
```
---

### Recorriendo el storage

-Es posible obtener todos los valores almacenados en localStorage o sessionStorage con un bucle.
- Pero no podemos usar **for...of** porque *no son objetos iterables*, ni **for...in** porque obtenemos otras propiedades del objeto que no son *valores almacenados*.
###### Ejemplo de como recorrer.
- Usamo el ciclo **for** y le decimos que lo haga por la cantidad de elementos que tienen almacenado, por eso usamos **localStorage.length**.
- Le vamos a pedir con *localStorage.key* para que busque la clave correspondiente de cada elemento dentro del *Storage*.
- Por ultimo le digo que haga un console.log por cada Key y que me muestre a continuación el value correspondiente.
```js
for(let i = 0; i < localStorage.length ; i++){
    let clave = localStorage.key(i);
    console.log("La key es: "+ clave +", el value es: " +localStorage.getItem(clave));
}
```
---
## Jason
*Java Script Object Notation*

- Si queremos almacenar la información de un objeto en un *storage*, hay que tener en cuenta que tanto la clave como el valor **se almacenan en strings.** Ante cualquier otro tipo a guardar, como un número o un objeto, se convierte a cadena de texto automáticamente.
- Entonces, al buscar almacenar un *objeto* sin una transformación previa, guardamos [object Object], la conversión por defecto de objeto a string. Para guardar la información correctamente **hay que transformar el objeto a JSON.**
---
- Es un formato basado en *texto plano*, para representar datos estructurados con la sintaxis de objetos de JavaScript. Es comúnmente utilizado para enviar y almacenar datos en aplicaciones web.
- Es un *string* con un *formato específico*

#### Conversiones de/hacia JSON
- Cuando sea necesario enviar un objeto Javascript al servidor o almacenarlo en storage, será necesario convertirlo a un **JSON** (una cadena) antes de ser enviado.
- Para eso usamos los siguientes métodos:
    - **stringify**:
    -Aepta un objeto como parámetro, y devuelve la forma de texto JSON equivalente.
    - **parse**:
    - Recibe un texto JSON como parámetro, y devuelve el objeto JavaScript correspondiente.





###### Ejemplo **stringify**:
- Creamos un objeto (*productos*)
```js
const productos = {
    id: 1,
    nombre: "Azucar",
    precio: 1080,
}
```
- Agregamos el objeto al localStorage usando *localStorage***.setItem**.
```js
localStorage.setItem ('prodcutos', productos);
```
- En el navegador, en localStorage, se va a ver así, como un string.
```js
[object Object]
```
- Para evitar esto y hacer que se guarde como un objeto usarmos **JASON**.
- A la const productos la asignamos pero en **JSON** usando **JSON.stringify()**

```js
const productosJSON = JSON.stringify(productos);
```
- Ahora si hago console.log de productos y de productosJASON se imprimen de manera muy similar, solo que a los atributus los guarda entre **""**, salvo los números.
```js
// productos, formato OBJETO.
{id: 1, nombre: 'Azucar', precio: 1080}
// productosJASON en formato JASON
{"id":1,"nombre":"Azucar","precio":1080}
```
- Ahora si guardamos el *productosJSON* en **localStorage** se guarda como el console.log y no así como pasaba antes del JSON *"[object Object]"*.

---

###### Ejemplo **parse**:
- Ahora si a ese valor lo quiero formatear en formato OBJECT de nuevo o volverlo a su formato original tengo que usar **JSON.parse()**.

```js
const prodcutosOBJECT = JSON.parse(productosJSON);
```
- Si hago console.log de productosJSON y prodcutosOBJECT me muestra:

```js
// productosJASON en formato JASON
{"id":1,"nombre":"Azucar","precio":1080}
// prodprodcutosOBJECT, usando parse formato OBJECT.
{id: 1, nombre: 'Azucar', precio: 1080}
```
---
#### Como acceder a los atributos dentro de JSON
- Siguiendo con el ejemplo anterior.
```js
productosJASON en formato JASON
{"id":1,"nombre":"Azucar","precio":1080}
```
- Para acceder a los atributos de un objeto "normal" hacemos así:
```js
console.log(prodcutosOBJECT.id);
// 1
```
- Para acceder a un JSON tengo que *parsearlo* y volverlo a un objeto, de manera directa o llamandolo directamente del **localStorage**.

    - Atributo recuperado directamente del localStorage:
    - Creo una constante nueva para mi producto a recuperar.
    - Uso **JSON** y lo *parseo*, una vez parseado llamo al **localStorage** para que recupere el item con **getItem**.
- Si intento acceder "normalmente" al *id* de un JSON en consola va a imprimir **undefined**. 
```js
const productoRecuperadoDelLocalStorage = JSON.parse(localStorage.getItem('prodcutos'))
console.log(productoRecuperadoDelLocalStorage);
// imprime
// {id: 1, nombre: 'Azucar', precio: 1080}
```
--------------


###### Ejemplo de guardar en storage un array con muchos objetos.

- Creamos un array *prodcutos* con varios objetos y lo guardamos dentro del localStorage.
```js
const productos = [
    {
        id: 1,
        nombre: "Azucar",
        precio: 1080,
    },
    {
        id: 2,
        nombre: "Yerba",
        precio: 1500,
    },
    {
        id: 3,
        nombre: "Dulce de Leche",
        precio: 2800.55,
    },
];
```
- Creamos una función que va a recibir como parámetro un *key* y *value*. El **localStorage.setItem** va a gurdar esa *key* y ese *value*

```js
const guardarEnLocalStorage = (key, value)=> localStorage.setItem(key, value);
```
- Ahora vamos a guardar producto por producto dentro del storage.
    - Definimos una *const* llamada *prodcuto* que por cada prodcuto dentro de *produtos* va a aplicar la función **guardarEnLocalStorage**.
    - De este *producto* va a guardar el id, que va ser la *key*. Y usamos a JSON para que use el metodo **stringify**
```js
for (const prodcuto of productos) {
    guardarEnLocalStorage(prodcuto.id, JSON.stringify(prodcuto));
}
```
- Entonces en el *localStorage* va a almacenera cada **ID** como *key* y el value va a ser así.
```js
key: 1 value: {"id":1,"nombre":"Azucar", "precio":1080}	
	
key: 2 value: {"id":2,"nombre":"Yerba","precio":1500}
	
key: 2 value: {"id":3,"nombre":"Dulce de Leche","precio":2800.55}
```
- Tambien se podría poner string dentro del key, por ejemplo:
```js
for (const prodcuto of productos) {
    guardarEnLocalStorage("Producto_" +prodcuto.id, JSON.stringify(prodcuto));
}
key: Producto_1 value: {"id":1,"nombre":"Azucar", "precio":1080}	
	
key: Producto_2 value: {"id":2,"nombre":"Yerba","precio":1500}
	
key: Producto_3 value: {"id":3,"nombre":"Dulce de Leche","precio":2800.55}
```
----
- Para guardar la lista entera:
    - Va a guardar el array completo con todos sus objetos.
```js
guardarEnLocalStorage('productos', JSON.stringify(productos));

key: productos value: [{"id":1,"nombre":"Azucar","precio":1080},{"id":2,"nombre":"Yerba","precio":1500},{"id":3,"nombre":"Dulce de Leche","precio":2800.55}]
```


# PRE CLASE 11. TIEMPO ZOOM 1:20:12
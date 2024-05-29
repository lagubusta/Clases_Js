# CLASE 6

## ARRAYS

- Es un tipo de dato que sirve para almacenar valores en forma de lista.
- Puede ser una colección de números, strings, booleanos, objetos o hasta una lista de listas.

- Los **valores** del array pueden ser distinitos y es posible agregar o quitar elementos en todo momento.

- Los elementos del array **tiene un índice**, que va desde el 0, o el primer elemento del array, hasta el ultimo.

Por ejemplo en un carrito de compras 
cada "cuadrado" de productos es un objeto. Este objeto esta instanciado la cantidad de veces que sea necesario en función de la cantidad de productos.

### COMO DECLARAR UN ARRAY

- Siempre que se define array es en una **constante**. Así me aseguro que no se modifique. Despues el nombre del array, seguido del *=* y va entre llaves *[];*

- Cada valor dentro del array se separan con *,*  y tiene una posición. Arranca por el valor 0.
- Se puede poner la cantidad necesaria dentro del array.
- En ese ejemplo el nombre del array es *arrayVacio*
```javascript
const arrayVacio = [];
```
#### TIPOS DE DATOS DENTRO DEL ARRAY

- Array Numerico, pueden ser numeros enteros o decimales.
```javascript
const arrayNumerico = [1, 2, 3, 4, 5, 6.5];
```
- Tipo caracter se completa con ' '.
```javascript
const arrayConLetras = ['a', 'b', 'c',];
```
Tipo String se completa con "".
```javascript
const arrayConString = ["Hola", "mundo", "como", "estas?"];
```
- Tipo booleano:
```javascript
const arrayBooleano = [true, false, true];
```
Tipo mixto.
```javascript
const arrayMixto = ["a", 'Hola', 2];
```
- Tipo Objetos
```javascript
const arrayObjetos = [
    { nombre: "Productos1",cantidad: 8 },
    { nombre: "Productos2", cantidad: 9 }
]
```
- Tipo mixto con objetos.
```javascript
const arrayMixtoConObjetos = [
    "a", 'Hola', 2,
    { nombre: "Productos1", cantidad: 8 },
];
```
- Asi se imprimen los array en console.log;
```javascript
const arrayNumerico = [1, 2, 3, 4, 5, 6.5];
console.log(arrayNumerico[6]);
/*IMPRIME */ 6.5
```
- Muesta el **6.5** porque esta en la sexta posición dentro del *arrayNumerico*.
- Siempre empieza a contar por el número 0.
- En caso que le pido que imprima un valor que no esta dentro de mi array va Imprimir *undefined*.

### COMO RECORRER EL ARRAY

Para hacer un recorrdio dentro del array usamos *for*.
- El *for* va a tener en cuenta las posiciones, así que cuando asignamos el *let* y el nombre del indexador **hay** asignarle 0, si yo asigno un valor mayor, no va tener en cuenta las posiciones inferiores a ese número.
```javascript
for (let index = 0;
```
- Lo siguiente que hago es pedir que busque hasta la posición 5. No va a buscar mas que eso.
- Ejemplo en uso, sería si yo quiero que en la pantalla de inicio solamente se muestren 5 producotos.
```javascript
index < 5;
```
- Va aumentando del valor index de a uno.
```javascript
index++){
```
- Index es la variable que le paso por parámetro al siguiente metodo.
```javascript
alert(arrayNumerico[index]);}
```
- **Todo el código junto quedaría así:**
```javascript
for (let index = 0; index < 5; index++) {
    alert(arrayNumerico[index]);
}
/*IMPRIME*/
1
2
3
4
5
```

## METODOS Y PROPIEDADES
*hay un montón mas de metodos*
### length
Contar elementos del array
- Dentro de los arrays se puedo usar para contar cuantos elementos tiene mi array.
```javascript
const arrayNumerico = [1, 2, 3, 4, 5, 6.5];
console.log(arrayNumerico.length);
/*IMPRIME */ 6
```
- Este metodo se puede usar dentro del *for* para indicarle la cantidad maxima a "hacer" una acción y mostrar todos valores que estan dentro del array.
```javascript
for (let index = 0; index < arrayNumerico.length; index++) {
    alert(arrayNumerico[index]);
}
```
### push
*Agregar elementos al array*
- Para agregar un elemento tengo que llamar al array y usar el metodo **push**.
- Este nuevo valor ingresado con el metodo push se va a agregar al final del array. 
```javascript
const arrayNumerico = [1, 2, 3, 4, 5, 6.5];
arrayNumerico.push(15);
// Nuestro array ahora quedaría de esta forma
arrayNumerico = [1, 2, 3, 4, 5, 6.5, 15];
```
### unshift
###### NO SE RECOMIENDO USAR ESTE METODO *explicación del porque en shift*
- Este nuevo valor ingresado con el metodo push se va a agregar al principio del array. 
```javascript
arrayNumerico = [1, 2, 3, 4, 5, 6.5, 15];
arrayNumerico.unshift(100);
// Nuestro array ahora quedaría de esta forma
arrayNumerico = [100, 1, 2, 3, 4, 5, 6.5, 15];
```
### pop
### Sacar elementos al array
- Este metodo sirve para eliminar el elemnto del final.
- En este ejemplo no es necesario poner un valor dentro del () del metodo.
```javascript
arrayNumerico = [1, 2, 3, 4, 5, 6.5, 15];
arrayNumerico.pop();
// Nuestro array ahora quedaría de esta forma
arrayNumerico = [100, 1, 2, 3, 4, 5, 6.5];
```
### shift 
###### NO SE RECOMIENDO USAR ESTE METODO.
*No se recomienda por que cuando elimino el primer elemento porque el orden de los productos se corren. Si hago el **shift** y saco el valor 1, que tenia numero de index u orden 0, y ahora el valor 2 paso a tener el index u orden 0. Si yo en otra parte del codigo tenia algo que dependia de ese orden se rompe.*

- Este metodo sirve para eliminar el elemnto del principio.
- En este ejemplo no es necesario poner un valor dentro del () del metodo.
    
```javascript
arrayNumerico = [1, 2, 3, 4, 5, 6.5];
arrayNumerico.shift();
// Nuestro array ahora quedaría de esta forma
arrayNumerico = [2, 3, 4, 5, 6.5];
```
### splice 
###### NO SE RECOMIENDO USAR ESTE METODO.
*no confundir con slice*
*mismo problema que tiene shif y unshift*
- Sirve para eliminar parametros del medio de nuestro array.
- El primer parametro indica la posición donde se encuentra el primer parámetro que queremos eliminar y el segundo es la cantidad de elementos a eliminar.
- En este caso va a eliminar los parametros *2* y *3*
- Es necesario que esten los dos parametros, si solo pongo un parametro, apartir de ese numero elimina todo hasta el final.
```javascript
arrayNumerico = [1, 2, 3, 4, 5, 6.5];
arrayNumerico.splice(1,2);
// Nuestro array ahora quedaría de esta forma
arrayNumerico = [1, 4, 5, 6.5];
```
### JOIN
*juntar parámetros*
- Podemos generar un string con todos los elementos del array, separados por el valor que pasamos por parámtro.
- Llamamos al metodo y dentro de los **()** indicamos que es lo que va a separar cada uno de nuestros parámetros. Y lo transforma en un string.
```javascript
const arrayConString = ["Hola", "mundo", "como", "estas?"];
console.log(arrayConString.join(", "));
// Hola, mundo, como, estas?
```
### CONCAT
*juntar arrays*
- Con este método podemos combinar dos Arrays en un único array resultante.
```javascript
const arrayConString = ["Hola", "mundo", "como", "estas?"];
const arrayNumerico = [1, 4, 5, 6.5];

console.log(arrayConString.concat(arrayNumerico));
//["Hola", "mundo", "como", "estas?", 1, 4, 5, 6.5]
```
- Antes de usar *concat* cada array tenia 4 elementos, despues de usar el console.log() paso a tener 8.
- El array que pongo dentro del (), se va a concatenar despues del ultimo elemento del array que lo llama.

### SLICE
*no confundir con splice*
- Devuelve una copia de una parte del array.
- Empezarndo por el **x** parámetro que le indiqué hasta **x** parámetro, **EL FIN NO ESTA INCLUIDO**.
- El array original no se modifica.

```javascript
const arrayConString = ["Hola", "mundo", "como", "estas?"];
const arrayConStringSLICE = arrayConString.slice(1,3);

console.log(arrayConStringSLICE);
// IMPRIME
mundo como
```
### INDEXOF
*tiene que estar exactamente escrito igual*
- El método indexOf() permite obtener el indice de un elemento en un array.
- Recibe por párametro el elemento que queremos buscar en el array y en caso de exisit devuelve su indice.
- En caso de no existir duvelve el valor **-1**.

```javascript
const arrayConString = ["Hola", "mundo", "como", "estas?"];
console.log(arrayConString.indexOf("mundo"));
// 1
const arrayConString = ["Hola", "mundo", "como", "estas?"];
console.log(arrayConString.indexOf("estas?"));
// 3
const arrayConString = ["Hola", "mundo", "como", "estas?"];
console.log(arrayConString.indexOf("Agustín"));
// -1
```
### INCLUDES
*tiene que estar exactamente escrito igual*
- Permite saber si un elemento que recibe por parámetro existe dentro de un array.
- Retorna *true* o *false*.
```javascript
const arrayConString = ["Hola", "mundo", "como", "estas?"];
console.log(arrayConString.includes("estas?"));
// true
const arrayConString = ["Hola", "mundo", "como", "estas?"];
console.log(arrayConString.includes("Agustín"));
// false
```
### Reverse
- Invierte el orden del array.
```javascript
const arrayConString = ["Hola", "mundo", "como", "estas?"];
console.log(arrayConString.reverse());
// estas? como mundo Hola
```
## ARRAY DE OBJETOS

- Si quiero agregar un objeto lo hago de la misma manera.
```JavaScript
const arrayObjetosAgregados = [
    {nombre: 1, cantidad: 5},
    {nombre: 2, cantidad: 8},
];
arrayObjetosAgregados.push({nombre: "Producto3", cantidad: 2});
console.log(arrayObjetos);

//  (3) [{…}, {…}, {…}]
//      0: {nombre: 1, cantidad: 5}
//      1: {nombre: 2, cantidad: 8}
//      2: {nombre: 'Producto3', cantidad: 2}
//      length: 3
//      [[Prototype]]: Array(0)
```
### FOR OF
- Permite recorrer un array ejecutando un bloque de código por cada elemento del objeto.
- Tengo un array de objetos y puedo accedere a cada uno de sus **atributos** usando un **for**,

```javascript
const productos = [
    {id: 1, nombre: "Arroz"},
    {id: 2, nombre: "Pollo"}
    {id: 3, nombre: "Carne"}
];
```
- Defino una variable y le pongo el nombre que quiera, en este caso, *index*.
*el index vendría a hacer similiar al que se usa el for de los ejemplos anteriores*
- Esa variable va a tomar los atriburos de, en este caso, *productos* y se lo va a guardar a si misma en *"index"*.
- Dado esto si hago un console.log de index y va a mostrar cada uno de los objetos.
```javascript
for (const index of productos){
    console.log(index);
}
// IMPRIME
//{id: 1, nombre: 'Arroz'}
//{id: 2, nombre: 'Pollo'}
//{id: 3, nombre: 'Carne'}
```
- Entonces para acceder al atributo del objeto necesito llamar al objeto *"index"* y despues acceder al metodo: 
*index.id* *index.nombre*
- Voy a hacer una instancia de cada elemento del objeto.
```javascript
for (const index of productos){
    console.log("El ID es: " + index.id);
    console.log("El nombre del producto es: " + index.nombre);
}
```
- **Todo junto quedaría:**
```javascript
const productos = [
    {id: 1, nombre: "Arroz"},
    {id: 2, nombre: "Pollo"}
    {id: 3, nombre: "Carne"}
];
for (const index of productos){
    console.log("El ID es: " + index.id);
    console.log("El nombre del producto es: " + index.nombre);
}
// IMPRIME
// El ID es: 1
// El nombre del producto es: Arroz
// El ID es: 2
// El nombre del producto es: Pollo
// El ID es: 3
// El nombre del producto es: Carne
```

##### Ejemplo
-Creo una clase producto que tiene su metodo de sumar iva.
```javascript
class Producto {
    constructor(nombre, precio, id) {
        this.id = id;
        this.nombre = nombres;
        this.precio = parseFloat(precio);
    }
    sumarIva(){
        this.precio = this.precio *1.21;
    }
}
```
- Voy a hacer una constante carrito que sería un **Array**
```javascript
const carrito = [];
console.log(carrito);
//IMPRIME [] porque el array esta vacio.
```
- Si a mi carrito quiero agregarle una nueva instancia de *producto*, lo hago con **push**
```javascript
carrito.push(new Producto ())
```
- Producto tiene un constructor (id, nombre,precio).
*Agrego 3 ejemplos.*
```javascript
carrito.push(new Producto("#COD1", "Arroz", 100));
carrito.push(new Producto("#COD2", "Leche", 200));
carrito.push(new Producto("#COD3", "Carne", 300));

console.log(carrito);

// IMPRIME

(3) [Producto, Producto, Producto]
0: Producto {id: '#COD1', nombre: 'ARROZ', precio: 100}
1: Producto {id: '#COD2', nombre: 'LECHE', precio: 200}
2: Producto {id: '#COD3', nombre: 'CARNE', precio: 300}
length: 3
```

- Ahora si quiero hacer una función que le sume el iva a todos los productos hago:
- **porCadaProducto** vendría a ser el "index" y "evaluamos" carrito.

```javascript
for (const porCadaProducto of carrito){
//entonces por cada producto que aparezca en carrito, le va a sumar el iva.
    porCadaProducto.sumarIva();
}
// IMPRIME
(3) [Producto, Producto, Producto]
0: Producto {id: '#COD1', nombre: 'ARROZ', precio: 121}
1: Producto {id: '#COD2', nombre: 'LECHE', precio: 242}
2: Producto {id: '#COD3', nombre: 'CARNE', precio: 363}
length: 3
```
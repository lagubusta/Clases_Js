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
const arrayConString = ["Hola", "mundo","como", "estas?"];
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
### Contar elementos del array
- **Length**:
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
### Agregar elementos al array
- **push**:
- Para agregar un elemento tengo que llamar al array y usar el metodo **push**.
- Este nuevo valor ingresado con el metodo push se va a agregar al final del array. 
```javascript
const arrayNumerico = [1, 2, 3, 4, 5, 6.5];
arrayNumerico.push(15);
// Nuestro array ahora quedaría de esta forma
arrayNumerico = [1, 2, 3, 4, 5, 6.5, 15];
```
###### NO SE RECOMIENDO USAR ESTE METODO *explicación del porque en shift*
- **unshift**
- Este nuevo valor ingresado con el metodo push se va a agregar al principio del array. 
```javascript
arrayNumerico = [1, 2, 3, 4, 5, 6.5, 15];
arrayNumerico.unshift(100);
// Nuestro array ahora quedaría de esta forma
arrayNumerico = [100, 1, 2, 3, 4, 5, 6.5, 15];
```
### Sacar elementos al array
- **pop**:
- Este metodo sirve para eliminar el elemnto del final.
- En este ejemplo no es necesario poner un valor dentro del () del metodo.
```javascript
arrayNumerico = [1, 2, 3, 4, 5, 6.5, 15];
arrayNumerico.pop();
// Nuestro array ahora quedaría de esta forma
arrayNumerico = [100, 1, 2, 3, 4, 5, 6.5];
```
###### NO SE RECOMIENDO USAR ESTE METODO.
*No se recomienda por que cuando elimino el primer elemento porque el orden de los productos se corren. Si hago el **shift** y saco el valor 1, que tenia numero de index u orden 0, y ahora el valor 2 paso a tener el index u orden 0. Si yo en otra parte del codigo tenia algo que dependia de ese orden se rompe.*

- **shift**: 
- Este metodo sirve para eliminar el elemnto del principio.
- En este ejemplo no es necesario poner un valor dentro del () del metodo.
    
```javascript
arrayNumerico = [1, 2, 3, 4, 5, 6.5];
arrayNumerico.pop();
// Nuestro array ahora quedaría de esta forma
arrayNumerico = [1, 2, 3, 4, 5, 6.5];
```
###### NO SE RECOMIENDO USAR ESTE METODO. *mismo problema que tiene shif y unshift*
- **splice**
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



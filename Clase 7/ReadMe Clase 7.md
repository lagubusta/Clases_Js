# CLASE 7

## FUNCIONES DE ORDEN SUPERIO.
*Es aquella que bien retorna una función, o recibe una función por parámetro.*
*Este tipo de funciones nos permite abstraernos sobre **acciones** y no sólo valores.*
*El concepto de funciones de orden superior es prácticamente poder poner funciones dentro de otras funciones.*


- Definimos una variable global que se va incrementando a partir de un iterador, que este iterador es una variable local dentro de un ciclo *for* que esta inicializada en 1 y tiene un limitante por 5 (la condición)
```js
let total = 0;
for (let i = 0; i<= 5; i++){
    total +=i;
}
console.log(total);
// 15 porque
// Con el DEBUGGER permite ver como se va imprimiendo paso a paso hasta cumplir el ciclo for
// 1ra vuelta i =1 + i; // 1
// 2da vuelta i =2 + i; // 3
// 3ra vuelta i =3 + i; // 6
// 4ta vuelta i =4 + i; //  10
// 5ta vuelta i =5 + i; //  15
```
- Para ir viendo paso a paso en la consola del buscador (Google Chrome):
    - Voy a la consola (F12)
     - Donde muestra el console.log aparece la linea en la que se ejecuto mi codigo, en este caso **clase7.jsd:6** hago click.
    - Hago click en la linea que quiero analizar, y va a ejecurar en modo **DEBUGGER** paso a paso como va haciendo el codigo.
---
### Abstracción
*Resumimos un grupo complejo de instrucciones bajo una palabra clave (función) que sugiere cuál es el problema a resolver por la misma.
Ocultan los detalles sobre la opreción sin resolver y no permite "hablar" sobre los problemas en un nivel mas alto, o mayor grado de abstracción.*


- Puedo hacer exactamente lo mismo usando solamente esta linea de codigo:
- Defino una funcion: *sumarRango*.
- Le doy dos parámetros: *inicio*, *fin*.
    - En el ejemplo anterior *i* ahora igual a  **inicio**.
    - En el ejemplo anterior *5* ahora es **fin**.
- Este ciclo for necesita un **return**

```js
function sumarRango (inicio, fin){
    let total = 0;
    for (let i = inicio; i<= fin; i++){
        total +=i;
    }
    return total;
}
console.log("Con sumarRango " + sumarRango(1,5));
// Con sumarRango 15
console.log("Con sumarRango " + sumarRango(5,30));
// Con sumarRango 455
```
- Entonces con esto esto definiendo una función que pueda reutilizar, solo tengo que cambiar los parámetros. Nunca defino de manera fija los valores.
    - Esto se podría usar como por ejemplo para sumar la cantidad de ventas del mes de Junio y despues hacer lo mismo con el mes de Abril.
- Se puede hacer con números negativos.
```js
console.log("Con sumarRango " + sumarRango(-1,4));
// Con sumarRango 9
console.log("Con sumarRango " + sumarRango(1,4));
//Con sumarRango 10
```
### Retornar Funciones

- En el siguiente ejemplo tengo una función que retorna una  *funcion anonima* que hace una compración.
- Esta función *mayorQue* me va a dar un resultado que yo voy a poder asignar a una variable.
```js
function mayorQue(n){
    return (m) => m > n //función flecha que hace la comparación.
}
```
- Esta función me pide que le pase un número *(n)* que lo va a comprar con otro número *(m)*.
- En el return me dice que le pase un numero *(m)*.
- La "accion" *(=>)* va a ser comprar si *m > n*, que los ingreso por parámetro.
- El return va a ser **true** o **false** por que es booleano.

- Para hacer esto definimos una función nueva y la guardamos con *let* (también puede ser const) por que a esta variable le estamos asignando el **return**.
    - Al mayorQueDiez le estamos asignando esto:
    - *return (m) => m > n*
```js
let mayorQueDiez = mayorQue(10); // Recibe el return de la función flecha.
// Es lo mismo que let mayorQueDiez = m => m > 10;
```
- Ahora hacemos un console.log():
```js
console.log(mayorQueDiez(20));
// True
console.log(mayorQueDiez(8));
// False
```
---
###### OTRO EJEMPLO
- Defino una función: *asignarOperacion* con el parámetro *operacion*, el valor de la operación lo recive del *return* que va a ser **suma** o **resta**.
- De acuerdo a la operación "elegida" va a hacer return de una u otra "acción".
- Despues asigno las constantes *funcionSumar* y *funcionRestar* y tengo que hacer la asignación, que en este caso es una función *asignarOperacion* con los parámetros posibles *(sumar o restar)*. Este *asignarOperacion* la operación generada con el return.
- Lo parámetros que voy a sumar o restar los ingreso en el console.log().
- Esta 
```js
function asignarOperacion(operacion) {
    if (operacion == "sumar") {
        return (a, b) => a + b;
    }
    else if (operacion == "restar") {
        return (a, b) => a - b;
    }
}

const funcionSumar = asignarOperacion("sumar"); // const funcionSumar = (a, b) => a + b
const funcionRestar = asignarOperacion("restar"); // const funcionRestar = (a, b) => a - b

console.log(funcionSumar(10, 5));
// 15
console.log(funcionRestar(10, 5));
// 5
```

### Recibir una función por parámetro
- Lo que vamos a recibir como parámetro dentro de una función va a ser otra función.

Ejemplo:
- Defino una función.
```js
function porCadaElemento()
```
- Le voy a pasar dos parámetros.
    - Primero un array.
    - Segundo una función, que no lleva () al final por que la estoy pasando como parámetro, no la estoy definiendo.
    - **myFuncion** *va a terminar siendo un console.log*
```js
    function porCadaElemento(myArray, myFuncion){}
```
- Vamos a usar el el ciclo **for Of**
    - *por cada elemento de un array hace algo.*
-Abro el ciclo *for*. Voy a definir una constante que se llame *elemento* que esta dentro de *myArray* haga lo siguiente.
```js
function porCadaElemento(myArray, myFuncion){
    for (const elemento of myArray){
        
    }
}
```
- Le digo que a *myFuncion* le pase la const *elemento*
- Basicamente que *myFuncion* se aplique a cada elemento de *myArray*
```js
function porCadaElemento(myArray, myFuncion){
    for (const elemento of myArray){
        myFuncion (elemento);
    }
}
```
-Defino myArray.
```js
const numeros = [1, 2, 3, 4, 5, 6];
```
- Ahora voy a llamar a la función y le paso los parámetros, el primero es *numeros* y despues la función de lo que quiero que haga, por ejemplo console.log. *no lleva () por que esta dentro de un parámetro*
```js
const numeros = [1, 2, 3, 4, 5, 6];
porCadaElemento(numeros, console.log);
//IMPRIME
// 1
// 2
// 3
// 4
// 5
// 6
```
-*Todo el código junto*
```js
function porCadaElemento(myArray, myFuncion){
    for (const elemento of myArray){
        myFuncion (elemento);
    }
}
const numeros = [1, 2, 3, 4, 5, 6];
porCadaElemento(numeros, console.log);
//IMPRIME
// 1
// 2
// 3
// 4
// 5
// 6
```
###### Con ejemplo de función de acumulación
- A la misma funcion de *porCadaElemento* solamente le cambie el segundo parámetro que antes era *myFuncion*. Ahora defini una nueva función llamada *acumuladora* y la ingrese como parametro.
```js
let total = 0;
function acumuladora(numero){
    total += numero;
}
porCadaElemento(numeros, acumuladora);
console.log("Total acumulado: " + total);
// IMPRIME
// Total acumulado: 21
```
###### Con ejemplo con funcion flecha

- Defino un array: numerosDuplicados que este vació. La idea es multiplicar por 2 todos los numeros de el array numeros.
- Como parámetros va a recibir numeros y la funcion flecha.
```js
const numerosDuplicados = [];
porCadaElemento(numeros, (elemento)=>{
    numerosDuplicados.push(elemento * 2);
})
console.log(numerosDuplicados.join(", "));
// IMPRIME
// 2, 4, 6, 8, 10, 12
```
- Por cada elemento de mi array, lo va a recorrer y le va a aplicar *"myFuncion"* que en este caso es la función flecha.

## MÉTODOS DE BUSQUEDA Y TRANSFORMACIÓN.
- Cada uno de estos métodos están pensados para solucionar **problemas recurrentes** con los arrays.

#### FOR EACH
- Itera sobre el array y por cada elemento ejecuta la función que enviemos por parámetro, la cual recibe a su vez el elemento del array que se está recorriendo.
- Es similar a lo que veniamos haciendo con **porCadaElemento**.
- Es una funcion que adentro le tenemos que pasar una función con lo que queremos que haga con cada elemento.
```js
numeros.forEach(numero => {
    console.log(numero);
})
// IMPRMIE
//1
//2
//3
//4
//5
//6
```
- De esta manera podría tener un hacer un nuevo array vacio que se llame numerosConIva y a cada elemento aplciarle el iva.
```js
let numerosConIva = [];
numeros.forEach((num) =>{
    numerosConIva.push(num * 1.21);
});
console.log(numerosConIva);
```
#### FIND *es key sensitive*
- Recibe una función de comparación por parámetro. Captura el elemento que se está recorriendo y retorna *true* o *false* según la comparación ejecutada. El método retorna el primer elemento que cumpla esa condición.

- En este ejemplo definimos un array con obejtos. Llamando al array (*cursos*) le aplicamos el método find para que busque el la palabra que queremos.
- La coincidencia tiene que ser exacta, si va con mayuscula en el array, cuando lo busque tiene que ser igual.
```js
const cursos = [
    {nombre: 'JS', precio: 150000},
    {nombre: 'ReactJS', precio: 220000}
];
const resultado1 = cursos.find((elemento) => elemento.nombre === "JS");
console.log(resultado1); // {nombre: 'JS', precio: 150000}
const resultado2 = cursos.find((elemento) => elemento.nombre === "jS"); // undefined
console.log(resultado2); // undefined
const resultado3 = cursos.find((elemento) => elemento.nombre === "DW");
console.log(resultado3); // undefined
```

#### FILTER
##### INCLUDES
- Recibie al igual que el find(), una función comparadora por parámetro, y retorna **un nuevo array* con todos los elementos que cumplan esa condición. Si no hay coincidencias, retornará un array vacío.
- Llamando al array (*cursos*) le aplicamos el método *filter* y le agregamos el método *includes* para que busque todas las palabras que incluyan la que buscamos.

```js
const resultadoFilter = cursos.filter((elemento) => elemento.nombre.includes("JS"));
console.log(resultadoFilter);
```
### SOME *es key sensitive*
- Funcióna igual que el find(). Pero retorna *true* o *false*. Dice si existe o no.
```js
const resultadoSome1 = cursos.some((elemento) => elemento.nombre === "JS");
console.log(resultadoSome1); // true
const resultadoSome2 = cursos.some((elemento) => elemento.nombre === "jS"); // false
console.log(resultadoSome2); // undefined
const resultadoSome3 = cursos.some((elemento) => elemento.nombre === "DW");
console.log(resultadoSome3); // false
```
### MAP
- Crea un nuevo array con todos los elementos del original transformados según los operaciones de la función enviada. Tiene la misma cantidad de elementos pero los almacenados son el *return* de la función.
- Le voy a pedir que cree un nuevo array con los nombre dentro de cursos.
```js
const cursosConMap = cursos.map ( (elemento)=> elemento.nombre)
console.log(cursosConMap.join(", "));
// JS, ReactJS, HTML, JAVA
```
- Tambien lo puedo usar para actualizar datos y haciendo el nuevo array.
```js
const actPrecio = cursos.map(elemento => {
    return{
        nombre: elemento.nombre,
        nuevoPrecio: elemento.precio + 5555
    }}
)
console.log(actPrecio)
// 0: {nombre: 'JS', nuevoPrecio: 155555}
// 1: {nombre: 'ReactJS', nuevoPrecio: 225555}
// 2: {nombre: 'HTML', nuevoPrecio: 55555}
// 3: {nombre: 'JAVA', nuevoPrecio: 225555}

// antes
// console.log(cursos)
// 0: {nombre: 'JS', precio: 150000}
// 1: {nombre: 'ReactJS', precio: 220000}
// 2: {nombre: 'HTML', precio: 50000}
// 3: {nombre: 'JAVA', precio: 220000}
```

### REDUCE *acumulador*
- Permite obtener un único valor tras iterar sobre el arrar. Funcionar como un método que resume el array a un único valor de retorno.
    - Ejemplos de aplicación:
    - Cuando queremos acumular la suma de alguna propieda de los elementos.
    - Cuando deseamos obtener algún resultado general sobre todo el array.
- Muy similiar a esto que vimos al principio.
```js
function sumarRango (inicio, fin){
    let total = 0;
    for (let i = inicio; i<= fin; i++){
        total +=i;
    }
    return total;
}
```
- El reduce recibe un acumulador y un elemento y también recibe un parámetro final que es el valor inicial con el que yo quiero arrancar.
- Esto ultimo sería que suma todos los numero del array y despues suma 10.

```js
const numeros = [1, 2, 3, 4, 5, 6];
const totalEnNumeros = numeros.reduce((acumulador, elemento) => acumulador + elemento, 0);
console.log(totalEnNumeros);
// 21 hace la suma de todos.
```

### SORT
*método destructivo, modifica el array sobre el cual se llama*
- Permite reordenar un array según un criterio que definamos. Recibe una función de comparación por párametro que, a la vez, recibe dos elementos del array. La función retorna un *valor númerico* (1, -1, 0) que indica qué elemento se **posiciona** antes o después.
```js
const numerosDesordenados = [ 1003, 22, 13, 4654, 35, -6];
console.log(numerosDesordenados.sort((a, b) => a-b)); // Forma ascendente [-6, 13, 22, 35, 1003, 4654]
console.log(numerosDesordenados.sort((a, b) => b-a)); // Forma descendente [4654, 1003, 35, 22, 13, -6]
```
- Para ordenar palabras alfabeticamente.
```js
const palabrasDesordenadas = [ 'Sofia', 'Agustin', 'Mateo', 'Ines', 'Ignacio', 'Carolina'];
console.log(palabrasDesordenadas.sort((a, b) => a(b))); // Forma ascendente
console.log(palabrasDesordenadas.sort((a, b) => b.localeCompare(a))); // Forma descendente
```
- **Para ordenar Objetos**
- Para ordenar un array por algún **string**, debemos definir una función comparadora que retorne un valor numérico de referencia, según queramos el orden ascenden o descendente.

```js
const cursosSort = [
    { nombre: 'JS', precio: 150000 },
    { nombre: 'ReactJS', precio: 220000 },
    { nombre: 'HTML', precio: 50000 },
    { nombre: 'JAVA', precio: 220000 }
];
cursosSort.sort ((a, b) =>{
    if( a.nombre > b.nombre){
        return 1;
    }
    if( a.nombre < b.nombre){
        return -1;
    }
    return 0;
}
)
console.log(cursosSort);
```
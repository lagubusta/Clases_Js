# Clase 15
# Asincronía y promesas

## Modelos de programación sincrónica y asincrónica

1. Programación  sincrónica.
- En este modelo, nuestro programa funciona de manera lineal, ejecutando una acción y después otra. Sólo podemos realizar una tarea a la vez y cada tarea es bloqueante de la siguiente.
2. Programación  asincrónica.
- Este modelo permite que múltiples tareas sucedan a la vez. Al comenzar una acción, nuestro programa sigue en ejecución; y cuando la acción termina nuestro programa es informado y consigue acceso al resultado correspondiente.
- Por ejemplo cuando prendo la pc que empiezan a correr diferentes aplicaciones.

### SetTimeout

- Es una función que permite realizar acciones asincrónicamente. La función recibe dos parámetros:
- Una función de callback y un valor numérico que representa milisegundos.
- **Función de callback**: Funcion "anonima" que se pasa por parametros y se invoca en la segunda función.
```js
setTimeout(fn, time);
```
- Así, la función que pasamos por primer parámetro se ejecuta luego de que transcurra el tiempo definido en el segundo parámetro. Por ejemplo:
```js
setTimeout(()=> {
    console.log("Proceso asincrónico")
}, 3000);
```
Lo puedo usar para sacar el **arlet** pero hay que ver en que caso se quiere usar, depende mucho de eso.
Puedo poner el obeto de de *sweet alert*  dentro del **setTimeout()** poner "," y el tiempo que va a durar en milisengundos.

----
En el siguiente ejemplo le pido que por cada letra de "*hola*", haga un console.log().
Imrime de manera inmediata.
```js
for (let letra of "hola"){
    console.log(letra);
}
```
Ahora le pido lo mismo pero despues de 1500 mls.
```js
for (let letra of "hola"){
    setTimeout(() => console.log(letra), 1500)
}
```
### Call Stack y Event loop.
#### Call Stack
- Es una lista donde se apilan las distintas tareas a ejecutar por nuestro programa. Javascript es un lenguaje single threaded, o de un único hilo, lo que significa que tiene un único stack o pila de ejecución. De ahí que la ejecución es implícitamente sincrónica.

- Ejemplo cuando pongo **0** segundo en *setTimeout*
```js
console.log("funcion sincronica 1");
setTimeout(() =>{
    console.log("Funcion asincronica con 0 seg");
}, 0);
console.log("funcion sincronica 1");
// funcion sincronica 1
// funcion sincronica 2
// Funcion asincronica con 0 seg
```
Todo se imprime de manera inmediata, lo que ponemos dentro del **setTimeout** se imprime ultimo por que esta función se demora, aunque sea prácticamente nada, en toces imprime el "3er" console.log. Tiene que hacer dos acciones.

### SetInterval
Ejecutar indefinidamente una función a partir de un intervalo.
Recibe una función de callBack y de tiempo.
```js
setInterval(()=>{
    console.log("Tic");   
}, 500);
```
Va a imprimir ***"Tic"*** indefinidamente.
Para *"romper"* este ciclo uso ClearInterval.

#### ClearInterval

Tengo un contador inicializado en 0 que a medida que va sumando haga un console.log, pero cuando el contador llega a 5 que frene e imprima "Se removio el intervalo".

```js
let counter = 0;
const interval = setInterval(() => {
    counter++
    console.log ("Counter: ", counter)

    if (counter >= 5){
        clearInterval(interval);
        console.log("Se removio el intervalo");
    }
}, 1000);
```
#### clearTimeout
Si guardamos en una variable la referencia al timeout generado, podemos usarla para removerlo luego. En el siguiente caso, el timeout generado nuca llega a ejecutarse.
Si comento el **clearTimeout(fin);** va a imprimir **"Inicio"** y despues de un segun **"Fin"**. Pero cuando lo descomento solo se va a imprimir **"Inicio"**.
```js
console.log("Inicio");
const fin = setTimeout (()=> {
    console.log("fin");
}, 1000);
clearTimeout(fin);
// Inicio
```
---
## Promesas

Es un **objeto** de *JS* que representa un **evento a futuro**. Es una acción *asincrónica* que se puede completar en algún momento y producir un valor, y notificar cuando ersto suceda.
Una promesa cuenta con tres estados posibles:
1.  **pending**
2.  **fulfilled**
3.  **rejected**
  
Podemos crear promesas a través de su constructor **new Promise**. Su sintaxis es algo compleja, ya que recibe una función por parámetro que a su vez reciber por parámetro las funciones de **resolve** y **reject**.
```js
new Promise((resolve, reject) => {
    // cuerpo de la promesa
})
```
- Ejemplo
- Creo todo el esqueleto del eventoAFuturo y lo imprimo para ver que pasa.
```js
const eventoAFuturo = () => {
    return new Promise((resolve, reject) => {

    })
};
console.log(eventoAFuturo());
// Imprime 
// Promise {<pending>}
```
A este evento a futuro le paso un funcion booleana, si es **true** que imprima "Promesa cumplida" si es false que imprima "Promesa sin cumplir".
```js
const eventoAFuturo = (pasarDeNivel) => {
    return new Promise((resolve, reject) => {
        pasarDeNivel === true ? resolve("Promesa cumplida") : reject("Promesa sin cumplir");
    })
}
console.log(eventoAFuturo(true));
```
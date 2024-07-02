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

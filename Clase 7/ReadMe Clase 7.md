# CLASE 7

## FUNCIONES DE ORDEN SUPERIO.
*Es aquella que bien retorna una función, o recibe una función por parámetro.*
*Este tipo de funciones nos permite abstraernos sobre **acciones** y no sólo valores.*
*El concepto de funciones de orden superior es prácticamente poder poner funciones dentro de otras funciones.*


- Definimos una variable global que se va incrementando a partir de un iterador, que este iterador es una variable local dentro de un ciclo *for* que esta inicializada en 1 y tiene un limitante por 5 (la condición)
```javascript
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
Ocultan los detalles sobre la opreción sin resolver y no permiote "hablar" sobre los problemas en un nivel mas alto, o mayor grado de abstracción.*


- Puedo hacer exactamente lo mismo usando solamente esta linea de codigo:
- Defino una funcion: *sumarRango*.
- Le doy dos parámetros: *inicio*, *fin*.
    - En el ejemplo anterior *i* ahora igual a  **inicio**.
    - En el ejemplo anterior *5* ahora es **fin**.
- Este ciclo for necesita un **return**

```javascript
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
```javascript
console.log("Con sumarRango " + sumarRango(-1,4));
// Con sumarRango 9
console.log("Con sumarRango " + sumarRango(1,4));
//Con sumarRango 10
```
### Retornar Funciones

- En el siguiente ejemplo tengo una función que retorna una  *funcion anonima* que hace una compración.
- Esta función *mayorQue* me va a dar un resultado que yo voy a poder asignar a una variable.
```javascript
function mayorQue(n){
    return (m) => m > n //función anonima que hace la comparación.
}
```
- Esta función me pide que le pase un número *(n)* que lo va a comprar con otro número *(m)*.
- En el return me dice que le pase un numero *(m)*.
- La "accion" *(=>)* va a ser comprar si *m > n*, que los ingreso por parámetro.
- El return va a ser **true** o **false** por que es booleano.

- Para hacer esto definimos una función nueva y la guardamos *let* (también puede ser const) por que esta variable le estamos asignando el **return**.
    - Al mayorQueDiez le estamos asignando esto:
    - *return (m) => m > n*
```javascript
let mayorQueDiez = mayorQue(10); // Recibe el return de la función flecha.
// Es lo mismo que let mayorQueDiez = m => m > 10;
```
- Ahora hacemos un console.log():
```javascript
console.log(mayorQueDiez(20));
// True
console.log(mayorQueDiez(8));
// False
```
---

    # CLASE 2


# Control de Flujos.

- Hasta ahora todas las instrucciones que escribimos se ejecutan en linea recta, una sentencia después de la otra.
- La idea del control de flujos es marcar puntos en nuetra aplicación deonde, a partir de alguna evalución, nuestro programa pueda tomar varios caminos posibles de acción.

## Valores Booleanos
- Para generar estos controles le damos a elegir entre _true_ o _flase_. De esta forma va a evaluar/comprar  entre uno u otro.


## IF
- Se caracteriza por una condición, que van entre paréntesis despues del _if_ y las sentencias van entre {}.

```javascript
    if(a > b)
```

- Esta condición va a ser verdadera o falsa, ahí me va a dar la posibilidad de elegir que haga una u otra cosa (_true_ or _false_), según la condición que se cumple se toma una o _else_ la otra. Solo se puedo usar un solo _else_ por cada _if_.


    _Declaramos una variable con un prompt para asignar la edad_

```javascript
    let edad = parseInt(prompt("Ingresa tu edad:"));
    Ejemplo 1 valor ingresado:  20
    Ejemplo 2 valor ingresado:  16

    if (edad >= 18){
        console.log("Sos mayor de edad");
    }
        Ejemplo 1 valor ingresado:  20 es TRUE
        Ejemplo 2 valor ingresado:  16 es FALSE
    else{
    console.log("Sos menor de edad");   
        Ejemplo 1 valor ingresado:  20 es FALSE
        Ejemplo 2 valor ingresado:  16 es TRUE
    }
```

- Dependiendo de que condición es la que se cumple el console.log() va a tomar la que sea TRUE.

## ELSE IF

- Es una condición dentro de otra condición
```javascript
    let a = 10;
    let b = 100
    if(a > b){
        console.log("A es mayor a B");
    } else if (a < b){
        cosole.log("A es menor a B");
    } else {
        alert("En este caso se muestra un alert avisando que no se esta cumpliendo ninguna de las condiciones anteriores.");
    }
```
- _Siguiendo con el ejemplo anterior:_

    _Declaramos una variable con un prompt para asignar la edad_
```javascript
    let edad = parseInt(prompt("Ingresa tu edad:"));
    Ejemplo 1 valor ingresado:  20
    Ejemplo 2 valor ingresado:  16
    Ejemplo 3 valor ingresado:  Agustin
    if (edad >= 18){
        console.log("Sos mayor de edad");
        Ejemplo 1 valor ingresado:   20 es TRUE
        Ejemplo 2 valor ingresado:   16 es FALSE
        Ejemplo 3 valor ingresado:   Agustin es FALSE
    }
    else if (edad < 18) {
    console.log("Sos menor de edad");
        Ejemplo 1 valor ingresado:  20 es FALSE
        Ejemplo 2 valor ingresado:  16 es TRUE
        Ejemplo 3 valor ingresado:  16 es FALSE
    } else("La edad ingresada es Incorrecta");
        Ejemplo 1 valor ingresado:  20 es FALSE
        Ejemplo 2 valor ingresado:  16 es FALSE
        Ejemplo 3 valor ingresado:  Agustin es TRUE
```    

- Dependiendo de que condición es la que se cumple el console.log() va a tomar la que sea TRUE.
- Va tomar la primer condición _true_ que encuentre. La forma de lectura en JS es casada, tomando de arriba a abajo cada _SENTENCIA_ (Cada linea de codigo).


- Ejemplo si la edad ingresada fue -16:
```javascript
    if (edad >= 18){
        console.log("Sos mayor de edad");
    } else if (edad < 18) {              /*(A)*/
    console.log("Sos menor de edad");
    } else if (edad < 0) {             /*(B)*/
    console.log("La edad debe ser mayor a 0");
    } else("La edad ingresada es Incorrecta");
```

- El console.log() que se va a mostra es el __(*A*)__ ya que la sentencia del __(*B*)__ esta debajo. Para que quede de manera correcta el código, la sentencia de __(*B*)__ debería ir por encima de la sentencia de __(*A*)__.

---

## Operadores en Java Script

- Asignación:
    =
- Es igual:
    ==
- Es estrictamente igual:
    ===
- Es distinto:
    !=
- Es estrictamente distinto:
    !==
- Es manor, menor o igual, mayor, mayor igual:
    <, <=, >, >=
- Operador and (y):
    &&
- Operador or (o):
    ||
- Operador not (no):
    !

---
- En este caso estamos pidiendo al usuario que ingrese un valor y segun el valor ingresado que devuelva _true_ or _false_ pero de una manera un poco extensa. Se podría acortar para "ahorrar" código.
```javascript
    if (edad >= 18){
        console.log("Mayor de edad");
    } else if( __0 <= edad && edad < 18__){
        console.log("Menor de edad");
    } else {
        console.log("Valor no valido");
    }
```
 - Se usa el _&&_ para decir si edad es menor a 0 __Y__ edad menor a de 18.

## Valores Booleanos

- Los valores Booleanos son _true_ or _false_
    let unaVariable = 1;
    console.log(unaVariable > 0); 
    _va a mostrar en pantalla true_

- Armar una tabla de verdad:
```javascript
const V = true;
const F = false;
```
- Tabla de Verdad operador && (y):
```javascript
    console.log(V && F); _true_
    console.log(V && F); _false_
    console.log(F && V); _false_
    console.log(F && F); _false_
```
- Tabla de Verdad operador || (o):
```javascript
    console.log(V || F); _true_
    console.log(V || F); _true_
    console.log(F || V); _true_
    console.log(F || F); _false_
```
- Tabla de Verdad de la ! Negación:
```javascript
    console.log(!V); _false_
    console.log(!F); _true_
```
---

Ejemplo de como se aplica:

- En el ejemplo a continuación pide que se ingrese nombre y apelldio en dos prompts diferentes. Si los dos son datos valido va a mostrar el primer prompt. Si alguno esta vació va a mostrar el segundo console.log().

```javascript
    let ingreseNombre = prompt("Ingrese su nombre");
    let ingreseApellido = prompt("Ingrese su Apellido");
    let ingreseApellido = prompt("Ingrese su Edad");
    const VACIO = "";

    if(ingreseNombre != VACIO && ingreseApellido != VACIO){
        alert("Su nombre es " + ingreseNombre + " y el apellido es " + ingreseApellido);
    } else {
        alert("falta información");
    }
```
- Ahora agregamos una nueva condición dentro de la condición. Mediante un prompt va a pedir ingresar la edad siempre y cuando primera condición sea true
```javascript
if(ingreseNombre != VACIO && ingreseApellido != VACIO){
        if ingreseEdad != VACIO{
            alert("Su nombre es " + ingreseNombre + " y el apellido es " + ingreseApellido + " y tiene " + ingrese su edad);
        } else {
        alert("Su nombre es " + ingreseNombre + " y el apellido es " + ingreseApellido);
        }
    } else {
        alert("falta información");
    }
```
- El operador _&&_ del ejemplo anterior puede ser cualquier operador de JS.

*ESTO SE PUEDE USAR PARA UN LOGIN.*


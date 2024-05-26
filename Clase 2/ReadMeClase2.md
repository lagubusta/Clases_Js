# Clase 2
---

## Control de Flujos.

- Hasta ahora todas las instrucciones que escribimos se ejecutan en linea recta, una sentencia después de la otra.
- La idea del control de flujos es marcar puntos en nuetra aplicación deonde, a partir de alguna evalución, nuestro programa pueda tomar varios caminos posibles de acción.

# Valores Booleanos
- Para generar estos controles le damos a elegir entre _true_ o _flase_. De esta forma va a evaluar/comprar  entre uno u otro.


## IF
- Se caracteriza por una condición, que van entre paréntesis despues del _if_ y las sentencias van entre {}.

    if(a > b)

- Esta condición va a ser verdadera o falsa, ahí me va a dar la posibilidad de elegir que haga una u otra cosa (_true_ or _false_), según la condición que se cumple se toma una o _else_ la otra. Solo se puedo usar un solo _else_ por cada _if_.

    _Declaramos una variable con un prompt para asignar la edad_
    - let edad = parseInt(prompt("Ingresa tu edad:"));
    __Ejemplo 1 valor ingresado:  20__ 
    __Ejemplo 2 valor ingresado:  16__ 

    if (edad >= 18){
        console.log("Sos mayor de edad");
        _Ejemplo 1 valor ingresado:  20_ __es TRUE__
        _Ejemplo 2 valor ingresado:  16_ __es FALSE__
    }
    else{
    console.log("Sos menor de edad");   
        _Ejemplo 1 valor ingresado:  20_ __es FALSE__
        _Ejemplo 2 valor ingresado:  16_ __es TRUE__
    }

- Dependiendo de que condición es la que se cumple el console.log() va a tomar la que sea TRUE.

## ELSE IF
Es una condición dentro de otra condición

    let a = 10;
    let b = 100
    if(a > b){
        console.log("A es mayor a B");
    } else if (a < b){
        cosole.log("A es menor a B");
    } else {
        alert("En este caso se muestra un alert avisando que no se esta cumpliendo ninguna de las condiciones anteriores.");
    }

- Siguiendo con el ejemplo anterior:

    _Declaramos una variable con un prompt para asignar la edad_
    - let edad = parseInt(prompt("Ingresa tu edad:"));
    __Ejemplo 1 valor ingresado:  20__ 
    __Ejemplo 2 valor ingresado:  16__ 
    __Ejemplo 3 valor ingresado:  Agustin__ 

    if (edad >= 18){
        console.log("Sos mayor de edad");
        _Ejemplo 1 valor ingresado:  20_ __es TRUE__
        _Ejemplo 2 valor ingresado:  16_ __es FALSE__
        _Ejemplo 3 valor ingresado:  Agustin_ __es FALSE__
    }
    else if (edad < 18) {
    console.log("Sos menor de edad");
        _Ejemplo 1 valor ingresado:  20_ __es FALSE__
        _Ejemplo 2 valor ingresado:  16_ __es TRUE__
        _Ejemplo 3 valor ingresado:  16_ __es FALSE__
    } else("La edad ingresada es Incorrecta");
        _Ejemplo 1 valor ingresado:  20_ __es FALSE__
        _Ejemplo 2 valor ingresado:  16_ __es FALSE__
        _Ejemplo 3 valor ingresado:  Agustin_ __es TRUE__

- Dependiendo de que condición es la que se cumple el console.log() va a tomar la que sea TRUE.
- Va tomar la primer condición _true_ que encuentre. La forma de lectura en JS es casada, tomando de arriba a abajo cada _SENTENCIA_ (Cada linea de codigo).

- Ejemplo si la edad ingresada fue -16:

    if (edad >= 18){
        console.log("Sos mayor de edad");
    } else if (edad < 18) { __(*A*)__
    console.log("Sos menor de edad");
    } else if (edad < 0) { __(*B*)__
    console.log("La edad debe ser mayor a 0");
    } else("La edad ingresada es Incorrecta");

- El console.log() que se va a mostra es el __(*A*)__ ya que la sentencia del __(*B*)__ esta debajo. Para que quede de manera correcta el código, la sentencia de __(*B*)__ debería ir por encima de la sentencia de __(*A*)__.
---

# Operadores
Asignación:
    =

Es igual:
    ==
Es estrictamente igual:
    ===
Es distinto:
    !=
Es estrictamente distinto:
    !==
Es manor, menor o igual, mayor, mayor igual:
    <, <=, >, >=
Operador and (y):
    &&
Operador or (o):
    ||
Operador not (no):
    !

    

- En este caso estamos pidiendo al usuario que ingrese un valor y segun el valor ingresado que devuelva _true_ or _false_ pero de una manera un poco extensa. Se podría acortar para "ahorrar" código.

    if (edad >= 18){
        console.log("Mayor de edad");
    } else if( __0 < edad && edad < 18__){
        console.log("Menor de edad");
    } else {
        console.log("Valor no valido");
    }


quedoen minutor 46:13
# Clase 2
---

## Control de Flujos.

- Hasta ahora todas las instrucciones que escribimos se ejecutan en linea recta, una sentencia después de la otra.
- La idea del control de flujos es marcar puntos en nuetra aplicación deonde, a partir de alguna evalución, nuestro programa pueda tomar varios caminos posibles de acción.

# Valores Booleanos
- Para generar estos controles le damos a elegir entre _true_ o _flase_. De esta forma va a evaluar/comprar  entre uno u otro.


## IF
- Se caracteriza por una condición, que van entre paréntesis despues del _if_.

    if(a > b)

- Esta condición va a ser verdadera o falsa, ahí me va a dar la posibilidad de elegir que haga una u otra cosa (_true_ or _false_)

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


### NOTAS
- Cada linea de codigo se llama __SENTENCIA__.
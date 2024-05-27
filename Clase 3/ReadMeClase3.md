# Clase 3
---
## Ciclos / Iteraciones

- Bucles o ciclos: Es algo que se repite cierta o infinita cantidad de veces. Se usan las siguientes estructuras.

    __for__, __while__, __do...while__

- Ciclos por conteo:
    -Repiten un bloque de código X número de veces específica. Estructura __for__.
- Ciclos condicionales:
    Repiten un bloque de código mientras la condición evaludad es verdadera. Estructura __while__, __do...while__.

### Estructura FOR

- El "desde" es la zona en la que se establecen los valores inciales  de las variables que controlan el ciclo.
- El "hasta" es el único elemento que decide si se repite o se detiene un ciclo.
- La "actualización" es el nuevo valor que se asigna después de cada repetición a las variables qeu controlan la retición.

    _for_:(__desde__;__hasta__;__actualización__);{
        lo que escriba se va a repetir mientras dure el ciclo.
    }

- Ejemplo:  
- Vamos a imprimir en pantalla todos los valores de 0 al 9
for (let i = 0; i < 10; i++);{
console.log(i);
}

for --> es la estructura.
let --> es la variable que declaramos
i = 0 --> es la asignación a nuestra variable, desde donde va a empezar a contar.
i < 10 --> es hasta donde va a contar. Mientras i sea menor que 10.
i++ --> Quiere decir que el valor tenga  i le va a sumar 1.

Primera vuelta de ejecución se imprime: 0
Segunda vuelta de ejecución se imprime: 1
Tercera vuelta de ejecución se imprime: 2
...
Decima vuelta de ejecución se imprime: 9 y frena por que la condición se deja de cumplir, por que i pasaria a ser 10 y 10 NO es mayor que 10.

---
- En resumen acorta de todo este codigo:
let a;
a = 0;
console.log _imrpime 0_
a = a + 1; _imrpime 1_
a = a + 1; _imrpime 2_
...
a = a + 1; _imrpime 9_

- Otro Ejemplo:

let nombre = "Agustin";
for(let i = 1; i< 4;i++){
    console.log( i + " vuelta del " + nombre);
}
_Va a imprimir lo siguiente:_
1 vuelta del Agustin
2 vuelta del Agustin
3 vuelta del Agustin

### Break
- Dentro del ciclo __for__ aplicamos un __if__ para cuando __i__ sea igual a __5__ deje de hacer el bucle. No va a llegar a hasta 9.

for(let i = 1; i< 10;i++){
    if(i == 5){
        break;
    }
        console.log( i + " vuelta del " + nombre);
}

__5 vuelta del Agustin__ va a ser lo "maximo" que se va a imprimir.

### Continue
- Dentro del ciclo __for__ aplicamos un __if__ para cuando __i__ sea igual a __5__ deje de hacer el bucle. No va a llegar a hasta 9.

for(let i = 1; i< 10;i++){
    if(i == 5){
        continue;
    }
        console.log( i + " vuelta del " + nombre);
}

__4 vuelta del Agustin__ 
__*no va a imprimir la vuelta 5*__
__6 vuelta del Agustin__ 


## WHILE

## METODOS
- Se ve con mas detalle en clases mas adelante.
- __length__ cuenta la cantidad de caracteres de la asignación dada. En este caso "Agustin" tiene mas de 6 caracteres.

    let nombre = "Agustin";
    if (nombre.__length__ < 6){
        console.log("El nombre Agustin tiene menos de 6 letras.")
    } else{
        console.log("El nombre Agustin tiene mas de 6 letras.")
    }


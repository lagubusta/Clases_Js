# Clase 3
## Ciclos / Iteraciones

- **Bucles o ciclos:** Es algo que se repite cierta o infinita cantidad de veces. Se usan las siguientes estructuras.

    _for_, _while_, _do...while_.

- **Ciclos por conteo:**
    -Repiten un bloque de código X número de veces específica. Estructura __for__.
- **Ciclos condicionales:**
    Repiten un bloque de código mientras la condición evaludad es verdadera. Estructura __while__, __do...while__.

### Estructura FOR

- El "desde" es la zona en la que se establecen los valores inciales  de las variables que controlan el ciclo.
- El "hasta" es el único elemento que decide si se repite o se detiene un ciclo.
- La "actualización" es el nuevo valor que se asigna después de cada repetición a las variables qeu controlan la retición.

```javascript
    _for_:(__desde__;__hasta__;__actualización__);{
        lo que escriba se va a repetir mientras dure el ciclo.
    }
```

- Ejemplo:  
- Vamos a imprimir en pantalla todos los valores de 0 al 9

 ```javascript
for (let i = 0; i < 10; i++);{
console.log(i);
}
```

    - for --> es la estructura.
    - let --> es la variable que declaramos
    - i = 0 --> es la asignación a nuestra variable, desde donde va a empezar a contar.
    - i < 10 --> es hasta donde va a contar. Mientras i sea menor que 10.
    - i++ --> Quiere decir que el valor tenga  i le va a sumar 1.
---
    - Primera vuelta de ejecución se imprime: 0
    - Segunda vuelta de ejecución se imprime: 1
    - Tercera vuelta de ejecución se imprime: 2
    - ...
    - Decima vuelta de ejecución se imprime: 9 y frena por que la condición se deja de cumplir, por que i pasaria a ser 10 y 10 NO es mayor que 10.

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

```javascript
let nombre = "Agustin";
for(let i = 1; i< 4;i++){
    console.log( i + " vuelta del " + nombre);
}
```

_Va a imprimir lo siguiente:_
1 vuelta del Agustin
2 vuelta del Agustin
3 vuelta del Agustin

### Break
- Dentro del ciclo __for__ aplicamos un __if__ para cuando __i__ sea igual a __5__ deje de hacer el bucle. No va a llegar a hasta 9.

```javascript
for(let i = 1; i< 10;i++){
    if(i == 5){
        break;
    }
        console.log( i + " vuelta del " + nombre);
}
```

__5 vuelta del Agustin__ va a ser lo "maximo" que se va a imprimir.

### Continue
- Dentro del ciclo __for__ aplicamos un __if__ para cuando __i__ sea igual a __5__ deje de hacer el bucle. No va a llegar a hasta 9.
```javascript
for(let i = 1; i< 10;i++){
    if(i == 5){
        continue;
    }
        console.log( i + " vuelta del " + nombre);
}
```

__4 vuelta del Agustin__ 
__*no va a imprimir la vuelta 5*__
__6 vuelta del Agustin__ 


## WHILE

- La estructura while permite crear bucles que se ejecutan cero o mas veces dependiendo de la condicion indicada.
- El funcionamiento del bucle _while_ se resume en: mientras se cumpla la condición indicada, repite las instrucciones incliudas dentro del bucle.
-Cuando usamos _while_, asumimios que la repetición va a finalizar. Pero si la comparación no se hace bien se puede generar un bucle infinito.
```javascript
    while(condicion){
        acción
    }
```
_mientra la condición sea verdadera se va a repetir la acción_
```javascript
    let repetir = true;
    while(repetir){
        console.log("Esto va repetirse infinitamente");
    }
```
- Ejemplo:
```javascript
    let i = 0;
    while(i < 5){
        console.log("Imprimiendo desde el While " + i)
        i++
    };
```

_Imprimiendo desde el While 1_
_Imprimiendo desde el While 2_
...
_Imprimiendo desde el While 5_

## DO WHILE
```javascript
    let i = 0;
    do {
        console.log("Imprimiendo desde el do While " + i)
        i++
    }while(i <= 7);
```
_Imprimiendo desde el do While 5_
_Imprimiendo desde el do While 6_
_Imprimiendo desde el do While 7_


## SWITCH

- La estructura __Switch__ esta especialmente diseñanda para manejar de forma sencilla __múltiples condiciones sobre la misma variable__ (técnicamente es un _if_ pero _switch_ es mas ordenado) pero solo permite evaluar casos individuales.

Ejemplo:
```javascript
let edadIngresada = parseIntprompt(("Ingresar edad: "));

switch (edadIngresada){
    case 18:
        console.log("Es mayor de edad.");
        break;
    case 17:
        console.log("Es menor de edad.");
        break;
    case 0:
        console.log("La edad ingresada debe ser mayor a 0.");
        break;
    default:
        console.log("El dato ingresado no es valido");
}
```











### NOTA

- ParseInt():
    - Me aseguro que lo que ponga dentro del () sea un numero entero y no un string.
    Por ejemplo:
        
    _formato numerico_ let a = 1;
    _formato string_    let b ="1";

    -si hago a + b me va a dar 11 por que toma el valor de b como string.
        a+ b = 11 _la operación + esta concatenando.
    -Para que de 2 tengo que hacer
        a + parseInt(b) = 2

    - ParseFloat()
    - Me permite ingresa numeros decimales.
     Por ejemplo:

    let a = parseInt(promt(1));
    let b =parseInt(promt(2,6));

    a + b = 4; __Va a dar 4 por que el parseInt redondea__

    let a = parseFloat(promt(1));
    let b =parseFloat(promt(2,6));

    a + b = 3,6; __Va a dar 3,6 por que el parseFloat permite ingresar numero con decimales__
    















## METODOS
- Se ve con mas detalle en clases mas adelante.
- __length__ cuenta la cantidad de caracteres de la asignación dada. En este caso "Agustin" tiene mas de 6 caracteres.

    let nombre = "Agustin";
    if (nombre.__length__ < 6){
        console.log("El nombre Agustin tiene menos de 6 letras.")
    } else{
        console.log("El nombre Agustin tiene mas de 6 letras.")
    }


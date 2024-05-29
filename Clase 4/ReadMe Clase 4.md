# CLASE 4
---

## FUNCIONES

- Es un conjunto de instrucciones que se agrupara para realizar una tarea concreta, que luego se puede __reutilizar__ a lo darlgo de diferentes instancias del código.

- Como declarar una _funcion_
    - Debe tener el nombre en minuscula y sin espacio, al final tiene que ir __()__.
    - El nombre de la función no se puede repetir en otra.

```javascript
    function saludar(){
        console.log("Hola.");
    }
```
- Dentro de las llave pongo lo que se tiene que hacer cada vez que llame a la función.
- Hasta este momento no se imprme nada en la pantalla por que no llame.

```javascript
    saludar();
    /*recién ahora va a imprimir en pantalla */
```
- Dentro de la función puedo poner lo que necesite. En el siguiente ejemplo pongo un prompt y un alert.

```javascript
    function pedirNombre() {
    let ingresarNombre = prompt("Ingrese su nombre:");
    alert("Su nombre es: " + ingresarNombre);
}
    pedirNombre();
```
### PARÁMETROS
- Una función simple, puede no necesitar ningún dato para funcionar.
- Pero cuando emepzamos a codificar **funciones más complejas**, nos encontramos con la necesidad de recibir cierta información.
- *Cando enviamos a la función uno o más valores para ser empleados en sus operaciones, estamos hablando de los parámetros de la función.*
- Los parámetros se envián a la función mediante variables y se colocan entre los paréntesis posteriores al nombre de la función.

- Los parámetros son **variables** que se declaran dentro de la función entre los () y se definien en el llamado, puedo usar todos lo que crea necesarios.

Ejemplo de parámetro:
```javascript
function usandoParametros(parametro1, parametro2, parametro3) {
    console.log(parametro1 + parametro2 + parametro3);
}

```
- Estos parametros son variables porpias de la función.
- Cuando pongo estos pagrametros dentro de llamado, se llaman argumentos.

```javascript
usandoParametros(3, 5, 7);
/* parametro1 = 3*/
/* parametro2 = 5*/
/* parametro3 = 7*/

/*VA A IMPRIMIR EN PANTALLA*/
15
```
- A esta función también le puedo poner como argumento strings.
```javascript
usandoParametros("Hola ", "a ", "todos.");
/* parametro1 = Hola"*/
/* parametro2 = a*/
/* parametro3 = todos.*/

/*VA A IMPRIMIR EN PANTALLA*/
Hola a todos
```
- A esta función también le puedo poner booleano.
```javascript
usandoParametros(true, false, true);
/* parametro1 = true */
/* parametro2 = false */
/* parametro3 = true.*/

/*VA A IMPRIMIR EN PANTALLA*/
2
/* por que al true lo concidera como 1 y al false como 0*/
```

- De la siguiente forma no va a estar imprimiendo el resutaldo (5) por que la variable resultado esta dentro de la función y cuando la estoy llamado lo hago desde afuera.
```javascript
function sumar (p1, p2){
    let resultado = p1 + p2;
}
sumar(2, 3);
console.log(resultado);
```
- **Para lograr que se imprima de manera correcta tengo que definir la variable fuera de la función sin asignarle valores.**
```javascript
let resultado;
function sumar (p1, p2){
    resultado = p1 + p2;
}
sumar(2, 3);
console.log(resultado);
```
- De esta forma puedo hacer con la misma función varias operaciones distintas solamente modificando los argumentos.
```javascript
sumar(2,5);
console.log(resultado);
/* IMPRIME */ 5
sumar(4,6);
console.log(resultado);
/* IMPRIME */ 10
sumar(3, 37);
console.log(resultado);
/* IMPRIME */ 40
```
- Para simplificar se puede generar una nueva fuición que se llame mostrar resultado. A esta función le pido que haga un console.log del _resultado_ de la función hecha antes.
```javascript
function mostrarResultado(resutaldo){
    console.log(resultado);
}
sumar(2,5);
mostrarResultado(resutaldo)
/* IMPRIME */ 5
sumar(4,6);
mostrarResultado(resutaldo)
/* IMPRIME */ 10
sumar(3, 37);
mostrarResultado(resutaldo)
/* IMPRIME */ 40
```

### RETURN

- En el ejemplo anterior sumamos dos números a una variable declarada anteriormente. Pero las funciones pueden generar un valor de retorno usando la palabrar **return**, obteniendo un valor cuando se llame a la función.
```javascript
function sumarConReturnSinVariable(p1,p2){
    return p1 + p2;
}
sumarConReturnSinVariable(12,6);
```
- De esta forma la función **sumarConReturnSinVariable** tiene un resultado implicito. Entonces para poder visualizar **sumarConReturnSinVariable** se lo asigno a una variable.

```javascript
let res= sumarConReturnSinVariable(12,6);
console.log(res);
/* IMPRIME */ 18
```
#### EJEMPLO DE COMO HACER UNA CALCULADORA.

- Defino la función.
```javascript
function calculadora(){
    
}
```
- Va a recibir como parámetros la **operación** y **dos numeros.**
```javascript
function calculadora(numero1, numero2, operacion){
}
```
- Al argunmento operación le aplico un __switch__ para poder "elegir" que operación quiero hacer.
```javascript
function calculadora(numero1, numero2, operacion){
    switch(operacion){
        case "+":
            return numero1 + numero2;
            break;
        case "-":
            return numero1 - numero2;
            break;
        case "*":
            return numero1 * numero2;
            break;
        case "/":
            return numero1 / numero2;
            break;
        default:
            return 0;
            break;
    }
}
console.log(calculadora(10,2, "+"));
/* IMPRIME */ 12
console.log(calculadora(10,2, "-"));
/* IMPRIME */ 8
console.log(calculadora(10,2, "*"));
/* IMPRIME */ 20
console.log(calculadora(10,2, "/"));
/* IMPRIME */ 5
```
- Dentro del switch se pueden poner otras cosas como por ejemplo un **if** para evitar que el usuario en el *case "/"* ingrese un valor 0, que va a dar como resultado *Infinity*.
```javascript
/*MAS CODIGO */
case "/":
            if(numero2 != 0){ /* Uso el if para decirle si el valor de numero2 es distindo a 0 haga la operación */
                return numero1 / numero2;
            } else{ /*Si el valor de numero2 es == 0 va a mostrar el alert. */
                alert ("El valor de segundo numero tiene que ser diferente a 0");
            }
            break;
/*MAS CODIGO */
```

### FUNCIONES ANÓNIMAS

- Una función anónima es una función que se define sin nombre y es utilizadas para ser pasada como parámetro o asignada a una varible.
- En el caso de asignarla a una variable, pueden llamar usando el identificador de la variable declarada.

```javascript
/*funcion "anonima"  por ahora es incompleta.*/
function (a, b){
    return a + b
}
```
- Le asignamos a una constante con la función.
- Puede o no recibir parámetros.
- Las **constantes** se escribren con mayúsculas pero como es una función se escribre con minuscula.
- Se genera con constante para que no la pueda reasignar.
```javascript
/* Generalmente, las funciones anónimas se asignan a una variable declaradas como constantes */ 
const suma = function (a, b){
    return a + b
}
console.log(suma);
/* en la sugerencia va a mostrar esto
const suma: (a: any, b: any) => any
Quiere decir que cuando llame a esta constante que tiene su función va a devolver un resultado, solo le tenog que pasar los argumentos.*/
```
```javascript
const suma = function (a, b){
    return a + b
}
console.log(suma(2,5));
/* IMPRIME */ 7
```

### FUNCIONES FLECHA

- Es prácticamente lo mismo que las **funciones anónimas** lo que es escribre con flecha.
```javascript
const multiplicar = (a, b) => {
    return console.log(a * b);
}
multiplicar(4, 2);
/* IMPRIME */ 8 /* no hace falta que ponga el console.log por que ya lo aplica dentro de la función */
```
- Cuando la función tiene un solo parámetro no hace falta poner ().
- Cuando es de una sola linea o algo muy sencillo **no lleva return** por que ya lo tiene implicito, no hace falta escribirlo.
```javascript
const iva = x => x * 0.21;
console.log("El iva es de: " + iva(100)); 
/* IMPRIME */ El iva es de: 21
```


# CLASE 1

### Como aplicar el script a un html
- En el index.html se tiene que escribir el script así:
```javascript
    < body>
        *
        más código.
        *
        < script src="./Clase 5/clase5.js"></ script>
    </ body>
```

- Tiene que ir por encima de la etiqueta de cierre del body.
- Puedo usar la cantidad de script JS que crean necesario.

## Conceptos Generales Sintaxis y Variables.
---
## VARIABLES
- Siempre empizan con __minuscula__ y en caso que tenga mas pablabras se usa el __camelCase__. 
- Todo lo que son variables lo asigno con: __let__.
- Variables: Algo que puede cambiar, pueden ser numericas o alfanumericas (string, cadena de texto).
- Por mas que use scripts diferentes las variables no pueden tener el mismo nombre. Una vez que la declaro no la puedo volver a declarar. Si la puedo reasignar.
- Para usarla tengo que hacer una declaración y una asignación, puede no ser inmediata.

### NO USAR
1. Dentro de las declaraciones no puedo usar espacios.
2. No puedo usar Ñ, no usar acentos, ni caracteres especiales.

## Declaración y Asignación

- Puedo declarar una variable y usarla de manera inmediata o usarla cuando lo necesite.

### De manera inmediata:
```javascript
declaracion = asignacion;
```
```javascript
    let palabra = "Hola";
```
### Declaración:
```javascript
    let palabra;
    *
    mas codigo.
    *
```
### Asignación:
```javascript
    *
    mas codigo.
    *
    palabra = "Hola";
```
### Reasignación:

- Se pueden hacer reasignaciones. 
```javascript
    palabra = "Como estas?";
```
### Sintaxis
- Hay palabras reservadas tanto para variables como para constantes.

    _break, case, catch, continue, default, let, delete, do, else, finally, for, function, if, in, instanceof, new, return, switch, this, throw, try, typeof, var, void, while, with, y varias mas._

## CONSTANTES

- Se escriben en MAYUSCULA.
- Todo lo que son constantes lo asigno con: __const__.
- __Constante__: Algo que queda fijo y que no cambia, pueden ser numericas o alfanumericas (string, cadena de texto).
- Por mas que use scripts diferentes las variables no pueden tener el mismo nombre. Una vez que la declaro no la puedo volver a declarar. Si la puedo reasignar.
- Para usarla tengo que hacer una declaración y una asignación, puede no ser inmediata:
```javascript
    const CODER = "CoderHouse";
```
- A diferencia de las variables es que no pueden ser modificados. No puedo hacer reasignación.

```javascript
    CODER = "En coder se estudia"
    /* Esto va a indicar error */
```
## Declaración y Asignación

### De manera inmediata:
```javascript
/* declaracion = ASIGNACION; */

    const PALABRA = "Hola";
```
### Declaración:
```javascript
    const PALABRA;
    *
    mas codigo.
    *
```
### Asignación:
```javascript
    *
    mas codigo
    *
    PALABRA = "Hola";
```

## Asignación de números.

- Cuando es nuemro va a aparecer en color violeta en la consola.
```javascript
    let numero1 = 200; /* es un numero entero */
    let numero2 = 20.5; /* es un Float */
    const NUMERO = 300;
```
### Operaciones básicas.

- En la constante RESULTADO puedo poner cualquir operación (+ - * /).
```javascript
    let a = 1;
    let b = 2;

    const RESULTADO = a + b;
    console.log (RESULTADO); 
/* va a imprimir en pantalla "3" */

### Concatenación
```javascript
    let primerNombre = "Agustín";
    let segundoNombre = "Bustamante";

    const NOMBRE_COMPLETO = primerNombre + " " + segundoNombre;
    console.log(NOMBRE_COMPLETO);
/* va a imprimir en pantalla "Agustín Bustamante" */
```

## Prompt
- Es un metodo o función propia de JS.
- La sentencia _prompt()_ mostrará un cuadro de diálogo para que el usuario ingres un dato. Se puede proporcionar un mensaje que se clolocará sobre el campo de texto. El valor que devuelve es una cadena que represente lo que el usuario ingresó.
```javascript
    let nombreIngresado = prompt("Ingrese su nombre");
    console.log(nombreIngresado); 
    /* va a imprimir en pantalla lo que el usuario haya ingresado_ */
```

- En caso que el usuario no ingrese ningun dato en el prompt:
```javascript
    let nombreIngresado = prompt("Ingrese su nombre");
    console.log(nombreIngresado); 
    /* va a imprimir en pantalla null. Significa que no hay nada, no hay valor */
```
## Alert
- Es un metodo o función propia de JS.
- La sentencia alert() mostrará una ventana sobre la página web que estamos accediendo mostrando un mensaje que se pase como parámetro a la llamada.
```javascript
    alert("¡Hola!);
    /* va a mostrar una alerta que diga "¡Hola!" */
```
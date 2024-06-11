# Clase 12: OPERADORES AVANZADOS

## Sugar Syntax 
- Es el nombre que se le da a los operadores avanzados que funcionan como simplificaciones de tareas más complejas. El operador ++ es un ejemplo de esto.
- **Ayuda para simplificar el codigo.**
- Usar código y reutilizarlo para no tener que repetir.
### Operador ++ o --
 ***- REVISAR O BUSCAR INFO***

## Operador Ternario


- Es una simplificación de la estructura condicional **if…else**. Es un condicional que consta sí o sí de tres partes: 
    - La condición.
    - El caso de ejecución en caso que se cumpla.
    - El caso else si no se cumple.

*Antes*
```js
let temperatura = 30;

if(temperatura > 24){
    console.log("Hace calor");
} else {
    console.log("Esta templado");
}

```
- Ahora seria: dale una condición, el caso en que sea **true** y si no se cumple **false**, el caso2
**condicion ? caso1 : caso2**
```js
temperatura > 24 ? console.log("Hace calor con ternario") : console.log("Esta templado con ternario");
```
- Si en las "opciones" tengo mas de una, no puedo usar operación ternaria.
- Para poder hacerlo incluyo todo dentro de una función para despues llamarla.
```js
const usuario = {
    nombre: "Agustin",
    edad: 30,
}
const permiso = (usuario.edad >= 18) ? true : false; // declaro e inicializo la variable
permiso ?  console.log("Puede consumir alcohol") : console.log("No puede consumir alcohol"); // si permiso es verdadero ejecuta el primero consol.log sino va por el segundo.
```

## Operador Lógico and (**&&**)

- Es una reducción de un condicional, pero trata de ejecutar (o retornar) algo sólo si la condición es verdadera, reduce un if sencillo con un solo bloque de ejecución.
- Ante haciamos así
```js
const carrito = [];
if(carrito.length === 0 ){
    console.log("Carrito vacio");
};
// imprmie el carrito vacio.
```
- Ahora:
```js
const carrito = [1];
carrito.length === 0 && console.log("Carrito vacio");
// No va a imprimir nada, quiere decir que el carrito no esta vacio.
```
- Si lo que se pone delante del && se cumple, va a ejecutar lo que esta despues del &&.
---

## Operador Lógico or (**||**)

////// CODER
- OR ( || ) es sintácticamente similar al anterior, con la diferencia que consta de dos operandos y no de una condición explícita: operando1 || operando2.
```js
console.log( 0 || "Falsy")  // Falsy
console.log( 40 || "Falsy")  // 40
console.log( null || "Falsy")  // Falsy
console.log( undefined || "Falsy")  // Falsy
console.log( "Hola Mundo" || "Falsy")  // Hola Mundo
console.log( "" || "Falsy")  // Falsy
console.log( NaN || "Falsy")  // Falsy
console.log( true || "Falsy")  // true
console.log( false || "Falsy")  // Falsy
```
////// CODER
- Esto se podría usar para verificar si algo existe. En el ejemplo vamos a ver si el usuario 1 y 2 existen.
```js
const usuario1 = {
    nombre: "Agustin",
    edad: 30,
}
const usuario2 = null;

console.log(usuario1 || "el usuario no existe")
console.log(usuario2 || "el usuario no existe")
// imprime
// {nombre: 'Agustin', edad: 30}
// el usuario no existe
```

## Operador Logico ?? o Nullish

- Si se que las posibilidades de respuesta son null o undefiuned me conviene usar ?? sino ||.
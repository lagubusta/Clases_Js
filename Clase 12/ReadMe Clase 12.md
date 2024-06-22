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
- Antes haciamos así:
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

## Operador Lógico OR (**||**)

////// CODER
- OR ( || ) es sintácticamente similar al anterior, con la diferencia que consta de dos operandos y no de una condición explícita: operando1 || operando2.
- Si se que tengo varías posibilidades de respuesta me combien usar **||** en vez de **??**. 

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
- Este Operador (??) funciona igual que el Operador OR ( || ), con la diferencia que admite más valores como ‘verdaderos’. En este caso, sólo obtenemos nullish en dos casos:
```js
console.log( 0 ?? "Nullish")  // 0
console.log( 40 ?? "Nullish")  // 40
console.log( null ?? "Nullish")  // Nullish
console.log( undefined ?? "Nullish")  // Nullish
console.log( "Hola Mundo" ?? "Nullish")  // Hola Mundo
console.log( "" ?? "Nullish")  // ""
console.log( NaN ?? "Nullish")  // NaN
console.log( true ?? "Nullish")  // true
console.log( false ?? "Nullish")  // false
```
- De esta forma puedo verificar si el carrtio tiene productos agregados o si esta vacio.
```js
const carrito = localStorage.getItem('cart') || console.log("El carrito esta vacio");
console.log(carrito);
```

## Acceso condicional a un objeto
- Si solamente tengo crear el *usuario1* yo puedo acceder a cualquier cosa de ese usuario.
```js
const usuario1 = {
    nombre: "Agustin",
    edad: 30,
}
```
```js
console.log(usuario1.nombre);
// Agustin
```
- Pero si quiero hacer lo mismo con **usuario2** va a decir error por que no existe.
```js
console.log(usuario2.nombre || "El usuario no existe");
// IMPRMIE ERROR EN CONSOLA
```
- Para eso usamos el **acceso condicional**.
```js
console.log(usuario1?.nombre || "El usuario no existe");
// Agustín
console.log(usuario2?.nombre || "El usuario no existe");
// El usuario no existe
```
- Basicamente lo que hace es preguntar si el usuario 1 o 2 existe y en caso que exista muestre el nombre, sino existe que muestre **El usuario no existe**.
----
- Tengo el objeto *usuario1* que tiene un objeto dentro *cursos* con dos propiedades: *desarrollo web y javascript*.
```js
const usuario1 = {
    nombre: "Agustin",
    edad: 30,
    cursos: {
        desarrolloWeb: "Aprobado",
        javascript: "En curso",
    }
}
const usuario2 = null;
```
- Así accedo a los cursos de usuario1:
- Si el *usuario1* existe y tiene el curso de *desarrolloWeb* va a mostrar
```js
console.log(usuario1?.cursos?.desarrolloWeb || "La propiedad no existe");
// Aprobado
console.log(usuario2?.cursos?.desarrolloWeb || "La propiedad no existe");
// La propiedad no existe
console.log(usuario1?.cursos?.react || "La propiedad no existe");
// La propiedad no existe
```

## Desestructuración
- Seguimos con el ejemplo de *usuario1*.
```js
const usuario1 = {
    nombre: "Agustin",
    edad: 30,
    cursos: {
        desarrolloWeb: "Aprobado",
        javascript: "En curso",
    }
}
```
- Yo necesito acceder a información que esta muy estructurada y tengo que hacerlo de una manera más sencilla.
- Podemos declarar una variable que corresponde a un objeto y dentro de ese objeto declarar todos los atributos.
```js
let {nombre, edad, cursos} = usuario1; 
console.log(nombre);
// Agustin
console.log(cursos);
// {desarrolloWeb: 'Aprobado', javascript: 'En curso'}
```
- Como se muestra en el ejemplo, *cursos es un objeto* que se imprime como tal, pero si yo quiero acceder a cursos lo hago así:

```js
let {nombre, edad, cursos: { desarrolloWeb, javascript}} = usuario1; 
console.log(desarrolloWeb);
// Aprobado
console.log(javascript);
// En curso
```
#### Alias

- Otra forma es usando un *alias*.
- Cuando tenemos objetos distintos y los queremos desetructurar, siempre tratamos de usar un **alias**, para evitar que se "repitan" atributos.
- Por ejemplo:

```js
const producto1 = {
    nombre: "Azucar",
    precios: 1080,
};
const {nombre, precio} = producto1;
```
- Hice un objeto nuevo que es producto1, y cuando lo quiero desestructurar se repeditre el "nombre". Lo tengo repedito en
```js
let {nombre, ...} = usuario1
const {nombre, ...} = producto1;
```
Siempre va a dar error. Entonces para eso usamos un alias.
- Quedarían dos objetos, el de producto1 y el de usuario1.

```js
const usuario1 = {
    nombre: "Agustin",
    edad: 30,
    cursos: {
        desarrolloWeb: "Aprobado",
        javascript: "En curso",
    }
}
const producto1 = {
    nombre: "Azucar",
    precios: 1080,
};
// Declaramos variables con alias.
let {nombre: nombre_usuario, edad: edad_usuario, cursos: { desarrolloWeb, javascript}} = usuario1; 
const producto1 = {
    nombre: "Azucar",
    precios: 1080,
};

console.log(nombre_producto);
// Azucar
console.log(nombre_usuario);
// Agustín
```

#### Desestructuración en parámetros.

- Creamos un metodo que sea para *desestructurar objetos*.
```js
const desestructurarObjetos = 
```
- Va recibir por parámetro por ejemplo *objeto*.
```js
const desestructurarObjetos = (objeto) => {}
```
- Si quiero desestructurar a **usuario1**
- Creo una variable dentro de la función que busque el *nombre* y la *edad* de **objeto** y le pido que haga un console.log de ellos.
```js
const desestructurarObjetos = (objeto) => {
    const {nombre, edad} = objeto;
}

```

```js
```
```js
```
```js
```
# CLASE 5

## OBJETOS

- Cualidades son los atributos de un **objeto**, los sustantivos o  adjetivos.
- Los **metodos** son los verbos, son las cosas que puede hacer ese objeto.
- **Es una funcion que pertene o corresponede a un objeto. Son de manera local**

---

- Hasta ahora veniamos haciendo objetos de esta manera sin "saber" que lo eran objetos.

```javascript
    let nombre ="Agustin";
    let edad = 31;
    let colorDeOjos = "Verdes"
```
- Ahora podemos armar un *objeto* Agustin dentro de una constante de marenera **LITERAL**..
- Al igual que las funciones que van dentro de una constante, los objetos van en minuscula por que el nombre de esta no cambia, lo que varia son los valores.
- Se asignan los valores  de la siguiente forma:
    - Todos los datos que ponga dentro del objeto van a tener una **key (clave)** y un **value (valor)**.
    - La *clave*: se escribre como si fuese una variable.
    - El *valor*: se guarda como sería su dato primitivo. Si es un *string* se guarda entre "" *"Agustin"* y si es un numero se guarda sin comillas *20*.
    - Los atributos se separan unos de otros con **,**. Cuando ingrsamos el ultimo atributo **NO SE PONE ,**.

```javascript
const Agustin = {
    /* key: "value"*/
    nombre: "Agustín",
    edad: 31,
    colorDeOjos: "Verdes"
} 
```
- Cuando hago console.log(Agustin); se va a ver así:
```javascript
console.log(Agustin);
{nombre: 'Agustin', edad: 31, ciudad: 'Bs As'}
/*hacinedo click en la flechita se despliega lo siguiente */
ciudad: "Bs As"
edad: 31
nombre:"Agustin"
[[Prototype]]: Object
```
- Para acceder a una **key** especifica del objeto lo hago así:
    - Llamo al objeto *Agustin*.
    - Pongo un **.** y la key del atributo que quiero.
```javascript
console.log(Agustin.nombre);
Agustin/*IMPRIME EN PANTALLA */

/*Otra opción para hacer esto: */
console.log(Agustin ["nombre"]);
Agustin/*IMPRIME EN PANTALLA */
```
- Para modificar desde "afuera" uno de los atributos se hace así:
    - Llamo al objeto y elijo el atributo que quiero modificar y lo defino.
```javascript
    Agustin.edad = 32;
    /* Le estamos reasignando un nuevo valor a Agustin*/
```
- Si ahora hago un console.log(Agustin); va a mostrase así:
```javascript
console.log(Agustin);
{nombre: 'Agustin', edad: 32, ciudad: 'Bs As'}
```

### CONSTRUCTORES
- Es una función que sirve para crear objetos.
- A partir de este constructor voy a poder cualquier objetos con esos mismos atributos.
    - Las funciones constructoras empiezan con Mayuscula y **NO TIENE UN RETURN**
```javascript
function Persona(nombre, edad, ciudad) {
    this.nombre = nombre;
    this.edad = edad;
    this.ciudad = ciudad;
}
```
- Detalle del codigo:
    - El primer valor es el *valor propio* del constructor. (this.**nombre**, vendría a ser el *nombre:* = "Agustin").
    - El segundo valor es el que pasa por parámetro o argumento. (= **nombre**;, vendría a ser el nombre: = "*Agustin*").
    - Para diferenciar uno de otro se usa el **this.** por que el *this* hacer referencia, en este caso, a **Persona**.

### INSTANCIA
- Cada vez que se crea un objeto nuevo desde una clase o un constructor se llama una **instancia del objeto**. En este caso vamos a hacer una instancia del objeto persona.
    - Para esto hacer esto se llama a la constante y antes del objeto (*persona*) se pone **new**. Así podemos agregar los nuevos parámetros.


```javascript
const sofia = new Persona("Sofia", 24, "Buenos Aires");
```
- Si hacemos console.log(sofia); va mostrar lo siguiente:
```javascript
Persona {nombre: 'Sofía', edad: 24, ciudad: 'Buenos Aires'}
ciudad: "Buenos Aires"
edad: 24
nombre: "Sofía"
[[Prototype]]: Object
/*Ahora cuando hacemos console.log(sofia), como creamos el objeto apartir de un constructor que se llama persona, por eso lo imprime al principio de todo.*/

/*Antes habiamos hecho un console.log del objeto Agustin y no aparecia PERSONA adelante de todo por que se creo de manera "literal" */
{nombre: 'Agustin', edad: 31, ciudad: 'Bs As'}
ciudad: "Bs As"
edad: 31
nombre:"Agustin"
[[Prototype]]: Object
```

## FUNCIONES Y METODOS

- Las dos se escribir de forma similar.
    - Funcion: *las funciones  hacen cosas, tiene return*
```javascript
function hola(){
    return console.log(Hola);
}
hola();
```
- Metodos: *no tiene return, no devuelve nada. Es un metodo constructor por eso se escribe con Mayuscula la primera letra.*
```javascript
function Persona(nombre, edad, ciudad) {
    this.nombre = nombre;
    this.edad = edad;
    this.ciudad = ciudad;
}
```
- Ya veniamos creando objetos:
```javascript
let nombre = new String ("Hola");
console.log(nombre);
/*IMPRIME */
String {'Hola'}

0: "H"
1: "o"
2: "l"
3: "a"
length: 4
```
- Todo objeto tiene sus propios **metodos** y se usan poniendo **.** despues del objeto (en este caso nombre).
```javascript
console.log(nombre.length);
/*IMPRIME */ 4
```
- Algunos de estos metodos son
```javascript
.length
.toLocaleLowerCase()
.toLocaleUpperCase()
```
- Volvemos al caso Persona y generamos un mentodo que sea un constructor.
    - Como el metodo es un constructor tengo que ponerle *this* por que con *this* hago referencia a hago referencia que corresponde a persona.
```javascript
function Persona(nombre, edad, ciudad) {
    this.nombre = nombre;
    this.edad = edad;
    this.ciudad = ciudad;
    this.saludar = function () {
        console.log("Hola mi nombre es: " + this.nombre);
    }
}
const sofia = new Persona("Sofia", 24, "Buenos Aires");
sofia.saludar();
/*IMPRIME */ Hola mi nombre es: Sofia
```
- Entonces cuando "sofia" llama al metodo saludar va a hacer lo que le indique que haga dentro de su metodo, *(console.log("Hola mi nombre es: " + this.nombre);)*

## OPERADORES IN y FOR... IN

- Para imprimir el nombre en sofia veniamos haciendo:
```javascript
console.log(sofia.nombre);
```
- Otra forma de hacerlo es usando el iterador **in** me indica si existe la calve en el objeto.
```javascript
console.log("nombre" in sofia);
/*IMPRIME */ true
```
- Si hago "apellido" in sofia va a imprimir **false** por que no existe, no es uno de los atributos dentro de sofia.
```javascript
console.log("nombre" in sofia);
/*IMPRIME */ false
```
- Iterador **for in**:
- Usamos un ciclo **for** y por ejemplo definimos una constante (dato). Para cada "dato" dentro de sofia haga un console.log.
```javascript
for (const dato in sofia){
    console.log(sofia[dato])
}

/*IMPRIME */
Sofia
24
Buenos Aires
```
- De esta forma va a recorrer todo dentro del objeto **sofia** *(nombre, edad, ciduda)* y podemos acceder a todos sus atributos.

## CLASES
- Se escribe en Mayuscula y no lleva (), va con {}.
- Con las clases puedo defirnir un objeto.
- Para construir la clase hay que usar la palabra **constructor**.
    - Voy a construir una clase Vehiculos pero para eso tengo que construir un objeto a partir de esa clase.
    - Este constructor va a necesitar parámtros.
```javascript
class Vehiculo { /*DEFINIMOS LAS CLASE*/
    /* METODO CONSTRUCTOR*/ 
    constructor(tipo, marca, condicion, color){ /* INGRESAMOS LOS PARAMTROS*/
        this.tipo = tipo; /*DEFINE EL CONSTRUCTOR */
        this.marca = marca;
        this.condicion = condicion;
        this.color = color;
    }
}
```
- Ahora para construir un Vehiculo nuevo, tengo que hacer una instancia de la clase.
```javascript
const auto = new Vehiculo ("Auto","Nissan", "Usado", "Fucsia")
console.log (auto);

/* IMPRIME*/
Vehiculo {tipo: 'Auto', marca: 'Nissan', condicion: 'Usado', color: 'Fucsia'}
color: "Fucsia"
condicion: "Usado"
marca: "Nissan"
tipo: "Auto"
[[Prototype]]: Object
```
- Para crear un metodo no hace falta poner *function*.
```javascript
class Vehiculo {
    constructor(tipo, marca, condicion, color){
        this.tipo = tipo;
        this.marca = marca;
        this.condicion = condicion;
        this.color = color;
    }
    enciende(){ /* DEFINIMOS UN NUEVO METODO*/
        console.log("El vehiculo " + this.tipo + " esta encendido.");
    }
}
auto.enciende();
/* IMPRIME */ El vehiculo Auto esta encendido.
```
- Podemos agregar metodos propios de objetos dentro de un objeto.
```javascript
class Vehiculo {
    constructor(tipo, marca, condicion, color){
        this.tipo = tipo;
        this.marca = marca.toUpperCase();
        this.condicion = condicion;
        this.color = color;
    }
    enciende(){ /* DEFINIMOS UN NUEVO METODO*/
        console.log("El vehiculo " + this.tipo + " esta encendido.");
    }
}
/* IMPRIME en MAYUSCULA el valor de "marca"*/
Vehiculo {tipo: 'Auto', marca: 'NISSAN', condicion: 'Usado', color: 'Fucsia'}
```

- Agregamos todo junto para ver como es y como queda:
```javascript
class Producto {
    constructor(nombre, descripcion, categoria, precio, stock){
this.nombre = nombre;
this.descripcion = descripcion;
this.categoria = categoria;
this.precio = parseFloat(precio);
this.stock = parseInt(stock);
    }
    agregamosIva(){
        this.precio = this.precio *1.21;
    }
    vender() {
        console.log("El producto " + this.nombre + " fue vendido");
    }
}
const producto1 = new Producto("Azucar", "Azucar negra", "Almacen", 1000, 5);
console.log(producto1);
producto1.agregamosIva();
```

- Va a imprimir esto:
```javascript
Producto {nombre: 'Azucar', descripcion: 'Azucar negra', categoria: 'Almacen', precio: 1000, stock: 5}
categoria: "Almacen"
descripcion: "Azucar negra"
nombre: "Azucar"
precio: 1210
stock: 5
[[Prototype]]: Object
```
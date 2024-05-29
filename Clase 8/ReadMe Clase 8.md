# CLASE 8

## Funciones de Orden Superior II

### Objeto Math
- La M de Math siempre va con mayuscula por que es su sintaxis.
- Es un objeto que tiene sus propios objetos.
- Principalmente para hacer operaciones matematicas.
- De esta forma voy a tener un valor mas acertado de "PI" que poner 3.14
```javascript
const PI = Math.PI;
console.log(PI);
// 3.141592653589793
```
- También se puede usar para usar el numero de ¿EULER?
```javascript
const E = Math.E;
console.log(E);
// 2.718281828459045
```
- Me devuelve el valor maximo de una cadena de numeros.
```javascript
console.log(Math.max(12, 5, 89, 55, 7878, 1, - 21))
// 7878
```
- Me devuelve el valor minimo de una cadena de numeros.
```javascript
console.log(Math.min(12, 5, 89, 55, 7878, 1, -21))
// -21
```
- "Existe" el numero Infiniy o -Infiniy pero no se suele usar, es mejor usar numeros precisos.

### METODOS DE REDONDEO
- **ceil**
- Redondea el resultado para el numero mayor mas cercano.
```javascript
const PI = Math.PI;
console.log(Math.ceil(PI));
// 4
```
- **floor**
- Redondea el resultado para el numero menor mas cercano.
```javascript
const PI = Math.PI;
console.log(Math.floor(PI));
// 3
```
- **round**
- Redondea el resultado para el numero mas cercano sin diferenciar si es mayor o menor.
- Si es ,5 va a redondear para arriba siempre.
```javascript
const PI = Math.PI;
console.log(Math.round(PI));
// 3
```
- Para redondear con x cantidad de decimales:
const PI = Math.PI;
console.log(PI.toFixed(2));
3.14

**Random**
- Genera numeros aleatorios entre 0 y 1.
```javascript
console.log(Math.random());
```
- Para hacer numeros aleatorios que sean entre otros numeros hago así.
- Voy a hacer numeros entre 30 y 20.
```javascript
console.log(Math.random() * 20 + 10);
```
**Forma de generar numeros enteros random**
```javascript
console.log(Math.round(Math.random()*100))
```

**square Root** *raiz cuadrada*

```javascript
console.log(Math.sqrt(9));
// 3
```
```javascript
console.log(Math.sqrt(-81));
// NaN
```
**pow** *elevado o potencia*
- Cuando llamamos al metodo pide dos parametros.
- El primero es la base.
- El segundo es el exponente.
```javascript
console.log(Math.pow(9, 2));
// 81
```
```javascript
console.log(Math.pow(3, 4));
// 81
```
- Para saber la raiz de un numero con pow
```javascript
console.log(Math.pow(36, 1/2));
// 6
```
**Metodo abs**
- Busco el valor absoluto de de un valor negativo.
- Antes de la función Math pongo un **-** para que lo haga negativo.
- Para saber la raiz de un numero negativo con pow
```javascript
console.log(-Math.pow(Math.abs (-27, 1/3));
// 6
```
- Para saber el nuermo negativo por medio de una función que acepte numeros positivos y negativos.

### CLASE DATE
- Para poner la fecha y la hora de mi pais como tengo seteada la pc.
- Es una clase y por eso tiene metodo constructo. Si no pongo nada como constructor lo devuelve de esta forma.
```javascript
console.log(new Date());
// Tue May 28 2024 20:14:18 GMT-0300 (hora estándar de Argentina)
```
- Los parametros los toma de la siguiente forma:
    - Año
    - Mes *para el mes se pone uno menos del mes buscado, por ejemplo mayo es 4*
    - Día
    - Horas
    - Minutos
    - Segundos
```javascript
    console.log(new Date(2024, 4, 6));
    // Mon May 06 2024 00:00:00 GMT-0300 (hora estándar de Argentina)
```
- El constructor tambien permite palabras.
```javascript
console.log(new Date("December 24, 2024"));
// Tue Dec 24 2024 00:00:00 GMT-0300 (hora estándar de Argentina)
```
**VALOR SINGULAR**
- d
getMonth(); 
getFullYear();
getDay(); // el lunes es el 1

- Declaro constante al día de hoy.
```javascript
const HOY = new Date(2024, 4, 28);
console.log(HOY.getFullYear());
//2024
console.log(HOY.getMonth());
// 4 = Mayo
console.log(HOY.getDay());
// 2 = Martes.
```
```javascript
console.log(HOY.toDateString());
// Tue May 28 2024
```

```javascript
console.log(HOY.toTimeString());
// 00:00:00 GMT-0300 (hora estándar de Argentina)
```
```javascript
console.log(HOY.toLocaleString());
// 28/5/2024, 0:00:00
```
**Diferencia entre fechas**
- Defino constante de la fecha de hoy y de navidad.
```javascript
const HOY = new Date(2024, 4, 28);
const NAVIDAD = new Date (2025,11,24, 23,59,59)
```
```javascript
const DIFERENCIA = NAVIDAD - HOY;
console.log(DIFERENCIA);
// 49766399000
```
- Devulve en milisegundos.
- Para saber en fecha exacta tengo que hacer lo siguiente:
```javascript
const MILISEGUNDOS_DIA = 60 * 60 * 24 * 1000
console.log(MILISEGUNDOS_DIA);
const DIFERENCIA_EN_DIAS = (NAVIDAD - HOY)/MILISEGUNDOS_DIA)
```

**Calcular el tiempo de ejecucion de un programa**

```javascript
const INICIO = new Date();
for(let i=0; i< 1000; i++){
    console.log("Un programa ejecutandose.");
} 
const FINAL = new Date ();
console.log("El proceso tardó: " + (FINAL - INICIO) + " de milisegundos");
```
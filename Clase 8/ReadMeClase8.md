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
const gen = () => {
    return console.log(Math.round(Math.random()*100))
}
gen();
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

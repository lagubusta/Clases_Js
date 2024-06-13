# Clase 13

## Spread ...
- Sirve para "desparramar" todo el contenido del array y que lo use para algo.
- En este caso sacmos todo el contendio del array numeros para que me diga cual es el numero maximo.


```js
const numeros =[1,2,3,45,6,76,8,98];
console.log(Mat.max(numeros));
// imprime Nan
const numeros =[1,2,3,45,6,76,8,98];
console.log(Math.max(...numeros));
// imprime 98
```
- Necesito saber los valores que tiene dentro de este array:
```js
const persona1 = [ "Agustin", "Mateo", "Sofia"];
const personas2 = [ "Ines", "Carolina", "Ignacio"];
```
- Antes se podía hacer
```js
const persona1 = [ "Agustin", "Mateo", "Sofia"];
console.log(persona1[1]);
// imprime Mateo
```
- Ahora puedo usar los **...** para que "desparrame todo.
```js
console.log(...persona1);
//imprmie Agustin Mateo Sofia
```
- Ahora puedo juntar arrays.
```js
const todasPersonas = [ ...persona1, ...personas2];
console.log(todasPersonas);
//imprime
// (6) ['Agustin', 'Mateo', 'Sofia', 'Ines', 'Carolina', 'Ignacio']
```
- Si  a ese mismo console.log el sumo los **...** queda así.
```js
const todasPersonas = [ ...persona1, ...personas2];
console.log(...todasPersonas);
//imprime
// Agustin Mateo Sofia Ines Carolina Ignacio
```
---
### Spring de objetos
- ¿Que pasa si quiero meter un objeto dentro de otro objeto?
```js
const alumno = {
    nombre: "Agustin",
    edad: 30,
    nacionalidad: "Agentina",
    cursos: {
        desarrolloWeb: "aprobado",
        JavaScript: "En Curso",
    }
}
console.log(alumno);
const alumnoDePrueba = {
    ... alumno
}
console.log(alumnoDePrueba);
```
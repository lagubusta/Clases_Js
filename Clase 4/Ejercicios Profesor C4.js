// TODOS LOS EJERCICIOS ESTAN RESUELTOS
//-------------------------------------------------------------------------------------
// Funciones
//-------------- Variables Locales y Globales -------------I-
//-------------------------------------------------------------------------------------
// 1. Declara una variable global llamada mensaje y asígnale un mensaje.

// let mensaje = "Este es un mensaje para eje 1.C4";
//-------------------------------------------------------------------------------------
// 2. Crea una función llamada saludar que imprima en la consola el valor de la variable mensaje.

// function saludar(){
//     console.log(mensaje);
// }
//-------------------------------------------------------------------------------------
// 3. Llama a la función saludar para que imprima el mensaje.

// saludar();
//-------------------------------------------------------------------------------------
//-------------- Variables Locales y Globales -------------F-
//-------------------------------------------------------------------------------------
//-------------- Funciones -------------I-
//-------------------------------------------------------------------------------------
// 4. Crea una función llamada sumar que tome dos números como parámetros y devuelva la suma de ellos.

// let resultado;
// function sumar (p1, p2){
//     resultado = p1 + p2;
// }
// sumar(2, 3);
// console.log(resultado);
//-------------------------------------------------------------------------------------
// 5. Llama a la función sumar con dos números como argumentos e imprime el resultado en la consola.
//                           Descomentar ejercicio 4 para que funcione.

// sumar(15, 20);
// console.log(resultado);
//-------------------------------------------------------------------------------------
//-------------- Funciones -------------F-
//-------------------------------------------------------------------------------------
//-------------- Funciones con Parámetros -------------I-
//-------------------------------------------------------------------------------------
// 6. Crea una función llamada multiplicar que tome tres números como parámetros y devuelva el resultado de multiplicarlos.

// let resultado;
// function multiplicar( nr1, nr2, nr3){
//     resultado = nr1 * nr2 * nr3;
// }
// multiplicar(2,2,2);
// console.log(resultado);
//-------------------------------------------------------------------------------------
// 7. Llama a la función multiplicar con tres números como argumentos e imprime el resultado en la consola.
//                           Descomentar ejercicio 6 para que funcione.
// multiplicar(8,-4,1);
// console.log(resultado);
//-------------------------------------------------------------------------------------
//-------------- Funciones con Parámetros -------------F-
//-------------------------------------------------------------------------------------
//-------------- Funciones Anónimas -------------I-
//-------------------------------------------------------------------------------------
// 8. Declara una variable llamada cuadrado y asígnale una función anónima que tome un número como parámetro y devuelva el cuadrado de ese número.

// let resultado;
// function cuadrado (nr1){
//     resultado = nr1*nr1; 
// }
// cuadrado(36);
// console.log(resultado);
//-------------------------------------------------------------------------------------
// 9. Utiliza la función anónima almacenada en la variable cuadrado para calcular el cuadrado de un número e imprime el resultado en la consola.
//                           Descomentar ejercicio 8 para que funcione.
// cuadrado(22);
// console.log(resultado);
//-------------------------------------------------------------------------------------
//-------------- Funciones Anónimas -------------F-
//-------------------------------------------------------------------------------------
//-------------- Funciones Flecha -------------I-
//-------------------------------------------------------------------------------------
// 10. Declara una variable llamada esPar y asígnale una función flecha que tome un número como parámetro y devuelva true si es par y false si es impar.
// const esPar = (a) => {
//     return a % 2 === 0;
// }
// console.log(esPar(35));
//-------------------------------------------------------------------------------------
// 11. Utiliza la función flecha almacenada en la variable esPar para determinar si un número ingresado por el usuario es par o impar e imprime el resultado en la consola.
//                           Descomentar ejercicio 10 para que funcione.
// let nro = esPar(prompt("Ingresa un numero para ver si es par: "));
// console.log(nro);
//-------------------------------------------------------------------------------------
//-------------- Funciones Flecha -------------F-
//-------------------------------------------------------------------------------------
//-------------- Variables Locales y Globales -------------I-
//-------------------------------------------------------------------------------------
// 12. Dentro de una función, declara una variable local llamada contador y asígnale un valor.
// function xx() {
//     let contardor = 5;
// }
//-------------------------------------------------------------------------------------
// 13.Intenta acceder a la variable contador desde fuera de la función y observa el resultado.
//                           Descomentar ejercicio 10 para que "funcione".
// console.log(contardor); 
// no devuelve resultado por que la variable contador es local, esta dentro de la función. Cuando hago el console.log() imprime "contardor is not defined."
//-------------------------------------------------------------------------------------
//-------------- Variables Locales y Globales -------------F-
//-------------------------------------------------------------------------------------
//-------------- Funciones -------------I-
//-------------------------------------------------------------------------------------
// 14. Crea una función llamada saludarNombre que tome un nombre como parámetro y devuelva un mensaje de saludo con ese nombre.

// function saludarNombre(nombre) {
//     return "Hola, " + nombre + " ¿Cómo estás? "
// }
//-------------------------------------------------------------------------------------
// 15. Llama a la función saludarNombre con tu nombre como argumento e imprime el mensaje en la consola.
//                           Descomentar ejercicio 14 para que funcione.
// console.log(saludarNombre("Juan"));
//-------------- Funciones -------------F-
//-------------------------------------------------------------------------------------
//-------------- Funciones con Parámetros -------------I-
//-------------------------------------------------------------------------------------
// 16.Crea una función llamada calcularAreaRectangulo que tome dos parámetros (base y altura) y devuelva el área del rectángulo.

// function calcularAreaRectangulo (base, altura){
//     return base * altura;
// }
// console.log(calcularAreaRectangulo(2,3));
//-------------------------------------------------------------------------------------
// 17. Llama a la función calcularAreaRectangulo con valores de base y altura proporcionados por el usuario e imprime el resultado en la consola
//                           Descomentar ejercicio 16 para que funcione.

// let base = parseInt(prompt("Ingresa la base: "));
// let altura = parseInt(prompt("Ingresa la altura: "));
// console.log(calcularAreaRectangulo(base,altura));
//-------------------------------------------------------------------------------------
//-------------- Funciones con Parámetros -------------F-
//-------------------------------------------------------------------------------------
//-------------- Funciones Anónimas -------------I-
//-------------------------------------------------------------------------------------
// 18. Crea una función anónima que tome dos números como parámetros y devuelva el mayor de los dos.
// function anonima18(nro1, nro2) {
//     if (nro1 > nro2) {
//         console.log("El primer numero ingresado: " + nro1 + " es mayor que el segundo ingresado " + nro2);
//     } else console.log("El segundo numero ingresado: " + nro2 + "  es mayor que el primero ingresado: " + nro1);
// }
// anonima18(25,5);
//-------------------------------------------------------------------------------------
// 19. Utiliza la función anónima creada para determinar el número más grande de dos números ingresados por el usuario e imprime el resultado en la consola.
//                           Descomentar ejercicio 18 para que funcione.
// let nr1 = parseInt(prompt("Eje19C4: Ingresa el primer numero: "));
// let nr2 = parseInt(prompt("Eje19C4: Ingresa el primer numero: "));
// anonima18(nr1, nr2);
//-------------------------------------------------------------------------------------
//-------------- Funciones Anónimas -------------F-
//-------------------------------------------------------------------------------------
//-------------- Funciones Flecha -------------I-
//-------------------------------------------------------------------------------------
// 20. Declara una variable llamada doble y asígnale una función flecha que tome un número como parámetro y devuelva el doble de ese número.

// let doble = (n1) => {
//     return n1*2;
// }
//-------------------------------------------------------------------------------------
// 21. Llama a la función flecha almacenada en la variable doble para calcular el doble de un número e imprime el resultado en la consola.
//                           Descomentar ejercicio 20 para que funcione.
// console.log(doble(100));
//-------------------------------------------------------------------------------------
//-------------- Funciones Flecha -------------F-
//-------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------
//-------------- Ejercicios Básicos de JavaScript para Cálculos Geométricos -------------I-
//-------------------------------------------------------------------------------------
// Cálculo del Área de un Triángulo
// 22. Crea una función llamada areaTriangulo que tome la base y la altura de un triángulo como parámetros y devuelva el área del triángulo.

// function areaTriangulo(base, altura) {
//     return 0.5 * base * altura;
// }

//-------------------------------------------------------------------------------------
// 23. Llama a la función areaTriangulo con valores de base y altura proporcionados por el usuario e imprime el resultado en la consola.
//                           Descomentar ejercicio 22 para que funcione.

// let base = parseInt(prompt("Eje23C4: Ingresa la base: "));
// let altura = parseInt(prompt("Eje23C4: Ingresa la altura: "));
// let area = areaTriangulo(base, altura);
// console.log(area);
//-------------------------------------------------------------------------------------
//-------------- Ejercicios Básicos de JavaScript para Cálculos Geométricos -------------F-
//-------------------------------------------------------------------------------------
//-------------- Cálculo del Perímetro de un Cuadrado -------------I-
//-------------------------------------------------------------------------------------
// 24. Crea una función llamada perimetroCuadrado que tome el lado de un cuadrado como parámetro y devuelva el perímetro del cuadrado.

// function perimetroCuadrado(lado) {
//     return 4 * lado;
// }
//-------------------------------------------------------------------------------------
// 25. Llama a la función perimetroCuadrado con el valor del lado proporcionado por el usuario e imprime el resultado en la consola.
//                           Descomentar ejercicio 24 para que funcione.

// let ingresarLado = parseFloat(prompt("Ingresa la logitud de cualquier lado del cuadrado:"));
// let perimetro = perimetroCuadrado(ingresarLado);
// console.log("Perimetro cuadrado es " + perimetro);
//-------------------------------------------------------------------------------------
//-------------- Cálculo del Perímetro de un Cuadrado -------------F-
//-------------------------------------------------------------------------------------
//-------------- Cálculo del Área de un Círculo -------------I-
//-------------------------------------------------------------------------------------
// 26. Crea una función llamada areaCirculo que tome el radio de un círculo como parámetro y devuelva el área del círculo.

// function areaCirculo (radio) {
//     return Math.PI * radio * radio;
// }
//-------------------------------------------------------------------------------------
// 27. Llama a la función areaCirculo con el valor del radio proporcionado por el usuario e imprime el resultado en la consola.
//                           Descomentar ejercicio 26 para que funcione.
// let ingRadio = parseInt(prompt("Eje26C4: Ingresa radio: "));
// let area = areaCirculo(ingRadio);
// console.log(area);
//-------------------------------------------------------------------------------------
//-------------- Cálculo del Área de un Círculo -------------F-
//-------------------------------------------------------------------------------------
//-------------- Cálculo del Perímetro de un Rectángulo -------------I-
//-------------------------------------------------------------------------------------
// 28. Crea una función llamada perimetroRectangulo que tome la longitud y la anchura de un rectángulo como parámetros y devuelva el perímetro del rectángulo.
// function perimetroRectangulo (longitud, anchura){
//     return 2 * longitud * anchura;
// }

//-------------------------------------------------------------------------------------
// 29. Llama a la función perimetroRectangulo con valores de longitud y anchura proporcionados por el usuario e imprime el resultado en la consola.
//                           Descomentar ejercicio 28 para que funcione.
// let longitud = parseInt(prompt("Eje29C4: Ingresa longitud : "));
// let anchura = parseInt(prompt("Eje29C4: Ingresa anchura : "));
// let resultado =perimetroRectangulo(longitud, anchura);
// console.log(resultado);
//-------------- Cálculo del Perímetro de un Rectángulo -------------F-
//-------------------------------------------------------------------------------------
//-------------- Cálculo del Área de un Trapecio -------------I-
//-------------------------------------------------------------------------------------
// 30. Crea una función llamada areaTrapecio que tome las bases y la altura de un trapecio como parámetros y devuelva el área del trapecio.
// function areaTrapecio(baseMayor, baseMenor, altura) {
//     return ((baseMayor + baseMenor) / 2) * altura;
// }
//-------------------------------------------------------------------------------------
// 31. Llama a la función areaTrapecio con valores de las bases y la altura proporcionados por el usuario e imprime el resultado en la consola.
// let baseMayor = parseFloat(prompt("Ingresa la longitud de la base mayor del trapecio:"));
// let baseMenor = parseFloat(prompt("Ingresa la longitud de la base menor del trapecio:"));
// let altura = parseFloat(prompt("Ingresa la altura del trapecio:"));

// let area = areaTrapecio(baseMayor, baseMenor, altura);
// console.log("El área del trapecio es: " + area);
//-------------- Cálculo del Área de un Trapecio -------------F-
//-------------------------------------------------------------------------------------

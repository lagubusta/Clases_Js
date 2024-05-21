// ----------------------ACTIVIDAD 1
// Codificar tres funciones:
// A- Una función entrada(), la cual solicite un valor al usuario y lo retorne.
// B- Una función procesamiento(valor), donde se transforme la entrada.
// C- Una función salida(valor), la cual mostrará el resultado por alerta.
// D- Luego, invocar las tres funciones.

// A-
// function entrada () {
//     return prompt("Ingresa un valor");
// }
// B-
// function procesamiento (valor){
//     return("La entrada es " + valor);
// }
//C-
// function salida(valor){
//     alert(valor);
// }
// D-
// salida(procesamiento(entrada()));


// ----------------------ACTIVIDAD 2

// A- Codificar una función que reciba un número decimal por parámetro, y lo retorne redondeado al entero más cercano. Para ello, puede emplearse  Math.round.

// B- Luego invocar la función de forma iterativa cinco (5) veces, solicitando en cada ciclo un número al usuario.

// function redondear(valor){
//     return Math.round(valor);
// }
// for (let i = 0; i<5; i++){
//     let entrada =prompt("Ingresa Numero");
//     alert(Math.round(entrada));
// }

// ----------------------ACTIVIDAD 3

// A- Codificar una función con la siguiente cabecera: impuesto (precio, porcentaje). En ella, se retorna un valor numérico compuesto por el precio recibido, más la suma del porcentaje ingresado.
// B- Luego invocar la función de forma iterativa cinco (5) veces, solicitando en cada ciclo un precio y porcentaje al usuario.

// function impuesto (precio, porcentaje){
//     return precio + ((precio * porcentaje)/100)
// }
// for ( let i = 0; i < 5; i++){
//     let resultado = impuesto(parseFloat(prompt("Ingresar precio")), parseFloat(prompt("Igresar %")));
// alert(resultado);
// }

// ----------------------ACTIVIDAD 3

// Codificar dos funciones:
// A- Una función cotizarDolar(pesos), la cual recibe un valor monetario en pesos argentinos, y lo retorna en su equivalente en dólares.
// function cotizarDolar (){
//     return
// }

// B- Una función cotizarPesos(dolar), que recibe un valor monetario en dólares, y lo retorna en su equivalente en pesos argentinos.

// C- Luego invocar las funciones solicitando  al usuario el valor y el tipo de cotización a realizar.

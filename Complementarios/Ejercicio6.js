// ----------------------ACTIVIDAD 1

// Declarar un array de cadenas, compuesto por  los cuatro (4) nombres pertenecientes a los integrantes de un equipo.
// Luego recorrer el array, e informar por alerta el nombre de cada jugador, así como la posición  que ocupa en la colección.

// const nombresEquipo = ["Agustin", "Santiago", "Lagu", "Chano"];

// for (let i = 0 ; i < nombresEquipo.length; i++){
//     alert("El nombre " +nombresEquipo[i] +" esta en la posición " + i);
// }

// ----------------------ACTIVIDAD 2
// Declarar un array vacío, y cargarlo de forma dinámica solicitando al usuario nombres de forma consecutiva,  hasta que se ingrese “ESC”.
// Luego recorrer el array, e informar por alerta el nombre de cada jugador, así como la posición  que ocupa en la colección.

// let entrada = prompt("Ingresa Jugador");

// const equipo = [];
// while(entrada != "ESC"){
//     equipo.push (entrada);
//     entrada = prompt("Ingresa Jugador");
// }
// for (let i = 0; i< equipo.length; i++){
//     console.log("Posición " + i + " Jugardor " + equipo[i]);
// }

// ----------------------ACTIVIDAD 2
// Declarar una clase Jugador que permita registrar nombre, número de camiseta, edad, y si está lesionado. Luego instanciar al menos cinco (5) objetos usando esta clase, y asociarlos a un array.

const jugadores = [];

class Jugador {
    constructor(nombre, numeroDeCamiseta, edad, lesionado) {
        this.nombre = nombre;
        this.numeroDeCamiseta = numeroDeCamiseta;
        this.edad = parseInt(edad);
        this.lesionado = lesionado || false;
    }
    // esto es un metodo propio de la clase.
    estadoLesionado() {
        this.lesionado = true;
        console.log("El jugador " + this.nombre + " está lesionado");
    }
}

function crearJugador() {
    const nombre = prompt("Ingresa nombre del jugador");
    const numeroDeCamiseta = parseInt(prompt("Ingresa el numero del jugador"));
    const edad = parseInt(prompt("Ingresa la edad del Jugador"));

    return new Jugador(nombre, numeroDeCamiseta,edad);
}
for (let i = 0; i < 3; i++){
    // por cada instacia crea un nuevo jugador y hago un push del mismo
    const nuevoJugador = crearJugador();
    jugadores.push(nuevoJugador);
}


    // const jugador1 = new Jugador("Agustin", 10, 20);
    // const jugador2 = new Jugador("Alejandro", 9, 48);
    // const jugador3 = new Jugador("Sara", 7, 25);
    // const jugador4 = new Jugador("Tomas", 6, 22);
    // const jugador5 = new Jugador("Emiliano", 4, 26);

    // jugadores.push(jugador1);
    // jugadores.push(jugador2);
    // jugadores.push(jugador3);
    // jugadores.push(jugador4);
    // jugadores.push(jugador5);



    console.log(jugadores);
jugador1.estadoLesionado();
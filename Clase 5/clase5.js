class Vehiculo {
    constructor(tipo, marca, condicion, color){
        this.tipo = tipo;
        this.marca = marca;
        this.condicion = condicion;
        this.color = color;
    }
}
const auto = new Vehiculo ("Auto","Nissan", "Usado", "Fucsia")
console.log (auto);






//------------------------------ Ejercicios Avanzados de JavaScript con Objetos y Clases------------------------------

//-----------------------------------Objetos y Obtener Valores

// 1- Crea un objeto llamado persona con las propiedades nombre, edad y ciudad. Imprime en la consola el nombre de la persona.
//-I----------------forma 1.1
// Se completa aplicando una por una cada variable.

// let nombre ="Agustin";
// let edad = 31;
// let ciudad = "Bs As"

// console.log(nombre);
// IMPRIME: el valor que le haya puesto a nombre.

//---F----------------forma 1.1
//-I----------------forma 1.2
// Se crea una constante para persona.
// Uso key (sería nombre)
// :
// value, ("Agustin") MUCHO MUY IMPORTANTE SE DIVIDEN CON ","
// const persona = {
//     nombre: "Agustin",
//     edad: 31,
//     ciudad: "Bs As",
// };
// console.log(persona.nombre);
// -F----------------forma 1.2

// 2- Agrega una propiedad telefono al objeto persona y asigna un número de teléfono. Luego, imprime en la consola el teléfono.

// -I----------------forma 2.1
//usando la key . "nuevo value" puedo agregar una nueva key
// persona.telefeno = 156493;
// Esta nueva key y su valor se "agregan" a las propiedades ya creadas
// console.log(persona.telefeno);
// console.log(persona);
// -F----------------forma 2.1

// 3- Crea un objeto llamado coche con las propiedades marca, modelo y año. Imprime en la consola el modelo del coche.

// -I----------------forma 3.1
// const coche = {
//     marca: "Audio",
//     modelo: "TT",
//     anio: 2024,
// }
// console.log (coche.modelo);
// -F----------------forma 3.1

// 4- Agrega una propiedad color al objeto coche y asigna un color. Luego, imprime en la consola el color.

// -I----------------forma 4.1
// coche.color = "Blanco";
// console.log (coche.color);
// -F----------------forma 4.1

//-----------------------------------Objetos Constructores y Constructor y New

// 5- Crea un constructor llamado Producto con las propiedades nombre, precio y cantidad. Crea un objeto nuevo utilizando este constructor.

// De esta manera creo un nuevo "constructor".
// Pongo "function" + "key" + ("el nombre que va a llevar cada value") {
// Dentro de las llave pongo this. + ("el nombre que va a llevar cada value") = ("el nombre que va a llevar cada value")

// esto va a hacer que cada vez que sllame a Producto.nombre me muestre la asignación que le di.
//}

// function Producto(nombre, precio, cantidad) {
//     this.nombre = nombre;
//     this.precio = precio;
//     this.cantidad = cantidad;
// }
// console.log(Producto);

// const Leche = new Producto("Leche", 1500, 10,)
// console.log(Leche);

// 6- Crea un constructor llamado Persona con las propiedades nombre, edad y ciudad. Crea un objeto nuevo utilizando este constructor.
// function Persona(nombre, edad, ciudad) {
//     this.nombre = nombre;
//     this.edad = edad;
//     this.ciudad = ciudad;
// }

// console.log(Persona);
// const Agustin = new Persona("Agustin", 30, "Buenos Aires");
// console.log(Agustin);
// const sofia = new Persona("Sofia", 24, "Buenos Aires");
// console.log(Sofia);

// // 7- Crea un constructor llamado Libro con las propiedades titulo, autor y año. Crea un objeto nuevo utilizando este constructor.
// function Libro(titulo, autor, año) {
//     this.titulo = titulo;
//     this.autor = autor;
//     this.año = año;
// }
// console.log(Libro);
// const HarryPotter = new Libro("HP la pierda", "JK", 2001);
// console.log(HarryPotter);

//-----------------------------------USO DE THIS
// 8- Crea un objeto llamado rectangulo con las propiedades base y altura. Agrega un método llamado calcularArea que calcule y devuelva el área del rectángulo.
// function Rectangulo(base, altura) {
//     this.base = base;
//     this.altura = altura;

//     this.calcularArea = function () {
//         return this.base * this.altura
//     };
// }
// const rectangulo = new Rectangulo(5, 10);
// console.log(rectangulo.calcularArea());

// 9- Crea un objeto llamado circulo con la propiedad radio. Agrega un método llamado calcularPerimetro que calcule y devuelva el perímetro del círculo.
// function Circulo(radio) {
//     this.radio = radio;

//     this.calcularPerimetro = function () {
//         return 2* Math.PI * this.radio;
//     };
// }
// const circulo = new Circulo (5);
// console.log(circulo.calcularPerimetro());

// 10- Crea un objeto llamado estudiante con las propiedades nombre, edad y curso. Agrega un método llamado presentarse que imprima en la consola una presentación del estudiante.

// function Estudiante (nombre, edad, curso){
//     this.nombre = nombre;
//     this.edad = edad;
//     this.curso = curso;

//     this.presentarse = function () {
//         console.log ("")
//     }
// }
// const estudiante = new Estudiante ("Alejandro", 35, "1 A");
// console.log (Estudiante.Alejandro);

//-----------------------------------Métodos y Operaciones con Objetos

// 11- Crea un objeto llamado cuentaBancaria con las propiedades saldo y titular. Agrega un método llamado depositar que reciba un monto y lo sume al saldo.
// function CuentaBancaria(titular, saldo){
//     this.titular = titular;
//     this.saldo = saldo;   
    
//     this.depositar = function (monto){
//         this.saldo += monto;
//     }
// }
// const cuenta = new CuentaBancaria ("Agustin", 1000);
// cuenta.depositar(500);
// console.log(`Nuevo Saldo: ${cuenta.saldo}`);


// 12- Agrega un método llamado retirar al objeto cuentaBancaria que reciba un monto y lo reste al saldo.


// 13- Crea un objeto llamado agenda que contenga un array de contactos. Agrega un método llamado agregarContacto que reciba un objeto de contacto y lo añada al array.
// 14- Agrega un método llamado buscarContacto al objeto agenda que reciba el nombre de un contacto y devuelva el objeto correspondiente.
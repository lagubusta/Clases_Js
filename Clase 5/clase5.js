//---------------------- Objetos Constructores y Constructor y New----------------------

//---------------------- Crea un constructor llamado Producto con las propiedades nombre, precio y cantidad. Crea un objeto nuevo utilizando este constructor.

function Producto(nombre, precio, cantidad) {
    this.nombre = nombre;
    this.precio = precio;
    this.cantidad = cantidad;
}
console.log(Producto);

const Leche = new Producto("Leche", 1500, 10,)
console.log(Leche);

// Crea un constructor llamado Persona con las propiedades nombre, edad y ciudad. Crea un objeto nuevo utilizando este constructor.
function Persona(nombre, edad, ciudad,) {
    this.nombre = nombre;
    this.edad = edad;
    this.ciudad = ciudad;
}
console.log(Persona);
const Agustin = new Persona("Agustin", 30, "Buenos Aires");
console.log(Agustin);
const Sofia = new Persona("Sofia", 24, "Buenos Aires");
console.log(Sofia);

//----------------------Crea un constructor llamado Libro con las propiedades titulo, autor y año. Crea un objeto nuevo utilizando este constructor.
function Libro(titulo, autor, año) {
    this.titulo = titulo;
    this.autor = autor;
    this.año = año;
}
console.log(Libro);
const HarryPotter = new Libro("HP la pierda", "JK", 2001);
console.log(HarryPotter);

//----------------------USO DE THIS ----------------------
//----------------------Crea un objeto llamado rectangulo con las propiedades base y altura. Agrega un método llamado calcularArea que calcule y devuelva el área del rectángulo.
function Rectangulo(base, altura) {
    this.base = base;
    this.altura = altura;

    this.calcularArea = function () {
        return this.base * this.altura
    };
}
const rectangulo = new Rectangulo(5, 10);
console.log(rectangulo.calcularArea());

//----------------------Crea un objeto llamado circulo con la propiedad radio. Agrega un método llamado calcularPerimetro que calcule y devuelva el perímetro del círculo.
function Circulo(radio) {
    this.radio = radio;

    this.calcularPerimetro = function () {
        return 2* Math.PI * this.radio;
    };
}
const circulo = new Circulo (5);
console.log(circulo.calcularPerimetro());

//----------------------Crea un objeto llamado estudiante con las propiedades nombre, edad y curso. Agrega un método llamado presentarse que imprima en la consola una presentación del estudiante.

function Estudiante (nombre, edad, curso){
    this.nombre = nombre;
    this.edad = edad;
    this.curso = curso;

    this.presentarse = function () {
        console.log ("")
    }
}
const estudiante = new Estudiante ("Alejandro", 35, "1 A");
console.log (Estudiante.Alejandro);

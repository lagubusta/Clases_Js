// TODOS LOS EJERCICIOS ESTAN RESUELTOS
//-------------------------------------------------------------------------------------
//-------------- Objetos y Clases -------------I-
//-------------------------------------------------------------------------------------
// 1- Crea un objeto llamado persona con las propiedades nombre, edad y ciudad. Imprime en la consola el nombre de la persona.
// const persona = {
//     nombre: "Agustín",
//     edad: 31,
//     colorDeOjos: "Verdes"
// }
// console.log("El nombre de la persona es: " + persona.nombre);

//-------------------------------------------------------------------------------------
// 2. Agrega una propiedad telefono al objeto persona y asigna un número de teléfono. Luego, imprime en la consola el teléfono.
//                           Descomentar ejercicio 1 para que funcione.
// persona.telefono = "1561656611";
// console.log(persona);

//-------------------------------------------------------------------------------------
// 3. Crea un objeto llamado coche con las propiedades marca, modelo y año. Imprime en la consola el modelo del coche.
const coche = {
    marca: "Audi",
    modelo: "A3",
    anio: 2017,
}
//-------------------------------------------------------------------------------------
// 4 .Agrega una propiedad color al objeto coche y asigna un color. Luego, imprime en la consola el color.
//                           Descomentar ejercicio 3 para que funcione.

// let = coche.color = "Blanco";
// console.log("El color del auto es " + coche.color);
//-------------------------------------------------------------------------------------
//-------------- Objetos y Clases -------------F-
//-------------------------------------------------------------------------------------
//-------------- Objetos Constructores y Constructor y New -------------I-
//-------------------------------------------------------------------------------------
// 5. Crea un constructor llamado Producto con las propiedades nombre, precio y cantidad. Crea un objeto nuevo utilizando este constructor.

// function Producto (nombre, precio, cantidad) {
// this.nombre = nombre;
// this.precio = precio;
// this.cantidad = cantidad;
// }
// Producto =  new Producto ("Leche", 1500, 6);
// console.log(Producto);
//-------------------------------------------------------------------------------------
// 6. Crea un constructor llamado Persona con las propiedades nombre, edad y ciudad. Crea un objeto nuevo utilizando este constructor.

// function Persona(nombre, edad, ciudad) {
//     this.nombre = nombre;
//     this.edad = edad;
//     this.ciudad = ciudad;
// }
// Persona = new Persona("Sofia", 24, "Buenos Aires");
// console.log(Persona);
//-------------------------------------------------------------------------------------
// 7. Crea un constructor llamado Libro con las propiedades titulo, autor y año. Crea un objeto nuevo utilizando este constructor.
// function Libro (titulo, autor, anio){
//     this.titulo = titulo;
//     this.autor = autor;
//     this.anio = anio;
// }
// Libro = new Libro("Harry Potter 1", "J.K.R.", 2001);
// console.log(Libro);
//-------------------------------------------------------------------------------------
//-------------- Objetos Constructores y Constructor y New -------------F-
//-------------------------------------------------------------------------------------
//-------------- Uso de THIS -------------I-
//-------------------------------------------------------------------------------------
// 8. Crea un objeto llamado rectangulo con las propiedades base y altura. Agrega un método llamado calcularArea que calcule y devuelva el área del rectángulo.
const rectangulo = {
    base: prompt("Base: "),
    altura: prompt("Altura"),
    calcularArea: function () {
        return this.base * this.altura
    }
};
const areaRectangulo = rectangulo.calcularArea();
console.log(areaRectangulo);

//-------------- Uso de THIS -------------F-
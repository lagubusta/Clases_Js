// PENDIENTES DE HACER: 11, 12, 13, 14, 25
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
// const coche = {
//     marca: "Audi",
//     modelo: "A3",
//     anio: 2017,
// }
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

// const rectangulo = {
//     base: prompt("Base: "),
//     altura: prompt("Altura"),
//     calcularArea: function () {
//         return this.base * this.altura
//     }
// };
// const areaRectangulo = rectangulo.calcularArea();
// console.log(areaRectangulo);
//-------------------------------------------------------------------------------------
// 9. Crea un objeto llamado circulo con la propiedad radio.
// Agrega un método llamado calcularPerimetro que calcule y devuelva el perímetro del círculo.
// const circulo = {
//     radio: prompt("Radio: "),
//     calcularPerimetro: function(){
//         return 2 * this.radio * Math.PI;
//     }
// }
// const perimetroCirculo = circulo.calcularPerimetro();
// console.log(perimetroCirculo);

//-------------------------------------------------------------------------------------
// 10. Crea un objeto llamado estudiante con las propiedades nombre, edad y curso.
// Agrega un método llamado presentarse que imprima en la consola una presentación del estudiante.

// const estudiante = {
//     nombre: "Agustín",
//     edad: 30,
//     curso: "JavaScript comisión 57705",
//     presentarse: function (){
//         return console.log("Hola mi nombre es " + this.nombre + " tengo " + this.edad + " estoy cursonado " + this.curso);
//     }
// }
// estudiante.presentarse();

//-------------------------------------------------------------------------------------
//-------------- Uso de THIS -------------F-
//-------------------------------------------------------------------------------------
//-------------- Métodos y Operaciones con Objetos -------------I-
//-------------------------------------------------------------------------------------
// 11. Crea un objeto llamado cuentaBancaria con las propiedades saldo y titular. Agrega un método llamado depositar que reciba un monto y lo sume al saldo.
//-------------------------------------------------------------------------------------
// 12. Agrega un método llamado retirar al objeto cuentaBancaria que reciba un monto y lo reste al saldo.
//                           Descomentar ejercicio 11 para que funcione.
//-------------------------------------------------------------------------------------
// 13. Crea un objeto llamado agenda que contenga un array de contactos. Agrega un método llamado agregarContacto que reciba un objeto de contacto y lo añada al array.
//                           Descomentar ejercicio 11 y 12  para que funcione.
//-------------------------------------------------------------------------------------
// 14. Agrega un método llamado buscarContacto al objeto agenda que reciba el nombre de un contacto y devuelva el objeto correspondiente.
//-------------------------------------------------------------------------------------
//-------------- Métodos y Operaciones con Objetos -------------F-
//-------------------------------------------------------------------------------------
//-------------- Operador IN y FOR...IN -------------I-
//-------------------------------------------------------------------------------------
// 15.Crea un objeto llamado frutas con las propiedades manzana, pera y naranja.
// Utiliza el operador in para verificar si la propiedad manzana existe en el objeto.

// const frutas = {
//     manzana: "manzana, roja",
//     pera: "pera, verde",
//     naranja: "naranja, naranja",
// };
// if ( "manzana" in frutas){
//     console.log("Existe manzana dentro del frutas.");
// } else {
//     console.log("No existe manzana dentro del frutas.");
// }
//-------------------------------------------------------------------------------------
// 16. Utiliza un bucle for...in para iterar sobre las propiedades del objeto frutas e imprime en la consola el nombre de cada fruta.
//                           Descomentar ejercicio 15 para que funcione.
// for (const info in frutas){
//     console.log(frutas[info]);
// }
//-------------------------------------------------------------------------------------
//-------------- Operador IN y FOR...IN -------------F-
//-------------------------------------------------------------------------------------
//-------------- Clases y Métodos -------------I-
//-------------------------------------------------------------------------------------
// 17. Crea una clase llamada Rectangulo con las propiedades base y altura.
// Agrega un método llamado calcularArea que calcule y devuelva el área del rectángulo.

// class Rectangulo {
//     constructor(base, altura){
//         this.base = parseFloat(prompt("Ingresar BASE: "));
//         this.altura = parseFloat(prompt("Ingresar ALTURA: "));
//     }
//     calcularArea(){
//         return this.base * this.altura 
//     }
// }
// const nuevaInfo = new Rectangulo(2,3);
// const areaRectangulo = nuevaInfo.calcularArea();
// console.log(areaRectangulo);

//-------------------------------------------------------------------------------------
// 18. Crea una clase llamada Circulo con la propiedad radio. Agrega un método llamado calcularPerimetro que calcule y devuelva el perímetro del círculo.

// class Circulo {
//     constructor (radio){
//         this.radio = radio;
//     }
//     calcularPerimetro() {
//         return Math.PI * this.radio * this.radio;
//     }
// }
// const nuevoRadio = new Circulo(prompt("RADIO: "));
// const perimitroFinal = nuevoRadio.calcularPerimetro();
// console.log(perimitroFinal);

//-------------------------------------------------------------------------------------
// 19. Crea una clase llamada Empleado con las propiedades nombre, edad y cargo. Agrega un método llamado promocionar que actualice el cargo del empleado.

// class Empleado {
//     constructor(nombre, edad, cargo) {
//         this.nombre = nombre;
//         this.edad = edad;
//         this.cargo = cargo;
//     }
//     promocionar() {
//         this.cargo = prompt("Ahora " +this.nombre + " tiene el cargo de " + this.cargo + " ¿Qué cargo va tener ahora?");
//     }
// }
// const ingrsarNuevoEmpleado = new Empleado("Agustin", 30, "Gerente");
// console.log(ingrsarNuevoEmpleado);
// ingrsarNuevoEmpleado.promocionar();
// console.log(ingrsarNuevoEmpleado);

//-------------------------------------------------------------------------------------
//-------------- Clases y Métodos -------------F-
//-------------------------------------------------------------------------------------
//-------------- Constructor y New -------------I-
//-------------------------------------------------------------------------------------
// 20. Crea una clase llamada Producto con las propiedades nombre, precio y cantidad. Crea un objeto nuevo utilizando el operador new y la clase Producto.

// class Producto {
//     constructor (nombre, precio, cantidad){
//         this.nombre = nombre;
//         this.precio = precio;
//         this.cantidad = cantidad;
//     }
// }
// const Producto1 = new Producto ("Leche", 100, 5);
// const Producto2 = new Producto ("mate", 30, 2000);
// console.log(Producto1);
// console.log(Producto2);
//-------------------------------------------------------------------------------------
// 21. Crea una clase llamada Estudiante con las propiedades nombre, edad y curso. Crea un objeto nuevo utilizando el operador new y la clase Estudiante.

// class Estudiante {
//     constructor (nombre, edad, curso){
//         this.nombre = nombre;
//         this.edad = edad;
//         this.curso = curso;
//     }
// }
// const Estudiante1 = new Estudiante ("Agustín", 30, "JavaSript 57705");
// const Estudiante2 = new Estudiante ("Sofía", 24, "Martiller");
// console.log(Estudiante1);
// console.log(Estudiante2);

//-------------------------------------------------------------------------------------
// 22. Crea una clase llamada Libro con las propiedades titulo, autor y año. Crea un objeto nuevo utilizando el operador new y la clase Libro.

// class Libro {
//     constructor(titulo, autor, anio) {
//         this.titulo = titulo;
//         this.autor = autor;
//         this.anio = anio;
//     }
// }
// Libro = new Libro("Harry Potter 1", "J.K.R.", 2001);
// console.log(Libro);
//-------------------------------------------------------------------------------------
//-------------- Constructor y New -------------F-
//-------------------------------------------------------------------------------------
//-------------- Métodos y Operaciones con Objetos -------------I-
//-------------------------------------------------------------------------------------
// 23. Agrega un método llamado buscarContacto a la clase Agenda que reciba el nombre de un contacto y devuelva el objeto correspondiente.
// class Agenda {
//     constructor() {
//         this.contactos = [];
//     }
//     agregarContacto(contacto) {
//         this.contactos.push(contacto);
//     }
//     buscarContacto(nombre) {
//         for (let contacto of this.contactos) {
//             if (contacto.nombre === nombre) {
//                 return contacto;
//             }
//         }
//         return null;
//     }
// }
// const miAgenda = new Agenda();
// miAgenda.agregarContacto({ nombre: "Lagu", clase: "JS 57705" });
// miAgenda.agregarContacto({ nombre: "Sofia", clase: "Martillera" });
// const contactoBuscado = miAgenda.buscarContacto(prompt("Ingresa el nombre del contanto a buscar: "));
// if (contactoBuscado) {
//     console.log("Contacto encontrado: " ,  contactoBuscado);
// } else {
//     console.log("Contacto no encotrado.");
// }
// -------------------------------------------------------------------------------------
// 24. Crea una clase llamada Vehiculo con las propiedades marca, modelo y año. Agrega un método llamado detalles que imprima en la consola los detalles del vehículo.

// class Vehiculo {
//     constructor(marca, modelo, anio){
//         this.marca = marca;
//         this.modelo = modelo;
//         this.anio = anio;
//     }
//     detalle (){
//         return console.log(" Estos son los detalles ", this.marca, this.modelo,this.anio)
//     }
// }
// Vehiculo = new Vehiculo ("Audi", "A3", 2024);
// Vehiculo.detalle();

// -------------------------------------------------------------------------------------
// 25. Agrega un método llamado acelerar a la clase Vehiculo que imprima en la consola un mensaje indicando que el vehículo está acelerando.
//                           Descomentar ejercicio 24 para que funcione.

// -------------------------------------------------------------------------------------
// 26. Crea una clase llamada Rectangulo con las propiedades base y altura. Agrega un método llamado calcularPerimetro que calcule y devuelva el perímetro del rectángulo.
// class Rectangulo {
//     constructor(base, altura) {
//         this.base = base;
//         this.altura = altura;
//     }
//     calcularPerimetro() {
//         return 2*(this.base + this.altura);
//     }
// }
// const rectangulo2 = new Rectangulo(10,5);
// console.log(rectangulo2);
// -------------------------------------------------------------------------------------

// 27. Crea una clase llamada Triangulo con las propiedades lado1, lado2 y lado3. Agrega un método llamado calcularArea que calcule y devuelva el área del triángulo.

// class Triangulo {
//     constructor(lado1, lado2, lado3) {
//         this.lado1 = lado1;
//         this.lado2 = lado2;
//         this.lado3 = lado3;
//     }
//     calcularArea() {
//         const s = (this.lado1 + this.lado2 + this.lado3) / 2;
//         const area = Math.sqrt(s * (s - this.lado1) * (s - this.lado2) * (s - this.lado3));
//         return area;
//     }
// }
// const miTriangulo = new Triangulo(3, 3, 5);
// const areaTriangulo = miTriangulo.calcularArea();
// console.log("El área del triángulo es:", areaTriangulo);

// -------------------------------------------------------------------------------------
// 28. Agrega un método llamado calcularPerimetro a la clase Triangulo que calcule y devuelva el perímetro del triángulo.
//                           Descomentar ejercicio 27 para que funcione.
// -------------------------------------------------------------------------------------
//-------------- Métodos y Operaciones con Objetos -------------F-
//-------------------------------------------------------------------------------------
//-------------- Operador IN y FOR...IN -------------I-
//-------------------------------------------------------------------------------------
// 29. Crea un objeto llamado computadora con las propiedades marca, modelo y procesador. Utiliza el operador in para verificar si la propiedad procesador existe en el objeto.

const computadora = {
    marca: "Admiral",
    modelo: "2",
    procesador: "Turbo",
};
// if ("procesador" in computadora) {
//     console.log("Si existe");
// } else {
//     console.log("No existe");
// }
//-------------------------------------------------------------------------------------
// 30. Utiliza un bucle for...in para iterar sobre las propiedades del objeto computadora e imprime en la consola el nombre de cada propiedad y su valor.
//                           Descomentar ejercicio 29 para que funcione.

// for (let propiedad in computadora){
//     console.log(propiedad + ": " + computadora[propiedad]);
// }
//-------------------------------------------------------------------------------------
//-------------- Operador IN y FOR...IN -------------F-
//-------------------------------------------------------------------------------------
//-------------- Clases y Métodos -------------I-
//-------------------------------------------------------------------------------------
// 31. Crea una clase llamada Circulo con la propiedad radio. Agrega un método llamado calcularArea que calcule y devuelva el área del círculo.

// class Circulo {
//     constructor (radio){
//         this.radio = radio;
//     }
//     calcularArea (){
//         return Math.PI * this.radio * this.radio
//     }
// }
// const nuevoRadio = new Circulo(5);
// const areaCirculoNuevo = nuevoRadio.calcularArea();
// console.log("Nueva Area: " + areaCirculoNuevo)
//-------------- Clases y Métodos -------------F-

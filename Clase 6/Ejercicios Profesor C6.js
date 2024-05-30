

// Ejercicios Integrados de JavaScript con Objetos, Clases y Arrays
//-------------------------------------------------------------------------------------
//-------------- Objetos y Obtener Valores con Arrays -------------I-
//-------------------------------------------------------------------------------------
// 1. Crea un array de objetos llamado personas, donde cada objeto represente a una persona con las propiedades nombre, edad y ciudad. Imprime en la consola el nombre de la primera persona del array.
// const personas = [
//     { nombre: "Agustin", edad: 30, ciudad: "Buenos Aires", },
//     { nombre: "Sofia", edad: 24, ciudad: "Benavidez", },
//     { nombre: "Mateo", edad: 31, ciudad:"San Isidro", },
//     { nombre: "Ines", edad: 27, ciudad: "Beccar", },
// ];
// console.log(personas[0]);

//-------------------------------------------------------------------------------------
// 2. Agrega un nuevo objeto al array personas que represente a otra persona con las mismas propiedades. Luego, imprime en la consola la edad de la segunda persona del array.
//                           Descomentar ejercicio 1 para que funcione.

// personas.push({nombre: "Carolina", edad: 55, ciudad: "Cañuelas"});
// console.log(personas);
// console.log(personas[1]);

//-------------------------------------------------------------------------------------
// 3. Crea un array de objetos llamado autos, donde cada objeto represente un automóvil con las propiedades marca, modelo y anio. Imprime en la consola el modelo del segundo auto del array.

// const autos = [
//     {marca: "Audi", modelo: "A3", anio: 2024},
//     {marca: "Ferrari", modelo: "F1", anio: 2005},
//     {marca: "Renault", modelo: "Logan", anio: 2017},
// ];
// console.log(autos[1]);

//-------------------------------------------------------------------------------------
// 4. Agrega un nuevo objeto al array autos que represente otro automóvil con las mismas propiedades. Luego, imprime en la consola el año del último auto del array.
//                           Descomentar ejercicio 3 para que funcione.

// autos.push ({marca: "Mercedes", modelo: "Nax", anio: 2024});
// console.log("El año del último auto es:", autos[autos.length -1].anio);
//-------------------------------------------------------------------------------------
//-------------- Objetos y Obtener Valores con Arrays -------------F-
//-------------------------------------------------------------------------------------
//-------------- Objetos Constructores y Constructor y New con Arrays -------------I-
//-------------------------------------------------------------------------------------
// 5. Crea un constructor llamado Producto con las propiedades nombre, precio y cantidad. Crea un array de productos utilizando este constructor y agrega al menos tres productos.

// function Producto(nombre, precio, cantidad) {
//     this.nombre = nombre;
//     this.precio = precio;
//     this.cantidad = cantidad;
// }
// const productos = [
//     new Producto("Leche", 200, 50),
//     new Producto("Mate", 300, 500),
//     new Producto("Yerba", 1000, 100),
// ];
// console.log(productos);

//-------------------------------------------------------------------------------------
// 6. Crea un constructor llamado Persona con las propiedades nombre, edad y ciudad. Crea un array personas utilizando este constructor y agrega al menos tres personas.

// function Persona(nombre, edad, ciudad) {
//     this.nombre = nombre;
//     this.edad = edad;
//     this.ciudad = ciudad;
// }
// const personas = [
//     new Persona("Agustin", 30, "Buenos Aires"),
//     new Persona("Sofia", 24, "Benavidez"),
//     new Persona("Mateo", 31, "San Isidro"),
// ];
// console.log(personas);

//-------------------------------------------------------------------------------------
// 7. Crea un constructor llamado Libro con las propiedades titulo, autor y año. Crea un array de libros utilizando este constructor y agrega al menos tres libros.

// function Libro(titulo, autor, anio) {
//     this.titulo = titulo;
//     this.autor = autor;
//     this.anio = anio;
// }
// const librosNuevo = [
//     new Libro("Harry 1", "JKR", 2001),
//     new Libro("A sangre fria", "Truman Capote" , 2004 ),
//     new Libro("El cultivo", "JuaniJuana" , 2018 ),
// ];
// console.log(librosNuevo);
//-------------------------------------------------------------------------------------
//-------------- Objetos Constructores y Constructor y New con Arrays -------------F-
//-------------------------------------------------------------------------------------
//-------------- Uso de THIS con Arrays -------------I-
//-------------------------------------------------------------------------------------
// 8. Crea un objeto llamado rectangulo con las propiedades base y altura. Agrega un método llamado calcularArea que calcule y devuelva el área del rectángulo. Luego, crea un array de objetos rectangulos y calcula el área del primer rectángulo del array.

// const rectangulo = {
//     base: parseFloat(prompt("Ingresar base: ")),
//     altura: parseFloat(prompt("Ingresar altura: ")),
//     calcularArea: function () {
//         return this.base * this.altura;
//     }
// };
// const rectangulos = [rectangulo];
// const areaPrimerRectangulo = rectangulos[0].calcularArea();
// console.log(areaPrimerRectangulo);
// rectangulos.push(2,3);
// console.log(rectangulos);
//-------------------------------------------------------------------------------------
// 9. Crea un objeto llamado circulo con la propiedad radio. Agrega un método llamado calcularPerimetro que calcule y devuelva el perímetro del círculo. Luego, crea un array de objetos circulos y calcula el perímetro del segundo círculo del array.

//-------------------------------------------------------------------------------------
//-------------- Uso de THIS con Arrays -------------F-

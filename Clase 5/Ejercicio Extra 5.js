// ----------------------ACTIVIDAD 1

// Declarar un clase Tienda que permita registrar:
// Nombre de la tienda.
// Dirección de la tienda.
// Propietario de la tienda.
// Rubro de la tienda.
// Luego invocar al menos tres (3) objetos usando esta clase.

// class Tienda {
//     constructor(nombre, direccion, propietario, rubro) {
//         this.nombre = nombre;
//         this.direccion = direccion;
//         this.propietario = propietario;
//         this.rubro = rubro;
//     }
// }
// const tienda1 = new Tienda("Agustin", "Alberti 880", "Federico");
// const tienda2 = new Tienda("JuaniJuana", "Gral Maria Paz 3970", "Chano");
// const tienda3 = new Tienda("Vivero del puerto", "Tiscornia 1014", "Belu");
// console.log(tienda1);
// console.log(tienda2);
// console.log(tienda3);

// ----------------------ACTIVIDAD 2

// Solicitar al usuario el registro de cinco (5) tiendas.
// Emplear la clase Tienda de la actividad 1, para instanciar los objetos en función de las entradas capturadas. Generar una única salida compuesta por la información de los objetos instanciados.
// let ingresados = "";
// for (let i = 0; i < 5; i++){
//     let tienda = new Tienda(
//     prompt("nombre"),
//     prompt("direccion"),
//     prompt("propietario"),
//     prompt("rubro"));
//     ingresados +=
//     "Tienda: " + tienda.nombre +" "+
//     "Dirección: " + tienda.direccion +" "+
//     "Propietario: "+ tienda.propietario +" "+
//     "Rubro: " + tienda.rubro + "\n";
// }
// alert(ingresados);

// ----------------------ACTIVIDAD 3

// Declarar un método para la clase Tienda con la siguiente cabecera estaAbierto(hora). Este retorna true si la hora enviada está entre las 08 y 12, o entre las 15 y 19. Caso contrario, se retorna false.
// Luego invocar al menos un (1) objeto usando esta clase, y solicitar al usuario tres (3) horas. Informar por alerta si la tienda está abierta, en función de la hora ingresada.





// class Tienda {
//     constructor(nombre, direccion, propietario, rubro) {
//         this.nombre = nombre;
//         this.direccion = direccion;
//         this.propietario = propietario;
//         this.rubro = rubro;
//     }
//     estaAbiuerto(hora) {
//         if (hora >= 8 && hora <= 12 || hora >= 15 && hora <= 19) {
//             return true;
//         }
//         return false;
//     }
// }

// const tienda4 = new Tienda ("33 cents Sotre", "Cheap 231", "Barato SRL", "Ropa");
// for ( i = 0; i < 3 ; i++){
//     let entrada = parseInt(prompt("Ingresa hora en punto"));
//     if (tienda4.estaAbiuerto(entrada)){
//         alert ("La tienda esta abierta a las "+entrada)
//     } else {
//         alert ("La tienda esta cerrada a las "+entrada)
//     }
// }

// ----------------------ACTIVIDAD 4
// Declarar un método para la clase Tienda con la siguiente cabecera esPropietario(nombre). Se retorna true si el nombre enviado corresponde al propietario de la tienda.Caso contrario, se retorna false.
// Luego, invocar al menos tres(3) objetos usando esta clase y solicitar al usuario cinco(5) nombres. Informar por alerta si los nombres pertenecen a algún dueño de tienda.

// class Tienda {
//     constructor(nombre, direccion, propietario, rubro) {
//         this.nombre = nombre;
//         this.direccion = direccion;
//         this.propietario = propietario;
//         this.rubro = rubro;
//     }
//     esPropietario(nombre) {
//         return this.propietario == nombre;
//     }
// }
// const tienda1 = new Tienda("Agustin", "Alberti 880", "Federico");
// const tienda2 = new Tienda("JuaniJuana", "Gral Maria Paz 3970", "Chano");
// const tienda3 = new Tienda("Vivero del puerto", "Tiscornia 1014", "Belu");
// for (let i = 0; i < 5; i++) {
//     let entrada = prompt("Ingrsa nombre de propietario: ");
//     if (tienda1.esPropietario(entrada)) {
//         alert (entrada + " Es propietario de la tienda " + tienda1.nombre);
//     }
//     if (tienda2.esPropietario(entrada)) {
//         alert (entrada + " Es propietario de la tienda " + tienda2.nombre);
//     }
//     if (tienda3.esPropietario(entrada)) {
//         alert (entrada + " Es propietario de la tienda " + tienda3.nombre);
//     }
// }

// // ----------------------ACTIVIDAD 5
// Declarar una clase Cliente que permita registrar:
// Registrar nombre, presupuesto, si tiene tarjeta de descuento, y número de teléfono del cliente.

// Un método transferirDinero(valor), que permita  obtener y restar cierta cantidad del presupuesto, siempre que este parámetro sea menor al valor enviado, y mayor que cero.

// Luego invocar al menos tres (3) objetos usando esta clase, y solicitar al usuario cinco (5) números. Informar por alerta si cada uno de los clientes cuenta con el presupuesto suficiente para realizar una transferencia de igual monto al ingresado.

// class Cliente {
//     constructor(nombre, presupuesto, tarjeta, telefono) {
//         this.nombre = nombre;
//         this.presupuesto = presupuesto;
//         this.tarjeta = tarjeta;
//         this.telefono = telefono;
//     }
//     transferirDinero(valor) {
//         if ((this.presupuesto > 0) && (valor < this.presupuesto)) {
//             this.presupuesto -= valor;
//             return valor;
//         } else {
//             return 0;
//         }
//     }
// }
// const cliente1 = new Cliente("Agustin", 1000, true, 513560156);
// const cliente2 = new Cliente("Chano", "2000", false, 651651);
// const cliente3 = new Cliente("Belu", "50", false, 1651651);
// for (let i = 0; i < 5; i++) {
//     let entrada = parseFloat(prompt("Ingresar monto"));
//     if (cliente1.transferirDinero(entrada)) {
//         alert("El cliente " + cliente1.nombre + " te puede pagar " + entrada);
//     }
//     if (cliente2.transferirDinero(entrada)) {
//         alert("El cliente " + cliente2.nombre + " te puede pagar " + entrada);
//     }
//     if (cliente3.transferirDinero(entrada)) {
//         alert("El cliente " + cliente3.nombre + " te puede pagar " + entrada);
//     }
// }
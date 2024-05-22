// ----------------------ACTIVIDAD 1

// Declarar un clase Tienda que permita registrar:
// Nombre de la tienda.
// Dirección de la tienda.
// Propietario de la tienda.
// Rubro de la tienda.
// Luego invocar al menos tres (3) objetos usando esta clase.

class Tienda {
    constructor(nombre, direccion, propietario, rubro) {
        this.nombre = nombre;
        this.direccion = direccion;
        this.propietario = propietario;
        this.rubro = rubro;
    }
}
const tienda1 = new Tienda("Agustin", "Alberti 880", "Federico");
const tienda2 = new Tienda("JuaniJuana", "Gral Maria Paz 3970", "Chano");
const tienda3 = new Tienda("Vivero del puerto", "Tiscornia 1014", "Belu");
console.log(tienda1);
console.log(tienda2);
console.log(tienda3);

// ----------------------ACTIVIDAD 2

// Solicitar al usuario el registro de cinco (5) tiendas.
// Emplear la clase Tienda de la actividad 1, para instanciar los objetos en función de las entradas capturadas. Generar una única salida compuesta por la información de los objetos instanciados.
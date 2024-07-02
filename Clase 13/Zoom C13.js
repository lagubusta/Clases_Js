// const numeros =[1,2,3,45,6,76,8,98];
// console.log(Math.max(...numeros));

// const persona = [ "Agustin", "Mateo", "Sofia"];
// console.log(persona);

// console.log(...persona);

// const persona1 = [ "Agustin", "Mateo", "Sofia"];
// const personas2 = [ "Ines", "Carolina", "Ignacio"];
// console.log(...persona1);

// const todasPersonas = [ ...persona1, ...personas2];
// console.log(...todasPersonas);

// const numeros =[1,2,3,45,6,76,8,98];
// console.log(...todasPersonas, ...numeros);


const alumno = {
    nombre: "Agustin",
    edad: 30,
    nacionalidad: "Agentina",
    cursos: {
        desarrolloWeb: "aprobado",
        JavaScript: "En Curso",
    }
}
console.log(alumno);

const alumnoDePrueba = {
    ... alumno,
    email: "agusbusta10@gmail.com",
    ojos: "Verdes",
}
console.log(alumnoDePrueba);
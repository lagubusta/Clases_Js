// Promesas
// set timeout

// setTimeout(() =>{
//     console.log("Funcion asincronica con 1 seg");
// }, 1000);
// console.log("Funcion asincronica inmediata");

// for (let letra of "hola"){
//     console.log(letra);
// }

// for (let letra of "hola"){
//     setTimeout(() => console.log(letra), 1500)
// }


// // Promesas
// // set timeout
// console.log("funcion sincronica 1");
// setTimeout(() =>{
//     console.log("Funcion asincronica con 0 seg");
// }, 0);
// console.log("funcion sincronica 2");


// #### ClearInterval
// setInterval(()=>{
//     console.log("Tic");   
// }, 500);
// let counter = 0;
// const interval = setInterval(() => {
//     counter++
//     console.log ("Counter: ", counter)

//     if (counter >= 5){
//         clearInterval(interval);
//         console.log("Se removio el intervalo");
//     }
// }, 1000);
// #### clearTimeout
// console.log("Inicio");
// const fin = setTimeout (()=> {
//     console.log("fin");
// }, 1000);
// clearTimeout(fin);


// # Promesas

const eventoAFuturo = (pasarDeNivel) => {
    return new Promise((resolve, reject) => {
        pasarDeNivel === true ? resolve("Promesa cumplida") : reject("Promesa sin cumplir");
    })
}

console.log(eventoAFuturo(true));
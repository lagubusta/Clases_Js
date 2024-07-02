// Promesas
// set timeout

// setTimeout(() =>{
//     console.log("Funcion asincronica con 1 seg");
// }, 1000);
// console.log("Funcion asincronica inmediata");

for (let letra of "hola"){
    console.log(letra);
}

for (let letra of "hola"){
    setTimeout(() => console.log(letra), 1500)
}

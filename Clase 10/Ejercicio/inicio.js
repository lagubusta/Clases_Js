const gallery = document.getElementById('gallery');
gallery.style.backgroundColor = 'red';



const liFotos = document.createElement('li');
gallery.appendChild(liFotos);

const im = document.createElement('img');
im.innerHTML = `<img src="" alt=""></img>`
liFotos.appendChild=(im);

const arrayFotos = [];

// 001.webp
// 002.webp
// 003.webp

/* <img src="" alt=""></img> */


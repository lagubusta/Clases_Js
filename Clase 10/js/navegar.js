// Delaración de Variables
const cuerpo = document.body;
const cabecera = document.getElementById('header');
const navegacion = document.createElement('div'); 
const nav = document.createElement('nav');
const ul = document.createElement('ul');
const links = ["indexC10", "Products", "Contact"];
const footer = document.getElementsByTagName('footer');
const parrafoFooter = document.createElement('p');
const TIME = new Date().getFullYear(); // 2024


cabecera.appendChild(navegacion);
navegacion.appendChild(nav);
nav.appendChild(ul);
navegacion.className = 'navbar';

for (const link of links) {
    const li = document.createElement('li');
    li.innerHTML = `<a href="${link.toLowerCase()}.html" >${link}</a>`;
    ul.appendChild(li);
}

cabecera.style.backgroundColor = '#c2c2c2';

footer[0].appendChild(parrafoFooter);
parrafoFooter.innerHTML = 'CoderHouse - ' + TIME + ' | Comisión #57705';
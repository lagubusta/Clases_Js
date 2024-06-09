// EVENTO SUBMIT
let miFormulario = document.getElementById("formulario");
const nombreForm = document.getElementById('nombreForm');
const edadForm = document.getElementById('edadForm');
const mainContact = document.getElementById('mainContact');
const divContact = document.createElement('div');
const textContact = document.createElement('h4');
// EVENTO SUBMIT


// miFormulario.addEventListener("submit", validarFormulario);

// function validarFormulario(e){
//     e.preventDefault(); // Evitar el evento Submit por defecto - Que es Actualizar la Pagina.
//     console.log("Formulario Enviado");    
// }


// EVENTO SUBMIT
mainContact.appendChild(divContact);

miFormulario.addEventListener('submit', (e) => {
    e.preventDefault();
    divContact.appendChild(textContact);
    textContact.innerHTML = `La edad ingresada de ${nombreForm.value} es ${edadForm.value}`;
})
// EVENTO SUBMIT

// // otra forma de evento submit. Con "array"
// mainContact.appendChild(divContact);
// miFormulario.addEventListener("submit", validarFormulario);

// function validarFormulario(e) {
//     //Cancelamos el comportamiento del evento
//     e.preventDefault();
//     //Obtenemos el elemento desde el cual se disparó el evento
//     divContact.appendChild(textContact);
//     let formulario = e.target;
//     //Obtengo el valor del primero hijo <input type="text">
//     textContact.innerHTML = `La edad ingresada de ${formulario.children[1].value} es ${formulario.children[0].value}`;
// }
// // otra forma de evento submit. Con "array"
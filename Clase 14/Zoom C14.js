// boton.addEventListener('click', () => {
// });


const boton = document.getElementById('boton');
boton.textContent ="Hace click";
// boton.addEventListener('click', () => {
//     Swal.fire('Hiciste click')
// });


boton.addEventListener('click', () => {
    Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Your work has been saved",
        showConfirmButton: false,
        timer: 1500
      });
});


let producto = {id: 1, nombre: "arroz", precio: 125};
let contenedor = document.createElement("div");

contenedor.innerHTML = `<h3> ID: ${producto.id} </h3>
<p> Producto: ${producto.nombre} </p>
<b> $ ${producto.precio}  </b>`;

document.body.appendChild(contenedor);
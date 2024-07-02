# Librerias

## Sweet Alert

## Toastify JS

## Luxon
- Siver para manejar fechas


## Descarga de archivos o CDN

- Descarga de archivos
- Una práctica común consiste en cargarlas en formato minificado, o minified.
- Son archivos JS cuyo contenido se encuentra escrito en una única línea y de corrido, sin saltos de línea ni espacios innecesarios para achicarlos.
- La pc lo lee mas rápido.

```html
<script src="js/libreria.js"></script>
```
- CDN
- No ocupan espacio en la memoria de mi pc. Se actualiza autmaticamente
- **Si la nuebe se cae, en las partes que use el link se va a caer**
```html
src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.1/moment.min.js">
</script>
```

## Documentación

- La documentación es el manual de instrucciones para la implementación y manejo de las librerías. Es muy importante trabajar con ella.

# Sweet alert
- Permite crear alertas personalizadas atractivas, sencillas, customizables e interactivas. Reemplaza el típico alert() tradicional

## ¿Cómo instalarla?

1. Primero debemos implementarla como vimos anteriormente.
2. Luego, siguiendo la documentación, en el ítem installation tenemos las instrucciones de cómo proceder:
**3. Se tiene que poner sobrre el scrpit de JS.**
```html
<script src="//cdn.jsdelivr.net/npm/sweetalert2@11"></script>
```
Ahora, podemos disparar *alertas* a través del método **.fire** del objeto global Swal:
El método recibe un objeto por parámetro. Puede recibir distintas propiedades y valores, generando distintos resultados. Esto nos permite customizar la alerta 

### PARA CAMBIAR EL COLOR DE UNA LIBRERIA, POR EJEMPLO COLOR, INSPECCIONO EL CODIGO EN EL NAVEDADOR, COPIO LA CLASE DE LO QUE QUIERO MODIFICAR. VOY AL CSS, CAMBIO EL BACKGROUND COLOR Y Y SE LO MODIFICO, DESPUES DEL "CODIGO" TENGO QUE PONER !important  SINO NO LO VA A TOMAR.

- Esta libreria puede ser un objeto, entonces yo le puedo ir agregando o sacndo cosas.
- Caso por defecto.
```JS
Swal.fire({
  title: 'Error!',
  text: 'Do you want to continue',
  icon: 'error',
  confirmButtonText: 'Cool'
});
```
- Con modificaciones.
```JS
Swal.fire({
  title: "Custom animation with Animate.css",
  showClass: {
    popup: `
      animate__animated
      animate__fadeInUp
      animate__faster
    `
  },
  hideClass: {
    popup: `
      animate__animated
      animate__fadeOutDown
      animate__faster
    `
  }
});
```

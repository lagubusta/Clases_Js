# CLASE 10

## Eventos
###### Organización de archivo
- Cremoas html para index, contact, products.
- A cada una de estos html le creamos su arhicovs **js** y ademas creamos uno que sea navegación donde creamos todo para que cada html tenga su barra de navagación.


- **¿Qué es un evento?**
- Los eventos son la manera que tenemos en Javascript de controlar las acciones de los usuarios, y definir un comportamiento de la página o aplicación cuando se produzcan.
- Con Javascript es posible definir qué sucede cuando se produce un evento, por ejemplo, cuando se realiza un clic en cierto elemento o se inserta un texto en un determinado campo.
- **¿Cómo funciona?**
- JavaScript permite asignar una función a cada uno de los eventos. Reciben el nombre de **event handlers** o manejadores de eventos.
- Así, ante cada evento, JavaScript asigna y ejecuta la función asociada al mismo.

**¿Cómo definir eventos en JS?**
*Ver Tipos de evento.md*

##### Ejemplo: 
*Creamos un boton en index.js para poder mostrar los ejemplos*
*diapositivas de coder recomiendan usar op1 o op2 pero la realidad es que podemos usar cualquiera según la necesidad que tengamos.*
- Creamos un variable mainBody que va llamar al id="main" con **querySelector** que agregamos al *html*. Y le creamos un botón, el contenido del texto va ser *"Click"* y que sea tipo *"button"* . Ponemos algo de *style* e insertamos el boton dentro del *main*.
```js
const mainBody = document.querySelector('#main');
const boton = document.createElement('button');
boton.textContent = 'Click';
boton.type = 'button';
mainBody.appendChild(boton);
boton.style.backgroundColor = 'yellow';
boton.style.padding ='1rem';
boton.style.width ='6rem';
boton.style.margin ='2rem';
boton.style.fontSize = '1.2rem'
```
---
**1. Opción 1**
El método **addEventListener()** permite definir qué evento escuchar sobre cualquier elemento seleccionado.
El primer *parámetro* corresponde al *nombre del evento* **(click)** y el *segundo* a la *función* ***(respuestaAlClick)*** de respuesta. Lo que le asignamos a la función es que cuando haga click sobre el botón cambie su background color a *red* y su fontColor a *white*.
- En este caso solo se cambia los estilos, si vuelvo a hacer click en el botón no vuelve a los colores iniciales, se va a "reinciar" cuando actualice la página.
```js
boton.addEventListener ('click', respuestaAlClick);
function respuestaAlClick(){
    boton.style.backgroundColor = 'red';
    boton.style.color = 'white';
}
```
---
**2. Opción 2: .on**
Emplear una propiedad del *nodo* para definir la respuesta al evento. Las propiedades se identifican con el nombre del *evento* y el prefijo **on**.
También es posible emplear *funciones anónimas* para definir los manejadores de eventos.
```js
boton.onclick = () => {alert("El botón fue apretado por Opción 2")};
```
---
**3. Opción 3: Sintaxis.**
-Determinar el evento especificando el manejador de evento en el atributo de una etiqueta HTML. La denominación del atributo es idéntica al de la propiedad de la opción 2 (prefijo on).
- La función puede declararse entre la comillas o bien tomarse una referencia existen en el script.
```html
 <input type="button" value="CLICK2" onclick="alert('Respuesta 3');" />
```
---
**4. Opción 4: Funión Anónima dentro de addEventListener()..**
- Volvemos a usar **addEventListener()** (Opción 1), pero en vez de pasar dos parametros, usamos uno y una *función anónima* como segundo parámetro.
- De esta forma evitamos crear un nombre para cada función de cada *addEventListener()* que creemos.
```js
boton.addEventListener ('click', () => {
    boton.style.backgroundColor = 'pink';
    boton.style.color = 'black';
});
```
---
### Evento del mouse

- **mousedown/mouseup**: Se oprime/suelta el botón del ratón sobre un elemento.
- **mouseover/mouseout**:  El puntero del mouse se mueve sobre/sale del elemento.
- **muousemove**: El movimiento del mouse sobre el elemento activa el evento.
- **click**: Se activa después de mousedown o mouseup sobre un elemento válido.

### Eventos del tecldo

- **keydown**: Cuando se presiona.
- **keyup**: Cuando se suelta una tecla.

### Evento change

- El evento change se activa cuando se detecta un cambio en el valor del elemento. 
    - Por ejemplo, mientras se escribe en un input de tipo texto no hay evento change, pero cuando salgo de este input va a pasar lo que le diga como función.
- Agrego dos inputs al HTML.
```html
        <input id = "nombre" type="text">
        <input id = "edad"   type="number">
```
- Cuando el usuario ingresa el valor en el input1 o input2 y "sale" del input se va a imprimir en consola el valor ingresado.
```js
let input1  = document.getElementById("nombre");
let input2  = document.getElementById("edad");
input1.onchange = () => {console.log(input1.value)};
input2.onchange = () => {console.log(input2.value)};
//Si el usuario ingreso, "Agustin" y "30" imprime en consola:
// Agustin
// 30
```
### Evento input

- Si queremos ejecutar una función cada vez que se tipea sobre el campo, conviene trabajar directamente con el evento input.
    - *Por ejemplo tengo un input tipo texto donde le pido al usuario que ingrese el nombre. A medida que va ingresando un input va a ir "tipeando" todo lo que esta escribiendo el usuario. Se ve mucho mas claro si se aplica.*
- Ejemplo de uso, cuando te piden crear una contraseña y te dice si es debil, buena o muy buena en medida de seguridad.
```html
<input id = "nombre" type="text">
```
```js
let input1 = document.getElementById("nombre")
input1.addEventListener('input', () => {
    console.log(input1.value)
})

```
### Evento submit
- El evento submit se activa cuando el formulario es enviado. Normalmente se utiliza para validar el formulario antes de ser enviado al servidor o bien para abortar el envío y procesarlo con JavaScript.
**En pagina contacto**
```html
    <main id="mainContact"> 
        <h1> Contacto</h1>
        <form id="formulario">
            <label for="">Ingrese su Nombre</label>
            <input type="text" id="nombreForm">
            <label for="">Ingrese su Edad</label>
            <input type="number" id="edadForm">
            <input type="submit" value="Enviar">
        </form>
    </main>
```
```js
let miFormulario = document.getElementById("formulario");
const nombreForm = document.getElementById('nombreForm');
const edadForm = document.getElementById('edadForm');
const mainContact = document.getElementById('mainContact');
const divContact = document.createElement('div');
const textContact = document.createElement('h4');
mainContact.appendChild(divContact);
miFormulario.addEventListener('submit', (e) => {
    e.preventDefault();
    divContact.appendChild(textContact);
    textContact.innerHTML = `La edad ingresada de ${nombreForm.value} es ${edadForm.value}`;
})
```
##### Ejemplo de evento de mouse, como hover.
*En la pagina indexC10*
- Cremamos dos eventos para el botón que ya teniamos generado.
- Cuando arranque la página el botón va a parecer de color amarillo y letras negras.
- Cuando ponga el mause por encima, va a cambiar a color rosa con letras negras.
- Cuando saco el mouse del botón va a volverse Gris con letras blancas, pero si vuelvo a pasar el mouse por encima va a volver a ser Rosa.
- Para que vuelva a ser amarillo como "venia por defecto" (estilo que le había pueso al principio), tengo que acualizar la página.
```js
boton.addEventListener('mouseover', () => {
    boton.style.color = 'black';
    boton.style.backgroundColor ='pink';
});

boton.addEventListener('mouseout', () => {
    boton.style.color = 'white';
    boton.style.backgroundColor ='grey';
});
```

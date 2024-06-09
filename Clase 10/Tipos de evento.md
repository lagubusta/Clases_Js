# Algunos tipos de eventos disponibles para addEventListener()

- En JavaScript, el método addEventListener se utiliza para agregar controladores de eventos a elementos del DOM. Hay una amplia variedad de eventos que pueden desencadenar estos controladores, y estos eventos se pueden agrupar en varias categorías. Esta es una lista de algunos de los tipos de eventos más comunes.

**1. Eventos de Ratón (Mouse Events)**
- *click*: Disparado cuando se hace clic en un elemento.
- *dblclick*: Disparado cuando se hace doble clic en un elemento.
- *mousedown*: Disparado cuando se presiona un botón del ratón.
- *mouseup*: Disparado cuando se suelta un botón del ratón.
- *mousemove*: Disparado cuando el ratón se mueve sobre un elemento.
- *mouseenter*: Disparado cuando el puntero del ratón se mueve dentro de un elemento.
- *mouseleave*: Disparado cuando el puntero del ratón sale de un elemento.
- *mouseover*: Disparado cuando el puntero del ratón se mueve sobre un elemento o uno de sus hijos.
- *mouseout*: Disparado cuando el puntero del ratón se mueve fuera de un elemento o uno de sus hijos.
- *contextmenu*: Disparado cuando se abre el menú contextual (botón derecho del ratón).

**2. Eventos de Teclado (Keyboard Events)**
- *keydown*: Disparado cuando se presiona una tecla.
- *keyup*: Disparado cuando se suelta una tecla.
- *keypress*: Disparado cuando se presiona y se suelta una tecla (obsoleto, use keydown y keyup).

**3. Eventos de Entrada (Input Events)**
- *input*: Disparado cuando el valor de un elemento 
``` <input>, <textarea> o <select> ``` cambia.
- *change*: Disparado cuando el valor de un elemento ```<input>, <textarea> o <select>``` cambia y se pierde el foco.
- *focus*: Disparado cuando un elemento gana el foco.
- *blur*: Disparado cuando un elemento pierde el foco.
- *submit*: Disparado cuando se envía un formulario.
- *reset*: Disparado cuando se restablece un formulario.

**4. Eventos de Documento/Janela (Document/Window Events)**
- *load*: Disparado cuando la página ha terminado de cargarse.
- *resize*: Disparado cuando se cambia el tamaño de la ventana del navegador.
- *scroll*: Disparado cuando se desplaza el contenido de un elemento o de la ventana.
- *unload*: Disparado cuando el documento está a punto de descargarse.
beforeunload: Disparado antes de que la ventana o el documento se descargue.

**5. Eventos de Drag and Drop (Arrastrar y Soltar)**
- *drag*: Disparado mientras un elemento está siendo arrastrado.
- *dragstart*: Disparado cuando empieza a arrastrarse un elemento.
- *dragend*: Disparado cuando se termina de arrastrar un elemento.
- *dragover*: Disparado cuando un elemento arrastrado está sobre un destino de arrastre válido.
- *dragenter*: Disparado cuando un elemento arrastrado entra en un destino de arrastre válido.
- *dragleave*: Disparado cuando un elemento arrastrado sale de un destino de arrastre válido.
- *drop*: Disparado cuando se suelta un elemento arrastrado en un destino de arrastre válido.

**6. Eventos de Multimedia (Media Events)**
- *play*: Disparado cuando la reproducción de un elemento de audio o video está a punto de comenzar.
- *pause*: Disparado cuando la reproducción de un elemento de audio o video ha sido pausada.
- *ended*: Disparado cuando la reproducción de un elemento de audio o video ha llegado al final.
- *timeupdate*: Disparado cuando el tiempo de reproducción de un elemento de audio o video ha sido actualizado.

**7. Otros Eventos Comunes**
- *animationstart, animationend, animationiteration*: Disparados en diferentes momentos del ciclo de una animación CSS.
- *transitionstart, transitionend, transitioncancel*: Disparados en diferentes momentos del ciclo de una transición CSS.
- *error*: Disparado cuando ocurre un error durante la carga de un recurso o en un script.

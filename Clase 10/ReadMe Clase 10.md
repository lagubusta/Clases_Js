# CLASE 10

## Eventos

- **¿Qué es un evento?**
- Los eventos son la manera que tenemos en Javascript de controlar las acciones de los usuarios, y definir un comportamiento de la página o aplicación cuando se produzcan.
- Con Javascript es posible definir qué sucede cuando se produce un evento, por ejemplo, cuando se realiza un clic en cierto elemento o se inserta un texto en un determinado campo.
- **¿Cómo funciona?**
- JavaScript permite asignar una función a cada uno de los eventos. Reciben el nombre de **event handlers** o manejadores de eventos.
- Así, ante cada evento, JavaScript asigna y ejecuta la función asociada al mismo.

**¿Cómo definir eventos en JS?**
1. Opción 1
El método **addEventListener()** permite definir qué evento escuchar sobre cualquier elemento seleccionado.
El primer *parámetro* corresponde al *nombre del evento* y el *segundo* a la *función* de respuesta.
2. Opción 2
Emplear una propiedad del *nodo* para definir la respuesta al evento. Las propiedades se identifican con el nombre del *evento* y el prefijo **on**.
También es posible emplear *funciones anónimas* para definir los manejadores de eventos.
3. Opción 3: Sintaxis.
-Determinar el evento especificando el manejador de evento en el atributo de una etiqueta HTML. La denominación del atributo es idéntica al de la propiedad de la opción 2 (prefijo on).
- La función puede declararse entre la comillas o bien tomarse una referencia existen en el script.
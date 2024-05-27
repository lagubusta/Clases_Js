/*
Dentro del () va la variable, en este caso edadIngresada. Y dentro de las { } se ponen las diferentes condiciones o casos.
Cada _case_ vendría a ser el "else if" y va sin () y finalizado con : 
Siempre se pone un _default_ que vendría a ser el "else"
Hay que usar break; despues de cada case para que "pare" en caso que la condición sea verdaded.
*/

let edadIngresada = parseIntprompt(("Ingresar edad: "));

switch (edadIngresada){
    case 18:
        console.log("Es mayor de edad.");
        break;
    case 17:
        console.log("Es menor de edad.");
        break;
    case 0:
        console.log("La edad ingresada debe ser mayor a 0.");
        break;
    default:
        console.log("El dato ingresado no es valido");
}

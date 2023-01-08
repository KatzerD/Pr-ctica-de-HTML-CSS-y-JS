/* La fiesta del vagabundo
    -Dejar pasar solo a los mayores de edad
    -La primera persona que entre despues de las 2am no paga
*/

let hora = 0;
let free = true;

mayorDeEdad = edad => {
    if (edad >= 18) {
        if (hora == 2 && free == true) {
            alert("Eres mayor de edad y ademas la primera persona en llegar despues de las 2AM, pasa gratis");
            free = false;
        } else {
            alert("Eres mayor de edad, pero debes pagar");
        }
    } else {
        alert("Eres menor de edad, fuera de aca");
    }
}
while (hora < 6) {

    edad = prompt("Ingrese su edad");

    mayorDeEdad(edad);

    horaActual = prompt("Siguen siendo las " + hora + " AM? Y/N");
    if (horaActual == "N" || horaActual == "n") {
        hora++;
    }
    
}
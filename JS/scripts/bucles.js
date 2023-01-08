/* Bucles e interacciones 
    Tipos de buclesÑ
        -while
        -do While
        -for
        -for in
        -for of
    Otras sentencias
        -break, rompe el ciclo
        -continue, se salta el ciclo
        -label, Proporciona una sentencia con un identificador al que se puede referir al usar las sentencias break o continue.

*/

let numero = 0;

document.write("<b>While</b><br>");
while (numero < 10) {
    numero++;
    document.write(numero + "<br>");
}

numero = 0;

document.write("<b>Do While</b><br>");
do {
    numero++;
    document.write(numero + "<br>");
} while (numero < 10)


document.write("<b>For</b><br>");
for (let i = 0; i < 10; i++){
    document.write(i + "<br>");
}

document.write("<b>Sentencia Break</b><br>");
for (let i = 0; i < 10; i++) {
    if (i==5){
        document.write("BREAK<br>");
        break;
    }
    document.write(i + "<br>");
}

document.write("<b>Sentencia Break</b><br>");
for (let i = 0; i < 10; i++) {
    if (i == 5) {
        document.write("CONTINUE<br>");
        continue;
    }
    document.write(i + "<br>");
}


let animales = ["Gato", "Perro", "Conejo", "Dinosaurio"]
let animal;

document.write("<b>For in</b><br>");
for (animal in animales) {
    document.write(animal + "<br>");
}/* el for in nos recorre el array y nos devuelve la posicion en la que se encuentran los elementos y se guarda en la variable animal */

document.write("<b>For of</b><br>");
for (animal of animales) {
    document.write(animal + "<br>");
}/* el for of nos recorre el array y nos devuelve el elemento en si que se guarda en la variable animal */




let nombresM = ["Mie", "Josefa", "Ana"];
let nombresH = ["Enrique", "Federico", "Jorge", nombresM, "Clefo"];

document.write("<b>Label</b><br>");

forMie:/* LABEL */
for (let nombre in nombresH) {

    if (nombre == 3) {

        for (let nombre of nombresM){

            if (nombre == "Josefa") {
                continue forMie; /* LABEL */
            }

            document.write(nombre + "<br>");
        }

    } else {
        document.write(nombresH[nombre] + "<br>");
    }
}
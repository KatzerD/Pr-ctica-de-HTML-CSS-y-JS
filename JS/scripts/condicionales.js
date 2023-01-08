/* Condicionales en javascript

    Al igual que en la mayoria de lenguajes de programacion la sintaxis para generar condiciones en javascript es: if (condicion){} else if (condicion){} else{}
*/

let edad;

edad = prompt("Cuantos años tiene?")

if (edad >= 18) {

    alert("Bienvenido");

} else if (edad <= 0) {

    alert("El numero ingresado es invalido");

} else {

    alert("Usted es menor de edad y no tiene permitido ingresar a la pagina");
    
}
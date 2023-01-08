/* 
___Atributos de inputs___

    La particularidad que tienen las siguientes funciones es que no se necesita el metodo getAtribute() para acceder a dichos atributos de un elemento, se pueden aplicar directamente desde javascript.

    - className: nos devuelve el nombre de la clase del elemento al que se lo estamos aplicando
    -value: permite recibir o modifiar el valor por defecto del input
    -type: permite recibir o modificar el tipo de input
    -accept: define que tipos de datos deberan ser ingresados, por ejemplo en un input tipo fila
    -form: determina a que formulario va a estar anclado este input
    -placeholder: permite recibir o modificar el placeholder de un input
    -requeride: define si un input es obligatorio o no
    -style: permite modificar el estilo de los elementos desde javascript. la forma de hacerlo es poner .style.atributoCSS, el atributo css debe estar escrito de manera Camel Case
*/

const input = document.querySelector(".input-texto");
document.write("<br><br>className: " + input.className);

document.write("<br><br>value: " + input.value);

document.write("<br><br>type: " + input.type);
input.type = "color";

document.write('<br><br>input.type = "color";<br><br> type: ' + input.type);


document.write(`<br><br><br><br>
<input class= "input-modify" type = "file"> `);

const inputMod = document.querySelector(".input-modify");

inputMod.accept = "image/gif";


document.write(`<br><br><br><br>
<form id="formulario">
    <input class="input-min" type="text" placeholder="Nombre" minlength = "10"> Minlength = 10<br>
    <input class="requerido" type="text" placeholder="Apellido"><br>
    <input class="place" type="text" placeholder="Edad"><br>
    <input type="submit" value="Submit dentro del form">
</form>`);

document.write(`<input class="input-form" type="submit" value="Submit fuera del form" form="formulario">`);

const inputMin = document.querySelector(".input-min");
inputMin.minLength = 10;

const inputPlace = document.querySelector(".place");
inputPlace.placeholder = "input.placeholder";


const inputRequerido = document.querySelector(".requerido");
inputRequerido.required = true;


const elementoStyle = document.querySelector(".h3-style");
elementoStyle.style.color = "red";
elementoStyle.style.backgroundColor = "#222";
elementoStyle.style.padding = "20px";

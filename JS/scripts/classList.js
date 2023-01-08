/* 
___ClassList___
    >---.classList.---()

    -add(): Añade una clase
    -remove(): remueve una clase
    -item(): devuelve la clase del indice especificado
    -contains(): verifica si ese elemento posee o no, la clase especificada
    -replace(): reemplaza una clase por otra
    -toggle(): si no tiene la clase especificada, la agrega, si ya la contiene, la elimina
*/

const ObjClass = document.querySelector(".classlist");

ObjClass.classList.add("clase-add");

ObjClass.classList.remove("clase-remove");

console.log("Clase item(1): " + ObjClass.classList.item(1));

console.log("Clase contain: " + ObjClass.classList.contains("clase-contain"));

ObjClass.classList.replace("clase-replace", "clase-reemplazo");

ObjClass.classList.toggle("clase-NotToggle");
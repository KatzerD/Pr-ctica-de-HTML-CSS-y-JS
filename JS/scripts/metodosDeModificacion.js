/*
___Metodos para definir, obtener y eliminar atributos___

*document. :
    -setAtribute(): Modifica el valor de un atributo
    -getAtribute(): Obtiene el valor de un atributo
    -removeAtribute(): Remueve un atributo
*/

const inputMod = document.querySelector("#inputMod");

inputMod.setAttribute("type", "color");
/* El primer parametro es el tipo de atributo y el segundo el valor de ese atributo, tambien podemos crear los atributos si estos no estan definidos en el elemento */

valorInputMod = inputMod.getAttribute("type");
document.write(`<br> getAttribute = <b>${valorInputMod}</b>`);
/* Como parametros se envian los atributos y retorna su valor */

inputMod.removeAttribute("type");

valorInputMod = inputMod.getAttribute("type");
document.write(`<br> removeAtribute => getAttribute = <b>${valorInputMod}</b>`);
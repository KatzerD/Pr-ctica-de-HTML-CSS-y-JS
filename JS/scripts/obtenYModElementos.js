/* 
__Obtencion y modificacion de elementos___

    -textContent: devuelve el texto de cualquier nodo

    -innerHTML:devuelve el contenido html de un elemento
    -outerHTML: devuelve el codigo HTML completo del elemento
*/

const texto1 = document.querySelector(".texto1");
const texto2 = document.querySelector(".texto2");
const texto3 = document.querySelector(".texto3");

alert(texto1.textContent);
alert(texto2.innerHTML);
alert(texto3.outerHTML);
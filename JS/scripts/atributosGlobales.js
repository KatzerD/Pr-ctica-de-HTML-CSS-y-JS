/* 
___Atributos Globales___

    Todos los elementos html contienen estos atributos por defecto aunque no aparezcan definidos

    -class: lista de clases del elemento separadas por espacios
    -contenteditable: indica si el elemento puede ser modificable por el usuario(bool)
    -dir: indica la direccionalidad del texto
    -hidden: indica si elemento aun no es, o ya no es, relevante, lo oculta
    -id: define un identificador unico
    -style: contiene declaraciones de estilo CSS para ser aplicadas al elemento
    -tabindex: indica si el elemento puede obtener un focus de input
    -title: contieme un texto con informacion relacionada al elemento al que pertence
*/


const tituloEdit = document.querySelector(".titulo");

tituloEdit.setAttribute("contenteditable", true);
/* Primer parametro la clase contenteditable y la segunda un valor booleano */


const direccionMod = document.querySelector(".direccion");

direccionMod.setAttribute("dir", "rtl");
/* Primer parametro la clase dir y el segundo uno de tres valores; ltr(left to right), rtl(rigth to left) o auto */


const ocultar = document.querySelector(".oculto");

ocultar.setAttribute("hidden", true);
/* Priemer parametro la clase hidden y el segundo un valor booleano */


const textoTab = document.querySelector(".tab");

textoTab.setAttribute("tabindex", 1);
/* Primer parametro la clase tabindex y el segundo la posicion en el index del tabulador */


const tituloCursor = document.querySelector(".tituloCursor");

tituloCursor.setAttribute("title", "Titulo de JavaScript");
/* Primer parametro la clase title y el segundo el texto que se desea mostrar al mantener el cursor encima del elemento */

/* El DOM en Javascript

___Metodos de seleccion de Elementos___

*document.

    -getElementById("nombreDelId"): se utiliza para seleccionar el contenido dentro de un elemento html que tenga como atributo dicho id, solo debe haber un elemento en el html con ese id
    -getElementByTagName("nombreDeEtiqueta"): se creara una lista con todos los elementos html que pertenezcan a esa etiqueta, asi como el contenido de cada uno de estos
    -querySelector("./# + nombreDelSelector"): al igual que en css se utiliza el . o el # para indicar el timpo de elemento que se estara seleccionando, el . para clases y el # para id, para los id es mejor utilizar el primer getElementById(), devuelve el primer elemento que coincida con el grupo especificado de selectores
    -querySelectorAll("./# + nombreDelSelector"): igual que el querySelector() pero este devuelve todos los elementos que coincidan con el grupo especificado de selectores, y los almacena en una lista.
*/

let tituloH1 = document.getElementById("titulo");

document.write("<b>Titulo h1:</b> " + tituloH1 + "<br><br>");



let parrafoP = document.getElementsByTagName("p");

document.write("<b>Parrafos p:</b> " + parrafoP + "<br>");
document.write("<b>Un parrafo de los p:</b> " + parrafoP[0] + "<br><br>");

    

let bloquesDiv = document.querySelectorAll(".bloque");
let bloqueDiv = document.querySelector(".bloque");

document.write("<b>Clases div con . :</b> " + bloquesDiv + "<br>");
document.write("<b>Primera div con . :</b> " + bloqueDiv + "<br>");



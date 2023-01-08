/* 
___Creacion de elementos___

    -createElements():
    -createTextNode():
    -appendChild():
    -createDocumentFragment():
    
*/

const contenedor = document.querySelector(".contenedor");


const textoItem = document.createTextNode("Elemento de la lista");

const fragmento = document.createDocumentFragment();


for (let i = 0; i < 20; i++){   
    const item = document.createElement("LI");
    item.innerHTML = "Elemento de la lista";
    fragmento.appendChild(item)
}


contenedor.appendChild(fragmento);

console.log(contenedor);


/* 
__Obtencion y modificacion de Childs___
    -firstChild
    -lastChild
    -firstElementChild
    -ChildNodes
    -children
*/

/* 
___Metodos de Childs___
    -replaceChild()
    -removeChild()
    -hasChildNodes()
*/

/* 
___Propiedades de parents___
    -parentElement
    -parentNode
*/

/* 
___Propiedades de Siblings(hermanos)___
    -nextSibling
    -previusSibling
    -nextElementSibling
    -previousElementSiblinf
*/

/* 
___Nodes-Extra___
    -closest()
*/
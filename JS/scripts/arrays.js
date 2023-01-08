/* Arrays
    Formas de declarar un array:

        -let nombreDelArray = [elemento1 , elemento2 , elementoN...]

    --------------------------puto-------------------------------
    -------------------------te amo------------------------------ 

    Llamar un elemento de una posicion de un array":

        -nombreDelArray[posicion]; las posiciones en los arrays empizan desde el 0.    
        
    
    Declarar un Array asociativo
        
        -let nombreDelArray = {
            nombreDelElemento: "elemento1",
            nombreDelElemento: "elemento2",
            nombreDelElemento: "elementoN"
        }
        
    Llamar un Array Asociativo
        
        nombreDelArray["nombreDelElemento"];
*/

let informacion = ["Enrique", "Daniel", "Centurion", "Katzer"]

document.write(`Mi nombre es:  ${informacion[0]} ${informacion[1]} <br>Mi apellido es: ${informacion[2]} ${informacion[3]}<br><br>`);



let miPC = {
    nombre: "KatzerPC",
    procesador: "Intel i3",
    ram: "6GB",
    espacio: "500GB"
}

document.write(`Estos son las especificaciones de mi PC:
<br> Nombre: <b>${miPC["nombre"]}</b>
<br> Procesador: <b>${miPC["procesador"]}</b>
<br> Ram: <b>${miPC["ram"]}</b>
<br> Espacio de almacenamiento: <b>${miPC["espacio"]}</b>`)

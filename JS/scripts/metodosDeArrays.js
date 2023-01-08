/* Metodos de Arrays
    ____Transformadores____
    -pop(): elimina el ultimo elemento del array y nos lo retorna
    -shift: elimina el primer elemento del array y nos lo retorna
    -push(): nos agrega un elemento indicado al array y nos retorna la cantidad nueva de elementos en el array
    -reverse(): nos invierte el array, su return es el mismo array invertido
    -unshift(): nos agrega elementos indicados al inicio de un array y nos retorna la cantidad nueva de elementos en el array
    -sort(): nos ordena un array en el orden lexicografico
    -splice(): es uno de los modificadores mas complejos y completos a la vez, nos permite eliminar elementos de un array indicando como parametros de que posicion del array comenzar a eliminar y cuantos eliminar, agregando un tercer o mas parametros reemplazamos los elementos eliminados por estos parametros. Este metodo nos retorna los elementos eliminados
*/
let resultado;
let array = [" Enrique", " Daniel", " Centurion", " Katzer"];

document.write("<h3>Metodos Transformadores</h3>");
{
    document.write(`> Array Original: <b>${array}</b><br>`);

    resultado = array.pop();

    document.write(`> Elemento eliminado: <b style = "color:red">${resultado}</b><br>`);
    document.write(`> Array modificado: <b>${array}</b><br><br>`);
}


{
    document.write(`> Array Original: <b>${array}</b><br>`);

    resultado = array.shift();

    document.write(`> Elemento eliminado: <b style = "color:red">${resultado}</b><br>`);
    document.write(`> Array modificado: <b>${array}</b><br><br>`);
}
    

{
    array = [" Enrique", " Daniel", " Centurion"];
    document.write(`> Array Original: <b>${array}</b><br>`);

    resultado = array.push(" Katzer");

    document.write(`> Posicion del elemento agregado: <b style = "color:blue">${resultado}</b><br>`);
    document.write(`> Array modificado: <b>${array}</b><br><br>`);
}


{
    array = [" Enrique", " Daniel", " Centurion", " Katzer"];
    document.write(`> Array Original: <b>${array}</b><br>`);

    resultado = array.reverse();

    document.write(`> Return del reverse: <b style = "color:blue">${resultado}</b><br>`);
    document.write(`> Array modificado: <b>${array}</b><br><br>`);
}


{
    array = [" Centurion", " Katzer"];
    document.write(`> Array Original: <b>${array}</b><br>`);

    resultado = array.unshift("Enrique"," Daniel");

    document.write(`> Return del unshift: <b style = "color:blue">${resultado}</b><br>`);
    document.write(`> Array modificado: <b>${array}</b><br><br>`);
}

{
    array = [" Enrique", " Daniel", " Centurion", " Katzer"];
    document.write(`> Array Original: <b>${array}</b><br>`);

    resultado = array.sort();

    document.write(`> Return del sort: <b style = "color:blue">${resultado}</b><br>`);
    document.write(`> Array modificado: <b>${array}</b><br><br>`);
}

{
    array = [" Enrique", " Daniel", " Centurion", " Katzer"];
    document.write(`> Array Original: <b>${array}</b><br>`);

    resultado = array.splice(1,2," Gael"," Wottrich");

    document.write(`> Elementos eliminados: <b style = "color:blue">${resultado}</b><br>`);
    document.write(`> Array modificado: <b>${array}</b><br><br>`);
}


/* ____Accesores____
    -join(): nos convierte un array en una cadena de texto, pero a diferencia de toString, podemos indicarle la separacion que tendra cada elemento del array al convertirse en cadena de texto
    -slice(): devuelve una parte del array dentro de un nuevo array empezando por inicio hasta el fin(sin incluir el ultimo);
    -metodos de cadena: toString(), indexOf(), lastIndexOf(), includes() pero teniendo en cuenta el elemento entero y no por caracteres
*/

document.write("<h3>Metodos Accesores</h3>");


{
    array = [" Enrique", " Daniel", " Centurion", " Katzer"];
    document.write(`> Array Original: <b>${array}</b><br>`);

    resultado = array.join(" - ");

    document.write(`> Return del join(): <b style = "color:blue">${resultado}</b><br><br>`);
}

{
    array = [" Enrique", " Daniel", " Centurion", " Katzer"];
    document.write(`> Array Original: <b>${array}</b><br>`);

    resultado = array.slice(2,4);

    document.write(`> Return del slice(): <b style = "color:blue">${resultado}</b><br><br>`);
}

{
    array = [" Enrique", " Daniel", " Centurion", " Katzer"];
    document.write(`> Array Original: <b>${array}</b><br>`);

    resultado = array.toString();

    document.write(`> Return del toString(): <b style = "color:blue">${resultado}</b><br>`);

    resultado = array.indexOf(" Enrique");
    document.write(`> Return del indexOf(): <b style = "color:blue">${resultado}</b><br>`);

    resultado = array.lastIndexOf(" Centurion");
    document.write(`> Return del lastIndexOf(): <b style = "color:blue">${resultado}</b><br>`);

    resultado = array.includes(" Katzer");
    document.write(`> Return del includes(): <b style = "color:blue">${resultado}</b><br>`);
}

/* ___De Repeteicion__
    -forEach(): ejecuta la funcion indicada una vez por cada elemento del array, recibe como parametro una funcion y se ejecuta como un bucle, tomando como valor return de esa funcion asignada cada elemento del array

    -filter():realiza lo mismo que un forEach() pero a filter() se le puede asignar una condicion para que tome solo los elementos que cumplan con dicha condicion.
    
*/

document.write("<h3>Metodos de Repeticion</h3>");

{
    array = ["Enrique", "Daniel", "Centurion", "Katzer"];
    document.write(`> Array Original: <b>${array}</b><br>`);

    resultado = array.forEach(nombres => document.write("- " + nombres + "<br>"));
    document.write(`> Variable Resultado: <b>${resultado}</b><br>`);
}

{
    array = ["Enrique", "Daniel", "Centurion", "Katzer"];
    document.write(`<br>> Array Original: <b>${array}</b><br>`);

    resultado = array.filter(numero => numero.length >6);
    document.write(`> Variable Resultado: <b>${resultado}</b><br>`);

}


/* Console
___Funciones De Registro => console.---();___ 
    -assert(): Aparece un mensaje de error en la consola si la afirmacion es falsa, sino, no ocurre nada(no estandar)
    -clear(): Limpia la consola
    -error(): Muestra un mensaje de error en la consola web
    -info(): Emite un mensaje informativo a la consola web, dependiendo de el navegador se muestra de manera diferente
    -log(): Muestra un mensaje en la consola o interprete
    -table(): Esta funcion toma un argumento obligatorio(data), que debe ser un array o un objeto, y un parametro adicional(columns) y nos muestra una tabla en la consola
    -warn(): Imprime un mensaje de advertencia en la consola web
    -dir() despliega una lista interactiva de las propiedades del objeto JavaScript especificado(No Estandar)
*/

console.clear();

console.assert(5 < 3);

console.error("Ha ocurrido un error :(");

console.info("Esto es una informacion");

console.log("Esto es un texto");

console.table([5, 8, 9, 4, 2, 5, 6, 9]);

console.warn("Esto es una advertencia");

console.dir(Object)

/* 
___Funciones De Conteo => console.---();___ 
    -count(): registra el numero de veces que se llama a count(). Esta funcion toma como argumento opcional una etiqueta.
    -countReset(): resetea el contador console.count()
*/

console.count();
console.count();
console.count();
console.count();
console.count();


console.countReset();

/* 
___Funciones De Agrupacion => console.---();___
    -group(): abre un nuevo grupo en line en el registro de la consola web, se le puede poner un nombre entre comillas dentro del parentesis
    -groupEnd(): Cierra un grupo en linea en el registro de a consola web
    -groupCollapsed(): Crea un grupo en linea pero contraido, el usuario debe expandirlo para verlo
*/

console.group("Animales")
{
    console.log("perro");
    console.log("gato");
    console.log("caballo");
    console.log("liebre");
    console.log("pajaro");
    

    console.groupCollapsed("Frutas")
    {
        console.log("banana");
        console.log("pera");
        console.log("manzana");
        console.log("frutilla");
        console.log("sandia");

    }
    console.groupEnd();


}/* Las llaves no son necesarias */
console.groupEnd();


/* 
___Funciones de temporizacion => console.---();___
    -time(): desde el momento en que llamamos esta funcion se inicia un temporizador dentro de la consola
    -timeLog(): una vez iniciado el temporizador, usando esta funcion podemos saber cuanto tiempo transcurrio desde que inicio el time() hasta el momento en que llamamos timeLog()
    -timeEnd(): con esta funcion detenemos el temporizador y nos devuelve todo el tiempo transcurrido
*/

console.time();


console.timeLog();


console.timeEnd();

/* 
___Modidicar el estilo del texto___

    ("%cTextoAqui","EstilosDeCssAqui; SeparadosPorPuntoYComa");
*/

console.log("%cEste mensaje esta estilizado", "color:red; background:#111; padding:20px 100px; border:3px solid red; font-family:cursive");
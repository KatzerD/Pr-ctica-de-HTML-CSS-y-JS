/* Metodos de cadena
    -concat(): junta dos o mas cadenas y retorna una nueva
    -startsWith(): si una cadena comienza con los caracteres de otra cadena, devuelve true, sino false
    -endsWith(): Si una cadena termina con los caracteres de otra cadena, devuelve true, sino false
    -includes(): si una cadena puede encontrarse dentro de otra cadena, devuelve true, sino false
    -indexOf(): devuelve el indice del primer caracter de la cadena, si no existe, devuelve -1
    -lastIndexOf(): devuelve el ultimo indice del primer caracter de la cadena, si no existe, devuelve -1
    
    -padStart(): Rellenar cadena al principio con los con los caracteres deseados
    -padEnd(): Rellenar cadena al final con los caracteres deseados
    -repeat(): Devuelve la misma cadena pero repetida la cantidad de veces deseada

    -split(): Divide la cadena como la pidamos, convirtiendola en array.
    -substring(): Nos retorna un pedazo de la cadena que seleccionamos
    -toLowerCase(): Convierte una cadena a minuscila
    -toUpperCase(): Convierte una cadena a mayuscula
    -toString(): Convierte un dato a string(numero, array, booleano, etc)
    -trim(): Elimina los espacios del principio y final de un string
    -trimStart(): Elimina los espacios del principio de un string
    -trimEnd(): ELimina los espacios del final de un string
*/

let resultado;

let cadena = "Hola mundo. Mi nombre es Enrique. ";

resultado = cadena.concat(", Hey...");
document.write(resultado + "<br><br>");

resultado = cadena.startsWith("Hola")
document.write(resultado + "<br><br>");

resultado = cadena.endsWith("Hey...");
document.write(resultado + "<br><br>");

resultado = cadena.includes("la mun");
document.write(resultado + "<br><br>");

resultado = cadena.indexOf(" ");
document.write(resultado + "<br><br>");

resultado = cadena.lastIndexOf(" ");
document.write(resultado + "<br><br>");

resultado = cadena.padStart(50, "Hey... ");
document.write(resultado + "<br><br>");

resultado = cadena.padEnd(50, "Hey... ");
document.write(resultado + "<br><br>");

resultado = cadena.repeat(2);
document.write(resultado + "<br><br>");

resultado = cadena.split(".");
document.write(resultado + "<br>");
document.write(resultado[1] + "<br><br>");

resultado = cadena.substring(0, 11);
document.write(resultado + "<br><br>");

resultado = cadena.toLowerCase();
document.write(resultado + "<br><br>");

resultado = cadena.toUpperCase();
document.write(resultado + "<br><br>");

cadena=["Hola Mundo.", "Mi nombre es Enrique"]
resultado = cadena.toString();
document.write(resultado[0] + "<br><br>");

cadena = "       Hola mundo. Mi nombre es Enrique.     ";
resultado = cadena.trim();
document.write(resultado + resultado.length + "caracteres<br><br>");

resultado = cadena.trimStart();
document.write(resultado + resultado.length + "caracteres<br><br>");

resultado = cadena.trimEnd();
document.write(resultado + resultado.length + "caracteres<br><br>");

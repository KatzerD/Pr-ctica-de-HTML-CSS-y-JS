/* Variables en JavaScript

Tipos de Datos: 

    -string: es una cadena de textos, y para definirla podemos utilizar comillas dobles "", comillas simples '' o backtip ``

    -number: se define simplemente escribiendo el numero sin comillas de ninguntipo

    -boolean: se define con una de dos posibilidades, true o false

    Otros valores:

    -undefine: significa que la variable no esta definida
    -null: la variable esta definida pero esta vacia
    -NaN: significa que la variable no es un numero, ocurre por ejemplo cuando multiplicamos strings
    
Los tipos de datos en JS son dinamicos, es decir que no es necesario declarar el tipo de dato, el lenguaje lo detecta automaticamente
*/


frase = "Buenas tarder"; /* String */

numero = 3.14; /* Number */

validez = true; /* Boolean */

alert(frase);/*alert() despliega una ventana emergente */
alert(numero);
alert(validez);


/*Tipos de Variables:

    -var:  define una variable global o local en una función sin importar el ámbito del bloque.

    -let:permite declarar variables limitando su alcance al bloque, declaración, o expresión donde se está usando

    -const: es una constante, su valor no va a cambiar a lo largo de la ejecucion.
*/


var nombre = "Enrique";

let apellido;
apellido = "Centurion";

const cI = 4968507;/*A diferencia de var y let, const debe definirse al momento de declarar la variable y no debe modificarse */

document.write(nombre);/*document.write() escribe en el documento*/
document.write(apellido);
document.write(cI);

/* prompt():
    Es como alert pero deja una caja de texto para ingresar texto
*/

let nombre2 = prompt("Decime tu nombre")
alert("Bienvenido " + nombre2)/*Esto es una concatenacion de strings*/

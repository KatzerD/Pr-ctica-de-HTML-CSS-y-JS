/* Operadores de asignacion
    -asignacion: x = y
    -asignacion de adicion: x += y 
    -asignacion de sustraccion: x -= y
    -asignacion de multiplicacion: x *= y
    -asignacion de division: x /= y
    -asignacion de resto: x %= y
    -asignacion de exponenciacion: x **=y    
*/

document.write("<h2>Operadores de asignacion</h2>")

let x = 20;
let y = 2;
x = y;
document.write("x = " + x);

x = 20;
y = 2;
x += y;
document.write("<br> x = " + x);

x = 20;
y = 2;
x -= y;
document.write("<br> x =" + x);

x = 20;
y = 2;
x *= y;
document.write("<br> x =" + x);

x = 20;
y = 2;
x /= y;
document.write("<br> x =" + x);

x = 20;
y = 2;
x %= y;
document.write("<br> x =" + x);

x = 20;
y = 2;
x **= y;
document.write("<br> x =" + x);


/* Operadores aritmeticos
    -adicion: +
    -substraccion: -
    -division: /
    -multiplicacion: * 
    -resto: %
    -decrement: --
    -increment: ++
    -exponenciacion: **
    -unary negation: -
*/

document.write("<h2>Operadores aritmeticos</h2>")

x = 10;
y = 5;
resultado = x + y;
document.write("resultado = " + resultado);

x = 10;
y = 5;
resultado = x - y;
document.write("<br>resultado = " + resultado);

x = 10;
y = 5;
resultado = x * y;
document.write("<br>resultado = " + resultado);

x = 10;
y = 5;
resultado = x / y;
document.write("<br>resultado = " + resultado);

x = 10;
y = 5;
resultado = x % y;
document.write("<br>resultado = " + resultado);

x = 10;
x--;
resultado = x;/* para el decremento e incremento la operacion se debe realizar a parte */
document.write("<br>resultado = " + resultado);

x = 10;
x++;
resultado = x;/* para el decremento e incremento la operacion se debe realizar a parte */
document.write("<br>resultado = " + resultado);

x = 10;
y = 5;
resultado = x ** y;/* en la exponenciacion el valor del lado derecho sera el exponente */
document.write("<br>resultado = " + resultado);

x = 10;
document.write("<br> resultado = " + -x);


/* Concatenacion
    Podemos concatenar variables utilizando el signo +
    Para concatenar numeros con el signo + en lugar de sumarlos debemos forzar la concatenacion con un string. ej.:("" + 9 + 4), con el metodo concat o con backtips y ${} 

    El escape de comillas consta simplemente de utilizar otro tipo de comillas para que no interfieran con las de apertura y cierre del string
*/

document.write("<h2>Concatenacion</h2>");

nombre = "Enrique ";
apellido = "Centurion";
frase = nombre + apellido;
document.write("Concatenacion de strings con + : " + frase);

num1 = 5;
num2 = 5;
frase = "" + num1 + num2;
document.write("<br>Concatenacion con de numeros con + : " + frase);

num1 = 5;
num2 = 5;
frase = `${num1}${num2}`
document.write("<br> Concatenacion con ${}: " + frase);
/* Los backtips tienen propiedeades especiales que no poseen las comillas, como por ejemplo que con los backtips podemos insertar codigo html y que estos pueden operarse en varias lineas hasta que se cierren */



/* Operadores de comparacion
    -equality: x == y
    -inequality: x != y
    -identity: x === y
    -non-identity: x !== y
    -mayor que: x > y
    -mayor o igual: x >= y
    -menor que: x < y
    -menor o igual: x <=y
*/

document.write("<h2>Operadores de comparacion</h2>");

x = "10"
y = 10

document.write(x == y);

document.write("<br>" + (x != y));

document.write("<br>" + (x === y));

document.write("<br>" + (x !== y));

document.write("<br>" + (x > y));

document.write("<br>" + (x >= y));

document.write("<br>" + (x < y));

document.write("<br>" + (x <= y));

/* Operadores logicos
    - AND: X && Y
    - OR: X || Y
    - NOT: !X

    Siendo x e y true o false
*/

document.write("<h2>Operadores logicos</h2>");

x = true;
y = false;

validez = x && y;
document.write(validez);

validez = x || y;
document.write("<br>" + validez);

validez = !y;
document.write("<br>" + validez);


document.write('<br><br> <a href="Condicionales.html"><button>Siguiente</button></a>')

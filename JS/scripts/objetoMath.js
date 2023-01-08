/* Objeto Math
    ___ Metodos => math.---();___
    -sqrt(): Devuelve la raiz cuadrada positiva de un numero
    -cbrt(): Devuelve la raiz cubica de un numero
    -max(): Devuelve el mayor numero de los que se ingresen como parametro
    -min(): Devuelve el menor numero de los que se inresen como parametros
    -random(): Devuelbe un numero aleatorio entre 0 y 1, si queremos que sean valores enteros basta con multiplicar el resultado por el limite del random
    -round(): Devuelve el valor de un numero redondeado al numero entero mas cercano
    -fround(): Devuelve la representacion flotante de precision simple mas cercana de un numero
    -floor(): Devueve ek mayor entero menor que o igual a un numero
    -trunc(): Devuelve la parte entera del numero x, la eliminacion de los digitos fraccionarios
*/
document.write("<h3>____Metodos del objeto Math____</h3>");

let resultado;

{
    resultado = Math.sqrt(25);
    document.write(`> math.sqrt(25) > Resultado: <b>${resultado}</b><br><br>`);
}

{
    resultado = Math.cbrt(8);
    document.write(`> math.cbrt(8) > Resultado: <b>${resultado}</b><br><br>`);
}

{
    resultado = Math.random()*100;
    document.write(`> math.random()*100 > Resultado es: <b>${resultado}</b><br><br>`);
}

let redondeado;

{
    redondeo = Math.round(resultado);
    document.write(`> math.random()*100 > math.round() > Resultado: <b>${redondeo}</b><br><br>`);
}

{
    redondeo = Math.fround(resultado);
    document.write(`> math.random()*100 > math.fround() > Resultado: <b>${redondeo}</b><br><br>`);
}

{
    redondeo = Math.floor(resultado);
    document.write(`> math.random()*100 > math.floor() > Resultado: <b>${redondeo}</b><br><br>`);
}

{
    redondeo = Math.trunc(resultado);
    document.write(`> math.random()*100 > math.trunc() > Resultado: <b>${redondeo}</b><br><br>`);
}

/*  ___ Propiedads => math.---;___
    -PI: ratio de la circunferencia de un circulo respecto a su diametro
    -SQRT1_2: Raiz cuadrada de 1/2
    -SQRT2: Raiz cuadrada de 2
    -E: Constante de Euler, base de los logaritmos naturales
    -LN2: Logaritmo natural de 2
    -LN10: Logaritmo natural de 10
    -LOG2E: Logaritmo de E con base 2
    -LOG10E: Logaritmo de E con base 10

    Estas propiedades dan como resultado en funcion del metodo fround.
*/
document.write("<h3>____Propiedades del objeto Math____</h3>");

{
    resultado = Math.PI;
    document.write(`> math.PI > Resultado: <b>${resultado}</b><br><br>`);
}

{
    resultado = Math.SQRT1_2;
    document.write(`> math.SQRT1_2 > Resultado: <b>${resultado}</b><br><br>`);
}

{
    resultado = Math.SQRT2;
    document.write(`> math.SQRT2 > Resultado: <b>${resultado}</b><br><br>`);
}

{
    resultado = Math.E;
    document.write(`> math.E > Resultado: <b>${resultado}</b><br><br>`);
}

{
    resultado = Math.LN2;
    document.write(`> math.LN2 > Resultado: <b>${resultado}</b><br><br>`);
}

{
    resultado = Math.LN10;
    document.write(`> math.LN10 > Resultado: <b>${resultado}</b><br><br>`);
}

{
    resultado = Math.LOG2E;
    document.write(`> math.LOG2E > Resultado: <b>${resultado}</b><br><br>`);
}

{
    resultado = Math.LOG10E;
    document.write(`> math.LOG10E > Resultado: <b>${resultado}</b><br><br>`);
}
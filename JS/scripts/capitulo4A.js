/* Calculadora mejorada
    -A la calculadora anterior agregarle las funcionalidades de potenciar, raiz cuadrada y raiz cubica 
*/
class Calculadora{
    static suma(_x, _y) {
        return parseInt(_x) + parseInt(_y);
    }
    static resta(_x, _y) {
        return parseInt(_x) - parseInt(_y);
    }
    static mult(_x, _y) {
        return parseInt(_x) * parseInt(_y);
    }
    static div(_x, _y) {
        return parseInt(_x) / parseInt(_y);
    }
    static potencia(_x, _y) {
        return _x ** _y;
    }
    static raizCuad(_x) {
        return Math.sqrt(_x);
    }
    static raizCubic(_x) {
        return Math.cbrt(_x);
    }
}

let check;
let resultado;

do {

    let operacion = prompt(`Selecciona una operacion a realizar
    \n1. Suma
    \n2. Resta
    \n3. Multiplicacion
    \n4. Division
    \n5. Potenciar
    \n6. Raiz Cuadrada
    \n7. Raiz Cubica`);

    if (operacion != undefined && operacion != "") {
        if (operacion == 6 || operacion == 7) {

            x = prompt("Digite el numero a operar");

            if (operacion == 6) {
                resultado = alert(`El resultado de la raiz cuadrada de ${x} = ${Calculadora.raizCuad(x)}`);
            } else if (operacion == 7) {
                resultado = alert(`El resultado de la raiz cubica de ${x} = ${Calculadora.raizCubic(x)}`);
            }

        } else {

            x = prompt("Digite el primer numero a operar");
            y = prompt("Digite el segundo numero a operar");

            if (operacion == 1) {
                resultado = alert(`El resultado de la suma de ${x} + ${y} = ${Calculadora.suma(x, y)}`);
            } else if (operacion == 2) {
                resultado = alert(`El resultado de la resta de ${x} - ${y} = ${Calculadora.resta(x, y)}`);
            } else if (operacion == 3) {
                resultado = alert(`El resultado de la multiplicacion de ${x} * ${y} = ${Calculadora.mult(x, y)}`);
            } else if (operacion == 4) {
                resultado = alert(`El resultado de la division de ${x} / ${y} = ${Calculadora.div(x, y)}`);
            }

        }
    }
        
    

    check = prompt("Desea seguir realizando operaciones? S/N")

} while (check == "s" || check == "S")

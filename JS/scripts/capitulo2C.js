const suma = (_x, _y) => {
    return parseInt(_x) + parseInt(_y);
}
const resta = (_x, _y) => {
    return parseInt(_x) - parseInt(_y);
}
const mult = (_x, _y) => {
    return parseInt(_x) * parseInt(_y);
}
const div = (_x, _y) => {
    return parseInt(_x) / parseInt(_y);
}

let check;
let resultado;
do {
    let operacion = prompt(`Selecciona una operacion a realizar
    \n1.Suma
    \n2.Resta
    \n3.Multiplicacion
    \n4.Division`);

    x = prompt("Digite el primer numero");
    y = prompt("Digite el segundo numero");
    
    if (operacion == 1) {
        resultado = alert(`El resultado de la suma de ${x} + ${y} = ${suma(x, y)}`);
    }else if(operacion == 2){
        resultado = alert(`El resultado de la resta de ${x} - ${y} = ${resta(x, y)}`);
    } else if (operacion == 3) {
        resultado = alert(`El resultado de la multiplicacion de ${x} * ${y} = ${mult(x, y)}`);
    } else if (operacion == 4) {
        resultado = alert(`El resultado de la division de ${x} / ${y} = ${div(x, y)}`);
    }

    check = prompt("Desea seguir realizando operaciones? S/N")
} while (check == "s" || check == "S")

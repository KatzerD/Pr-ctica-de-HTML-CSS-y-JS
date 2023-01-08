/* El vagabundo y los voletos
    Precio de un boleto: 1$ 
*/

let dinero = parseFloat(prompt("Cuanto dinero le dio Cofla al vagabundo?"));

let vuelto;

if (dinero >= 3) {
    boletos = 3;
    vuelto = dinero - 3;
    if (vuelto > 0) {
        alert("El vagabundo consiguio comprarse 3 boletos de loteria y regalo su vuelto de " + vuelto + "$");
    } else {
        alert("El vagabundo consiguio comprarse 3 boletos de loteria");
    }
} else if (dinero >= 2) {
    boletos = 2;
    vuelto = dinero - 2;
    alert("El vagabundo consiguio comprarse 2 boletos de loteria");
} else if (dinero > 1) {
    boletos = 1;
    vuelto = dinero - 1;
    alert("El vagabundo consiguio comprarse 1 boletos de loteria");
} else {
    vuelto = 0;
    alert("Lastimosamente no le alcanzo para ningun boleto de loteria")
}

document.write("Cantidad de boletos comprados: " + boletos + "<br>" + "Vuelto: " + vuelto);



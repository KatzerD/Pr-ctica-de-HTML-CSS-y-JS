/* Cofla y la heladeria
    Precio de los helados

        -helado de agua: 0.5$
        -helado de crema: 0.8$
        -helado de fresa: 1$
        -helado de vainilla: 1$
        -helado de chocolate: 1$
        -helado de frutas a base de agua: 1.5$
        -Paleta de helado rellena: 2$
        -helado de acai: 2.5$
        -1/4 de helado: 3$
*/

let dineroCofla = parseFloat(prompt("Bienvenido Cofla \nCuanto dinero deseas gastar?"));
let dineroPepe = parseFloat(prompt("Bienvenido Pepe \nCuanto dinero deseas gastar?"));
let dineroJose = parseFloat(prompt("Bienvenido Jose \nCuanto dinero deseas gastar?"));

if (dineroCofla >= 3) {
    document.write("Cofla: Compra 1/4 de helado y tu vuelto sera " + (dineroCofla - 3) + "$")
} else if (dineroCofla >= 2.5) {
    document.write("Cofla: Compra helado de acai y tu vuelto sera " + (dineroCofla - 2.5) + "$")
}
else if (dineroCofla >= 2) {
    document.write("Cofla: Compra paleta rellena y tu vuelto sera " + (dineroCofla - 2) + "$")
} else if (dineroCofla >= 1.5) {
    document.write("Cofla: Compra helado de frutas y tu vuelto sera " + (dineroCofla - 1.5) + "$")
} else if (dineroCofla >= 1) {
    document.write("Cofla: Compra un helado de fresa, vainilla o chocolate y tu vuelto sera " + (dineroCofla - 1) + "$")
} else if (dineroCofla >= 0.8) {
    document.write("Cofla: Compra helado de crema y tu vuelto sera " + (dineroCofla - 0.8) + "$")
} else if (dineroCofla >= 0.5) {
    document.write("Cofla: Compra helado de acai y tu vuelto sera " + (dineroCofla - 0.5) + "$")
} else {
    document.write("Lo siento Cofla, no te alcanza para ningun helado")
}

document.write("<br><br>")


if (dineroPepe >= 3) {
    document.write("Pepe: Compra 1/4 de helado y tu vuelto sera " + (dineroPepe - 3) + "$")
} else if (dineroPepe >= 2.5) {
    document.write("Pepe: Compra helado de acai y tu vuelto sera " + (dineroPepe - 2.5) + "$")
}
else if (dineroPepe >= 2) {
    document.write("Pepe: Compra paleta rellena y tu vuelto sera " + (dineroPepe - 2) + "$")
} else if (dineroPepe >= 1.5) {
    document.write("Pepe: Compra helado de frutas y tu vuelto sera " + (dineroPepe - 1.5) + "$")
} else if (dineroPepe >= 1) {
    document.write("Pepe: Compra un helado de fresa, vainilla o chocolate y tu vuelto sera " + (dineroPepe - 1) + "$")
} else if (dineroPepe >= 0.8) {
    document.write("Pepe: Compra helado de crema y tu vuelto sera " + (dineroPepe - 0.8) + "$")
} else if (dineroPepe >= 0.5) {
    document.write("Pepe: Compra helado de acai y tu vuelto sera " + (dineroPepe - 0.5) + "$")
} else {
    document.write("Lo siento Pepe, no te alcanza para ningun helado")
}


document.write("<br><br>")


if (dineroJose >= 3) {
    document.write("Jose: Compra 1/4 de helado y tu vuelto sera " + (dineroJose - 3) + "$")
} else if (dineroJose >= 2.5) {
    document.write("Jose: Compra helado de acai y tu vuelto sera " + (dineroJose - 2.5) + "$")
}
else if (dineroJose >= 2) {
    document.write("Jose: Compra paleta rellena y tu vuelto sera " + (dineroJose - 2) + "$")
} else if (dineroJose >= 1.5) {
    document.write("Jose: Compra helado de frutas y tu vuelto sera " + (dineroJose - 1.5) + "$")
} else if (dineroJose >= 1) {
    document.write("Jose: Compra un helado de fresa, vainilla o chocolate y tu vuelto sera " + (dineroJose - 1) + "$")
} else if (dineroJose >= 0.8) {
    document.write("Jose: Compra helado de crema y tu vuelto sera " + (dineroJose - 0.8) + "$")
} else if (dineroJose >= 0.5) {
    document.write("Jose: Compra helado de acai y tu vuelto sera " + (dineroJose - 0.5) + "$")
} else {
    document.write("Lo siento Jose, no te alcanza para ningun helado")
}
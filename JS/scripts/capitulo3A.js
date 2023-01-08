/* Cofla y los celulares
    Crear un sistema que le permita mostrar las especificaciones y probar las funciones basicas de una serie de 3 celulares
        -Los celulares deben tener Color, Peso, Tamaño, resolucion de pantalla, Calidad de Camara/Video , Memoria Ram
        -Los celulares deben poder Encender, Apagar, Reiniciar, Tomar Foto, Grabar un video
    Ademas crear mas 2 celulares de alta gama con funcionalidades extra
        -Grabar video en camara lenta, Reconocimiento Facial
*/

class Celular{
    constructor(marca, color, peso, tamaño, resPantalla, resCam, ram) {
        this.marca = marca;
        this.color = color;
        this.peso = peso;
        this.tamaño = tamaño;
        this.resolucionPantalla = resPantalla;
        this.resolucionCamara = resCam;
        this.memoriaRam = ram;
        this.encendido = false;
    }

    mobileInfo() {
        return `<h3>${this.marca}</h3><br>
        ___Color: <b>${this.color}</b><br>
        ___Peso: <b>${this.peso}</b><br>
        ___Tamaño: <b>${this.tamaño}</b><br>
        ___Resolucion de pantalla: <b>${this.resolucionPantalla}</b><br>
        ___Resolucion de camara: <b>${this.resolucionCamara}Mpx</b><br>
        ___Memoria RAM: <b>${this.memoriaRam}</b><br>`
    }

    power() {
        if (this.encendido == false) {
            alert("El celular prendio");
            this.encendido = true;
        } else {
            alert("El celular se apago");
            this.encendido = false;
        }
    }

    reiniciar() {
        if (this.encendido == false) {
            alert("Debes encender primero el celular");
        } else {
            this.encendido = false;
            this.encendido = true;
            alert("El celular se ha reiniciado");
        }
    }

    tomarFoto() {
        alert("El celular ha tomado una foto con una resolucion de " + this.resolucionCamara + "Mpx");
    }
    grabarVideo() {
        alert("El celular ha grabado un video con una resolucion de " + this.resolucionCamara + "Mpx");
    }
}

class AltaGama extends Celular{
    constructor(marca, color, peso, tamaño, resPantalla, resCam, ram, resCamExtra) {
        super(marca, color, peso, tamaño, resPantalla, resCam, ram);
        this.resCamaraExtra = resCamExtra;
    }

    altaGamaInfo() {
        return this.mobileInfo() +  `___Resolucion de camara extra: <b>${this.resCamaraExtra}Mpx</b><br>
        ___Reconocimiento Facial: <b>SI</b></br>`
    }

    grabarCamLenta() { 
        alert("El Celular grabo en camara lenta");
    }

    reconFacial() {
        alert("El Celular probo el reconocimiento facial contigo");
    }
}


const celular1 = new Celular('Motorola', 'Azul', '140gr', '4.6"', '800x480', '1.3', '2GB');
const celular2 = new Celular('Samsung', 'Gris', '150gr', '5"', '1280x720', '5', '4GB');
const celular3 = new Celular('Xiaomi', 'Azul', '155gr', '6"', '1920x1080', '8', '6GB');

const altaGama1 = new AltaGama('Iphone', 'Black', '145gr', '5.6"', '2K', '10', '6GB', '8')
const altaGama2 = new AltaGama('Xiaomi', 'White', '145gr', '6"', '4K', '20', '8GB', '8')


opcion = prompt("Seleccione uno de los celulares para hacer una prueba de calidad \n1.Motorola \n2.Samgsung \n3.Xiaomi \n4.Iphone ALta Gama \n5.Xiaomi Alta Gama")
if (opcion == 1) {
    celular1.power();
    celular1.reiniciar();
    celular1.tomarFoto();
    celular1.grabarVideo();
    celular1.power();
} else if (opcion == 2) {
    celular2.power();
    celular2.reiniciar();
    celular2.tomarFoto();
    celular2.grabarVideo();
    celular2.power();
} else if (opcion == 3) {
    celular3.power();
    celular3.reiniciar();
    celular3.tomarFoto();
    celular3.grabarVideo();
    celular3.power();
} else if (opcion == 4) {
    altaGama1.power();
    altaGama1.reiniciar();
    altaGama1.tomarFoto();
    altaGama1.grabarVideo();
    altaGama1.grabarCamLenta();
    altaGama1.reconFacial();
    altaGama1.power();
} else if (opcion == 5) {
    altaGama2.power();
    altaGama2.reiniciar();
    altaGama2.tomarFoto();
    altaGama2.grabarVideo();
    altaGama2.grabarCamLenta();
    altaGama2.reconFacial();
    altaGama2.power();
} else {
    alert("No seleccionaste ningun celular")
}

document.write(celular1.mobileInfo());
document.write(celular2.mobileInfo());
document.write(celular3.mobileInfo());

document.write(altaGama1.altaGamaInfo());
document.write(altaGama2.altaGamaInfo());

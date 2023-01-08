/* La programacion orientada a objetos
    La idea básica de la POO es que usamos objetos para modelar cosas del mundo real que queremos representar en nuestros programas, y/o proveemos una simple manera para acceder a la funcionalidad que, de otra manera, sería difícil o imposible de usar. 
    
    Para crear un objeto necesitaremos una clase a la que pertenecera dicho objeto. Dicha clase debera tener un constructor, que es un metodo(funcion) que lo que hara es construir nuestro objeto con los atributos que le asignemos a esta clase, ademas, la clase puede tener metodos de otros tipos que seran las acciones que realice nuestro objeto.

    Como crear una clase con atributos y metodos en POO:

        -class nombreDeLaClase{
            constructor(parametro1, parametro2...){
                this.atributo1 = parametro1;
                this.atributo2 = parametro2;
                ...
            }
            metodo1(){
                instruccionDelMetodo;
            }
        }

    De esta manera declaramos una clase

    Como instanciar un objeto a una clase:

        -const nombreDeObjeto = new nombreDeLaClase(parametros...);
        ...
    
    Como acceder a los atributos o metodos de una clase

        -nombreDeObjeto.atributo;

        -nombreDeObjeto.metodo();
    
    A continuacion un ejemplo de POO con animales
*/

class Animal {
    constructor(especie, edad, color) {/* Constructor */
        this.especie = especie;
        this.edad = edad;
        this.color = color;

        this.info = `Soy un ${this.especie}, tengo ${this.edad} años y soy de color ${this.color} <br>`;
    }

    verInfo() {/* Metodo */
        document.write(this.info);
    }
}

const gato = new Animal("gato", 5, "gris");
const pajaro = new Animal("pajaro", 1, "azul");

/*
document.write(perro.info);
document.write(gato.info);
document.write(pajaro.info); Acceso a los atributos
*/

gato.verInfo();
pajaro.verInfo();/* Acceso al metodo */


/* Caracteristicas de POO
    -Abstraccion: los parametros en poo deben ser lo mas abstractor posibles para que puedan englobar a la mayor cantidad de objetos
    -Modularidad: en poo se trabaja con varios modulos, es dividir las instrucciones en partes para tener un codigo mas legible y practico
    -Encapsulamiento: las clases son privadas y se limita el acceso a los objetos que pertenezcan a esas clases
    -Polimorfismo: se trata de hacer que cada objete dependiendo de sus particularidades se comporte de manera un tanto distinta a la clase que los engloba
    
    Otras caracteristicas de POO con palabras reservadas
    
        -Herencia:La herencia se basa en crear una clase "hija" que heredara las caracteristicas de una clase "padre" y a esta clase hija se le pueden atribuir otras propiedades mas particulares
        
        Como crear una clase hija:

            class NombreDeHija extends NombreDePadre{
                constructor (parametrosDePadre..., parametrosExtra){
                    super(atributosDePadre);  [El super se utiliza para enviar los parametros del objeto a la clase padre]
                    this.atributosExtra = parametrosExtra;
                }
            }
        
        Ahora podemos instanciar objetos a esta clase hija

            const nombreDeObjeto = new NombreDeHija(parametros...);

        -Metodos estaticos: Los metodos estaticos son metodos que no necesitan de un objetos para poder ser instanciados, podemos llamarlos con el nombre de la clase

        Como crear un metodo estatico
        
            static nombreMetodo(){
                instrucciones...
            }
        Para llamar a un metodo estatico

            nombreDeLaClase.nombreMetodo();
        
        -Getters y Setter: En la mayoria de los lenguajes los getters y setters se utilizan para acceder a propiedades privadas o en caso de javascript, a datos encapsulados.
        Los getters nos retornan una propiedad de la clase y los setters lo modifican.

        Como usar los getters y setters:

            set setNombre(newParametro){
                this.atributo = newParametro;
            }
            get getNombre(){
                return this.atributo;
            }
*/

class Canino extends Animal{
    constructor(especie, edad, color) {
        super(especie, edad, color);
        this.raza = null;
    }

    set setRaza(newRaza) {
        this.raza = newRaza;
    }
    get getRaza() {
        return this.raza;
    }

    static ladrar() {
        alert(`${perro.getRaza}: WAU!`);
    }
}

const perro = new Canino("perro", 7, "blanco");

perro.setRaza = "Pastor Aleman";

perro.verInfo();
Canino.ladrar();

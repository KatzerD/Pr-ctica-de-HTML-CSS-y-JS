/* Funciones
    Como crear funciones    
        -function nombreDeFuncion() {
        
            instruccionesDeLaFuncion;
            return valorARetornar;
        } 

        Declarar como variable:
        -nombreDeVariable = function() {
        
            instruccionesDeLaFuncion;
            return valorARetornar;
        }

    Como llamar una funcion
        
        Para ejecutar la funcion
            -nombreDeFuncion();
        Para ejecutar la funcion y guardar el valor del return
            -nombreDeVariable = nombreDeFuncion();

    Argumentos y parametros

        Los argumentos de definen al crear una funcion y van dentro de los parentesis:
            -function nombreDeFuncion(argumento1 , argumento2){}

        Y para cada argumneto dentro de una funcion, al momento de llamar esa funcion deben definirse unos parametros, que son los valores que tendra cada argumento:

            nombreDeFuncion(parametro1 , parametro2)

    Funciones flecha
        
        Son versiones mucho mas simplificadas de las funciones comunes y poseen caracteristicas particulares.

        Como crear funciones flecha:

            -let/const/var nombreDeFuncion = (parametros) =>{
                instrucciones;
            }

        Caracteristicas
        
        *Si solo poseemos un parametro no es necesario el parentesis:
            -let/const/var nombreDeFuncion = parametro =>{
            
            }
        
        *Si solo poseemos una linea de instruccion son necesarias las llaves
            
            -const nombreDeFuncion = parametro => instruccion;
        
        *Si solo poseemos una linea de instruccion y la definimos seguido de la flecha y sin llaves esta instruccion pasa a ser directamente el return de la funcion.
*/



function suma(num1, num2) {

    let res = num1 + num2;
    return res;
}

const resta = function (num1, num2) {
    
    let res = num1 - num2;
    return res;
}

const mult = (num1, num2) => res = num1 * num2;

let pregunta = prompt("Eliga una de las operaciones a realizar \n1. Suma \n2.Resta \n3.Multiplicacion");

let num1;
let num2;

if (pregunta == 1) {
    num1 = parseInt(prompt("Digite el primer numero"));
    num2 = parseInt(prompt("Digite el segundo numero"));
    resultado = suma(num1, num2);
    document.write("El resultado es " + resultado);
} else if (pregunta == 2) {
    num1 = parseInt(prompt("Digite el primer numero"));
    num2 = parseInt(prompt("Digite el segundo numero"));
    resultado = resta(num1, num2);
    document.write("El resultado es " + resultado);
} else if(pregunta == 3){
    num1 = parseInt(prompt("Digite el primer numero"));
    num2 = parseInt(prompt("Digite el segundo numero"));
    resultado = mult(num1, num2);
    document.write("El resultado es " + resultado);
}

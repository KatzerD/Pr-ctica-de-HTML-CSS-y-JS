/* Materias de la facultad
    -Crear una funcion que al pasarle como parametro la materia nos devuelva:
        *El profesor asignado
        *El nombre de todos los alumnos inscriptos
    -Crear una funcion que nos diga en cuantas clases esta cofla
    -Nombrar las clases en las que esta y los profesores de cada una 
*/
class Materias{

    constructor(profesor, alumnos, asignatura) {
        this.asign = asignatura;
        this.profe = profesor;
        this.alum = alumnos;
    }

    verInfo() {
        return `Materia: <b>${this.asign}</b><br>
        Profesor titular: <b>${this.profe}</b><br>
        Alumnos inscriptos: <b style="color: blue">${this.alum}</b></br><br><br>`
    }
}

let materias = ["Fisica", "Programacion", "Filosofia", "Logica", "Geometria"];


const fisica = new Materias("Panadero", ["Cofla", "Matias", "Jacin", "Rodolfo"], materias[0]);
const programacion = new Materias("Rene Puto", ["Cofla", "Matias", "Samuel", "Jacin", "Rodolfo"], materias[1]);
const filosofia = new Materias("Bob Marley", ["Cofla", "Jacin"], materias[2]);
const logica = new Materias("Lidia Zzz", ["Matias", "Samuel", "Rodolfo"], materias[3]);
const geometria = new Materias("Hilario God", ["Matias", "Samuel", "Rodolfo"], materias[4]);


document.write(fisica.verInfo());
document.write(programacion.verInfo());
document.write(filosofia.verInfo());
document.write(logica.verInfo());
document.write(geometria.verInfo());

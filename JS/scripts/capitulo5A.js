/* EL primer semestre de Cofla
Para aprobar las materias necesita:

*Contar con al menos el 90% de asistencia (de 100%)
*El promedio por materia debe ser de al menos 7/10
*Debe tener al menos del 75% de los trabajos practicos entregados (4 trabajos practicos)

    -Solicitar los datos y decirle si aprueba o no
    -Mostrar todo esto con colores representativos en consola (ej.: no aprobar en rojo) 
*/

const materias = {
/*  Materia = ["Nombre","Asistencia","Promedio","Trabajos"]*/
    fisica: ["Fisica", 95, 6, 2],
    calculo: ["Calculo", 96, 9, 4],
    algoritmica: ["Algoritmica", 100, 8, 4],
    algebra: ["Algebra", 96, 5, 4],
    discreta: ["Matematica Discreta", 91, 7, 3],
    ingles: ["Ingles", 98, 10, 3],
}

let resultado = () => {
    for (materia in materias) {
        
        let asistencia = materias[materia][1];
        let promedio = materias[materia][2];
        let trabajos = materias[materia][3];

        console.log(`${materias[materia][0]}`)

        if (asistencia < 90 || promedio < 7 || trabajos < 3) {
            console.log("%c     REPROBADA","color:red");
        } else {
            console.log("%c     APROBADA", "color:green");
        }
    }
}

resultado();

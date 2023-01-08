/* La facultad y asistencias
    -Crear minisistema para registrar presentes(P) y ausentes(A) 
    -Pasados 30 dias, mostrar su situacion final del alumno
    -Maximo 10% de ausencias
*/

let cantAlumn = parseInt(prompt("Ingrese la cantidad de alumnos"));
let regisAlumn = [];

for (let i = 0; i < cantAlumn; i++){
    regisAlumn[i] = [prompt("Nombre del alumno " + (i + 1)), 0];
}

const regisAsis = (_alumno, _presencia) => {
    if (_presencia == "p" || _presencia == "P") {
        regisAlumn[_alumno][1]++;
    }
}

for (let i = 0; i < 30; i++){
    for (alumno in regisAlumn) {
        presencia = prompt("Dia " + (i + 1) + "\n" + regisAlumn[alumno][0] + "? P o A")
        regisAsis(alumno, presencia);
    }
}

for (alumno in regisAlumn) {
    document.write(`${regisAlumn[alumno][0]}: <br>
    _______Presentes: ${regisAlumn[alumno][1]} <br>
    _______Ausentes: ${30 - regisAlumn[alumno][1]} `)
    if (30 - regisAlumn[alumno][1] > 18) {
        document.write("<b style='color:red'>REPROBADO POR INASISTENCIAS</b><br><br>");
    } else {
        document.write("<br><br>")
    }
}


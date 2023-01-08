/* Organizacion diaria 
    *Dividir las tareas diarias de  dos semanas, las actividades son; 24 horas estudiar, 24 horas hacer trabajos practicos, 56 horas trabajar, 8 horas hacer quehaceres del hogar
    
    -Organizar las actividades diariamente
    -Utilizar la consola para organizar todo
    -EL tiempo por tarea no debe superar las 4 horas 
*/
let descansar = "Descanso de 2 horas"
let estudiar = "Estudiar por 103 minutos; 1.7 horas";
let trabajosPracticos = "Realizar trabajos practicos por 103 minutis; 1.7horas";
let trabajar = "Trabajar por 240 minutos; 4 horas";
let ordenar = "Ordenar la casa 34 minutos; 0.6 horas";
let dormir = "Dormir 480 minutos; 8 horas"

for (let i = 0; i < 14; i++){
    if (i == 0) {
        console.groupCollapsed("Semana 1")
    }
    console.groupCollapsed("Dia " + (i + 1));
    console.log(descansar);
    console.log(trabajar);
    console.log(descansar);
    console.log(estudiar);
    console.log(trabajosPracticos);
    console.log(descansar);
    console.log(ordenar);
    console.log(descansar);
    console.log(dormir);
    console.groupEnd();

    if (i == 6) {
        console.groupEnd();
        console.groupCollapsed("Semana 2");
    }
}
console.groupEnd
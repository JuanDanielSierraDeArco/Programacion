/*Ejercicio 1*/

let calificaciones = parseInt(prompt("Ingrese calificacion =>"))

if (calificaciones >= 90 && calificaciones <= 100){
    console.log("Aprobado Con honores");
}else if (calificaciones >= 70 && calificaciones < 90){
        console.log("Aprobado");
    }else
        console.log("Reprobado");
/*Ejercicio 1*/
console.log("Ejercicio 1");
console.log('\nVerificación de Calificaciones');
console.log("ingresar una calificación numérica entre 0 y 100.");

let calificaciones = parseInt(prompt("Ingrese calificacion =>"))

if (calificaciones >= 90 && calificaciones <= 100){
    console.log("Aprobado Con honores");
}else if (calificaciones >= 70){
        console.log("Aprobado");
    }else
        console.log("Reprobado");
let nombre = "Juan";
let edad = 20;
let esEstudiante = true;

function lab(){
    let a = 10;
    let b = 3;


    let suma = a + b;
    let resta = a - b;
    let multi= a*b;
    let division = a/b;

    console.log("\n La suma =",suma);
    console.log("\n La resta =",resta);
    console.log("\n La multiplicacion =",multi);
    console.log("\n La division =",division);

    /*Comparaciones*/

    console.log("\n a es mayor b =", a > b);
    console.log("\n a es mayor o igual b =", a >= b);
    console.log("\n a es menor b =", a < b);
    console.log("\n a es menor o igual b =", a <= b);
    console.log("\n a es igual b =", a == b);
    console.log("\n a es diferente b =", a != b);


    console.log("\n a es mayor b =", a > b && a < b);
    console.log("\n a es mayor b =", a > b || a < b);
}

/*
nombre = prompt("Ingresa nombre:")
edad = prompt("Ingresa edad")
esEstudiante = prompt("Ingrese false o true")
*/
console.log("Nombre: " + nombre + "\nEdad: " + edad + "\nEs estudiante: " + esEstudiante);

/*Ejer*/

let esMayorDeEdad = false;
let tieneLicencia = true;
let puedeConducir = esMayorDeEdad && tieneLicencia;
console.log("Bienvenido "+"verificacion para prueba si Puede conducir?", puedeConducir);

let errorAlconConducir = esMayorDeEdad || tieneLicencia;
console.log("Puede conducir con errores?", errorAlconConducir);
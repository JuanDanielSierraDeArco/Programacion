console.log("Parte 1");
console.log("\nEscribe un código que recorra un arreglo de números y calcule la suma total");

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let suma = 0;

for (let i = 0; i < numeros.length; i++) {
    suma += numeros[i];
    
};
 console.log("La suma total es :", suma);

 console.log("\n¿Cómo se modifica el código para calcular el promedio de los números?");

let promedio = suma/numeros.length;
console.log("\npromedio", promedio);
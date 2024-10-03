document.write("Crea un bucle `while` que solicite al usuario ingresar un número hasta que ingrese un número negativo.","<br>");

let numero=-1;

while(true){
    numero = parseInt(prompt("Ingresa un nunmero negativo para salir => "));
    if (numero < 0){
        break;
    }
};

document.write("Has salido del buble","<br>");
document.write("¿Qué sucede si se inicializa el contador con un valor negativo?","<br>");
document.write("el programa se ejecuta connormalidad debido a que la variable numero que es nuestro contador se reescribe por el usuario a ingresar al while");

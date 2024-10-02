console.log("Ejercicio 4");
console.log("\nJuego de Adivinanza de Números");
console.log("\nAdivina un numero aleatorio entre 1 y 10 ");




let numero = Math.floor(Math.random() * 10) + 1;
let adivina = parseInt(prompt("Adivina un numero entre 1 y 10"));

if (adivina == numero){
    console.log("¡Felicidades, adivinaste el número!", );
}else{
    console.log("Lo siento, el número era =>", numero);
}

let numero = Math.floor(Math.random() * 10);
let adivina = parseInt(prompt("Adivina un numero entre 1 y 10"));

if (adivina == numero){
    console.log("Adivinaste el numero", );
}else{
    console.log("Lo siento, vuelve a intentarlo")
    console.log("el numero es", numero)
}
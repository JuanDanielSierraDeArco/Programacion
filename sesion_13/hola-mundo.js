/*
function area(valor){
    const pi = 3.14
    return (pi * (valor**2));
}

let numero = parseInt(prompt("Ingre un numero -=> "));

console.log("El área del círculo es-->",area(numero));
*/

let numero1 = parseInt(prompt("Ingresa un numero ==>"));

function primo(valor){
    
    if (valor < 1){
        console.log("El numero " + valor + " no es un numero primo");
 
    }else {
        let contar = 0
        for (let i = 1; i <= valor; i ++){
            if (valor % i == 0){
                contar += 1;
            }
        }  
        if(contar == 2){
            console.log("El numero " + valor + " es un numero primo");
        }else
            {
                console.log("El numero " + valor + " no es un numero primo");
            }
    }
}

primo(numero1)
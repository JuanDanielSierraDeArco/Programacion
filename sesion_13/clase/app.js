//funcion simple

function saludo(){
    console.log("Hola como  estas, Bienvenido!!!");
    document.write("Hola como  estas, Bienvenido!!!");
}
//saludo()


//funcion con parametros
function sumar(a,b){
    return a + b;
}; 

let resultado = sumar(8,5);
document.write("La suma es : ", resultado);
console.log("La suma es : ", resultado);

//funcion con parametros
function par(numero){
    if (numero % 2 == 0){
        return true;
    }else {
        return false;
    }
};

let numero = 35;
let esnumeropar = par(numero);
document.write("Es " + numero + "par?",esnumeropar);
console.log("Es " + numero + "par?",esnumeropar);

//funciones matematicas

function sumar(a, b){
    return a + b;
};

function restar(a, b){
    return a - b;
};

function multiplicar(a, b){
    return a * b;
};

function division(a, b){
    return a / b;
};

//funcion calculadora
function calculadora(n1, n2, operacion){
    switch(operacion){
        case 'sumar':
            return sumar(n1, n2);

        case 'restar':
            return restar(n1,n2);

        case 'multiplicar':
            return multiplicar(n1, n2);

        case 'dividir':
            return division(n1, n2);

        default:
            return "operacion no valida..."
    }
};

let numero1 = parseFloat(prompt("Ingrese el primer numero =>"));
let numero2 = parseFloat(prompt("Ingrese el segundo numero =>"));
let operacion1 = prompt("Ingrese la operacion (sumar, restar, multiplicar, dividir ) =>");
let resultado = calculadora(numero1, numero2, operacion1);

console.log("El resultado es :",resultado);
document.write("El resultado es :",resultado);
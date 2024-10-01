function sumar(a, b) {
  return a + b;
}

function restar(a, b) {
  return a - b;
}

function multiplicar(a, b) {
  return a * b;
}

function dividir(a, b) {
  return a / b;
}

function calculadora(n1, n2, operacion) {
  switch (operacion) {
    case "sumar":
      return sumar(n1, n2);

    case "restar":
      return sumar(n1, n2);

    case "multiplicar":
      return sumar(n1, n2);

    case "dividir":
      return sumar(n1, n2);
      default :"operacion no valida"; arguments
  }
}

let numero1 = parseInt(prompt("Ingrese numero 1 => "));
let numero2 = parseInt(prompt("Ingrese numero 2 => "));

let operacion = prompt("Ingrese operacion ( sumar, restar, multiplicar, dividir) ");

let resultado = calculadora(numero1, numero2, operacion);

console.log(`EL resultado de la operacion ${operacion} es = `, resultado)
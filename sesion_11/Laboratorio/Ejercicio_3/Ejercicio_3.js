console.log("Evaluación de Descuentos");
console.log("usuario ingresar el monto total de su compra para obtener un descuento en mayor a 100 del 10% ");

let compra = parseInt(prompt("Ingresse valor de la compra"));

if (compra > 100){
    let total = compra - (compra*0.1);
    console.log("valor a pagar", total)
}else{
    console.log("valor a pagar", compra)
}
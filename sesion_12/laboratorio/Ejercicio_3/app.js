console.log("Implementa un programa que pida al usuario que ingrese una contraseña hasta que sea correcta.");

let password;

do {
    password = prompt("Ingrese contraseña");
}while (password != "sesion12");
    console.log("Contraseña correcta!");


console.log("¿Por qué se usa un bucle `do...while` en este caso en lugar de `while`?");
console.log("\nSe utiliza un ciclo Do while porque nos interes que lo que esta dentro del do se ejecute por lomenos una vez para el programa");
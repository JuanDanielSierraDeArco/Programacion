let vecto1 = ["piedra", "papel", "tijera"];
let ronda = validar_ganador_ronda[2];

console.log("Bienvenido al juego\n piedra    papel   tijera \n....Jueguemos...");


while (ronda < 3) {
    let usuario_opcion = prompt("Elige una opcion");
    let compu_opcion = vecto1[Math.floor(Math.random() * 3)];

    usuario_opcion = usuario_opcion.toLowerCase();
    
    console.log(compu_opcion);
    console.log(usuario_opcion);

    if (usuario_opcion == compu_opcion) {
        console.log("!empate vuelve a juegar");
      } else {
        console.log(validar_ganador_ronda(usuario_opcion,compu_opcion))
    }
    ronda += validar_ganador_ronda[2];
}


function validar_ganador_ronda(jugador1, jugador2) {
    
    let resultado = [0, 0, 0];

    if (jugador1 == 'piedra') {

        if (jugador2 == 'tijera') {
            resultado[0] = 1;
            resultado[1] = 0;
            resultado[2] = 1;        
        }

        if (jugador2 == 'papel') {
            resultado[0] = 0;
            resultado[1] = 1;
            resultado[2] = 1;
        }
        
    }

    if (jugador1 == 'papel') {

        if (jugador2 == 'piedra') {
            resultado[0] = 1;
            resultado[1] = 0;
            resultado[2] = 1;        
        }

        if (jugador2 == 'tijera') {
            resultado[0] = 0;
            resultado[1] = 1;
            resultado[2] = 1;
        }
        
    }

    if (jugador1 == 'tijera') {

        if (jugador2 == 'papel') {
            resultado[0] = 1;
            resultado[1] = 0;
            resultado[2] = 1;        
        }

        if (jugador2 == 'piedra') {
            resultado[0] = 0;
            resultado[1] = 1;
            resultado[2] = 1;
        }
    }

    return resultado;
}
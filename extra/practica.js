let vecto1 = ["piedra", "papel", "tijera"];
let juador_1 = 0;
let maquina = 0;
let fin_juego = 1;
let usuario;



function validar_ganador_ronda(jugador1,jugador2){

    let resultado = []

    if (jugador1 == "piedra") {
        if (jugador2 == "papel") {
          return jugador1 = 0, jugador2 = 1, ronda = 1;
        }
  
        if (jugador2 == "tijera") {
          return jugador1 = 1, jugador2 = 0, ronda = 1;
        }
    }
    if(jugador1 == "papel") {
        if (jugador2 == "tijera") {
          return jugador1= 0, jugador2 = 1, ronda = 1;
        }
  
        if (jugador2 == "piedra") {
            return jugador1= 1, jugador2 = 0, ronda = 1;
        }
    }
    if(jugador1 == "tijera") {
        if (jugador2 == "piedra") {
            return jugador1= 0, jugador2 = 1, ronda = 1;
        }
  
        if (jugador2 == "papel") {
            return jugador1= 1, jugador2 = 0, ronda = 1;
        }
    }
}

























console.log("Bienvenido al juego\n piedra    papel   tijera \n....Jueguemos...");

usuario = prompt("Elige una opcion");
usuario = usuario.toLowerCase(usuario)// método toLowerCase() se utiliza para convertir un texto en minuscula
validar_opciones()
function validar_opciones(usuario){
    if(vecto1.indexOf(usuario)){
        return true;
    } else 
     return false
}

while (fin_juego <= 3) {
  let usuario = prompt("piedra    papel   tijera");
  let usuario2 = prompt("piedra    papel   tijera  2");
  console.log(usuario);
  console.log(usuario2);

  if (usuario == usuario2) {
    console.log("!empate vuelve a juegar");
  } else {


 console.log("marcador");
 console.log("Juagador => ", juador_1);
 console.log("Maquina => ", maquina);
 console.log("Juego => ", fin_juego - 1)
}

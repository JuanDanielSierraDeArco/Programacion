function mostrarMensaje(){
    alert("Hola. Bienvenidos a mi perfil")
}

function validarformulario(){
    let nombre = document.getElementById('nombre').value;
    let email = document.getElementById('email').value;
    if (nombre == "" || email == ""){
        alert("Todos los campos son necesario");
        return false
    }
    else {
        return true
    }
}
function validarFormulario(){
    let nombre = document.getElementById('nombres').value;
    let email = document.getElementById('email').value;
    let imagen = document.getElementById('imagen').value;
    let password = document.getElementById('password').value;
    if (nombre == "" || email == "" || imagen == ""|| password == ""){
        alert("Todos los campos son requeriodos");
        return false
    }
    return true 
};

function mostrarImagen(event){
    let imagen = document.getElementById('ver-imagen');
    imagen.src = URL.createObjectURL(event.target.files[0]);
}
function mostrarImagen(event){
    let imagen=document.getElementById('ver-imagen');
    imagen.src=URL.createObjectURL(event.target.files[0]);
   }


function validarFormulario(){
    let nombre=document.getElementById("nombre").value;
    let email=document.getElementById("correo").value;
    let imagen=document.getElementById("imagen").value;
    let password=document.getElementById("password").value;

    if(nombre == "" || email == "" || imagen == "" || password == ""){
        alert("Todos los campos son requeridos")
        return false
    }else 
        return true
}
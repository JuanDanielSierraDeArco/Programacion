function mostrarmensaje() {
  alert("Hola, Bienvenidos");
}


const form = document.getElementById("contactForm");
form.addEventListener("submit", function (event) {
  const name = document.getElementById("nombre").value;
  const email = document.getElementById("correo").value;
  if (name === "" || email === "") {
    alert("Por favor, completa todos los campos.");
    event.preventDefault();
  } else {
    alert("¡Formulario enviado correctamente!");
  }
});

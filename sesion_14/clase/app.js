document.addEventListener('DOMContentLoaded', function(){
    const button  = document.getElementById('changetextbutton');
    button.addEventListener('click', function(){
        const introSection = document.getElementById('intro');
    introSection.innerHTML = '<p>El texto ha cambiado despues de hacer clic en el boton!!!!!!</p>'
});
});
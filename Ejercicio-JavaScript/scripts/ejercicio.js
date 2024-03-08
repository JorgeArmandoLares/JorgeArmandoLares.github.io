function cambiarColor() {
    // Aquí cambiamos el color de la primera imagen
    var variableAlbum = document.getElementById("album");
    variableAlbum.style.backgroundColor = "chartreuse";
}

function cambiarTamano() {
    // Aquí obtenemos todas las imágenes con la clase "imagen"
    var imagenes = document.getElementsByClassName("imagen");

    // Verifica si se encontraron imágenes con la clase
    if (imagenes.length > 0) {
        imagenes[0].style.width = "150px";   // Aquí Ajustamos el ancho de nuestra imagen
        imagenes[0].style.height = "150px";  // Aquí ajustamos la altura de nuestra imagen
    }
}

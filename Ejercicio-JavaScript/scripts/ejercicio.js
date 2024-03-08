function cambiarColor() {
    // Código para cambiar el color aquí (si es necesario)
    var variableAlbum = document.getElementById("album");
    variableAlbum.style.backgroundColor = "chartreuse";
}

function cambiarTamano() {
    // Obtén todas las imágenes con la clase "imagen"
    var imagenes = document.getElementsByClassName("imagen");

    // Verifica si se encontraron imágenes con la clase
    if (imagenes.length > 0) {
        // Establece el nuevo tamaño para la primera imagen (en píxeles, por ejemplo)
        imagenes[0].style.width = "150px";   // Cambia este valor según tus necesidades
        imagenes[0].style.height = "150px";  // Cambia este valor según tus necesidades
    } else {
        console.log("No se encontraron imágenes con la clase 'imagen'.");
    }
}

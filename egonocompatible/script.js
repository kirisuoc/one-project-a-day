// Obtener todos los elementos con la clase "elemento"
var elementos = document.querySelectorAll('.checkbox-round.ego');

// Iterar sobre los elementos y agregar un evento que se dispare cuando se modifiquen las clases
elementos.forEach(function(elemento) {
    elemento.addEventListener('change', function() {
        // Verificar si el elemento tiene la clase "clase-hijo-especial"
        if (this.classList.contains('clase-hijo-especial')) {
            // Agregar una clase al elemento padre
            this.parentNode.classList.add('padre-con-elemento-especial');
        } else {
            // Remover la clase del elemento padre si no tiene la clase "clase-hijo-especial"
            this.parentNode.classList.remove('padre-con-elemento-especial');
        }
    });
});


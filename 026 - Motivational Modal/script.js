// Inicializamos la variable active a 1
let active = 1
//Seleccionamos los elementos con clase button y añadimos el evento click
document.querySelectorAll('.button').forEach(button => {
    button.addEventListener('click', function() {
        //Quitamos la clase active al elemento activo actual y le añadimos inactive para que haga fade out
        document.querySelector('.card:nth-child(' + active + ')').classList.remove('active')
        document.querySelector('.card:nth-child(' + active + ')').classList.add('inactive')

        // Comprobamos el valor de active. Si ya está en 3, lo volvemos a poner en 0 para empezar de nuevo
        if (active == 3) {
            active = 0
        }
        // Añadimos 1 al valor de active para seleccionar la siguiente card
        active++

        //Le quitamos inactive a la siguiente card y le añadimos active para que aparezca con fade in
        document.querySelector('.card:nth-child(' + active + ')').classList.remove('inactive')
        document.querySelector('.card:nth-child(' + active + ')').classList.add('active')

    })
})
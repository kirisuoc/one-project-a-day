document.querySelector('.searchfield').addEventListener('keyup', () => {
    const suggestions = document.querySelector('.suggestions')
    const text = document.querySelector('.searchfield').value

    if (text.length) {
        suggestions.classList.add('active')

        // Sustituir el contenido de las sugerencias
        suggestions.innerHTML = `
            <li><b>${text}</b></li>
            <li>Veritatis et <b>${text}</b></li>
            <li>ut aliquid ex <b>${text}</b> vero eos</li>
        `
    } else {
        suggestions.classList.remove('active')
        // Limpiar las sugerencias si el campo está vacío
        suggestions.innerHTML = ''
    }
})
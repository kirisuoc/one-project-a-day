let newWord
const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H',
                'I', 'J', 'K', 'L', 'M', 'N', 'Ñ', 'O', 'P',
                'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

// Añadir letras del abecedario
const keys = document.querySelector('.keys')
const wordToGuess = document.getElementById('word-to-guess')
const hintContainer = document.querySelector('.central-container')

// Función para añadir letras del abecedario
function addAlphabetLetters() {
  alphabet.forEach(letter => {
    let alphabetLetter = document.createElement('span')
    alphabetLetter.innerHTML = letter
    keys.appendChild(alphabetLetter)
    
    // Event listener para las letras del abecedario
    alphabetLetter.addEventListener('click', () => {
      handleLetterClick(alphabetLetter)
    })
  })
}


// Función para obtener una palabra aleatoria y actualizar la pantalla
function getRandomWordAndDisplay(data) {
  const randomIndex = Math.floor(Math.random() * data.length)
  newWord = data[randomIndex].palabra.toUpperCase()
  const letters = newWord.split('')

  updateWord(letters)

  if (data[randomIndex].definicion) {
    updateHint(data[randomIndex].definicion)
  }
}

// Función para actualizar la palabra en el DOM
function updateWord(letters) {
  // Limpiar el contenido anterior
  wordToGuess.innerHTML = ''

  // Crear y agregar los spans para cada letra
  letters.forEach(letter => {
    let newLetterEl = document.createElement('span')
    newLetterEl.innerHTML = letter
    newLetterEl.classList.add('hidden')
    newLetterEl.style.color = 'transparent'
    wordToGuess.appendChild(newLetterEl)
});
}
// Función para actualizar la pista en el DOM
function updateHint(hint) {
  let newHint = `<p class="hint">
                  <strong>Hint: </strong>
                  ${hint}
                </p>`

  // Inserta el newHint en el elemento hintContainer
  hintContainer.insertAdjacentHTML('afterbegin', newHint)
}

// Función para manejar el evento click en las letras del abecedario
function handleLetterClick(letter) {
  const clickedLetter = letter.innerHTML.trim() // Obtiene el contenido del span sin espacios en blanco
  letter.classList.add('selected')

  Array.from(wordToGuess.children).forEach(wordLetter => {
    if(wordLetter.innerHTML.trim() === clickedLetter) {
      wordLetter.style.color = 'black'
      wordLetter.classList.remove('hidden')
    }
  })
}



// Llamadas a funciones principales después de cargar el JSON
fetch('./words.json')
  .then(response => response.json())
  .then(data => {
    addAlphabetLetters()
    getRandomWordAndDisplay(data)
  })
  .catch(error => console.log('Error: ', error))










/* function checkWord() {
  Array.from(wordToGuess.children).forEach(letter => {
    for(i = 0; i < alphabet.length; i++ )
      if(letter.innerHTML === alphabet[i]) {
        letter.style.color = 'black'
    }
  })
})
 */
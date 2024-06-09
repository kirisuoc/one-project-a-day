let newWord
const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H',
                'I', 'J', 'K', 'L', 'M', 'N', 'Ñ', 'O', 'P',
                'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

// Añadir letras del abecedario
const keys = document.querySelector('.keys')

alphabet.forEach(letter => {
  let alphabetLetter = document.createElement('span')
  alphabetLetter.innerHTML = letter
  keys.appendChild(alphabetLetter)
})


fetch('./words.json')
  .then(response => response.json())
  .then(data => {
    // Seleccionar una palabra aleatoria de la lista del archivo JSON
    const randomIndex = Math.floor(Math.random() * data.length)
    newWord = data[randomIndex].palabra.toUpperCase()

    // Dividir la palabra en un array de letras
    letters = newWord.split('')

    // Llamar a la función para actualizar la palabra en el DOM
    updateWord(letters)
    // Llamar a la función para actualizar la pista si la hay
    if (data[randomIndex].definicion) {
      updateHint(data, randomIndex)
    }
  })
  .catch(error => console.log('Error: ', error))



  
const wordToGuess = document.getElementById('word-to-guess')
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

const hintContainer = document.querySelector('.central-container')
function updateHint(data, randomIndex) {

  let newHint = `<p class="hint">
                  <strong>Hint: </strong>
                  ${data[randomIndex].definicion}
                </p>`

  // Inserta el newHint en el elemento hintContainer
  hintContainer.insertAdjacentHTML('afterbegin', newHint)
}

Array.from(keys.children).forEach(letter => {
  letter.addEventListener('click', () => {
    const clickedLetter = letter.innerHTML.trim() // Obtiene el contenido del span sin espacios en blanco
    let errors = 0

    letter.classList.add('selected')

    Array.from(wordToGuess.children).forEach(wordLetter => {
      if(wordLetter.innerHTML.trim() === clickedLetter) {
        wordLetter.style.color = 'black'
        wordLetter.classList.remove('hidden')
      }
    })


  })
})



/* function checkWord() {
  Array.from(wordToGuess.children).forEach(letter => {
    for(i = 0; i < alphabet.length; i++ )
      if(letter.innerHTML === alphabet[i]) {
        letter.style.color = 'black'
    }
  })
})
 */
let input = document.querySelector('.container .input-box .user-input');
let result = document.querySelector('.container .input-box .result');
let allBtns = document.querySelectorAll('.container .btn');

let backSpace = () => {
    input.value = input.value.substr(0, input.value.length - 1);
}

for (let item of allBtns) {
    item.addEventListener('click', (e) => {
        let btnText = e.target.innerHTML;

        if (btnText == 'x') {
            btnText = '*';
        }

        if (btnText == '÷') {
            btnText = '/';
        }

        // Concatenar el texto del botón al valor existente del input
        input.value += btnText;
    })
}

let calculate = () => {
    result.innerHTML = eval(input.value);
}
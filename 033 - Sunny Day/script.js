let number = 0;
const $number = document.querySelector('.number')

document.querySelector('.minus').addEventListener('click', () => {
    updateNumber(-1)
})
document.querySelector('.plus').addEventListener('click', () => {
    updateNumber(1)
})

function updateNumber(value) {
    number += value

    let $spans = $number.querySelectorAll('span');
    $spans.forEach(($span) => {
        if ($span.classList.contains('fadeOutDown') || $span.classList.contains('fadeOutUp')) {
            $span.remove();
        }
    });

    $spans.forEach(($span) => $span.className = '')

    let $newSpan = document.createElement('span')

    if (value > 0) { // fadeUp Animation
        $spans.forEach(($span) => $span.classList.add('fadeOutUp'))

        $newSpan.classList.add('fadeInUp')
        $newSpan.textContent = number
        $number.appendChild($newSpan)
    } else { // FadeDown Animation
        
        $spans.forEach(($span) => $span.classList.add('fadeOutDown'))

        $newSpan.classList.add('fadeInDown')
        $newSpan.textContent = number
        $number.appendChild($newSpan)
    }
}
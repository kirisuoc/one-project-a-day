document.querySelector('.marker').addEventListener('click', function() {
    document.querySelector('.marker').classList.toggle('inactive')
    document.querySelector('.card').classList.toggle('active')
})

document.querySelector('.card').addEventListener('click', function() {
    document.querySelector('.marker').classList.toggle('inactive')
    document.querySelector('.card').classList.toggle('active')
})
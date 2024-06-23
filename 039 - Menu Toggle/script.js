const menuIcon = document.querySelector('.menu-icon')
const menu = document.querySelector('.menu')

menuIcon.addEventListener('click', () => {
    menuIcon.classList.remove('paused')
    menuIcon.classList.add('active')
    menu.classList.remove('paused')
    menu.classList.add('active')
})

menu.addEventListener('click', () => {
    menuIcon.classList.remove('active')
    menu.classList.remove('active')
})
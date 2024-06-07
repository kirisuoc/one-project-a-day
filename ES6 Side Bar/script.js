/* const toggle = document.querySelector('.sidebar-burger')
const sidebar = document.querySelector('.sidebar')

toggle.addEventListener('click', () => {
    sidebar.classList.toggle()
})
 */

const subMenus = document.querySelectorAll('.sub-menu'),
    buttons = document.querySelectorAll('.sidebar ul button')

const onClick = (item) => {
    subMenus.forEach((menu) => (menu.style.height = '0px'))
    buttons.forEach((button) => (button.classList.remove('active')))

    if (!item.nextElementSibling) {
        item.classList.add('active')
        return
    }

    const subMenu = item.nextElementSibling,
        ul = subMenu.querySelector('ul')

    if (!subMenu.clientHeight) {
        subMenu.style.height = `${ul.clientHeight}px`
        item.classList.add('active')
    } else {
        subMenu.style.height = '0px'
        item.classList.remove('active')
    }
}

function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar')

    sidebar.classList.toggle('closed')
}


// Drag & Drop
document.addEventListener('DOMContentLoaded', function() {
    const dragAndDropItems = document.getElementById('cards');

    new Sortable(dragAndDropItems, {
        group: 'nested',
        animation: 150,
        fallbackOnBody: true,
        swapThreshold: 0.65,
        handle: '.card' // Esto asegura que solo las tarjetas se puedan arrastrar
    });
});
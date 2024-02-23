function triggerNav() {
    const menu = document.getElementById('menu');
    const navIcon = document.getElementById('nav-icon');

    if (menu.classList.contains('show')) {
        menu.classList.remove('show');
        menu.classList.add('hide');
        navIcon.classList.remove('fa-caret-up');
        navIcon.classList.add('fa-caret-down');
    } else {
        menu.classList.remove('hide');
        menu.classList.add('show');
        navIcon.classList.remove('fa-caret-down');
        navIcon.classList.add('fa-caret-up');
    }
}
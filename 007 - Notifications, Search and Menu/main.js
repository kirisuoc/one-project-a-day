document.querySelector('.search-icon').addEventListener('click', function() {
    document.querySelector('.search-input').classList.toggle('active');
});

document.querySelector('.menu-icon').addEventListener('click', function() {
    document.querySelector('.panel').classList.toggle('show-menu');
    document.querySelector('.menu').classList.toggle('active');

})
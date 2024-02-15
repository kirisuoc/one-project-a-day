document.addEventListener('DOMContentLoaded', function() {
    var btns = document.querySelectorAll('.btn-6');

    function handleHover (e) {
        var parentOffset = this.getBoundingClientRect(),
            relX = e.pageX - parentOffset.left,
            relY = e.pageY - parentOffset.top;
        this.querySelector('span').style.top = relY + 'px';
        this.querySelector('span').style.left = relX + 'px';
        }

        btns.forEach(function(btn) {
            btn.addEventListener('mouseenter', handleHover);
            btn.addEventListener('mouseout', handleHover);
    });
});

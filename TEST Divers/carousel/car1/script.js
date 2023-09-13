$(document).ready(function(){
    function rotate() {
        let lastChild = $('.slider div:last-child').clone();
        /*$('#test').html(lastChild)*/
        $('.slider div').removeClass('firstSlide');
        $('.slider div:last-child').remove();
        $('.slider').prepend(lastChild);
        $(lastChild).addClass('firstSlide');
    };

window.setInterval(function () {
    rotate()
}, 4000);
});
var moveX;
var moveY;
var enabled = false;
var interIn;
var interOut;

new WOW().init();

var scroll = new SmoothScroll('a[href*="#section"]', {
    header: '.navbar',
    speed: 800,
    easing: 'easeInOutQuart',
    clip: true
});

function doMovement(X, Y) {
    $('.titulo-5').css('margin-left', (X * 0.13) + 'px');
    $('.titulo-5').css('margin-top', (Y * 0.13) + 'px');

    $('.titulo-4').css('margin-left', (X * 0.2) + 'px');
    $('.titulo-4').css('margin-top', (Y * 0.2) + 'px');

    $('.titulo-3').css('margin-left', (X * 0.3) + 'px');
    $('.titulo-3').css('margin-top', (Y * 0.3) + 'px');

    $('.titulo-2').css('margin-left', (X * 0.4) + 'px');
    $('.titulo-2').css('margin-top', (Y * 0.4) + 'px');

    $('.titulo-1').css('margin-left', X + 'px');
    $('.titulo-1').css('margin-top', Y + 'px');
}

$('.titulo-fondo').mousemove(function(event){
    moveX = (($(window).width() / 2)- event.pageX) * 0.05;
    moveY = (($(window).height() / 2) - event.pageY) * 0.05;
    if (enabled) {
        doMovement(moveX, moveY);
    }
});

$('.titulo-fondo').bind({
    'mouseenter': function () {
        clearInterval(interOut);
        var x = 0;
        var y = 0;
        interIn = setInterval(function () {
            if (moveX > x)
                x++;
            else if (moveX < x)
                x--;
            if (moveY > y)
                y++;
            else if (moveY < y)
                y--;
            doMovement(x, y);
            if (Math.round(moveX) == x && Math.round(moveY) == y) {
                clearInterval(interIn);
                enabled = true;
            }
        }, 1);
        console.log('Mouse enter'); 
    },
    'mouseleave': function () {
        clearInterval(interIn);
        enabled = false;
        var x2 = Math.round(moveX);
        var y2 = Math.round(moveY);
        interOut = setInterval(function () {
            if (x2 > 0)
                x2--;
            else if (x2 < 0)
                x2++;
            if (y2 > 0)
                y2--;
            else if (y2 < 0)
                y2++;
            doMovement(x2, y2);
            if (x2 == 0 && y2 == 0) clearInterval(interOut);
        }, 1);
        console.log('Mouse leave'); 
    }
});

$(document).ready(function () {

    buttonPressed = false;

    $("#js-button").click(function () {


        if (buttonPressed === false) {
            var color1 = "#ff4455" // "#6DD5FA" "#c51162"
            var color2 = "#ff8899"  // "#2980B9" "#6d0959"
            var vLogo = "img/v_logo_outside_peach_glow.jpg"
            console.log("Button was pressed - is now TRUE")
            buttonPressed = true;
        }

        else if (buttonPressed === true) {
            var color1 = "#6d0959" // "#972239"
            var color2 = "#c51162" // "#e74c3c"
            var vLogo = "/img/v_logo_outside_pink_glow.png"
            console.log("Button was pressed - is now FALSE")
            buttonPressed = false;
        }

        $('.heading__front--first').css({
            color: color2
        });
        $('.heading__front--second').css({
            color: color2
        });
        $('.heading-secondary').css({
            color: color2
        });
        $('.button-white').css({
            color: color2
        });
        $('.card__li-text').css({
            color: color2
        });
        $('.card__header').css({
            color: color2
        });
        $('.card__li-status').css({
            color: color2
        });
        $('.card__link--logo').css({
            color: color2
        });

        $(".header__logo").attr('src', vLogo);

        $('.card__image').css('background-blend-mode', 'screen');

        $('.section-1').css({
            background: "-webkit-gradient(linear, right top, left bottom, from(" + color1 + "), to(" + color2 + "))"
        });
        $('.footer').css({
            background: "-webkit-gradient(linear, right top, left bottom, from(" + color1 + "), to(" + color2 + "))"
        });
        $('.card__side--back').css({
            background: "-webkit-gradient(linear, right top, left bottom, from(" + color1 + "), to(" + color2 + "))"
        });
        $('.card__image--1').css({
            background: "-webkit-gradient(linear, right top, left bottom, from(" + color1 + "), to(" + color2 + "))"
        });
        $('.card__image--2').css({
            background: "-webkit-gradient(linear, right top, left bottom, from(" + color1 + "), to(" + color2 + "))"
        });
        $('.card__image--3').css({
            background: "-webkit-gradient(linear, right top, left bottom, from(" + color1 + "), to(" + color2 + "))"
        });
        $('.card__image--4').css({
            background: "-webkit-gradient(linear, right top, left bottom, from(" + color1 + "), to(" + color2 + "))"
        });
        $('.navigation__background').css({
            background: "-webkit-gradient(linear, right top, left bottom, from(" + color1 + "), to(" + color2 + "))"
        });
        $('.navigation__icon').css({
            color: color2
        });
    });

    $("#nav_icon").click(function () {
        $(this).toggleClass("fas fa-gift fas fa-times")
    });

});


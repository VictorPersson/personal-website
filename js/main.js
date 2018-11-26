
$(document).ready(function () {

    buttonPressed = false;

    $("#js-button").click(function () {

        if (buttonPressed === false) {
            var color1 = "#c51162"
            var color2 = "#6d0959"
            var vLogo = "img/v_logo_outside_peach_glow.jpg"
            console.log("Button was pressed - is now TRUE")
            buttonPressed = true;
        }

        else if (buttonPressed === true) {
            var color1 = "#ff4455"
            var color2 = "#ff8899"
            var vLogo = "img/v_logo_outside_pink_glow.png"
            console.log("Button was pressed - is now FALSE")
            buttonPressed = false;
        }

        $('.heading__front--first').css({
            color: color1
        });
        $('.heading__front--second').css({
            color: color1
        });
        $('.heading-secondary').css({
            color: color1
        });
        $('.button-white').css({
            color: color1
        });
        $(".header__logo").attr('src', "img/v_logo_outside_peach_glow.jpg");

        $('.section-1').css({
            background: "-webkit-gradient(linear, right top, left bottom, from(" + color1 + "), to(" + color2 + "))"
        });
        $('.footer').css({
            background: "-webkit-gradient(linear, right top, left bottom, from(" + color1 + "), to(" + color2 + "))"
        });
        $('.card__side--back').css({
            background: "-webkit-gradient(linear, right top, left bottom, from(" + color1 + "), to(" + color2 + "))"
        });
        $('.card__image').css('background-blend-mode: screen;'
        );
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
    });
});


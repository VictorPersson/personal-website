
$(document).ready(function () {

    buttonPressed = false;

    $("#js-button").click(function () {

        if (buttonPressed === false) {
            var color1 = "#6DD5FA" // "#c51162"
            var color2 = "#2980B9" // "#6d0959"
            var icon_1 = "fas fa-gift"
            //var vLogo = "img/v_logo_outside_peach_glow.jpg"
            console.log("Button was pressed - is now TRUE")
            buttonPressed = true;
        }

        else if (buttonPressed === true) {
            var color1 = "#972239" // "#ff4455"
            var color2 = "#e74c3c" // "#ff8899"
            var icon_2 = "far fa-snowflake"
            var vLogo = "img/v_logo_outside_pink_glow.png"
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

        // $(".header__logo").attr('src', "img/v_logo_outside_peach_glow.jpg");

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
        $('.card__image').css('background-blend-mode: screen;'
        );
        $("#christmas_icon").removeClass(icon_2).addClass(icon_1);
    });
});


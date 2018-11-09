$(document).ready(function () {

    const color1 = "#ff4455"
    const color2 = "#ff8899"

    $(".section-1").click(function () {
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


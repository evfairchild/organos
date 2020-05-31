$(window).scroll(function () {
    $("banner").css("background-position","50% " + ($(this).scrollTop() / 2) + "px");
});

$(function () {
    var $btnTop = $("#backToTop");
    var $body = $("body");
    var $toggle = $("#themeToggle");

    var savedTheme = localStorage.getItem("ma_theme") || "light";
    setTheme(savedTheme);

    $(window).on("scroll", function () {
        if ($(this).scrollTop() > 200) $btnTop.fadeIn();
        else $btnTop.fadeOut();
    });

    $btnTop.on("click", function () {
        $("html, body").animate({ scrollTop: 0 }, 500);
    });

    $toggle.on("click", function () {
        var current = $body.hasClass("theme-dark") ? "dark" : "light";
        var next = current === "light" ? "dark" : "light";
        setTheme(next);
    });

    function setTheme(theme) {
        if (theme === "dark") {
            $body.removeClass("theme-light").addClass("theme-dark");
            $toggle.removeClass("btn-outline-primary").addClass("btn-outline-light")
                .text("🌙 Dark");
        } else {
            $body.removeClass("theme-dark").addClass("theme-light");
            $toggle.removeClass("btn-outline-light").addClass("btn-outline-primary")
                .text("🌞 Light");
        }
        localStorage.setItem("ma_theme", theme);
    }
});
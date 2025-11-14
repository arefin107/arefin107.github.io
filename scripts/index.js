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

    var coverImages = [
        "assets/img/cover-1.jpg",
       
    ];

    var current = 0;
    var $cover = $("#coverBg");

    if (coverImages.length === 0) return;

    // Initial background
    $cover.css("background-image", "url(" + coverImages[0] + ")");

    // Cross-fade between backgrounds
    function rotateCover() {
        current = (current + 1) % coverImages.length;

        $cover.fadeOut(700, function () {
            $cover.css("background-image", "url(" + coverImages[current] + ")");
            $cover.fadeIn(700);
        });
    }

    // Change every 6 seconds
   // setInterval(rotateCover, 3000);
});
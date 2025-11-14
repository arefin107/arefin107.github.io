$("#contactForm").on("submit", function (e) {
    e.preventDefault();
    $("#formMsg").text("Thank you! This is a demo form. Please use the email/phone above to contact me directly.");
});

$(function () {
    var $body = $("body");
    var $toggle = $("#themeToggle");
    var savedTheme = localStorage.getItem("ma_theme") || "light";
    setTheme(savedTheme);

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
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

document.addEventListener('DOMContentLoaded', function () {

    // INVENTORY
    const inventoryCarousel = document.querySelector('#inventoryCarousel');
    const inventoryIndicators = document.querySelectorAll('#inventoryModal .carousel-indicators button');

    inventoryCarousel.addEventListener('slide.bs.carousel', function (e) {
        inventoryIndicators.forEach(btn => btn.classList.remove('active'));
        inventoryIndicators[e.to].classList.add('active');
    });

    // LAPRETINA
    const lapretinaCarousel = document.querySelector('#lapretinaCarousel');
    const lapretinaIndicators = document.querySelectorAll('#lapretinaModal .carousel-indicators button');

    lapretinaCarousel.addEventListener('slide.bs.carousel', function (e) {
        lapretinaIndicators.forEach(btn => btn.classList.remove('active'));
        lapretinaIndicators[e.to].classList.add('active');
    });

});
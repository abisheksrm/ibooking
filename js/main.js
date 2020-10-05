! function (a) {
    "use strict";
    a(".menu-toggle").click(function (e) {
        e.preventDefault(), a("#sidebar-wrapper").toggleClass("active"), a(".menu-toggle > .fa-bars, .menu-toggle > .fa-times").toggleClass("fa-bars fa-times"), a(this).toggleClass("active")
    }), a('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
            var e = a(this.hash);
            if ((e = e.length ? e : a("[name=" + this.hash.slice(1) + "]")).length) return a("html, body").animate({
                scrollTop: e.offset().top
            }, 1e3, "easeInOutExpo"), !1
        }
    }), a("#sidebar-wrapper .js-scroll-trigger").click(function () {
        a("#sidebar-wrapper").removeClass("active"), a(".menu-toggle").removeClass("active"), a(".menu-toggle > .fa-bars, .menu-toggle > .fa-times").toggleClass("fa-bars fa-times")
    }), a(document).scroll(function () {
        100 < a(this).scrollTop() ? a(".scroll-to-top").fadeIn() : a(".scroll-to-top").fadeOut()
    })
}(jQuery);
var onMapMouseleaveHandler = function (e) {
    var a = $(this);
    a.on("click", onMapClickHandler), a.off("mouseleave", onMapMouseleaveHandler), a.find("iframe").css("pointer-events", "none")
},
    onMapClickHandler = function (e) {
        var a = $(this);
        a.off("click", onMapClickHandler), a.find("iframe").css("pointer-events", "auto"), a.on("mouseleave", onMapMouseleaveHandler)
    };
$(".map").on("click", onMapClickHandler);


$('#carousel-example').on('slide.bs.carousel', function (e) {

    var $e = $(e.relatedTarget);
    var idx = $e.index();
    var itemsPerSlide = 5;
    var totalItems = $('.carousel-item').length;

    if (idx >= totalItems - (itemsPerSlide - 1)) {
        var it = itemsPerSlide - (totalItems - idx);
        for (var i = 0; i < it; i++) {

            if (e.direction == "left") {
                $('.carousel-item').eq(i).appendTo('.carousel-inner');
            } else {
                $('.carousel-item').eq(0).appendTo('.carousel-inner');
            }
        }
    }
});

(function () {
    'use strict';
    window.addEventListener('load', function () {

        var forms = document.getElementsByClassName('needs-validation');

        var validation = Array.prototype.filter.call(forms, function (form) {
            form.addEventListener('submit', function (event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add('was-validated');
            }, false);
        });
    }, false);
})();
$(document).ready(function() {
    // change color language
    $(".language a").on("click", function() {
        $(this).addClass("active").siblings().removeClass("active");
    });

    // navbar responsive
    $(".navbar-toggler").on("click", function() {
        $(".navbar-toggler").toggleClass("change");
        $(".navbar-collapse").toggleClass("see");
        $(".navbar-collapse").slideToggle();
    });

    // placeholder
    $("[placeholder]").focus(function() {
        $(this).attr("data-placeholder", $(this).attr("placeholder"));
        $(this).attr("placeholder", "");
        $(this).css("border-color", "#cda45e");
    }).blur(function() {
        $(this).attr("placeholder", $(this).attr("data-placeholder"));
        $(this).css("border-color", "#625b4b");
    });


    // textarea
    var $countText = $(".count-textarea");

    $("#textarea").focus(function() {
        $countText.css("display", "block");
    }).blur(function() {
        $countText.css("display", "none");
    });

    var textarea = document.getElementById("textarea");
    var countText = document.querySelector(".count-textarea")

    textarea.onkeyup = function() {
        countText.textContent = 100 - this.value.length;
        if (countText.textContent < 0) {
            countText.style.color = "red";
        } else {
            countText.style.color = "#cda45e";
        }
    }

    // filter menu 
    var $menu = $('.menu-container').isotope({});

    $('.filter-group').on('click', 'li', function() {
        var filterValue = $(this).attr('data-filter');
        $menu.isotope({ filter: filterValue });
    });

    $(".filter-group li").click(function() {
        $(this).addClass("active").siblings().removeClass("active");
    });

    // button back to top
    $(window).scroll(function() {
        if ($(this).scrollTop() > 200) {
            $(".to-top").addClass("active");
        } else {
            $(".to-top").removeClass("active");
        }
    });

    // swiper events slide

    new Swiper(".events-slide", {
        spaceBetween: 100,
        speed: 700,
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            type: "bullets",
            clickable: true,
        },
    });

    // testimonials slide
    new Swiper(".testimonials-slide", {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 70,
        speed: 700,
        loop: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            316: {
                slidesPerView: 1,
                slidesPerGroup: 1,
            },
            480: {
                slidesPerView: 1,
                slidesPerGroup: 1,
                spaceBetween: 110,
            },
            768: {
                slidesPerView: 2,
                slidesPerGroup: 2,
            },
            1024: {
                slidesPerView: 3,
                slidesPerGroup: 3,
            },
        },

    });

    // lightbox
    const gallery = GLightbox({
        selector: ".gallery-lightbox",
    });

    // AOS
    window.addEventListener("load", () => {
        AOS.init({
            duration: 1000,
            easing: "ease-in-out",
            once: true,
            mirror: false,
        });
    });


    // navbar to top
    $navTop = $(".top");
    $mainNav = $(".navbar");

    if ($mainNav) {
        const scrollNavbar = function() {
            if (window.scrollY >= 150) {
                $mainNav.addClass("nav-to-top");
                if ($navTop) {
                    $navTop.addClass("top-to-top ");
                }
            } else {
                $mainNav.removeClass("nav-to-top");
                if ($navTop) {
                    $navTop.removeClass("top-to-top ");
                }
            }
        }

        window.addEventListener("scroll", scrollNavbar);
        onscroll(document, scrollNavbar)
    }

});

// const butttonToggler = document.querySelector(".toggler");
// const navbar = document.querySelector(".navbar");

// butttonToggler.onclick = function() {
//     navbar.classList.toggle("active");
// }
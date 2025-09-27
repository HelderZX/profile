console.log("main.js");

emailjs.init("7J_uLiMM8wD79jxHH");
const notyf = new Notyf();

$(document).on("submit", "#contact-form", function(event) {
    event.preventDefault();
    const $button = $(this).find("button[type=submit]");
    $button.prop("disabled", true);
    $button.html('<i class="fa-solid fa-spinner fa-spin"></i>');

    emailjs.sendForm("service_ysx6h4o", "template_izdqvki", this)
        .then(() => {
            notyf.success('Email enviado com sucesso!');

            $("#contact-form")[0].reset();
        }, (error) => {
            notyf.error('Erro ao enviar email: ' + JSON.stringify(error));
        })
        .finally(() => {
            $button.prop("disabled", false);
            $button.html('Enviar');
        });
});

$(document).on("click", ".card", (event) => {
    let $card = $(event.currentTarget)
    let target = $(event.currentTarget).attr("target")

    if ($card.hasClass("selected")) {
        $card.removeClass("selected");
        $(target).parent().slideUp("fast");
        return;
    }
    
    $('.card').removeClass("selected");
    $('.project').hide();

    $card.addClass("selected");

    $(target).parent().slideDown("fast", () => {
        if (window.innerWidth < 1024) {
            $('html').animate({
            scrollTop: $(target).offset().top
            });
        }
    });
});

$(document).on("click", ".image-side .btn-previous", (event) => {
    let $screens = $(event.currentTarget).parent().find(".screen");
    let $activeScreen = $(event.currentTarget).parent().find(".screen.active");
    let currentIndex = $screens.index($activeScreen);
    let previousIndex = (currentIndex - 1 + $screens.length) % $screens.length;

    $activeScreen.removeClass("active").fadeOut(100, () => {
        $screens.eq(previousIndex).css({opacity: 0, display: "block"}).addClass("active").animate({opacity: 1}, 100);
    });
});

$(document).on("click", ".image-side .btn-next", (event) => {
    let $screens = $(event.currentTarget).parent().find(".screen");
    let $activeScreen = $(event.currentTarget).parent().find(".screen.active");
    let currentIndex = $screens.index($activeScreen);
    let nextIndex = (currentIndex + 1) % $screens.length;

    $activeScreen.removeClass("active").fadeOut(100, () => {
        $screens.eq(nextIndex).css({opacity: 0, display: "block"}).addClass("active").animate({opacity: 1}, 100);
    });
});

function slideHabilities() {
    let $habilities = $(".habilities span");
    let currentIndex = 0;

    $habilities.hide();
    $habilities.eq(currentIndex).show();
    $habilities.eq(currentIndex).text($habilities.eq(currentIndex).attr("data-text"));

    function showNextHability() {
        $habilities.eq(currentIndex).fadeOut(() => {
            currentIndex = (currentIndex + 1) % $habilities.length;
            $habilities.eq(currentIndex).text($habilities.eq(currentIndex).attr("data-text"));
            $habilities.eq(currentIndex).fadeIn();
        });
    }

    setInterval(showNextHability, 3000);
}

slideHabilities();

$(window).on("scroll", () => {
    if ($(window).scrollTop() > $(window).height() - 300) {
        $(".nav").addClass("dark");
        $(".nav li a").addClass("text-dark-hover-animation");
        $(".nav li button").addClass("button-dark-hover-animation");
    } else {
        $(".nav").removeClass("dark");
        $(".nav li a").removeClass("text-dark-hover-animation");
        $(".nav li button").removeClass("button-dark-hover-animation");
    }

    if ($(window).scrollTop() > 50) {
        $(".slide-down").fadeOut();
    } else {
        if (window.innerWidth > 768) {
            $(".slide-down").fadeIn();
        }
    }
});

$(document).on("click", ".nav", function() {
    $(this).toggleClass("active");
});

$(document).on("click", (event) => {
    if (!$(event.target).closest(".nav").length) {
        $(".nav").removeClass("active");
    }
});

$(document).on("click", ".cards .arrow, .technologies .arrow", (event) => {
    let $cards = $(event.currentTarget).closest(".cards, .technologies");
    let scrollAmount = 250;
    if ($(event.currentTarget).hasClass("arrow-left")) {
        $cards.animate({ scrollLeft: "-=" + scrollAmount }, 300);
    } else {
        $cards.animate({ scrollLeft: "+=" + scrollAmount }, 300);
    }
});

$(document).on("click", ".nav li button", (event) => {
    const pdfPath = "src/pdf/Resume - Helder Andrade.pdf";
    window.open(pdfPath, '_blank');
});
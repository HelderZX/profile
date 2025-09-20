console.log("main.js");

$(document).on("click", ".card", (event) => {
    let $card = $(event.currentTarget)
    let target = $(event.currentTarget).attr("target")
    
    $('.card').removeClass("selected");
    $('.project').hide();

    $card.addClass("selected");

    $(target).parent().slideDown("fast", () => {
        $('html').animate({
            //scrollTop: $(target).offset().top
        });
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
            $habilities.eq(currentIndex).text("");

            $habilities.eq(currentIndex).fadeIn(() => {
                let text = $habilities.eq(currentIndex).attr("data-text");
                let i = 0;

                function type() {
                    if (i < text.length) {
                        $habilities.eq(currentIndex).append(text.charAt(i));
                        i++;
                        setTimeout(type, 100);
                    }
                }

                type();
            });
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

$(document).on("click", ".navbar-items .logo", (event) => {
    $(".navbar-items .logo").toggleClass("active");
});

$(document).on("click", (event) => {
    if (!$(event.target).closest(".navbar-items").length) {
        $(".navbar-items .logo").removeClass("active");
    }
});

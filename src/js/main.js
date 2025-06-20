console.log("main.js");

$(document).on("click", ".card", (event) => {
    let $card = $(event.currentTarget)
    let target = $(event.currentTarget).attr("target")
    
    $('.card').removeClass("selected");
    $('.project').slideUp();

    $card.addClass("selected");

    $(target).parent().slideDown("fast", () => {
        $('html, body').animate({
            scrollTop: $(target).offset().top
        });
    });
});

function slideHabilities() {
    let habilities = $(".habilities span");
    let currentIndex = 0;

    function showHability(index) {
        habilities.fadeOut(300, function() {
            habilities.hide();
            $(habilities[index]).fadeIn(300);
        });
    }

    // Hide all except the first
    habilities.hide();
    $(habilities[0]).show();

    setInterval(() => {
        currentIndex = (currentIndex + 1) % habilities.length;
        showHability(currentIndex);
    }, 3000);
}

slideHabilities();

$(window).on("scroll", () => {
    if ($(window).scrollTop() > $(window).height() - 1) {
        $(".nav").addClass("dark");
    } else {
        $(".nav").removeClass("dark");
    }

    if ($(window).scrollTop() > 50) {
        $(".slide-down").fadeOut();
    } else {
        $(".slide-down").fadeIn();
    }
});
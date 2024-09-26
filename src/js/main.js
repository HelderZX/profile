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
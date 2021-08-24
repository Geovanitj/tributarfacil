
$(function() {
    $(window).on("scroll", function() {
        if ($(window).scrollTop() > 50) {
            $(".header").addClass("hearderMudaCor");
        } else {
            $(".header").removeClass("hearderMudaCor")
        }
    })
})
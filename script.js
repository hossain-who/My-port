$(document).ready(function (){

    // Smooth scroll effect
    $("a[href^='#']").on("click", function(e){
        e.preventDefault();
        let target = $($(this).attr("href"));
        if (target.length) {
            $("html, body").animate({
                scrollTop: target.offset().top
            }, 800);
        }
    });

    // Fade-in skills one by one
    $(".skills-grid .skill").hide().each(function(i){
        $(this).delay(300*i).fadeIn(600);
    });

    // Change button text on submit
    $("button[type='submit']").click(function(e){
        e.preventDefault();
        $(this).text("Message Sent!");
    });

    // Scroll reveal animation for sections
    function revealOnScroll() {
        $(".about-me, .skills, .contact").each(function(){
            let sectionTop = $(this).offset().top;
            let windowBottom = $(window).scrollTop() + $(window).height();

            if (windowBottom > sectionTop + 100) { 
                if (!$(this).hasClass("visible")) {
                    $(this).addClass("visible").hide().fadeIn(1000);
                }
            }
        });
    }

    // Run on load + scroll
    revealOnScroll();
    $(window).on("scroll", revealOnScroll);

});

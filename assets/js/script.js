$(document).ready(function() {
    $("#nav > li").hover(
        function() {
            $(this).addClass("hov");
        }, function() {
            $(this).removeClass("hov");
        }
    )

    function scroll(a) {
        $('html, body').animate({
            scrollTop: a
        }, 'slow')
    }

    $("#home").click(function(){
        scroll(0);
    })

    $("#aboutMe").click(function(){
        scroll($("#about").offset().top)
    })

    $("#contactMe").click(function(){
        scroll($("#contact").offset().top)
    })

    $(".box").hover(
        function() {
            $(this).removeClass("box");
        }, function() {
            $(this).addClass("box");
        }
    )

    $(".skillImg").hover(
        function() {
            $(this).find('.skill-cont').fadeIn();
        }, function() {
            $(this).find('.skill-cont').fadeOut();
        }
    )
})

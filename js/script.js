$(function(){
    if (window.matchMedia('(min-width: 960px)').matches) {
        var fvPos= $("#about").offset().top - 130;

        $(window).scroll(function(){
            if($(window).scrollTop()> fvPos){
                $("#header").addClass("scrollbg");
            }
        else{
            $("#header").removeClass("scrollbg");
        }
            
        });
    }
});

$(function(){
    if (window.matchMedia('(min-width: 640px) and (max-width:959px)').matches) {
        var fvPos= $("#about").offset().top;

        $(window).scroll(function(){
            if($(window).scrollTop()> fvPos){
                $("#header").addClass("scrollbg");
            }
        else{
            $("#header").removeClass("scrollbg");
        }
            
        });
    }
});

$(function(){
    if (window.matchMedia('(max-width: 639px)').matches) {
        var fvPos= $("#about").offset();

        $(window).scroll(function(){
            if($(window).scrollTop()> fvPos){
                $("#header").addClass("scrollbg");
            }
        else{
            $("#header").removeClass("scrollbg");
        }
            
        });
    }
});

$(function(){
    if (window.matchMedia('(max-width: 639px)').matches) {
        $("#header button").click(function(){
            $("#header span").toggleClass('menu--isOpen');
            $("#header ul").toggleClass('is-active');
        });
    }
});

$(function(){
    if (window.matchMedia('(max-width: 639px) and (max-width:959px)').matches) {
        $("#header_single button").click(function(){
            $("#header_single span").toggleClass('menu--isOpen');
            $("#header_single ul").toggleClass('is-active');
        });
    }
});

$(function(){
    if (window.matchMedia('(max-width: 639px)').matches) {
        $(".works ul").slick({
            autoplay: true,
            autoplaySpeed: 3000,
            infinite: true,
            dots: true,
            speed: 500,
            arrows: false,
        });
    }
});

$(function(){
    if (window.matchMedia('(max-width: 639px)').matches) {
        $(".about_page .skillwrapper ul").slick({
            autoplay: true,
            autoplaySpeed: 3000,
            infinite: true,
            dots: true,
            speed: 500,
            arrows: false,
        });
    }
});

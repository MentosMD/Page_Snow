$(function(){
    $(window).scroll(function(){
        if($(this).scrollTop() >= 100){
            $('.header .header-top').css("background", "white");
            $('.header .header-top .menu ul li a').css("color", "#5F5F5F");
            $('.header .header-top .logo-brand .link-logo #img2').css({
                display: "inline-block"
            });
            $('.header .header-top .logo-brand .link-logo #img1').css("display", "none");
        }
        else if($(this).scrollTop() <= 100) {
            $('.header .header-top').css("background", "none");
            $('.header .header-top .menu ul li a').css("color", "#bfbfbf");
            $('.header .header-top .logo-brand .link-logo #img2').css("display", "none");
            $('.header .header-top .logo-brand .link-logo #img1').css("display", "inline-block");
        }
    });
    
    
    $(".btn_scroll_down").bind('click', function(){
         var id = $(this).attr('href'),
             top = $(id).offset().top;
         $("body, html").animate({ scrollTop: top}, 500);
    });
    
    
    $("#btn_menu_sm").bind('click', function(){
         $("body").css("overflow", "hidden");
         $(".navbar-full-menu-sm").css("display", "block");
         
    });
    
    $("#cross").bind('click', function(){
         $("body").css("overflow", "visible");
         $(".navbar-full-menu-sm").css("display", "none");
    });
    
    
    
    
    //Carousel text
    var swiper = new Swiper('.carousel-text #swiper-container-1', {
        pagination: '.carousel-text .swiper-pagination',
        paginationClickable: true,
        grabCursor: true
    });
    
     //Carousel partner
     var swiper2 = new Swiper('.carousel_multi_partner #swiper-container-2', {
        pagination: '.carousel_multi_partner .swiper-pagination',
        grabCursor: true,
        slidesPerView: 5,
        paginationClickable: true,
        spaceBetween: 50,
        breakpoints: {
            320:{
                slidesPerView: 1,
                spaceBetween: 10,
            },
            480:{
                slidesPerView: 2,
                spaceBetween: 20,
            },
            640:{
                slidesPerView: 3,
                spaceBetween: 30,
            }
        }
    });
    
    
    
    var swiper3 = new Swiper('.carousel_blog #swiper-container-3', {
        pagination: '.carousel_blog .swiper-pagination',
        paginationClickable: true,
        grabCursor: true,
        slidesPerView: 3,
        spaceBetween: 30,
        breakpoints: {
            320:{
                slidesPerView: 1,
                spaceBetween: 10,
            },
            480:{
                slidesPerView: 2,
                spaceBetween: 20,
            },
            640:{
                slidesPerView: 3,
                spaceBetween: 30,
            }
        }
    });
    
});
$(function(){
    //AOS.init();
    new PureCounter({
        selector: ".counter", 
    });

    $("#portfolio .btn").click(function(){
        if( $(this).text()=="All" ){
            $("#portfolio .btn").removeClass("active");
            $(this).addClass("active");
            $(".work").fadeIn();
        }
        else if( $(this).text()=="Website" ){
            $("#portfolio .btn").removeClass("active");
            $(this).addClass("active");
            $(".work").fadeOut(0);
            $(".website").fadeIn();
        }
        else if( $(this).text()=="Branding" ){
            $("#portfolio .btn").removeClass("active");
            $(this).addClass("active");
            $(".work").fadeOut(0);
            $(".branding").fadeIn();
        }
    });

    $(".accordion a").click(function(e){
        e.preventDefault();
        if( $(this).hasClass("active")==false ){
            $(".accordion a").removeClass("active");
            $(this).addClass("active");
            $(".accordion p").slideUp();
            $(this).next("p") .slideDown();
        }
    });


    $(".signup").click(function(){
        const form=$(".formdata").html();
        $("body").append(`<div class="overlay"></div>`);
        $("body").append(`<div class="popup"></div>`);
        $(".popup").append(form);
        $(".popup input:eq(0)").focus();
        $(".close").click(function(){
            $(".popup, .overlay").remove(); 
        });
        $(window).keyup(function(e){
            if(e.which==27){ $(".popup, .overlay").remove()  }
        })

    });


   
    // $('#services .col-4').children('h2').remove()
    $(".banner button, .banner a").click(function(e){
        e.preventDefault();
        //$(".banner p").css({"margin-left":"200px"})
        //$(".banner p").animate({"margin-left":"200px"},1000);
        $("body").append(`<div class="overlay"></div>`);
        $("body").append(`<div class="popup"></div>`);
        $(".popup").append(`<iframe hidden width="560" height="0" src="https://www.youtube.com/embed/tQPAwBt_v2Q?si=WX6b59hfAHQQq9o5" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`);
        $(".popup iframe").css({'display':'inline'});
        $(".popup iframe").animate({height:'315px'});

        $(window).keyup(function(e){
            if(e.which==27){
                $(".popup, .overlay").remove()
            }
        })
    });


    $("footer button").click(function(){
        $("html,body").animate({scrollTop:0})
    });

    //$("h1:empty")


    $(".reviews").bxSlider({
        controls:false,
        auto:true,
        autoHover:true
    });

   

    $(window).scroll(function(){
        /* if($(this).scrollTop()>=200){
            $("header").css({background:"#ca3c3c"})
        }
        else{
            $("header").css({background:"#000"})
        } */
    });

    $(".menu").click(function(){
        $(this).toggleClass("active");
        $(".collapse").slideToggle()
    });

    if( screen.width<767 ){
        $(".collapse a").click(function(){ 
            $(".collapse").slideUp();
            $(".menu").removeClass("active");
        })
    }

});
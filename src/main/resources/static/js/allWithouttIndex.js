$(document).ready(function () {
    
    var posY = $(window).scrollTop()
    showContent();
   
    

    var showView = window.matchMedia("(min-width: 987)");

    showView.addListener(function(){
        if(showView.matches){
            showContent()
        }
    });
    
    
    function showContent(){
    if(window.innerWidth > 986){
        
        $(".about").css("display", "none");
        $("#reason p").css("display", "none");
        $(".partners img").css("display", "none");
        
        $(".slideshow").css("display", "none");
        var index = 0;
    $(".slideshow").eq(index).fadeIn();
    
    setInterval(function () {
        $(".needhelp div a").toggleClass("blink");
    }, 1200);


    $(window).on("scroll", function () {
        posY = $(window).scrollTop();
    
        if (posY >= 300){
            $(".about").fadeIn(300).css("display", "flex");
        }
        if(posY >= 1000){
            $("#reason p").slideDown().css("display", "flex");
        }
        if(posY >= 1200){
            $("#map").addClass("slide");
        }
        if(posY >= 1650){
            $(".partners img").eq(0).fadeIn(1500);
            for (let i = 1; i < 4; i++){
                setTimeout(function () {
                    $(".partners img").eq(i).fadeIn(1000);
                }, 700 * i);
            }
        }
        })
    }
    
    else{
        
        setTimeout(function(){
        $(".about").fadeIn(300).css("display", "flex");
        }, 1100);
        setTimeout(function(){
        $("#reason p").slideDown().css("display", "flex");
        }, 1500);
        
        $("#map").addClass("slide");

        setInterval(function () {
        $(".needhelp div a").toggleClass("blink");
    }, 1200);
        
        for (let i = 0; i < 4; i++){
            setTimeout(function () {
            $(".partners img").eq(i).fadeIn(1000);
            }, 1500 * i);
            }
        
        
    }
    }
    

})